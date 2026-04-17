import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomStatus(options: string[]) {
    return options[getRandomInt(0, options.length - 1)];
}

async function runSeed() {
    console.log("Fetching architect profiles...");
    const { data: profiles, error: fetchError } = await supabase
        .from('architect_profiles')
        .select('id, registration_number, validity_date')
        .limit(150);

    if (fetchError || !profiles || profiles.length === 0) {
        console.error("Failed to fetch profiles. Error:", fetchError?.message);
        return;
    }

    console.log(`Working with a batch of ${profiles.length} profiles.`);

    // 1. Defaulter List
    const defaultersCount = 20;
    const defaulterProfiles = profiles.slice(0, defaultersCount);
    let updatedDefaulters = 0;
    for (const p of defaulterProfiles) {
        // Backdate to 2023 to force past-due logic naturally
        const { error: updErr } = await supabase
            .from('architect_profiles')
            .update({ validity_date: '2023-12-31', registration_status: 'Defaulter' })
            .eq('id', p.id);
        if (!updErr) updatedDefaulters++;
    }
    console.log(`✅ Set ${updatedDefaulters} records as Defaulters.`);

    // 2. Registration Applications (For tracking history basically, or pending new ones)
    let addedApplications = 0;
    const applicationPool = profiles.slice(defaultersCount, defaultersCount + 40);
    const regStatuses = ['Submitted', 'Under Review', 'Query Raised', 'Approved', 'Rejected'];

    for (const p of applicationPool) {
        const refNum = `APP-${new Date().getFullYear()}-${getRandomInt(1000, 9999)}`;
        const { error: insErr } = await supabase
            .from('registration_applications')
            .insert({
                profile_id: p.id,
                application_reference_number: refNum,
                status: getRandomStatus(regStatuses),
                photograph_url: `https://dummyimage.com/200x250/ccc/000.png&text=Photo+${p.registration_number}`,
                signature_url: `https://dummyimage.com/300x100/ccc/000.png&text=Signature+${p.registration_number}`,
                declaration_accepted: true,
            });
        if (!insErr) addedApplications++;
    }
    console.log(`✅ Inserted ${addedApplications} Registration Applications.`);

    // 3. Post-Registration Services
    let addedRenewals = 0;
    let addedRestorations = 0;
    let addedAdHoc = 0;

    const postRegStatuses = ['Submitted', 'Under Review', 'Approved', 'Rejected'];

    // Splitting remaining profiles
    const renewalPool = profiles.slice(defaultersCount + 40, defaultersCount + 70);
    for (const p of renewalPool) {
        const payload = {
            declaration: true,
            additional_comments: "Mock Renewal Submission"
        };
        const { error } = await supabase
            .from('post_registration_requests')
            .insert({
                profile_id: p.id,
                request_type: 'Renewal',
                status: getRandomStatus(postRegStatuses),
                request_payload: payload
            });
        if (!error) addedRenewals++;
    }

    // Creating Restorations (Using some of the defaulters to make it realistic)
    const restorationPool = defaulterProfiles.slice(0, 10);
    for (const p of restorationPool) {
        const payload = {
            reason: "Mock Restoration reasoning due to delayed payment.",
            penalty_paid: true
        };
        const { error } = await supabase
            .from('post_registration_requests')
            .insert({
                profile_id: p.id,
                request_type: 'Restoration',
                status: getRandomStatus(postRegStatuses),
                request_payload: payload
            });
        if (!error) addedRestorations++;
    }

    // Other ad-hoc sub modules (Name Change, Address Update)
    const adHocPool = profiles.slice(defaultersCount + 80, defaultersCount + 100);
    const adHocTypes = ['Name Change', 'Duplicate Certificate', 'Address Update'];
    for (const p of adHocPool) {
        const type = getRandomStatus(adHocTypes);
        const payload = { details: `Requested ${type} at ${new Date().toISOString()}` };

        const { error } = await supabase
            .from('post_registration_requests')
            .insert({
                profile_id: p.id,
                request_type: type,
                status: getRandomStatus(postRegStatuses),
                request_payload: payload
            });
        if (!error) addedAdHoc++;
    }

    console.log(`✅ Inserted ${addedRenewals} Renewals.`);
    console.log(`✅ Inserted ${addedRestorations} Restorations.`);
    console.log(`✅ Inserted ${addedAdHoc} Other Serivces (Name/Address/Duplicate).`);

    console.log("\nDummy Generation Complete!");
}

runSeed();
