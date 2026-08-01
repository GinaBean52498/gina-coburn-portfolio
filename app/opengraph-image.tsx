import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

// Branded social share image (LinkedIn, Slack, etc.). Generated at build — no
// binary asset to maintain. Applies site-wide via the App Router file convention.
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#faf9f6',
          color: '#16181d',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* accent bar */}
        <div style={{ display: 'flex', width: 96, height: 8, background: '#0f7a6b', borderRadius: 999 }} />

        {/* main */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#0b5d51',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            {site.role}
          </div>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 600, lineHeight: 1.05, letterSpacing: -1 }}>
            {site.name}
          </div>
          <div style={{ display: 'flex', fontSize: 40, color: '#33383f', marginTop: 20, maxWidth: 900, lineHeight: 1.2 }}>
            {site.tagline}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'Arial, sans-serif',
            fontSize: 24,
            color: '#5b6270',
          }}
        >
          <div style={{ display: 'flex' }}>{site.url.replace(/^https?:\/\//, '')}</div>
          <div style={{ display: 'flex', color: '#0b5d51', fontWeight: 700 }}>Portfolio</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
