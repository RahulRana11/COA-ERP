import { useState, useMemo } from "react";
import { Search, XCircle, AlertTriangle, FileWarning, ShieldAlert } from "lucide-react";
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

interface RejectedApplicationData {
    id: string;
    refNumber: string;
    applicantName: string;
    submissionDate: string;
    rejectedDate: string;
    rejectedBy: string;
    rejectionReason: string;
    rejectionCore: "Invalid Degree" | "Debarred" | "Details Mismatch" | "Other";
}

// Generate Mock Data for applications explicitly demonstrating requested rejection reasons
const generateMockRejectedData = (): RejectedApplicationData[] => {
    return Array.from({ length: 15 }, (_, i) => {
        const id = `app-rej-${1000 + i}`;
        
        let rejectionCore: RejectedApplicationData["rejectionCore"] = "Other";
        let rejectionReason = "";
        
        if (i % 3 === 0) {
            rejectionCore = "Invalid Degree";
            rejectionReason = "The architectural degree uploaded is not recognized by the current COA accredited universities list. Graduation credentials failing preliminary audit.";
        } else if (i % 4 === 0) {
            rejectionCore = "Debarred";
            rejectionReason = "Applicant has been permanently debarred from registering with the Council of Architecture due to previous misconduct.";
        } else {
            rejectionCore = "Details Mismatch";
            rejectionReason = "Applicant's name mismatch. The name provided in the Personal Details section identically conflicts with the name registered under the provided Aadhaar ID card and Academic Transcripts.";
        }

        return {
            id,
            refNumber: `APP-2026-${String(5001 + i).padStart(4, '0')}`,
            applicantName: `Disqualified Applicant ${i + 1}`,
            submissionDate: `2026-02-${String((i % 28) + 1).padStart(2, '0')}`,
            rejectedDate: `2026-03-${String((i % 28) + 1).padStart(2, '0')}`,
            rejectedBy: i % 2 === 0 ? "Council Review Board" : "N. Desai (Registrar)",
            rejectionReason,
            rejectionCore
        };
    });
};

const INITIAL_MOCK_DATA = generateMockRejectedData();

export default function RejectedApplicationsList() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedApp, setSelectedApp] = useState<RejectedApplicationData | null>(null);

    const filteredData = useMemo(() => {
        if (!searchQuery) return INITIAL_MOCK_DATA;
        const lowerQuery = searchQuery.toLowerCase();
        return INITIAL_MOCK_DATA.filter((app) => 
            app.refNumber.toLowerCase().includes(lowerQuery) || 
            app.applicantName.toLowerCase().includes(lowerQuery)
        );
    }, [searchQuery]);

    // Icon mapping for Rejection Core
    const renderRejectionIcon = (core: string) => {
        switch (core) {
            case "Invalid Degree": return <FileWarning className="h-10 w-10 text-destructive mb-2" />;
            case "Debarred": return <ShieldAlert className="h-10 w-10 text-destructive mb-2" />;
            case "Details Mismatch": return <AlertTriangle className="h-10 w-10 text-destructive mb-2" />;
            default: return <XCircle className="h-10 w-10 text-destructive mb-2" />;
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6 flex flex-col min-h-screen">
            <div className="flex-none pb-4 border-b">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-500/10 p-2 rounded-lg">
                                <XCircle className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-semibold tracking-tight text-red-600">Rejected Applications</h1>
                                <p className="text-muted-foreground mt-1">
                                    Applications permanently disqualified during the review workflow.
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
                                <TableHead>Date of Rejection</TableHead>
                                <TableHead>Rejection Core</TableHead>
                                <TableHead className="text-right pr-6">Action</TableHead>
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
                                        <TableCell className="text-muted-foreground">{app.rejectedDate}</TableCell>
                                        <TableCell>
                                            <Badge variant="destructive" className="bg-red-500 hover:bg-red-600">
                                                {app.rejectionCore}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right pr-4">
                                            <Button 
                                                variant="outline" 
                                                size="sm"
                                                onClick={() => setSelectedApp(app)}
                                                className="h-8 border-destructive/20 text-destructive hover:bg-destructive/10"
                                            >
                                                <AlertTriangle className="h-4 w-4 mr-2" />
                                                View Remark
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                                        No rejected applications match your search.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Remarks Modal */}
            <Dialog open={!!selectedApp} onOpenChange={() => setSelectedApp(null)}>
                <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
                    <div className="bg-destructive/10 p-6 flex flex-col items-center justify-center text-center border-b border-destructive/20">
                        {selectedApp && renderRejectionIcon(selectedApp.rejectionCore)}
                        <DialogTitle className="text-xl text-destructive font-bold mb-1">
                            Application Rejected
                        </DialogTitle>
                        <DialogDescription className="text-destructive/80">
                            {selectedApp?.refNumber} — {selectedApp?.applicantName}
                        </DialogDescription>
                    </div>
                    
                    <div className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                            <div>
                                <p className="text-muted-foreground">Date of Rejection</p>
                                <p className="font-semibold">{selectedApp?.rejectedDate}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Rejected By</p>
                                <p className="font-semibold">{selectedApp?.rejectedBy}</p>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="text-sm font-semibold text-destructive mb-2 uppercase tracking-wide">
                                Official Reason for Disqualification
                            </h4>
                            <div className="p-4 bg-muted border rounded-md text-sm leading-relaxed text-foreground/90 font-medium">
                                "{selectedApp?.rejectionReason}"
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
