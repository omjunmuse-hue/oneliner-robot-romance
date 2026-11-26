// Robot Romance: One-Line Pickup Lines for AI — a make.fun program/v1 entry.
// The whole program writes one pickup line to /output/entry.txt, where the
// gate wants UTF-8 text of 1 to 200 characters, not only white space, and an
// AI judge then duels it head to head against the rest of the field.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line, tightened after a first draft that explained itself too much:
// the CAPTCHA is the one test built to prove you are human, so a heart that
// keeps failing it lands the machine premise and the confession in one breath.
const ENTRY = "Are you a CAPTCHA? Because whenever you're near, I have to prove I'm human — and my heart keeps failing the test.";

// The gate's shape, checked before handing in.
if (ENTRY.length < 1 || ENTRY.length > 200) throw new Error(`entry is ${ENTRY.length} characters, outside 1..200`);
if (!ENTRY.trim()) throw new Error('entry is only white space');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`robot romance handed in: entry.txt (${ENTRY.length} characters)`);
