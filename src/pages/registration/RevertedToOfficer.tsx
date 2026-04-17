import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

interface ApplicationMock {
    id: string;
    refNumber: string;
    applicantName: string;
    submissionDate: string;
    currentStage: string;
}

export default function RevertedToOfficerList() {
    const [applications, setApplications] = useState<ApplicationMock[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchApplications = async () => {
            const { data, error } = await supabase
                .from('registration_applications')
                .select(`
                    id,
                    application_reference_number,
                    status,
                    submission_date,
                    architect_profiles (
                        first_name,
                        last_name
                    )
                `)
                .eq('status', 'Reverted');

            if (!error && data) {
                const mapped = data.map((d: any) => ({
                    id: d.id,
                    refNumber: d.application_reference_number,
                    applicantName: `${d.architect_profiles?.first_name || 'N/A'} ${d.architect_profiles?.last_name || ''}`.trim(),
                    submissionDate: d.submission_date ? new Date(d.submission_date).toISOString().split('T')[0] : 'N/A',
                    currentStage: d.status,
                }));
                setApplications(mapped);
            }
            setIsLoading(false);
        };
        fetchApplications();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight">Applications Reverted to Officer</h1>
                <p className="text-muted-foreground">List of applications reverted back by the Scrutinizing Authority or President for further review.</p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Application Ref</TableHead>
                            <TableHead>Applicant Name</TableHead>
                            <TableHead>Submission Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                                    <div className="flex justify-center items-center">
                                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                        Loading...
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : applications.length > 0 ? (
                            applications.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell className="font-medium text-primary">{app.refNumber}</TableCell>
                                    <TableCell>{app.applicantName}</TableCell>
                                    <TableCell>{app.submissionDate}</TableCell>
                                    <TableCell>
                                        <Badge variant="destructive">
                                            {app.currentStage}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Link to={`/official/review/${app.id}`} className="text-blue-600 hover:underline">View / Process</Link>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">No reverted applications found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
