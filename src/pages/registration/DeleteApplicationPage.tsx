import { useState, useMemo } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { Search, SlidersHorizontal, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDebounce } from "@/hooks/use-debounce";

import { ColumnToggleDropdown, ColumnKey } from "../official/components/ColumnToggleDropdown";
import { FilterSheet } from "../official/components/FilterSheet";
import { DeleteTable, DeleteApplicationData } from "./components/delete-components/DeleteTable";

// Generate mock data simulating deleted status
const INITIAL_MOCK_DATA: DeleteApplicationData[] = Array.from({ length: 20 }, (_, i) => {
    const isDeleted = i % 4 === 0; // every 4th item is deleted
    const deletedByMe = isDeleted && i % 8 === 0; // half of deleted were by 'me'
    
    return {
        id: `app-${1000 + i}`,
        appNumber: `APP-2026-${String(1001 + i).padStart(4, '0')}`,
        appMode: i % 3 === 0 ? "Offline" : "Online",
        paymentStatus: i % 4 === 0 ? "Pending" : "Paid",
        name: `Applicant Name ${i + 1}`,
        dob: `199${i % 10}-05-15`,
        gender: i % 2 === 0 ? "Male" : "Female",
        nationality: "Indian",
        qualification: "B.Arch from SPA Delhi",
        dateOfApp: `2026-03-${String((i % 28) + 1).padStart(2, '0')}`,
        hardcopyReceivedOn: i % 3 === 0 ? undefined : `2026-03-${String((i % 28) + 5).padStart(2, '0')}`,
        regNumber: i % 5 === 0 ? `CA/2026/${50000 + i}` : undefined,
        regDate: i % 5 === 0 ? "2026-04-10" : undefined,
        residentialAddress: "Flat 101, Test Appt, New Delhi, 110001",
        professionalAddress: "Office 405, Work Hub, Connaught Place",
        communicationAddress: "Flat 101, Test Appt, New Delhi, 110001",
        presidentApproveOn: i % 6 === 0 ? "2026-04-12" : undefined,
        status: isDeleted ? "Deleted" : (i % 5 === 0 ? "Approved" : i % 3 === 0 ? "Under Review" : "Pending"),
        additionalQualification: i % 7 === 0 ? "M.Arch (Urban Design)" : undefined,
        isDeleted,
        deletedByMe
    };
});

type DeleteTabState = "all" | "deleted_by_me" | "deleted_all";

export default function DeleteApplicationPage() {
    // 1. Data State
    const [mockData, setMockData] = useState<DeleteApplicationData[]>(INITIAL_MOCK_DATA);
    
    // 2. View State
    const [activeTab, setActiveTab] = useState<DeleteTabState>("all");
    const [globalSearch, setGlobalSearch] = useState("");
    const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
    
    // 3. Column Visibility State
    const [columns, setColumns] = useState<Record<ColumnKey, boolean>>({
        appMode: true,
        paymentStatus: true,
        nameDob: true,
        photoSign: true,
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
    });

    // 4. Advanced Filter State (React Hook Form)
    const filterMethods = useForm({
        defaultValues: {
            appMode: "",
            paymentStatus: "",
            status: "",
            residentialState: "",
            gender: "",
            dateOfAppStart: "",
            dateOfAppEnd: "",
        }
    });

    // 5. Watch & Debounce Filters
    const filterValues = useWatch({ control: filterMethods.control });
    const debouncedSearch = useDebounce(globalSearch, 300);
    const debouncedFilters = useDebounce<any>(filterValues, 300);

    // 6. Action Handlers
    const toggleColumn = (key: ColumnKey) => {
        setColumns(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleDeleteToggle = (id: string, currentlyDeleted: boolean) => {
        setMockData(prev => prev.map(app => {
            if (app.id === id) {
                const nowDeleted = !currentlyDeleted;
                return {
                    ...app,
                    isDeleted: nowDeleted,
                    deletedByMe: nowDeleted, // Simulating we just deleted it
                    status: nowDeleted ? "Deleted" : "Pending" // Restore to pending temporarily
                };
            }
            return app;
        }));

        if (currentlyDeleted) {
            toast.success(`Application restored successfully.`);
        } else {
            toast.error(`Application removed from active directory.`);
        }
    };

    // 7. Memoized Filtering Logic
    const filteredData = useMemo(() => {
        return mockData.filter((app) => {
            // Apply Top Level Tab Filters
            if (activeTab === "deleted_by_me" && !app.deletedByMe) return false;
            if (activeTab === "deleted_all" && !app.isDeleted) return false;
            if (activeTab === "all" && app.isDeleted) return false; // Show only Active items

            // Apply Global Search
            if (debouncedSearch) {
                const searchLower = debouncedSearch.toLowerCase();
                const matchNumber = app.appNumber.toLowerCase().includes(searchLower);
                const matchName = app.name.toLowerCase().includes(searchLower);
                if (!matchNumber && !matchName) return false;
            }

            // Apply Advanced Form Filters
            const { appMode, paymentStatus, status, gender } = debouncedFilters;
            if (appMode && appMode !== "all" && app.appMode.toLowerCase() !== appMode.toLowerCase()) return false;
            if (paymentStatus && paymentStatus !== "all" && app.paymentStatus.toLowerCase() !== paymentStatus.toLowerCase()) return false;
            if (gender && gender !== "all" && app.gender.toLowerCase() !== gender.toLowerCase()) return false;
            if (status && status !== "all" && app.status.toLowerCase() !== status.toLowerCase()) return false;

            return true;
        });
    }, [mockData, activeTab, debouncedSearch, debouncedFilters]);

    return (
        <FormProvider {...filterMethods}>
            <div className="flex flex-col h-full overflow-hidden w-full relative">
                
                {/* Top Sticky Bar */}
                <div className="flex-none p-4 md:p-6 pb-4 border-b bg-background/95 backdrop-blur z-30">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-semibold tracking-tight">Delete Application</h1>
                                <p className="text-muted-foreground mt-1">Review active applications and manage their deletion lifecycle safely.</p>
                            </div>
                        </div>

                        {/* Controls Row */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            
                            {/* Classification Tabs */}
                            <Tabs 
                                value={activeTab} 
                                onValueChange={(val) => setActiveTab(val as DeleteTabState)}
                                className="w-full md:w-auto"
                            >
                                <TabsList className="h-10 border bg-muted/50 w-full md:w-auto grid grid-cols-3 md:flex">
                                    <TabsTrigger value="all" className="data-[state=active]:bg-background">
                                        All Applications
                                    </TabsTrigger>
                                    <TabsTrigger value="deleted_by_me" className="data-[state=active]:bg-background text-red-600 data-[state=active]:text-red-700">
                                        Deleted by me
                                    </TabsTrigger>
                                    <TabsTrigger value="deleted_all" className="data-[state=active]:bg-background text-red-600 data-[state=active]:text-red-700">
                                        Deleted Applications
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>

                            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                                {/* Global Search */}
                                <div className="relative min-w-[200px] md:w-64 shrink-0">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search Ref or Name..."
                                        className="pl-8 h-9"
                                        value={globalSearch}
                                        onChange={(e) => setGlobalSearch(e.target.value)}
                                    />
                                </div>
                                <ColumnToggleDropdown columns={columns} setColumns={setColumns} />
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="h-9 shrink-0 shadow-sm border-dashed"
                                    onClick={() => setIsFilterSheetOpen(true)}
                                >
                                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                                    More Filters
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Table Area */}
                <div className="flex-1 overflow-auto p-4 md:p-6 bg-muted/10">
                    <div className="block w-full max-w-[calc(100vw-3rem)] xl:max-w-none">
                        <DeleteTable 
                            data={filteredData} 
                            columns={columns} 
                            onDeleteToggle={handleDeleteToggle} 
                        />
                    </div>
                </div>

                {/* Filter Sidebar overlay */}
                <FilterSheet 
                    open={isFilterSheetOpen} 
                    onOpenChange={setIsFilterSheetOpen} 
                />
            </div>
        </FormProvider>
    );
}
