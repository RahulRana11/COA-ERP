import * as z from "zod";

export const addressUpdateSchema = z.object({
    newAddressLine1: z.string().min(5, "New Address is required"),
    newState: z.string().min(2, "State is required"),
    newPincode: z.string().regex(/^\d{6}$/, "Must be a 6-digit Pincode"),
    proofOfAddress: z.any().refine((files) => files?.length === 1, "Proof of Address document is required")
});

export type AddressUpdateValues = z.infer<typeof addressUpdateSchema>;
