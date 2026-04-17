import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
    Pencil, X, Save, Loader2, User, GraduationCap, MapPin,
    Briefcase, FileText, CheckCircle2, Clock, ArrowRight,
    Calendar, CreditCard, Phone, Mail, Building2, Hash
} from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import { PersonalDetailsTab } from "@/pages/registration/components/edit-tabs/PersonalDetailsTab";
import { QualificationDetailsTab } from "@/pages/registration/components/edit-tabs/QualificationDetailsTab";
import { OtherDetailsTab } from "@/pages/registration/components/edit-tabs/OtherDetailsTab";
import { DocumentsTab } from "@/pages/registration/components/edit-tabs/DocumentsTab";
import { ApplicationRecord, WorkflowStage } from "@/store/authStore";

// ── Types ─────────────────────────────────────────────────────────────────────

interface ApplicationViewSheetProps {
    app: ApplicationRecord | null;
    open: boolean;
    onOpenChange: (v: boolean) => void;
}

// ── Stage styles ──────────────────────────────────────────────────────────────

const STAGE_LABELS: Record<string, string> = {
    Pending_Clerk: "Pending — Clerk",
    Pending_HOD: "Pending — HOD",
    Pending_Registrar: "Pending — Registrar",
    Pending_President: "Pending — President",
    Approved: "Approved",
    Rejected: "Rejected",
};

const STAGE_COLORS: Record<string, string> = {
    Pending_Clerk: "bg-yellow-100 text-yellow-800 border-yellow-300",
    Pending_HOD: "bg-orange-100 text-orange-800 border-orange-300",
    Pending_Registrar: "bg-blue-100 text-blue-800 border-blue-300",
    Pending_President: "bg-purple-100 text-purple-800 border-purple-300",
    Approved: "bg-green-100 text-green-800 border-green-300",
    Rejected: "bg-red-100 text-red-800 border-red-300",
};

// ── Edit form schema (mirrors EditApplicationDetails) ─────────────────────────

const editSchema = z.object({
    enrolmentNo: z.string().optional(),
    title: z.string().optional(),
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().optional(),
    fatherName: z.string().optional(),
    motherName: z.string().optional(),
    husbandName: z.string().optional(),
    casteCategory: z.string().optional(),
    gender: z.string().optional(),
    bloodGroup: z.string().optional(),
    mobile: z.string().optional(),
    email: z.string().email("Invalid email").optional().or(z.literal("")),
    perm_house: z.string().optional(),
    perm_locality: z.string().optional(),
    perm_city: z.string().optional(),
    perm_pincode: z.string().optional(),
    perm_state: z.string().optional(),
    present_sameAsPermanent: z.boolean().optional(),
    present_house: z.string().optional(),
    present_locality: z.string().optional(),
    present_city: z.string().optional(),
    present_pincode: z.string().optional(),
    present_state: z.string().optional(),
    prof_officeAddress: z.string().optional(),
    prof_pincode: z.string().optional(),
    prof_state: z.string().optional(),
    prof_mobile: z.string().optional(),
    prof_email: z.string().optional(),
    barch_recognizedFrom: z.string().optional(),
    barch_courseName: z.string().optional(),
    barch_schoolName: z.string().optional(),
    barch_universityName: z.string().optional(),
    barch_yearOfAdmission: z.string().optional(),
    barch_yearOfGraduation: z.string().optional(),
    barch_passingFormat: z.string().optional(),
    barch_gradeAttained: z.string().optional(),
    twelfth_examName: z.string().optional(),
    twelfth_boardName: z.string().optional(),
    twelfth_mathsPassed: z.string().optional(),
    twelfth_aggregateMarks: z.string().optional(),
    twelfth_maximumMarks: z.string().optional(),
    prof_dateOfCommencement: z.date().optional(),
    prof_typeOfProfession: z.string().optional(),
    prof_indiaYears: z.string().optional(),
    prof_indiaMonths: z.string().optional(),
    prof_outsideYears: z.string().optional(),
    prof_outsideMonths: z.string().optional(),
    prof_remarks: z.string().optional(),
    doc_photo: z.any().optional(),
    doc_signature: z.any().optional(),
    doc_dob: z.any().optional(),
    doc_casteCertificate: z.any().optional(),
    doc_provisionalDegree: z.any().optional(),
    doc_marksheet: z.any().optional(),
    doc_twelfthMarksheet: z.any().optional(),
    doc_practicalTraining: z.any().optional(),
});

type EditValues = z.infer<typeof editSchema>;

// ── Helper: build edit defaults from ApplicationRecord ────────────────────────

function buildEditDefaults(app: ApplicationRecord): EditValues {
    const nameParts = app.name.trim().split(" ");
    return {
        enrolmentNo: app.appNumber,
        title: app.gender === "Female" ? "Ms." : "Mr.",
        firstName: nameParts[0] ?? "",
        middleName: nameParts.length > 2 ? nameParts.slice(1, -1).join(" ") : "",
        lastName: nameParts.length > 1 ? nameParts[nameParts.length - 1] : "",
        fatherName: "",
        motherName: "",
        husbandName: "",
        casteCategory: "General",
        gender: app.gender,
        bloodGroup: "",
        mobile: "",
        email: "",
        perm_house: app.residentialAddress.split(",")[0]?.trim() ?? "",
        perm_locality: app.residentialAddress.split(",")[1]?.trim() ?? "",
        perm_city: app.residentialAddress.split(",").slice(-1)[0]?.trim() ?? "",
        perm_pincode: "",
        perm_state: "",
        present_sameAsPermanent: true,
        present_house: app.residentialAddress.split(",")[0]?.trim() ?? "",
        present_locality: app.residentialAddress.split(",")[1]?.trim() ?? "",
        present_city: app.residentialAddress.split(",").slice(-1)[0]?.trim() ?? "",
        present_pincode: "",
        present_state: "",
        prof_officeAddress: app.professionalAddress,
        prof_pincode: "",
        prof_state: "",
        prof_mobile: "",
        prof_email: "",
        barch_recognizedFrom: "B.Arch (5-Year Full Time)",
        barch_courseName: "Bachelor of Architecture",
        barch_schoolName: app.qualification.split(" - ")[1]?.split(" (")[0] ?? "",
        barch_universityName: "",
        barch_yearOfAdmission: "",
        barch_yearOfGraduation: app.qualification.match(/\((\d{4})\)/)?.[1] ?? "",
        barch_passingFormat: "CGPA",
        barch_gradeAttained: "",
        twelfth_examName: "CBSE 10+2",
        twelfth_boardName: "CBSE",
        twelfth_mathsPassed: "Yes",
        twelfth_aggregateMarks: "",
        twelfth_maximumMarks: "",
        prof_typeOfProfession: "Private Practice",
        prof_indiaYears: "0",
        prof_indiaMonths: "0",
        prof_outsideYears: "0",
        prof_outsideMonths: "0",
        prof_remarks: "",
    };
}

// ── Read-only info row ────────────────────────────────────────────────────────

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string | null | undefined }) {
    if (!value) return null;
    return (
        <div className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-md bg-primary/8 flex items-center justify-center">
                <Icon className="h-3.5 w-3.5 text-primary" />
            </div>
            <div className="min-w-0">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
                <p className="text-sm font-medium text-foreground leading-tight">{value}</p>
            </div>
        </div>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 mt-1 flex items-center gap-2">
            <span className="h-px flex-1 bg-border" />
            <span>{children}</span>
            <span className="h-px flex-1 bg-border" />
        </h3>
    );
}

// ── Read-only View ────────────────────────────────────────────────────────────

function ApplicationReadView({ app }: { app: ApplicationRecord }) {
    return (
        <ScrollArea className="flex-1 min-h-0 px-6">
            <div className="space-y-6 py-4 pb-8">

                {/* Application Meta */}
                <div className="rounded-xl border bg-muted/30 p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="text-center">
                        <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">App No.</p>
                        <p className="font-mono font-bold text-lg text-primary">#{app.appNumber}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">Mode</p>
                        <Badge variant="outline" className="mt-0.5">{app.appMode}</Badge>
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">Stage</p>
                        <span className={`text-[11px] font-semibold mt-0.5 inline-block px-2 py-0.5 rounded-full border ${STAGE_COLORS[app.workflow_stage]}`}>
                            {STAGE_LABELS[app.workflow_stage]}
                        </span>
                    </div>
                    {app.regNumber && (
                        <div className="text-center">
                            <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">Reg. No.</p>
                            <p className="font-mono text-sm font-semibold text-green-700">{app.regNumber}</p>
                        </div>
                    )}
                    <div className="text-center">
                        <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">Applied On</p>
                        <p className="text-sm font-medium">{app.dateOfApp}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">Hardcopy</p>
                        <p className="text-sm font-medium">{app.hardcopyReceivedOn ?? "Not Received"}</p>
                    </div>
                </div>

                {/* Personal Details */}
                <div>
                    <SectionTitle>Personal Details</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InfoRow icon={User} label="Full Name" value={app.name} />
                        <InfoRow icon={Calendar} label="Date of Birth" value={app.dob} />
                        <InfoRow icon={User} label="Gender" value={app.gender} />
                        <InfoRow icon={Hash} label="Nationality" value={app.nationality} />
                    </div>
                </div>

                {/* Qualification */}
                <div>
                    <SectionTitle>Qualification</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InfoRow icon={GraduationCap} label="Architecture Qualification" value={app.qualification} />
                        {app.additionalQualification && (
                            <InfoRow icon={GraduationCap} label="Additional Qualification" value={app.additionalQualification} />
                        )}
                    </div>
                </div>

                {/* Addresses */}
                <div>
                    <SectionTitle>Addresses</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InfoRow icon={MapPin} label="Residential Address" value={app.residentialAddress} />
                        <InfoRow icon={Building2} label="Professional Address" value={app.professionalAddress} />
                        <InfoRow icon={MapPin} label="Communication Address" value={app.communicationAddress} />
                    </div>
                </div>

                {/* Timeline / Dates */}
                <div>
                    <SectionTitle>Timeline & Approval</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InfoRow icon={Clock} label="Date of Application" value={app.dateOfApp} />
                        <InfoRow icon={FileText} label="Hardcopy Received" value={app.hardcopyReceivedOn ?? "Not yet received"} />
                        <InfoRow icon={Hash} label="Registration Number" value={app.regNumber ?? "Not yet assigned"} />
                        <InfoRow icon={Calendar} label="Registration Date" value={app.regDate ?? "Not yet issued"} />
                        <InfoRow icon={CheckCircle2} label="President Approved On" value={app.presidentApproveOn ?? "Pending"} />
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
}

// ── Inline Edit View ──────────────────────────────────────────────────────────

function ApplicationEditView({ app, onSaved }: { app: ApplicationRecord; onSaved: () => void }) {
    const [isSaving, setIsSaving] = useState(false);

    const methods = useForm<EditValues>({
        resolver: zodResolver(editSchema),
        defaultValues: buildEditDefaults(app),
    });

    const { formState: { isDirty } } = methods;

    const onSubmit = (data: EditValues) => {
        setIsSaving(true);
        setTimeout(() => {
            methods.reset(data);
            setIsSaving(false);
            toast.success(`Application #${app.appNumber} successfully updated.`, {
                description: "Changes have been saved.",
            });
            onSaved();
        }, 1500);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col flex-1 min-h-0">
                {isDirty && (
                    <div className="mx-6 mt-2 mb-0 rounded-md bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-800 font-medium flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                        Unsaved changes — scroll down and click Save Changes
                    </div>
                )}

                <ScrollArea className="flex-1 min-h-0 px-6 mt-3">
                    <div className="pb-32">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid grid-cols-2 lg:grid-cols-4 mb-5 h-auto p-1">
                                <TabsTrigger value="personal" className="text-xs py-2">Personal & Contact</TabsTrigger>
                                <TabsTrigger value="qualification" className="text-xs py-2">Qualifications</TabsTrigger>
                                <TabsTrigger value="other" className="text-xs py-2">Professional</TabsTrigger>
                                <TabsTrigger value="documents" className="text-xs py-2">Documents</TabsTrigger>
                            </TabsList>
                            <TabsContent value="personal"><PersonalDetailsTab /></TabsContent>
                            <TabsContent value="qualification"><QualificationDetailsTab /></TabsContent>
                            <TabsContent value="other"><OtherDetailsTab /></TabsContent>
                            <TabsContent value="documents"><DocumentsTab /></TabsContent>
                        </Tabs>
                    </div>
                </ScrollArea>

                {/* Sticky save bar inside sheet */}
                <div className="border-t bg-background/95 backdrop-blur px-6 py-3 flex items-center justify-between gap-3 flex-shrink-0">
                    <p className="text-xs text-muted-foreground hidden sm:block truncate">
                        {isDirty ? "You have unsaved changes" : `Editing App #${app.appNumber}`}
                    </p>
                    <div className="flex gap-2 ml-auto">
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => methods.reset()}
                            disabled={!isDirty || isSaving}
                        >
                            Discard
                        </Button>
                        <Button type="submit" size="sm" disabled={!isDirty || isSaving} className="min-w-[130px]">
                            {isSaving
                                ? <><Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />Saving...</>
                                : <><Save className="h-3.5 w-3.5 mr-1.5" />Save Changes</>
                            }
                        </Button>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
}

// ── Main Sheet Export ─────────────────────────────────────────────────────────

export function ApplicationViewSheet({ app, open, onOpenChange }: ApplicationViewSheetProps) {
    const [isEditing, setIsEditing] = useState(false);

    // Reset to view mode whenever a different app is opened
    const handleOpenChange = (v: boolean) => {
        if (!v) setIsEditing(false);
        onOpenChange(v);
    };

    if (!app) return null;

    return (
        <Sheet open={open} onOpenChange={handleOpenChange}>
            <SheetContent
                side="right"
                className="w-full sm:max-w-3xl p-0 flex flex-col gap-0 overflow-hidden"
            >
                {/* ── Header ── */}
                <SheetHeader className="px-6 pt-5 pb-4 border-b bg-muted/20 flex-shrink-0">
                    <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <SheetTitle className="text-xl font-bold flex items-center gap-2 flex-wrap">
                                {app.name}
                                <span className="font-mono text-base text-muted-foreground font-normal">
                                    #{app.appNumber}
                                </span>
                            </SheetTitle>
                            <SheetDescription className="flex items-center gap-2 mt-1 flex-wrap">
                                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${STAGE_COLORS[app.workflow_stage]}`}>
                                    {STAGE_LABELS[app.workflow_stage]}
                                </span>
                                <span className="text-xs text-muted-foreground">{app.qualification}</span>
                            </SheetDescription>
                        </div>

                        {/* Edit / Back toggle */}
                        {!isEditing ? (
                            <Button
                                size="sm"
                                className="flex-shrink-0 gap-1.5"
                                onClick={() => setIsEditing(true)}
                            >
                                <Pencil className="h-3.5 w-3.5" />
                                Edit Application
                            </Button>
                        ) : (
                            <Button
                                size="sm"
                                variant="outline"
                                className="flex-shrink-0 gap-1.5"
                                onClick={() => setIsEditing(false)}
                            >
                                <X className="h-3.5 w-3.5" />
                                Back to View
                            </Button>
                        )}
                    </div>

                    {/* Mode indicator */}
                    <div className="flex items-center gap-2 mt-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${isEditing ? "bg-amber-100 text-amber-700" : "bg-blue-50 text-blue-700"}`}>
                            {isEditing ? "✎ Edit Mode" : "👁 View Mode"}
                        </span>
                    </div>
                </SheetHeader>

                {/* ── Body ── */}
                <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
                    {isEditing ? (
                        <ApplicationEditView
                            app={app}
                            onSaved={() => setIsEditing(false)}
                        />
                    ) : (
                        <ApplicationReadView app={app} />
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}
