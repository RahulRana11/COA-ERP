-- Phase A: Architect Registration Module (With Enrolment) Supabase Database Schema

CREATE TYPE application_status AS ENUM (
  'draft', 
  'submitted', 
  'under_review_clerk', 
  'under_review_hod', 
  'verified_registrar', 
  'approved', 
  'rejected',
  'query_raised'
);

CREATE TABLE architect_master_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID, -- For linking with Supabase Auth
    
    -- Step 1: Personal Details
    enrolment_number TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL CHECK (title IN ('Mr.', 'Ms.', 'Mrs.', 'Dr.')),
    first_name TEXT NOT NULL,
    middle_name TEXT,
    last_name TEXT NOT NULL,
    father_name TEXT NOT NULL,
    mother_name TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    gender TEXT NOT NULL CHECK (gender IN ('Male', 'Female', 'Other')),
    nationality TEXT NOT NULL DEFAULT 'Indian',
    aadhaar_number TEXT UNIQUE NOT NULL,
    
    -- Step 2: Contact Details
    email TEXT UNIQUE NOT NULL,
    mobile_number TEXT NOT NULL,
    -- Communication Address
    comm_address_line1 TEXT NOT NULL,
    comm_address_line2 TEXT,
    comm_city TEXT NOT NULL,
    comm_state TEXT NOT NULL,
    comm_pincode TEXT NOT NULL,
    -- Permanent Address
    is_permanent_same BOOLEAN DEFAULT FALSE,
    perm_address_line1 TEXT NOT NULL,
    perm_address_line2 TEXT,
    perm_city TEXT NOT NULL,
    perm_state TEXT NOT NULL,
    perm_pincode TEXT NOT NULL,
    
    -- Step 3: Academic Qualifications
    -- 10th
    tenth_board TEXT NOT NULL,
    tenth_year INTEGER NOT NULL,
    tenth_percentage NUMERIC NOT NULL,
    -- 12th / Diploma
    intermediate_type TEXT NOT NULL CHECK (intermediate_type IN ('12th', 'Diploma')),
    intermediate_board TEXT NOT NULL,
    intermediate_year INTEGER NOT NULL,
    intermediate_percentage NUMERIC NOT NULL,
    -- B.Arch
    barch_university TEXT NOT NULL,
    barch_college TEXT NOT NULL,
    barch_year INTEGER NOT NULL,
    barch_marks_type TEXT NOT NULL CHECK (barch_marks_type IN ('CGPA', 'Percentage')),
    barch_score NUMERIC NOT NULL,
    
    -- Step 4: Documents (Supabase Storage file URLs)
    doc_tenth_url TEXT,
    doc_intermediate_url TEXT,
    doc_barch_url TEXT,
    doc_photo_url TEXT,
    doc_signature_url TEXT,
    
    -- Workflow Tracking
    status application_status DEFAULT 'draft'::application_status NOT NULL,
    declarant_consent BOOLEAN DEFAULT FALSE,
    registration_number TEXT UNIQUE, -- Assigned upon final approval
    
    -- Timestamps
    submitted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Make sure updated_at is updated
CREATE OR REPLACE FUNCTION update_architect_master_data_modtime() 
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;   
END;
$$ language 'plpgsql';

CREATE TRIGGER trg_update_architect_master_data_modtime
    BEFORE UPDATE ON architect_master_data
    FOR EACH ROW
    EXECUTE PROCEDURE update_architect_master_data_modtime();

-- Temporarily bypass RLS for development
ALTER TABLE architect_master_data ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable all for development" ON architect_master_data FOR ALL USING (true) WITH CHECK (true);
