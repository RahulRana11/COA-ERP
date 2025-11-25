import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Key, Users, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const SystemSecurity = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">System & Security</h1>
        <p className="text-muted-foreground mt-1">Manage access control, roles, and security settings</p>
      </div>

      {/* Security Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold">124</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-success/10 p-3">
                <Shield className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Roles</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-warning/10 p-3">
                <AlertTriangle className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Security Alerts</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-info/10 p-3">
                <Key className="h-5 w-5 text-info" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">API Keys</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Access Control */}
      <Card>
        <CardHeader>
          <CardTitle>Access Control & Roles</CardTitle>
          <CardDescription>Manage user roles and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium">Super Admin</p>
                  <p className="text-sm text-muted-foreground">Full system access</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge>5 users</Badge>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </div>

            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-info flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Admin</p>
                  <p className="text-sm text-muted-foreground">Module-level access</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge>12 users</Badge>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </div>

            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-success flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Officer</p>
                  <p className="text-sm text-muted-foreground">Standard operations access</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge>45 users</Badge>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </div>

            <div className="flex items-center justify-between pb-4 border-b">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                  <Lock className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium">Inspector</p>
                  <p className="text-sm text-muted-foreground">Inspection and review access</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge>28 users</Badge>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Users className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-medium">Viewer</p>
                  <p className="text-sm text-muted-foreground">Read-only access</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge>34 users</Badge>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audit Trail */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Audit Trail</CardTitle>
              <CardDescription>System activity log</CardDescription>
            </div>
            <Input placeholder="Search logs..." className="w-64" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { user: "admin@coa.gov.in", action: "User role modified", time: "2 minutes ago", status: "info" },
              { user: "system", action: "Security scan completed", time: "15 minutes ago", status: "success" },
              { user: "john.doe@coa.gov.in", action: "Failed login attempt", time: "1 hour ago", status: "warning" },
              { user: "admin@coa.gov.in", action: "Permission updated for Officer role", time: "2 hours ago", status: "info" },
              { user: "system", action: "Database backup completed", time: "3 hours ago", status: "success" },
            ].map((log, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex-1">
                  <p className="text-sm font-medium">{log.action}</p>
                  <p className="text-xs text-muted-foreground">{log.user} • {log.time}</p>
                </div>
                <Badge 
                  variant="outline" 
                  className={
                    log.status === "success" ? "border-success text-success" :
                    log.status === "warning" ? "border-warning text-warning" :
                    "border-info text-info"
                  }
                >
                  {log.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemSecurity;
