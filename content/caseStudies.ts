/**
 * CASE STUDIES — your work, told through thinking and process (no proprietary UI).
 * Edit copy freely. `[add metric]` marks a spot where a real number would strengthen
 * the story — fill it in only if accurate; otherwise the qualitative claim stands.
 * `visual` picks an abstract diagram from components/visuals.tsx.
 */

export type Visual =
  | 'system-translation'
  | 'anonymized-flow'
  | 'ai-loop'
  | 'accessibility-layers';

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tags: string[];
  visual: Visual;
  summary: string; // one line for the index card
  context: string;
  problem: string;
  users: string;
  constraints: string[];
  role: string;
  approach: string[];
  keyDecisions: string[];
  useOfAI?: string;
  accessibility: string;
  outcome: string[];
  reflection: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'complex-system-one-conversation',
    title: 'Making a Complex System Feel Like One Conversation',
    subtitle: 'AI-assisted product & systems strategy for an identity-rich platform',
    category: 'Product & Systems Strategy',
    year: '2023–Present',
    tags: ['Product thinking', 'AI-assisted design', 'Onboarding', 'Systems translation', 'Technical collaboration'],
    visual: 'system-translation',
    summary:
      'Turned a dense, multi-variable system into a staged onboarding that feels like a single guided conversation — designed with AI-assisted prototyping and built with engineers.',
    context:
      'As founder of an AI-powered venture (later supported by NSF funding), I owned the experience strategy for a web platform whose value depends on a genuinely complex underlying model — many interacting inputs that combine into a personalized result. The concepts are powerful but easy to overwhelm a first-time user with.',
    problem:
      'The system’s depth was its differentiator and its biggest usability risk. A literal, all-at-once interface would expose too many variables and stall people at the exact moment they should feel momentum. The design problem was sequencing, not decoration: how do you reveal a complex model progressively so the first session feels like one guided conversation rather than a form to survive?',
    users:
      'A broad, non-expert audience arriving with mixed confidence and device contexts — plus the technical collaborators who build and maintain the flows. Two audiences, one experience.',
    constraints: [
      'The underlying scoring/logic is proprietary — the UX had to communicate value without exposing the model.',
      'Backend intelligence was evolving in parallel, so parts of the experience had to be designed against stubbed/expected data.',
      'Small team, fast cadence — decisions had to be legible enough for engineers to build directly from them.',
      'Accessibility and clarity were non-negotiable for a diverse first-time audience.',
    ],
    role:
      'Product/experience lead: framing the problem, mapping the end-to-end journey, defining the staged onboarding and its states, and pairing with engineers to turn concepts into buildable flows.',
    approach: [
      'Mapped the full journey first, then aggressively sequenced it — separating "must decide now" from "can resume later" so the required path stays short.',
      'Designed the complexity as progressive disclosure: each step asks for one thing, explains why it matters, and shows the payoff before asking for more.',
      'Modeled explicit states (empty, pending, returning) so the experience holds up before the backend is fully live.',
      'Wrote the flows as clear, reviewable specifications engineers could implement without guessing intent.',
    ],
    keyDecisions: [
      'Split identity/appearance choices from deeper "interview"-style depth so users get a quick win first and depth stays optional and resumable.',
      'Represented the still-evolving intelligence with honest pending states instead of fake precision, so the UI never over-promises.',
      'Kept a single accent/identity signal consistent across the whole journey so a complex product still reads as one coherent world.',
    ],
    useOfAI:
      'I used AI-assisted workflows throughout — rapid ideation, drafting interaction copy, exploring alternative flows, and modeling content — while holding a hard quality bar on usability, accuracy, and ethics. AI accelerated exploration; judgment about what shipped stayed human.',
    accessibility:
      'Designed for a diverse first-time audience: staged cognitive load, plain-language step framing, honest pending/empty states, and interface controls for text scaling, reduced motion, and higher contrast so the experience adapts to the person rather than the reverse.',
    outcome: [
      'A short required path with resumable depth — the complex model reaches the user as a guided sequence, not a wall of inputs.',
      'Specifications concrete enough that engineering could build directly from them, reducing back-and-forth.',
      'A pattern language (staged reveal, consistent identity signal, honest states) reused across multiple product surfaces. [add metric: e.g., completion or time-to-first-value once measured]',
    ],
    reflection:
      'The hardest part of a complex product isn’t adding features — it’s deciding what a person is allowed to ignore, and when. Designing the sequence and the "not yet" states was where most of the usability actually came from.',
  },
  {
    slug: 'scaling-1400-course-launches',
    title: 'Scaling 1,400 Course Launches Without Breaking the Experience',
    subtitle: 'Canvas LMS experience & operations design under pandemic pressure',
    category: 'Experience & Ops Design',
    year: '2020–2022',
    tags: ['Canvas LMS', 'Design systems thinking', 'Scale', 'Cross-functional', 'Quality systems'],
    visual: 'anonymized-flow',
    summary:
      'Supported the design and launch of 1,400+ online courses during the pandemic response by turning one-off course building into a repeatable, quality-checked system.',
    context:
      'At a large university, the sudden shift online meant an enormous volume of courses had to move into Canvas quickly — in partnership with faculty who had very different levels of comfort with digital teaching.',
    problem:
      'One-at-a-time, artisanal course building could not scale to the volume or the timeline, and inconsistency hurt the student experience. The real problem was systemic: how do you launch at volume while keeping usability, consistency, and quality from degrading?',
    users:
      'Faculty as builders/collaborators (mixed technical confidence, under time pressure) and students as the end audience who needed consistent, navigable courses across dozens of sections.',
    constraints: [
      'Extreme volume and a compressed timeline.',
      'Highly variable faculty readiness and content quality.',
      'A shared platform (Canvas) with fixed capabilities to design within.',
      'Operational issues surfacing continuously and needing triage.',
    ],
    role:
      'Instructional/experience designer partnering with faculty and academic stakeholders; contributed to the patterns, structures, and support systems that made launches repeatable, and helped triage operational issues.',
    approach: [
      'Shifted from bespoke builds to reusable structures — consistent course scaffolds and navigation patterns faculty could adopt quickly.',
      'Designed the faculty-facing process as its own experience: clear steps, sensible defaults, and just-enough guidance to reduce friction.',
      'Used structured review to catch usability and accessibility issues before students hit them.',
      'Tracked recurring environment issues and fed them into operational problem-solving (supported via Salesforce).',
    ],
    keyDecisions: [
      'Treated consistency as a feature: predictable structure across courses lowered student cognitive load more than any single course’s polish.',
      'Optimized the builder (faculty) experience, not just the end (student) experience — the bottleneck was upstream.',
      'Prioritized "good and shipped, consistently" over "perfect and late" given the timeline, without dropping the accessibility floor.',
    ],
    accessibility:
      'Baked accessibility into the shared scaffolds and the review step (structure, navigability, readable content) so that accessibility scaled with the template instead of depending on each individual builder remembering it.',
    outcome: [
      'Contributed to launching 1,400+ online courses during the pandemic response.',
      'A repeatable structure and review approach that kept the student experience consistent at scale.',
      'Faster, lower-friction course setup for faculty of varying technical comfort. [add metric: e.g., setup-time reduction if known]',
    ],
    reflection:
      'Scale is a design problem, not just an ops problem. The leverage was in the reusable system and the builder experience — design the template and the process, and quality scales with them.',
  },
  {
    slug: 'certificate-people-finished',
    title: 'A Certificate People Actually Finished',
    subtitle: 'Interactive learning product design with Storyline, gamification & analytics',
    category: 'Interactive Product Design',
    year: '2019–2020',
    tags: ['Articulate Storyline', 'Interaction design', 'Gamification', 'Analytics', 'SME collaboration'],
    visual: 'ai-loop',
    summary:
      'Designed interactive courses and certificate programs where engagement mechanics and evidence-based iteration were built in — so learners started and finished.',
    context:
      'At a media/education company, I built courses and certificate programs using Storyline, Captivate, and video-based tools, partnering with subject-matter experts to shape the deliverables.',
    problem:
      'Content-heavy online courses are easy to start and easy to abandon. The design challenge was engagement and completion: how do you turn passive material into an interactive product people move through and complete?',
    users:
      'Self-directed adult learners choosing to spend limited time, plus SMEs and internal stakeholders whose expertise had to become usable interactions rather than lectures.',
    constraints: [
      'Authoring-tool capabilities (Storyline/Captivate) set the interaction boundaries.',
      'SME material arrived as expertise, not yet as designed learning.',
      'Engagement had to be measurable, not assumed.',
    ],
    role:
      'Instructional/interaction designer: shaping deliverables, assessments, and engagement strategy with SMEs, and applying analytics and structured review to improve effectiveness.',
    approach: [
      'Turned SME content into interaction: decisions, scenarios, and feedback loops instead of linear reading.',
      'Applied gamification deliberately (progress, meaningful feedback, momentum) rather than points for their own sake.',
      'Used learning analytics and structured review cycles to find drop-off and iterate on the weak points.',
      'Designed assessment as part of the experience, not a bolt-on at the end.',
    ],
    keyDecisions: [
      'Engagement mechanics had to serve comprehension — cut anything that was engagement theater.',
      'Let the data, not opinion, decide which sections got reworked.',
      'Kept interactions accessible and operable rather than flashy-but-exclusionary.',
    ],
    useOfAI:
      'Predates my current AI-assisted workflow, but it established the habit that carries into it: instrument the experience, read the evidence, and iterate — the same loop I now run faster with AI assistance.',
    accessibility:
      'Built interactions to be operable and understandable (clear feedback, readable pacing, keyboard/operability considerations) so engagement features didn’t exclude anyone.',
    outcome: [
      'Interactive courses and certificate programs shipped with engagement and evidence-based iteration built in.',
      'Analytics-driven review cycles that improved course effectiveness over time. [add metric: e.g., completion lift if known]',
    ],
    reflection:
      'Gamification is a means, not an end. The completions came from mechanics that made comprehension feel like progress — and from being willing to let the data change the design.',
  },
  {
    slug: 'accessibility-as-a-system',
    title: 'Accessibility as a System, Not a Checklist',
    subtitle: 'Standards leadership across WCAG, Section 508, and Universal Design for Learning',
    category: 'Accessibility Leadership',
    year: '2020–Present',
    tags: ['Accessibility', 'WCAG', 'Section 508', 'UDL', 'Design standards', 'Enablement'],
    visual: 'accessibility-layers',
    summary:
      'As accessibility lead on a federally funded initiative, I set reusable standards so accessibility scaled across many contributors instead of depending on one reviewer.',
    context:
      'Through a federally funded Title V grant, I serve as accessibility lead — setting standards for Section 508, WCAG, and Universal Design for Learning across digital resources and online learning materials used by faculty and staff.',
    problem:
      'Accessibility usually fails as a last-minute audit: a bottleneck, applied inconsistently, resented as compliance. The problem was to make it a system contributors could design with from the start — durable, teachable, and scalable across many hands.',
    users:
      'Faculty and staff creating digital resources (mostly non-specialists), and — most importantly — the disabled learners and colleagues those resources have to work for.',
    constraints: [
      'Many contributors with a wide range of accessibility knowledge.',
      'Multiple overlapping standards (WCAG, 508, UDL) that need to be actionable, not just cited.',
      'Accessibility had to raise quality without becoming a gate that stops work.',
    ],
    role:
      'Accessibility lead: defining the standards, translating them into practical guidance and defaults, and enabling stakeholders to meet them across the initiative.',
    approach: [
      'Reframed accessibility as design input, not a final audit — moved it upstream into templates and defaults.',
      'Translated WCAG/508/UDL into plain, actionable practices contributors could apply without becoming specialists.',
      'Built accessibility into shared resources so the accessible choice is the default choice.',
      'Paired standards with enablement so quality didn’t depend on a single gatekeeper.',
    ],
    keyDecisions: [
      'Standards had to be usable by non-experts, or they wouldn’t be used at all.',
      'UDL framing (multiple means of engagement/representation/expression) drove design decisions, not just compliance checks.',
      'Prioritized durable systems (templates, defaults, guidance) over one-off fixes.',
    ],
    accessibility:
      'This case study is the accessibility work — the throughline of my practice. It’s why every other project here treats accessibility as a first-class design constraint rather than a finishing step.',
    outcome: [
      'Reusable accessibility standards and guidance adopted across a federally funded initiative.',
      'Accessibility shifted from a review bottleneck toward a built-in default across many contributors.',
      'A lens I carry into product work — designing for the full range of global users, including those with disabilities.',
    ],
    reflection:
      'The goal isn’t passing an audit — it’s building systems where the accessible path is the easy path. That mindset makes products better for everyone, not just users with disabilities.',
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
