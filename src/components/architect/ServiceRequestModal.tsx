import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressUpdateSchema, AddressUpdateValues } from "@/lib/validations/serviceRequests";
import { toast } from "sonner";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface ServiceRequestModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    serviceType: string | null;
    onSubmited: () => void;
}

export function ServiceRequestModal({ open, onOpenChange, serviceType, onSubmited }: ServiceRequestModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // We are using AddressUpdateSchema here as the "generic" example based on the prompt.
    // In a full app, this would dynamically switch resolvers based on serviceType.
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddressUpdateValues>({
        resolver: zodResolver(addressUpdateSchema),
        defaultValues: {
            newAddressLine1: "",
            newState: "",
            newPincode: "",
        },
        mode: "onTouched"
    });

    const onSubmit = async (data: AddressUpdateValues) => {
        setIsSubmitting(true);

        // Simulate 1 second API Call
        setTimeout(() => {
            setIsSubmitting(false);
            const refGen = `SRQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
            toast.success(`Service request submitted. Ref: ${refGen}`);
            reset();
            onSubmited(); // Ping parent to update UI
            onOpenChange(false);
        }, 1000);
    };

    const handleOpenChange = (newOpen: boolean) => {
        if (!newOpen) reset(); // Clean up form when closed
        onOpenChange(newOpen);
    };

    if (!serviceType) return null;

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                    <DialogTitle>Request Service: {serviceType}</DialogTitle>
                    <DialogDescription>
                        {serviceType === "Update Address"
                            ? "Submit your new address details and mandatory proof of address document."
                            : "Fill out the required information to process your request."}
                    </DialogDescription>
                </DialogHeader>

                {serviceType === "Update Address" ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4">
                        <div className="space-y-2">
                            <Label htmlFor="newAddressLine1">New Address *</Label>
                            <Input id="newAddressLine1" placeholder="Flat No, Street, Landmark" {...register("newAddressLine1")} />
                            {errors.newAddressLine1 && <p className="text-destructive text-sm mt-1">{errors.newAddressLine1.message}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="newState">State *</Label>
                                <Input id="newState" placeholder="e.g. Maharashtra" {...register("newState")} />
                                {errors.newState && <p className="text-destructive text-sm mt-1">{errors.newState.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="newPincode">Pincode *</Label>
                                <Input id="newPincode" maxLength={6} placeholder="6-digit Pincode" {...register("newPincode")} />
                                {errors.newPincode && <p className="text-destructive text-sm mt-1">{errors.newPincode.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-2 pt-2 border-t">
                            <Label htmlFor="proofOfAddress">Proof of Address (PDF/Image) *</Label>
                            <Input id="proofOfAddress" type="file" accept=".pdf,image/*" {...register("proofOfAddress")} />
                            <p className="text-xs text-muted-foreground mt-1">Upload Aadhaar, Passport, or Utility Bill (Max 2MB)</p>
                            {errors.proofOfAddress && <p className="text-destructive text-sm mt-1">{errors.proofOfAddress.message as string}</p>}
                        </div>

                        <DialogFooter className="pt-4">
                            <Button type="button" variant="outline" onClick={() => handleOpenChange(false)} disabled={isSubmitting}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit Request"}
                            </Button>
                        </DialogFooter>
                    </form>
                ) : (
                    <div className="py-6 text-center text-muted-foreground">
                        Form fields for <strong>{serviceType}</strong> are under development in this test build. Please use "Update Address" to test the submission flow.
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
