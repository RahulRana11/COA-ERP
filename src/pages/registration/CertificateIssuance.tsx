import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Printer } from "lucide-react";

interface ApplicationMock {
    id: string;
    refNumber: string;
    applicantName: string;
    enrolmentNo: string | null;
}

export default function CertificateIssuance() {
    const [applications, setApplications] = useState<ApplicationMock[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const fetchApplications = async () => {
            const { data, error } = await supabase
                .from('registration_applications')
                .select(`
                    id,
                    application_reference_number,
                    architect_profiles (
                        first_name,
                        last_name,
                        registration_number
                    )
                `)
                .eq('status', 'Approved')
                // Ideally, join with profile to only get ones that HAVE a registration_number
                ;

            if (!error && data) {
                const mapped = data.map((d: any) => ({
                    id: d.id,
                    refNumber: d.application_reference_number,
                    applicantName: `${d.architect_profiles?.first_name || 'N/A'} ${d.architect_profiles?.last_name || ''}`.trim(),
                    enrolmentNo: d.architect_profiles?.registration_number
                })).filter(a => a.enrolmentNo); // Only show ones with a number
                
                setApplications(mapped);
            }
            setIsLoading(false);
        };
        fetchApplications();
    }, []);

    const handleIssue = (id: string, type: 'cert' | 'id') => {
        toast({
            title: `${type === 'cert' ? 'Certificate' : 'ID Card'} Issued`,
            description: `Document generation initiated for application ${id}.`,
        });
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight">Certificate & ID Card Issuance</h1>
                <p className="text-muted-foreground">Print and digitally sign certificates and ID cards for registered architects.</p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>CA Number</TableHead>
                            <TableHead>Applicant Name</TableHead>
                            <TableHead>Application Ref</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
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
                                    <TableCell className="font-medium">{app.enrolmentNo}</TableCell>
                                    <TableCell>{app.applicantName}</TableCell>
                                    <TableCell className="text-muted-foreground">{app.refNumber}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">Pending Print</Badge>
                                    </TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button size="sm" variant="outline" onClick={() => handleIssue(app.id, 'cert')}>
                                            <Printer className="h-4 w-4 mr-1" />
                                            Cert
                                        </Button>
                                        <Button size="sm" variant="outline" onClick={() => handleIssue(app.id, 'id')}>
                                            <Printer className="h-4 w-4 mr-1" />
                                            ID Card
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">No applications pending issuance.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
