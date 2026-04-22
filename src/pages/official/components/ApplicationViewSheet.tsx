import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
    Pencil, X, Save, Loader2, User, GraduationCap, MapPin,
    Briefcase, CheckCircle2, Calendar, CreditCard, Phone, Mail,
    Building2, Hash, Droplets, Users
} from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

import { PersonalDetailsTab } from "@/pages/registration/components/edit-tabs/PersonalDetailsTab";
import { QualificationDetailsTab } from "@/pages/registration/components/edit-tabs/QualificationDetailsTab";
import { OtherDetailsTab } from "@/pages/registration/components/edit-tabs/OtherDetailsTab";
import { DocumentsTab } from "@/pages/registration/components/edit-tabs/DocumentsTab";
import { ApplicationRecord } from "@/store/authStore";

// ── Props ─────────────────────────────────────────────────────────────────────

interface ApplicationViewSheetProps {
    app: ApplicationRecord | null;
    open: boolean;
    onOpenChange: (v: boolean) => void;
}

// ── Stage config ──────────────────────────────────────────────────────────────

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

// ── Edit form schema ──────────────────────────────────────────────────────────

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

// ── Build defaults from ApplicationRecord ─────────────────────────────────────

function buildEditDefaults(app: ApplicationRecord): EditValues {
    const nameParts = app.name.trim().split(" ");
    return {
        enrolmentNo: app.enrolmentNumber ?? app.appNumber,
        title: app.title,
        firstName: nameParts[0] ?? "",
        middleName: nameParts.length > 2 ? nameParts.slice(1, -1).join(" ") : "",
        lastName: nameParts.length > 1 ? nameParts[nameParts.length - 1] : "",
        fatherName: app.fatherName,
        motherName: app.motherName,
        husbandName: app.husbandName ?? "",
        casteCategory: app.casteCategory,
        gender: app.gender,
        bloodGroup: app.bloodGroup ?? "",
        mobile: app.mobileNumber,
        email: app.emailAddress,
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
        prof_mobile: app.mobileNumber,
        prof_email: app.emailAddress,
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

// ── Read-only helpers ─────────────────────────────────────────────────────────

function InfoCell({
    label, value, icon: Icon, highlight,
}: {
    label: string; value: string | null | undefined; icon?: any; highlight?: boolean;
}) {
    if (!value) return null;
    return (
        <div className={`rounded-lg p-3 border ${highlight ? "bg-primary/5 border-primary/20" : "bg-muted/20 border-border/50"}`}>
            <div className="flex items-center gap-1.5 mb-1">
                {Icon && <Icon className="h-3 w-3 text-muted-foreground" />}
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
            </div>
            <p className={`text-sm font-semibold leading-tight ${highlight ? "text-primary" : "text-foreground"}`}>{value}</p>
        </div>
    );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-3 my-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                {children}
            </span>
            <div className="h-px flex-1 bg-border" />
        </div>
    );
}

// ── Full read-only view (mirrors all 4 edit tabs) ─────────────────────────────

export function ApplicationReadView({ app }: { app: ApplicationRecord }) {
    const d = buildEditDefaults(app);

    return (
        <div className="flex-1 w-full relative">
            <div className="px-1 py-4 pb-12">

                {/* ── Application meta strip ── */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-xl border bg-muted/30 p-3 mb-4">
                    <InfoCell label="App No." value={`#${app.appNumber}`} icon={Hash} highlight />
                    <InfoCell label="Mode" value={app.appMode} />
                    <InfoCell label="Applied On" value={app.dateOfApp} icon={Calendar} />
                    <InfoCell label="Hardcopy Received" value={app.hardcopyReceivedOn ?? "Not Received"} />
                    <InfoCell label="Payment Status" value={app.paymentStatus} />
                    {app.enrolmentNumber && <InfoCell label="Enrolment No." value={app.enrolmentNumber} icon={Hash} highlight />}
                    {app.regNumber && <InfoCell label="Reg. Number" value={app.regNumber} icon={CreditCard} highlight />}
                    {app.regDate && <InfoCell label="Reg. Date" value={app.regDate} icon={Calendar} />}
                    {app.presidentApproveOn && <InfoCell label="President Approved" value={app.presidentApproveOn} icon={CheckCircle2} />}
                </div>

                {/* ════════════════════════════════════════════
                    TAB 1 — Personal Details & Contact
                ════════════════════════════════════════════ */}
                <SectionHeading>Personal Information</SectionHeading>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <InfoCell label="Title" value={d.title} />
                    <InfoCell label="First Name" value={d.firstName} icon={User} />
                    <InfoCell label="Middle Name" value={d.middleName || "—"} />
                    <InfoCell label="Last Name" value={d.lastName} />
                    <InfoCell label="Gender" value={d.gender} />
                    <InfoCell label="Date of Birth" value={app.dob} icon={Calendar} />
                    <InfoCell label="Blood Group" value={d.bloodGroup || "—"} icon={Droplets} />
                    <InfoCell label="Caste Category" value={d.casteCategory} />
                    <InfoCell label="Nationality" value={app.nationality} />
                </div>

                <SectionHeading>Family Details</SectionHeading>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <InfoCell label="Father's Name" value={app.fatherName} icon={Users} />
                    <InfoCell label="Mother's Name" value={app.motherName} icon={Users} />
                    {app.husbandName && <InfoCell label="Husband's Name" value={app.husbandName} icon={Users} />}
                </div>

                <SectionHeading>Contact Information</SectionHeading>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <InfoCell label="Mobile Number" value={app.mobileNumber} icon={Phone} />
                    <InfoCell label="Email ID" value={app.emailAddress} icon={Mail} />
                </div>

                <SectionHeading>Permanent Address</SectionHeading>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <InfoCell label="House / Flat" value={d.perm_house || "—"} icon={MapPin} />
                    <InfoCell label="Locality / Sector" value={d.perm_locality || "—"} />
                    <InfoCell label="City / Town" value={d.perm_city || "—"} />
                    <InfoCell label="Pincode" value={d.perm_pincode || "—"} />
                    <InfoCell label="State" value={d.perm_state || "—"} />
                </div>

                <SectionHeading>Present Address</SectionHeading>
                {d.present_sameAsPermanent ? (
                    <div className="rounded-lg border bg-blue-50 border-blue-200 px-3 py-2.5 text-xs text-blue-700 font-medium mb-2">
                        ✓ Same as Permanent Address
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        <InfoCell label="House / Flat" value={d.present_house || "—"} icon={MapPin} />
                        <InfoCell label="Locality / Sector" value={d.present_locality || "—"} />
                        <InfoCell label="City / Town" value={d.present_city || "—"} />
                        <InfoCell label="Pincode" value={d.present_pincode || "—"} />
                        <InfoCell label="State" value={d.present_state || "—"} />
                    </div>
                )}

                <SectionHeading>Professional / Office Address</SectionHeading>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <InfoCell label="Office Address" value={d.prof_officeAddress || app.professionalAddress} icon={Building2} />
                    <InfoCell label="Pincode" value={d.prof_pincode || "—"} />
                    <InfoCell label="State" value={d.prof_state || "—"} />
                    <InfoCell label="Office Mobile" value={d.prof_mobile || "—"} icon={Phone} />
                    <InfoCell label="Office Email" value={d.prof_email || "—"} icon={Mail} />
                </div>

                {/* ════════════════════════════════════════════
                    TAB 2 — Qualification Details
                ════════════════════════════════════════════ */}
                <SectionHeading>Architecture Degree</SectionHeading>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <InfoCell label="Recognized Qualification From" value={d.barch_recognizedFrom} icon={GraduationCap} />
                    <InfoCell label="Name of Course" value={d.barch_courseName} />
                    <InfoCell label="Arch. School / Institute" value={d.barch_schoolName || "—"} />
                    <InfoCell label="University" value={d.barch_universityName || "—"} />
                    <InfoCell label="Year of Admission" value={d.barch_yearOfAdmission || "—"} />
                    <InfoCell label="Year of Graduation" value={d.barch_yearOfGraduation || "—"} icon={Calendar} />
                    <InfoCell label="Passing Format" value={d.barch_passingFormat || "—"} />
                    <InfoCell label="Grade / Marks Attained" value={d.barch_gradeAttained || "—"} highlight />
                    {app.additionalQualification && (
                        <InfoCell label="Additional Qualification" value={app.additionalQualification} icon={GraduationCap} />
                    )}
                </div>

                <SectionHeading>10+2 / Equivalent Examination</SectionHeading>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <InfoCell label="Name of Examination" value={d.twelfth_examName} />
                    <InfoCell label="Name of Board" value={d.twelfth_boardName} />
                    <InfoCell label="Mathematics Passed" value={d.twelfth_mathsPassed || "—"} highlight />
                    <InfoCell label="Aggregate Marks" value={d.twelfth_aggregateMarks || "—"} />
                    <InfoCell label="Maximum Marks" value={d.twelfth_maximumMarks || "—"} />
                    <InfoCell
                        label="Percentage (%)"
                        value={
                            d.twelfth_aggregateMarks && d.twelfth_maximumMarks
                                ? `${((+d.twelfth_aggregateMarks / +d.twelfth_maximumMarks) * 100).toFixed(2)}%`
                                : "—"
                        }
                        highlight
                    />
                </div>

                {/* ════════════════════════════════════════════
                    TAB 3 — Professional Details
                ════════════════════════════════════════════ */}
                <SectionHeading>Professional Details</SectionHeading>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <InfoCell
                        label="Date of Commencement"
                        value={d.prof_dateOfCommencement ? new Date(d.prof_dateOfCommencement).toLocaleDateString("en-IN") : "—"}
                        icon={Calendar}
                    />
                    <InfoCell label="Type of Profession" value={d.prof_typeOfProfession || "—"} icon={Briefcase} />
                    <InfoCell
                        label="Period in India"
                        value={`${d.prof_indiaYears ?? 0} yrs ${d.prof_indiaMonths ?? 0} mos`}
                    />
                    <InfoCell
                        label="Period Outside India"
                        value={`${d.prof_outsideYears ?? 0} yrs ${d.prof_outsideMonths ?? 0} mos`}
                    />
                    {d.prof_remarks && <InfoCell label="Remarks" value={d.prof_remarks} />}
                </div>

                {/* ════════════════════════════════════════════
                    TAB 4 — Documents
                ════════════════════════════════════════════ */}
                <SectionHeading>Document Status</SectionHeading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                        { label: "Passport Size Photograph", status: "Uploaded" },
                        { label: "Applicant Signature", status: "Uploaded" },
                        { label: "Date of Birth Proof", status: "Uploaded" },
                        {
                            label: "Caste Certificate",
                            status: app.casteCategory !== "General"
                                ? "Required — Pending Upload"
                                : "N/A (General Category)",
                        },
                        { label: "Provisional / Final Degree Certificate", status: "Uploaded" },
                        { label: "All Semester / Consolidated Marksheet", status: "Uploaded" },
                        { label: "10+2 or Equivalent Marksheet", status: "Uploaded" },
                        { label: "Practical Training Certificate", status: "Not Uploaded" },
                    ].map((doc) => {
                        const isUploaded = doc.status === "Uploaded";
                        const isPending = doc.status.startsWith("Required");
                        const isNA = doc.status.startsWith("N/A");
                        return (
                            <div
                                key={doc.label}
                                className={`rounded-lg border p-3 flex items-center justify-between gap-3 ${isUploaded ? "bg-emerald-50 border-emerald-200"
                                    : isPending ? "bg-amber-50 border-amber-200"
                                        : isNA ? "bg-muted/10 border-border/30"
                                            : "bg-muted/20 border-border/50"
                                    }`}
                            >
                                <p className="text-xs font-medium text-foreground">{doc.label}</p>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${isUploaded ? "bg-emerald-100 text-emerald-700"
                                    : isPending ? "bg-amber-100 text-amber-700"
                                        : isNA ? "bg-muted text-muted-foreground"
                                            : "bg-muted text-muted-foreground"
                                    }`}>
                                    {doc.status}
                                </span>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

// ── Inline edit view ──────────────────────────────────────────────────────────

export function ApplicationEditView({ app, onSaved, onCancel }: { app: ApplicationRecord; onSaved: () => void; onCancel?: () => void }) {
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
            toast.success(`Application #${app.appNumber} successfully updated.`);
            onSaved();
        }, 1500);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col flex-1 min-h-0 overflow-hidden">
                {isDirty && (
                    <div className="mx-6 mt-3 rounded-md bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-800 font-medium flex items-center gap-2 flex-shrink-0">
                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                        Unsaved changes — click Save Changes below
                    </div>
                )}

                <ScrollArea className="flex-1 min-h-0 mt-2">
                    <div className="px-6 pb-8">
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

                <div className="border-t bg-background/95 backdrop-blur px-6 py-3 flex items-center justify-between gap-3 flex-shrink-0">
                    <p className="text-xs text-muted-foreground hidden sm:block truncate">
                        {isDirty ? "You have unsaved changes" : `Editing App #${app.appNumber}`}
                    </p>
                    <div className="flex gap-2 ml-auto">
                        {isDirty && (
                            <Button type="button" variant="outline" size="sm" onClick={() => { methods.reset(); onCancel?.(); }} disabled={isSaving}>
                                Discard Changes
                            </Button>
                        )}
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

// ── Main export ───────────────────────────────────────────────────────────────

export function ApplicationViewSheet({ app, open, onOpenChange }: ApplicationViewSheetProps) {
    const [isEditing, setIsEditing] = useState(false);

    const handleOpenChange = (v: boolean) => {
        if (!v) setIsEditing(false);
        onOpenChange(v);
    };

    if (!app) return null;

    return (
        <Sheet open={open} onOpenChange={handleOpenChange}>
            <SheetContent side="right" className="w-full sm:max-w-3xl p-0 flex flex-col gap-0 overflow-hidden">

                {/* Header */}
                <SheetHeader className="px-6 pt-5 pb-4 border-b bg-muted/20 flex-shrink-0">
                    <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <SheetTitle className="text-xl font-bold flex items-center gap-2 flex-wrap">
                                {app.title} {app.name}
                                <span className="font-mono text-sm text-muted-foreground font-normal">#{app.appNumber}</span>
                            </SheetTitle>
                            <SheetDescription className="flex items-center gap-2 mt-1.5 flex-wrap">
                                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${STAGE_COLORS[app.workflow_stage]}`}>
                                    {STAGE_LABELS[app.workflow_stage]}
                                </span>
                                <span className="text-xs text-muted-foreground">·</span>
                                <span className="text-xs text-muted-foreground truncate">{app.qualification}</span>
                            </SheetDescription>
                        </div>

                        {!isEditing ? (
                            <Button size="sm" className="flex-shrink-0 gap-1.5" onClick={() => setIsEditing(true)}>
                                <Pencil className="h-3.5 w-3.5" />
                                Edit Application
                            </Button>
                        ) : (
                            <Button size="sm" variant="outline" className="flex-shrink-0 gap-1.5" onClick={() => setIsEditing(false)}>
                                <X className="h-3.5 w-3.5" />
                                Back to View
                            </Button>
                        )}
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${isEditing ? "bg-amber-100 text-amber-700" : "bg-blue-50 text-blue-700"
                            }`}>
                            {isEditing ? "✎ Edit Mode" : "👁 View Mode"}
                        </span>
                        {app.enrolmentNumber && (
                            <span className="text-[11px] text-muted-foreground font-mono">{app.enrolmentNumber}</span>
                        )}
                    </div>
                </SheetHeader>

                {/* Body */}
                <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
                    {isEditing
                        ? <ApplicationEditView app={app} onSaved={() => setIsEditing(false)} />
                        : <ApplicationReadView app={app} />
                    }
                </div>
            </SheetContent>
        </Sheet>
    );
}
