// Runs as the npm "version" lifecycle (via @semantic-release/npm) so CITATION.cff tracks releases.
import { readFileSync, writeFileSync } from 'node:fs';

const { version } = JSON.parse(readFileSync('package.json', 'utf8'));
const today = new Date().toISOString().slice(0, 10);
const cff = readFileSync('CITATION.cff', 'utf8')
  .replace(/^version: .*$/m, `version: ${version}`)
  .replace(/^date-released: .*$/m, `date-released: '${today}'`);
writeFileSync('CITATION.cff', cff);
