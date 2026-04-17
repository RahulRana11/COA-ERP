import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ShieldCheck, User, Pencil } from "lucide-react";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useAuthStore, SystemUser } from "@/store/authStore";

const MODULES_DATA = {
    "Architects": {
      "New Application/Registration": [
        "Application Register/Status", "Edit Application Details", "Pending Applications", "Approved Applications", "Rejected Applications", "Applications sent for Review to Applicant", "Applications Reverted to Officer", "Offline Application Addition", "Delete Application", "Issue and dispatch certificate and ID Card", "Offline Payment Addition", "Action by President over Registration Application", "New Applicant Login Details", "Escalated Applications"
      ],
      "Renewal": [
        "Architect Renewal Directory", "Defaulters", "Restored Architects List", "Inactive Architects", "Inactivate Records", "Renewal Fee Master", "Fine waiver list"
      ],
      "Other Architect Services": [
        "Architect Title Misuse Request", "Search Architect and Communication", "Architect Photo Signature Updation Request", "View Architect Profile", "Architect Address Change Request", "Architect Login Details", "Print ID Card", "Architect Name Change", "Update Enrolment Number", "Guest User Login Details", "Mobile Updation Requests", "Payment Request Approval- cards", "Aadhar Verify", "Architect ID Card Data", "Print Testimonial", "Architect Details Modification", "Add/Modify Additional Qualification's of Architect", "Modify Architect Communication Details", "Upload Architect Documents", "Approve/Reject Name Change Request", "Approve Certificate Request", "Generate ID Card"
      ]
    },
    "Payment": {
      "General": [
        "Account Details", "Receive Payment/Add Payment", "Generate DRR", "Print Receipt", "Edit Receipt", "Cancel Receipt", "Bank Receipt", "Head Wise Summary", "Add Foxpro Payment", "Bank Statement", "Merchant Detail", "Bank Information", "Approve Payment", "Add/Modify Postage Advance", "Correct Online Directory Payment Id", "DRR Summary Monthly", "Online Receipt", "School wise Summary", "Approve Payment ICICI"
      ]
    },
    "Dispatch": {
      "General": [
        "Dispatch Subject Master", "Status of Dispatch", "Modify Dispatched Cost", "Undelivered Dispatch", "Add/Modify Dispatch", "Dispatch Processing", "Pending for Dispatch", "Dispatched List", "Docket", "Dispatch Slip", "Local District Mapping", "Dispatch Rule Master", "Set Dispatch Rates"
      ]
    },
    "Members": {
      "General": [
        "Important Persons", "Council Member List", "Add/Modify Council Members", "Committee Members Term Details", "Add/Modify Meetings", "Print Addresses", "Generic Report", "View Minutes"
      ]
    },
    "Enrolment Data": {
      "General": [
        "Enrolment Numbers Intimation", "Enrolment Registration Status", "Pending Enrolment List by School", "Enrolment Status Report", "Enrolment Report", "MIS Report", "Aptitude Test Master", "Intake Master", "School Basic", "Add/Modify Intake Details", "Cancel/Restore Intake Data", "View Enrolment Number", "Allot Enrolment Number", "Offline Student Data"
      ]
    },
    "Meetings": {
      "General": [
        "View Council Minutes/Agenda", "View EC Minutes/Agenda", "Add Meeting", "Add Council Meeting/Agenda", "View Council Meeting", "View EC Meeting"
      ]
    },
    "Empanelment": {
      "General": [
        "Action on Emapnelment Application", "Search Inspectors", "Active/Inactive Inspector"
      ]
    },
    "School Application": {
      "General": [
        "Faculty Report PG", "Scrutiny Report", "Faculty Report Ug", "Approve Digitally Signed Application", "Search Application", "M.Arch Institution Status", "B.Arch Institution Status", "View Uploaded File", "Upload Annexure", "School Wise Faculty Report - PG", "School Wise Faculty Report - UG", "Inspection Committees Report", "View/ Edit Scrutiny Report Application", "Submit Scrutiny Report Application", "View Scrutiny Application", "Application Scrutiny Report", "Search Faculty", "School Admission intake Report", "Faculty Status Report", "Inspector Appointment Report", "Search School", "Calculate Faculty Ratio", "Application Observation Report", "Submit Scrutiny Report", "Appoint Scrutiny Committee Member", "View Assessment Report", "Delete Inspection Committee", "Send LOI/Inspection Letters", "View/Appoint Inspection Committee", "Delete Application", "Relieve Faculty", "Action on Previous Intake Details", "Manage Academic Calendar", "Modify Ispection Date", "Instiution Head Confirm Register", "Confirm Head of Innstitution", "View Received Applications", "Institution Enrolment Report"
      ]
    },
    "Court Case": {
      "General": [
        "Search Case", "Court Master", "Court Type Master", "Court Fee Master", "Case Type Master", "Lawyer Master", "Add/ Edit Cases"
      ]
    },
    "RTI": {
      "General": [
        "CIC Report", "RTI Report", "CIC Appeal", "Create RTI Reply", "RTI Processing", "Add/ Modify Application/Appeal", "RTI Application Form"
      ]
    },
    "Master": {
      "General": [
        "Cast Master", "Add Year", "School Annexure Mapping", "Add/ Modify Annexure", "Add/ Modify Course Specialization", "Qualification Master", "School faculty Mapping", "Add/ Modify Bank Name", "Add/ Modify Course", "Add/ Modify Districts", "Inspection Committee", "Scrutiny Master", "Scrutiny Eligibility Criteria Mapping", "Scrutiny Manual Criteria Mapping", "Add/ Modify Document", "Qualifying Examination Rule", "Course Fee", "Set Course Eligibility Extension", "Add/ Modify Committee", "University Master", "Architect Head Master"
      ]
    },
    "Complaints of Architect": {
      "General": [
        "Add Offline Complaints", "Action On Complaints", "Complaints List", "Complaints Against Fraud Architects", "Complaints Under Unregistered Person", "Show Cause List"
      ]
    }
};

const ROLE_TEMPLATES: Record<string, string[]> = {
    Clerk: [
        "Application Register/Status", "Offline Application Addition", "Generate ID Card", "Search Architect and Communication"
    ],
    HOD: [
        "Application Register/Status", "Edit Application Details", "Approved Applications", "Rejected Applications", "Issue and dispatch certificate and ID Card", "Defaulters", "Inactive Architects"
    ],
    Registrar: [
        "Application Register/Status", "Edit Application Details", "Approved Applications", "Rejected Applications", "Issue and dispatch certificate and ID Card", "Defaulters", "Inactive Architects", "Architect Renewal Directory", "Renewal Fee Master", "Action by President over Registration Application", "Account Details", "Generate DRR"
    ],
    President: [
        "Action by President over Registration Application", "Application Register/Status", "Approved Applications", "Rejected Applications", "Architect Renewal Directory", "Account Details", "Generate DRR"
    ],
    "Super Admin": Object.values(MODULES_DATA).flatMap((sub) => Object.values(sub).flat()),
};

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  emailAddress: z.string().email("Invalid email address format"),
  mobileNumber: z.string().min(10, "Mobile number must be at least 10 digits"),
  designation: z.string().min(2, "Designation is required"),
  department: z.string().min(2, "Department is required"),
  role: z.string().min(1, "Please select a base role template"),
  selectedFeatureIds: z.array(z.string()).default([]),
});

export type OfficialUserFormValues = z.infer<typeof formSchema>;

interface UserFormSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Provide when creating a new user */
  onAddUser?: (user: any) => void;
  /** Provide when editing an existing user — pre-populates the form */
  editUser?: SystemUser | null;
}

export function UserFormSheet({ open, onOpenChange, onAddUser, editUser }: UserFormSheetProps) {
  const { updateUserFeatures } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEditMode = !!editUser;
  // Track the previous role to suppress auto-fill when in edit mode (user already has explicit features)
  const prevRoleRef = useRef<string>("");

  const form = useForm<OfficialUserFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      mobileNumber: "",
      designation: "",
      department: "",
      role: "",
      selectedFeatureIds: [],
    },
  });

  // Pre-populate form when sheet opens in edit mode
  useEffect(() => {
    if (open && editUser) {
      form.reset({
        fullName: editUser.fullName,
        emailAddress: editUser.emailAddress,
        mobileNumber: "",          // Not stored in SystemUser; leave blank
        designation: editUser.designation,
        department: editUser.department,
        role: editUser.base_role,
        selectedFeatureIds: [...editUser.assigned_features],
      });
      prevRoleRef.current = editUser.base_role;
    } else if (open && !editUser) {
      form.reset({
        fullName: "", emailAddress: "", mobileNumber: "",
        designation: "", department: "", role: "", selectedFeatureIds: [],
      });
      prevRoleRef.current = "";
    }
  }, [open, editUser]);

  const selectedRole = form.watch("role");

  // Auto-fill ONLY on role template change — and only when it's a genuine change
  // (suppress on initial edit-mode hydration so existing permissions aren't blown away)
  useEffect(() => {
    if (!selectedRole) return;
    if (selectedRole === prevRoleRef.current) return;
    prevRoleRef.current = selectedRole;

    if (ROLE_TEMPLATES[selectedRole]) {
      form.setValue("selectedFeatureIds", ROLE_TEMPLATES[selectedRole], {
        shouldValidate: true,
        shouldDirty: true,
      });
      toast.info(`Auto-applied default template for ${selectedRole}`);
    }
  }, [selectedRole, form]);

  const onSubmit = async (values: OfficialUserFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));

    if (isEditMode && editUser) {
      // Patch the existing user in the global store
      updateUserFeatures(editUser.id, {
        base_role: values.role as SystemUser["base_role"],
        designation: values.designation,
        department: values.department,
        assigned_features: values.selectedFeatureIds,
      });
      toast.success(`Permissions updated for ${editUser.fullName}`, {
        description: `${values.selectedFeatureIds.length} features now active.`,
      });
    } else {
      const newUser = {
        id: `usr-${Math.random().toString(36).substr(2, 6)}`,
        fullName: values.fullName,
        designation: values.designation,
        department: values.department,
        role: values.role,
        emailAddress: values.emailAddress,
        mobileNumber: values.mobileNumber,
        status: "Active",
      };
      onAddUser?.(newUser);
      toast.success(`Official created with ${values.selectedFeatureIds.length} features granted.`);
    }

    setIsSubmitting(false);
    onOpenChange(false);
    form.reset();
  };

  const selectedFeatureCount = form.watch("selectedFeatureIds").length;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto flex flex-col p-0">
        <SheetHeader className="p-6 border-b bg-muted/20 sticky top-0 z-10 backdrop-blur-md">
          <SheetTitle className="flex items-center gap-2 text-2xl font-bold">
            {isEditMode ? (
              <><Pencil className="h-5 w-5 text-primary" /> Edit Permissions</>
            ) : (
              <><User className="h-6 w-6 text-primary" /> Add New Official</>
            )}
          </SheetTitle>
          {isEditMode && editUser && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-semibold text-foreground">{editUser.fullName}</span>
              <Badge variant="outline" className="text-xs">{editUser.base_role}</Badge>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{editUser.emailAddress}</span>
            </div>
          )}
          <SheetDescription>
            {isEditMode
              ? "Adjust this official's role template and granular feature access. Changes apply instantly to their session."
              : "Configure internal user profiles, assign templates, and fine-tune granular access rights."}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

              {/* Section A: Basic Details — hidden in edit mode since identity can't change */}
              {!isEditMode && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold tracking-tight border-b pb-2">Personal & Administrative Info</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="fullName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="Amit Sharma" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="emailAddress" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl><Input type="email" placeholder="amit@coa.gov.in" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="mobileNumber" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl><Input placeholder="9876543210" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="designation" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Designation</FormLabel>
                        <FormControl><Input placeholder="Section Officer" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="department" render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Department</FormLabel>
                        <FormControl><Input placeholder="Registration Division" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </div>
              )}

              {/* In edit mode show a compact read-only identity strip */}
              {isEditMode && editUser && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold tracking-tight text-muted-foreground uppercase border-b pb-2">Identity (read-only)</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Full Name</p>
                      <p className="font-medium">{editUser.fullName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-medium">{editUser.emailAddress}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Section B: Role & Permissions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight border-b pb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-500" /> System Authorizations
                </h3>

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="bg-muted/30 p-4 rounded-lg border border-primary/10">
                      <FormLabel className="text-primary font-bold">Role Template</FormLabel>
                      <FormDescription>
                        Changing the role auto-fills the baseline permissions below. You can then manually override individual features.
                      </FormDescription>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background max-w-sm">
                            <SelectValue placeholder="Select official rank..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Super Admin">Super Admin</SelectItem>
                          <SelectItem value="President">President</SelectItem>
                          <SelectItem value="Registrar">Registrar</SelectItem>
                          <SelectItem value="HOD">Head of Department (HOD)</SelectItem>
                          <SelectItem value="Clerk">Clerk / Reviewer</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mt-6 border rounded-lg overflow-hidden bg-background">
                  <div className="bg-slate-900 text-slate-100 px-4 py-3 font-semibold text-sm flex justify-between items-center">
                    <span>Granular Access Checklist</span>
                    <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2.5 py-0.5 rounded-full border border-indigo-400">
                      {selectedFeatureCount} Features Granted
                    </span>
                  </div>

                  <ScrollArea className="h-[420px] bg-muted/5">
                    <Accordion type="multiple" className="w-full">
                      {Object.entries(MODULES_DATA).map(([category, subModules]) => {
                        const allCategoryFeatures = Object.values(subModules).flat();
                        const areAllSelected = allCategoryFeatures.every(
                          (feat) => form.watch("selectedFeatureIds").includes(feat)
                        );
                        const selectedCount = allCategoryFeatures.filter(
                          (feat) => form.watch("selectedFeatureIds").includes(feat)
                        ).length;

                        return (
                          <AccordionItem key={category} value={category} className="relative border-b">
                            <AccordionTrigger className="px-4 py-3 pr-36 hover:bg-muted/80 hover:no-underline font-semibold bg-muted/30 relative">
                              <span className="flex items-center gap-2">
                                {category}
                                {selectedCount > 0 && (
                                  <span className="text-[10px] bg-primary/15 text-primary font-bold px-1.5 py-0.5 rounded-full border border-primary/20">
                                    {selectedCount}/{allCategoryFeatures.length}
                                  </span>
                                )}
                              </span>
                            </AccordionTrigger>
                            {/* Select All button - floated to the right of trigger */}
                            <div
                              className="absolute right-10 top-0 h-[44px] flex items-center z-10"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex items-center space-x-1.5 bg-background/70 hover:bg-background border px-2 py-1 rounded shadow-sm backdrop-blur-sm transition-colors cursor-pointer"
                                onClick={() => {
                                  const currentIds = form.getValues("selectedFeatureIds") || [];
                                  if (areAllSelected) {
                                    form.setValue("selectedFeatureIds", currentIds.filter((id) => !allCategoryFeatures.includes(id)), { shouldDirty: true });
                                  } else {
                                    form.setValue("selectedFeatureIds", Array.from(new Set([...currentIds, ...allCategoryFeatures])), { shouldDirty: true });
                                  }
                                }}
                              >
                                <Checkbox
                                  id={`select-all-${category}`}
                                  checked={areAllSelected}
                                  onCheckedChange={(checked) => {
                                    const currentIds = form.getValues("selectedFeatureIds") || [];
                                    if (checked) {
                                      form.setValue("selectedFeatureIds", Array.from(new Set([...currentIds, ...allCategoryFeatures])), { shouldDirty: true, shouldValidate: true });
                                    } else {
                                      form.setValue("selectedFeatureIds", currentIds.filter((id) => !allCategoryFeatures.includes(id)), { shouldDirty: true, shouldValidate: true });
                                    }
                                  }}
                                />
                                <label htmlFor={`select-all-${category}`} className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider cursor-pointer select-none">
                                  All
                                </label>
                              </div>
                            </div>

                            <AccordionContent className="p-0">
                              {Object.entries(subModules).map(([subCat, features]) => (
                                <div key={subCat} className="border-b last:border-0 border-muted-foreground/10 px-6 py-4">
                                  <h5 className="font-bold text-sm mb-3 text-primary tracking-tight">
                                    {subCat === "General" ? "Standard Functions" : subCat}
                                  </h5>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2.5">
                                    {features.map((feature) => (
                                      <FormField
                                        key={feature}
                                        control={form.control}
                                        name="selectedFeatureIds"
                                        render={({ field }) => (
                                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-2.5 hover:bg-muted/40 transition-colors shadow-sm">
                                            <FormControl>
                                              <Checkbox
                                                checked={field.value?.includes(feature)}
                                                onCheckedChange={(checked) => {
                                                  return checked
                                                    ? field.onChange([...field.value, feature])
                                                    : field.onChange(field.value?.filter((v) => v !== feature));
                                                }}
                                              />
                                            </FormControl>
                                            <FormLabel className="font-normal text-xs leading-tight cursor-pointer">
                                              {feature}
                                            </FormLabel>
                                          </FormItem>
                                        )}
                                      />
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </ScrollArea>
                </div>
              </div>

              <div id="form-actions" className="hidden">
                <Button type="submit" id="hidden-submit-btn">Submit</Button>
              </div>
            </form>
          </Form>
        </div>

        <SheetFooter className="p-6 border-t sticky bottom-0 bg-background/95 backdrop-blur shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button
            type="button"
            onClick={() => document.getElementById("hidden-submit-btn")?.click()}
            disabled={isSubmitting}
            className="min-w-[220px]"
          >
            {isSubmitting ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</>
            ) : isEditMode ? (
              "Save Permission Changes"
            ) : (
              "Create & Assign Permissions"
            )}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
