import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = await readFile(resolve(root, "app/page.tsx"), "utf8");
const startMarker = "const copy = ";
const endMarker = "} as const;";
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker, start);

if (start < 0 || end < 0) {
  throw new Error("Could not find the privacy copy in app/page.tsx");
}

const literal = source.slice(start + startMarker.length, end + 1);
const copy = Function(`"use strict"; return (${literal});`)();
const css = (await readFile(resolve(root, "app/globals.css"), "utf8"))
  .replace(/^@import "tailwindcss";\s*/, "");

const docs = resolve(root, "docs");
await mkdir(docs, { recursive: true });
await writeFile(resolve(docs, "privacy-copy.json"), `${JSON.stringify(copy, null, 2)}\n`);
await writeFile(resolve(docs, "styles.css"), css);
await writeFile(resolve(docs, ".nojekyll"), "");
await cp(resolve(root, "public/klipp-icon.png"), resolve(docs, "klipp-icon.png"));
await cp(resolve(root, "public/og.png"), resolve(docs, "og.png"));
