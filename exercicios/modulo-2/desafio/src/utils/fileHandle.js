import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, '..', '..', 'grades.json');

export async function readFile() {
  return JSON.parse(await fs.readFile(filePath));
}

export async function writeFile(content) {
  await fs.writeFile(filePath, JSON.stringify(content));
}
