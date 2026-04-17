
import { createClient } from '@supabase/supabase-js';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Load .env from project root
dotenv.config();

// Try to use Service Role Key first (bypasses RLS), otherwise Anon Key
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("Missing credentials. Please check .env");
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function seed() {
    console.log("Starting seed process...");

    try {
        const buf = fs.readFileSync('arch_data1.csv'); // Updated source file
        const wb = XLSX.read(buf, { type: 'buffer' }); // Explicit buffer type for CSV safety
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(sheet);

        console.log(`Found ${data.length} records. Processing...`);

        const BATCH_SIZE = 50;
        for (let i = 0; i < data.length; i += BATCH_SIZE) {
            const batch = data.slice(i, i + BATCH_SIZE);

            const rowsToInsert = batch.map((row) => ({
                registration_number: row['reg_no'],
                first_name: row['a_fname'],
                middle_name: row['a_mname'],
                last_name: row['a_lname'],
                email: row['c_email'],
                mobile: row['c_mobile'],
                state: row['state'], // Verify this key exists in data, otherwise adjust
                city: row['p_addr'],  // Assuming 'place' maps to City based on context or similar check

                raw_data: row // Store full object
            }));

            const { error } = await supabase
                .from('architects')
                .upsert(rowsToInsert, { onConflict: 'registration_number' });

            if (error) {
                console.error(`Error inserting batch ${i / BATCH_SIZE + 1}:`, error);
            } else {
                console.log(`Inserted batch ${i / BATCH_SIZE + 1} (${rowsToInsert.length} records)`);
            }
        }

        console.log("Seeding complete!");

    } catch (e) {
        console.error("Error reading file or seeding:", e);
    }
}

seed();
