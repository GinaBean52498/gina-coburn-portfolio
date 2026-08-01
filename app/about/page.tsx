import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${site.name} — ${site.role}. How I work, how I use AI responsibly, and how accessibility shapes my practice.`,
};

const specialties = [
  'Product thinking & UX strategy',
  'AI-assisted design & prototyping',
  'Accessibility (WCAG, Section 508, UDL)',
  'Design systems thinking',
  'User journeys & complex flows',
  'Technical content translation',
  'Cross-functional collaboration',
  'Learning experience design',
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">About</p>
        <h1 className="balance">Designing clarity into complex systems.</h1>

        <div className="prose stack" style={{ marginTop: '1.5rem' }}>
          <p className="lead">
            I’m {site.name}, a product-minded designer with 15+ years translating complex,
            technical, and regulated systems into clear, staged, user-centered experiences —
            across education, workforce, and technology-enabled platforms.
          </p>
          <p>
            I’m the founder and CEO of Nerrative, an AI-powered venture later supported by NSF
            funding, where I lead product thinking, AI-assisted design workflows, technical
            collaboration, and accessibility-centered experience strategy for a web platform. I’ve
            also served as a Title V instructional designer and accessibility lead, and I’ve
            designed learning experiences at scale in Canvas and interactive products in Storyline.
          </p>
        </div>

        <hr />

        <h2>What I specialize in</h2>
        <ul className="tags" style={{ marginTop: '0.75rem' }}>
          {specialties.map((s) => (
            <li key={s} className="tag">{s}</li>
          ))}
        </ul>

        <hr />

        <div className="grid grid-2">
          <div className="stack">
            <h2>How I work</h2>
            <p>
              I start by framing the real problem, not the requested feature. I map the whole
              journey, then sequence it — deciding what a person can safely ignore and when. I make
              decisions legible so engineers can build directly from them, and I design the
              in-between states (empty, pending, returning) that most experiences forget.
            </p>
            <p>
              I move fast without sacrificing craft: prototype to show ideas rather than talk about
              them, then let feedback and evidence shape what ships.
            </p>
          </div>
          <div className="stack">
            <h2>How I use AI responsibly</h2>
            <p>
              I use AI-assisted workflows throughout ideation, interaction copy, flow exploration,
              and content modeling — as an accelerant, not an author. AI widens the option space;
              human judgment decides what’s accurate, usable, and ethical enough to ship.
            </p>
            <p>
              That means honest states over fake precision, no dark patterns, and a clear line
              between what the system knows and what it’s guessing.
            </p>
          </div>
        </div>

        <hr />

        <div className="grid grid-2">
          <div className="stack">
            <h2>How accessibility shapes my work</h2>
            <p>
              Accessibility is a design input for me, not a final audit. As an accessibility lead
              (WCAG, Section 508, UDL), I build the accessible choice into templates and defaults so
              it scales across many contributors — and so the experience adapts to the person
              instead of the reverse. It’s a lens I carry into every product decision.
            </p>
          </div>
          <div className="stack">
            <h2>What makes me different</h2>
            <p>
              I bridge product thinking, AI-assisted workflows, accessibility, and technical
              collaboration — and I’ve repeatedly turned genuinely complex, high-stakes subject
              matter into experiences people can actually use. I design for both the end user and
              the engineers building it.
            </p>
            <Link href="/work" className="btn btn-ghost" style={{ alignSelf: 'start' }}>See how I think →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
