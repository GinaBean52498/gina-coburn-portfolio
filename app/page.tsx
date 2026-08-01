import Link from 'next/link';
import { site } from '@/lib/site';
import { caseStudies } from '@/content/caseStudies';
import { CaseStudyCard } from '@/components/ui';
import { AbstractVisual } from '@/components/visuals';

const capabilities = [
  ['Product & UX strategy', 'Framing problems, mapping journeys, and sequencing complex flows into usable experiences.'],
  ['AI-assisted design workflows', 'Prompting for ideation, interaction copy, and rapid prototyping — with a human quality bar.'],
  ['Accessibility leadership', 'WCAG, Section 508, and UDL as design inputs, not a final audit.'],
  ['Technical collaboration', 'Turning ambiguity into specs engineers can build directly from.'],
  ['Systems translation', 'Making complex, technical subject matter clear for real people.'],
  ['Design systems thinking', 'Reusable patterns and structures that scale across products.'],
];

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="container hero">
          <div>
            <p className="eyebrow">{site.role}</p>
            <h1 className="balance">{site.tagline}</h1>
            <p className="lead balance" style={{ marginTop: '0.75rem' }}>{site.positioning}</p>
            <div className="btn-row" style={{ marginTop: '1.75rem' }}>
              <Link href="/work" className="btn btn-primary">View my work</Link>
              <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
            </div>
          </div>
          <AbstractVisual
            name="system-translation"
            caption="How I think: complex systems → one clear, staged experience"
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <p className="divider-label">What I do</p>
          <div className="grid grid-3" style={{ marginTop: '1.5rem' }}>
            {capabilities.map(([title, body]) => (
              <div className="feature" key={title}>
                <h3>{title}</h3>
                <p className="muted small">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 style={{ margin: 0 }}>Case studies</h2>
              <p className="muted" style={{ maxWidth: 560, marginTop: '0.5rem' }}>
                Told through process and decisions — no proprietary interfaces required.
              </p>
            </div>
            <Link href="/work" className="btn btn-ghost">All work →</Link>
          </div>
          <div className="grid grid-2" style={{ marginTop: '1.75rem' }}>
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
            <h2 className="balance" style={{ marginBottom: '0.5rem' }}>Let’s build something clear.</h2>
            <p className="muted balance" style={{ maxWidth: 560, margin: '0 auto 1.5rem' }}>
              Open to Product Designer, UX, and AI-assisted design roles where complexity needs to become usable.
            </p>
            <div className="btn-row" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-primary">Contact me</Link>
              <Link href="/resume" className="btn btn-ghost">See résumé</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
