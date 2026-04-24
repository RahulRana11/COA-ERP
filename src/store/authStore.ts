import { create } from "zustand";

// ── Stage permission strings (source of truth) ────────────────────────────────
export const STAGE_FEATURES = [
    "Stage 1: Application Processing",
    "Stage 2: Application Under Scrutiny",
    "Stage 3: Generate Registration Number",
    "Stage 4: Generate Certificate",
] as const;

export type StageFeature = typeof STAGE_FEATURES[number];
export const STAGE_FEATURES_SET = new Set<string>(STAGE_FEATURES);

/** Map from permission string → internal WorkflowStage key */
export const STAGE_FEATURE_TO_STAGE: Record<StageFeature, WorkflowStage> = {
    "Stage 1: Application Processing":      "Stage_1_Processing",
    "Stage 2: Application Under Scrutiny":  "Stage_2_Scrutiny",
    "Stage 3: Generate Registration Number":"Stage_3_RegNo",
    "Stage 4: Generate Certificate":        "Stage_4_Certificate",
};

/** Derive the workflow stage a user can act on from their assigned_features */
export function getUserStage(assigned_features: string[]): WorkflowStage | null {
    for (const feat of STAGE_FEATURES) {
        if (assigned_features.includes(feat)) return STAGE_FEATURE_TO_STAGE[feat];
    }
    return null; // Super Admin or unset — no stage restriction
}

// ── Types ─────────────────────────────────────────────────────────────────────

export type WorkflowStage =
    | "Stage_1_Processing"
    | "Stage_2_Scrutiny"
    | "Stage_3_RegNo"
    | "Stage_4_Certificate"
    | "Approved"
    | "Rejected"
    | "Query_Raised";

export interface AuditTrailEntry {
    actor: string;
    action: string;
    remarks: string;
    timestamp: string;
}

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
    enrolmentNumber: string | null;
    workflow_stage: WorkflowStage;
    audit_trail: AuditTrailEntry[];
    isVerified?: boolean;
}

// ── Hardcoded Super Admin ─────────────────────────────────────────────────────

export const SUPER_ADMIN: SystemUser = {
    id: "super-admin-001",
    fullName: "Super Admin",
    designation: "System Administrator",
    department: "IT & Systems",
    base_role: "Super Admin",
    emailAddress: "admin@coa.gov.in",
    assigned_features: [],
    avatarInitials: "SA",
};

// ── Mock system users ─────────────────────────────────────────────────────────

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
            "Stage 1: Application Processing",
            "Offline Application Addition",
            "Generate ID Card",
            "Search Architect and Communication",
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
            "Stage 2: Application Under Scrutiny",
            "Edit Application Details",
            "Approved Applications",
            "Rejected Applications",
            "Issue and dispatch certificate and ID Card",
            "Defaulters",
            "Inactive Architects",
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
            "Stage 3: Generate Registration Number",
            "Edit Application Details",
            "Approved Applications",
            "Rejected Applications",
            "Issue and dispatch certificate and ID Card",
            "Defaulters",
            "Inactive Architects",
            "Architect Renewal Directory",
            "Renewal Fee Master",
            "Account Details",
            "Generate DRR",
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
            "Stage 4: Generate Certificate",
            "Approved Applications",
            "Rejected Applications",
            "Architect Renewal Directory",
            "Account Details",
            "Generate DRR",
        ],
    },
];

// ── Workflow stage advancement ─────────────────────────────────────────────────

export const NEXT_STAGE: Record<string, WorkflowStage> = {
    Stage_1_Processing:   "Stage_2_Scrutiny",
    Stage_2_Scrutiny:     "Stage_3_RegNo",
    Stage_3_RegNo:        "Stage_4_Certificate",
    Stage_4_Certificate:  "Approved",
};

/** Which stages each internal workflow stage can revert TO */
export const REVERT_STAGE: Record<string, WorkflowStage> = {
    Stage_2_Scrutiny:    "Stage_1_Processing",
    Stage_3_RegNo:       "Stage_2_Scrutiny",
    Stage_4_Certificate: "Stage_3_RegNo",
};

/** Readable labels for stages */
export const STAGE_LABELS: Record<string, string> = {
    Stage_1_Processing:   "Stage 1 — Application Processing",
    Stage_2_Scrutiny:     "Stage 2 — Under Scrutiny",
    Stage_3_RegNo:        "Stage 3 — Generate Reg. Number",
    Stage_4_Certificate:  "Stage 4 — Generate Certificate",
    Approved:             "Approved",
    Rejected:             "Removed from Portal",
    Query_Raised:         "Query Raised to Applicant",
};

export const STAGE_COLORS: Record<string, string> = {
    Stage_1_Processing:   "bg-yellow-100 text-yellow-800 border-yellow-300",
    Stage_2_Scrutiny:     "bg-orange-100 text-orange-800 border-orange-300",
    Stage_3_RegNo:        "bg-blue-100 text-blue-800 border-blue-300",
    Stage_4_Certificate:  "bg-purple-100 text-purple-800 border-purple-300",
    Approved:             "bg-green-100 text-green-800 border-green-300",
    Rejected:             "bg-red-100 text-red-800 border-red-300",
    Query_Raised:         "bg-amber-100 text-amber-800 border-amber-300",
};

// ── Which workflow_stage each internal stage user sees ────────────────────────

export const ROLE_TO_STAGE: Record<string, WorkflowStage[]> = {
    Clerk:       ["Stage_1_Processing", "Query_Raised"],
    HOD:         ["Stage_2_Scrutiny"],
    Registrar:   ["Stage_3_RegNo"],
    President:   ["Stage_4_Certificate"],
    "Super Admin": ["Stage_1_Processing", "Stage_2_Scrutiny", "Stage_3_RegNo", "Stage_4_Certificate", "Approved", "Rejected", "Query_Raised"],
};

// ── Mock application pool ─────────────────────────────────────────────────────

function ts(offset = 0) {
    const d = new Date("2026-04-21T09:00:00Z");
    d.setDate(d.getDate() - offset);
    return d.toISOString();
}

export const INITIAL_APPLICATIONS: ApplicationRecord[] = [
    {
        id: "1", appNumber: "1001", appMode: "Online", paymentStatus: "Paid",
        name: "Aarav Sharma", dob: "1995-05-12", gender: "Male", nationality: "Indian",
        qualification: "B.Arch - SPA Delhi (2018)", dateOfApp: "2026-03-01",
        hardcopyReceivedOn: "2026-03-05", regNumber: null, regDate: null,
        residentialAddress: "12 Vasant Vihar, Delhi", professionalAddress: "Studio X, Delhi",
        communicationAddress: "12 Vasant Vihar, Delhi", presidentApproveOn: null,
        additionalQualification: null, enrolmentNumber: "ENR/2026/001",
        workflow_stage: "Stage_1_Processing",
        audit_trail: [],
    },
    {
        id: "2", appNumber: "1002", appMode: "Offline", paymentStatus: "Paid",
        name: "Priya Desai", dob: "1994-11-23", gender: "Female", nationality: "Indian",
        qualification: "B.Arch - CEPT Ahmedabad (2017)", dateOfApp: "2026-03-02",
        hardcopyReceivedOn: "2026-03-10", regNumber: "CA/2026/01002", regDate: "2026-03-25",
        residentialAddress: "45 Navrangpura, Ahmedabad", professionalAddress: "Desai Architects",
        communicationAddress: "45 Navrangpura", presidentApproveOn: "2026-03-20",
        additionalQualification: "M.Arch", enrolmentNumber: "ENR/2026/002",
        workflow_stage: "Approved",
        audit_trail: [
            { actor: "Amit Sharma", action: "Forwarded to Scrutiny", remarks: "All documents verified.", timestamp: ts(18) },
            { actor: "Priya Desai", action: "Forwarded to Registrar", remarks: "Scrutiny complete, no issues.", timestamp: ts(15) },
            { actor: "Sushil Kumar", action: "Reg. No. Allotted & Forwarded", remarks: "CA/2026/01002 generated.", timestamp: ts(10) },
            { actor: "Dr. Rajiv Mishra", action: "Final Approval", remarks: "Certificate issued.", timestamp: ts(5) },
        ],
    },
    {
        id: "3", appNumber: "1003", appMode: "Online", paymentStatus: "Unpaid",
        name: "Rohan Gupta", dob: "1996-02-14", gender: "Male", nationality: "Indian",
        qualification: "B.Arch - IIT Roorkee (2019)", dateOfApp: "2026-03-10",
        hardcopyReceivedOn: null, regNumber: null, regDate: null,
        residentialAddress: "14 Model Town, Roorkee", professionalAddress: "N/A",
        communicationAddress: "14 Model Town", presidentApproveOn: null,
        additionalQualification: null, enrolmentNumber: null,
        workflow_stage: "Stage_1_Processing",
        audit_trail: [],
    },
    {
        id: "4", appNumber: "1004", appMode: "Online", paymentStatus: "Paid",
        name: "Ananya Singh", dob: "1993-08-08", gender: "Female", nationality: "Indian",
        qualification: "B.Arch - NIT Trichy (2016)", dateOfApp: "2026-03-15",
        hardcopyReceivedOn: "2026-03-20", regNumber: null, regDate: null,
        residentialAddress: "Plot 8, Anna Nagar, Chennai", professionalAddress: "AS Design",
        communicationAddress: "Plot 8, Anna Nagar", presidentApproveOn: null,
        additionalQualification: null, enrolmentNumber: "ENR/2026/004",
        workflow_stage: "Stage_2_Scrutiny",
        audit_trail: [
            { actor: "Amit Sharma", action: "Forwarded to Scrutiny", remarks: "Documents received and verified.", timestamp: ts(5) },
        ],
    },
    {
        id: "5", appNumber: "1005", appMode: "Offline", paymentStatus: "Unpaid",
        name: "Karan Patel", dob: "1997-01-30", gender: "Male", nationality: "Indian",
        qualification: "B.Arch - MSU Baroda (2020)", dateOfApp: "2026-03-18",
        hardcopyReceivedOn: null, regNumber: null, regDate: null,
        residentialAddress: "Tower B, Alkapuri", professionalAddress: "N/A",
        communicationAddress: "Tower B, Alkapuri", presidentApproveOn: null,
        additionalQualification: null, enrolmentNumber: null,
        workflow_stage: "Rejected",
        audit_trail: [
            { actor: "Amit Sharma", action: "Removed from Portal", remarks: "Payment not received. Duplicate application.", timestamp: ts(3) },
        ],
    },
    {
        id: "6", appNumber: "1006", appMode: "Online", paymentStatus: "Paid",
        name: "Neha Verma", dob: "1992-12-05", gender: "Female", nationality: "Indian",
        qualification: "B.Arch - JNAFAU (2015)", dateOfApp: "2026-03-20",
        hardcopyReceivedOn: "2026-03-22", regNumber: null, regDate: null,
        residentialAddress: "Jubilee Hills, Hyd", professionalAddress: "Verma & Associates",
        communicationAddress: "Jubilee Hills, Hyd", presidentApproveOn: null,
        additionalQualification: "Urban Design", enrolmentNumber: "ENR/2026/006",
        workflow_stage: "Stage_3_RegNo",
        audit_trail: [
            { actor: "Amit Sharma", action: "Forwarded to Scrutiny", remarks: "Hardcopy received.", timestamp: ts(10) },
            { actor: "Priya Desai", action: "Forwarded to Registrar", remarks: "All details verified.", timestamp: ts(6) },
        ],
    },
    {
        id: "7", appNumber: "1007", appMode: "Offline", paymentStatus: "Paid",
        name: "Vikram Malhotra", dob: "1995-09-17", gender: "Male", nationality: "Indian",
        qualification: "B.Arch - JJ College (2018)", dateOfApp: "2026-03-21",
        hardcopyReceivedOn: "2026-03-26", regNumber: null, regDate: null,
        residentialAddress: "Andheri West, Mumbai", professionalAddress: "Malhotra Studio",
        communicationAddress: "Andheri West", presidentApproveOn: null,
        additionalQualification: null, enrolmentNumber: "ENR/2026/007",
        workflow_stage: "Stage_2_Scrutiny",
        audit_trail: [
            { actor: "Amit Sharma", action: "Forwarded to Scrutiny", remarks: "Documents in order.", timestamp: ts(4) },
        ],
    },
    {
        id: "8", appNumber: "1008", appMode: "Online", paymentStatus: "Paid",
        name: "Ishita Bose", dob: "1996-03-22", gender: "Female", nationality: "Indian",
        qualification: "B.Arch - Jadavpur Univ (2019)", dateOfApp: "2026-04-02",
        hardcopyReceivedOn: null, regNumber: null, regDate: null,
        residentialAddress: "Salt Lake, Kolkata", professionalAddress: "N/A",
        communicationAddress: "Salt Lake", presidentApproveOn: null,
        additionalQualification: null, enrolmentNumber: "ENR/2026/008",
        workflow_stage: "Stage_1_Processing",
        audit_trail: [],
    },
    {
        id: "9", appNumber: "1009", appMode: "Online", paymentStatus: "Paid",
        name: "Aditya Nair", dob: "1998-07-11", gender: "Male", nationality: "Indian",
        qualification: "B.Arch - CET Trivandrum (2021)", dateOfApp: "2026-04-05",
        hardcopyReceivedOn: "2026-04-07", regNumber: null, regDate: null,
        residentialAddress: "Pattom, Trivandrum", professionalAddress: "N/A",
        communicationAddress: "Pattom", presidentApproveOn: null,
        additionalQualification: null, enrolmentNumber: "ENR/2026/009",
        workflow_stage: "Stage_4_Certificate",
        audit_trail: [
            { actor: "Amit Sharma", action: "Forwarded to Scrutiny", remarks: "Docs verified.", timestamp: ts(12) },
            { actor: "Priya Desai", action: "Forwarded to Registrar", remarks: "Scrutiny passed.", timestamp: ts(8) },
            { actor: "Sushil Kumar", action: "Reg. No. Allotted & Forwarded", remarks: "CA/2026/01009 generated.", timestamp: ts(4) },
        ],
    },
    {
        id: "10", appNumber: "1010", appMode: "Offline", paymentStatus: "Paid",
        name: "Sneha Reddy", dob: "1994-04-04", gender: "Female", nationality: "Indian",
        qualification: "B.Arch - NIT Bhopal (2017)", dateOfApp: "2026-04-06",
        hardcopyReceivedOn: "2026-04-10", regNumber: "CA/2026/01010", regDate: "2026-04-12",
        residentialAddress: "Banjara Hills", professionalAddress: "Reddy Designs",
        communicationAddress: "Banjara Hills", presidentApproveOn: "2026-04-11",
        additionalQualification: null, enrolmentNumber: "ENR/2026/010",
        workflow_stage: "Approved",
        audit_trail: [
            { actor: "Amit Sharma", action: "Forwarded to Scrutiny", remarks: "All clear.", timestamp: ts(14) },
            { actor: "Priya Desai", action: "Forwarded to Registrar", remarks: "No issues found.", timestamp: ts(10) },
            { actor: "Sushil Kumar", action: "Reg. No. Allotted & Forwarded", remarks: "Completed.", timestamp: ts(6) },
            { actor: "Dr. Rajiv Mishra", action: "Final Approval", remarks: "Certificate approved.", timestamp: ts(2) },
        ],
    },
    {
        id: "11", appNumber: "1011", appMode: "Online", paymentStatus: "Paid",
        name: "Siddharth Jain", dob: "1993-10-10", gender: "Male", nationality: "Indian",
        qualification: "B.Arch - MNIT Jaipur (2016)", dateOfApp: "2026-04-08",
        hardcopyReceivedOn: "2026-04-12", regNumber: null, regDate: null,
        residentialAddress: "Malviya Nagar, Jaipur", professionalAddress: "Jain & Co",
        communicationAddress: "Malviya Nagar", presidentApproveOn: null,
        additionalQualification: "Landscape Arch", enrolmentNumber: "ENR/2026/011",
        workflow_stage: "Stage_1_Processing",
        audit_trail: [],
    },
    {
        id: "12", appNumber: "1012", appMode: "Online", paymentStatus: "Paid",
        name: "Meera Menon", dob: "1997-06-15", gender: "Female", nationality: "Indian",
        qualification: "B.Arch - BMSCE Bangalore (2020)", dateOfApp: "2026-04-09",
        hardcopyReceivedOn: "2026-04-13", regNumber: null, regDate: null,
        residentialAddress: "Indiranagar, Blr", professionalAddress: "N/A",
        communicationAddress: "Indiranagar", presidentApproveOn: null,
        additionalQualification: null, enrolmentNumber: "ENR/2026/012",
        workflow_stage: "Stage_3_RegNo",
        audit_trail: [
            { actor: "Amit Sharma", action: "Forwarded to Scrutiny", remarks: "Complete submission.", timestamp: ts(7) },
            { actor: "Priya Desai", action: "Forwarded to Registrar", remarks: "Verified successfully.", timestamp: ts(3) },
        ],
    },
    {
        id: "13", appNumber: "1013", appMode: "Offline", paymentStatus: "Paid",
        name: "Amitabh Das", dob: "1991-01-20", gender: "Male", nationality: "Indian",
        qualification: "B.Arch - IIT Kharagpur (2014)", dateOfApp: "2026-04-10",
        hardcopyReceivedOn: "2026-04-12", regNumber: null, regDate: null,
        residentialAddress: "Park Street, Kolkata", professionalAddress: "AD Architects",
        communicationAddress: "Park Street", presidentApproveOn: null,
        additionalQualification: null, enrolmentNumber: "ENR/2026/013",
        workflow_stage: "Stage_2_Scrutiny",
        audit_trail: [
            { actor: "Amit Sharma", action: "Forwarded to Scrutiny", remarks: "Physical documents verified.", timestamp: ts(4) },
            { actor: "Sushil Kumar", action: "Reverted to Under Scrutiny", remarks: "Marksheet is slightly blurred, please verify again.", timestamp: ts(1) },
        ],
    },
    {
        id: "14", appNumber: "1014", appMode: "Online", paymentStatus: "Paid",
        name: "Sanya Chawla", dob: "1995-08-30", gender: "Female", nationality: "Indian",
        qualification: "B.Arch - CCA Chandigarh (2018)", dateOfApp: "2026-04-11",
        hardcopyReceivedOn: null, regNumber: null, regDate: null,
        residentialAddress: "Sector 15, Chd", professionalAddress: "Chawla Assoc",
        communicationAddress: "Sector 15", presidentApproveOn: null,
        additionalQualification: null, enrolmentNumber: "ENR/2026/014",
        workflow_stage: "Query_Raised",
        audit_trail: [
            { actor: "Priya Desai", action: "Query Raised to Applicant", remarks: "B.Arch marksheet missing. Applicant notified via portal.", timestamp: ts(1) },
        ],
    },
    {
        id: "15", appNumber: "1015", appMode: "Online", paymentStatus: "Paid",
        name: "Rahul Rana", dob: "1996-05-05", gender: "Male", nationality: "Indian",
        qualification: "B.Arch - SPA Delhi (2019)", dateOfApp: "2026-04-12",
        hardcopyReceivedOn: "2026-04-14", regNumber: null, regDate: null,
        residentialAddress: "Saket, Delhi", professionalAddress: "RR Studio",
        communicationAddress: "Saket", presidentApproveOn: null,
        additionalQualification: null, enrolmentNumber: "ENR/2026/015",
        workflow_stage: "Stage_4_Certificate",
        audit_trail: [
            { actor: "Amit Sharma", action: "Forwarded to Scrutiny", remarks: "All docs present.", timestamp: ts(9) },
            { actor: "Priya Desai", action: "Forwarded to Registrar", remarks: "Scrutiny clear.", timestamp: ts(6) },
            { actor: "Sushil Kumar", action: "Reg. No. Allotted & Forwarded", remarks: "CA/2026/01015 generated.", timestamp: ts(2) },
        ],
    },
];

// ── Store interface ───────────────────────────────────────────────────────────

interface AuthState {
    activeUser: SystemUser;
    allUsers: SystemUser[];
    applications: ApplicationRecord[];
    setActiveUser: (user: SystemUser) => void;
    addUser: (user: SystemUser) => void;
    updateUserFeatures: (userId: string, patch: Partial<Pick<SystemUser, "assigned_features" | "base_role" | "designation" | "department">>) => void;
    /** Stage 1 → Stage 2, Stage 2 → Stage 3, etc. Final stage → Approved */
    forwardApplication: (appId: string, actorName: string) => void;
    /** Allot CA/YYYY/XXXXX reg number and advance from Stage 3 → Stage 4 */
    allotRegNumberAndForward: (appId: string, actorName: string) => void;
    /** Reduce stage by one tier, appending remark to audit trail */
    revertApplication: (appId: string, targetStage: WorkflowStage, remarks: string, actorName: string) => void;
    /** Set stage to Query_Raised, append remark */
    raiseQuery: (appId: string, remarks: string, actorName: string) => void;
    /** Soft-delete — sets stage to Rejected, appends remark */
    removeFromPortal: (appId: string, actorName: string, remarks?: string) => void;
    /** Final approval by Stage 4 */
    finalApprove: (appId: string, actorName: string) => void;
    /** Toggle verification status of an application */
    setApplicationVerified: (appId: string, verified: boolean) => void;
}

// ── Store implementation ──────────────────────────────────────────────────────

function nowISO() { return new Date().toISOString(); }

export const useAuthStore = create<AuthState>((set, get) => ({
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
            const updatedActive =
                state.activeUser.id === userId
                    ? { ...state.activeUser, ...patch }
                    : state.activeUser;
            return { allUsers: updatedUsers, activeUser: updatedActive };
        }),

    forwardApplication: (appId, actorName) =>
        set((state) => ({
            applications: state.applications.map((app) => {
                if (app.id !== appId) return app;
                const next = NEXT_STAGE[app.workflow_stage];
                if (!next) return app;
                const entry: AuditTrailEntry = {
                    actor: actorName,
                    action: `Forwarded to ${STAGE_LABELS[next] ?? next}`,
                    remarks: "Application forwarded.",
                    timestamp: nowISO(),
                };
                return { ...app, workflow_stage: next, audit_trail: [...app.audit_trail, entry] };
            }),
        })),

    allotRegNumberAndForward: (appId, actorName) =>
        set((state) => ({
            applications: state.applications.map((app) => {
                if (app.id !== appId) return app;
                const year = new Date().getFullYear();
                const seqPadded = app.appNumber.padStart(5, "0");
                const regNumber = `CA/${year}/${seqPadded}`;
                const regDate = new Date().toISOString().slice(0, 10);
                const entry: AuditTrailEntry = {
                    actor: actorName,
                    action: "Reg. Number Allotted & Forwarded to Stage 4",
                    remarks: `Registration number ${regNumber} generated.`,
                    timestamp: nowISO(),
                };
                return {
                    ...app,
                    workflow_stage: "Stage_4_Certificate",
                    regNumber,
                    regDate,
                    audit_trail: [...app.audit_trail, entry],
                };
            }),
        })),

    revertApplication: (appId, targetStage, remarks, actorName) =>
        set((state) => ({
            applications: state.applications.map((app) => {
                if (app.id !== appId) return app;
                const entry: AuditTrailEntry = {
                    actor: actorName,
                    action: `Reverted to ${STAGE_LABELS[targetStage] ?? targetStage}`,
                    remarks,
                    timestamp: nowISO(),
                };
                return { ...app, workflow_stage: targetStage, audit_trail: [...app.audit_trail, entry] };
            }),
        })),

    raiseQuery: (appId, remarks, actorName) =>
        set((state) => ({
            applications: state.applications.map((app) => {
                if (app.id !== appId) return app;
                const entry: AuditTrailEntry = {
                    actor: actorName,
                    action: "Query Raised to Applicant",
                    remarks,
                    timestamp: nowISO(),
                };
                return { ...app, workflow_stage: "Query_Raised", audit_trail: [...app.audit_trail, entry] };
            }),
        })),

    removeFromPortal: (appId, actorName, remarks = "Removed from portal.") =>
        set((state) => ({
            applications: state.applications.map((app) => {
                if (app.id !== appId) return app;
                const entry: AuditTrailEntry = {
                    actor: actorName,
                    action: "Removed from Portal",
                    remarks,
                    timestamp: nowISO(),
                };
                return { ...app, workflow_stage: "Rejected", audit_trail: [...app.audit_trail, entry] };
            }),
        })),

    finalApprove: (appId, actorName) =>
        set((state) => ({
            applications: state.applications.map((app) => {
                if (app.id !== appId) return app;
                const entry: AuditTrailEntry = {
                    actor: actorName,
                    action: "Final Approval — Certificate & ID Issued",
                    remarks: "Application formally approved. Certificate and ID Card to be dispatched.",
                    timestamp: nowISO(),
                };
                return {
                    ...app,
                    workflow_stage: "Approved",
                    presidentApproveOn: new Date().toISOString().slice(0, 10),
                    audit_trail: [...app.audit_trail, entry],
                };
            }),
        })),
    setApplicationVerified: (appId, verified) =>
        set((state) => ({
            applications: state.applications.map((app) =>
                app.id === appId ? { ...app, isVerified: verified } : app
            ),
        })),
}));
