import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, AlertTriangle } from "lucide-react";
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
import { Card, CardContent } from "@/components/ui/card";

type WorkflowStage = "Clerk" | "HOD" | "Registrar";

interface EscalatedApplicationData {
    id: string;
    appNumber: string;
    applicantName: string;
    submissionDate: string;
    currentStage: WorkflowStage;
    statusDate: string; // The date when it landed on the current stage
    daysPending: number;
}

// Generate Mock Data for Escalations (> 15 days pending)
const generateMockEscalations = (): EscalatedApplicationData[] => {
    const today = new Date();
    const mockData: EscalatedApplicationData[] = [];
    
    // Helper to subtract days
    const subtractDays = (date: Date, days: number) => {
        const result = new Date(date);
        result.setDate(result.getDate() - days);
        return result.toISOString().split("T")[0];
    };

    const stages: WorkflowStage[] = ["Clerk", "HOD", "Registrar"];

    for (let i = 0; i < 25; i++) {
        const daysStalled = 16 + Math.floor(Math.random() * 45); // Pending between 16 and 60 days
        const stageIndex = i % 3; // Distribute across Clerk, HOD, Registrar

        mockData.push({
            id: `app-esc-${i + 1}`,
            appNumber: `APP-2026-${String(2001 + i).padStart(4, '0')}`,
            applicantName: `Escalated Applicant ${i + 1}`,
            submissionDate: subtractDays(today, daysStalled + 10), // Submitted 10 days before reaching this stage
            currentStage: stages[stageIndex],
            statusDate: subtractDays(today, daysStalled),
            daysPending: daysStalled,
        });
    }

    // Sort by most days pending
    return mockData.sort((a, b) => b.daysPending - a.daysPending);
};

const ESCALATION_MOCK_DATA = generateMockEscalations();

export default function EscalatedApplicationsPage() {
    const [activeTab, setActiveTab] = useState<WorkflowStage | "All">("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = useMemo(() => {
        return ESCALATION_MOCK_DATA.filter((app) => {
            // Apply Top Level Tab Filters
            if (activeTab !== "All" && app.currentStage !== activeTab) return false;

            // Apply Global Search
            if (searchQuery) {
                const searchLower = searchQuery.toLowerCase();
                const matchNumber = app.appNumber.toLowerCase().includes(searchLower);
                const matchName = app.applicantName.toLowerCase().includes(searchLower);
                if (!matchNumber && !matchName) return false;
            }

            return true;
        });
    }, [activeTab, searchQuery]);

    const getDaysBadgeVariant = (days: number) => {
        if (days > 45) return "destructive"; // Critical
        if (days > 30) return "destructive"; // Severe
        return "secondary"; // Escalated but newer
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6 flex flex-col min-h-screen">
            <div className="flex-none pb-4 border-b">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-destructive/10 p-2 rounded-lg">
                            <AlertTriangle className="h-6 w-6 text-destructive" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold tracking-tight text-destructive">Escalated Applications</h1>
                            <p className="text-muted-foreground mt-1">
                                Monitor applications stalled for more than <strong className="text-foreground">15 days</strong> at specific administrative tiers.
                            </p>
                        </div>
                    </div>

                    {/* Controls Row */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-2">
                        {/* Classification Tabs */}
                        <Tabs 
                            value={activeTab} 
                            onValueChange={(val) => setActiveTab(val as WorkflowStage | "All")}
                            className="w-full md:w-auto"
                        >
                            <TabsList className="h-10 border bg-muted/50 w-full md:w-auto grid grid-cols-4 md:flex">
                                <TabsTrigger value="All" className="data-[state=active]:bg-background">
                                    All Escalations
                                </TabsTrigger>
                                <TabsTrigger value="Clerk" className="data-[state=active]:bg-background">
                                    Pending at Clerk
                                </TabsTrigger>
                                <TabsTrigger value="HOD" className="data-[state=active]:bg-background">
                                    Pending at HOD
                                </TabsTrigger>
                                <TabsTrigger value="Registrar" className="data-[state=active]:bg-background">
                                    Pending at Registrar
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <div className="relative min-w-[200px] md:w-64 shrink-0">
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
                                <TableHead>Pending At Stage</TableHead>
                                <TableHead>Since Date</TableHead>
                                <TableHead className="text-center">Days Pending</TableHead>
                                <TableHead className="text-right pr-6">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.length > 0 ? (
                                filteredData.map((app) => (
                                    <TableRow key={app.id} className="hover:bg-muted/50">
                                        <TableCell className="font-medium text-primary">
                                            {app.appNumber}
                                        </TableCell>
                                        <TableCell>{app.applicantName}</TableCell>
                                        <TableCell className="text-muted-foreground">{app.submissionDate}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="font-semibold bg-background">
                                                {app.currentStage}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">{app.statusDate}</TableCell>
                                        <TableCell className="text-center">
                                            <Badge variant={getDaysBadgeVariant(app.daysPending)} className="px-3 min-w-[4rem] justify-center">
                                                {app.daysPending} Days
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right pr-6">
                                            <Link 
                                                to={`/official/review/${app.id}`} 
                                                className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background border-destructive text-destructive px-3 text-xs font-medium shadow-sm transition-colors hover:bg-destructive hover:text-destructive-foreground"
                                            >
                                                View / Expedite
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={7} className="h-32 text-center">
                                        <div className="flex flex-col items-center justify-center text-muted-foreground gap-2">
                                            <AlertTriangle className="h-8 w-8 opacity-20" />
                                            <p>No escalated applications found matching current filters.</p>
                                        </div>
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
