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

interface RequestMock {
    id: string;
    enrolmentNo: string;
    applicantName: string;
    status: string;
    date: string;
}

export default function RenewalApplicationsList() {
    const [requests, setRequests] = useState<RequestMock[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRequests = async () => {
            const { data, error } = await supabase
                .from('post_registration_requests')
                .select(`
                    id,
                    status,
                    created_at,
                    request_type,
                    architect_profiles (
                        first_name,
                        last_name,
                        registration_number
                    )
                `)
                .eq('request_type', 'Renewal')
                .in('status', ['Submitted', 'Under Review']);

            if (!error && data) {
                const mapped = data.map((d: any) => ({
                    id: d.id,
                    enrolmentNo: d.architect_profiles?.registration_number || 'N/A',
                    applicantName: `${d.architect_profiles?.first_name || ''} ${d.architect_profiles?.last_name || ''}`.trim() || 'N/A',
                    status: d.status,
                    date: d.created_at ? new Date(d.created_at).toISOString().split('T')[0] : 'N/A',
                }));
                setRequests(mapped);
            }
            setIsLoading(false);
        };
        fetchRequests();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight">Renewal Applications</h1>
                <p className="text-muted-foreground">Manage active applications submitted for registration renewal.</p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Enrolment No.</TableHead>
                            <TableHead>Architect Name</TableHead>
                            <TableHead>Submission Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">Loading...</TableCell>
                            </TableRow>
                        ) : requests.length > 0 ? (
                            requests.map((req) => (
                                <TableRow key={req.id}>
                                    <TableCell className="font-medium text-primary">{req.enrolmentNo}</TableCell>
                                    <TableCell>{req.applicantName}</TableCell>
                                    <TableCell>{req.date}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">
                                            {req.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Link to={`/official/review/${req.id}`} className="text-blue-600 hover:underline">Review Details</Link>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">No active renewal applications found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
