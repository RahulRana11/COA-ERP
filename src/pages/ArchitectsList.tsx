import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, RotateCcw } from "lucide-react";

const ArchitectsList = () => {
    const [architects, setArchitects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchArchitects = async () => {
        setLoading(true);
        try {
            let query = supabase
                .from('architect_profiles')
                .select('*')
                .order('created_at', { ascending: false });

            if (searchTerm) {
                query = query.or(`first_name.ilike.%${searchTerm}%,registration_number.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%`);
            }

            const { data, error } = await query;

            if (error) throw error;
            setArchitects(data || []);
        } catch (error) {
            console.error('Error fetching architects:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArchitects();
    }, []);

    const handleSearch = () => {
        fetchArchitects();
    };

    return (
        <div className="container mx-auto py-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Architect Records</h1>
                <Button variant="outline" onClick={() => { setSearchTerm(''); fetchArchitects(); }}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Refresh
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Input
                            placeholder="Search by Name, Reg No, or Email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="max-w-sm"
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        <Button onClick={handleSearch}>
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Registration No</TableHead>
                                    <TableHead>First Name</TableHead>
                                    <TableHead>Last Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Mobile</TableHead>
                                    <TableHead>City</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center h-24">Loading...</TableCell>
                                    </TableRow>
                                ) : architects.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center h-24">No architects found.</TableCell>
                                    </TableRow>
                                ) : (
                                    architects.map((arch) => (
                                        <TableRow key={arch.id}>
                                            <TableCell className="font-medium">{arch.registration_number}</TableCell>
                                            <TableCell>{arch.first_name || 'N/A'}</TableCell>
                                            <TableCell>{arch.last_name || ''}</TableCell>
                                            <TableCell>{arch.email || 'N/A'}</TableCell>
                                            <TableCell>{arch.mobile || 'N/A'}</TableCell>
                                            <TableCell>
                                                {/* For real implementation, you will join architect_addresses here */}
                                                <span className="text-muted-foreground italic">On File</span>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ArchitectsList;
