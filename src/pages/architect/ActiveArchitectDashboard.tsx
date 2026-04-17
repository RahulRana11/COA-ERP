import { useState, useEffect } from "react";
import { Download, RefreshCw, FileText, MapPin, Type, CheckCircle2 } from "lucide-react";
import { ServiceRequestModal } from "@/components/architect/ServiceRequestModal";
import { toast } from "sonner";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/lib/supabase";

interface ServiceRequestMock {
    id: string;
    type: string;
    date: string;
    status: string;
    ref: string;
}

export default function ActiveArchitectDashboard() {
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profile, setProfile] = useState<any>(null);
    const [recentRequests, setRecentRequests] = useState<ServiceRequestMock[]>([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            // Simulating logged in user by grabbing the first record
            const { data: profs } = await supabase
                .from('architect_profiles')
                .select('*')
                .limit(1);
            
            if (profs && profs.length > 0) {
                const activeProfile = profs[0];
                setProfile(activeProfile);

                const { data: reqs } = await supabase
                    .from('post_registration_requests')
                    .select('*')
                    .eq('profile_id', activeProfile.id)
                    .order('created_at', { ascending: false });

                if (reqs) {
                    setRecentRequests(reqs.map((r: any) => ({
                        id: r.id,
                        type: r.request_type,
                        date: r.created_at ? new Date(r.created_at).toISOString().split('T')[0] : 'N/A',
                        status: r.status,
                        ref: `REF-${r.id.substring(0, 6).toUpperCase()}`
                    })));
                }
            }
        };
        fetchDashboardData();
    }, []);

    const handleServiceClick = (serviceType: string) => {
        setSelectedService(serviceType);
        setIsModalOpen(true);
    };

    const handleDownloadCert = () => {
        toast.message("Digital Certificate requested. Generating secure PDF download...");
        // Simulate generation time
        setTimeout(() => {
            toast.success("Certificate downloaded successfully.");
        }, 1500);
    };

    const onServiceSubmitted = () => {
        // Append the newly mocked service request dynamically
        setRecentRequests(prev => [
            {
                id: `req-${Date.now()}`,
                type: selectedService || "Unknown Service",
                date: new Date().toISOString().split("T")[0],
                status: "Submitted",
                ref: `SRQ-2026-${Math.floor(1000 + Math.random() * 9000)}`
            },
            ...prev
        ]);
    };

    const services = [
        { title: "Apply for Renewal", icon: RefreshCw, desc: "Renew your active registration." },
        { title: "Duplicate Certificate", icon: FileText, desc: "Request a re-issue if lost/damaged." },
        { title: "Update Address", icon: MapPin, desc: "Submit a new residential or studio address." },
        { title: "Change of Name", icon: Type, desc: "Update legal records with gazette notification." },
    ];

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-8">

            {/* Top Banner / Dashboard Summary */}
            <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-primary/20 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-[0.03] scale-150 -translate-y-10 translate-x-10 pointer-events-none">
                    <CheckCircle2 className="w-64 h-64" />
                </div>
                <CardContent className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl font-bold tracking-tight">Welcome, {profile ? `${profile.first_name || ''} ${profile.last_name || ''}`.trim() : 'Loading...'}</h1>
                            <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/20 px-3 py-1">Active</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-2 mt-4 text-sm text-muted-foreground">
                            <div><strong className="text-foreground">Registration Number:</strong> {profile ? profile.registration_number : '...'}</div>
                            <div><strong className="text-foreground">Valid Upto:</strong> {profile?.validity_date ? new Date(profile.validity_date).toDateString() : '...'}</div>
                            <div><strong className="text-foreground">Mobile:</strong> {profile ? profile.mobile : '...'}</div>
                        </div>
                    </div>
                    <Button onClick={handleDownloadCert} size="lg" className="bg-primary hover:bg-primary/90 shadow-md">
                        <Download className="mr-2 h-5 w-5" />
                        Download Digital Certificate
                    </Button>
                </CardContent>
            </Card>

            {/* Services Grid */}
            <div>
                <h2 className="text-xl font-semibold mb-4 tracking-tight">Post-Registration Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((svc) => (
                        <Card
                            key={svc.title}
                            className="hover:shadow-md cursor-pointer transition-all hover:border-primary/50 group"
                            onClick={() => handleServiceClick(svc.title)}
                        >
                            <CardContent className="p-6 flex flex-col text-center items-center justify-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <svc.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold">{svc.title}</h3>
                                <p className="text-xs text-muted-foreground">{svc.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Recent Requests Table */}
            <Card className="shadow-sm border-muted">
                <CardHeader>
                    <CardTitle>Recent Service Requests</CardTitle>
                    <CardDescription>Track the status of your internal workflow submissions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader className="bg-muted/30">
                                <TableRow>
                                    <TableHead className="font-semibold">Reference ID</TableHead>
                                    <TableHead className="font-semibold">Service Type</TableHead>
                                    <TableHead className="font-semibold">Submission Date</TableHead>
                                    <TableHead className="font-semibold md:text-right">State / Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentRequests.map((req) => (
                                    <TableRow key={req.id}>
                                        <TableCell className="font-medium">{req.ref}</TableCell>
                                        <TableCell>{req.type}</TableCell>
                                        <TableCell className="text-muted-foreground">{req.date}</TableCell>
                                        <TableCell className="md:text-right">
                                            <Badge variant={req.status === "Approved" ? "default" : "secondary"}>
                                                {req.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Service Request Handlers Modal */}
            <ServiceRequestModal
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
                serviceType={selectedService}
                onSubmited={onServiceSubmitted}
            />

        </div>
    );
}
