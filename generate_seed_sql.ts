import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const escapeSql = (val: string | null | undefined) => {
    if (val === null || val === undefined) return 'NULL';
    return `'${val.replace(/'/g, "''")}'`;
};

async function generateSql() {
    const filePath = path.join(__dirname, 'arch_data1.csv');
    if (!fs.existsSync(filePath)) {
        console.error("CSV file not found:", filePath);
        return;
    }

    const sqlStatements: string[] = [];
    const pushSql = (sql: string) => sqlStatements.push(sql);

    // Initial SQL setup
    pushSql('-- Auto-generated Seed SQL for Legacy Architects Data --');
    pushSql('BEGIN;');
    
    // Create a temporary table or use CTEs? We'll just generate direct INSERTS.
    // For UUIDs, we can let Postgres generate them, but we need the profile ID for the addresses.
    // Because we need the ID, the best way in raw SQL is to use a CTE or use the RETURNING id in a transaction string.
    // Actually, we can generate a UUID dynamically here to link them easily!
    
    // We didn't import a uuid library, but we can make a simple random UUID generator.
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
            const regNo = row.reg_no?.trim();
            if (!regNo) return;

            const profileId = uuidv4();
            
            const first_name = escapeSql(row.a_fname?.trim() || 'Unknown');
            const middle_name = escapeSql(row.a_mname?.trim() || null);
            const last_name = escapeSql(row.a_lname?.trim() || '');
            const gender = escapeSql(mapGender(row.gender));
            const dob = escapeSql(parseDate(row.dob) || '1970-01-01');
            const email = escapeSql((row.r_email || row.p_email || '').trim() || null);
            const mobile = escapeSql(sanitizePhone(row.r_mobile || row.p_mobile) || null);
            const reg_date = escapeSql(parseDate(row.registration_date));
            const valid_date = escapeSql(parseDate(row.reg_validity_upto));
            const reg_no_esc = escapeSql(regNo);

            // Insert Profile
            pushSql(`
INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('${profileId}', ${reg_no_esc}, 'Mr', ${first_name}, ${middle_name}, ${last_name}, ${gender}, ${dob}, ${email}, ${mobile}, ${reg_date}, ${valid_date}, 'Active')
ON CONFLICT (registration_number) DO NOTHING;`);

            // Address logic
            const commAddr1 = row.c_addr || row.r_addr;
            const commPin = sanitizePhone(row.c_pincode || row.r_pincode);
            if (commAddr1) {
                pushSql(`
INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('${profileId}', 'Communication', ${escapeSql(commAddr1.trim())}, ${escapeSql(commPin || '000000')});`);
            }

            const permAddr1 = row.p_addr;
            const permPin = sanitizePhone(row.p_pincode);
            if (permAddr1) {
                pushSql(`
INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('${profileId}', 'Permanent', ${escapeSql(permAddr1.trim())}, ${escapeSql(permPin || '000000')});`);
            }
        })
        .on('end', () => {
            pushSql('COMMIT;');
            
            const outPath = path.join(__dirname, 'seed_data.sql');
            fs.writeFileSync(outPath, sqlStatements.join('\n'));
            console.log(`Generated SQL dump successfully at ${outPath}. Total lines: ${sqlStatements.length}`);
        });
}

generateSql();
