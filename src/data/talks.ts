// Talks, newest first. Shown under Projects and on the CV.
// A talk with its own page links to it (see src/pages/talks/); otherwise href is the venue.

export interface Talk {
  /** YYYY-MM-DD */
  date: string;
  venue: string;
  /** Short venue name for tight spaces. */
  short: string;
  place: string;
  title: string;
  href: string;
  status: 'upcoming' | 'given';
}

export const talks: Talk[] = [
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

/** "Oct 2026" */
export const monthYear = (d: string) =>
  new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
