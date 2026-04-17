import { useState } from "react";
import { Search, AlertCircle, FileSpreadsheet, Download, Filter } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FILTER_CATEGORIES = {
  "Year Wise Architect": {
    parameters: [
      { name: "Year Range (From Year)", type: "select" },
      { name: "Year Range (To Year)", type: "select" },
      { name: "Month Range (From)", type: "date" },
      { name: "Month Range (To)", type: "date" },
      { name: "Records Per Page", type: "select" }
    ],
    has_display_columns: true
  },
  "Year Wise Total": {
    parameters: [
      { name: "Year Range (From Year)", type: "select" },
      { name: "Year Range (To Year)", type: "select" },
      { name: "Records Per Page", type: "select" }
    ],
    has_display_columns: false
  },
  "Registration No.": {
    parameters: [
      { name: "Reg. No. Range (From)", type: "text" },
      { name: "Reg. No. Range (To)", type: "text" },
      { name: "Records Per Page", type: "select" }
    ],
    has_display_columns: true
  },
  "Month Wise": {
    parameters: [
      { name: "Month Range (From)", type: "date" },
      { name: "Month Range (To)", type: "date" },
      { name: "Records Per Page", type: "select" }
    ],
    has_display_columns: false
  }
} as const;

type FilterCategoryKey = keyof typeof FILTER_CATEGORIES;

const TABLE_HEADERS = [
  "Regn. No",
  "Name",
  "Valid Upto",
  "Annual ₹",
  "OTP ₹",
  "Penalty Alert",
  "Dues Notice"
];

import { calculateRenewalFees, FeeMasterData } from "@/utils/calculateRenewalFees";

const DEMO_FEE_MASTER: FeeMasterData = {
  annual_base_fee: 600,
  onetime_base_fee: 6000,
  grace_period_end_month: 3,
  grace_period_end_day: 31,
  restoration_fine_month: 4,
  restoration_fine_day: 1,
  restoration_fine_amount: 1000,
  second_fine_month: 6,
  second_fine_day: 1,
  second_fine_amount: 100,
  daily_fine_start_month: 8,
  daily_fine_start_day: 1,
  daily_fine_amount: 10,
};

// Generate simple base mock data for Defaulters with expiry years
const BASE_DEFAULTERS = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    regNo: `CA/201${i}/${1000 + i}`,
    name: `Architect Defaulter ${i + 1}`,
    email: `defaulter${i + 1}@example.com`,
    validUptoYear: 2023 + (i % 3), // Expired in 2023, 2024, or 2025
    duesNoticeStatus: i % 2 === 0 ? "Sent" : "Pending"
}));

export default function DefaultersList() {
    const [activeTab, setActiveTab] = useState<FilterCategoryKey>("Year Wise Architect");
    const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
    const [globalSearch, setGlobalSearch] = useState("");

    const renderFilterInput = (paramType: string, placeholder: string) => {
        if (paramType === "select") {
            return (
                <Select defaultValue={placeholder.includes("Records") ? "50" : ""}>
                    <SelectTrigger className="w-full bg-background h-9">
                        <SelectValue placeholder={`Select ${placeholder}`} />
                    </SelectTrigger>
                    <SelectContent>
                        {placeholder.includes("Records") ? (
                            <>
                                <SelectItem value="10">10 Records</SelectItem>
                                <SelectItem value="20">20 Records</SelectItem>
                                <SelectItem value="50">50 Records</SelectItem>
                                <SelectItem value="100">100 Records</SelectItem>
                            </>
                        ) : (
                            <>
                                <SelectItem value="2020">2020</SelectItem>
                                <SelectItem value="2021">2021</SelectItem>
                                <SelectItem value="2022">2022</SelectItem>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2024">2024</SelectItem>
                                <SelectItem value="2025">2025</SelectItem>
                            </>
                        )}
                    </SelectContent>
                </Select>
            );
        }

        if (paramType === "date") {
            return <Input type="date" className="w-full bg-background h-9" />;
        }

        return <Input type="text" placeholder={`Enter ${placeholder}`} className="w-full bg-background h-9" />;
    };

    // Calculate dynamic fees based on current date
    const currentDate = new Date();
    
    // Process records to compute both Annual and OTP grand totals
    const calculatedDefaulters = BASE_DEFAULTERS.map(defaulter => {
        const annualFees = calculateRenewalFees(
            defaulter.validUptoYear, 
            currentDate, 
            DEMO_FEE_MASTER, 
            'annual'
        );
        
        const otpFees = calculateRenewalFees(
            defaulter.validUptoYear, 
            currentDate, 
            DEMO_FEE_MASTER, 
            'onetime'
        );

        // Fines are the same regardless of mode, so we just take one
        const penaltyFee = annualFees.restorationFine + annualFees.secondFine + annualFees.dailyFine;
        
        return {
            ...defaulter,
            validUptoFormatted: `31-Dec-${defaulter.validUptoYear}`,
            annualTotalAmount: annualFees.grandTotal,
            otpTotalAmount: otpFees.grandTotal,
            penaltyFeeAmount: penaltyFee,
            isInactive: annualFees.status === 'Inactive'
        };
    }).sort((a, b) => b.penaltyFeeAmount - a.penaltyFeeAmount);

    return (
        <div className="max-w-[1400px] mx-auto p-4 md:p-6 space-y-6 flex flex-col min-w-0 h-full">
            {/* Action Bar (Application Inbox Format) */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-red-600">Renewal Defaulters</h1>
                    <p className="text-muted-foreground mt-1">
                        Identify and manage architects with overdue registration renewals.
                    </p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:min-w-[250px]">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by Reg No. or Name..."
                            className="pl-8 h-10 w-full"
                            value={globalSearch}
                            onChange={(e) => setGlobalSearch(e.target.value)}
                        />
                    </div>

                    <Button onClick={() => setIsFilterSheetOpen(true)} variant="secondary" className="h-10">
                        <Filter className="mr-2 h-4 w-4" />
                        Filters
                    </Button>
                </div>
            </div>

            {/* Top Level Category Tabs (Optional quick toggle before diving into deep filters) */}
            <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as FilterCategoryKey)} className="w-full hidden md:block">
                <TabsList className="grid w-full grid-cols-4 lg:w-1/2">
                    {Object.keys(FILTER_CATEGORIES).map(key => (
                        <TabsTrigger key={key} value={key} className="text-xs">
                            {key}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            {/* Data Representation Area */}
            {FILTER_CATEGORIES[activeTab].has_display_columns ? (
                <div className="flex-1 w-full min-w-0 bg-background rounded-md shadow-sm border border-border flex flex-col overflow-hidden">
                    <div className="p-4 border-b flex items-center justify-between bg-muted/10">
                        <h2 className="font-semibold text-sm text-foreground flex items-center gap-2">
                            {activeTab} Table Records
                            <Badge variant="secondary" className="font-mono">{calculatedDefaulters.length}</Badge>
                        </h2>
                        <Button variant="outline" size="sm" className="h-8 gap-2">
                            <Download className="h-3 w-3" /> Export Master
                        </Button>
                    </div>

                    <div className="overflow-auto w-full flex-1">
                        <Table className="min-w-max relative border-b-0">
                            <TableHeader className="bg-muted/50 sticky top-0 z-10 shadow-sm border-b">
                                <TableRow>
                                    {TABLE_HEADERS.map((header) => (
                                        <TableHead key={header} className="font-semibold whitespace-nowrap">{header}</TableHead>
                                    ))}
                                    <TableHead className="text-right sticky right-0 bg-muted/50 w-[100px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {calculatedDefaulters.filter(app => app.regNo.toLowerCase().includes(globalSearch.toLowerCase()) || app.name.toLowerCase().includes(globalSearch.toLowerCase())).map((defaulter) => (
                                    <TableRow key={defaulter.id} className={defaulter.isInactive ? "bg-red-50/20 hover:bg-red-50/50" : "hover:bg-muted/30"}>
                                        <TableCell className="font-medium text-red-600 whitespace-nowrap">
                                            {defaulter.regNo}
                                        </TableCell>
                                        <TableCell className="font-medium whitespace-nowrap">
                                            <div className="flex flex-col">
                                                <span>{defaulter.name}</span>
                                                <span className="text-xs text-muted-foreground font-normal">{defaulter.email}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap">
                                            <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                                                {defaulter.validUptoFormatted}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="font-mono whitespace-nowrap font-semibold">
                                            ₹ {defaulter.annualTotalAmount.toLocaleString()}
                                        </TableCell>
                                        <TableCell className="font-mono whitespace-nowrap font-semibold">
                                            ₹ {defaulter.otpTotalAmount.toLocaleString()}
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap">
                                            {defaulter.penaltyFeeAmount > 0 ? (
                                                <div className="flex items-center gap-1.5 text-amber-600 font-medium text-sm">
                                                    <AlertCircle className="w-4 h-4" />
                                                    ₹ {defaulter.penaltyFeeAmount.toLocaleString()} fine
                                                </div>
                                            ) : (
                                                <span className="text-emerald-600 text-sm">No Fine</span>
                                            )}
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap">
                                            {defaulter.duesNoticeStatus === "Sent" ? (
                                                <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100">Sent</Badge>
                                            ) : (
                                                <Badge variant="outline" className="text-orange-500 border-orange-200 bg-orange-50">Pending</Badge>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right sticky right-0 bg-background border-l">
                                            <Button variant="ghost" size="sm" className="h-8 text-blue-600">
                                                Review
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            ) : (
                <div className="flex-1 rounded-md border border-dashed border-muted-foreground/30 bg-muted/10 flex flex-col items-center justify-center min-h-[400px] text-center p-8">
                    <FileSpreadsheet className="h-12 w-12 text-muted-foreground/50 mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-1">Aggregate View Context</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                        The current filtering strategy "{activeTab}" returns aggregate summation metrics instead of discrete directory rows.
                    </p>
                    <Button variant="outline" className="mt-4 gap-2">
                        <Search className="h-4 w-4" /> Load Advanced Statistics
                    </Button>
                </div>
            )}

            {/* Filter Drawer matching Application Inbox Schema */}
            <Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
                <SheetContent className="w-full sm:max-w-md overflow-y-auto p-0 flex flex-col">
                    <SheetHeader className="p-6 border-b sticky top-0 bg-background z-10">
                        <SheetTitle className="flex items-center gap-2 text-xl">
                            <Filter className="h-5 w-5 text-primary" />
                            Advanced Defaulter Filters
                        </SheetTitle>
                        <SheetDescription>
                            Refine the defaulter reporting table securely.
                        </SheetDescription>
                    </SheetHeader>

                    <div className="p-6 flex-1 bg-muted/20">
                        <div className="space-y-6">
                            {/* Strategy Select */}
                            <div className="space-y-2">
                                <Label className="text-sm font-bold text-primary">Filter Core Strategy</Label>
                                <Select value={activeTab} onValueChange={(val) => setActiveTab(val as FilterCategoryKey)}>
                                    <SelectTrigger className="w-full bg-background border-primary/20">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Year Wise Architect">Year Wise Architect</SelectItem>
                                        <SelectItem value="Year Wise Total">Year Wise Total Aggregates</SelectItem>
                                        <SelectItem value="Registration No.">Registration No. Search</SelectItem>
                                        <SelectItem value="Month Wise">Month Wise Output</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            
                            <hr />

                            {/* Dynamic Fields generated from JSON Schema mapping */}
                            <div className="space-y-4">
                                <h4 className="text-xs uppercase font-semibold text-muted-foreground tracking-wider mb-2">
                                    {activeTab} Parameters
                                </h4>
                                {FILTER_CATEGORIES[activeTab].parameters.map((param, idx) => (
                                    <div key={idx} className="space-y-1.5 flex flex-col pb-2">
                                        <Label className="text-sm">{param.name}</Label>
                                        {renderFilterInput(param.type, param.name)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-t sticky bottom-0 bg-background flex flex-col gap-3 mt-auto">
                        <Button className="w-full" onClick={() => setIsFilterSheetOpen(false)}>Apply Filtering Rules</Button>
                        <Button variant="outline" className="w-full text-muted-foreground" onClick={() => setActiveTab("Year Wise Architect")}>
                            Reset Matrix
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
