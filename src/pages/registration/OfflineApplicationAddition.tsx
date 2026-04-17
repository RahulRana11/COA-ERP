import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { FilePlus, Save, RotateCcw, Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

import { PersonalDetailsTab } from "./components/edit-tabs/PersonalDetailsTab";
import { QualificationDetailsTab } from "./components/edit-tabs/QualificationDetailsTab";
import { OtherDetailsTab } from "./components/edit-tabs/OtherDetailsTab";
import { DocumentsTab } from "./components/edit-tabs/DocumentsTab";

// Note: Using the same structure as EditApplicationDetails handling generic schema logic
const offlineApplicationSchema = z.object({
    enrolmentNo: z.string().optional(),
    title: z.string().min(1, "Required"),
    firstName: z.string().min(1, "First Name is required"),
    middleName: z.string().optional(),
    lastName: z.string().optional(),
    fatherName: z.string().min(1, "Required"),
    motherName: z.string().min(1, "Required"),
    dob: z.date({ required_error: "Date of Birth is required" }),
    gender: z.string().min(1, "Required"),
    aadhaarNo: z.string().optional(),

    qual_10th_level: z.string().optional(),
    qual_10th_board: z.string().optional(),
    qual_10th_institution: z.string().optional(),
    qual_10th_year: z.string().optional(),
    qual_10th_marks: z.string().optional(),

    qual_12th_level: z.string().optional(),
    qual_12th_board: z.string().optional(),
    qual_12th_institution: z.string().optional(),
    qual_12th_year: z.string().optional(),
    qual_12th_marks: z.string().optional(),

    qual_barch_level: z.string().min(1, "Required"),
    qual_barch_board: z.string().min(1, "Required"),
    qual_barch_institution: z.string().min(1, "Required"),
    qual_barch_year: z.string().min(1, "Required"),
    qual_barch_marks: z.string().min(1, "Required"),

    nationality: z.string().min(1, "Required"),
    mobile: z.string().min(10, "Valid mobile required"),
    email: z.string().email("Valid email required"),

    comm_line1: z.string().min(1, "Required"),
    comm_line2: z.string().optional(),
    comm_country: z.string().min(1, "Required"),
    comm_state: z.string().min(1, "Required"),
    comm_district: z.string().min(1, "Required"),
    comm_pincode: z.string().min(1, "Required"),

    perm_line1: z.string().optional(),
    perm_line2: z.string().optional(),
    perm_country: z.string().optional(),
    perm_state: z.string().optional(),
    perm_district: z.string().optional(),
    perm_pincode: z.string().optional(),

    doc_10th: z.any().optional(),
    doc_12th: z.any().optional(),
    doc_barch: z.any().optional(),
    doc_photo: z.any().optional(),
    doc_signature: z.any().optional(),
});

type OfflineApplicationValues = z.infer<typeof offlineApplicationSchema>;

export default function OfflineApplicationAddition() {
    const [isCreating, setIsCreating] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const methods = useForm<OfflineApplicationValues>({
        resolver: zodResolver(offlineApplicationSchema),
        defaultValues: {
            title: "Mr.",
            nationality: "Indian",
            comm_country: "India",
            perm_country: "India",
        },
    });

    const onSubmit = (data: OfflineApplicationValues) => {
        setIsSaving(true);
        // Simulate save operation posting to the live DB eventually
        setTimeout(() => {
            console.log("Offline Application Created Payload:", data);
            
            setIsSaving(false);
            setIsCreating(false);
            methods.reset(); // clear state completely
            
            toast.success(`Application registered offline successfully.`);
        }, 1500);
    };

    const handleCancel = () => {
        setIsCreating(false);
        methods.reset();
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6 flex flex-col min-h-screen">
            <div className="sticky top-0 z-30 bg-background/95 backdrop-blur shrink-0 pt-2 pb-4 border-b">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div className="flex items-center gap-2">
                            {isCreating && (
                                <Button variant="ghost" size="icon" onClick={handleCancel} className="mt-1 flex-shrink-0">
                                    <ArrowLeft className="h-5 w-5" />
                                </Button>
                            )}
                            <h1 className="text-3xl font-semibold tracking-tight">Offline Application Addition</h1>
                        </div>
                        <p className="text-muted-foreground mt-1">Register a new applicant manually who submitted documents physically.</p>
                    </div>

                    {!isCreating && (
                        <Button size="lg" onClick={() => setIsCreating(true)} className="w-full md:w-auto">
                            <FilePlus className="mr-2 h-5 w-5" />
                            Create New Application
                        </Button>
                    )}
                </div>
            </div>

            {isCreating ? (
                <div className="flex-1 min-h-0 relative animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 pb-24">
                            <Tabs defaultValue="personal" className="w-full">
                                <TabsList className="w-full grid grid-cols-2 lg:grid-cols-4 mb-6 h-auto p-1">
                                    <TabsTrigger value="personal" className="py-2">Personal Details</TabsTrigger>
                                    <TabsTrigger value="qualification" className="py-2">Qualification Details</TabsTrigger>
                                    <TabsTrigger value="other" className="py-2">Other Details</TabsTrigger>
                                    <TabsTrigger value="documents" className="py-2">Documents</TabsTrigger>
                                </TabsList>

                                <TabsContent value="personal" className="mt-0">
                                    <PersonalDetailsTab />
                                </TabsContent>

                                <TabsContent value="qualification" className="mt-0">
                                    <QualificationDetailsTab />
                                </TabsContent>

                                <TabsContent value="other" className="mt-0">
                                    <OtherDetailsTab />
                                </TabsContent>

                                <TabsContent value="documents" className="mt-0">
                                    <DocumentsTab />
                                </TabsContent>
                            </Tabs>

                            {/* Sticky Bottom Action Bar */}
                            <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:pl-64 transition-all pr-8">
                                <div className="max-w-7xl mx-auto flex justify-end gap-4 items-center">
                                    <p className="text-sm text-muted-foreground mr-auto hidden sm:block">Please verify all uploaded physical documentation before submitting.</p>
                                    
                                    <Button 
                                        type="button" 
                                        variant="outline"
                                        onClick={handleCancel}
                                        disabled={isSaving}
                                    >
                                        <RotateCcw className="mr-2 h-4 w-4" />
                                        Cancel
                                    </Button>
                                    <Button 
                                        type="submit"
                                        disabled={isSaving}
                                    >
                                        {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                                        Submit Offline Application
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            ) : (
                <Card className="flex-1 flex flex-col items-center justify-center border-dashed bg-muted/20 min-h-[500px]">
                    <CardContent className="text-center text-muted-foreground mt-8">
                        <FilePlus className="h-16 w-16 mx-auto mb-6 opacity-20" />
                        <h3 className="text-2xl font-medium text-foreground mb-2">Ready to Register</h3>
                        <p className="max-w-md mx-auto mb-8">
                            Click the button top right to initiate a fresh offline record creation. 
                            Ensure you have all physical documentation scanned and ready before beginning.
                        </p>
                        <Button size="lg" onClick={() => setIsCreating(true)}>
                            <FilePlus className="mr-2 h-5 w-5" />
                            Create New Application
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
