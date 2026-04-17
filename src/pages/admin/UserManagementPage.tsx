import { useState } from "react";
import { Plus, MoreHorizontal, Pencil } from "lucide-react";

import { UserFormSheet } from "@/components/admin/UserFormSheet";
import { useAuthStore, SystemUser } from "@/store/authStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export interface OfficialUser {
  id: string;
  fullName: string;
  designation: string;
  department: string;
  role: string;
  emailAddress: string;
  mobileNumber: string;
  status: string;
}

export default function UserManagementPage() {
    const { allUsers: storeUsers, addUser } = useAuthStore();
    const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<SystemUser | null>(null);

    const handleAddUser = (newUser: OfficialUser) => {
        addUser({
            id: newUser.id,
            fullName: newUser.fullName,
            designation: newUser.designation,
            department: newUser.department,
            base_role: newUser.role as SystemUser["base_role"],
            emailAddress: newUser.emailAddress,
            assigned_features: [],
            avatarInitials: newUser.fullName.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2),
        });
    };

    const openEditSheet = (user: SystemUser) => {
        setEditingUser(user);
    };

    const closeEditSheet = (open: boolean) => {
        if (!open) setEditingUser(null);
    };

    const getRoleBadgeVariant = (role: string) => {
        switch (role) {
            case "Super Admin": return "destructive" as const;
            case "President": return "secondary" as const;
            case "Registrar": return "default" as const;
            default: return "outline" as const;
        }
    };

    return (
        <div className="p-2 md:p-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">Organization & Users</h1>
                    <p className="text-muted-foreground">Manage internal COA officials, assignments, and roles.</p>
                </div>
                <Button onClick={() => setIsAddSheetOpen(true)} className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add New Official
                </Button>
            </div>

            <Card className="shadow-sm border-muted">
                <CardHeader>
                    <CardTitle>Internal System Users</CardTitle>
                    <CardDescription>
                        A comprehensive list of all staff with access to the ERP Scrutiny Workflow.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader className="bg-muted/50">
                                <TableRow>
                                    <TableHead className="font-semibold text-foreground">Official Name</TableHead>
                                    <TableHead className="font-semibold text-foreground">Designation & Dept</TableHead>
                                    <TableHead className="font-semibold text-foreground">Assigned Role</TableHead>
                                    <TableHead className="font-semibold text-foreground">Contact</TableHead>
                                    <TableHead className="font-semibold text-foreground">Features</TableHead>
                                    <TableHead className="font-semibold text-foreground text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {storeUsers.map((user) => (
                                    <TableRow key={user.id} className="group">
                                        <TableCell className="font-medium">{user.fullName}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span>{user.designation}</span>
                                                <span className="text-xs text-muted-foreground">{user.department}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={getRoleBadgeVariant(user.base_role)}>
                                                {user.base_role}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="text-sm">{user.emailAddress}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                                <span className="text-sm text-muted-foreground">
                                                    {user.assigned_features.length} features
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                {/* Quick edit button */}
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-8 gap-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                                    onClick={() => openEditSheet(user)}
                                                >
                                                    <Pencil className="h-3 w-3" />
                                                    Edit Permissions
                                                </Button>

                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                                            <span className="sr-only">Open menu</span>
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem
                                                            className="gap-2 cursor-pointer"
                                                            onClick={() => openEditSheet(user)}
                                                        >
                                                            <Pencil className="h-3.5 w-3.5 text-muted-foreground" />
                                                            Edit Official Permissions
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>View Activity Logs</DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-destructive focus:bg-destructive/10">
                                                            Suspend Account
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}

                                {storeUsers.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                                            No internal users found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Add new user sheet */}
            <UserFormSheet
                open={isAddSheetOpen}
                onOpenChange={setIsAddSheetOpen}
                onAddUser={handleAddUser}
            />

            {/* Edit permissions sheet — driven by editingUser */}
            <UserFormSheet
                open={!!editingUser}
                onOpenChange={closeEditSheet}
                editUser={editingUser}
            />
        </div>
    );
}
