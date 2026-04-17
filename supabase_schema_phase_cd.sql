-- ==========================================
-- PHASE C: Workflow & Audit Log
-- ==========================================
CREATE TABLE workflow_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID REFERENCES registration_applications(id) ON DELETE CASCADE,
    action_by UUID REFERENCES internal_users(id), -- The official taking the action
    from_stage VARCHAR(50) NOT NULL, -- e.g., 'Preliminary Scrutiny'
    to_stage VARCHAR(50) NOT NULL, -- e.g., 'Departmental Review'
    action_taken VARCHAR(50) NOT NULL, -- 'Forwarded', 'Query Raised', 'Approved', 'Rejected'
    remarks TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- PHASE D: Post-Registration Services
-- ==========================================
CREATE TABLE post_registration_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES architect_profiles(id) ON DELETE CASCADE,
    request_type VARCHAR(100) NOT NULL, -- 'Renewal', 'Duplicate Certificate', 'Name Change', 'Address Update'
    status VARCHAR(50) DEFAULT 'Submitted',
    request_payload JSONB NOT NULL, -- Flexible payload for different forms (e.g., new address details, reason for duplicate)
    supporting_doc_url TEXT, -- Optional, if the request requires a new upload
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
