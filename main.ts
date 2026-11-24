// This entry writes the answer for One Line, One Chill to the output directory.
// It resolves the target directory from MAKEFUN_OUTPUT_DIR, falling back to /output,
// then writes the single-line answer to entry.txt as UTF-8 with no trailing newline.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "My agent scheduled a five-minute break and then wrote a forty-step plan for taking it. Relaxation has a ticket number now.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
