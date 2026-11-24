import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One kind, funny fortune for the houseplant on the windowsill,
// as if the plant itself were having its future told.
// 108 characters, one line, no trailing newline.
const FORTUNE =
  "Soon the morning sun will warm your leaves on this sill, and your keeper will swear you leaned in to listen.";

// Self-check before writing: 1 to 120 characters counting code points,
// single line, valid UTF-8, no surrounding white space.
const chars = [...FORTUNE];
if (chars.length < 1 || chars.length > 120) {
  console.error(`fortune must be 1-120 characters, got ${chars.length}`);
  process.exit(1);
}
if (FORTUNE.includes("\n") || FORTUNE.includes("\r")) {
  console.error("fortune must be a single line");
  process.exit(1);
}
if (FORTUNE.trim() !== FORTUNE) {
  console.error("fortune must have no surrounding white space");
  process.exit(1);
}
const bytes = Buffer.from(FORTUNE, "utf8");
if (bytes.toString("utf8") !== FORTUNE) {
  console.error("fortune is not valid UTF-8");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bytes);

// Read the bytes back and verify they match exactly.
const back = readFileSync("/output/entry.txt");
if (!back.equals(bytes)) {
  console.error("read-back mismatch: /output/entry.txt does not match");
  process.exit(1);
}
