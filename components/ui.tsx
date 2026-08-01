import Link from 'next/link';
import type { CaseStudy } from '@/content/caseStudies';

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t} className="tag">{t}</li>
      ))}
    </ul>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.slug}`} className="card">
      <div className="card-meta">{study.category} · {study.year}</div>
      <h3 style={{ marginTop: '0.4rem' }}>{study.title}</h3>
      <p className="muted" style={{ marginBottom: '0.9rem' }}>{study.summary}</p>
      <Tags items={study.tags.slice(0, 3)} />
      <span
        aria-hidden="true"
        style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--accent-strong)', fontWeight: 600 }}
      >
        Read the case study →
      </span>
    </Link>
  );
}
