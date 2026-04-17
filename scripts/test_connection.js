
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;

console.log("Testing connection with:");
console.log("URL:", SUPABASE_URL);
console.log("Key:", SUPABASE_KEY ? SUPABASE_KEY.substring(0, 10) + "..." : "MISSING");

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testConnection() {
    console.log("Attempting to fetch 1 record from registration_applications...");
    const { data, error } = await supabase
        .from('registration_applications')
        .select(`
            id,
            application_reference_number,
            status,
            submission_date,
            architect_profiles (
                first_name,
                last_name,
                registration_number
            )
        `)
        .limit(1);

    if (error) {
        console.error("Query Failed:", error);
    } else {
        console.log("Query Successful! Data:", JSON.stringify(data, null, 2));
    }
}

testConnection();
