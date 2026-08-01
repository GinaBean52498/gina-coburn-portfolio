import Link from 'next/link';
import { site } from '@/lib/site';

export function SiteFooter() {
  const year = 2026; // static to avoid hydration mismatch; update as needed
  return (
    <footer className="site-footer">
      <div className="container cols">
        <div>
          <div className="brand" style={{ fontSize: '1rem' }}>{site.shortName}</div>
          <p className="small muted" style={{ margin: '0.35rem 0 0' }}>{site.role}</p>
        </div>
        <nav aria-label="Footer" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/process">Process</Link>
          <Link href="/contact">Contact</Link>
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
        <p className="small muted" style={{ margin: 0 }}>© {year} {site.name}</p>
      </div>
    </footer>
  );
}
