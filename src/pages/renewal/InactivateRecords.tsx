import { useState } from "react";
import { Search, Save, AlertTriangle, ShieldX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const INACTIVATION_CRITERIA = [
    "Additional fine as per the direction of the Registrar.",
    "Address not confirmed",
    "Affidavit in LIEU of Certificate of Registration",
    "Certificate of Registration Retained",
    "Certificate Undelivered",
    "Demand Draft Retd.",
    "Demand Draft Returned UNDELIVERED",
    "Marksheets / Documents etc. required",
    "Name removed on death-Without Certificate",
    "Name removed on request-without Certificate",
    "Original Receipt Retained.",
    "Proof of Indian Residence Required"
];

interface CriterionFormState {
    selected: boolean;
    stopFine: "yes" | "no";
    effectiveFrom: string;
    remarks: string;
    objectionClearOn: string;
    clearRemarks: string;
}

export default function InactivateRecords() {
    const { toast } = useToast();
    
    // Top Level Search State
    const [regNo, setRegNo] = useState("");
    const [certType, setCertType] = useState<"with" | "without">("without");
    const [hasQueried, setHasQueried] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    
    // Form Table State
    // Map initial state for all 12 rows
    const [criteriaState, setCriteriaState] = useState<Record<string, CriterionFormState>>(() => {
        const initial: Record<string, CriterionFormState> = {};
        INACTIVATION_CRITERIA.forEach(c => {
            initial[c] = {
                selected: false,
                stopFine: "no",
                effectiveFrom: "",
                remarks: "",
                objectionClearOn: "",
                clearRemarks: ""
            };
        });
        return initial;
    });

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!regNo) return;
        setIsSearching(true);
        // Simulate network delay to fetch architect logic mapping
        setTimeout(() => {
            setHasQueried(true);
            setIsSearching(false);
        }, 600);
    };

    const handleCellChange = (criteria: string, field: keyof CriterionFormState, val: string | boolean) => {
        setCriteriaState(prev => ({
            ...prev,
            [criteria]: {
                ...prev[criteria],
                [field]: val
            }
        }));
    };

    const handleFinalExecute = () => {
        // Find which lines the user actually selected to execute against the target
        const activeActions = Object.entries(criteriaState).filter(([_, state]) => state.selected);
        
        if (activeActions.length === 0) {
            toast({
                title: "Validation Error",
                description: "You must select at least one criteria rule to flag the architect with.",
                variant: "destructive"
            });
            return;
        }

        toast({
            title: "Architect Inactivated",
            description: `Successfully executed ${activeActions.length} penalty flags against architect ${regNo} (${certType === "with" ? "With" : "Without"} Certificate).`,
        });

        // Reset the form layout effectively mapping a new pipeline request
        setHasQueried(false);
        setRegNo("");
    };

    return (
        <div className="max-w-[1400px] mx-auto p-4 md:p-6 space-y-6">
            <div className="flex items-center gap-3 border-b pb-4">
                <div className="bg-destructive/10 p-2 rounded-lg">
                    <ShieldX className="h-6 w-6 text-destructive" />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-destructive">Inactivate Records Manager</h1>
                    <p className="text-muted-foreground mt-1">
                        Secure terminal used to sever or lock architectural profiles dynamically based on rigid violation mapping.
                    </p>
                </div>
            </div>

            {/* Step 1: Identifier Gateway */}
            <Card className="border-border shadow-sm">
                <CardHeader className="bg-muted/30">
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Search className="h-5 w-5 text-muted-foreground" />
                        Architect Renewal Inactivate
                    </CardTitle>
                    <CardDescription>
                        Determine the scope and architecture registration ID before applying penalty actions.
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                    <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-end gap-6 w-full max-w-4xl">
                        <div className="space-y-2 flex-1 w-full relative">
                            <Label htmlFor="regNo" className="font-semibold text-foreground">Architect Registration No.</Label>
                            <Input 
                                id="regNo" 
                                placeholder="eg. CA/2026/1015" 
                                className="h-11 bg-background uppercase font-mono"
                                value={regNo}
                                onChange={(e) => setRegNo(e.target.value)}
                                required
                                disabled={hasQueried}
                            />
                        </div>

                        <div className="space-y-2 flex-1 w-full border rounded-md p-2 bg-muted/20">
                            <Label className="font-semibold text-foreground mb-1 block px-1">Inactivation Type</Label>
                            <RadioGroup 
                                value={certType} 
                                onValueChange={(val: any) => setCertType(val)}
                                className="flex items-center gap-6 px-1"
                                disabled={hasQueried}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="with" id="t-with" />
                                    <Label htmlFor="t-with" className="cursor-pointer">With Certificate</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="without" id="t-without" />
                                    <Label htmlFor="t-without" className="cursor-pointer">Without Certificate</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {hasQueried ? (
                            <Button type="button" variant="outline" className="h-11" onClick={() => setHasQueried(false)}>
                                Reset Scope
                            </Button>
                        ) : (
                            <Button type="submit" className="h-11 min-w-[140px]" disabled={isSearching || !regNo}>
                                {isSearching ? "Loading..." : "Proceed"}
                            </Button>
                        )}
                    </form>
                </CardContent>
            </Card>

            {/* Step 2: Action Map Matrix */}
            {hasQueried && (
                <Card className="border-border shadow-md animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-hidden">
                    <CardHeader className="bg-destructive/10 border-b border-destructive/20">
                        <CardTitle className="text-xl flex items-center gap-2 text-destructive">
                            <AlertTriangle className="h-5 w-5" />
                            Penalty Execution Matrix
                        </CardTitle>
                        <CardDescription className="text-destructive/80">
                            You are applying infractions against <span className="font-mono font-bold">{regNo.toUpperCase()}</span>. Review all parameters closely before submitting.
                        </CardDescription>
                    </CardHeader>
                    
                    <div className="w-full overflow-x-auto">
                        <Table className="min-w-[1200px]">
                            <TableHeader className="bg-muted/40">
                                <TableRow>
                                    <TableHead className="w-[50px] text-center">S.No</TableHead>
                                    <TableHead className="w-[280px]">Disqualification Criteria</TableHead>
                                    <TableHead className="w-[120px]">Stop Fine</TableHead>
                                    <TableHead className="w-[160px]">Effective From</TableHead>
                                    <TableHead className="w-[200px]">Remarks</TableHead>
                                    <TableHead className="w-[160px]">Objection Clear</TableHead>
                                    <TableHead className="w-[200px]">Clear Remarks</TableHead>
                                    <TableHead className="w-[80px] text-center shadow-[inset_1px_0_0_rgba(0,0,0,0.1)] bg-background">Select</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {INACTIVATION_CRITERIA.map((criteria, index) => {
                                    const state = criteriaState[criteria];
                                    const isSelected = state.selected;
                                    
                                    return (
                                        <TableRow key={index} className={`relative ${isSelected ? 'bg-destructive/5 hover:bg-destructive/10' : ''}`}>
                                            <TableCell className="text-center text-muted-foreground">{index + 1}</TableCell>
                                            <TableCell className={`font-medium text-sm pr-4 ${isSelected ? "text-destructive" : ""}`}>
                                                {criteria}
                                            </TableCell>
                                            <TableCell>
                                                <Select 
                                                    value={state.stopFine} 
                                                    onValueChange={(val) => handleCellChange(criteria, "stopFine", val)}
                                                    disabled={!isSelected}
                                                >
                                                    <SelectTrigger className="h-8 text-xs bg-background">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="yes">Yes</SelectItem>
                                                        <SelectItem value="no">No</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Input 
                                                    type="date" 
                                                    className="h-8 text-xs bg-background" 
                                                    value={state.effectiveFrom}
                                                    onChange={(e) => handleCellChange(criteria, "effectiveFrom", e.target.value)}
                                                    disabled={!isSelected}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Input 
                                                    placeholder="Reason..." 
                                                    className="h-8 text-xs bg-background"
                                                    value={state.remarks}
                                                    onChange={(e) => handleCellChange(criteria, "remarks", e.target.value)}
                                                    disabled={!isSelected}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Input 
                                                    type="date" 
                                                    className="h-8 text-xs bg-background" 
                                                    value={state.objectionClearOn}
                                                    onChange={(e) => handleCellChange(criteria, "objectionClearOn", e.target.value)}
                                                    disabled={!isSelected}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Input 
                                                    placeholder="Resolution..." 
                                                    className="h-8 text-xs bg-background"
                                                    value={state.clearRemarks}
                                                    onChange={(e) => handleCellChange(criteria, "clearRemarks", e.target.value)}
                                                    disabled={!isSelected}
                                                />
                                            </TableCell>
                                            <TableCell className="text-center shadow-[inset_1px_0_0_rgba(0,0,0,0.1)] bg-card border-x">
                                                <div className="flex justify-center w-full">
                                                    <Checkbox 
                                                        checked={isSelected}
                                                        onCheckedChange={(checked) => handleCellChange(criteria, "selected", !!checked)}
                                                        className="data-[state=checked]:bg-destructive data-[state=checked]:border-destructive h-5 w-5"
                                                    />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>

                    <CardFooter className="bg-muted/10 p-6 flex items-center justify-between border-t mt-0">
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" /> This action logs directly into the official Architect Ledger.
                        </p>
                        <Button className="bg-destructive hover:bg-destructive/90 gap-2 h-11 px-8 text-md font-semibold" onClick={handleFinalExecute}>
                            <Save className="h-4 w-4" /> Finalize Record Inactivation
                        </Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}
