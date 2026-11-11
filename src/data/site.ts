export const updated = '2026-11-10';

export const name = 'Shingai Thornton';

export const headline =
  'PhD student in Systems Science at Binghamton University. I run Halcyonic Systems, a small lab for formal systems research.';

export const research = [
  {
    title: 'Common core',
    blurb: 'What the traditions’ definitions of “system” share, formalized in Lean.',
    href: 'https://github.com/halcyonic-systems/systems-science-foundations',
    tag: 'lean',
  },
  {
    title: 'math.systems',
    blurb: 'Definitions of “system”, sourced and mapped to each other.',
    href: 'https://math.systems',
    tag: 'atlas',
  },
  {
    title: 'State Power',
    blurb: 'Who depends on whom in U.S. interstate trade. MS thesis, CCS 2026.',
    href: 'https://statepower.systems',
    tag: 'data',
  },
  {
    title: 'Facets',
    blurb: 'A modeling instrument for systems science.',
    href: 'https://facets.systems',
    tag: 'app',
  },
  {
    title: 'Protocols are systems',
    blurb: 'Hand-washing and Bitcoin share a skeleton. Protocol Symposium 2026.',
    href: 'https://halcyonic.systems/protocols-are-systems/',
    tag: 'talk',
  },
];

// The big line on home.
export const claim = 'Systems theorist and builder.';

// The theory of change, shown under the big line on home. Empty until Shingai has one in his own words;
// nothing shows while it is empty. [brackets] mark highlighted words (two or three).
export const theory = '';

export const now = [
  'First year of the PhD.',
  'Reading Mac Lane, Mathematics Form and Function.',
];

export const writing = {
  label: 'Essays, 2019–2023',
  note: 'crypto, governance, early systems science',
  href: '/archive',
};

export const links = [
  { label: 'GitHub', href: 'https://github.com/rsthornton' },
  { label: 'X', href: 'https://x.com/shingaithornton' },
  { label: 'Halcyonic', href: 'https://halcyonic.systems' },
  { label: 'Email', href: 'mailto:rsthornton@gmail.com' },
  { label: 'CV', href: '/cv' },
];

export const icons = {
  headshot: { pixel: '/images/icon/headshot-pixel.png', photo: '/images/icon/headshot.jpg', alt: 'Shingai Thornton' },
  kid: { pixel: '/images/icon/pixel.png', photo: '/images/icon/raw.jpg', alt: 'Shingai as a kid' },
};
// Profile icon; the other one shows in the IM window. Switch to 'kid' to swap them.
export const email = 'rsthornton@gmail.com';
export const callUrl = 'https://calendly.com/shingaithornton/new-meeting';

// featured: true puts a project on the home page (three fit), with a one-word kind and a one-line blurb; /projects lists all of them
export const top8: { title: string; note: string; tag: string; img: string; href: string; featured?: boolean; kind?: string; blurb?: string; talk?: { label: string; href: string } }[] = [
  { title: 'What is a system?', note: 'interactive Lean doc', tag: 'lean', img: 'wias', href: 'https://halcyonic.systems/what-is-a-system/' },
  { title: 'math.systems', note: 'definition atlas', tag: 'atlas', img: 'atlas', href: 'https://math.systems', featured: true, kind: 'theory', blurb: 'Formal definitions of “system,” and the maps between them.' },
  { title: 'State Power', note: 'interstate trade', tag: 'data', img: 'trade', href: 'https://statepower.systems', featured: true, kind: 'empirical', blurb: 'GDP is not equivalent to economic power.', talk: { label: 'CCS 2026', href: '/talks/ccs-2026' } },
  { title: 'Hayekian Systems lab', note: 'anticipatory simulation', tag: 'app', img: 'hayek', href: 'https://lab-production-2e5e.up.railway.app', talk: { label: 'Markets & Society', href: 'https://www.marketsandsociety.org' } },
  { title: 'Information Processing Systems', note: 'visual essay', tag: 'page', img: 'ips', href: 'https://rsthornton.github.io/information-processing-systems/' },
  { title: 'Facets', note: 'modeling instrument', tag: 'app', img: 'facets', href: 'https://facets.systems', featured: true, kind: 'tool', blurb: 'A shared language for all systems.' },
  { title: 'Protocols are systems', note: 'symposium talk', tag: 'talk', img: 'protocols', href: research[4].href, talk: { label: 'Protocol Symposium', href: research[4].href } },
];

// MS thesis on ProQuest (Writing menu)
export const thesisUrl = 'https://www.proquest.com/docview/3343535100';
export const explorersUrl = 'https://ideas.halcyonic.systems/archive';

export const talks = [
  {
    date: '2026-10-26',
    venue: 'Markets & Society, Mercatus Center',
    short: 'Markets & Society',
    place: 'Falls Church, VA',
    title: 'Building Infrastructure for Hayek: An Anticipatory Systems Simulation',
    href: 'https://www.marketsandsociety.org',
    status: 'given',
  },
  {
    date: '2026-10-16',
    venue: 'Conference on Complex Systems (CCS 2026)',
    short: 'CCS',
    place: 'Binghamton, NY',
    title: 'Eigenvector Centrality Reveals Structural Undervaluation in U.S. Interstate Commerce Networks',
    href: '/talks/ccs-2026',
    status: 'given',
  },
  {
    date: '2026-09-24',
    venue: 'Protocol Symposium 2026',
    short: 'Protocol Symposium',
    place: 'online',
    title: 'Protocols are Systems',
    href: 'https://halcyonic.systems/protocols-are-systems/',
    status: 'given',
  },
];
