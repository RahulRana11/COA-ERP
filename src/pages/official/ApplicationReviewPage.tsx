import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
    ArrowLeft, FileText, CheckCircle2, AlertCircle, ArrowRight,
    RotateCcw, MessageSquareWarning, XCircle, Award, ChevronDown,
    Clock, User2, Pencil, X
} from "lucide-react";

import { ApplicationReadView, ApplicationEditView } from "./components/ApplicationViewSheet";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
    useAuthStore,
    getUserStage,
    STAGE_LABELS,
    STAGE_COLORS,
    REVERT_STAGE,
    WorkflowStage,
    AuditTrailEntry,
} from "@/store/authStore";

// ── Types ─────────────────────────────────────────────────────────────────────

type ActionType =
    | "forward"
    | "allotAndForward"
    | "finalApprove"
    | "raiseQuery"
    | "revertS1"
    | "revertS2"
    | "revertS3"
    | "remove";

// ── Audit trail display ───────────────────────────────────────────────────────

function AuditTrail({ entries }: { entries: AuditTrailEntry[] }) {
    const [open, setOpen] = useState(false);
    if (entries.length === 0) return null;

    return (
        <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-full justify-between text-muted-foreground hover:text-foreground border rounded-md px-3 py-2 h-auto">
                    <span className="flex items-center gap-2 text-xs font-medium">
                        <Clock className="h-3.5 w-3.5" />
                        Audit Trail ({entries.length} events)
                    </span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className="mt-2 space-y-2">
                    {[...entries].reverse().map((e, i) => (
                        <div key={i} className="rounded-md border bg-muted/20 px-3 py-2.5 text-xs">
                            <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="flex items-center gap-1.5 font-semibold text-foreground">
                                    <User2 className="h-3 w-3 text-primary" />
                                    {e.actor}
                                </span>
                                <span className="text-muted-foreground tabular-nums">
                                    {new Date(e.timestamp).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                                </span>
                            </div>
                            <p className="font-medium text-primary mb-0.5">{e.action}</p>
                            <p className="text-muted-foreground italic">"{e.remarks}"</p>
                        </div>
                    ))}
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}

// ── Per-stage action panel ────────────────────────────────────────────────────

interface ActionPanelProps {
    appId: string;
    appNumber: string;
    currentStage: WorkflowStage;
    userStage: number | null; // 1–4 or null (Super Admin)
    isVerified: boolean;
    onDone: () => void;
}

function ActionPanel({ appId, appNumber, currentStage, userStage, isVerified, onDone }: ActionPanelProps) {
    const { activeUser, forwardApplication, allotRegNumberAndForward, revertApplication, raiseQuery, removeFromPortal, finalApprove, setApplicationVerified } = useAuthStore();
    const actorName = activeUser.fullName;

    const [selectedAction, setSelectedAction] = useState<ActionType | null>(null);
    const [remarks, setRemarks] = useState("");
    const [remarksError, setRemarksError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const REMARK_REQUIRED: ActionType[] = ["raiseQuery", "revertS1", "revertS2", "revertS3", "remove"];
    const needsRemarks = selectedAction !== null && REMARK_REQUIRED.includes(selectedAction);

    const handleSubmit = async () => {
        if (!selectedAction) {
            toast.error("Please select an action first.");
            return;
        }
        if (needsRemarks && !remarks.trim()) {
            setRemarksError("Remarks are mandatory for this action.");
            return;
        }
        setIsSubmitting(true);
        await new Promise((r) => setTimeout(r, 900));

        switch (selectedAction) {
            case "forward":
                forwardApplication(appId, actorName);
                toast.success(`Application #${appNumber} forwarded to next stage.`);
                break;
            case "allotAndForward":
                allotRegNumberAndForward(appId, actorName);
                toast.success(`Reg. number allotted & forwarded for certificate generation.`);
                break;
            case "finalApprove":
                finalApprove(appId, actorName);
                toast.success(`Application #${appNumber} approved. Certificate & ID issued.`);
                break;
            case "raiseQuery":
                raiseQuery(appId, remarks.trim(), actorName);
                toast.warning(`Query raised to applicant for #${appNumber}.`);
                break;
            case "revertS1":
                revertApplication(appId, "Stage_1_Processing", remarks.trim(), actorName);
                toast.info(`Application #${appNumber} reverted to Stage 1.`);
                break;
            case "revertS2":
                revertApplication(appId, "Stage_2_Scrutiny", remarks.trim(), actorName);
                toast.info(`Application #${appNumber} reverted to Stage 2.`);
                break;
            case "revertS3":
                revertApplication(appId, "Stage_3_RegNo", remarks.trim(), actorName);
                toast.info(`Application #${appNumber} reverted to Stage 3.`);
                break;
            case "remove":
                removeFromPortal(appId, actorName, remarks.trim() || undefined);
                toast.error(`Application #${appNumber} removed from portal.`);
                break;
        }
        setIsSubmitting(false);
        onDone();
    };

    // Shorthand button builders
    const ActionBtn = ({
        action, label, icon: Icon, colorClass = "", variant = "outline" as const,
    }: { action: ActionType; label: string; icon: any; colorClass?: string; variant?: "outline" | "default" | "destructive"; }) => (
        <button
            type="button"
            onClick={() => { setSelectedAction(action); setRemarksError(""); }}
            className={`w-full flex items-start gap-2.5 rounded-md border p-3 text-sm text-left transition-all
                ${selectedAction === action
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "hover:bg-muted/50 bg-background"
                } ${colorClass}`}
        >
            <Icon className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span className="font-medium leading-tight">{label}</span>
        </button>
    );

    return (
        <Card className="shadow-md border-primary/20 lg:sticky top-[100px]">
            <CardHeader className="bg-primary/5 border-b py-4">
                <h3 className="font-semibold text-base flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-primary" />
                    Workflow Action Panel
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                    {userStage
                        ? `You are acting as Stage ${userStage}`
                        : "Super Admin — all actions available"}
                </p>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
                {/* ── Verification Checkbox ───────────────────────── */}
                {!["Approved", "Rejected", "Query_Raised"].includes(currentStage) && (
                    <div className="flex items-center gap-2 mb-4 p-3 rounded-md border bg-primary/5 border-primary/20">
                        <Checkbox 
                            id="verify-app" 
                            checked={isVerified} 
                            onCheckedChange={(c) => {
                                setApplicationVerified(appId, !!c);
                                if (!c && (selectedAction === "forward" || selectedAction === "allotAndForward" || selectedAction === "finalApprove")) {
                                    setSelectedAction(null);
                                }
                            }} 
                        />
                        <label 
                            htmlFor="verify-app" 
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none"
                        >
                            {currentStage === "Stage_2_Scrutiny" ? "Scrutiny Done" : "Application Verified"}
                        </label>
                    </div>
                )}

                {/* ── Stage 1: Clerk ──────────────────────────────── */}
                {(userStage === 1 || userStage === null) && currentStage === "Stage_1_Processing" && (
                    <>
                        {isVerified && <ActionBtn action="forward" label="Forward Application (→ Stage 2: Scrutiny)" icon={ArrowRight} colorClass="text-blue-700" />}
                        <ActionBtn action="raiseQuery" label="Send Back to Applicant (Query Raised)" icon={MessageSquareWarning} colorClass="text-amber-700" />
                        <ActionBtn action="remove" label="Remove Application from Portal" icon={XCircle} colorClass="text-destructive" />
                    </>
                )}

                {/* ── Stage 2: HOD ────────────────────────────────── */}
                {(userStage === 2 || userStage === null) && currentStage === "Stage_2_Scrutiny" && (
                    <>
                        {isVerified && <ActionBtn action="forward" label="Forward Application (→ Stage 3: Reg. Number)" icon={ArrowRight} colorClass="text-blue-700" />}
                        <ActionBtn action="raiseQuery" label="Send Back to Applicant (Query Raised)" icon={MessageSquareWarning} colorClass="text-amber-700" />
                        <ActionBtn action="revertS1" label="Revert to Stage 1 — Application Processing" icon={RotateCcw} colorClass="text-orange-700" />
                        <ActionBtn action="remove" label="Remove Application from Portal" icon={XCircle} colorClass="text-destructive" />
                    </>
                )}

                {/* ── Stage 3: Registrar ──────────────────────────── */}
                {(userStage === 3 || userStage === null) && currentStage === "Stage_3_RegNo" && (
                    <>
                        {isVerified && <ActionBtn action="allotAndForward" label="Allot Reg. Number & Forward (→ Stage 4: Certificate)" icon={ArrowRight} colorClass="text-blue-700" />}
                        <ActionBtn action="revertS2" label="Revert to Stage 2 — Under Scrutiny" icon={RotateCcw} colorClass="text-orange-700" />
                        <ActionBtn action="remove" label="Remove Application from Portal" icon={XCircle} colorClass="text-destructive" />
                    </>
                )}

                {/* ── Stage 4: President ──────────────────────────── */}
                {(userStage === 4 || userStage === null) && currentStage === "Stage_4_Certificate" && (
                    <>
                        {isVerified && <ActionBtn action="finalApprove" label="Proceed — Final Approval & Issue Certificate" icon={Award} colorClass="text-emerald-700" />}
                        <ActionBtn action="revertS3" label="Revert to Stage 3 — Generate Reg. Number" icon={RotateCcw} colorClass="text-orange-700" />
                        <ActionBtn action="remove" label="Remove Application from Portal" icon={XCircle} colorClass="text-destructive" />
                    </>
                )}

                {/* No matching stage */}
                {userStage !== null && currentStage !== `Stage_${userStage}_Processing` &&
                    currentStage !== `Stage_${userStage}_Scrutiny` &&
                    currentStage !== `Stage_${userStage}_RegNo` &&
                    currentStage !== `Stage_${userStage}_Certificate` &&
                    !["Stage_1_Processing", "Stage_2_Scrutiny", "Stage_3_RegNo", "Stage_4_Certificate"].includes(currentStage) && (
                        <p className="text-xs text-muted-foreground text-center py-4">
                            This application is not in your workflow stage.
                        </p>
                    )}

                {/* Remarks textarea — appears when needed */}
                {needsRemarks && (
                    <div className="space-y-1.5 pt-1">
                        <Separator />
                        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Remarks <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                            value={remarks}
                            onChange={(e) => { setRemarks(e.target.value); setRemarksError(""); }}
                            placeholder="Enter mandatory remarks for this action — stored permanently in audit trail..."
                            className="min-h-[100px] resize-none text-sm"
                        />
                        {remarksError && <p className="text-destructive text-xs font-medium">{remarksError}</p>}
                    </div>
                )}

                {/* Terminal states — read only */}
                {(currentStage === "Approved" || currentStage === "Rejected" || currentStage === "Query_Raised") && (
                    <div className={`rounded-md border px-3 py-2 text-xs font-medium text-center ${STAGE_COLORS[currentStage]}`}>
                        {currentStage === "Approved" && "✓ Application is fully approved. No further actions."}
                        {currentStage === "Rejected" && "⊘ Application has been removed from the portal."}
                        {currentStage === "Query_Raised" && "⚠ Query raised to applicant — awaiting resubmission."}
                    </div>
                )}
            </CardContent>

            {selectedAction && !["Approved", "Rejected", "Query_Raised"].includes(currentStage) && (
                <CardFooter className="bg-muted/30 border-t pt-4">
                    <Button
                        className="w-full"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                    >
                        {isSubmitting ? "Processing..." : "Confirm & Submit Action"}
                    </Button>
                </CardFooter>
            )}
        </Card>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────



export default function ApplicationReviewPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { applications, activeUser } = useAuthStore();
    const [isEditing, setIsEditing] = useState(false);
    
    const app = applications.find((a) => a.id === id);

    // Derive stage (1–4) from assigned features; null = Super Admin
    const userStageNum: number | null = (() => {
        const s = getUserStage(activeUser.assigned_features);
        if (!s) return null;
        if (s === "Stage_1_Processing") return 1;
        if (s === "Stage_2_Scrutiny") return 2;
        if (s === "Stage_3_RegNo") return 3;
        if (s === "Stage_4_Certificate") return 4;
        return null;
    })();

    const handleDone = () => navigate("/official/dashboard");

    if (!app) {
        return (
            <div className="max-w-7xl mx-auto p-6 flex flex-col items-center gap-4 text-center">
                <AlertCircle className="h-12 w-12 text-destructive" />
                <h1 className="text-2xl font-bold">Application Not Found</h1>
                <p className="text-muted-foreground">Application ID <code>{id}</code> does not exist.</p>
                <Button variant="outline" onClick={() => navigate("/official/dashboard")}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">

            {/* Header */}
            <div className="flex items-center gap-4 mb-2">
                <Button variant="outline" size="icon" onClick={() => navigate("/official/dashboard")}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                    <div className="flex items-center gap-3 flex-wrap">
                        <h1 className="text-3xl font-semibold tracking-tight">Review Application</h1>
                        <Badge variant="secondary" className="text-sm px-3 font-mono">#{app.appNumber}</Badge>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${STAGE_COLORS[app.workflow_stage]}`}>
                            {STAGE_LABELS[app.workflow_stage]}
                        </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-0.5">
                        Viewing as <span className="font-semibold text-foreground">{activeUser.fullName}</span>
                        {userStageNum && <span className="text-primary font-semibold"> · Stage {userStageNum}</span>}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">

                {/* ── LEFT: Application Data ── */}
                <div className="lg:col-span-2 flex flex-col bg-card rounded-xl border shadow-sm overflow-hidden h-[800px]">
                    <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/20 flex-shrink-0">
                        <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${isEditing ? "bg-amber-100 text-amber-700" : "bg-blue-50 text-blue-700"}`}>
                                {isEditing ? "✎ Edit Mode" : "👁 View Mode"}
                            </span>
                        </div>
                        {!isEditing ? (
                            <Button size="sm" variant="outline" className="h-8 gap-1.5" onClick={() => setIsEditing(true)}>
                                <Pencil className="h-3.5 w-3.5" />
                                Edit Application
                            </Button>
                        ) : (
                            <Button size="sm" variant="outline" className="h-8 gap-1.5" onClick={() => setIsEditing(false)}>
                                <X className="h-3.5 w-3.5" />
                                Back to View
                            </Button>
                        )}
                    </div>
                    
                    <div className="flex-1 min-h-0 flex flex-col overflow-hidden relative">
                        {isEditing ? (
                            <ApplicationEditView 
                                app={app} 
                                onSaved={() => setIsEditing(false)} 
                                onCancel={() => setIsEditing(false)} 
                            />
                        ) : (
                            <ScrollArea className="flex-1 h-full">
                                <div className="p-2 sm:p-4">
                                    <ApplicationReadView app={app} />
                                </div>
                            </ScrollArea>
                        )}
                    </div>
                </div>

                {/* ── RIGHT: Action Panel ── */}
                <div className="lg:col-span-1">
                    <ActionPanel
                        appId={app.id}
                        appNumber={app.appNumber}
                        currentStage={app.workflow_stage}
                        userStage={userStageNum}
                        isVerified={!!app.isVerified}
                        onDone={handleDone}
                    />
                </div>
            </div>
        </div>
    );
}
