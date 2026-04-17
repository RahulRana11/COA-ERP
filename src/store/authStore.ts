import { create } from "zustand";

export type WorkflowStage =
    | "Pending_Clerk"
    | "Pending_HOD"
    | "Pending_Registrar"
    | "Pending_President"
    | "Approved"
    | "Rejected";

export interface SystemUser {
    id: string;
    fullName: string;
    designation: string;
    department: string;
    base_role: "Super Admin" | "President" | "Registrar" | "HOD" | "Clerk";
    emailAddress: string;
    assigned_features: string[];
    avatarInitials: string;
}

export interface ApplicationRecord {
    id: string;
    appNumber: string;
    appMode: "Offline" | "Online";
    paymentStatus: "Paid" | "Unpaid";
    name: string;
    dob: string;
    gender: string;
    nationality: string;
    qualification: string;
    dateOfApp: string;
    hardcopyReceivedOn: string | null;
    regNumber: string | null;
    regDate: string | null;
    residentialAddress: string;
    professionalAddress: string;
    communicationAddress: string;
    presidentApproveOn: string | null;
    additionalQualification: string | null;
    workflow_stage: WorkflowStage;
}

// The hardcoded Super Admin who is always logged in as the real user
export const SUPER_ADMIN: SystemUser = {
    id: "super-admin-001",
    fullName: "Super Admin",
    designation: "System Administrator",
    department: "IT & Systems",
    base_role: "Super Admin",
    emailAddress: "admin@coa.gov.in",
    assigned_features: [], // Super Admin sees everything (no filter applied)
    avatarInitials: "SA",
};

// Pre-seeded mock users matching the UserManagementPage structure
export const MOCK_SYSTEM_USERS: SystemUser[] = [
    {
        id: "usr-clerk-001",
        fullName: "Amit Sharma",
        designation: "Section Officer",
        department: "Registration Division",
        base_role: "Clerk",
        emailAddress: "amit.sharma@coa.gov.in",
        avatarInitials: "AS",
        assigned_features: [
            "Application Register/Status",
            "Offline Application Addition",
            "Generate ID Card",
            "Search Architect and Communication",
            "Pending Applications",
            "Applications sent for Review to Applicant",
        ],
    },
    {
        id: "usr-hod-001",
        fullName: "Priya Desai",
        designation: "Head of Registration",
        department: "Registrar Office",
        base_role: "HOD",
        emailAddress: "priya.desai@coa.gov.in",
        avatarInitials: "PD",
        assigned_features: [
            "Application Register/Status",
            "Edit Application Details",
            "Approved Applications",
            "Rejected Applications",
            "Issue and dispatch certificate and ID Card",
            "Defaulters",
            "Inactive Architects",
            "Pending Applications",
            "Applications Reverted to Officer",
            "Escalated Applications",
        ],
    },
    {
        id: "usr-registrar-001",
        fullName: "Sushil Kumar",
        designation: "Registrar",
        department: "Core Registration",
        base_role: "Registrar",
        emailAddress: "sushil.kumar@coa.gov.in",
        avatarInitials: "SK",
        assigned_features: [
            "Application Register/Status",
            "Edit Application Details",
            "Approved Applications",
            "Rejected Applications",
            "Issue and dispatch certificate and ID Card",
            "Defaulters",
            "Inactive Architects",
            "Architect Renewal Directory",
            "Renewal Fee Master",
            "Action by President over Registration Application",
            "Account Details",
            "Generate DRR",
            "Pending Applications",
            "New Applicant Login Details",
            "Escalated Applications",
            "Offline Application Addition",
        ],
    },
    {
        id: "usr-president-001",
        fullName: "Dr. Rajiv Mishra",
        designation: "President, COA",
        department: "Presidential Office",
        base_role: "President",
        emailAddress: "president@coa.gov.in",
        avatarInitials: "RM",
        assigned_features: [
            "Action by President over Registration Application",
            "Application Register/Status",
            "Approved Applications",
            "Rejected Applications",
            "Architect Renewal Directory",
            "Account Details",
            "Generate DRR",
            "Pending Applications",
        ],
    },
];

// Global application pool with workflow_stage
export const INITIAL_APPLICATIONS: ApplicationRecord[] = [
    { id: "1", appNumber: "1001", appMode: "Online", paymentStatus: "Paid", name: "Aarav Sharma", dob: "1995-05-12", gender: "Male", nationality: "Indian", qualification: "B.Arch - SPA Delhi (2018)", dateOfApp: "2026-03-01", hardcopyReceivedOn: "2026-03-05", regNumber: null, regDate: null, residentialAddress: "12 Vasant Vihar, Delhi", professionalAddress: "Studio X, Delhi", communicationAddress: "12 Vasant Vihar, Delhi", presidentApproveOn: null, additionalQualification: null, workflow_stage: "Pending_Clerk" },
    { id: "2", appNumber: "1002", appMode: "Offline", paymentStatus: "Paid", name: "Priya Desai", dob: "1994-11-23", gender: "Female", nationality: "Indian", qualification: "B.Arch - CEPT Ahmedabad (2017)", dateOfApp: "2026-03-02", hardcopyReceivedOn: "2026-03-10", regNumber: "CA/2026/1002", regDate: "2026-03-25", residentialAddress: "45 Navrangpura, Ahmedabad", professionalAddress: "Desai Architects", communicationAddress: "45 Navrangpura", presidentApproveOn: "2026-03-20", additionalQualification: "M.Arch", workflow_stage: "Approved" },
    { id: "3", appNumber: "1003", appMode: "Online", paymentStatus: "Unpaid", name: "Rohan Gupta", dob: "1996-02-14", gender: "Male", nationality: "Indian", qualification: "B.Arch - IIT Roorkee (2019)", dateOfApp: "2026-03-10", hardcopyReceivedOn: null, regNumber: null, regDate: null, residentialAddress: "14 Model Town, Roorkee", professionalAddress: "N/A", communicationAddress: "14 Model Town", presidentApproveOn: null, additionalQualification: null, workflow_stage: "Pending_Clerk" },
    { id: "4", appNumber: "1004", appMode: "Online", paymentStatus: "Paid", name: "Ananya Singh", dob: "1993-08-08", gender: "Female", nationality: "Indian", qualification: "B.Arch - NIT Trichy (2016)", dateOfApp: "2026-03-15", hardcopyReceivedOn: "2026-03-20", regNumber: null, regDate: null, residentialAddress: "Plot 8, Anna Nagar, Chennai", professionalAddress: "AS Design", communicationAddress: "Plot 8, Anna Nagar", presidentApproveOn: null, additionalQualification: null, workflow_stage: "Pending_HOD" },
    { id: "5", appNumber: "1005", appMode: "Offline", paymentStatus: "Unpaid", name: "Karan Patel", dob: "1997-01-30", gender: "Male", nationality: "Indian", qualification: "B.Arch - MSU Baroda (2020)", dateOfApp: "2026-03-18", hardcopyReceivedOn: null, regNumber: null, regDate: null, residentialAddress: "Tower B, Alkapuri", professionalAddress: "N/A", communicationAddress: "Tower B, Alkapuri", presidentApproveOn: null, additionalQualification: null, workflow_stage: "Rejected" },
    { id: "6", appNumber: "1006", appMode: "Online", paymentStatus: "Paid", name: "Neha Verma", dob: "1992-12-05", gender: "Female", nationality: "Indian", qualification: "B.Arch - JNAFAU (2015)", dateOfApp: "2026-03-20", hardcopyReceivedOn: "2026-03-22", regNumber: "CA/2026/1006", regDate: "2026-04-01", residentialAddress: "Jubilee Hills, Hyd", professionalAddress: "Verma & Associates", communicationAddress: "Jubilee Hills, Hyd", presidentApproveOn: "2026-03-28", additionalQualification: "Urban Design", workflow_stage: "Pending_Registrar" },
    { id: "7", appNumber: "1007", appMode: "Offline", paymentStatus: "Paid", name: "Vikram Malhotra", dob: "1995-09-17", gender: "Male", nationality: "Indian", qualification: "B.Arch - JJ College (2018)", dateOfApp: "2026-03-21", hardcopyReceivedOn: "2026-03-26", regNumber: null, regDate: null, residentialAddress: "Andheri West, Mumbai", professionalAddress: "Malhotra Studio", communicationAddress: "Andheri West", presidentApproveOn: null, additionalQualification: null, workflow_stage: "Pending_HOD" },
    { id: "8", appNumber: "1008", appMode: "Online", paymentStatus: "Paid", name: "Ishita Bose", dob: "1996-03-22", gender: "Female", nationality: "Indian", qualification: "B.Arch - Jadavpur Univ (2019)", dateOfApp: "2026-04-02", hardcopyReceivedOn: null, regNumber: null, regDate: null, residentialAddress: "Salt Lake, Kolkata", professionalAddress: "N/A", communicationAddress: "Salt Lake", presidentApproveOn: null, additionalQualification: null, workflow_stage: "Pending_Clerk" },
    { id: "9", appNumber: "1009", appMode: "Online", paymentStatus: "Unpaid", name: "Aditya Nair", dob: "1998-07-11", gender: "Male", nationality: "Indian", qualification: "B.Arch - CET Trivandrum (2021)", dateOfApp: "2026-04-05", hardcopyReceivedOn: null, regNumber: null, regDate: null, residentialAddress: "Pattom, Trivandrum", professionalAddress: "N/A", communicationAddress: "Pattom", presidentApproveOn: null, additionalQualification: null, workflow_stage: "Pending_President" },
    { id: "10", appNumber: "1010", appMode: "Offline", paymentStatus: "Paid", name: "Sneha Reddy", dob: "1994-04-04", gender: "Female", nationality: "Indian", qualification: "B.Arch - NIT Bhopal (2017)", dateOfApp: "2026-04-06", hardcopyReceivedOn: "2026-04-10", regNumber: "CA/2026/1010", regDate: "2026-04-12", residentialAddress: "Banjara Hills", professionalAddress: "Reddy Designs", communicationAddress: "Banjara Hills", presidentApproveOn: "2026-04-11", additionalQualification: null, workflow_stage: "Approved" },
    { id: "11", appNumber: "1011", appMode: "Online", paymentStatus: "Paid", name: "Siddharth Jain", dob: "1993-10-10", gender: "Male", nationality: "Indian", qualification: "B.Arch - MNIT Jaipur (2016)", dateOfApp: "2026-04-08", hardcopyReceivedOn: "2026-04-12", regNumber: null, regDate: null, residentialAddress: "Malviya Nagar, Jaipur", professionalAddress: "Jain & Co", communicationAddress: "Malviya Nagar", presidentApproveOn: null, additionalQualification: "Landscape Arch", workflow_stage: "Pending_Clerk" },
    { id: "12", appNumber: "1012", appMode: "Online", paymentStatus: "Unpaid", name: "Meera Menon", dob: "1997-06-15", gender: "Female", nationality: "Indian", qualification: "B.Arch - BMSCE Bangalore (2020)", dateOfApp: "2026-04-09", hardcopyReceivedOn: null, regNumber: null, regDate: null, residentialAddress: "Indiranagar, Blr", professionalAddress: "N/A", communicationAddress: "Indiranagar", presidentApproveOn: null, additionalQualification: null, workflow_stage: "Pending_Registrar" },
    { id: "13", appNumber: "1013", appMode: "Offline", paymentStatus: "Paid", name: "Amitabh Das", dob: "1991-01-20", gender: "Male", nationality: "Indian", qualification: "B.Arch - IIT Kharagpur (2014)", dateOfApp: "2026-04-10", hardcopyReceivedOn: "2026-04-12", regNumber: null, regDate: null, residentialAddress: "Park Street, Kolkata", professionalAddress: "AD Architects", communicationAddress: "Park Street", presidentApproveOn: null, additionalQualification: null, workflow_stage: "Pending_HOD" },
    { id: "14", appNumber: "1014", appMode: "Online", paymentStatus: "Paid", name: "Sanya Chawla", dob: "1995-08-30", gender: "Female", nationality: "Indian", qualification: "B.Arch - CCA Chandigarh (2018)", dateOfApp: "2026-04-11", hardcopyReceivedOn: null, regNumber: null, regDate: null, residentialAddress: "Sector 15, Chd", professionalAddress: "Chawla Assoc", communicationAddress: "Sector 15", presidentApproveOn: null, additionalQualification: null, workflow_stage: "Pending_Clerk" },
    { id: "15", appNumber: "1015", appMode: "Online", paymentStatus: "Paid", name: "Rahul Rana", dob: "1996-05-05", gender: "Male", nationality: "Indian", qualification: "B.Arch - SPA Delhi (2019)", dateOfApp: "2026-04-12", hardcopyReceivedOn: null, regNumber: "CA/2026/1015", regDate: "2026-04-14", residentialAddress: "Saket, Delhi", professionalAddress: "RR Studio", communicationAddress: "Saket", presidentApproveOn: "2026-04-13", additionalQualification: null, workflow_stage: "Pending_President" },
];

// Workflow stage advancement map
export const NEXT_STAGE: Record<string, WorkflowStage> = {
    Pending_Clerk: "Pending_HOD",
    Pending_HOD: "Pending_Registrar",
    Pending_Registrar: "Pending_President",
    Pending_President: "Approved",
};

// Which workflow_stage each role sees in their inbox
export const ROLE_TO_STAGE: Record<string, WorkflowStage[]> = {
    Clerk: ["Pending_Clerk"],
    HOD: ["Pending_HOD"],
    Registrar: ["Pending_Registrar"],
    President: ["Pending_President"],
    "Super Admin": ["Pending_Clerk", "Pending_HOD", "Pending_Registrar", "Pending_President", "Approved", "Rejected"],
};

interface AuthState {
    activeUser: SystemUser;
    allUsers: SystemUser[];
    applications: ApplicationRecord[];
    setActiveUser: (user: SystemUser) => void;
    addUser: (user: SystemUser) => void;
    updateUserFeatures: (userId: string, patch: Partial<Pick<SystemUser, "assigned_features" | "base_role" | "designation" | "department">>) => void;
    forwardApplication: (appId: string) => void;
    rejectApplication: (appId: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    activeUser: SUPER_ADMIN,
    allUsers: MOCK_SYSTEM_USERS,
    applications: INITIAL_APPLICATIONS,

    setActiveUser: (user) => set({ activeUser: user }),

    addUser: (user) => set((state) => ({ allUsers: [...state.allUsers, user] })),

    updateUserFeatures: (userId, patch) =>
        set((state) => {
            const updatedUsers = state.allUsers.map((u) =>
                u.id === userId ? { ...u, ...patch } : u
            );
            // If the currently impersonated user is the one being edited, update activeUser too
            const updatedActive =
                state.activeUser.id === userId
                    ? { ...state.activeUser, ...patch }
                    : state.activeUser;
            return { allUsers: updatedUsers, activeUser: updatedActive };
        }),

    forwardApplication: (appId) =>
        set((state) => ({
            applications: state.applications.map((app) => {
                if (app.id !== appId) return app;
                const next = NEXT_STAGE[app.workflow_stage];
                if (!next) return app;
                return { ...app, workflow_stage: next };
            }),
        })),

    rejectApplication: (appId) =>
        set((state) => ({
            applications: state.applications.map((app) =>
                app.id === appId ? { ...app, workflow_stage: "Rejected" } : app
            ),
        })),
}));
