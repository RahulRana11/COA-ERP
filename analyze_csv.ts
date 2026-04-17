import * as fs from 'fs';
import * as XLSX from 'xlsx';

// XLSX library handles CSVs too
const buf = fs.readFileSync('arch_data1.csv');
const wb = XLSX.read(buf, { type: 'buffer' });
const sheet = wb.Sheets[wb.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log("Total Rows:", data.length);
if (data.length > 0) {
    const headers = data[0] as string[];
    console.log("Headers List:");
    headers.forEach((h, i) => console.log(`${i}: ${h}`));
}
