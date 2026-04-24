import { useState, useMemo, useEffect } from "react";
import { Filter, Search, ArrowRight, XCircle, AlertTriangle, CheckSquare2 } from "lucide-react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { FilterSheet } from "./components/FilterSheet";
import { ApplicationViewSheet } from "./components/ApplicationViewSheet";
import {
    useAuthStore, getUserStage, STAGE_LABELS, STAGE_COLORS,
    WorkflowStage, ApplicationRecord,
} from "@/store/authStore";
import { useNavigate } from "react-router-dom";

// ── Debounce hook ─────────────────────────────────────────────────────────────

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        const handler = setTimeout(() => { setDebouncedValue(value); }, delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}

// ── Per-stage tab definition ──────────────────────────────────────────────────

interface TabDef {
    key: string;
    label: string;
    /** workflow_stages that appear in this tab */
    stages: WorkflowStage[];
    /** extra filter: only reverted apps (audit trail has a "Reverted" entry) */
    revertedOnly?: boolean;
    /** extra filter: exclude apps that were reverted (fresh submissions only) */
    freshOnly?: boolean;
}

function getTabsForStage(stage: WorkflowStage | null): TabDef[] {
    switch (stage) {
        case "Stage_1_Processing":
            return [
                { key: "pending", label: "Pending New Applications", stages: ["Stage_1_Processing"], freshOnly: true },
                { key: "review",  label: "Review Applications",     stages: ["Stage_1_Processing"], revertedOnly: true },
                { key: "approved", label: "Approved",               stages: ["Approved"] },
                { key: "removed",  label: "Removed",                stages: ["Rejected"] },
            ];
        case "Stage_2_Scrutiny":
            return [
                { key: "pending", label: "Pending Scrutiny",   stages: ["Stage_2_Scrutiny"], freshOnly: true },
                { key: "review",  label: "Review Applications",     stages: ["Stage_2_Scrutiny"], revertedOnly: true },
                { key: "query",   label: "Query Raised",        stages: ["Query_Raised"] },
                { key: "removed", label: "Removed",             stages: ["Rejected"] },
            ];
        case "Stage_3_RegNo":
            return [
                { key: "pending",  label: "Pending Reg. No.",  stages: ["Stage_3_RegNo"] },
                { key: "approved", label: "Approved",          stages: ["Approved"] },
                { key: "removed",  label: "Removed",           stages: ["Rejected"] },
            ];
        case "Stage_4_Certificate":
            return [
                { key: "pending",  label: "Pending Certificate", stages: ["Stage_4_Certificate"] },
                { key: "approved", label: "Approved",            stages: ["Approved"] },
                { key: "removed",  label: "Removed",             stages: ["Rejected"] },
            ];
        default:
            // Super Admin — sees everything
            return [
                { key: "all",      label: "All Active",  stages: ["Stage_1_Processing","Stage_2_Scrutiny","Stage_3_RegNo","Stage_4_Certificate","Query_Raised"] },
                { key: "approved", label: "Approved",    stages: ["Approved"] },
                { key: "removed",  label: "Removed",     stages: ["Rejected"] },
            ];
    }
}

/** Determine if an app was reverted (has at least one "Reverted" audit entry) */
function wasReverted(app: ApplicationRecord) {
    return app.audit_trail.some((e) => e.action.startsWith("Reverted"));
}

// ── Main component ────────────────────────────────────────────────────────────

export default function OfficialDashboard() {
    const navigate = useNavigate();
    const { activeUser, applications, forwardApplication, removeFromPortal } = useAuthStore();

    const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("pending");
    const [confirmForwardId, setConfirmForwardId] = useState<string | null>(null);
    const [confirmRemoveId, setConfirmRemoveId] = useState<string | null>(null);
    const [confirmBulkForward, setConfirmBulkForward] = useState(false);
    const [confirmBulkRemove, setConfirmBulkRemove] = useState(false);
    const [viewingApp, setViewingApp] = useState<ApplicationRecord | null>(null);
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

    // ── Stage detection ──────────────────────────────────────────────────────
    const userStage = useMemo(
        () => getUserStage(activeUser.assigned_features),
        [activeUser]
    );

    const userStageNum: number | null = useMemo(() => {
        if (userStage === "Stage_1_Processing") return 1;
        if (userStage === "Stage_2_Scrutiny")   return 2;
        if (userStage === "Stage_3_RegNo")      return 3;
        if (userStage === "Stage_4_Certificate") return 4;
        return null;
    }, [userStage]);

    const tabs = useMemo(() => getTabsForStage(userStage), [userStage]);

    // Reset to first tab when user changes
    useEffect(() => {
        setActiveTab(tabs[0]?.key ?? "pending");
    }, [activeUser.id]);

    // ── Filters ──────────────────────────────────────────────────────────────
    const formMethods = useForm({
        defaultValues: {
            globalSearch: "",
            firstName: "",
            appMode: "Both",
            paymentStatus: "Both",
            appNoFrom: "",
            appNoTo: "",
            appDateFrom: null as Date | null,
            appDateTo: null as Date | null,
            appStatus: "All",
        },
    });

    const filterValues = useWatch({ control: formMethods.control });
    const debouncedFilters = useDebounce(filterValues, 300);

    // ── Filtered data ─────────────────────────────────────────────────────────
    const filteredData = useMemo(() => {
        const currentTab = tabs.find((t) => t.key === activeTab) ?? tabs[0];
        if (!currentTab) return [];

        return applications.filter((app) => {
            // Stage filter
            if (!currentTab.stages.includes(app.workflow_stage)) return false;

            // Fresh / reverted sub-filter (Stage 1 tabs)
            if (currentTab.freshOnly && wasReverted(app)) return false;
            if (currentTab.revertedOnly && !wasReverted(app)) return false;

            // Unpaid filter (don't show in stage 1 pending)
            if (currentTab.key === "pending" && userStage === "Stage_1_Processing" && app.paymentStatus === "Unpaid") return false;

            // Global search
            if (debouncedFilters.globalSearch) {
                const q = debouncedFilters.globalSearch.toLowerCase();
                if (!app.appNumber.toLowerCase().includes(q) && !app.name.toLowerCase().includes(q)) return false;
            }
            if (debouncedFilters.firstName) {
                if (!app.name.toLowerCase().includes(debouncedFilters.firstName.toLowerCase())) return false;
            }
            if (debouncedFilters.appMode && debouncedFilters.appMode !== "Both") {
                if (app.appMode !== debouncedFilters.appMode) return false;
            }
            if (debouncedFilters.appNoFrom) {
                if (parseInt(app.appNumber) < parseInt(debouncedFilters.appNoFrom)) return false;
            }
            if (debouncedFilters.appNoTo) {
                if (parseInt(app.appNumber) > parseInt(debouncedFilters.appNoTo)) return false;
            }
            return true;
        });
    }, [applications, debouncedFilters, activeTab, tabs, userStage]);

    // Reset selections on tab / filter change
    useEffect(() => { setSelectedIds(new Set()); }, [activeTab, debouncedFilters]);

    // ── Selection helpers ────────────────────────────────────────────────────
    const allVisibleIds = filteredData.map((a) => a.id);
    const allSelected  = allVisibleIds.length > 0 && allVisibleIds.every((id) => selectedIds.has(id));
    const someSelected = selectedIds.size > 0 && !allSelected;

    const toggleSelectAll = () => {
        if (allSelected) setSelectedIds(new Set());
        else setSelectedIds(new Set(allVisibleIds));
    };
    const toggleSelect = (id: string) => {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id); else next.add(id);
            return next;
        });
    };

    // ── Tab: is this an actionable (pending) tab? ────────────────────────────
    const currentTab = tabs.find((t) => t.key === activeTab) ?? tabs[0];
    const isInboxTab = currentTab?.key !== "approved" && currentTab?.key !== "removed";

    // ── Single-row actions ───────────────────────────────────────────────────
    const handleForward = (appId: string) => {
        const app = applications.find((a) => a.id === appId);
        forwardApplication(appId, activeUser.fullName);
        setConfirmForwardId(null);
        toast.success(`Application #${app?.appNumber} forwarded.`);
    };

    const handleRemove = (appId: string) => {
        const app = applications.find((a) => a.id === appId);
        removeFromPortal(appId, activeUser.fullName);
        setConfirmRemoveId(null);
        toast.error(`Application #${app?.appNumber} removed from portal.`);
    };

    // ── Bulk actions ─────────────────────────────────────────────────────────
    const handleBulkForward = () => {
        Array.from(selectedIds).forEach((id) => forwardApplication(id, activeUser.fullName));
        setConfirmBulkForward(false);
        setSelectedIds(new Set());
        toast.success(`${selectedIds.size} applications forwarded.`);
    };

    const handleBulkRemove = () => {
        Array.from(selectedIds).forEach((id) => removeFromPortal(id, activeUser.fullName));
        setConfirmBulkRemove(false);
        setSelectedIds(new Set());
        toast.error(`${selectedIds.size} applications removed.`);
    };

    return (
        <FormProvider {...formMethods}>
            <div className="max-w-[1400px] w-full mx-auto p-4 md:p-6 space-y-5 flex flex-col min-w-0">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight">Application Inbox</h1>
                        <p className="text-muted-foreground">
                            Viewing as <span className="font-semibold text-foreground">{activeUser.fullName}</span>
                            {" "}·{" "}
                            <span className="font-semibold text-primary">{activeUser.base_role}</span>
                            {userStageNum && (
                                <span className={`ml-2 text-xs font-bold px-2 py-0.5 rounded-full border ${
                                    STAGE_COLORS[userStage!]
                                }`}>
                                    Stage {userStageNum}
                                </span>
                            )}
                        </p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:min-w-[250px]">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search by App No. or Name..."
                                className="pl-8"
                                {...formMethods.register("globalSearch")}
                            />
                        </div>
                        <Button onClick={() => setIsFilterSheetOpen(true)} variant="secondary">
                            <Filter className="mr-2 h-4 w-4" />
                            Filters
                        </Button>
                    </div>
                </div>

                {/* Stage context pill */}
                {userStage && (
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-muted-foreground font-medium">Your Active Stage:</span>
                        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${STAGE_COLORS[userStage]}`}>
                            {STAGE_LABELS[userStage]}
                        </span>
                    </div>
                )}

                {/* Dynamic Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className={`grid w-full max-w-2xl`} style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
                        {tabs.map((tab) => {
                            const count = applications.filter((app) => {
                                if (!tab.stages.includes(app.workflow_stage)) return false;
                                if (tab.freshOnly && wasReverted(app)) return false;
                                if (tab.revertedOnly && !wasReverted(app)) return false;
                                return true;
                            }).length;
                            return (
                                <TabsTrigger key={tab.key} value={tab.key} className="text-xs">
                                    {tab.label}
                                    {count > 0 && (
                                        <Badge variant="secondary" className="ml-1.5 text-[10px] px-1.5 py-0">
                                            {count}
                                        </Badge>
                                    )}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                </Tabs>

                {/* Bulk action toolbar */}
                {selectedIds.size > 0 && (
                    <div className="flex items-center gap-3 px-4 py-2.5 bg-primary/5 border border-primary/20 rounded-lg">
                        <CheckSquare2 className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">
                            {selectedIds.size} application{selectedIds.size > 1 ? "s" : ""} selected
                        </span>
                        <div className="flex-1" />
                        {isInboxTab && (
                            <>
                                <Button size="sm" className="h-8 gap-1.5 text-xs" onClick={() => setConfirmBulkForward(true)}>
                                    <ArrowRight className="h-3.5 w-3.5" /> Forward Selected
                                </Button>
                                <Button
                                    size="sm" variant="outline"
                                    className="h-8 gap-1.5 text-xs text-destructive border-destructive/30 hover:bg-destructive/10"
                                    onClick={() => setConfirmBulkRemove(true)}
                                >
                                    <XCircle className="h-3.5 w-3.5" /> Remove Selected
                                </Button>
                            </>
                        )}
                        <Button size="sm" variant="ghost" className="h-8 text-xs text-muted-foreground" onClick={() => setSelectedIds(new Set())}>
                            Clear
                        </Button>
                    </div>
                )}

                {/* Table */}
                <div className="flex-1 w-full min-w-0 bg-background rounded-md shadow-sm border border-border overflow-hidden">
                    <Table>
                        <TableHeader className="bg-muted/40">
                            <TableRow>
                                <TableHead className="w-10 pr-0">
                                    <Checkbox
                                        checked={allSelected}
                                        ref={(el) => { if (el) (el as any).indeterminate = someSelected; }}
                                        onCheckedChange={toggleSelectAll}
                                        aria-label="Select all"
                                    />
                                </TableHead>
                                <TableHead className="font-semibold">App No.</TableHead>
                                <TableHead className="font-semibold">Applicant</TableHead>
                                <TableHead className="font-semibold">Qualification</TableHead>
                                <TableHead className="font-semibold">Enrolment No.</TableHead>
                                <TableHead className="font-semibold">Mode</TableHead>
                                <TableHead className="font-semibold text-center">Details</TableHead>
                                {userStageNum === 4 && <TableHead className="font-semibold">Registration</TableHead>}
                                {currentTab?.key === "removed" && <TableHead className="font-semibold">Removed by</TableHead>}
                                {(currentTab?.key === "review" || currentTab?.key === "query" || currentTab?.key === "removed") && <TableHead className="font-semibold">Remark</TableHead>}
                                {isInboxTab && <TableHead className="font-semibold text-right">Quick Actions</TableHead>}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7 + (userStageNum === 4 ? 1 : 0) + (currentTab?.key === "removed" ? 1 : 0) + ((currentTab?.key === "review" || currentTab?.key === "query" || currentTab?.key === "removed") ? 1 : 0) + (isInboxTab ? 1 : 0)} className="h-32 text-center">
                                        <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                            <AlertTriangle className="h-8 w-8 text-muted-foreground/50" />
                                            <p className="font-medium">No applications in this tab</p>
                                            <p className="text-xs">Applications matching this stage will appear here.</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredData.map((app) => {
                                    const isSelected = selectedIds.has(app.id);
                                    const isReverted = wasReverted(app) && userStage === "Stage_1_Processing";
                                    const removedBy = app.audit_trail.find(entry => entry.action === "Removed from Portal")?.actor || "Unknown";
                                    
                                    let displayRemark = "—";
                                    if (currentTab?.key === "removed") {
                                        displayRemark = [...app.audit_trail].reverse().find(entry => entry.action === "Removed from Portal")?.remarks || "—";
                                    } else if (currentTab?.key === "query") {
                                        displayRemark = [...app.audit_trail].reverse().find(entry => entry.action === "Query Raised to Applicant")?.remarks || "—";
                                    } else if (currentTab?.key === "review") {
                                        displayRemark = [...app.audit_trail].reverse().find(entry => entry.action.startsWith("Reverted"))?.remarks || "—";
                                    }

                                    const showRemarkCol = currentTab?.key === "review" || currentTab?.key === "query" || currentTab?.key === "removed";

                                    return (
                                        <TableRow
                                            key={app.id}
                                            className={`hover:bg-muted/30 transition-colors ${isSelected ? "bg-primary/5 hover:bg-primary/10" : ""} ${isReverted ? "border-l-2 border-l-orange-400" : ""}`}
                                        >
                                            <TableCell className="pr-0 w-10">
                                                <Checkbox
                                                    checked={isSelected}
                                                    onCheckedChange={() => toggleSelect(app.id)}
                                                    aria-label={`Select application ${app.appNumber}`}
                                                />
                                            </TableCell>
                                            <TableCell className="font-mono text-sm font-semibold">{app.appNumber}</TableCell>
                                            <TableCell>
                                                <div>
                                                    <p className="font-medium text-sm">{app.name}</p>
                                                    <p className="text-xs text-muted-foreground">{app.dob}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-xs max-w-[180px] truncate">{app.qualification}</TableCell>
                                            <TableCell className="text-xs font-medium">{app.enrolmentNumber || "—"}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="text-xs">{app.appMode}</Badge>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <Button
                                                    size="sm" variant="outline"
                                                    className="h-7 px-3 text-xs font-medium gap-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                                                    onClick={() => navigate(`/official/review/${app.id}`)}
                                                >
                                                    View / Process
                                                </Button>
                                            </TableCell>
                                            {userStageNum === 4 && (
                                                <TableCell className="text-xs font-medium">
                                                    {app.regNumber || `CA/${new Date().getFullYear()}/${app.appNumber.padStart(5, "0")}`}
                                                </TableCell>
                                            )}
                                            {currentTab?.key === "removed" && (
                                                <TableCell className="text-sm font-medium">
                                                    {removedBy}
                                                </TableCell>
                                            )}
                                            {showRemarkCol && (
                                                <TableCell className="text-xs max-w-[200px] truncate" title={displayRemark}>
                                                    {displayRemark}
                                                </TableCell>
                                            )}
                                            {isInboxTab && (
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        {app.isVerified && (
                                                            <Button
                                                                size="sm" className="h-7 text-xs gap-1"
                                                                onClick={() => setConfirmForwardId(app.id)}
                                                            >
                                                                {userStageNum === 4 ? "Approve" : "Forward"} <ArrowRight className="h-3 w-3" />
                                                            </Button>
                                                        )}
                                                        <Button
                                                            size="sm" variant="outline"
                                                            className="h-7 text-xs gap-1 text-destructive border-destructive/30 hover:bg-destructive/10"
                                                            onClick={() => setConfirmRemoveId(app.id)}
                                                        >
                                                            <XCircle className="h-3 w-3" /> Remove
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            )}
                                        </TableRow>
                                    );
                                })
                            )}
                        </TableBody>
                    </Table>
                </div>

                {filteredData.length > 0 && (
                    <p className="text-xs text-muted-foreground text-right">
                        Showing {filteredData.length} application{filteredData.length !== 1 ? "s" : ""}
                        {selectedIds.size > 0 && ` · ${selectedIds.size} selected`}
                    </p>
                )}
            </div>

            <FilterSheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen} />

            <ApplicationViewSheet
                app={viewingApp}
                open={!!viewingApp}
                onOpenChange={(v) => { if (!v) setViewingApp(null); }}
            />

            {/* Single — Forward */}
            <AlertDialog open={!!confirmForwardId} onOpenChange={() => setConfirmForwardId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Forward Application?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will advance the application to the next stage. It will disappear from your inbox.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => confirmForwardId && handleForward(confirmForwardId)}>
                            Confirm — Forward
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Single — Remove */}
            <AlertDialog open={!!confirmRemoveId} onOpenChange={() => setConfirmRemoveId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-destructive">Remove from Portal?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently remove the application from all active workflow stages.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            onClick={() => confirmRemoveId && handleRemove(confirmRemoveId)}
                        >
                            Confirm — Remove
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Bulk — Forward */}
            <AlertDialog open={confirmBulkForward} onOpenChange={setConfirmBulkForward}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Forward {selectedIds.size} Applications?</AlertDialogTitle>
                        <AlertDialogDescription>
                            All {selectedIds.size} selected applications will be advanced to the next stage.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleBulkForward}>Confirm — Forward All</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Bulk — Remove */}
            <AlertDialog open={confirmBulkRemove} onOpenChange={setConfirmBulkRemove}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-destructive">Remove {selectedIds.size} Applications?</AlertDialogTitle>
                        <AlertDialogDescription>
                            All {selectedIds.size} selected applications will be permanently removed from the portal.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            onClick={handleBulkRemove}
                        >
                            Confirm — Remove All
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </FormProvider>
    );
}
