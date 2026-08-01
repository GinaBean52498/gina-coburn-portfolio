import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.name} about Product Designer, UX, and AI-assisted design roles.`,
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container prose">
        <p className="eyebrow">Contact</p>
        <h1 className="balance">Let’s talk.</h1>
        <p className="lead">
          I’m open to Product Designer, UX, and AI-assisted design roles — especially where complex,
          technical, or high-stakes work needs to become clear and usable. The fastest way to reach
          me is email.
        </p>

        <div className="card stack" style={{ marginTop: '1.5rem' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.3rem' }}>Email</p>
            <a href={`mailto:${site.email}`} style={{ fontSize: '1.15rem', fontWeight: 600 }}>{site.email}</a>
          </div>
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.3rem' }}>LinkedIn</p>
            {/* TODO: set your real LinkedIn URL in lib/site.ts */}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
              Connect on LinkedIn →
            </a>
          </div>
          <div className="btn-row" style={{ marginTop: '0.5rem' }}>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent('Portfolio inquiry')}`}
              className="btn btn-primary"
            >
              Email me
            </a>
            <a href={site.resumePath} className="btn btn-ghost" download>Download résumé</a>
          </div>
        </div>

        <p className="small muted" style={{ marginTop: '1.25rem' }}>
          Prefer a form? A serverless contact form can be added later (e.g., a Next.js Route Handler
          + an email API). Email keeps the first version dependency-free and reliable.
        </p>
      </div>
    </section>
  );
}
