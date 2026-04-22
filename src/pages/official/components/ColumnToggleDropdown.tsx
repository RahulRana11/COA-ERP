import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

export type ColumnKey =
    | "appMode"
    | "paymentStatus"
    | "nameDob"
    | "photoSign"
    | "gender"
    | "nationality"
    | "qualification"
    | "enrolmentNumber"
    | "appNumber"
    | "dateOfApp"
    | "hardcopyReceivedOn"
    | "regNumberDate"
    | "residentialAddress"
    | "professionalAddress"
    | "communicationAddress"
    | "presidentApproveOn"
    | "status"
    | "additionalQualification"
    | "actions";

interface ColumnToggleDropdownProps {
    columns: Record<ColumnKey, boolean>;
    setColumns: (columns: Record<ColumnKey, boolean>) => void;
}

const columnLabels: Record<ColumnKey, string> = {
    appNumber: "Application Number (Fixed Left)",
    appMode: "App. Mode",
    paymentStatus: "Payment Status",
    nameDob: "Name & Date of Birth",
    photoSign: "Photo / Sign",
    gender: "Gender",
    nationality: "Nationality",
    qualification: "Qualification",
    enrolmentNumber: "Enrolment Number",
    dateOfApp: "Date of Application",
    hardcopyReceivedOn: "Hardcopy received on",
    regNumberDate: "Reg Number & Date",
    residentialAddress: "Residential Address",
    professionalAddress: "Professional Address",
    communicationAddress: "Communication Address",
    presidentApproveOn: "President Approve On",
    status: "Status",
    additionalQualification: "Additional Qualification",
    actions: "Actions (Fixed Right)",
};

export function ColumnToggleDropdown({ columns, setColumns }: ColumnToggleDropdownProps) {
    const handleToggle = (key: ColumnKey) => {
        // App Number and Actions cannot be toggled off because they are fixed
        if (key === "appNumber" || key === "actions") return;

        setColumns({
            ...columns,
            [key]: !columns[key],
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden lg:flex">
                    <Settings2 className="mr-2 h-4 w-4" />
                    Columns
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[250px] max-h-96 overflow-y-auto">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {(Object.keys(columns) as ColumnKey[]).map((key) => {
                    const isFixed = key === "appNumber" || key === "actions";
                    return (
                        <DropdownMenuCheckboxItem
                            key={key}
                            className="capitalize"
                            checked={columns[key]}
                            onCheckedChange={() => handleToggle(key)}
                            disabled={isFixed}
                        >
                            {columnLabels[key]}
                        </DropdownMenuCheckboxItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
