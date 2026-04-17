import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Setup environment and Supabase client
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.VITE_SUPABASE_ANON_KEY || ''; // Using anon key or service role key if available

if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Missing SUPABASE credentials in .env");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Parse dates safely
const parseDate = (dateStr: string) => {
    if (!dateStr) return null;
    try {
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return null;
        return d.toISOString().split('T')[0];
    } catch {
        return null;
    }
};

const mapGender = (val: string) => {
    if (val === '1') return 'Male';
    if (val === '2') return 'Female';
    return 'Other';
};

const sanitizePhone = (val: string) => {
    if (!val) return null;
    return val.replace(/\.0$/, '').trim();
};

async function processFile() {
    const filePath = path.join(__dirname, 'arch_data1.csv');
    if (!fs.existsSync(filePath)) {
        console.error("CSV file not found:", filePath);
        return;
    }

    const records: any[] = [];
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => records.push(data))
        .on('end', async () => {
            console.log(`Parsed ${records.length} records. Starting import...`);
            
            let successProfileCount = 0;
            let successAddrCount = 0;
            let errors = 0;

            for (const row of records) {
                try {
                    const regNo = row.reg_no?.trim();
                    if (!regNo) {
                        // Skip if no registration number
                        continue;
                    }

                    // Map architect_profiles
                    const profileData = {
                        registration_number: regNo,
                        title: 'Mr', // Default or could map from gender
                        first_name: row.a_fname?.trim() || 'Unknown',
                        middle_name: row.a_mname?.trim() || null,
                        last_name: row.a_lname?.trim() || '',
                        gender: mapGender(row.gender),
                        dob: parseDate(row.dob) || '1970-01-01',
                        email: (row.r_email || row.p_email || '').trim() || null,
                        mobile: sanitizePhone(row.r_mobile || row.p_mobile) || null,
                        registration_date: parseDate(row.registration_date),
                        validity_date: parseDate(row.reg_validity_upto),
                        registration_status: 'Active'
                    };

                    const { data: insertedProfile, error: profileError } = await supabase
                        .from('architect_profiles')
                        .upsert(profileData, { onConflict: 'registration_number' })
                        .select('id')
                        .single();

                    if (profileError) {
                        console.error(`Error inserting profile for ${regNo}:`, profileError.message);
                        errors++;
                        continue;
                    }

                    successProfileCount++;
                    const profileId = insertedProfile.id;

                    // Address mappings
                    const commAddr1 = row.c_addr || row.r_addr;
                    const commPin = sanitizePhone(row.c_pincode || row.r_pincode);

                    if (commAddr1) {
                        const { error: commAddrError } = await supabase
                            .from('architect_addresses')
                            .insert({
                                profile_id: profileId,
                                address_type: 'Communication',
                                address_line1: commAddr1.trim(),
                                pincode: commPin || '000000'
                            });
                        if (!commAddrError) successAddrCount++;
                    }

                    const permAddr1 = row.p_addr;
                    const permPin = sanitizePhone(row.p_pincode);

                    if (permAddr1) {
                        const { error: permAddrError } = await supabase
                            .from('architect_addresses')
                            .insert({
                                profile_id: profileId,
                                address_type: 'Permanent',
                                address_line1: permAddr1.trim(),
                                pincode: permPin || '000000'
                            });
                        if (!permAddrError) successAddrCount++;
                    }

                } catch (err: any) {
                    console.error("Exception processing row:", err.message);
                    errors++;
                }
            }

            console.log("Import Complete!");
            console.log(`Successfully upserted profiles: ${successProfileCount}`);
            console.log(`Successfully inserted addresses: ${successAddrCount}`);
            console.log(`Errors encountered: ${errors}`);
        });
}

processFile();
