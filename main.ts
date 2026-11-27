// The Word You'd Delete From the Dictionary
//
// Pick: "irregardless"
//
// Why this word, and why the joke lands the instant it is gone:
//
//   1. It is not a word. It is a double negative wearing a dictionary
//      entry as a disguise: "ir-" + "regardless" says "not regardless",
//      which means "regardful" — the opposite of what anyone using it
//      means. Every use of it is a small confession.
//   2. Nobody loses anything. "Regardless" already exists and already
//      does the whole job, correctly, in fewer letters. Deleting
//      "irregardless" removes nothing from the language except the
//      argument about whether it counts as a word.
//   3. The dictionary itself would be relieved. The entry has spent a
//      century carrying a footnote that says "nonstandard" — a word the
//      dictionary apologises for while it prints it.
//   4. It is fresh: the field will be full of "moist". "Moist" is a
//      real word doing honest work; "irregardless" is a fake word
//      squatting in the dictionary rent-free.
//
// The program writes exactly one word, spelled correctly, with nothing
// else attached, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const word = "irregardless";

// The entry must be exactly one word, spelled correctly, with nothing
// added around it — so no trailing newline, no punctuation, no caption.
if (!/^[a-z]+$/.test(word)) throw new Error("entry must be one word");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
