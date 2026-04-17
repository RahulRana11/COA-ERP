import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addOfficialSchema, AddOfficialFormValues } from "@/lib/validations/adminUsers";
import { toast } from "sonner";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface OfficialUser {
    id: string;
    fullName: string;
    designation: string;
    department: string;
    role: string;
    emailAddress: string;
    mobileNumber: string;
    status: string;
}

interface AddOfficialDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onAddUser: (user: OfficialUser) => void;
}

export function AddOfficialDialog({ open, onOpenChange, onAddUser }: AddOfficialDialogProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm<AddOfficialFormValues>({
        resolver: zodResolver(addOfficialSchema),
        defaultValues: {
            fullName: "",
            designation: "",
            department: "",
            emailAddress: "",
            mobileNumber: "",
        },
        mode: "onTouched"
    });

    const onSubmit = async (data: AddOfficialFormValues) => {
        setIsSubmitting(true);

        // Simulate 1.5 seconds API Call
        setTimeout(() => {
            setIsSubmitting(false);

            const newUser: OfficialUser = {
                id: `usr-${Math.random().toString(36).substring(2, 9)}`,
                fullName: data.fullName,
                designation: data.designation,
                department: data.department,
                role: data.role,
                emailAddress: data.emailAddress,
                mobileNumber: data.mobileNumber,
                status: "Active",
            };

            toast.success("Official account created successfully and invitation sent.");
            onAddUser(newUser);
            reset();
            onOpenChange(false);
        }, 1500);
    };

    const handleOpenChange = (newOpen: boolean) => {
        if (!newOpen) reset(); // Clean up form when closed
        onOpenChange(newOpen);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Add New Official</DialogTitle>
                    <DialogDescription>
                        Create an internal account for a COA official. An invitation link will be sent to their email.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input id="fullName" placeholder="e.g. Amit Sharma" {...register("fullName")} />
                        {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="designation">Designation *</Label>
                            <Input id="designation" placeholder="e.g. Section Officer" {...register("designation")} />
                            {errors.designation && <p className="text-destructive text-sm mt-1">{errors.designation.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="department">Department *</Label>
                            <Input id="department" placeholder="e.g. Registration" {...register("department")} />
                            {errors.department && <p className="text-destructive text-sm mt-1">{errors.department.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="role">System Role *</Label>
                        <Controller name="role" control={control} render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Super Admin">Super Admin</SelectItem>
                                    <SelectItem value="Clerk">Clerk (Preliminary Scrutiny)</SelectItem>
                                    <SelectItem value="HOD">HOD (Departmental Review)</SelectItem>
                                    <SelectItem value="Registrar">Registrar (Verification)</SelectItem>
                                    <SelectItem value="President">President (Final Approval)</SelectItem>
                                </SelectContent>
                            </Select>
                        )} />
                        {errors.role && <p className="text-destructive text-sm mt-1">{errors.role.message}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="emailAddress">Official Email *</Label>
                            <Input id="emailAddress" type="email" placeholder="email@coa.gov.in" {...register("emailAddress")} />
                            {errors.emailAddress && <p className="text-destructive text-sm mt-1">{errors.emailAddress.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="mobileNumber">Mobile Number *</Label>
                            <Input id="mobileNumber" maxLength={10} placeholder="10-digit number" {...register("mobileNumber")} />
                            {errors.mobileNumber && <p className="text-destructive text-sm mt-1">{errors.mobileNumber.message}</p>}
                        </div>
                    </div>

                    <DialogFooter className="pt-4">
                        <Button type="button" variant="outline" onClick={() => handleOpenChange(false)} disabled={isSubmitting}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Generating..." : "Create Account"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
