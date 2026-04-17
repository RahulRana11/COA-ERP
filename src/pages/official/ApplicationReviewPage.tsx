import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewActionSchema, ReviewActionValues } from "@/lib/validations/reviewAction";
import { toast } from "sonner";
import { ArrowLeft, FileText, CheckCircle2, AlertCircle } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Mock data fetching based on ID could go here
const MOCK_DATA = {
    refNumber: "APP-2026-6729",
    status: "Preliminary Scrutiny",
    enrolmentNo: "REG-98214",
    personal: {
        fullName: "Mr. Aarav Patel",
        dob: "1994-08-15",
        gender: "Male",
        aadhaar: "1234 5678 9012"
    },
    contact: {
        email: "aarav.p@example.com",
        mobile: "9876543210",
        address: "123 New Road, Model Town, Delhi, India - 110009"
    },
    academic: {
        tenth: "CBSE - 2010 - 89%",
        twelfth: "CBSE - 12th - 2012 - 82%",
        barch: "Delhi University - SPA Delhi - 2017 - CGPA 8.5"
    }
};

export default function ApplicationReviewPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Zod + React Hook Form setup
    const { register, handleSubmit, control, formState: { errors } } = useForm<ReviewActionValues>({
        resolver: zodResolver(reviewActionSchema),
        defaultValues: {
            action: "Forward to HOD",
            remarks: ""
        },
        mode: "onTouched"
    });

    const onSubmit = async (data: ReviewActionValues) => {
        setIsSubmitting(true);

        // Simulate 1.5 seconds mock API Call
        setTimeout(() => {
            setIsSubmitting(false);

            // Dynamic Toast message based on action
            let msg = "Action recorded successfully.";
            if (data.action === "Forward to HOD") msg = "Application forwarded to HOD successfully.";
            else if (data.action === "Raise Query to Applicant") msg = "Query raised to applicant. Notification sent.";
            else if (data.action === "Approve") msg = "Application formally approved.";
            else if (data.action === "Reject") msg = "Application rejected.";
            else if (data.action === "Revert to Previous Officer") msg = "Application reverted to previous officer.";

            toast.success(msg);
            navigate("/official/dashboard"); // Return to Dashboard
        }, 1500);
    };

    const handleDocumentClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // Normally would open a Dialog or download window
        toast.message("Mock Document Opened in Viewer");
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
            <div className="flex items-center gap-4 mb-2">
                <Button variant="outline" size="icon" onClick={() => navigate("/official/dashboard")}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-semibold tracking-tight">Review Application</h1>
                        <Badge variant="secondary" className="text-sm px-3">{MOCK_DATA.refNumber}</Badge>
                    </div>
                    <p className="text-muted-foreground">Perform your scrutiny assessment and push it to the next workflow state.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">

                {/* LEFT COLUMN: Read-Only Application Data */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="shadow-sm">
                        <CardHeader className="bg-muted/30">
                            <CardTitle className="text-lg">Personal Details</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4 p-6 text-sm">
                            <div><span className="text-muted-foreground block mb-1">Full Name</span><span className="font-medium">{MOCK_DATA.personal.fullName}</span></div>
                            <div><span className="text-muted-foreground block mb-1">Enrolment No.</span><span className="font-medium">{MOCK_DATA.enrolmentNo}</span></div>
                            <div><span className="text-muted-foreground block mb-1">Date of Birth</span><span className="font-medium">{MOCK_DATA.personal.dob}</span></div>
                            <div><span className="text-muted-foreground block mb-1">Gender</span><span className="font-medium">{MOCK_DATA.personal.gender}</span></div>
                            <div className="col-span-2"><span className="text-muted-foreground block mb-1">Aadhaar Verification</span><Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 gap-1"><CheckCircle2 className="w-3 h-3" /> {MOCK_DATA.personal.aadhaar}</Badge></div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                        <CardHeader className="bg-muted/30">
                            <CardTitle className="text-lg">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4 p-6 text-sm">
                            <div><span className="text-muted-foreground block mb-1">Email Address</span><span className="font-medium">{MOCK_DATA.contact.email}</span></div>
                            <div><span className="text-muted-foreground block mb-1">Mobile Number</span><span className="font-medium">{MOCK_DATA.contact.mobile}</span></div>
                            <div className="col-span-2"><span className="text-muted-foreground block mb-1">Declared Address</span><span className="font-medium">{MOCK_DATA.contact.address}</span></div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                        <CardHeader className="bg-muted/30">
                            <CardTitle className="text-lg">Academic Qualifications & Documents</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 p-6 text-sm">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center border-b pb-4">
                                <div>
                                    <span className="text-muted-foreground block mb-1">10th Standard</span>
                                    <span className="font-medium">{MOCK_DATA.academic.tenth}</span>
                                </div>
                                <Button variant="outline" size="sm" onClick={handleDocumentClick}><FileText className="w-4 h-4 mr-2" /> View Doc</Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center border-b pb-4">
                                <div>
                                    <span className="text-muted-foreground block mb-1">12th / Diploma</span>
                                    <span className="font-medium">{MOCK_DATA.academic.twelfth}</span>
                                </div>
                                <Button variant="outline" size="sm" onClick={handleDocumentClick}><FileText className="w-4 h-4 mr-2" /> View Doc</Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
                                <div>
                                    <span className="text-muted-foreground block mb-1">B.Arch Degree</span>
                                    <span className="font-medium">{MOCK_DATA.academic.barch}</span>
                                </div>
                                <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 mx-0" onClick={handleDocumentClick}><FileText className="w-4 h-4 mr-2 text-white" /> View B.Arch</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* RIGHT COLUMN: Sticky Action Panel */}
                <div className="lg:col-span-1">
                    <Card className="shadow-md border-primary/20 lg:sticky top-[100px]">
                        <CardHeader className="bg-primary/5 border-b">
                            <h3 className="font-semibold text-lg flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-primary" />
                                Workflow Action
                            </h3>
                            <CardDescription>Determine the next stage based on your review findings.</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form id="review-action-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                                <div className="space-y-3">
                                    <Label className="text-base">Decision *</Label>
                                    <Controller name="action" control={control} render={({ field }) => (
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-2 mt-2"
                                        >
                                            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-muted/50 cursor-pointer">
                                                <RadioGroupItem value="Forward to HOD" id="act-forward" />
                                                <Label htmlFor="act-forward" className="flex-1 cursor-pointer font-medium text-blue-700 dark:text-blue-400">Forward to HOD (Pass)</Label>
                                            </div>
                                            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-muted/50 cursor-pointer">
                                                <RadioGroupItem value="Approve" id="act-approve" />
                                                <Label htmlFor="act-approve" className="flex-1 cursor-pointer font-medium text-emerald-700 dark:text-emerald-400">Approve Application</Label>
                                            </div>
                                            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-muted/50 cursor-pointer">
                                                <RadioGroupItem value="Raise Query to Applicant" id="act-query" />
                                                <Label htmlFor="act-query" className="flex-1 cursor-pointer font-medium text-amber-700 dark:text-amber-400">Raise Query</Label>
                                            </div>
                                            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-muted/50 cursor-pointer">
                                                <RadioGroupItem value="Revert to Previous Officer" id="act-revert" />
                                                <Label htmlFor="act-revert" className="flex-1 cursor-pointer font-medium text-orange-700 dark:text-orange-400">Revert to Previous Officer</Label>
                                            </div>
                                            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-muted/50 cursor-pointer border-destructive/30">
                                                <RadioGroupItem value="Reject" id="act-reject" />
                                                <Label htmlFor="act-reject" className="flex-1 cursor-pointer font-medium text-destructive">Reject (Critical Issue)</Label>
                                            </div>
                                        </RadioGroup>
                                    )} />
                                    {errors.action && <p className="text-destructive text-sm mt-1">{errors.action.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="remarks">Official Remarks (Audit Log) *</Label>
                                    <Textarea
                                        id="remarks"
                                        placeholder="Provide justification for forwarding, query specifics, or rejection reasons..."
                                        className="min-h-[120px] resize-none"
                                        {...register("remarks")}
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">These remarks are permanently stored in the audit trail.</p>
                                    {errors.remarks && <p className="text-destructive text-sm font-medium">{errors.remarks.message}</p>}
                                </div>

                            </form>
                        </CardContent>
                        <CardFooter className="bg-muted/30 pt-4 border-t">
                            <Button form="review-action-form" type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Processing Action..." : "Confirm & Submit Action"}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

            </div>
        </div>
    );
}
