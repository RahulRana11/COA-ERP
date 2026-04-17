import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegistrationFormValues, registrationSchema } from "@/lib/validations/registrationEnrolment";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const steps = [
    "Personal Details",
    "Contact Details",
    "Academic Qualifications",
    "Document Uploads",
    "Review & Declaration"
];

export default function ArchitectRegistrationForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, control, watch, trigger, setValue, formState: { errors } } = useForm<RegistrationFormValues>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            isPermSame: false,
            nationality: "Indian",
            commCountry: "India",
            permCountry: "India",
            intermediateType: "12th"
        },
        mode: "onTouched"
    });

    const isPermSame = watch("isPermSame");
    const interType = watch("intermediateType");
    const formValues = watch();

    useEffect(() => {
        if (isPermSame) {
            setValue("permAddressLine1", formValues.commAddressLine1);
            setValue("permAddressLine2", formValues.commAddressLine2);
            setValue("permCountry", formValues.commCountry);
            setValue("permState", formValues.commState);
            setValue("permDistrict", formValues.commDistrict);
            setValue("permCity", formValues.commCity);
            setValue("permPincode", formValues.commPincode);
        }
    }, [
        isPermSame,
        formValues.commAddressLine1,
        formValues.commAddressLine2,
        formValues.commCountry,
        formValues.commState,
        formValues.commDistrict,
        formValues.commCity,
        formValues.commPincode,
        setValue
    ]);

    const validateStep = async (stepIndex: number) => {
        let fieldsToValidate: string[] = [];
        if (stepIndex === 0) fieldsToValidate = ["enrolmentNo", "title", "firstName", "lastName", "fatherName", "motherName", "dob", "gender", "aadhaarNo"];
        if (stepIndex === 1) fieldsToValidate = ["email", "mobile", "commAddressLine1", "commCountry", "commState", "commDistrict", "commCity", "commPincode", ...(isPermSame ? [] : ["permAddressLine1", "permCountry", "permState", "permDistrict", "permCity", "permPincode"])];
        if (stepIndex === 2) fieldsToValidate = ["tenthBoard", "tenthCollege", "tenthYear", "tenthMarks", "intermediateType", "intermediateBoard", "intermediateCollege", "intermediateYear", "intermediateMarks", "barchUniversity", "barchCollege", "barchYear", "barchMarks"];
        if (stepIndex === 3) fieldsToValidate = ["docTenth", "docIntermediate", "docBarch", "docPhoto", "docSignature"];
        // Step 5 does declaration check directly at onSubmit

        // @ts-ignore
        return await trigger(fieldsToValidate);
    };

    const nextStep = async () => {
        const isStepValid = await validateStep(currentStep);
        if (isStepValid) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentStep((prev) => prev + 1);
        } else {
            toast.error("Please fill in all required fields correctly.");
        }
    };

    const prevStep = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentStep((prev) => prev - 1);
    };

    const onSubmit = async (data: RegistrationFormValues) => {
        if (!data.declaration) {
            toast.error("You must accept the declaration to proceed.");
            return;
        }

        setIsSubmitting(true);

        // Simulate API Call for Mock Submission
        setTimeout(() => {
            setIsSubmitting(false);
            const appRef = `APP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
            toast.success(`Application Submitted Successfully. Ref: ${appRef}`);
            navigate("/architect/dashboard");
        }, 2000);
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-semibold tracking-tight mb-2">Architect Registration</h1>
                <p className="text-muted-foreground">Apply for registration with Enrolment Number.</p>

                {/* Progress Tracker */}
                <div className="hidden md:flex justify-between mt-8 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-full before:h-0.5 before:bg-muted before:z-0">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center bg-background px-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors
                ${idx < currentStep ? 'bg-primary text-primary-foreground border-primary' :
                                    idx === currentStep ? 'border-primary text-primary bg-background' :
                                        'bg-background text-muted-foreground border-muted'}`}>
                                {idx + 1}
                            </div>
                            <span className={`text-xs mt-3 text-center w-20 font-medium ${idx <= currentStep ? 'text-primary' : 'text-muted-foreground'}`}>{step}</span>
                        </div>
                    ))}
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className="shadow-sm border-muted">
                    <CardHeader>
                        <CardTitle>{steps[currentStep]}</CardTitle>
                        <CardDescription>Step {currentStep + 1} of {steps.length}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">

                        {/* --- STEP 1: Personal Details --- */}
                        {currentStep === 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="enrolmentNo">Enrolment Number *</Label>
                                    <Input id="enrolmentNo" placeholder="E.g. REG-12345" {...register("enrolmentNo")} />
                                    {errors.enrolmentNo && <p className="text-destructive text-sm mt-1">{errors.enrolmentNo.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="title">Title *</Label>
                                    <Controller name="title" control={control} render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger><SelectValue placeholder="Select Title" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Mr">Mr.</SelectItem>
                                                <SelectItem value="Ms">Ms.</SelectItem>
                                                <SelectItem value="Mrs">Mrs.</SelectItem>
                                                <SelectItem value="Dr">Dr.</SelectItem>
                                                <SelectItem value="Prof">Prof.</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )} />
                                    {errors.title && <p className="text-destructive text-sm mt-1">{errors.title.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name *</Label>
                                    <Input id="firstName" {...register("firstName")} />
                                    {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="middleName">Middle Name</Label>
                                    <Input id="middleName" {...register("middleName")} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name *</Label>
                                    <Input id="lastName" {...register("lastName")} />
                                    {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="fatherName">Father's Name *</Label>
                                    <Input id="fatherName" {...register("fatherName")} />
                                    {errors.fatherName && <p className="text-destructive text-sm mt-1">{errors.fatherName.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="motherName">Mother's Name *</Label>
                                    <Input id="motherName" {...register("motherName")} />
                                    {errors.motherName && <p className="text-destructive text-sm mt-1">{errors.motherName.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="dob">Date of Birth *</Label>
                                    <Input id="dob" type="date" max={new Date().toISOString().split("T")[0]} {...register("dob")} />
                                    {errors.dob && <p className="text-destructive text-sm mt-1">{errors.dob.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="gender">Gender *</Label>
                                    <Controller name="gender" control={control} render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger><SelectValue placeholder="Select Gender" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Male">Male</SelectItem>
                                                <SelectItem value="Female">Female</SelectItem>
                                                <SelectItem value="Other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )} />
                                    {errors.gender && <p className="text-destructive text-sm mt-1">{errors.gender.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="nationality">Nationality *</Label>
                                    <Input id="nationality" readOnly value="Indian" className="bg-muted" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="aadhaarNo">Aadhaar Number *</Label>
                                    <Input id="aadhaarNo" maxLength={12} placeholder="12 Digit Aadhaar" {...register("aadhaarNo")} />
                                    {errors.aadhaarNo && <p className="text-destructive text-sm mt-1">{errors.aadhaarNo.message}</p>}
                                </div>
                            </div>
                        )}

                        {/* --- STEP 2: Contact Details --- */}
                        {currentStep === 1 && (
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address *</Label>
                                        <Input id="email" type="email" placeholder="email@example.com" {...register("email")} />
                                        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="mobile">Mobile Number *</Label>
                                        <Input id="mobile" maxLength={10} placeholder="10 Digit Mobile" {...register("mobile")} />
                                        {errors.mobile && <p className="text-destructive text-sm mt-1">{errors.mobile.message}</p>}
                                    </div>
                                </div>

                                <div className="border border-muted rounded-md p-4">
                                    <h3 className="font-semibold text-lg mb-4">Communication Address</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2 md:col-span-2">
                                            <Label htmlFor="commAddressLine1">Address Line 1 *</Label>
                                            <Input id="commAddressLine1" {...register("commAddressLine1")} />
                                            {errors.commAddressLine1 && <p className="text-destructive text-sm mt-1">{errors.commAddressLine1.message}</p>}
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <Label htmlFor="commAddressLine2">Address Line 2</Label>
                                            <Input id="commAddressLine2" {...register("commAddressLine2")} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="commCountry">Country *</Label>
                                            <Input id="commCountry" readOnly value="India" className="bg-muted" {...register("commCountry")} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="commState">State *</Label>
                                            <Input id="commState" {...register("commState")} />
                                            {errors.commState && <p className="text-destructive text-sm mt-1">{errors.commState.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="commDistrict">District *</Label>
                                            <Input id="commDistrict" {...register("commDistrict")} />
                                            {errors.commDistrict && <p className="text-destructive text-sm mt-1">{errors.commDistrict.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="commCity">City *</Label>
                                            <Input id="commCity" {...register("commCity")} />
                                            {errors.commCity && <p className="text-destructive text-sm mt-1">{errors.commCity.message}</p>}
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <Label htmlFor="commPincode">Pincode *</Label>
                                            <Input id="commPincode" maxLength={6} {...register("commPincode")} />
                                            {errors.commPincode && <p className="text-destructive text-sm mt-1">{errors.commPincode.message}</p>}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Controller name="isPermSame" control={control} render={({ field }) => (
                                        <Checkbox id="isPermSame" checked={field.value} onCheckedChange={field.onChange} />
                                    )} />
                                    <Label htmlFor="isPermSame" className="font-medium">Permanent Address is the same as Communication Address</Label>
                                </div>

                                {!isPermSame && (
                                    <div className="border border-muted rounded-md p-4">
                                        <h3 className="font-semibold text-lg mb-4">Permanent Address</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2 md:col-span-2">
                                                <Label htmlFor="permAddressLine1">Address Line 1 *</Label>
                                                <Input id="permAddressLine1" {...register("permAddressLine1")} />
                                                {errors.permAddressLine1 && <p className="text-destructive text-sm mt-1">{errors.permAddressLine1.message}</p>}
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <Label htmlFor="permAddressLine2">Address Line 2</Label>
                                                <Input id="permAddressLine2" {...register("permAddressLine2")} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="permCountry">Country *</Label>
                                                <Input id="permCountry" readOnly value="India" className="bg-muted" {...register("permCountry")} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="permState">State *</Label>
                                                <Input id="permState" {...register("permState")} />
                                                {errors.permState && <p className="text-destructive text-sm mt-1">{errors.permState.message}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="permDistrict">District *</Label>
                                                <Input id="permDistrict" {...register("permDistrict")} />
                                                {errors.permDistrict && <p className="text-destructive text-sm mt-1">{errors.permDistrict.message}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="permCity">City *</Label>
                                                <Input id="permCity" {...register("permCity")} />
                                                {errors.permCity && <p className="text-destructive text-sm mt-1">{errors.permCity.message}</p>}
                                            </div>
                                            <div className="space-y-2 md:col-span-2">
                                                <Label htmlFor="permPincode">Pincode *</Label>
                                                <Input id="permPincode" maxLength={6} {...register("permPincode")} />
                                                {errors.permPincode && <p className="text-destructive text-sm mt-1">{errors.permPincode.message}</p>}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* --- STEP 3: Academic Qualifications --- */}
                        {currentStep === 2 && (
                            <div className="space-y-8">
                                {/* 10th Standard */}
                                <div>
                                    <h3 className="font-semibold text-lg border-b pb-2 mb-4">10th Standard</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>Board/University *</Label>
                                            <Input placeholder="E.g. CBSE" {...register("tenthBoard")} />
                                            {errors.tenthBoard && <p className="text-destructive text-sm mt-1">{errors.tenthBoard.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Institution/School *</Label>
                                            <Input placeholder="School Name" {...register("tenthCollege")} />
                                            {errors.tenthCollege && <p className="text-destructive text-sm mt-1">{errors.tenthCollege.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Passing Year *</Label>
                                            <Input type="number" {...register("tenthYear")} />
                                            {errors.tenthYear && <p className="text-destructive text-sm mt-1">{errors.tenthYear.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Marks (CGPA or %) *</Label>
                                            <Input type="text" {...register("tenthMarks")} />
                                            {errors.tenthMarks && <p className="text-destructive text-sm mt-1">{errors.tenthMarks.message}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* 12th / Diploma */}
                                <div>
                                    <div className="flex justify-between items-center border-b pb-2 mb-4">
                                        <h3 className="font-semibold text-lg">12th Standard / Diploma</h3>
                                        <Controller name="intermediateType" control={control} render={({ field }) => (
                                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="12th" id="r1" />
                                                    <Label htmlFor="r1">12th</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="Diploma" id="r2" />
                                                    <Label htmlFor="r2">Diploma</Label>
                                                </div>
                                            </RadioGroup>
                                        )} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>Board/University *</Label>
                                            <Input {...register("intermediateBoard")} />
                                            {errors.intermediateBoard && <p className="text-destructive text-sm mt-1">{errors.intermediateBoard.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Institution/College *</Label>
                                            <Input {...register("intermediateCollege")} />
                                            {errors.intermediateCollege && <p className="text-destructive text-sm mt-1">{errors.intermediateCollege.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Passing Year *</Label>
                                            <Input type="number" {...register("intermediateYear")} />
                                            {errors.intermediateYear && <p className="text-destructive text-sm mt-1">{errors.intermediateYear.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Marks (CGPA or %) *</Label>
                                            <Input type="text" {...register("intermediateMarks")} />
                                            {errors.intermediateMarks && <p className="text-destructive text-sm mt-1">{errors.intermediateMarks.message}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* B.Arch */}
                                <div>
                                    <h3 className="font-semibold text-lg border-b pb-2 mb-4">B.Arch Qualification</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>University Name *</Label>
                                            <Input {...register("barchUniversity")} />
                                            {errors.barchUniversity && <p className="text-destructive text-sm mt-1">{errors.barchUniversity.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label>College Name *</Label>
                                            <Input {...register("barchCollege")} />
                                            {errors.barchCollege && <p className="text-destructive text-sm mt-1">{errors.barchCollege.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Passing Year *</Label>
                                            <Input type="number" {...register("barchYear")} />
                                            {errors.barchYear && <p className="text-destructive text-sm mt-1">{errors.barchYear.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Marks (CGPA or %) *</Label>
                                            <Input type="text" {...register("barchMarks")} />
                                            {errors.barchMarks && <p className="text-destructive text-sm mt-1">{errors.barchMarks.message}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* --- STEP 4: Document Uploads --- */}
                        {currentStep === 3 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>Passport Size Photograph *</Label>
                                    <Input type="file" accept="image/jpeg,image/png" {...register("docPhoto")} />
                                    <p className="text-xs text-muted-foreground">Max 500KB (JPG/PNG)</p>
                                    {errors.docPhoto && <p className="text-destructive text-sm mt-1">{errors.docPhoto.message as string}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label>Scanned Signature *</Label>
                                    <Input type="file" accept="image/jpeg,image/png" {...register("docSignature")} />
                                    <p className="text-xs text-muted-foreground">Max 200KB (JPG/PNG)</p>
                                    {errors.docSignature && <p className="text-destructive text-sm mt-1">{errors.docSignature.message as string}</p>}
                                </div>

                                <div className="space-y-2 md:col-span-2 pt-4 border-t">
                                    <Label>10th Standard Marksheet / Certificate *</Label>
                                    <Input type="file" accept=".pdf,image/*" {...register("docTenth")} />
                                    <p className="text-xs text-muted-foreground">Max 2MB (PDF/JPG/PNG)</p>
                                    {errors.docTenth && <p className="text-destructive text-sm mt-1">{errors.docTenth.message as string}</p>}
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <Label>{interType} Marksheet / Certificate *</Label>
                                    <Input type="file" accept=".pdf,image/*" {...register("docIntermediate")} />
                                    <p className="text-xs text-muted-foreground">Max 2MB (PDF/JPG/PNG)</p>
                                    {errors.docIntermediate && <p className="text-destructive text-sm mt-1">{errors.docIntermediate.message as string}</p>}
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <Label>B.Arch Degree / Provisional Certificate *</Label>
                                    <Input type="file" accept=".pdf,image/*" {...register("docBarch")} />
                                    <p className="text-xs text-muted-foreground">Max 2MB (PDF/JPG/PNG)</p>
                                    {errors.docBarch && <p className="text-destructive text-sm mt-1">{errors.docBarch.message as string}</p>}
                                </div>
                            </div>
                        )}

                        {/* --- STEP 5: Review & Declaration --- */}
                        {currentStep === 4 && (
                            <div className="space-y-6">
                                <div className="bg-muted/50 p-6 rounded-md">
                                    <h3 className="font-semibold text-lg mb-4">Summary of Details</h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div><span className="text-muted-foreground">Enrolment:</span> {formValues.enrolmentNo}</div>
                                        <div><span className="text-muted-foreground">Name:</span> {formValues.title} {formValues.firstName} {formValues.lastName}</div>
                                        <div><span className="text-muted-foreground">Email:</span> {formValues.email}</div>
                                        <div><span className="text-muted-foreground">Phone:</span> {formValues.mobile}</div>
                                        <div><span className="text-muted-foreground">Aadhaar:</span> {formValues.aadhaarNo}</div>
                                        <div><span className="text-muted-foreground">B.Arch College:</span> {formValues.barchCollege}</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3 p-4 border border-foreground/10 rounded-md">
                                    <Controller name="declaration" control={control} render={({ field }) => (
                                        <Checkbox id="declaration" checked={field.value} onCheckedChange={field.onChange} className="mt-1" />
                                    )} />
                                    <div className="leading-tight">
                                        <Label htmlFor="declaration" className="font-semibold text-base">Self-Declaration</Label>
                                        <p className="text-muted-foreground text-sm mt-1">
                                            I hereby declare that the information provided in this application is true and correct to the best of my knowledge. I understand that any false information may lead to the cancellation of my registration with the Council of Architecture.
                                        </p>
                                        {errors.declaration && <p className="text-destructive text-sm mt-1">{errors.declaration.message}</p>}
                                    </div>
                                </div>
                            </div>
                        )}

                    </CardContent>
                    <CardFooter className="flex justify-between border-t p-6">
                        <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 0 || isSubmitting}>
                            Back
                        </Button>

                        {currentStep < steps.length - 1 ? (
                            <Button type="button" onClick={nextStep}>
                                Next Step
                            </Button>
                        ) : (
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
}
