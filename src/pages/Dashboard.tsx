import { KPICard } from "@/components/dashboard/KPICard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { ApplicationsChart } from "@/components/dashboard/ApplicationsChart";
import { Users, FileText, CheckCircle2, Clock, IndianRupee, Building } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalArchitects: "0",
    activeApplications: "0",
    completedRenewals: "0",
    pendingReviews: "0"
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { count: archCount } = await supabase
          .from('architect_profiles')
          .select('*', { count: 'exact', head: true });
        
        const { count: appCount } = await supabase
          .from('registration_applications')
          .select('*', { count: 'exact', head: true })
          .in('status', ['Submitted', 'Under Review', 'Query Raised']);
          
        const { count: renewCount } = await supabase
          .from('post_registration_requests')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'Approved');
          
        const { count: pendingCount } = await supabase
          .from('registration_applications')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'Under Review');

        setStats({
          totalArchitects: archCount?.toLocaleString() || "0",
          activeApplications: appCount?.toLocaleString() || "0",
          completedRenewals: renewCount?.toLocaleString() || "0",
          pendingReviews: pendingCount?.toLocaleString() || "0"
        });
      } catch (err) {
        console.error("Failed to load dashboard stats", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        
    
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <KPICard
          title="Total Architects"
          value={stats.totalArchitects}
          change="Live from DB"
          changeType="positive"
          icon={Users}
          iconColor="text-primary"
        />
        <KPICard
          title="Active Applications"
          value={stats.activeApplications}
          change="Live from DB"
          changeType="positive"
          icon={FileText}
          iconColor="text-info"
        />
        <KPICard
          title="Completed Renewals & Restorations"
          value={stats.completedRenewals}
          change="Live from DB"
          changeType="positive"
          icon={CheckCircle2}
          iconColor="text-success"
        />
        <KPICard
          title="Pending Application Reviews"
          value={stats.pendingReviews}
          change="Live from DB"
          changeType="positive"
          icon={Clock}
          iconColor="text-warning"
        />
        <KPICard
          title="Payments Processed (This Month)"
          value="₹18.5L"
          change="+15% growth"
          changeType="positive"
          icon={IndianRupee}
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
