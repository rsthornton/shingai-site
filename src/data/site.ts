// Who the site is about and where things live. Copy that appears on more than one page starts here.
// Projects are in projects.ts, talks in talks.ts, and the writing list is assembled in writing.ts.

/** Shown in the footer as the last update; bump it when the copy changes. */
export const updated = '2026-11-25';

export const name = 'Shingai Thornton';

/** The big line on home. */
export const claim = 'Systems theorist and builder.';

/** One sentence of who: the default page description, and the 'who' intro on home. */
export const who =
  'Studying systems science at Binghamton University. I run Halcyonic Systems, a small lab for formal systems research.';

/**
 * The theory of change, shown under the line on home. Empty until Shingai has one in his own words;
 * nothing shows while it is empty.
 */
export const theory = '';

/** Shingai's line (2026-11-25), shown by the 'studying' intro. His words; edit only with him. */
export const studying =
  'Studying the properties of systems in general to support rigorous inter- and transdisciplinary scientific research.';

/** Shingai's line (2026-11-25, later round), shown by the 'instruments' intro above the Instruments list. His words; edit only with him. */
export const aim =
  'Studying the properties of systems in general, and building instruments for rigorous transdisciplinary research.';

export const portrait = {
  photo: '/images/icon/headshot.jpg',
  pixel: '/images/icon/headshot-pixel.png',
  alt: 'Shingai Thornton',
};

export const email = 'rsthornton@gmail.com';

/** Every outside address in one place. */
export const urls = {
  x: 'https://x.com/shingaithornton',
  github: 'https://github.com/rsthornton',
  halcyonic: 'https://halcyonic.systems',
  systemsScience: 'https://www.binghamton.edu/ssie/graduate/systems-science.html',
  call: 'https://calendly.com/shingaithornton/new-meeting',
  thesis: 'https://www.proquest.com/docview/3343535100',
  newsletter: 'https://ideas.halcyonic.systems',
  newsletterArchive: 'https://ideas.halcyonic.systems/archive',
  blyg: 'https://blyg.shingai.xyz/',
  source: 'https://github.com/rsthornton/shingai-site',
};

/**
 * How the site looks. Production renders exactly this. In `npm run dev` a toolbar at the bottom of every page
 * overrides it live (README § Dev mode) and offers the line to paste back here.
 *   drawing: an id from src/art/registry.ts      palette: 'navy' | 'frost' | 'teal' | 'plum'
 *   ink: drawing 'color' or 'mono' (one color)   heading: 'ink' | 'accent'
 *   intro: 'who' | 'working' | 'work-first' | 'line' | 'studying' | 'instruments'
 */
export interface Look {
  drawing: string;
  palette: 'navy' | 'frost' | 'teal' | 'plum';
  ink: 'color' | 'mono';
  heading: 'ink' | 'accent';
  intro: 'who' | 'working' | 'work-first' | 'line' | 'studying' | 'instruments';
}

export const look: Look = {
  drawing: 'mobus-system',
  palette: 'navy',
  ink: 'color',
  heading: 'accent',
  intro: 'instruments',
};
