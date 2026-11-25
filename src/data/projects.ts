// The projects on /projects, in the order shown.
// Each needs a screenshot at public/images/projects/<img>.jpg, 960×600 (8:5), cropped from the top.
// The screenshot is decorative: the title beside it says what it is.

export type Kind = 'theory' | 'tool' | 'empirical';

export interface Project {
  title: string;
  href: string;
  /** File name (without .jpg) in public/images/projects/. */
  img: string;
  kind: Kind;
  /** One line under the title; also the line on home. */
  blurb: string;
  /** On /projects only: the gap the project fills. Shingai's words; edit only with him. */
  gap?: string;
}

export const projects: Project[] = [
  {
    title: 'Facets',
    href: 'https://facets.systems',
    img: 'facets',
    kind: 'tool',
    blurb: 'A shared language for all systems.',
    gap: 'Filling the gap of a domain-neutral scientific language of systems.',
  },
  {
    title: 'State Power',
    href: 'https://statepower.systems',
    img: 'trade',
    kind: 'empirical',
    blurb: 'Multidimensional measures of state power.',
    gap: "Power does not recognize disciplinary boundaries, but its measures do: economics lacks them, political science's are fragmented and expert-only, so most citizens and policymakers fall back on GDP. Clean, multidimensional measures for anyone who would otherwise reach for GDP.",
  },
  {
    title: 'math.systems',
    href: 'https://math.systems',
    img: 'atlas',
    kind: 'theory',
    blurb: 'Formal definitions of “system,” and the maps between them.',
    gap: 'There is no shared map that lets us describe formally what definitions of “system” share and where they differ.',
  },
  {
    title: 'Information Processing Systems',
    href: 'https://rsthornton.github.io/information-processing-systems/',
    img: 'ips',
    kind: 'theory',
    blurb: 'A visual essay.',
  },
];
