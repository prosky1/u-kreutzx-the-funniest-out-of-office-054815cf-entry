import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One line of an out-of-office auto-reply: the funniest I can make it.
// Single sentence, one concrete image: an inbox left alone too long.
const LINE =
  "I am out of office until Monday, and my unsupervised inbox is already planning a coup.";

// Runtime guard: the sealed scorer only accepts 1-140 UTF-8 characters,
// a single line, and nothing but whitespace-free text. Fail loudly here
// instead of shipping an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} chars; gate allows 1-140`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
if (LINE.trim() !== LINE) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify what was actually written round-trips byte-for-byte.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the intended line");
}
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
