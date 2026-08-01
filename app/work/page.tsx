import type { Metadata } from 'next';
import { caseStudies } from '@/content/caseStudies';
import { CaseStudyCard } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies in product strategy, experience design at scale, interactive learning products, and accessibility leadership — told through process, not proprietary screens.',
};

export default function WorkPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Work</p>
        <h1 className="balance">Case studies</h1>
        <p className="lead prose" style={{ marginTop: '0.75rem' }}>
          Each study leads with thinking, decisions, and outcomes — deliberately abstracted so it
          shows how I work without exposing any proprietary interfaces or IP.
        </p>
        <div className="grid grid-2" style={{ marginTop: '2rem' }}>
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
