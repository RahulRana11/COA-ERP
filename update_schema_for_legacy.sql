-- Add legacy specific columns
ALTER TABLE architect_profiles
ADD COLUMN IF NOT EXISTS registration_number VARCHAR(50) UNIQUE,
ADD COLUMN IF NOT EXISTS registration_date DATE,
ADD COLUMN IF NOT EXISTS validity_date DATE;

-- Make existing constraints forgiving for incomplete historical data
ALTER TABLE architect_profiles
ALTER COLUMN enrolment_no DROP NOT NULL,
ALTER COLUMN title DROP NOT NULL,
ALTER COLUMN father_name DROP NOT NULL,
ALTER COLUMN mother_name DROP NOT NULL,
ALTER COLUMN nationality DROP NOT NULL,
ALTER COLUMN email DROP NOT NULL,
ALTER COLUMN mobile DROP NOT NULL;

-- Make address constraints more forgiving as legacy data is lacking fields
ALTER TABLE architect_addresses
ALTER COLUMN country DROP NOT NULL,
ALTER COLUMN state DROP NOT NULL,
ALTER COLUMN district DROP NOT NULL,
ALTER COLUMN city DROP NOT NULL;
