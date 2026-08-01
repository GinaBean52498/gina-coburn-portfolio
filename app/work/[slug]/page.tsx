import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy } from '@/content/caseStudies';
import { Tags } from '@/components/ui';
import { AbstractVisual } from '@/components/visuals';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: 'Case study not found' };
  return {
    title: study.title,
    description: study.summary,
    openGraph: { title: study.title, description: study.summary },
  };
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="cs-section">
      <h2>{title}</h2>
      <ul className="cs-list">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function TextSection({ title, body }: { title: string; body: string }) {
  return (
    <div className="cs-section">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article>
      <section className="section cs-hero">
        <div className="container">
          <Link href="/work" className="small" style={{ fontWeight: 600 }}>← All work</Link>
          <p className="eyebrow" style={{ marginTop: '1rem' }}>{study.category} · {study.year}</p>
          <h1 className="balance">{study.title}</h1>
          <p className="lead prose" style={{ marginTop: '0.5rem' }}>{study.subtitle}</p>
          <div style={{ marginTop: '1.25rem' }}>
            <Tags items={study.tags} />
          </div>
          <dl className="cs-meta">
            <div className="cell">
              <dt>My role</dt>
              <dd>{study.role}</dd>
            </div>
            <div className="cell">
              <dt>Audience</dt>
              <dd>{study.users}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem', maxWidth: 860, marginInline: 'auto' }}>
            <AbstractVisual name={study.visual} caption="Abstract representation — no proprietary UI shown" />
          </div>

          <div style={{ maxWidth: 720, marginInline: 'auto' }}>
            <TextSection title="Context" body={study.context} />
            <TextSection title="Problem" body={study.problem} />
            <ListSection title="Constraints" items={study.constraints} />
            <ListSection title="Approach" items={study.approach} />
            <ListSection title="Key decisions" items={study.keyDecisions} />

            {study.useOfAI && (
              <div className="cs-section">
                <div className="callout">
                  <p className="eyebrow">Use of AI</p>
                  <p style={{ margin: 0 }}>{study.useOfAI}</p>
                </div>
              </div>
            )}

            <TextSection title="Accessibility & ethics" body={study.accessibility} />
            <ListSection title="Outcome" items={study.outcome} />
            <TextSection title="Reflection" body={study.reflection} />

            <hr />
            <div className="btn-row">
              <Link href="/work" className="btn btn-ghost">← More case studies</Link>
              <Link href="/contact" className="btn btn-primary">Work with me →</Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
