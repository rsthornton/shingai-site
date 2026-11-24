// One list of writing, newest first: the essays kept here and the field notes on the blyg.
// The /writing page and the RSS feed both read from writing(). Talks can be mixed in by asking for them.
import { getCollection } from 'astro:content';
import { urls } from './site';
import { talks } from './talks';

export type WritingKind = 'essay' | 'note' | 'talk';

export interface Item {
  kind: WritingKind;
  title: string;
  date: Date;
  /** Relative for pages on this site, absolute for anything elsewhere. */
  href: string;
  external: boolean;
  /** Where it lives when not here: "blyg", or a talk's venue. */
  where?: string;
  summary?: string;
  /** Reading time in minutes, essays only. */
  minutes?: number;
}

/** The first real paragraph of a markdown body, as plain text, cut near 180 characters. */
export function excerpt(md: string): string {
  const para =
    md
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .find((p) => p && !/^(#|!\[|<|>|\||```|- |\* |\d+\. )/.test(p)) ?? '';
  const text = para
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ');
  return text.length > 180 ? text.slice(0, text.lastIndexOf(' ', 180)) + '…' : text;
}

/**
 * The blyg's RSS feed, read at build time. If it can't be reached the build carries on without it,
 * so a blyg outage never breaks a deploy. New blyg entries appear after the next build (daily).
 */
async function blygNotes(): Promise<Item[]> {
  try {
    const res = await fetch(new URL('feed.xml', urls.blyg), { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return [];
    const xml = await res.text();
    const pick = (s: string, tag: string) => s.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))?.[1]?.trim() ?? '';
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, s]) => {
      // The blyg titles an item "Entry title: first sentence…"; keep the entry title.
      const raw = pick(s, 'title');
      const cut = raw.indexOf(': ');
      const body = pick(s, 'description')
        .replace(/^<!\[CDATA\[|\]\]>$/g, '')
        .replace(/<[^>]+>/g, ' ');
      return {
        kind: 'note' as const,
        title: cut > 0 ? raw.slice(0, cut) : raw,
        summary: excerpt(body),
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

export async function writing(kinds: WritingKind[] = ['essay', 'note']): Promise<Item[]> {
  const items: Item[] = [];
  if (kinds.includes('essay')) {
    for (const p of await getCollection('archive')) {
      const body = p.body ?? '';
      items.push({
        kind: 'essay',
        title: p.data.title,
        date: p.data.date,
        href: `/archive/${p.data.permalink}/`,
        external: false,
        summary: p.data.description ?? excerpt(body),
        minutes: Math.max(1, Math.round(body.split(/\s+/).length / 230)),
      });
    }
  }
  if (kinds.includes('talk')) {
    for (const t of talks) {
      items.push({
        kind: 'talk',
        title: t.title,
        date: new Date(t.date + 'T12:00:00'),
        href: t.href,
        external: t.href.startsWith('http'),
        where: t.short,
      });
    }
  }
  if (kinds.includes('note')) items.push(...(await blygNotes()));
  return items.sort((a, b) => b.date.getTime() - a.date.getTime());
}
