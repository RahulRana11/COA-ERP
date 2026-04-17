-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: system_roles
CREATE TABLE system_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    role_name VARCHAR(100) UNIQUE NOT NULL, -- e.g., 'Super Admin', 'Clerk', 'HOD', 'Registrar', 'President'
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert Default FRS Roles
INSERT INTO system_roles (role_name, description) VALUES 
('Super Admin', 'Full system access and configuration'),
('Clerk', 'Preliminary scrutiny and document verification'),
('HOD', 'Departmental review and recommendations'),
('Registrar', 'Higher-level verification and compliance validation'),
('President', 'Final approving authority');

-- Table: internal_users (COA Officials & Admins)
CREATE TABLE internal_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id), -- Nullable initially for hybrid testing
    role_id UUID REFERENCES system_roles(id) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    designation VARCHAR(150) NOT NULL,
    department VARCHAR(150) NOT NULL,
    email_address VARCHAR(255) NOT NULL UNIQUE,
    mobile_number VARCHAR(15) NOT NULL UNIQUE,
    account_status VARCHAR(50) DEFAULT 'Active', -- Active, Inactive, Suspended
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
