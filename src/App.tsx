import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import Dashboard from "./pages/Dashboard";
import SystemSecurity from "./pages/modules/SystemSecurity";
import MeetingLogs from "./pages/modules/MeetingLogs";
import NotFound from "./pages/NotFound";
import ArchitectsList from "./pages/ArchitectsList";
import ArchitectRegistrationForm from "./pages/architect/ArchitectRegistrationForm";
import UserManagementPage from "./pages/admin/UserManagementPage";
import OfficialDashboard from "./pages/official/OfficialDashboard";
import ApplicationReviewPage from "./pages/official/ApplicationReviewPage";
import ActiveArchitectDashboard from "./pages/architect/ActiveArchitectDashboard";
import ReturnedResubmittedList from "./pages/registration/ReturnedResubmitted";
import ApprovedApplicationsList from "./pages/registration/ApprovedApplications";
import RejectedApplicationsList from "./pages/registration/RejectedApplications";
import GenerateRegistrationNumber from "./pages/registration/GenerateRegistrationNumber";
import CertificateIssuance from "./pages/registration/CertificateIssuance";
import DispatchTracking from "./pages/registration/DispatchTracking";
import ArchitectRenewalDirectory from "./pages/renewal/ArchitectRenewalDirectory";
import DefaultersList from "./pages/renewal/DefaultersList";
import RestoredArchitects from "./pages/renewal/RestoredArchitects";
import InactiveArchitects from "./pages/renewal/InactiveArchitects";
import InactivateRecords from "./pages/renewal/InactivateRecords";
import RenewalFeeMaster from "./pages/renewal/RenewalFeeMaster";
import FineWaiverList from "./pages/renewal/FineWaiverList";
import NameChangeRequests from "./pages/services/NameChangeRequests";
import PhotoSignatureChange from "./pages/services/PhotoSignatureChange";
import AddressChange from "./pages/services/AddressChange";
import ContactUpdate from "./pages/services/ContactUpdate";
import EditApplicationDetails from "./pages/registration/EditApplicationDetails";
import RevertedToOfficerList from "./pages/registration/RevertedToOfficer";
import OfflineApplicationAddition from "./pages/registration/OfflineApplicationAddition";
import DeleteApplicationPage from "./pages/registration/DeleteApplicationPage";
import EscalatedApplicationsPage from "./pages/registration/EscalatedApplicationsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <AppHeader />
              <main className="flex-1 p-6 bg-background">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/admin/system" element={<SystemSecurity />} />
                  <Route path="/admin/users" element={<UserManagementPage />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="/meetings/logs" element={<MeetingLogs />} />
                  <Route path="/directory/search" element={<ArchitectsList />} />
                  <Route path="/architect/register" element={<ArchitectRegistrationForm />} />
                  <Route path="/architect/dashboard" element={<ActiveArchitectDashboard />} />
                  <Route path="/official/dashboard" element={<OfficialDashboard />} />
                  <Route path="/official/review/:id" element={<ApplicationReviewPage />} />
                  <Route path="/registration/returned" element={<ReturnedResubmittedList />} />
                  <Route path="/registration/approved" element={<ApprovedApplicationsList />} />
                  <Route path="/registration/rejected" element={<RejectedApplicationsList />} />
                  <Route path="/registration/reverted-officer" element={<RevertedToOfficerList />} />
                  <Route path="/registration/edit-details" element={<EditApplicationDetails />} />
                  <Route path="/registration/offline-addition" element={<OfflineApplicationAddition />} />
                  <Route path="/registration/delete" element={<DeleteApplicationPage />} />
                  <Route path="/registration/escalated" element={<EscalatedApplicationsPage />} />
                  <Route path="/registration/generate-number" element={<GenerateRegistrationNumber />} />
                  <Route path="/registration/certificate" element={<CertificateIssuance />} />
                  <Route path="/registration/dispatch" element={<DispatchTracking />} />
                  <Route path="/renewal/directory" element={<ArchitectRenewalDirectory />} />
                  <Route path="/renewal/defaulters" element={<DefaultersList />} />
                  <Route path="/renewal/restored" element={<RestoredArchitects />} />
                  <Route path="/renewal/inactive" element={<InactiveArchitects />} />
                  <Route path="/renewal/inactivate-records" element={<InactivateRecords />} />
                  <Route path="/renewal/fee-master" element={<RenewalFeeMaster />} />
                  <Route path="/renewal/fine-waivers" element={<FineWaiverList />} />
                  <Route path="/services/name-change" element={<NameChangeRequests />} />
                  <Route path="/services/photo-change" element={<PhotoSignatureChange />} />
                  <Route path="/services/address-change" element={<AddressChange />} />
                  <Route path="/services/contact-update" element={<ContactUpdate />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
