import type { Metadata } from 'next';
import { AbstractVisual } from '@/components/visuals';

export const metadata: Metadata = {
  title: 'Process',
  description: 'How I approach ambiguity, frame problems, use prompting in research/design/build, collaborate with technical teams, and balance speed, quality, and accessibility.',
};

const methods = [
  {
    h: 'How I approach ambiguity',
    p: 'I treat a vague brief as the first artifact to design. Before proposing anything, I write down the actual goal, the users, the constraints, and what success looks like — then I confirm I’m solving the right problem, not just the requested one.',
  },
  {
    h: 'How I frame problems',
    p: 'I separate the problem from the feature. Most requests arrive as a solution; I trace them back to the underlying user need and reframe them as a design question. Good framing makes the rest of the work faster and the decisions defensible.',
  },
  {
    h: 'How I use prompting across research, design & build',
    p: 'Prompting is a design medium, not a shortcut. I use it to widen the option space quickly — synthesizing research, drafting interaction copy, exploring alternative flows, generating variants to react to. Then I curate hard: I keep what’s accurate and usable and cut the rest. Every AI output passes a human quality gate before it counts.',
  },
  {
    h: 'How I collaborate with technical teams',
    p: 'I design so engineers can build without guessing intent. That means clear flows, explicit states, named edge cases, and specifications written to be implemented. I ask about data shape and constraints early, anticipate friction, and treat the build team as a design audience of its own.',
  },
  {
    h: 'How I balance speed, quality & judgment',
    p: 'Prototype to show, not tell — then let evidence decide. I ship the shortest correct version, instrument it, and iterate on the weak points. Speed comes from sequencing and reuse; quality comes from refusing to fake precision or skip the accessible path.',
  },
  {
    h: 'How I think about accessibility & ethics',
    p: 'Accessibility is designed in from the first layer (WCAG, Section 508, UDL) — built into templates and defaults so it scales. Ethically, I favor honest states over false confidence, avoid dark patterns, and keep a clear line between what a system knows and what it’s inferring.',
  },
];

export default function ProcessPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Process</p>
        <h1 className="balance">How I think and work.</h1>
        <p className="lead prose" style={{ marginTop: '0.75rem' }}>
          A repeatable way of turning ambiguity into usable experiences — the same method whether the
          medium is a product flow, a learning experience, or an AI-assisted prototype.
        </p>

        <div style={{ maxWidth: 860, margin: '2rem auto' }}>
          <AbstractVisual name="ai-loop" caption="My AI-assisted loop — acceleration with a human quality gate" />
        </div>

        <div className="grid grid-2" style={{ marginTop: '1rem' }}>
          {methods.map((m) => (
            <div className="card stack" key={m.h}>
              <h3 style={{ fontFamily: 'var(--font-display)' }}>{m.h}</h3>
              <p className="muted" style={{ margin: 0 }}>{m.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
