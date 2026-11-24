// One list of everything written or said, newest first: the essays here, field notes from the blyg, and talks.
// The RSS feed, and any page that lists writing, reads from this one function.
import { getCollection } from 'astro:content';
import { talks } from './site';

export type Kind = 'essay' | 'note' | 'talk';

export interface Item {
  kind: Kind;
  title: string;
  date: Date;
  href: string; // absolute for things off this site
  external: boolean;
  where?: string; // where it lives when not here: "blyg", a venue
  summary?: string;
  minutes?: number; // reading time, essays only
}

// First real paragraph of a markdown body, as plain text, cut near 180 characters.
function excerpt(md: string): string {
  const para = md.split(/\n\s*\n/).map((p) => p.trim()).find((p) => p && !/^(#|!\[|<|>|\||```|- |\* |\d+\. )/.test(p)) ?? '';
  const text = para.replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '').replace(/\s+/g, ' ');
  return text.length > 180 ? text.slice(0, text.lastIndexOf(' ', 180)) + '…' : text;
}

export const blygUrl = 'https://blyg.shingai.xyz/';
export const newsletterUrl = 'https://ideas.halcyonic.systems';

// The blyg's feed, read at build time. If it can't be reached the build carries on without it.
async function blygNotes(): Promise<Item[]> {
  try {
    const res = await fetch(new URL('feed.xml', blygUrl), { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
    const pick = (s: string, tag: string) => s.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))?.[1]?.trim() ?? '';
    return items.map((s) => {
      // The blyg titles an item "Entry title: first sentence…"; keep the entry title.
      const raw = pick(s, 'title');
      const cut = raw.indexOf(': ');
      return {
        kind: 'note' as const,
        title: cut > 0 ? raw.slice(0, cut) : raw,
        summary: excerpt(pick(s, 'description').replace(/^<!\[CDATA\[|\]\]>$/g, '').replace(/<[^>]+>/g, ' ')),
        date: new Date(pick(s, 'pubDate')),
        href: pick(s, 'link'),
        external: true,
        where: 'blyg',
      };
    });
  } catch {
    return [];
  }
}

export async function writing(kinds: Kind[] = ['essay', 'note', 'talk']): Promise<Item[]> {
  const essays: Item[] = (await getCollection('archive')).map((p) => ({
    kind: 'essay',
    title: p.data.title,
    date: p.data.date,
    href: `/archive/${p.data.permalink}/`,
    external: false,
    summary: p.data.description ?? excerpt(p.body ?? ''),
    minutes: Math.max(1, Math.round((p.body ?? '').split(/\s+/).length / 230)),
  }));
  const said: Item[] = talks.map((t) => ({
    kind: 'talk',
    title: t.title,
    date: new Date(t.date + 'T12:00:00'),
    href: t.href,
    external: t.href.startsWith('http'),
    where: t.short,
  }));
  const notes = kinds.includes('note') ? await blygNotes() : [];
  return [...essays, ...said, ...notes]
    .filter((i) => kinds.includes(i.kind))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export const byYear = (items: Item[]) =>
  items.reduce((acc, i) => {
    (acc[i.date.getFullYear()] ??= []).push(i);
    return acc;
  }, {} as Record<number, Item[]>);

export const shortDate = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
