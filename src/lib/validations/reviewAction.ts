import * as z from "zod";

export const reviewActionSchema = z.object({
    action: z.enum(["Forward to HOD", "Raise Query to Applicant", "Reject", "Approve", "Revert to Previous Officer"], {
        required_error: "Please select an action to proceed.",
    }),
    remarks: z.string().min(10, "Remarks must be at least 10 characters long. Please provide detailed reasoning."),
});

export type ReviewActionValues = z.infer<typeof reviewActionSchema>;
