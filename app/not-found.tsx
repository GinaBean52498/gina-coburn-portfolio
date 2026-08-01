import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container prose" style={{ textAlign: 'center' }}>
        <p className="eyebrow">404</p>
        <h1>This page wandered off.</h1>
        <p className="lead">The link may be old or mistyped. Let’s get you back on track.</p>
        <div className="btn-row" style={{ justifyContent: 'center', marginTop: '1rem' }}>
          <Link href="/" className="btn btn-primary">Home</Link>
          <Link href="/work" className="btn btn-ghost">View work</Link>
        </div>
      </div>
    </section>
  );
}
