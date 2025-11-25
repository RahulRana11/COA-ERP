import { KPICard } from "@/components/dashboard/KPICard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { ApplicationsChart } from "@/components/dashboard/ApplicationsChart";
import { Users, FileText, CheckCircle2, Clock, DollarSign, Building } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome to Council of Architecture ERP System
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <KPICard
          title="Total Architects"
          value="12,453"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
          iconColor="text-primary"
        />
        <KPICard
          title="Active Applications"
          value="156"
          change="23 new this week"
          changeType="positive"
          icon={FileText}
          iconColor="text-info"
        />
        <KPICard
          title="Completed Inspections"
          value="89"
          change="+8% this month"
          changeType="positive"
          icon={CheckCircle2}
          iconColor="text-success"
        />
        <KPICard
          title="Pending Reviews"
          value="43"
          change="-5% from last week"
          changeType="positive"
          icon={Clock}
          iconColor="text-warning"
        />
        <KPICard
          title="Revenue (This Month)"
          value="₹18.5L"
          change="+15% growth"
          changeType="positive"
          icon={DollarSign}
          iconColor="text-success"
        />
        <KPICard
          title="Registered Institutions"
          value="342"
          change="8 new this month"
          changeType="positive"
          icon={Building}
          iconColor="text-accent"
        />
      </div>

      {/* Chart and Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ApplicationsChart />
        </div>
        <QuickActions />
      </div>

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  );
};

export default Dashboard;
