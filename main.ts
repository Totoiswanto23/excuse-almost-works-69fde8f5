// The Excuse That Almost Works — make.fun bounty
// Writes the one line a gamer texts the boss to skip work on GTA 6
// launch week: a train cancelled, then the replacement bus breaking
// down halfway there. The manager almost believes the first half;
// the second half is one misfortune too many — that is the joke.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Boring, specific, hurried — and the excuse defeats itself by
// stacking a second failure on the first. Thirteen words, no setup,
// no explanation, no signature: a text sent in a hurry. The train
// part the manager buys; the bus breaking down is the tell.
const MESSAGE =
  "Sorry boss, my train's cancelled and the replacement bus broke down halfway here.";

const WORDS = MESSAGE.split(/\s+/).length;
if (WORDS < 1 || WORDS > 20 || MESSAGE.includes('\n')) {
  console.error(`excuse must be one line of 1-20 words, got ${WORDS}`);
  process.exit(1);
}
if (MESSAGE.length < 1 || MESSAGE.length > 140) {
  console.error(`excuse must be 1-140 characters, got ${MESSAGE.length}`);
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), MESSAGE);
console.log(`wrote ${WORDS} words, ${MESSAGE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
console.log(MESSAGE);
