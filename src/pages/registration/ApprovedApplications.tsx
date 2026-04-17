import { useState, useMemo } from "react";
import { Search, History, CheckCircle2, FileText, AlertCircle, RefreshCcw, User, ArrowRight } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

type TimelineAction = "Submitted" | "Processed" | "Query Raised" | "Returned" | "Approved";

interface TimelineEvent {
    id: string;
    action: TimelineAction;
    stage: string;
    actor: string;
    date: string;
    remarks?: string;
}

interface ApprovedApplicationData {
    id: string;
    refNumber: string;
    applicantName: string;
    submissionDate: string;
    approvalDate: string;
    history: TimelineEvent[];
}

// Generate Mock Data with Complex Timelines strictly through President
const generateMockApprovedData = (): ApprovedApplicationData[] => {
    return Array.from({ length: 15 }, (_, i) => {
        const id = `app-appr-${1000 + i}`;
        
        // Build an unpredictable timeline narrative for realism
        const timeline: TimelineEvent[] = [];
        
        // 1. Submitted by Applicant
        timeline.push({
            id: `tl-${id}-1`,
            action: "Submitted",
            stage: "Applicant",
            actor: "System",
            date: `2026-03-${String((i % 15) + 1).padStart(2, '0')} 10:00 AM`,
            remarks: "Application Initial Submission"
        });
        
        // 2. Processed by Clerk
        timeline.push({
            id: `tl-${id}-2`,
            action: "Processed",
            stage: "Clerk",
            actor: "O.P. Sharma",
            date: `2026-03-${String((i % 15) + 4).padStart(2, '0')} 11:30 AM`,
            remarks: "Preliminary documents verified. Forwarding to HOD."
        });

        if (i % 3 === 0) {
            // HOD returns to Applicant edge case
            timeline.push({
                id: `tl-${id}-3a`,
                action: "Query Raised",
                stage: "HOD",
                actor: "Dr. V. Patel",
                date: `2026-03-${String((i % 15) + 6).padStart(2, '0')} 02:15 PM`,
                remarks: "Signature appears blurry. Please re-upload.",
            });
            timeline.push({
                id: `tl-${id}-3b`,
                action: "Returned",
                stage: "Applicant",
                actor: "System",
                date: `2026-03-${String((i % 15) + 8).padStart(2, '0')} 09:00 AM`,
                remarks: "Documents resubmitted.",
            });
            // Returns back to Clerk
            timeline.push({
                id: `tl-${id}-3c`,
                action: "Processed",
                stage: "Clerk",
                actor: "O.P. Sharma",
                date: `2026-03-${String((i % 15) + 10).padStart(2, '0')} 10:30 AM`,
                remarks: "Resubmitted documents checked. Forwarding to HOD."
            });
        }

        // 3. Processed by HOD
        timeline.push({
            id: `tl-${id}-4`,
            action: "Processed",
            stage: "HOD",
            actor: "Dr. V. Patel",
            date: `2026-03-${String((i % 15) + 12).padStart(2, '0')} 01:20 PM`,
            remarks: "Final departmental check completed. Forwarding to Registrar."
        });

        if (i % 5 === 0) {
            // Registrar returns to HOD edge case
            timeline.push({
                id: `tl-${id}-5a`,
                action: "Returned",
                stage: "Registrar",
                actor: "A. Kumar",
                date: `2026-03-${String((i % 15) + 14).padStart(2, '0')} 04:45 PM`,
                remarks: "Qualification accreditation needs double-checking from HOD.",
            });
            timeline.push({
                id: `tl-${id}-5b`,
                action: "Processed",
                stage: "HOD",
                actor: "Dr. V. Patel",
                date: `2026-03-${String((i % 15) + 16).padStart(2, '0')} 11:20 AM`,
                remarks: "Accreditation manually verified. Re-forwarding to Registrar."
            });
        }

        // 4. Processed by Registrar
        timeline.push({
            id: `tl-${id}-6`,
            action: "Processed",
            stage: "Registrar",
            actor: "A. Kumar",
            date: `2026-03-${String((i % 15) + 19).padStart(2, '0')} 03:00 PM`,
            remarks: "All credentials and payments secured. Recommending for President Approval."
        });

        // 5. Final Approval by President
        const approvalDay = `2026-04-${String((i % 25) + 1).padStart(2, '0')}`;
        timeline.push({
            id: `tl-${id}-7`,
            action: "Approved",
            stage: "President",
            actor: "S. Kapoor",
            date: `${approvalDay} 05:00 PM`,
            remarks: "Application successfully passed administrative loop. Granted active status."
        });

        return {
            id,
            refNumber: `APP-2026-${String(4001 + i).padStart(4, '0')}`,
            applicantName: `Verified Applicant ${i + 1}`,
            submissionDate: timeline[0].date.split(' ')[0],
            approvalDate: approvalDay,
            history: timeline.reverse() // Reverse so newest is at top
        };
    });
};

const INITIAL_MOCK_DATA = generateMockApprovedData();

export default function ApprovedApplicationsList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedApp, setSelectedApp] = useState<ApprovedApplicationData | null>(null);

    const filteredData = useMemo(() => {
        if (!searchQuery) return INITIAL_MOCK_DATA;
        const lowerQuery = searchQuery.toLowerCase();
        return INITIAL_MOCK_DATA.filter((app) => 
            app.refNumber.toLowerCase().includes(lowerQuery) || 
            app.applicantName.toLowerCase().includes(lowerQuery)
        );
    }, [searchQuery]);

    // Timeline Visual mapping
    const renderTimelineIcon = (action: TimelineAction) => {
        switch (action) {
            case "Submitted": return <FileText className="h-4 w-4 text-slate-500" />;
            case "Processed": return <ArrowRight className="h-4 w-4 text-blue-500" />;
            case "Query Raised": return <AlertCircle className="h-4 w-4 text-orange-500" />;
            case "Returned": return <RefreshCcw className="h-4 w-4 text-orange-500" />;
            case "Approved": return <CheckCircle2 className="h-5 w-5 text-green-500" />;
            default: return <User className="h-4 w-4 text-slate-500" />;
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6 flex flex-col min-h-screen">
            <div className="flex-none pb-4 border-b">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-500/10 p-2 rounded-lg">
                                <CheckCircle2 className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-semibold tracking-tight text-green-600">Approved Applications</h1>
                                <p className="text-muted-foreground mt-1">
                                    Review fully verified and approved registrations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                        <div className="relative min-w-[200px] md:w-80 shrink-0">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search Ref or Name..."
                                className="pl-8 h-9"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Table Area */}
            <div className="flex-1 min-h-0 bg-card rounded-md border shadow-sm relative overflow-hidden">
                <div className="overflow-auto w-full h-full max-h-[calc(100vh-250px)]">
                    <Table className="min-w-max relative">
                        <TableHeader className="bg-muted/50 sticky top-0 z-10 shadow-sm border-b">
                            <TableRow>
                                <TableHead className="w-[180px]">Application Ref</TableHead>
                                <TableHead>Applicant Name</TableHead>
                                <TableHead>Submission Date</TableHead>
                                <TableHead>Approval Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right pr-6">History</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.length > 0 ? (
                                filteredData.map((app) => (
                                    <TableRow key={app.id} className="hover:bg-muted/50">
                                        <TableCell className="font-medium text-primary">
                                            {app.refNumber}
                                        </TableCell>
                                        <TableCell>{app.applicantName}</TableCell>
                                        <TableCell className="text-muted-foreground">{app.submissionDate}</TableCell>
                                        <TableCell className="text-muted-foreground">{app.approvalDate}</TableCell>
                                        <TableCell>
                                            <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                                                Approved
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right pr-4">
                                            <Button 
                                                variant="outline" 
                                                size="sm"
                                                onClick={() => setSelectedApp(app)}
                                                className="h-8"
                                            >
                                                <History className="h-4 w-4 mr-2" />
                                                View History
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                                        No approved applications match your search.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Timeline History Modal */}
            <Dialog open={!!selectedApp} onOpenChange={() => setSelectedApp(null)}>
                <DialogContent className="sm:max-w-xl max-h-[85vh] flex flex-col p-0 overflow-hidden">
                    <DialogHeader className="p-6 pb-2 border-b">
                        <DialogTitle className="flex items-center gap-2 text-xl">
                            <History className="h-5 w-5 text-primary" />
                            Application History Trail
                        </DialogTitle>
                        <DialogDescription className="pt-2">
                            Tracking lifecycle for <strong className="text-foreground">{selectedApp?.refNumber}</strong> - {selectedApp?.applicantName}
                        </DialogDescription>
                    </DialogHeader>
                    
                    <div className="p-6 overflow-y-auto">
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.2rem] before:w-0.5 before:-translate-x-px before:bg-muted md:before:mx-auto md:before:translate-x-0">
                            {selectedApp?.history.map((event, index) => (
                                <div key={event.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-muted text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        {renderTimelineIcon(event.action)}
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border bg-card shadow-sm">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between items-start">
                                                <Badge variant="outline" className={`
                                                    ${event.action === 'Approved' ? 'border-green-500 text-green-600 bg-green-50' : ''}
                                                    ${event.action === 'Query Raised' ? 'border-orange-500 text-orange-600 bg-orange-50' : ''}
                                                `}>
                                                    {event.action} at {event.stage}
                                                </Badge>
                                                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                                                    {event.date}
                                                </span>
                                            </div>
                                            
                                            <p className="text-sm font-medium mt-2">By: {event.actor}</p>
                                            
                                            {event.remarks && (
                                                <div className="mt-2 p-2 bg-muted/50 rounded-md text-sm text-muted-foreground border border-muted">
                                                    "{event.remarks}"
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
