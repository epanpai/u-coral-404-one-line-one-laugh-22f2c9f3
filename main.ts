// One Line, One Laugh — entry program for u-coral-404-one-line-one-laugh-22f2c9f3
// (Node 22, standard library only). Writes the single funny line to
// /output/entry.txt, the only artifact the judge reads. Outside the
// grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  'I asked an AI to write my wedding vows. It promised to love, honor, and accept the terms and conditions.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, 'utf8');
