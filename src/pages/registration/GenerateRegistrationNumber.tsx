import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

interface ApplicationMock {
    id: string;
    refNumber: string;
    applicantName: string;
    submissionDate: string;
    currentStage: string;
    enrolmentNo: string | null;
}

export default function GenerateRegistrationNumber() {
    const [applications, setApplications] = useState<ApplicationMock[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    const fetchApplications = async () => {
        setIsLoading(true);
        const { data, error } = await supabase
            .from('registration_applications')
            .select(`
                id,
                application_reference_number,
                status,
                submission_date,
                architect_profiles (
                    first_name,
                    last_name,
                    registration_number
                )
            `)
            .eq('status', 'Approved');

        if (!error && data) {
            const mapped = data.map((d: any) => ({
                id: d.id,
                refNumber: d.application_reference_number,
                applicantName: `${d.architect_profiles?.first_name || 'N/A'} ${d.architect_profiles?.last_name || ''}`.trim(),
                submissionDate: d.submission_date ? new Date(d.submission_date).toISOString().split('T')[0] : 'N/A',
                currentStage: d.status,
                enrolmentNo: d.architect_profiles?.registration_number
            }));
            // Show applications that might need a number generated, or all approved ones.
            setApplications(mapped);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const handleGenerate = (id: string) => {
        toast({
            title: "Number Generated",
            description: "Registration number generated successfully (Mock).",
        });
        // In a real flow, this would call an RPC to generate a CA/XXXX/XXXXX number and update profile
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight">Generate Registration Number</h1>
                <p className="text-muted-foreground">Assign CA sequence numbers to approved applications.</p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Application Ref</TableHead>
                            <TableHead>Applicant Name</TableHead>
                            <TableHead>Approval Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">Loading...</TableCell>
                            </TableRow>
                        ) : applications.length > 0 ? (
                            applications.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell className="font-medium text-primary">{app.refNumber}</TableCell>
                                    <TableCell>{app.applicantName}</TableCell>
                                    <TableCell>{app.submissionDate}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="text-green-600 border-green-600">
                                            {app.enrolmentNo ? app.enrolmentNo : "Pending Generation"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button 
                                            size="sm" 
                                            variant={app.enrolmentNo ? "secondary" : "default"}
                                            onClick={() => handleGenerate(app.id)}
                                            disabled={!!app.enrolmentNo}
                                        >
                                            {app.enrolmentNo ? "Generated" : "Generate Number"}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">No approved applications pending number generation.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
