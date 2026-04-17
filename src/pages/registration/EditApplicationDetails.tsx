import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { Search, Save, RotateCcw, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { PersonalDetailsTab } from "./components/edit-tabs/PersonalDetailsTab";
import { QualificationDetailsTab } from "./components/edit-tabs/QualificationDetailsTab";
import { OtherDetailsTab } from "./components/edit-tabs/OtherDetailsTab";
import { DocumentsTab } from "./components/edit-tabs/DocumentsTab";

// ── Validation Schema ─────────────────────────────────────────────────────────
const editApplicationSchema = z.object({
    // Identity (read-only)
    enrolmentNo: z.string().optional(),

    // Personal
    title: z.string().min(1, "Title is required"),
    firstName: z.string().min(2, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
    fatherName: z.string().min(2, "Father's name is required"),
    motherName: z.string().min(2, "Mother's name is required"),
    husbandName: z.string().optional(),
    casteCategory: z.string().min(1, "Caste category is required"),
    gender: z.string().min(1, "Gender is required"),
    bloodGroup: z.string().optional(),

    // Contact
    mobile: z.string().min(10, "Enter a valid mobile number"),
    email: z.string().email("Enter a valid email address"),

    // Permanent Address
    perm_house: z.string().optional(),
    perm_locality: z.string().optional(),
    perm_city: z.string().optional(),
    perm_pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits").optional().or(z.literal("")),
    perm_state: z.string().optional(),

    // Present Address
    present_sameAsPermanent: z.boolean().optional(),
    present_house: z.string().optional(),
    present_locality: z.string().optional(),
    present_city: z.string().optional(),
    present_pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits").optional().or(z.literal("")),
    present_state: z.string().optional(),

    // Professional Address
    prof_officeAddress: z.string().optional(),
    prof_pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits").optional().or(z.literal("")),
    prof_state: z.string().optional(),
    prof_mobile: z.string().optional(),
    prof_email: z.string().email().optional().or(z.literal("")),

    // B.Arch Qualification
    barch_recognizedFrom: z.string().optional(),
    barch_courseName: z.string().optional(),
    barch_schoolName: z.string().optional(),
    barch_universityName: z.string().optional(),
    barch_yearOfAdmission: z.string().optional(),
    barch_yearOfGraduation: z.string().optional(),
    barch_passingFormat: z.string().optional(),
    barch_gradeAttained: z.string().optional(),

    // 10+2
    twelfth_examName: z.string().optional(),
    twelfth_boardName: z.string().optional(),
    twelfth_mathsPassed: z.string().optional(),
    twelfth_aggregateMarks: z.string().optional(),
    twelfth_maximumMarks: z.string().optional(),

    // Professional / Other
    prof_dateOfCommencement: z.date().optional(),
    prof_typeOfProfession: z.string().optional(),
    prof_indiaYears: z.string().optional(),
    prof_indiaMonths: z.string().optional(),
    prof_outsideYears: z.string().optional(),
    prof_outsideMonths: z.string().optional(),
    prof_remarks: z.string().optional(),

    // Documents
    doc_photo: z.any().optional(),
    doc_signature: z.any().optional(),
    doc_dob: z.any().optional(),
    doc_casteCertificate: z.any().optional(),
    doc_provisionalDegree: z.any().optional(),
    doc_marksheet: z.any().optional(),
    doc_twelfthMarksheet: z.any().optional(),
    doc_practicalTraining: z.any().optional(),
});

type EditApplicationValues = z.infer<typeof editApplicationSchema>;

// ── Rich Mock Data ────────────────────────────────────────────────────────────
const getMockApplicationData = (appNo: string): EditApplicationValues => ({
    enrolmentNo: appNo,
    title: "Mr.",
    firstName: "Ramesh",
    middleName: "Kumar",
    lastName: "Verma",
    fatherName: "Suresh Prasad Verma",
    motherName: "Lata Devi",
    husbandName: "",
    casteCategory: "General",
    gender: "Male",
    bloodGroup: "B+",

    mobile: "9876543210",
    email: "ramesh.verma@example.com",

    perm_house: "Flat 405, Tower B",
    perm_locality: "Vasant Kunj",
    perm_city: "New Delhi",
    perm_pincode: "110070",
    perm_state: "Delhi",

    present_sameAsPermanent: true,
    present_house: "Flat 405, Tower B",
    present_locality: "Vasant Kunj",
    present_city: "New Delhi",
    present_pincode: "110070",
    present_state: "Delhi",

    prof_officeAddress: "Studio X, 2nd Floor, Qutab Plaza",
    prof_pincode: "110016",
    prof_state: "Delhi",
    prof_mobile: "9811122233",
    prof_email: "ramesh@studiox.in",

    barch_recognizedFrom: "B.Arch (5-Year Full Time)",
    barch_courseName: "Bachelor of Architecture",
    barch_schoolName: "School of Planning and Architecture, Delhi",
    barch_universityName: "Delhi University",
    barch_yearOfAdmission: "2012",
    barch_yearOfGraduation: "2017",
    barch_passingFormat: "CGPA",
    barch_gradeAttained: "7.8 CGPA",

    twelfth_examName: "CBSE 10+2",
    twelfth_boardName: "CBSE",
    twelfth_mathsPassed: "Yes",
    twelfth_aggregateMarks: "425",
    twelfth_maximumMarks: "500",

    prof_dateOfCommencement: new Date("2017-07-01"),
    prof_typeOfProfession: "Private Practice",
    prof_indiaYears: "7",
    prof_indiaMonths: "6",
    prof_outsideYears: "0",
    prof_outsideMonths: "0",
    prof_remarks: "",
});

// ── Main Component ────────────────────────────────────────────────────────────
export default function EditApplicationDetails() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [fetchedApplication, setFetchedApplication] = useState<string | null>(null);

    const methods = useForm<EditApplicationValues>({
        resolver: zodResolver(editApplicationSchema),
        defaultValues: {},
    });

    const { formState: { isDirty, errors } } = methods;

    const handleSearch = () => {
        if (!searchQuery.trim()) {
            toast.error("Please enter an Application Number to search.");
            return;
        }
        setIsSearching(true);
        setTimeout(() => {
            const mockData = getMockApplicationData(searchQuery.trim());
            methods.reset(mockData);
            setFetchedApplication(searchQuery.trim());
            setIsSearching(false);
            toast.success("Application details loaded successfully.", {
                description: `Editing Application #${searchQuery.trim()}`,
            });
        }, 1000);
    };

    const onSubmit = (data: EditApplicationValues) => {
        setIsSaving(true);
        setTimeout(() => {
            methods.reset(data); // Re-hydrate to clear dirty state
            setIsSaving(false);
            toast.success(`Application ${fetchedApplication} successfully updated.`, {
                description: "All changes have been saved to the system.",
            });
        }, 1500);
    };

    const errorCount = Object.keys(errors).length;

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6 flex flex-col min-h-screen">
            {/* Sticky Header */}
            <div className="sticky top-0 z-30 bg-background/95 backdrop-blur shrink-0 pt-2 pb-4 border-b">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight">Edit Application Details</h1>
                        <p className="text-muted-foreground text-sm">
                            Search an Application Number to load and edit its records.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:min-w-[300px]">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="e.g. 1001, APP-2026-001 ..."
                                className="pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            />
                        </div>
                        <Button onClick={handleSearch} disabled={isSearching} variant="secondary">
                            {isSearching && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Fetch Application
                        </Button>
                    </div>
                </div>

                {/* Dirty state indicator */}
                {fetchedApplication && isDirty && (
                    <div className="mt-2 flex items-center gap-2">
                        <Badge variant="outline" className="bg-amber-50 border-amber-300 text-amber-700 text-xs">
                            ● Unsaved changes
                        </Badge>
                        {errorCount > 0 && (
                            <Badge variant="destructive" className="text-xs">
                                {errorCount} validation error{errorCount > 1 ? "s" : ""}
                            </Badge>
                        )}
                    </div>
                )}
            </div>

            {/* Form or Empty State */}
            {fetchedApplication ? (
                <div className="flex-1 min-h-0 relative">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 pb-28">
                            <Tabs defaultValue="personal" className="w-full">
                                <TabsList className="w-full grid grid-cols-2 lg:grid-cols-4 mb-6 h-auto p-1">
                                    <TabsTrigger value="personal" className="py-2 text-xs sm:text-sm">
                                        Personal & Contact
                                    </TabsTrigger>
                                    <TabsTrigger value="qualification" className="py-2 text-xs sm:text-sm">
                                        Qualifications
                                    </TabsTrigger>
                                    <TabsTrigger value="other" className="py-2 text-xs sm:text-sm">
                                        Professional Details
                                    </TabsTrigger>
                                    <TabsTrigger value="documents" className="py-2 text-xs sm:text-sm">
                                        Documents
                                    </TabsTrigger>
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
                            <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-t shadow-[0_-4px_16px_-4px_rgba(0,0,0,0.08)]">
                                <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 p-4 px-6">
                                    <div className="flex items-center gap-3">
                                        {isDirty ? (
                                            <p className="text-sm text-amber-600 font-medium hidden sm:block">
                                                You have unsaved changes
                                            </p>
                                        ) : (
                                            <p className="text-sm text-muted-foreground hidden sm:block">
                                                App #{fetchedApplication} · No changes yet
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => methods.reset()}
                                            disabled={!isDirty || isSaving}
                                        >
                                            <RotateCcw className="mr-2 h-4 w-4" />
                                            Discard Changes
                                        </Button>
                                        <Button
                                            type="submit"
                                            disabled={!isDirty || isSaving}
                                            className="min-w-[160px]"
                                        >
                                            {isSaving
                                                ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</>
                                                : <><Save className="mr-2 h-4 w-4" /> Save All Changes</>
                                            }
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            ) : (
                <Card className="flex-1 flex items-center justify-center border-dashed bg-muted/20 min-h-[400px]">
                    <CardContent className="text-center text-muted-foreground pt-6">
                        <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
                        <h3 className="text-lg font-medium text-foreground mb-1">No Application Loaded</h3>
                        <p className="text-sm">Enter an Application Number above and click "Fetch Application" to begin editing.</p>
                        <p className="text-xs mt-2 text-muted-foreground/70">Try: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">1001</code></p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
