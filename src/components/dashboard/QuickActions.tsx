import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, UserPlus, Calendar, DollarSign, Bell, Settings } from "lucide-react";

const quickActions = [
  { icon: FileText, label: "New Application", color: "bg-primary text-primary-foreground" },
  { icon: UserPlus, label: "Add Architect", color: "bg-accent text-accent-foreground" },
  { icon: Calendar, label: "Schedule Meeting", color: "bg-info text-white" },
  { icon: DollarSign, label: "Process Payment", color: "bg-success text-white" },
  { icon: Bell, label: "Send Notice", color: "bg-warning text-white" },
  { icon: Settings, label: "System Config", color: "bg-muted-foreground text-white" },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto flex-col gap-2 py-4 hover:bg-muted"
            >
              <div className={`rounded-lg p-2 ${action.color}`}>
                <action.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-center">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
