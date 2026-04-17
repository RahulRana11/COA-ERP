import * as XLSX from 'xlsx';
import * as fs from 'fs';

const buf = fs.readFileSync('arch_data.xlsx');
const wb = XLSX.read(buf);
const sheet = wb.Sheets[wb.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log("Total Rows:", data.length);
const headers = data[0] as string[];
console.log("Headers List:");
headers.forEach((h, i) => console.log(`${i}: ${h}`));
