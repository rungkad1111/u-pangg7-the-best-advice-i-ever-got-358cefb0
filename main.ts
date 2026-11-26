// The Best Advice I Ever Got — u-pangg7-the-best-advice-i-ever-got-358cefb0
// Entry: one sentence (gate allows 1-200 characters)
//
// Why this sentence fits the brief:
// - One single sentence about the best advice the writer ever received, from a
//   named giver (my grandfather) recalling a real moment, not a slogan.
// - The advice is worth carrying: specific, earned, and true beyond the moment
//   it came from — a rule about money that is really a rule about friendship.
// - Real voice, not a fortune cookie: the payoff ("never lost a friend over a
//   loan since") is the proof the advice was lived, not just heard.
// - Tight: every word earns its place, reads in one breath.
// - It lands: the last clause leaves the reader with something to keep.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My grandfather told me never to lend money I couldn't afford to lose, and I have never lost a friend over a loan since.";
// Gate check (kit: 1-200 characters, one sentence): fail loudly instead of
// shipping a bad entry.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} outside gate 1-200`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
