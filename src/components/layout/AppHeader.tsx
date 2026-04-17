import { Bell, Settings, LogOut, Search, UserCog, Shield, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuthStore, SUPER_ADMIN } from "@/store/authStore";
import { toast } from "sonner";

const ROLE_COLORS: Record<string, string> = {
  "Super Admin": "bg-red-500",
  President: "bg-purple-500",
  Registrar: "bg-blue-600",
  HOD: "bg-teal-600",
  Clerk: "bg-slate-500",
};

const ROLE_BADGE_COLORS: Record<string, string> = {
  "Super Admin": "bg-red-100 text-red-700 border-red-200",
  President: "bg-purple-100 text-purple-700 border-purple-200",
  Registrar: "bg-blue-100 text-blue-700 border-blue-200",
  HOD: "bg-teal-100 text-teal-700 border-teal-200",
  Clerk: "bg-slate-100 text-slate-700 border-slate-200",
};

export function AppHeader() {
  const { activeUser, allUsers, setActiveUser } = useAuthStore();
  const isImpersonating = activeUser.id !== SUPER_ADMIN.id;

  const handleImpersonate = (userId: string) => {
    const user = allUsers.find((u) => u.id === userId);
    if (!user) return;
    setActiveUser(user);
    toast.success(`Now viewing as ${user.fullName}`, {
      description: `Role: ${user.base_role} · ${user.assigned_features.length} features active`,
      duration: 4000,
    });
  };

  const handleExitImpersonation = () => {
    setActiveUser(SUPER_ADMIN);
    toast.info("Returned to Super Admin session");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      {/* Impersonation Banner */}
      {isImpersonating && (
        <div className="bg-amber-500 text-amber-950 px-4 py-1.5 text-xs font-semibold flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserCog className="h-3.5 w-3.5" />
            <span>
              IMPERSONATION MODE — Viewing as <strong>{activeUser.fullName}</strong> ({activeUser.base_role}) ·{" "}
              {activeUser.assigned_features.length} features granted
            </span>
          </div>
          <button
            onClick={handleExitImpersonation}
            className="text-amber-900 font-bold underline underline-offset-2 hover:text-amber-950"
          >
            Exit Impersonation →
          </button>
        </div>
      )}

      <div className="flex h-16 items-center gap-4 px-6">
        <SidebarTrigger className="text-foreground" />

        {/* Logo Section for Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <span className="text-lg font-bold text-primary">COA ERP</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 bg-muted/50 border-border"
            />
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-popover">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="space-y-2 p-2">
                <div className="flex gap-3 p-2 hover:bg-muted rounded-md cursor-pointer">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">New application submitted</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex gap-3 p-2 hover:bg-muted rounded-md cursor-pointer">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Pending inspection review</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User + Impersonation Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center gap-2 px-2 rounded-lg transition-all ${isImpersonating ? "ring-2 ring-amber-400 ring-offset-1" : ""}`}
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback
                    className={`${ROLE_COLORS[activeUser.base_role] ?? "bg-primary"} text-white text-xs font-bold`}
                  >
                    {activeUser.avatarInitials ?? "SA"}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium leading-tight">{activeUser.fullName}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{activeUser.base_role}</p>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground hidden md:block" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-64 bg-popover">
              {/* Current session info */}
              <div className="px-3 py-2 bg-muted/40 rounded-t-md border-b">
                <p className="text-xs text-muted-foreground mb-0.5">Active Session</p>
                <p className="text-sm font-semibold">{activeUser.fullName}</p>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${ROLE_BADGE_COLORS[activeUser.base_role] ?? "bg-gray-100 text-gray-700"}`}
                >
                  {activeUser.base_role}
                </span>
              </div>

              <DropdownMenuSeparator />

              {/* Impersonate submenu */}
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-muted-foreground flex items-center gap-1.5 py-1.5">
                  <Shield className="h-3 w-3" />
                  Impersonate User (RBAC Testing)
                </DropdownMenuLabel>

                {/* Switch back to Super Admin */}
                {isImpersonating && (
                  <DropdownMenuItem
                    onClick={handleExitImpersonation}
                    className="font-semibold text-amber-600 focus:text-amber-700 focus:bg-amber-50"
                  >
                    <UserCog className="mr-2 h-4 w-4" />
                    Exit → Back to Super Admin
                  </DropdownMenuItem>
                )}

                {allUsers.map((user) => (
                  <DropdownMenuItem
                    key={user.id}
                    onClick={() => handleImpersonate(user.id)}
                    className={`cursor-pointer ${activeUser.id === user.id ? "bg-primary/10 font-semibold" : ""}`}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <Avatar className="h-6 w-6 flex-shrink-0">
                        <AvatarFallback
                          className={`${ROLE_COLORS[user.base_role] ?? "bg-slate-500"} text-white text-[9px] font-bold`}
                        >
                          {user.avatarInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">{user.fullName}</p>
                        <p className="text-[10px] text-muted-foreground truncate">
                          {user.base_role} · {user.assigned_features.length} features
                        </p>
                      </div>
                      {activeUser.id === user.id && (
                        <span className="text-[9px] bg-primary text-white px-1 rounded">ACTIVE</span>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
