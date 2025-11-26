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
  IndianRupee,
  BookOpen,
  BarChart3,
  Wrench,
  ChevronDown,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import coaLogo from "@/lib/Council_of_Architecture_logo.jpg";

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
    title: "Architects",
    icon: UserCheck,
    submodules: [
      { title: "Registration", url: "/registry/registration" },
      { title: "Renewal", url: "/registry/renewal" },
      { title: "Defaulters ", url: "/registry/defaulters" },
      { title: "Inactive Architects", url: "/registry/inactive" },
      { title: "Print Certificate", url: "/registry/print-certificate" },
      { title: "Inactivate Record", url: "/registry/inactivate-record" },
      { title: "Search Architects", url: "/registry/search" },
      { title: "Credential Verification", url: "/registry/verification" },
      { title: "Empanelment", url: "/registry/empanelment" },
      { title: "Architect Records", url: "/registry/architect" },
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
    icon: IndianRupee,
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
        <TooltipProvider delayDuration={0}>
          {/* Logo Section */}
          <div className={`mb-6 ${collapsed ? 'px-0' : 'px-3'}`}>
            {!collapsed ? (
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={coaLogo} alt="COA Logo" className="h-full w-full object-contain" />
                </div>
                <div>
                  <h1 className="text-sm font-bold text-sidebar-foreground">COA ERP</h1>
                  <p className="text-xs text-sidebar-foreground/80">Super Admin</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full">
                <div className="h-10 w-10 rounded-lg overflow-hidden">
                  <img src={coaLogo} alt="COA Logo" className="h-full w-full object-contain" />
                </div>
              </div>
            )}
          </div>

          {/* Dashboard Link */}
          <SidebarMenu>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
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
                </TooltipTrigger>
                <TooltipContent side="right" className={collapsed ? "" : "hidden"}>
                  <p>Dashboard</p>
                </TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>

          {/* Modules */}
          <SidebarMenu className="space-y-1">
            {modules.map((module) => (
              <SidebarMenuItem key={module.title}>
                {collapsed ? (
                  // Collapsed state: Just show icon with tooltip
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton className="w-full">
                        <module.icon className="h-4 w-4" />
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{module.title}</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  // Expanded state: Show collapsible with submodules
                  <Collapsible
                    open={openModules.includes(module.title)}
                    onOpenChange={() => toggleModule(module.title)}
                  >
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full">
                        <module.icon className="h-4 w-4" />
                        <span className="flex-1 text-left">{module.title}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openModules.includes(module.title) ? "rotate-180" : ""
                          }`}
                        />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {module.submodules.map((submodule) => (
                          <SidebarMenuSubItem key={submodule.url}>
                            <SidebarMenuSubButton asChild>
                              <NavLink
                                to={submodule.url}
                                className="hover:bg-sidebar-accent/50"
                                activeClassName="bg-sidebar-primary/20 text-sidebar-foreground font-medium"
                              >
                                <span className="text-xs">{submodule.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </TooltipProvider>
      </SidebarContent>
    </Sidebar>
  );
}
