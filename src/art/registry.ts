// The drawing library: every candidate for home, with where its idea comes from.
// These are new drawings in the spirit of each source, not reproductions of published figures.

export type Lineage = 'First three' | 'Mobus' | 'Bunge' | 'Rosen' | 'Cybernetics & GST' | 'Dynamics' | 'Networks';

export interface Drawing {
  id: string;
  title: string;
  lineage: Lineage;
  note: string;
}

export const drawings: Drawing[] = [
  // the first three, as drawn for version E (one-color)
  {
    id: 'system',
    title: 'A bounded system',
    lineage: 'First three',
    note: 'Flow from a source, through four parts, to a sink.',
  },
  {
    id: 'lattice',
    title: 'A network in a field',
    lineage: 'First three',
    note: 'A few points of a lattice joined into a small network.',
  },
  { id: 'nested', title: 'Systems in a system', lineage: 'First three', note: 'Boundaries inside a boundary.' },

  // George Mobus
  {
    id: 'mobus-system',
    title: 'System in its environment',
    lineage: 'Mobus',
    note: 'Sources, sinks and interfaces on the boundary; matter (blue), energy (orange) and messages (green) flow through, and waste heat leaves to the ground.',
  },
  {
    id: 'mobus-zoom',
    title: 'Deep systems analysis',
    lineage: 'Mobus',
    note: 'Decomposition by zooming in: one subsystem opened, then one of its parts, level by level.',
  },
  {
    id: 'mobus-nested',
    title: 'Subsystems in color',
    lineage: 'Mobus',
    note: 'A system of subsystems, each with its own components, exchanging flows across inner boundaries.',
  },
  {
    id: 'mobus-governance',
    title: 'Hierarchical cybernetic governance',
    lineage: 'Mobus',
    note: 'Operations at the bottom, coordination above them, strategy at the top looking outward (after Mobus and Kalton).',
  },
  {
    id: 'mobus-agent',
    title: 'Adaptive agent',
    lineage: 'Mobus',
    note: 'Sense, model, decide, act, and the environment answers back.',
  },
  {
    id: 'mobus-odum',
    title: 'Energy circuit',
    lineage: 'Mobus',
    note: 'Odum’s energy symbols, which Mobus builds on: source, producer, storage, consumer, heat sinks, and a feedback of services.',
  },
  {
    id: 'mobus-economy',
    title: 'The economy as a system',
    lineage: 'Mobus',
    note: 'Extraction, production, consumption and waste, driven by the sun; goods flow one way, money the other, and some waste comes back.',
  },
  {
    id: 'mobus-stock',
    title: 'Stock and flow',
    lineage: 'Mobus',
    note: 'A reservoir with an inflow and an outflow, its level feeding back to the inflow valve.',
  },

  // Mario Bunge
  {
    id: 'bunge-cesm',
    title: 'CESM',
    lineage: 'Bunge',
    note: 'A system as composition, environment, structure and mechanism: s = ⟨C, E, S, M⟩.',
  },
  {
    id: 'bunge-levels',
    title: 'Levels of organization',
    lineage: 'Bunge',
    note: 'Physical, chemical, biological, social, technical: each level built from things of the level below.',
  },
  {
    id: 'bunge-emergence',
    title: 'Emergence',
    lineage: 'Bunge',
    note: 'The same parts, once bonded, have a property none of them has alone.',
  },
  {
    id: 'bunge-society',
    title: 'Society’s subsystems',
    lineage: 'Bunge',
    note: 'Biological, economic, political and cultural subsystems, each tied to every other.',
  },
  {
    id: 'bunge-mechanism',
    title: 'Black box to mechanism',
    lineage: 'Bunge',
    note: 'Explanation opens the box: the same inputs and outputs, now with the process that links them.',
  },

  // Robert Rosen
  {
    id: 'rosen-modeling',
    title: 'The modeling relation',
    lineage: 'Rosen',
    note: 'Natural system and formal system: encoding, inference, decoding. A model is good when the square commutes.',
  },
  {
    id: 'rosen-mr',
    title: '(M,R) system',
    lineage: 'Rosen',
    note: 'Metabolism f, repair Φ, replication β: every efficient cause (open arrowhead) made inside the system.',
  },
  {
    id: 'rosen-anticipatory',
    title: 'Anticipatory system',
    lineage: 'Rosen',
    note: 'A model running faster than time predicts a future state, and an effector acts on it now.',
  },
  {
    id: 'rosen-causes',
    title: 'Four causes on one arrow',
    lineage: 'Rosen',
    note: 'For f: A → B, A is the material cause, f the efficient, the arrow the formal, B the final.',
  },
  {
    id: 'rosen-complexity',
    title: 'No largest model',
    lineage: 'Rosen',
    note: 'A complex system is caught only by many partial models, never one that contains the rest.',
  },

  // Cybernetics and general systems theory
  {
    id: 'cyb-feedback',
    title: 'Negative feedback',
    lineage: 'Cybernetics & GST',
    note: 'Reference, comparator, controller, plant, sensor: the error drives the correction (Wiener).',
  },
  {
    id: 'cyb-vsm',
    title: 'Viable system model',
    lineage: 'Cybernetics & GST',
    note: 'Operations below, systems 3, 4 and 5 above, each operation facing its own environment (after Beer).',
  },
  {
    id: 'cyb-variety',
    title: 'Requisite variety',
    lineage: 'Cybernetics & GST',
    note: 'Disturbance D, regulator R, environment T, essential variables E: only variety in R can absorb variety from D (Ashby).',
  },
  {
    id: 'cyb-open',
    title: 'Open system',
    lineage: 'Cybernetics & GST',
    note: 'Input, throughput, output: a steady state held by flow, not by isolation (Bertalanffy).',
  },
  {
    id: 'cyb-klir',
    title: 'Epistemological hierarchy',
    lineage: 'Cybernetics & GST',
    note: 'Source, data, generative, structure and meta systems, each step up knowing more (Klir).',
  },
  {
    id: 'cyb-boulding',
    title: 'Skeleton of science',
    lineage: 'Cybernetics & GST',
    note: 'Nine levels from frameworks and clockworks to cells, people, societies and beyond (Boulding).',
  },
  {
    id: 'cyb-autopoiesis',
    title: 'Autopoiesis',
    lineage: 'Cybernetics & GST',
    note: 'Two self-producing unities, structurally coupled to each other and perturbed by the world (Maturana and Varela).',
  },
  {
    id: 'cyb-holarchy',
    title: 'Holarchy',
    lineage: 'Cybernetics & GST',
    note: 'Every node a whole to the level below and a part to the level above (Koestler).',
  },
  {
    id: 'cyb-simon',
    title: 'Near decomposability',
    lineage: 'Cybernetics & GST',
    note: 'Dense interaction inside subsystems, sparse between them (Simon).',
  },

  // Dynamics
  {
    id: 'dyn-limit-cycle',
    title: 'Limit cycle',
    lineage: 'Dynamics',
    note: 'Trajectories from inside and outside wind onto the same closed orbit (Van der Pol).',
  },
  {
    id: 'dyn-lorenz',
    title: 'Strange attractor',
    lineage: 'Dynamics',
    note: 'The Lorenz system: bounded, never repeating, sensitive to where it starts.',
  },
  {
    id: 'dyn-bifurcation',
    title: 'Road to chaos',
    lineage: 'Dynamics',
    note: 'The logistic map: one state, then two, four, then chaos with windows of order.',
  },
  {
    id: 'dyn-benard',
    title: 'Dissipative structure',
    lineage: 'Dynamics',
    note: 'Heated from below, a fluid organizes into convection cells (Bénard; Prigogine).',
  },
  {
    id: 'dyn-hypercycle',
    title: 'Hypercycle',
    lineage: 'Dynamics',
    note: 'Self-replicators that each catalyze the next, closing a loop (Eigen and Schuster).',
  },

  // Networks
  {
    id: 'net-centrality',
    title: 'Eigenvector centrality',
    lineage: 'Networks',
    note: 'Node size and color by eigenvector centrality: important because connected to the important (the State Power measure).',
  },
  {
    id: 'net-ring',
    title: 'Small world',
    lineage: 'Networks',
    note: 'A ring of neighbors and a few long shortcuts that make everything close (Watts and Strogatz).',
  },
  {
    id: 'net-bipartite',
    title: 'Definitions and their maps',
    lineage: 'Networks',
    note: 'Traditions on one side, formal definitions on the other, linked where they agree (the math.systems idea).',
  },
];
