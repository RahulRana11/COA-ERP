import { useState } from "react";
import { useAuthStore, STAGE_FEATURES_SET } from "@/store/authStore";
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
  Scale,
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
    title: "New Registration",
    icon: UserCheck,
    submodules: [
      { title: "Application Register/Status", url: "/official/dashboard" },
      { title: "Edit Application Details", url: "/registration/edit-details" },
      { title: "Returned / Resubmitted", url: "/registration/returned" },
      { title: "Approved Applications", url: "/registration/approved" },
      { title: "Rejected Applications", url: "/registration/rejected" },
      { title: "Applications sent for Review to Applicant", url: "/registration/review-applicant" },
      { title: "Applications Reverted to Officer", url: "/registration/reverted-officer" },
      { title: "Offline Application Addition", url: "/registration/offline-addition" },
      { title: "Delete Application", url: "/registration/delete" },
      { title: "Generate Registration Number", url: "/registration/generate-number" },
      { title: "Certificate & ID Card Issuance", url: "/registration/certificate" },
      { title: "Issue and dispatch certificate and ID Card", url: "/registration/issue-dispatch" },
      { title: "Action by President over Registration Application", url: "/registration/president-action" },
      { title: "New Applicant Login Details", url: "/registration/applicant-login" },
      { title: "Escalated Applications", url: "/registration/escalated" },
    ],
  },
  {
    title: "Renewal & Restoration",
    icon: Calendar,
    submodules: [
      { title: "Architect Renewal Directory", url: "/renewal/directory" },
      { title: "Defaulters", url: "/renewal/defaulters" },
      { title: "Restored Architects List", url: "/renewal/restored" },
      { title: "Inactive Architects", url: "/renewal/inactive" },
      { title: "Inactivate Records", url: "/renewal/inactivate-records" },
      { title: "Renewal Fee Master", url: "/renewal/fee-master" },
      { title: "Fine waiver list", url: "/renewal/fine-waivers" },
    ],
  },
  {
    title: "Architect Services",
    icon: Wrench,
    submodules: [
      { title: "Architect Title Misuse Request", url: "/services/title-misuse" },
      { title: "Search Architect and Communication", url: "/services/search-architect" },
      { title: "Architect Photo Signature Updation Request", url: "/services/photo-signature-update" },
      { title: "View Architect Profile", url: "/services/view-profile" },
      { title: "Architect Address Change Request", url: "/services/address-change" },
      { title: "Architect Login Details", url: "/services/login-details" },
      { title: "Print ID Card", url: "/services/print-id-card" },
      { title: "Architect Name Change", url: "/services/name-change" },
      { title: "Update Enrolment Number", url: "/services/update-enrolment" },
      { title: "Guest User Login Details", url: "/services/guest-login" },
      { title: "Mobile Updation Requests", url: "/services/mobile-update" },
      { title: "Payment Request Approval- cards", url: "/services/payment-approval-cards" },
      { title: "Aadhar Verify", url: "/services/aadhar-verify" },
      { title: "Architect ID Card Data", url: "/services/id-card-data" },
      { title: "Print Testimonial", url: "/services/print-testimonial" },
      { title: "Architect Details Modification", url: "/services/details-modification" },
      { title: "Add/Modify Additional Qualification's of Architect", url: "/services/additional-qualifications" },
      { title: "Modify Architect Communication Details", url: "/services/modify-communication" },
      { title: "Upload Architect Documents", url: "/services/upload-documents" },
      { title: "Approve/Reject Name Change Request", url: "/services/approve-name-change" },
      { title: "Approve Certificate Request", url: "/services/approve-certificate" },
      { title: "Generate ID Card", url: "/services/generate-id-card" },
    ],
  },
  {
    title: "Architect Directory",
    icon: Users,
    submodules: [
      { title: "Search Architect", url: "/directory/search" },
      { title: "View Profile", url: "/directory/profile" },
    ],
  },
  {
    title: "Payment",
    icon: IndianRupee,
    submodules: [
      { title: "Account Details", url: "#" },
      { title: "Receive Payment/Add Payment", url: "#" },
      { title: "Generate DRR", url: "#" },
      { title: "Print Receipt", url: "#" },
      { title: "Edit Receipt", url: "#" },
      { title: "Cancel Receipt", url: "#" },
      { title: "Bank Receipt", url: "#" },
      { title: "Head Wise Summary", url: "#" },
      { title: "Add Foxpro Payment", url: "#" },
      { title: "Bank Statement", url: "#" },
      { title: "Merchant Detail", url: "#" },
      { title: "Bank Information", url: "#" },
      { title: "Approve Payment", url: "#" },
      { title: "Add/Modify Postage Advance", url: "#" },
      { title: "Correct Online Directory Payment Id", url: "#" },
      { title: "DRR Summary Monthly", url: "#" },
      { title: "Online Receipt", url: "#" },
      { title: "School wise Summary", url: "#" },
      { title: "Approve Payment ICICI", url: "#" },
    ],
  },
  {
    title: "Dispatch",
    icon: FileText,
    submodules: [
      { title: "Dispatch Subject Master", url: "#" },
      { title: "Status of Dispatch", url: "#" },
      { title: "Modify Dispatched Cost", url: "#" },
      { title: "Undelivered Dispatch", url: "#" },
      { title: "Add/Modify Dispatch", url: "#" },
      { title: "Dispatch Processing", url: "#" },
      { title: "Pending for Dispatch", url: "#" },
      { title: "Dispatched List", url: "#" },
      { title: "Docket", url: "#" },
      { title: "Dispatch Slip", url: "#" },
      { title: "Local District Mapping", url: "#" },
      { title: "Dispatch Rule Master", url: "#" },
      { title: "Set Dispatch Rates", url: "#" },
    ],
  },
  {
    title: "Members",
    icon: UserCheck,
    submodules: [
      { title: "Important Persons", url: "#" },
      { title: "Council Member List", url: "#" },
      { title: "Add/Modify Council Members", url: "#" },
      { title: "Committee Members Term Details", url: "#" },
      { title: "Add/Modify Meetings", url: "#" },
      { title: "Print Addresses", url: "#" },
      { title: "Generic Report", url: "#" },
      { title: "View Minutes", url: "#" },
    ],
  },
  {
    title: "Enrolment Data",
    icon: FileText,
    submodules: [
      { title: "Enrolment Numbers Intimation", url: "#" },
      { title: "Enrolment Registration Status", url: "#" },
      { title: "Pending Enrolment List by School", url: "#" },
      { title: "Enrolment Status Report", url: "#" },
      { title: "Enrolment Report", url: "#" },
      { title: "MIS Report", url: "#" },
      { title: "Aptitude Test Master", url: "#" },
      { title: "Intake Master", url: "#" },
      { title: "School Basic", url: "#" },
      { title: "Add/Modify Intake Details", url: "#" },
      { title: "Cancel/Restore Intake Data", url: "#" },
      { title: "View Enrolment Number", url: "#" },
      { title: "Allot Enrolment Number", url: "#" },
      { title: "Offline Student Data", url: "#" },
    ],
  },
  {
    title: "Meetings",
    icon: Calendar,
    submodules: [
      { title: "View Council Minutes/Agenda", url: "#" },
      { title: "View EC Minutes/Agenda", url: "#" },
      { title: "Add Meeting", url: "#" },
      { title: "Add Council Meeting/Agenda", url: "#" },
      { title: "View Council Meeting", url: "#" },
      { title: "View EC Meeting", url: "#" },
    ],
  },
  {
    title: "Empanelment",
    icon: Shield,
    submodules: [
      { title: "Action on Emapnelment Application", url: "#" },
      { title: "Search Inspectors", url: "#" },
      { title: "Active/Inactive Inspector", url: "#" },
    ],
  },
  {
    title: "School Application",
    icon: Settings,
    submodules: [
      { title: "Faculty Report PG", url: "#" },
      { title: "Scrutiny Report", url: "#" },
      { title: "Faculty Report Ug", url: "#" },
      { title: "Approve Digitally Signed Application", url: "#" },
      { title: "Search Application", url: "#" },
      { title: "M.Arch Institution Status", url: "#" },
      { title: "B.Arch Institution Status", url: "#" },
      { title: "View Uploaded File", url: "#" },
      { title: "Upload Annexure", url: "#" },
      { title: "School Wise Faculty Report - PG", url: "#" },
      { title: "School Wise Faculty Report - UG", url: "#" },
      { title: "Inspection Committees Report", url: "#" },
      { title: "View/ Edit Scrutiny Report Application", url: "#" },
      { title: "Submit Scrutiny Report Application", url: "#" },
      { title: "View Scrutiny Application", url: "#" },
      { title: "Application Scrutiny Report", url: "#" },
      { title: "Search Faculty", url: "#" },
      { title: "School Admission intake Report", url: "#" },
      { title: "Faculty Status Report", url: "#" },
      { title: "Inspector Appointment Report", url: "#" },
      { title: "Search School", url: "#" },
      { title: "Calculate Faculty Ratio", url: "#" },
      { title: "Application Observation Report", url: "#" },
      { title: "Submit Scrutiny Report", url: "#" },
      { title: "Appoint Scrutiny Committee Member", url: "#" },
      { title: "View Assessment Report", url: "#" },
      { title: "Delete Inspection Committee", url: "#" },
      { title: "Send LOI/Inspection Letters", url: "#" },
      { title: "View/Appoint Inspection Committee", url: "#" },
      { title: "Delete Application", url: "#" },
      { title: "Relieve Faculty", url: "#" },
      { title: "Action on Previous Intake Details", url: "#" },
      { title: "Manage Academic Calendar", url: "#" },
      { title: "Modify Ispection Date", url: "#" },
      { title: "Search Application", url: "#" },
      { title: "Instiution Head Confirm Register", url: "#" },
      { title: "Confirm Head of Innstitution", url: "#" },
      { title: "View Received Applications", url: "#" },
      { title: "Institution Enrolment Report", url: "#" },
    ],
  },
  {
    title: "Court Case",
    icon: Scale,
    submodules: [
      { title: "Search Case", url: "#" },
      { title: "Court Master", url: "#" },
      { title: "Court Type Master", url: "#" },
      { title: "Court Fee Master", url: "#" },
      { title: "Case Type Master", url: "#" },
      { title: "Lawyer Master", url: "#" },
      { title: "Add/ Edit Cases", url: "#" },
    ],
  },
  {
    title: "RTI",
    icon: FileText,
    submodules: [
      { title: "CIC Report", url: "#" },
      { title: "RTI Report", url: "#" },
      { title: "CIC Appeal", url: "#" },
      { title: "Create RTI Reply", url: "#" },
      { title: "RTI Processing", url: "#" },
      { title: "Add/ Modify Application/Appeal", url: "#" },
      { title: "RTI Application Form", url: "#" },
    ],
  },
  {
    title: "Master",
    icon: Settings,
    submodules: [
      { title: "Cast Master", url: "#" },
      { title: "Add Year", url: "#" },
      { title: "School Annexure Mapping", url: "#" },
      { title: "Add/ Modify Annexure", url: "#" },
      { title: "Add/ Modify Course Specialization", url: "#" },
      { title: "Qualification Master", url: "#" },
      { title: "School faculty Mapping", url: "#" },
      { title: "Add/ Modify Bank Name", url: "#" },
      { title: "Add/ Modify Course", url: "#" },
      { title: "Add/ Modify Districts", url: "#" },
      { title: "Inspection Committee", url: "#" },
      { title: "Scrutiny Master", url: "#" },
      { title: "Scrutiny Eligibility Criteria Mapping", url: "#" },
      { title: "Scrutiny Manual Criteria Mapping", url: "#" },
      { title: "Add/ Modify Document", url: "#" },
      { title: "Qualifying Examination Rule", url: "#" },
      { title: "Course Fee", url: "#" },
      { title: "Set Course Eligibility Extension", url: "#" },
      { title: "Add/ Modify Committee", url: "#" },
      { title: "University Master", url: "#" },
      { title: "Architect Head Master", url: "#" },
    ],
  },
  {
    title: "Complaints of Architect",
    icon: Shield,
    submodules: [
      { title: "Add Offline Complaints", url: "#" },
      { title: "Action On Complaints", url: "#" },
      { title: "Complaints List", url: "#" },
      { title: "Complaints Against Fraud Architects", url: "#" },
      { title: "Complaints Under Unregistered Person", url: "#" },
      { title: "Show Cause List", url: "#" },
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
  const { activeUser } = useAuthStore();

  // Super Admin (no base restriction) sees everything
  const isSuperAdmin = activeUser.base_role === "Super Admin";
  const allowedFeatures = new Set(activeUser.assigned_features);

  // Filter a module's submodules: remove titles not in allowedFeatures (except Super Admin)
  const getVisibleSubmodules = (submodules: SubModule[]) => {
    if (isSuperAdmin) return submodules;
    
    // Check if user has any of the 4 stage features
    const hasAnyStageFeature = Array.from(allowedFeatures).some(f => STAGE_FEATURES_SET.has(f));

    return submodules.filter((s) => {
      // Special override: the dashboard / inbox link
      if (s.title === "Application Register/Status") {
        return hasAnyStageFeature || allowedFeatures.has(s.title);
      }
      return allowedFeatures.has(s.title);
    });
  };

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
            {modules.map((module) => {
              const visibleSubmodules = getVisibleSubmodules(module.submodules);
              // Hide entire module if user has no access to any submodule
              if (!isSuperAdmin && visibleSubmodules.length === 0) return null;
              return (
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
                          className={`h-4 w-4 transition-transform ${openModules.includes(module.title) ? "rotate-180" : ""}`}
                        />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {visibleSubmodules.map((submodule) => (
                          <SidebarMenuSubItem key={submodule.url}>
                            <SidebarMenuSubButton asChild>
                              <NavLink
                                to={submodule.url}
                                className="hover:bg-white dark:hover:bg-black hover:text-blue-600 hover:shadow-sm"
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
              );
            })}
          </SidebarMenu>
        </TooltipProvider>
      </SidebarContent>
    </Sidebar>
  );
}
