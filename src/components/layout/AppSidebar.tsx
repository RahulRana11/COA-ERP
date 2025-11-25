import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Settings,
  Shield,
  Users,
  Bell,
  UserCheck,
  FileText,
  Briefcase,
  GraduationCap,
  Calendar,
  DollarSign,
  BookOpen,
  BarChart3,
  Wrench,
  ChevronDown,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface SubModule {
  title: string;
  url: string;
}

interface Module {
  title: string;
  icon: any;
  submodules: SubModule[];
}

const modules: Module[] = [
  {
    title: "Core Administration",
    icon: Settings,
    submodules: [
      { title: "System & Security", url: "/admin/system" },
      { title: "Organization & Users", url: "/admin/users" },
      { title: "Notifications", url: "/admin/notifications" },
    ],
  },
  {
    title: "Registration & Identity",
    icon: UserCheck,
    submodules: [
      { title: "Architect Registry", url: "/registry/architects" },
      { title: "Credential Verification", url: "/registry/verification" },
      { title: "Empanelment", url: "/registry/empanelment" },
      { title: "Member Records", url: "/registry/members" },
    ],
  },
  {
    title: "Case & Complaint",
    icon: Shield,
    submodules: [
      { title: "Complaint Intake", url: "/cases/intake" },
      { title: "Case Processing", url: "/cases/processing" },
      { title: "Case Reports", url: "/cases/reports" },
    ],
  },
  {
    title: "Applications & Inspections",
    icon: Briefcase,
    submodules: [
      { title: "Application Management", url: "/applications/management" },
      { title: "Scrutiny & Committees", url: "/applications/scrutiny" },
      { title: "Inspection Workflow", url: "/applications/inspections" },
      { title: "Academic Data", url: "/applications/academic" },
    ],
  },
  {
    title: "Dispatch & Documents",
    icon: FileText,
    submodules: [
      { title: "Dispatch Registry", url: "/dispatch/registry" },
      { title: "Document Storage", url: "/dispatch/storage" },
    ],
  },
  {
    title: "Meetings & Governance",
    icon: Calendar,
    submodules: [
      { title: "Meeting Scheduling", url: "/meetings/scheduling" },
      { title: "Minutes & Decisions", url: "/meetings/minutes" },
      { title: "Committees & TRC", url: "/meetings/committees" },
    ],
  },
  {
    title: "Finance & Payments",
    icon: DollarSign,
    submodules: [
      { title: "Receipts & Transactions", url: "/finance/receipts" },
      { title: "Accounting", url: "/finance/accounting" },
      { title: "Financial Reports", url: "/finance/reports" },
    ],
  },
  {
    title: "Publications",
    icon: BookOpen,
    submodules: [
      { title: "Publications", url: "/publications/list" },
      { title: "Public Notices", url: "/publications/notices" },
    ],
  },
  {
    title: "Reporting & Analytics",
    icon: BarChart3,
    submodules: [
      { title: "Operational Reports", url: "/reports/operational" },
      { title: "Custom Reports", url: "/reports/custom" },
      { title: "Dashboards", url: "/reports/dashboards" },
    ],
  },
  {
    title: "Utilities & Integration",
    icon: Wrench,
    submodules: [
      { title: "Forms & Templates", url: "/utilities/forms" },
      { title: "Data Operations", url: "/utilities/data" },
      { title: "Integrations", url: "/utilities/integrations" },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [openModules, setOpenModules] = useState<string[]>(["Core Administration"]);

  const toggleModule = (moduleName: string) => {
    setOpenModules((prev) =>
      prev.includes(moduleName)
        ? prev.filter((name) => name !== moduleName)
        : [...prev, moduleName]
    );
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="px-2 py-4">
        {/* Logo Section */}
        <div className="mb-6 px-3">
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-sidebar-primary flex items-center justify-center">
                <Shield className="h-6 w-6 text-sidebar-primary-foreground" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-sidebar-foreground">COA ERP</h1>
                <p className="text-xs text-sidebar-foreground/80">Super Admin</p>
              </div>
            </div>
          ) : (
            <div className="h-10 w-10 rounded-lg bg-sidebar-primary flex items-center justify-center mx-auto">
              <Shield className="h-6 w-6 text-sidebar-primary-foreground" />
            </div>
          )}
        </div>

        {/* Dashboard Link */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink 
                to="/" 
                className="hover:bg-sidebar-accent" 
                activeClassName="bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <BarChart3 className="h-4 w-4" />
                {!collapsed && <span>Dashboard</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Modules */}
        {modules.map((module) => (
          <Collapsible
            key={module.title}
            open={openModules.includes(module.title)}
            onOpenChange={() => toggleModule(module.title)}
            className="mt-2"
          >
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="w-full hover:bg-sidebar-accent rounded-md transition-colors">
                  <div className="flex items-center gap-2 py-2 px-3">
                    <module.icon className="h-4 w-4 text-sidebar-foreground" />
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left text-sm font-medium text-sidebar-foreground">
                          {module.title}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openModules.includes(module.title) ? "rotate-180" : ""
                          }`}
                        />
                      </>
                    )}
                  </div>
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenuSub>
                    {module.submodules.map((submodule) => (
                      <SidebarMenuSubItem key={submodule.url}>
                        <SidebarMenuSubButton asChild>
                          <NavLink
                            to={submodule.url}
                            className="hover:bg-sidebar-accent/50"
                            activeClassName="bg-sidebar-primary/20 text-sidebar-foreground font-medium"
                          >
                            {!collapsed && <span className="text-xs">{submodule.title}</span>}
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
