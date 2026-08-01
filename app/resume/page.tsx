import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Résumé',
  description: `Résumé and experience highlights for ${site.name}.`,
};

const experience = [
  { role: 'Founder & CEO', org: 'Nerrative', years: '2020–Present', note: 'Product thinking, AI-assisted design workflows, technical collaboration, and accessibility-centered experience strategy for an NSF-supported, AI-powered platform.' },
  { role: 'Title V Instructional Designer & Accessibility Lead', org: 'Mt. San Antonio College', years: '2020–Present', note: 'Set Section 508 / WCAG / UDL standards across digital resources; scaled inclusive practice with faculty and stakeholders.' },
  { role: 'Instructional Designer', org: 'Florida International University', years: '2020–2022', note: 'Supported design and launch of 1,400+ online courses in Canvas during the pandemic response.' },
  { role: 'Instructional Designer', org: 'Green Flower Media', years: '2019–2020', note: 'Built interactive courses & certificate programs (Storyline, Captivate, video) with gamification and analytics-driven iteration.' },
];

const skills = [
  'Product thinking', 'UX strategy', 'AI-assisted design workflows', 'Accessibility (WCAG, 508, UDL)',
  'Design systems thinking', 'User flows & journey mapping', 'Technical content translation',
  'Cross-functional collaboration', 'Learning experience design', 'Agile workflows',
];

const tools = ['Claude', 'ChatGPT', 'Articulate Storyline', 'Adobe Captivate', 'Canvas LMS', 'SCORM/xAPI', 'JIRA', 'Confluence', 'Salesforce', 'Camtasia', 'Microsoft 365'];

export default function ResumePage() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'end', flexWrap: 'wrap' }}>
          <div>
            <p className="eyebrow">Résumé</p>
            <h1 style={{ margin: 0 }}>{site.name}</h1>
            <p className="muted" style={{ marginTop: '0.4rem' }}>{site.role} · {site.location}</p>
          </div>
          {/* TODO: drop your PDF at public{site.resumePath}. Button appears regardless. */}
          <a href={site.resumePath} className="btn btn-primary" download>
            Download résumé (PDF)
          </a>
        </div>

        <p className="small muted" style={{ marginTop: '0.75rem' }}>
          Note: place your résumé file at <code>public{site.resumePath}</code> so the download works.
        </p>

        <hr />

        <div className="grid grid-2">
          <div>
            <h2>Experience highlights</h2>
            <ul className="list-reset stack" style={{ marginTop: '1rem' }}>
              {experience.map((e) => (
                <li key={e.role + e.org}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                    <strong>{e.role}</strong>
                    <span className="small muted">{e.years}</span>
                  </div>
                  <div className="small" style={{ color: 'var(--accent-strong)', fontWeight: 600 }}>{e.org}</div>
                  <p className="muted small" style={{ margin: '0.25rem 0 0' }}>{e.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="stack">
            <div>
              <h2>Core skills</h2>
              <ul className="tags" style={{ marginTop: '0.75rem' }}>
                {skills.map((s) => <li key={s} className="tag">{s}</li>)}
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}>Tools & platforms</h3>
              <ul className="tags" style={{ marginTop: '0.5rem' }}>
                {tools.map((t) => <li key={t} className="tag">{t}</li>)}
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}>Education</h3>
              <p className="muted small" style={{ margin: 0 }}>
                Ph.D., Education (Instructional Design for Online Learning) — Capella University<br />
                M.S., Human Services — Capella University · B.A., English — Aurora University<br />
                Universal Learning Design Certification
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
