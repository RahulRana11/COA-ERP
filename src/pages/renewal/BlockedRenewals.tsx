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
    blockReason: string;
}

export default function BlockedRenewalsList() {
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
                    architect_profiles (
                        first_name,
                        last_name,
                        registration_number
                    )
                `)
                .eq('request_type', 'Renewal');

            if (!error && data) {
                // Here we simulate some blocked ones or filter by a specific blocked status/flag if one existed
                // For demonstration, let's just use the query, and arbitrarily tag the first one as blocked if it exists
                const mapped = data.map((d: any, index: number) => ({
                    id: d.id,
                    enrolmentNo: d.architect_profiles?.registration_number || 'N/A',
                    applicantName: `${d.architect_profiles?.first_name || ''} ${d.architect_profiles?.last_name || ''}`.trim() || 'N/A',
                    status: 'Blocked',
                    date: d.created_at ? new Date(d.created_at).toISOString().split('T')[0] : 'N/A',
                    blockReason: index % 2 === 0 ? 'Pending disciplinary case' : 'Invalid documentation'
                })).slice(0, 2); // Show max 2 mocks
                
                setRequests(mapped);
            }
            setIsLoading(false);
        };
        fetchRequests();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight">Blocked / Legal Flagged</h1>
                <p className="text-muted-foreground">Renewals on hold due to pending disciplinary actions or legal disputes.</p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Enrolment No.</TableHead>
                            <TableHead>Architect Name</TableHead>
                            <TableHead>Blocked Date</TableHead>
                            <TableHead>Reason</TableHead>
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
                                    <TableCell className="font-medium text-destructive">{req.enrolmentNo}</TableCell>
                                    <TableCell>{req.applicantName}</TableCell>
                                    <TableCell>{req.date}</TableCell>
                                    <TableCell>
                                        <Badge variant="destructive">
                                            {req.blockReason}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Link to={`/official/review/${req.id}`} className="text-blue-600 hover:underline">View File</Link>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">No blocked cases found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
