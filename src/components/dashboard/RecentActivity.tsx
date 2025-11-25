import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, UserCheck, Calendar, DollarSign, CheckCircle2 } from "lucide-react";

const activities = [
  {
    icon: FileText,
    title: "New application submitted",
    description: "Application #2024-0156 from Architect Kumar Sharma",
    time: "2 minutes ago",
    status: "pending",
  },
  {
    icon: UserCheck,
    title: "Architect verified",
    description: "Registration approved for AR/2024/0089",
    time: "15 minutes ago",
    status: "success",
  },
  {
    icon: Calendar,
    title: "Meeting scheduled",
    description: "Council Meeting scheduled for 25th Nov 2025",
    time: "1 hour ago",
    status: "info",
  },
  {
    icon: DollarSign,
    title: "Payment received",
    description: "₹15,000 received for application #2024-0155",
    time: "2 hours ago",
    status: "success",
  },
  {
    icon: CheckCircle2,
    title: "Inspection completed",
    description: "Site inspection report submitted for ABC College",
    time: "3 hours ago",
    status: "success",
  },
];

const statusColors = {
  pending: "bg-warning/10 text-warning border-warning/20",
  success: "bg-success/10 text-success border-success/20",
  info: "bg-info/10 text-info border-info/20",
  error: "bg-error/10 text-error border-error/20",
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex gap-4 pb-4 border-b last:border-0">
              <div className={`rounded-lg p-2 h-fit ${statusColors[activity.status as keyof typeof statusColors]}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.title}</p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
