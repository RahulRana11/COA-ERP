import * as z from "zod";

export const addOfficialSchema = z.object({
    fullName: z.string().min(2, "Full Name must be at least 2 characters"),
    designation: z.string().min(2, "Designation is required"),
    department: z.string().min(2, "Department is required"),
    emailAddress: z.string().email("Invalid email address"),
    mobileNumber: z.string().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit Indian phone number"),
    role: z.enum(["Super Admin", "Clerk", "HOD", "Registrar", "President"], {
        required_error: "Role selection is required",
    }),
});

export type AddOfficialFormValues = z.infer<typeof addOfficialSchema>;
