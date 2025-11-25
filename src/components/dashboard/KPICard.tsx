import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor?: string;
}

export function KPICard({ title, value, change, changeType = "neutral", icon: Icon, iconColor = "text-primary" }: KPICardProps) {
  const changeColorClass = 
    changeType === "positive" ? "text-success" : 
    changeType === "negative" ? "text-destructive" : 
    "text-muted-foreground";

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-baseline gap-2 mt-2">
              <h3 className="text-3xl font-bold text-foreground">{value}</h3>
              {change && (
                <span className={`text-sm font-medium ${changeColorClass}`}>
                  {change}
                </span>
              )}
            </div>
          </div>
          <div className={`rounded-lg bg-muted p-3 ${iconColor}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
