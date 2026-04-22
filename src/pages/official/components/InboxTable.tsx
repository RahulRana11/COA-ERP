import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ApplicationMockData } from "../OfficialDashboard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import { ColumnKey } from "./ColumnToggleDropdown";
import { useNavigate } from "react-router-dom";

interface InboxTableProps {
    data: ApplicationMockData[];
    columns: Record<ColumnKey, boolean>;
}

export function InboxTable({ data, columns }: InboxTableProps) {
    const navigate = useNavigate();

    return (
        <div className="w-full overflow-x-auto relative rounded-md border bg-card">
            <Table className="min-w-max">
                <TableHeader className="bg-muted/50">
                    <TableRow>
                        {/* Fixed Left - Application Number */}
                        <TableHead className="sticky left-0 z-20 bg-muted/50 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] min-w-[150px]">
                            Application Number
                        </TableHead>

                        {/* Middle Columns */}
                        {columns.appMode && <TableHead>App. Mode</TableHead>}
                        {columns.paymentStatus && <TableHead>Payment Status</TableHead>}
                        {columns.nameDob && <TableHead>Name & Date of Birth</TableHead>}
                        {columns.photoSign && <TableHead>Photo/Sign</TableHead>}
                        {columns.gender && <TableHead>Gender</TableHead>}
                        {columns.nationality && <TableHead>Nationality</TableHead>}
                        {columns.qualification && <TableHead>Qualification</TableHead>}
                        {columns.enrolmentNumber && <TableHead>Enrolment No.</TableHead>}
                        {columns.dateOfApp && <TableHead>Date of Application</TableHead>}
                        {columns.hardcopyReceivedOn && <TableHead>Hardcopy Received</TableHead>}
                        {columns.regNumberDate && <TableHead>Reg No & Date</TableHead>}
                        {columns.residentialAddress && <TableHead>Residential Address</TableHead>}
                        {columns.professionalAddress && <TableHead>Professional Address</TableHead>}
                        {columns.communicationAddress && <TableHead>Communication Address</TableHead>}
                        {columns.presidentApproveOn && <TableHead>President Approve On</TableHead>}
                        {columns.status && <TableHead>Status</TableHead>}
                        {columns.additionalQualification && <TableHead>Additional Qual.</TableHead>}

                        {/* Fixed Right - Actions */}
                        <TableHead className="sticky right-0 z-20 bg-muted/50 shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)] text-right">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.length > 0 ? (
                        data.map((app) => (
                            <TableRow key={app.id}>
                                {/* Fixed Left */}
                                <TableCell className="sticky left-0 z-20 bg-background shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] font-medium text-primary">
                                    {app.appNumber}
                                </TableCell>

                                {/* Middle Columns */}
                                {columns.appMode && <TableCell>{app.appMode}</TableCell>}
                                {columns.paymentStatus && (
                                    <TableCell>
                                        <Badge variant={app.paymentStatus === "Paid" ? "default" : "destructive"}>
                                            {app.paymentStatus}
                                        </Badge>
                                    </TableCell>
                                )}
                                {columns.nameDob && (
                                    <TableCell>
                                        {app.name} <br />
                                        <span className="text-xs text-muted-foreground">{app.dob}</span>
                                    </TableCell>
                                )}
                                {columns.photoSign && (
                                    <TableCell>
                                        <div className="flex gap-2 items-center">
                                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                                <User className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                            <div className="w-8 h-4 rounded bg-secondary/50 border border-muted" />
                                        </div>
                                    </TableCell>
                                )}
                                {columns.gender && <TableCell>{app.gender}</TableCell>}
                                {columns.nationality && <TableCell>{app.nationality}</TableCell>}
                                {columns.qualification && (
                                    <TableCell>
                                        <span className="truncate max-w-[200px] block" title={app.qualification}>
                                            {app.qualification}
                                        </span>
                                    </TableCell>
                                )}
                                {columns.enrolmentNumber && <TableCell>{app.enrolmentNumber || "N/A"}</TableCell>}
                                {columns.dateOfApp && <TableCell>{app.dateOfApp}</TableCell>}
                                {columns.hardcopyReceivedOn && <TableCell>{app.hardcopyReceivedOn || "N/A"}</TableCell>}
                                {columns.regNumberDate && (
                                    <TableCell>
                                        {app.regNumber || "N/A"} <br />
                                        <span className="text-xs text-muted-foreground">{app.regDate || ""}</span>
                                    </TableCell>
                                )}
                                {columns.residentialAddress && (
                                    <TableCell>
                                        <span className="truncate max-w-[150px] block" title={app.residentialAddress}>
                                            {app.residentialAddress}
                                        </span>
                                    </TableCell>
                                )}
                                {columns.professionalAddress && (
                                    <TableCell>
                                        <span className="truncate max-w-[150px] block" title={app.professionalAddress}>
                                            {app.professionalAddress}
                                        </span>
                                    </TableCell>
                                )}
                                {columns.communicationAddress && (
                                    <TableCell>
                                        <span className="truncate max-w-[150px] block" title={app.communicationAddress}>
                                            {app.communicationAddress}
                                        </span>
                                    </TableCell>
                                )}
                                {columns.presidentApproveOn && <TableCell>{app.presidentApproveOn || "N/A"}</TableCell>}
                                {columns.status && (
                                    <TableCell>
                                        <Badge variant={app.status === "Approved" ? "default" : app.status === "Rejected" ? "destructive" : "secondary"}>
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                )}
                                {columns.additionalQualification && <TableCell>{app.additionalQualification || "None"}</TableCell>}

                                {/* Fixed Right */}
                                <TableCell className="sticky right-0 z-20 bg-background shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.1)] text-right">
                                    <Button size="sm" onClick={() => navigate(`/official/review/${app.id}`)}>View / Process</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={18} className="h-24 text-center text-muted-foreground">
                                No applications match the current filters.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
