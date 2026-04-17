import { useState, useMemo } from "react";
import { Search, Filter, Columns, Download, ShieldAlert, SlidersHorizontal } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CRITERIA_OPTIONS = [
    "Name removed on death-With Certificate",
    "Name removed on request-with Certificate",
    "Name removed on entry by error",
    "Name removed on Conviction of offence",
    "Name removed on being an undischarged insolvent",
    "Name removed on being adjudged to be of unsound mind",
    "Name removed on disciplinary grounds By Council",
    "Permanently",
    "Suspension for a specific period",
    "Due to non payment of fee",
    "Name removed on misrepresentation of fact",
    "Name removed on suppression of material fact",
    "On Double Registration",
    "Proof of Indian Residence Required",
    "Certificate Undelivered",
    "Marksheets / Documents etc. required",
    "Address not confirmed",
    "Certificate of Registration Retained",
    "Affidavit in LIEU of Certificate of Registration",
    "Original Receipt Retained.",
    "Demand Draft Retd.",
    "Demand Draft Returned UNDELIVERED",
    "Original Certificate SURRENDERED",
    "Additional fine as per the direction of the Registrar.",
    "Name removed on request-without Certificate",
    "Name removed on death-Without Certificate",
    "NCARB Issued- Original Certificate SURRENDERED"
];

// Display Column Keys mapping
type DisplayColumnKey = "regNo" | "name" | "dob" | "guardianName" | "inactiveWithCert" | "inactiveWithoutCert" | "nationality" | "criteria" | "validTill" | "details";

const COLUMN_HEADERS: Record<DisplayColumnKey, string> = {
    regNo: "Reg.No",
    name: "Name",
    dob: "Date of Birth",
    guardianName: "Father/ Husband Name",
    inactiveWithCert: "Inactive With Certificate",
    inactiveWithoutCert: "Inactive Without Certificate",
    nationality: "Nationality",
    criteria: "Name Of Criteria",
    validTill: "Valid Till",
    details: "Details"
};

// Mock Data targeting inactive profiles
const MOCK_INACTIVE_ARCHITECTS = Array.from({ length: 15 }, (_, i) => ({
    id: `ia-${1000 + i}`,
    regNo: `CA/199${(i % 10)}/${100 + i}`,
    name: `Architect Subject ${i + 1}`,
    dob: `197${i % 10}-0${(i % 9) + 1}-15`,
    guardianName: `Parent Name ${i + 1}`,
    inactiveWithCert: i % 2 === 0 ? "Yes" : "No",
    inactiveWithoutCert: i % 2 !== 0 ? "Yes" : "No",
    nationality: "Indian",
    criteria: CRITERIA_OPTIONS[i % CRITERIA_OPTIONS.length],
    validTill: `31-Dec-202${(i % 2)}`,
    details: "View Archival Record"
}));

export default function InactiveArchitects() {
    const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
    const [globalSearch, setGlobalSearch] = useState("");
    
    // Filter State Requirements
    const [inactivationType, setInactivationType] = useState<"With Certificate" | "Without Certificate" | "Both">("Both");
    const [selectedCriteria, setSelectedCriteria] = useState<string[]>([]);

    // Column Display Toggles setup
    const [visibleColumns, setVisibleColumns] = useState<Record<DisplayColumnKey, boolean>>({
        regNo: true,
        name: true,
        dob: false,
        guardianName: false,
        inactiveWithCert: true,
        inactiveWithoutCert: true,
        nationality: false,
        criteria: true,
        validTill: true,
        details: true
    });

    const toggleCriteria = (criteria: string) => {
        setSelectedCriteria(prev => 
            prev.includes(criteria) 
                ? prev.filter(c => c !== criteria)
                : [...prev, criteria]
        );
    };

    const applyFilters = () => {
        setIsFilterSheetOpen(false);
    };

    // Filter Logic Runner
    const filteredData = useMemo(() => {
        return MOCK_INACTIVE_ARCHITECTS.filter(arch => {
            // Global Search Filter
            if (globalSearch) {
                const searchLower = globalSearch.toLowerCase();
                const matches = arch.regNo.toLowerCase().includes(searchLower) || arch.name.toLowerCase().includes(searchLower);
                if (!matches) return false;
            }

            // Inactivation Type Filter
            if (inactivationType === "With Certificate" && arch.inactiveWithCert === "No") return false;
            if (inactivationType === "Without Certificate" && arch.inactiveWithoutCert === "No") return false;

            // Multi-select Criteria Filter
            if (selectedCriteria.length > 0) {
                if (!selectedCriteria.includes(arch.criteria)) return false;
            }

            return true;
        });
    }, [globalSearch, inactivationType, selectedCriteria]);

    return (
        <div className="max-w-[1400px] mx-auto p-4 md:p-6 space-y-6 flex flex-col min-w-0 h-full">
            {/* Top Action Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4">
                <div className="flex items-center gap-3">
                    <div className="bg-amber-500/10 p-2 rounded-lg">
                        <ShieldAlert className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight text-amber-600">Inactive Architects</h1>
                        <p className="text-muted-foreground mt-1">
                            Registry mapping of architects removed or deactivated due to system violations or expiration.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:min-w-[250px]">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by Reg No. or Name..."
                            className="pl-8 h-10 w-full bg-background"
                            value={globalSearch}
                            onChange={(e) => setGlobalSearch(e.target.value)}
                        />
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="h-10 gap-2 font-medium">
                                <Columns className="h-4 w-4" />
                                Columns
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 overflow-y-auto max-h-[300px]">
                            <DropdownMenuLabel>Toggle Fields</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {Object.entries(COLUMN_HEADERS).map(([key, label]) => (
                                <DropdownMenuCheckboxItem
                                    key={key}
                                    className="text-xs"
                                    checked={visibleColumns[key as DisplayColumnKey]}
                                    onCheckedChange={(checked) => 
                                        setVisibleColumns(prev => ({ ...prev, [key]: checked }))
                                    }
                                >
                                    {label}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button onClick={() => setIsFilterSheetOpen(true)} variant="secondary" className="h-10 gap-2 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-200">
                        <Filter className="h-4 w-4" />
                        Refine Index
                    </Button>
                </div>
            </div>

            {/* Filter tags readout map */}
            {(selectedCriteria.length > 0 || inactivationType !== "Both") && (
                <div className="flex flex-wrap gap-2 items-center text-sm">
                    <span className="text-muted-foreground mr-2"><SlidersHorizontal className="h-4 w-4 inline mr-1"/> Active Rules:</span>
                    {inactivationType !== "Both" && (
                        <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200">
                            Type: {inactivationType}
                        </Badge>
                    )}
                    {selectedCriteria.map(c => (
                        <Badge key={c} variant="outline" className="text-xs max-w-[200px] truncate">
                            {c}
                        </Badge>
                    ))}
                    <Button variant="ghost" size="sm" className="h-6 text-xs text-muted-foreground hover:text-foreground" onClick={() => {
                        setInactivationType("Both");
                        setSelectedCriteria([]);
                    }}>Clear All</Button>
                </div>
            )}

            {/* Inactive Table Grid */}
            <div className="flex-1 w-full min-w-0 bg-background rounded-md shadow-sm border border-border flex flex-col overflow-hidden">
                <div className="p-4 border-b flex items-center justify-between bg-muted/10">
                    <h2 className="font-semibold text-sm text-foreground flex items-center gap-2">
                        Filtered Archives
                        <Badge variant="secondary" className="font-mono bg-background">{filteredData.length} RECORDS</Badge>
                    </h2>
                    <Button variant="outline" size="sm" className="h-8 gap-2">
                        <Download className="h-3 w-3" /> Export Archive
                    </Button>
                </div>

                <div className="overflow-auto w-full flex-1">
                    <Table className="min-w-max relative border-b-0">
                        <TableHeader className="bg-muted/50 sticky top-0 z-10 shadow-sm border-b">
                            <TableRow>
                                {Object.entries(COLUMN_HEADERS).map(([key, label]) => (
                                    visibleColumns[key as DisplayColumnKey] && (
                                        <TableHead key={key} className="font-semibold whitespace-nowrap text-xs text-slate-600 tracking-tight">
                                            {label}
                                        </TableHead>
                                    )
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.length > 0 ? (
                                filteredData.map((arch) => (
                                    <TableRow key={arch.id} className="hover:bg-amber-50/30">
                                        {visibleColumns.regNo && (
                                            <TableCell className="font-medium text-amber-600 whitespace-nowrap">
                                                {arch.regNo}
                                            </TableCell>
                                        )}
                                        {visibleColumns.name && (
                                            <TableCell className="font-medium whitespace-nowrap">{arch.name}</TableCell>
                                        )}
                                        {visibleColumns.dob && (
                                            <TableCell className="text-muted-foreground whitespace-nowrap">{arch.dob}</TableCell>
                                        )}
                                        {visibleColumns.guardianName && (
                                            <TableCell className="text-muted-foreground whitespace-nowrap">{arch.guardianName}</TableCell>
                                        )}
                                        {visibleColumns.inactiveWithCert && (
                                            <TableCell className="whitespace-nowrap">
                                                {arch.inactiveWithCert === "Yes" ? (
                                                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Yes</Badge>
                                                ) : <span className="text-muted-foreground">-</span>}
                                            </TableCell>
                                        )}
                                        {visibleColumns.inactiveWithoutCert && (
                                            <TableCell className="whitespace-nowrap">
                                                {arch.inactiveWithoutCert === "Yes" ? (
                                                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Yes</Badge>
                                                ) : <span className="text-muted-foreground">-</span>}
                                            </TableCell>
                                        )}
                                        {visibleColumns.nationality && (
                                            <TableCell className="whitespace-nowrap">{arch.nationality}</TableCell>
                                        )}
                                        {visibleColumns.criteria && (
                                            <TableCell className="whitespace-nowrap max-w-[250px] truncate" title={arch.criteria}>
                                                {arch.criteria}
                                            </TableCell>
                                        )}
                                        {visibleColumns.validTill && (
                                            <TableCell className="whitespace-nowrap text-muted-foreground">
                                                {arch.validTill}
                                            </TableCell>
                                        )}
                                        {visibleColumns.details && (
                                            <TableCell className="whitespace-nowrap">
                                                <Button variant="link" className="h-auto p-0 text-amber-600">
                                                    Action Audit
                                                </Button>
                                            </TableCell>
                                        )}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={Object.values(visibleColumns).filter(Boolean).length} className="h-48 text-center text-muted-foreground">
                                        No inactive records map to the current ruleset.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Filter Drawer mapping JSON specifications */}
            <Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
                <SheetContent className="w-full sm:max-w-md p-0 flex flex-col border-l">
                    <SheetHeader className="p-6 border-b sticky top-0 bg-background z-10 shadow-sm">
                        <SheetTitle className="flex items-center gap-2 text-xl font-bold tracking-tight">
                            <SlidersHorizontal className="h-5 w-5 text-amber-600" />
                            Filter Records
                        </SheetTitle>
                        <SheetDescription>
                            Isolate inactive archives using boolean gates.
                        </SheetDescription>
                    </SheetHeader>

                    <div className="p-6 flex-1 bg-muted/20 overflow-y-auto">
                        <div className="space-y-8">
                            
                            {/* 1. Inactivation Type (Radio) */}
                            <div className="space-y-3">
                                <Label className="text-sm font-bold text-foreground">Inactivation Type</Label>
                                <RadioGroup 
                                    value={inactivationType} 
                                    onValueChange={(val: any) => setInactivationType(val)}
                                    className="flex flex-col space-y-2 bg-background p-3 rounded-md border shadow-sm"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="With Certificate" id="wc" />
                                        <Label htmlFor="wc" className="font-normal cursor-pointer">With Certificate</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Without Certificate" id="woc" />
                                        <Label htmlFor="woc" className="font-normal cursor-pointer">Without Certificate</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Both" id="both" />
                                        <Label htmlFor="both" className="font-normal cursor-pointer">Both (Any)</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* 2. Criteria (Multi-Select via Checkboxes in scroll pool) */}
                            <div className="space-y-3 flex flex-col flex-1 h-[300px]">
                                <Label className="text-sm font-bold text-foreground flex justify-between items-center">
                                    Disqualification Criteria
                                    <span className="text-xs font-normal text-muted-foreground bg-background px-2 py-0.5 border rounded-full">
                                        {selectedCriteria.length} selected
                                    </span>
                                </Label>
                                <div className="border rounded-md bg-background shadow-sm flex-1 overflow-hidden">
                                    <ScrollArea className="h-[280px]">
                                        <div className="p-4 space-y-3">
                                            {CRITERIA_OPTIONS.map((criteria, idx) => (
                                                <div key={idx} className="flex items-start space-x-3">
                                                    <Checkbox 
                                                        id={`criteria-${idx}`} 
                                                        checked={selectedCriteria.includes(criteria)}
                                                        onCheckedChange={() => toggleCriteria(criteria)}
                                                        className="mt-0.5 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                                                    />
                                                    <div className="grid gap-1.5 leading-none">
                                                        <Label
                                                            htmlFor={`criteria-${idx}`}
                                                            className="text-sm font-normal cursor-pointer leading-tight text-slate-700"
                                                        >
                                                            {criteria}
                                                        </Label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-6 border-t sticky bottom-0 bg-background flex flex-col gap-3">
                        <Button className="w-full bg-slate-900 hover:bg-slate-800" onClick={applyFilters}>Apply Filtering Actions</Button>
                        <Button variant="outline" className="w-full text-muted-foreground" onClick={() => {
                            setInactivationType("Both");
                            setSelectedCriteria([]);
                        }}>
                            Reset Properties
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
