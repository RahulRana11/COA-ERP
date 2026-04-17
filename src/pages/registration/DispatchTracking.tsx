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
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface ApplicationMock {
    id: string;
    enrolmentNo: string;
    applicantName: string;
    dispatchStatus: string;
}

export default function DispatchTracking() {
    const [applications, setApplications] = useState<ApplicationMock[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const fetchApplications = async () => {
            const { data, error } = await supabase
                .from('registration_applications')
                .select(`
                    id,
                    status,
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
                    enrolmentNo: d.architect_profiles?.registration_number,
                    applicantName: `${d.architect_profiles?.first_name || 'N/A'} ${d.architect_profiles?.last_name || ''}`.trim(),
                    dispatchStatus: 'Ready for Dispatch'
                })).filter(a => a.enrolmentNo);
                
                setApplications(mapped);
            }
            setIsLoading(false);
        };
        fetchApplications();
    }, []);

    const handleDispatch = (id: string) => {
        toast({
            title: "Dispatch Logged",
            description: "Courier tracking information updated for application.",
        });
        setApplications(apps => apps.map(app => app.id === id ? { ...app, dispatchStatus: 'Dispatched' } : app));
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight">Dispatch & Tracking</h1>
                <p className="text-muted-foreground">Manage courier dispatch of physical certificates and ID cards.</p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>CA Number</TableHead>
                            <TableHead>Applicant Name</TableHead>
                            <TableHead>Dispatch Status</TableHead>
                            <TableHead>Tracking AWB</TableHead>
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
                                    <TableCell className="font-medium text-primary">{app.enrolmentNo}</TableCell>
                                    <TableCell>{app.applicantName}</TableCell>
                                    <TableCell>
                                        <Badge variant={app.dispatchStatus === 'Dispatched' ? 'default' : 'secondary'} className={app.dispatchStatus === 'Dispatched' ? 'bg-blue-500 hover:bg-blue-600' : ''}>
                                            {app.dispatchStatus}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Input type="text" placeholder="Enter AWB Code" className="max-w-[150px] h-8 text-xs" disabled={app.dispatchStatus === 'Dispatched'} />
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button 
                                            size="sm" 
                                            onClick={() => handleDispatch(app.id)}
                                            disabled={app.dispatchStatus === 'Dispatched'}
                                        >
                                            <Send className="h-4 w-4 mr-1" />
                                            Update
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">No completed applications awaiting dispatch.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
