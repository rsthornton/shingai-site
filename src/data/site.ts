export const updated = '2026-10-21';

export const name = 'Shingai Thornton';

export const headline =
  'PhD student in Systems Science at Binghamton University. I run Halcyonic Systems, a small lab for formal systems research.';

export const bio =
  'Political economy, then crypto, then systems science. The field is fragmented; I work on what its traditions share.';

export const thesis = 'The field is fragmented; I work on what its traditions share.';

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
    title: 'ustradeflow.systems',
    blurb: 'Who depends on whom in U.S. interstate trade. MS thesis, CCS 2026.',
    href: 'https://ustradeflow.systems',
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

// Theory-of-change drafts (vault quest site-launch, 2026-10-23). Not chosen yet.
// [brackets] mark the words set as chips.
export const theories: Record<string, string> = {
  A: 'Give people [rigorous, visual tools] to see the systems they live inside, built in the open by [small trusted teams], so that [understanding], not top-down control, shapes how society changes.',
  B: '[Rigorous, visual tools], built in the open, that help us observe and influence the systems we live inside increase our capacity to [steer them toward what we value] and to [adapt to the unexpected].',
  C: '[Open-source visual tools] that support rigorous systems reasoning and help us observe and influence the systems we live inside increase our capacity to [steer them toward what we value] and to [adapt to the unexpected].',
  D: "We can't steer systems we can't see. I build [open-source tools] that make the systems we live inside [legible], so people can push them toward what they value and adapt when they surprise us. I think that happens [from the bottom up]: a few people who see clearly, working together, not a mandate from above.",
};

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
export const profileIcon: keyof typeof icons = 'headshot';

export const email = 'rsthornton@gmail.com';
export const callUrl = 'https://calendly.com/shingaithornton/new-meeting';

export const top8: { title: string; note: string; tag: string; img: string; href: string; talk?: { label: string; href: string } }[] = [
  { title: 'What is a system?', note: 'interactive Lean doc', tag: 'lean', img: 'wias', href: 'https://halcyonic.systems/what-is-a-system/' },
  { title: 'math.systems', note: 'definition atlas', tag: 'atlas', img: 'atlas', href: 'https://math.systems' },
  { title: 'ustradeflow', note: 'interstate trade', tag: 'data', img: 'trade', href: 'https://ustradeflow.systems', talk: { label: 'CCS 2026', href: '/talks/ccs-2026' } },
  { title: 'Hayekian Systems lab', note: 'anticipatory simulation', tag: 'app', img: 'hayek', href: 'https://lab-production-2e5e.up.railway.app', talk: { label: 'Markets & Society', href: 'https://www.marketsandsociety.org' } },
  { title: 'Information Processing Systems', note: 'visual essay', tag: 'page', img: 'ips', href: 'https://rsthornton.github.io/information-processing-systems/' },
  { title: 'Facets', note: 'modeling instrument', tag: 'app', img: 'facets', href: 'https://facets.systems' },
  { title: 'Protocols are systems', note: 'symposium talk', tag: 'talk', img: 'protocols', href: research[4].href, talk: { label: 'Protocol Symposium', href: research[4].href } },
];

export const meet = [
  { who: 'Researchers', what: 'in systems science, category theory, or formal methods who want to compare notes.', action: 'Send a message', to: 'mail' },
  { who: 'People with a hard problem', what: 'in a complex system (trade, finance, health, institutions) who want a modeler to think it through with them.', action: 'Book 20 minutes', to: 'call' },
  { who: 'Builders', what: 'who want to use or extend open systems tools.', action: 'See GitHub', to: 'https://github.com/rsthornton' },
];

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
