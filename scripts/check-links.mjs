// Checks every internal link and image in the built site (dist/) points at a file that exists.
// Run after `npm run build`: `npm run check:links`. Outside links are not fetched.
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(p);
    else if (extname(e.name) === '.html') yield p;
  }
}

async function exists(path) {
  try {
    const s = await stat(path);
    return s.isFile() || (await stat(join(path, 'index.html'))).isFile();
  } catch {
    return false;
  }
}

const broken = [];
for await (const file of htmlFiles(root)) {
  const html = await readFile(file, 'utf8');
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    if (url.startsWith('//')) continue;
    if (!(await exists(join(root, decodeURI(url))))) broken.push(`${file.slice(root.length)} → ${url}`);
  }
}

if (broken.length) {
  console.error(`${broken.length} broken internal link(s):\n` + broken.join('\n'));
  process.exit(1);
}
console.log('internal links: all resolve');
