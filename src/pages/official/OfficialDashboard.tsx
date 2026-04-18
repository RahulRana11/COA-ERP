import { useState, useMemo, useEffect } from "react";
import { Filter, Search, ArrowRight, XCircle, AlertTriangle, CheckSquare2, Eye } from "lucide-react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { FilterSheet } from "./components/FilterSheet";
import { ColumnToggleDropdown, ColumnKey } from "./components/ColumnToggleDropdown";
import { ApplicationViewSheet } from "./components/ApplicationViewSheet";
import { useAuthStore, ROLE_TO_STAGE, NEXT_STAGE, WorkflowStage } from "@/store/authStore";

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        const handler = setTimeout(() => { setDebouncedValue(value); }, delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}

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

export default function OfficialDashboard() {
    const { activeUser, applications, forwardApplication, rejectApplication } = useAuthStore();
    const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("inbox");
    const [confirmForward, setConfirmForward] = useState<string | null>(null);
    const [confirmReject, setConfirmReject] = useState<string | null>(null);
    const [confirmBulkForward, setConfirmBulkForward] = useState(false);
    const [confirmBulkReject, setConfirmBulkReject] = useState(false);
    const [viewingApp, setViewingApp] = useState<typeof applications[number] | null>(null);

    // Selection state
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

    const [columns, setColumns] = useState<Record<ColumnKey, boolean>>({
        appNumber: true,
        appMode: true,
        paymentStatus: false,
        nameDob: true,
        photoSign: false,
        gender: false,
        nationality: false,
        qualification: true,
        dateOfApp: true,
        hardcopyReceivedOn: false,
        regNumberDate: false,
        residentialAddress: false,
        professionalAddress: false,
        communicationAddress: false,
        presidentApproveOn: false,
        status: true,
        additionalQualification: false,
        actions: true,
    });

    const formMethods = useForm({
        defaultValues: {
            globalSearch: "",
            firstName: "",
            middleName: "",
            lastName: "",
            appMode: "Both",
            paymentStatus: "Both",
            submitStatus: "Both",
            appNoFrom: "",
            appNoTo: "",
            regNoFrom: "",
            regNoTo: "",
            appDateFrom: null as Date | null,
            appDateTo: null as Date | null,
            regDurationFrom: null as Date | null,
            regDurationTo: null as Date | null,
            appStatus: "All",
        },
    });

    const filterValues = useWatch({ control: formMethods.control });
    const debouncedFilters = useDebounce(filterValues, 300);

    // Determine which stages this user can see
    const visibleStages: WorkflowStage[] = useMemo(() => {
        return ROLE_TO_STAGE[activeUser.base_role] ?? ROLE_TO_STAGE["Super Admin"];
    }, [activeUser]);

    const filteredData = useMemo(() => {
        return applications.filter((app) => {
            // Exclude unpaid applications
            if (app.paymentStatus === "Unpaid") return false;

            // Tab filter
            if (activeTab === "inbox") {
                // Exclude Approved from inbox
                if (app.workflow_stage === "Approved") return false;
                if (!visibleStages.includes(app.workflow_stage)) return false;
            } else if (activeTab === "approved") {
                if (app.workflow_stage !== "Approved") return false;
            } else if (activeTab === "rejected") {
                if (app.workflow_stage !== "Rejected") return false;
            }

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
    }, [applications, debouncedFilters, activeTab, visibleStages]);

    // Reset selections when filters/tab change
    useEffect(() => {
        setSelectedIds(new Set());
    }, [activeTab, debouncedFilters]);

    // ── Selection helpers ────────────────────────────────────────────────────
    const allVisibleIds = filteredData.map((a) => a.id);
    const allSelected = allVisibleIds.length > 0 && allVisibleIds.every((id) => selectedIds.has(id));
    const someSelected = selectedIds.size > 0 && !allSelected;

    const toggleSelectAll = () => {
        if (allSelected) {
            setSelectedIds(new Set());
        } else {
            setSelectedIds(new Set(allVisibleIds));
        }
    };

    const toggleSelect = (id: string) => {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    // ── Single-row actions ───────────────────────────────────────────────────
    const handleForward = (appId: string) => {
        const app = applications.find((a) => a.id === appId);
        forwardApplication(appId);
        setConfirmForward(null);
        if (!app) return;
        const next = NEXT_STAGE[app.workflow_stage];
        toast.success("Moved for Scrutiny", {
            description: `Application #${app.appNumber} → ${STAGE_LABELS[next] ?? "Next Stage"}`,
        });
    };

    const handleReject = (appId: string) => {
        const app = applications.find((a) => a.id === appId);
        rejectApplication(appId);
        setConfirmReject(null);
        toast.error("Removed from Portal", {
            description: `Application #${app?.appNumber} has been removed.`,
        });
    };

    // ── Bulk actions ─────────────────────────────────────────────────────────
    const handleBulkForward = () => {
        const ids = Array.from(selectedIds);
        ids.forEach((id) => forwardApplication(id));
        setConfirmBulkForward(false);
        setSelectedIds(new Set());
        toast.success(`${ids.length} applications moved for scrutiny`);
    };

    const handleBulkReject = () => {
        const ids = Array.from(selectedIds);
        ids.forEach((id) => rejectApplication(id));
        setConfirmBulkReject(false);
        setSelectedIds(new Set());
        toast.error(`${ids.length} applications removed from portal`);
    };

    const canForwardStage = (stage: WorkflowStage) => NEXT_STAGE[stage] !== undefined;

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
                        <ColumnToggleDropdown columns={columns} setColumns={setColumns} />
                        <Button onClick={() => setIsFilterSheetOpen(true)} variant="secondary">
                            <Filter className="mr-2 h-4 w-4" />
                            Filters
                        </Button>
                    </div>
                </div>

                {/* Visible stage context pills */}
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground font-medium">Your Inbox Shows:</span>
                    {visibleStages.map((stage) => (
                        <span
                            key={stage}
                            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${STAGE_COLORS[stage]}`}
                        >
                            {STAGE_LABELS[stage]}
                        </span>
                    ))}
                </div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 max-w-md">
                        <TabsTrigger value="inbox">
                            Inbox{" "}
                            <Badge variant="secondary" className="ml-1.5 text-xs">
                                {applications.filter((a) => a.paymentStatus !== "Unpaid" && visibleStages.includes(a.workflow_stage)).length}
                            </Badge>
                        </TabsTrigger>
                        <TabsTrigger value="approved">Approved</TabsTrigger>
                        <TabsTrigger value="rejected">Removed</TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* Bulk action toolbar — appears when items are selected */}
                {selectedIds.size > 0 && (
                    <div className="flex items-center gap-3 px-4 py-2.5 bg-primary/5 border border-primary/20 rounded-lg">
                        <CheckSquare2 className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">
                            {selectedIds.size} application{selectedIds.size > 1 ? "s" : ""} selected
                        </span>
                        <div className="flex-1" />
                        {activeTab === "inbox" && (
                            <>
                                <Button
                                    size="sm"
                                    className="h-8 gap-1.5 text-xs"
                                    onClick={() => setConfirmBulkForward(true)}
                                >
                                    <ArrowRight className="h-3.5 w-3.5" />
                                    Move Selected for Scrutiny
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-8 gap-1.5 text-xs text-destructive border-destructive/30 hover:bg-destructive/10"
                                    onClick={() => setConfirmBulkReject(true)}
                                >
                                    <XCircle className="h-3.5 w-3.5" />
                                    Remove Selected from Portal
                                </Button>
                            </>
                        )}
                        <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 text-xs text-muted-foreground"
                            onClick={() => setSelectedIds(new Set())}
                        >
                            Clear
                        </Button>
                    </div>
                )}

                {/* Table */}
                <div className="flex-1 w-full min-w-0 bg-background rounded-md shadow-sm border border-border overflow-hidden">
                    <Table>
                        <TableHeader className="bg-muted/40">
                            <TableRow>
                                {/* Select All checkbox */}
                                <TableHead className="w-10 pr-0">
                                    <Checkbox
                                        checked={allSelected}
                                        ref={(el) => {
                                            if (el) (el as any).indeterminate = someSelected;
                                        }}
                                        onCheckedChange={toggleSelectAll}
                                        aria-label="Select all"
                                    />
                                </TableHead>
                                <TableHead className="font-semibold">App No.</TableHead>
                                <TableHead className="font-semibold">Applicant Name</TableHead>
                                <TableHead className="font-semibold">Qualification</TableHead>
                                <TableHead className="font-semibold">Mode</TableHead>
                                <TableHead className="font-semibold">Date</TableHead>
                                <TableHead className="font-semibold text-center">Details</TableHead>
                                <TableHead className="font-semibold text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="h-32 text-center">
                                        <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                            <AlertTriangle className="h-8 w-8 text-muted-foreground/50" />
                                            <p className="font-medium">No applications in your inbox</p>
                                            <p className="text-xs">Only paid applications assigned to your tier appear here.</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredData.map((app) => {
                                    const isSelected = selectedIds.has(app.id);
                                    return (
                                        <TableRow
                                            key={app.id}
                                            className={`hover:bg-muted/30 transition-colors ${isSelected ? "bg-primary/5 hover:bg-primary/10" : ""}`}
                                        >
                                            {/* Row checkbox */}
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
                                            <TableCell>
                                                <Badge variant="outline" className="text-xs">{app.appMode}</Badge>
                                            </TableCell>
                                            <TableCell className="text-xs text-muted-foreground">{app.dateOfApp}</TableCell>
                                            <TableCell className="text-center">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="h-7 px-3 text-xs font-medium gap-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                                                    onClick={() => setViewingApp(app)}
                                                >
                                                    View
                                                </Button>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    {activeTab === "inbox" && canForwardStage(app.workflow_stage) && (
                                                        <Button
                                                            size="sm"
                                                            className="h-7 text-xs gap-1"
                                                            onClick={() => setConfirmForward(app.id)}
                                                        >
                                                            Move for Scrutiny
                                                            <ArrowRight className="h-3 w-3" />
                                                        </Button>
                                                    )}
                                                    {activeTab === "inbox" && (
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="h-7 text-xs gap-1 text-destructive border-destructive/30 hover:bg-destructive/10"
                                                            onClick={() => setConfirmReject(app.id)}
                                                        >
                                                            <XCircle className="h-3 w-3" />
                                                            Remove from Portal
                                                        </Button>
                                                    )}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Row count summary */}
                {filteredData.length > 0 && (
                    <p className="text-xs text-muted-foreground text-right">
                        Showing {filteredData.length} paid application{filteredData.length !== 1 ? "s" : ""}
                        {selectedIds.size > 0 && ` · ${selectedIds.size} selected`}
                    </p>
                )}
            </div>

            <FilterSheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen} />

            {/* Application View / Edit Sheet */}
            <ApplicationViewSheet
                app={viewingApp}
                open={!!viewingApp}
                onOpenChange={(v) => { if (!v) setViewingApp(null); }}
            />

            {/* Single — Move for Scrutiny */}
            <AlertDialog open={!!confirmForward} onOpenChange={() => setConfirmForward(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Move for Scrutiny?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will advance the application to the next officer tier. It will disappear from your inbox.
                            {confirmForward && (() => {
                                const app = applications.find((a) => a.id === confirmForward);
                                const next = app ? NEXT_STAGE[app.workflow_stage] : null;
                                return next ? (
                                    <span className="block mt-2 font-semibold text-foreground">
                                        New stage: {STAGE_LABELS[next]}
                                    </span>
                                ) : null;
                            })()}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => confirmForward && handleForward(confirmForward)}>
                            Confirm — Move for Scrutiny
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Single — Remove from Portal */}
            <AlertDialog open={!!confirmReject} onOpenChange={() => setConfirmReject(null)}>
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
                            onClick={() => confirmReject && handleReject(confirmReject)}
                        >
                            Confirm — Remove from Portal
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Bulk — Move for Scrutiny */}
            <AlertDialog open={confirmBulkForward} onOpenChange={setConfirmBulkForward}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Move {selectedIds.size} Applications for Scrutiny?</AlertDialogTitle>
                        <AlertDialogDescription>
                            All {selectedIds.size} selected applications will be advanced to the next officer tier simultaneously.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleBulkForward}>
                            Confirm — Move All for Scrutiny
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Bulk — Remove from Portal */}
            <AlertDialog open={confirmBulkReject} onOpenChange={setConfirmBulkReject}>
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
                            onClick={handleBulkReject}
                        >
                            Confirm — Remove All
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </FormProvider>
    );
}
