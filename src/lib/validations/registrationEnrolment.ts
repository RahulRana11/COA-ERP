import * as z from "zod";

const MAX_PHOTO_SIZE = 500 * 1024; // 500KB
const MAX_SIG_SIZE = 200 * 1024; // 200KB
const MAX_DOC_SIZE = 2 * 1024 * 1024; // 2MB

const checkFileSize = (maxSize: number) => {
    return (files: any) => {
        if (!files || files.length === 0) return true;
        if (files[0] instanceof File) {
            return files[0].size <= maxSize;
        }
        return true;
    };
};

export const registrationSchema = z.object({
    // --- Step 1: Personal Details ---
    enrolmentNo: z.string().min(1, "Enrolment No is required"),
    title: z.enum(["Mr", "Ms", "Mrs", "Dr", "Prof"]),
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    middleName: z.string().optional(),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    fatherName: z.string().min(2, "Father's name is required"),
    motherName: z.string().min(2, "Mother's name is required"),
    dob: z.string().refine((val) => {
        const minAgeDate = new Date();
        minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
        return new Date(val) <= minAgeDate;
    }, "You must be at least 18 years old"),
    gender: z.enum(["Male", "Female", "Other"]),
    nationality: z.string().min(2, "Nationality is required").default("Indian"),
    aadhaarNo: z.string().regex(/^\d{12}$/, "Must be exactly 12 digits"),

    // --- Step 2: Contact Details ---
    email: z.string().email("Invalid email address"),
    mobile: z.string().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit Indian phone number"),

    commAddressLine1: z.string().min(5, "Address Line 1 is required"),
    commAddressLine2: z.string().optional(),
    commCountry: z.string().min(2, "Country is required").default("India"),
    commState: z.string().min(2, "State is required"),
    commDistrict: z.string().min(2, "District is required"),
    commCity: z.string().min(2, "City is required"),
    commPincode: z.string().regex(/^\d{6}$/, "Must be a 6-digit Pincode"),

    isPermSame: z.boolean().default(false),

    permAddressLine1: z.string().min(5, "Address Line 1 is required").optional(),
    permAddressLine2: z.string().optional(),
    permCountry: z.string().min(2, "Country is required").default("India"),
    permState: z.string().min(2, "State is required").optional(),
    permDistrict: z.string().min(2, "District is required").optional(),
    permCity: z.string().min(2, "City is required").optional(),
    permPincode: z.string().regex(/^\d{6}$/, "Must be a 6-digit Pincode").optional().or(z.literal("")),

    // --- Step 3: Academic Qualifications ---
    tenthBoard: z.string().min(2, "Board name is required"),
    tenthCollege: z.string().min(2, "Institution/School name is required"),
    tenthYear: z.coerce.number().int().min(1950).max(new Date().getFullYear()),
    tenthMarks: z.string().min(1, "Marks/Percentage is required"),

    intermediateType: z.enum(["12th", "Diploma"]),
    intermediateBoard: z.string().min(2, "Board name is required"),
    intermediateCollege: z.string().min(2, "Institution/College name is required"),
    intermediateYear: z.coerce.number().int().min(1950).max(new Date().getFullYear()),
    intermediateMarks: z.string().min(1, "Marks/Percentage is required"),

    barchUniversity: z.string().min(2, "University name is required"),
    barchCollege: z.string().min(2, "College name is required"),
    barchYear: z.coerce.number().int().min(1950).max(new Date().getFullYear()),
    barchMarks: z.string().min(1, "Marks/CGPA is required"),

    // --- Step 4: Documents (File Upload Mocks) ---
    docTenth: z.any()
        .refine((files) => files?.length === 1, "10th certificate is required")
        .refine(checkFileSize(MAX_DOC_SIZE), "Max file size is 2MB"),
    docIntermediate: z.any()
        .refine((files) => files?.length === 1, "12th/Diploma certificate is required")
        .refine(checkFileSize(MAX_DOC_SIZE), "Max file size is 2MB"),
    docBarch: z.any()
        .refine((files) => files?.length === 1, "B.Arch certificate is required")
        .refine(checkFileSize(MAX_DOC_SIZE), "Max file size is 2MB"),
    docPhoto: z.any()
        .refine((files) => files?.length === 1, "Passport photo is required")
        .refine(checkFileSize(MAX_PHOTO_SIZE), "Max file size is 500KB"),
    docSignature: z.any()
        .refine((files) => files?.length === 1, "Signature is required")
        .refine(checkFileSize(MAX_SIG_SIZE), "Max file size is 200KB"),

    // --- Step 5: Review & Declaration ---
    declaration: z.literal(true, {
        errorMap: () => ({ message: "You must accept the declaration to submit" }),
    }),

}).superRefine((data, ctx) => {
    if (!data.isPermSame) {
        if (!data.permAddressLine1) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["permAddressLine1"] });
        if (!data.permState) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["permState"] });
        if (!data.permDistrict) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["permDistrict"] });
        if (!data.permCity) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required", path: ["permCity"] });
        if (!data.permPincode || data.permPincode === "") ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Required 6-digit Pincode", path: ["permPincode"] });
    }
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
