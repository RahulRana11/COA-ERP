import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, MessageSquareWarning } from "lucide-react";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ReturnedApplicationData {
    id: string;
    refNumber: string;
    applicantName: string;
    submissionDate: string;
    currentStage: "Returned" | "Resubmitted" | "Query Raised";
    raisedBy: string; // The official who raised the query
    remarks: string; // The query/remark content
    queryDate: string;
}

// Generate Mock Data for applications with queries and remarks
const INITIAL_MOCK_DATA: ReturnedApplicationData[] = Array.from({ length: 15 }, (_, i) => {
    const isResubmitted = i % 3 === 0;
    const isQueryRaised = i % 2 === 0 && !isResubmitted;
    
    return {
        id: `app-ret-${1000 + i}`,
        refNumber: `APP-2026-${String(3001 + i).padStart(4, '0')}`,
        applicantName: `Applicant Test ${i + 1}`,
        submissionDate: `2026-03-${String((i % 28) + 1).padStart(2, '0')}`,
        currentStage: isQueryRaised ? "Query Raised" : (isResubmitted ? "Resubmitted" : "Returned"),
        raisedBy: isResubmitted ? "" : (i % 2 === 0 ? "O.P. Sharma (Clerk)" : "Dr. V. Patel (HOD)"),
        remarks: isResubmitted 
            ? "Applicant has uploaded the missing 12th standard marksheets." 
            : (isQueryRaised 
                ? "The signature uploaded is blurred. Please upload a clear scan." 
                : "Aadhaar Card does not match the name provided in Personal Details."),
        queryDate: `2026-04-${String((i % 14) + 1).padStart(2, '0')}`,
    };
});

type FilterTabState = "All" | "Returned" | "Resubmitted" | "Query Raised";

export default function ReturnedResubmittedList() {
    const [activeTab, setActiveTab] = useState<FilterTabState>("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = useMemo(() => {
        return INITIAL_MOCK_DATA.filter((app) => {
            // Apply Top Level Tab Filters
            if (activeTab !== "All" && app.currentStage !== activeTab) return false;

            // Apply Global Search
            if (searchQuery) {
                const searchLower = searchQuery.toLowerCase();
                const matchNumber = app.refNumber.toLowerCase().includes(searchLower);
                const matchName = app.applicantName.toLowerCase().includes(searchLower);
                if (!matchNumber && !matchName) return false;
            }

            return true;
        });
    }, [activeTab, searchQuery]);

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6 flex flex-col min-h-screen">
            <div className="flex-none pb-4 border-b">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-orange-500/10 p-2 rounded-lg">
                            <MessageSquareWarning className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold tracking-tight text-orange-600">Returned & Queries</h1>
                            <p className="text-muted-foreground mt-1">
                                Review applications returned to the applicant due to inquiries or those recently resubmitted.
                            </p>
                        </div>
                    </div>

                    {/* Controls Row */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-2">
                        {/* Classification Tabs */}
                        <Tabs 
                            value={activeTab} 
                            onValueChange={(val) => setActiveTab(val as FilterTabState)}
                            className="w-full md:w-auto"
                        >
                            <TabsList className="h-10 border bg-muted/50 w-full md:w-auto grid grid-cols-4 md:flex">
                                <TabsTrigger value="All" className="data-[state=active]:bg-background">
                                    All Tracking
                                </TabsTrigger>
                                <TabsTrigger value="Query Raised" className="data-[state=active]:bg-background">
                                    Queries Raised
                                </TabsTrigger>
                                <TabsTrigger value="Returned" className="data-[state=active]:bg-background">
                                    Returned
                                </TabsTrigger>
                                <TabsTrigger value="Resubmitted" className="data-[state=active]:bg-background">
                                    Resubmitted
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>

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
                                <TableHead>Status</TableHead>
                                <TableHead>Query By & Date</TableHead>
                                <TableHead className="w-[300px]">Latest Remarks</TableHead>
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
                                        <TableCell>
                                            <Badge variant={app.currentStage === "Resubmitted" ? "default" : (app.currentStage === "Query Raised" ? "secondary" : "destructive")}>
                                                {app.currentStage}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {app.raisedBy ? (
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-sm">{app.raisedBy}</span>
                                                    <span className="text-xs text-muted-foreground">{app.queryDate}</span>
                                                </div>
                                            ) : (
                                                <span className="text-muted-foreground italic">N/A</span>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm line-clamp-2" title={app.remarks}>
                                                {app.remarks}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right pr-6">
                                            <Link 
                                                to={`/official/review/${app.id}`} 
                                                className="text-blue-600 hover:underline text-sm font-medium"
                                            >
                                                View / Process
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                                        No tracking records match the current filter.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
