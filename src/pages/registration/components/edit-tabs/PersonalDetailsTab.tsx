import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir", "Ladakh",
    "Puducherry", "Chandigarh", "Andaman & Nicobar Islands", "Lakshadweep", "Other"
];

interface AddressCardProps {
    title: string;
    prefix: string;
    children?: React.ReactNode;
}

function AddressFields({ prefix }: { prefix: string }) {
    const { control } = useFormContext();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FormField control={control} name={`${prefix}_house`} render={({ field }) => (
                <FormItem>
                    <FormLabel>House / Flat Number</FormLabel>
                    <FormControl><Input placeholder="e.g. Flat 4B, Tower C" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={control} name={`${prefix}_locality`} render={({ field }) => (
                <FormItem>
                    <FormLabel>Locality / Sector</FormLabel>
                    <FormControl><Input placeholder="Area, Sector, Colony" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={control} name={`${prefix}_city`} render={({ field }) => (
                <FormItem>
                    <FormLabel>City / Town</FormLabel>
                    <FormControl><Input placeholder="City or Town" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={control} name={`${prefix}_pincode`} render={({ field }) => (
                <FormItem>
                    <FormLabel>Pincode</FormLabel>
                    <FormControl><Input placeholder="6-digit pincode" maxLength={6} {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={control} name={`${prefix}_state`} render={({ field }) => (
                <FormItem>
                    <FormLabel>State</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select State" /></SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-60">
                            {INDIAN_STATES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )} />
        </div>
    );
}

export function PersonalDetailsTab() {
    const { control, watch, setValue } = useFormContext();
    const title = watch("title");
    const sameAsPermanent = watch("present_sameAsPermanent");

    // Mirror permanent address into present fields
    const handleSameAsPermanentChange = (checked: boolean) => {
        setValue("present_sameAsPermanent", checked);
        if (checked) {
            const perm = {
                present_house: watch("perm_house"),
                present_locality: watch("perm_locality"),
                present_city: watch("perm_city"),
                present_pincode: watch("perm_pincode"),
                present_state: watch("perm_state"),
            };
            Object.entries(perm).forEach(([k, v]) => setValue(k as any, v, { shouldDirty: true }));
        }
    };

    return (
        <div className="space-y-6">
            {/* Personal Info */}
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-primary">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* Title */}
                        <FormField control={control} name="title" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title <span className="text-destructive">*</span></FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {["Mr.", "Ms.", "Mrs.", "Dr.", "Prof."].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Applicant Name */}
                        <FormField control={control} name="firstName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input placeholder="First Name" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={control} name="middleName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Middle Name</FormLabel>
                                <FormControl><Input placeholder="Middle Name" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={control} name="lastName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input placeholder="Last Name" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <FormField control={control} name="enrolmentNo" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Enrolment Number</FormLabel>
                                <FormControl><Input {...field} className="bg-muted/50 font-mono" readOnly /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={control} name="fatherName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Father's Name <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input placeholder="Father's full name" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={control} name="motherName" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mother's Name <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input placeholder="Mother's full name" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        {/* Husband's Name — only when Title is Mrs. */}
                        {title === "Mrs." && (
                            <FormField control={control} name="husbandName" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Husband's Name</FormLabel>
                                    <FormControl><Input placeholder="Husband's full name" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        )}

                        <FormField control={control} name="casteCategory" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Caste Category <span className="text-destructive">*</span></FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select Category" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {["General", "OBC", "SC", "ST", "EWS", "Others"].map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="gender" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gender <span className="text-destructive">*</span></FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select Gender" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                        <SelectItem value="Transgender">Transgender</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="bloodGroup" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Blood Group</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select Blood Group" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField control={control} name="mobile" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mobile Number <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input placeholder="+91 98765 43210" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email ID <span className="text-destructive">*</span></FormLabel>
                                <FormControl><Input type="email" placeholder="email@example.com" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                </CardContent>
            </Card>

            {/* Permanent Address */}
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-primary">Permanent Address</CardTitle>
                </CardHeader>
                <CardContent>
                    <AddressFields prefix="perm" />
                </CardContent>
            </Card>

            {/* Present Address */}
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-semibold text-primary">Present Address</CardTitle>
                        <label className="flex items-center gap-2 text-sm font-medium cursor-pointer select-none">
                            <Checkbox
                                checked={!!sameAsPermanent}
                                onCheckedChange={handleSameAsPermanentChange}
                            />
                            Same as Permanent Address
                        </label>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className={sameAsPermanent ? "opacity-50 pointer-events-none" : ""}>
                        <AddressFields prefix="present" />
                    </div>
                </CardContent>
            </Card>

            {/* Professional Address */}
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-primary">Professional / Office Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <FormField control={control} name="prof_officeAddress" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Office Address</FormLabel>
                            <FormControl><Input placeholder="Full office address" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField control={control} name="prof_pincode" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pincode</FormLabel>
                                <FormControl><Input placeholder="6-digit pincode" maxLength={6} {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={control} name="prof_state" render={({ field }) => (
                            <FormItem>
                                <FormLabel>State</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select State" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="max-h-60">
                                        {INDIAN_STATES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={control} name="prof_mobile" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Office Mobile</FormLabel>
                                <FormControl><Input placeholder="+91 ..." {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={control} name="prof_email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Office Email</FormLabel>
                                <FormControl><Input type="email" placeholder="office@example.com" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
