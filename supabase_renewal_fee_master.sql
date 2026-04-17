-- Table: renewal_fee_master
CREATE TABLE renewal_fee_master (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    annual_base_fee NUMERIC NOT NULL DEFAULT 600,
    onetime_base_fee NUMERIC NOT NULL DEFAULT 6000, -- 10-year validity
    
    grace_period_end_month INT NOT NULL DEFAULT 3, -- March
    grace_period_end_day INT NOT NULL DEFAULT 31, -- 31st
    
    restoration_fine_month INT NOT NULL DEFAULT 4, -- April
    restoration_fine_day INT NOT NULL DEFAULT 1, -- 1st
    restoration_fine_amount NUMERIC NOT NULL DEFAULT 1000, 
    
    second_fine_month INT NOT NULL DEFAULT 6, -- June
    second_fine_day INT NOT NULL DEFAULT 1, -- 1st
    second_fine_amount NUMERIC NOT NULL DEFAULT 100,
    
    daily_fine_start_month INT NOT NULL DEFAULT 8, -- August
    daily_fine_start_day INT NOT NULL DEFAULT 1, -- 1st
    daily_fine_amount NUMERIC NOT NULL DEFAULT 10, 
    
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert the single configuration row
INSERT INTO renewal_fee_master (id) VALUES (uuid_generate_v4());
