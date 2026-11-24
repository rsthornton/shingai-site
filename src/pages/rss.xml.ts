// RSS 2.0 for everything in src/data/writing.ts. Hand-written: no dependency for forty lines of XML.
import type { APIContext } from 'astro';
import { name } from '../data/site';
import { writing } from '../data/writing';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET({ site }: APIContext) {
  const base = site!.href;
  const items = (await writing(['essay', 'note']))
    .map((i) => {
      const link = new URL(i.href, base).href;
      const label = i.kind === 'essay' ? 'Essay' : i.kind === 'note' ? 'Note' : 'Talk';
      return `    <item>
      <title>${esc(i.title)}</title>
      <link>${esc(link)}</link>
      <guid isPermaLink="true">${esc(link)}</guid>
      <pubDate>${i.date.toUTCString()}</pubDate>
      <category>${label}</category>${i.summary ? `\n      <description>${esc(i.summary)}</description>` : ''}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(name)}</title>
    <link>${base}</link>
    <description>Essays and field notes by ${esc(name)}.</description>
    <language>en-us</language>
    <atom:link href="${new URL('/rss.xml', base).href}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
