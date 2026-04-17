-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: architect_profiles (Personal Details)
CREATE TABLE architect_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id), -- Nullable initially for hybrid testing
    enrolment_no VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(10) NOT NULL, -- Mr, Ms, Mrs, Dr, Prof
    first_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    last_name VARCHAR(100) NOT NULL,
    father_name VARCHAR(150) NOT NULL,
    mother_name VARCHAR(150) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(20) NOT NULL,
    nationality VARCHAR(50) NOT NULL,
    aadhaar_no VARCHAR(12) UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    mobile VARCHAR(15) NOT NULL UNIQUE,
    registration_status VARCHAR(50) DEFAULT 'Pending', 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: architect_addresses (Contact Details)
CREATE TABLE architect_addresses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES architect_profiles(id) ON DELETE CASCADE,
    address_type VARCHAR(20) NOT NULL, -- 'Communication' or 'Permanent'
    address_line1 TEXT NOT NULL,
    address_line2 TEXT,
    country VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: architect_academics (Qualifications)
CREATE TABLE architect_academics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES architect_profiles(id) ON DELETE CASCADE,
    qualification_level VARCHAR(50) NOT NULL, -- '10th', '12th', 'Diploma', 'B.Arch'
    board_university VARCHAR(255) NOT NULL,
    institution_college VARCHAR(255),
    year_of_passing INT NOT NULL,
    marks_cgpa_percentage VARCHAR(20) NOT NULL,
    document_url TEXT NOT NULL, -- Path to Supabase Storage
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: registration_applications (Workflow Tracking)
CREATE TABLE registration_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES architect_profiles(id) ON DELETE CASCADE,
    application_reference_number VARCHAR(100) UNIQUE NOT NULL,
    status VARCHAR(50) DEFAULT 'Submitted',
    photograph_url TEXT NOT NULL,
    signature_url TEXT NOT NULL,
    declaration_accepted BOOLEAN NOT NULL DEFAULT FALSE,
    submission_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
