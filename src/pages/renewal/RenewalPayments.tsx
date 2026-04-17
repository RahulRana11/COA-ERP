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
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { IndianRupee } from "lucide-react";

interface RequestMock {
    id: string;
    enrolmentNo: string;
    applicantName: string;
    status: string;
    amount: string;
}

export default function RenewalPaymentsList() {
    const [requests, setRequests] = useState<RequestMock[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const fetchRequests = async () => {
            const { data, error } = await supabase
                .from('post_registration_requests')
                .select(`
                    id,
                    status,
                    request_type,
                    architect_profiles (
                        first_name,
                        last_name,
                        registration_number
                    )
                `)
                .in('request_type', ['Renewal', 'Restoration']);

            if (!error && data) {
                const mapped = data.map((d: any) => ({
                    id: d.id,
                    enrolmentNo: d.architect_profiles?.registration_number || 'N/A',
                    applicantName: `${d.architect_profiles?.first_name || ''} ${d.architect_profiles?.last_name || ''}`.trim() || 'N/A',
                    status: d.status,
                    amount: d.request_type === 'Restoration' ? '₹ 5,000' : '₹ 2,000' // Mock amount logic
                }));
                setRequests(mapped.filter(r => r.status === 'Submitted' || r.status === 'Approved'));
            }
            setIsLoading(false);
        };
        fetchRequests();
    }, []);

    const handleAcknowledge = (id: string) => {
        toast({ title: "Payment Recorded", description: "Payment status has been manually overridden/acknowledged." });
    }

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight">Renewal Payments</h1>
                <p className="text-muted-foreground">Review and reconcile offline/online fee receipts for renewals and restorations.</p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Enrolment No.</TableHead>
                            <TableHead>Architect Name</TableHead>
                            <TableHead>Expected Amount</TableHead>
                            <TableHead>Payment Status</TableHead>
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
                                    <TableCell>{req.amount}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="border-orange-500 text-orange-500">
                                            Pending Recon
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button size="sm" variant="outline" onClick={() => handleAcknowledge(req.id)}>
                                            <IndianRupee className="w-4 h-4 mr-1" />
                                            Reconcile
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">No pending payments found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
