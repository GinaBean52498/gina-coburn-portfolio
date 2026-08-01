/**
 * Abstract, brand-neutral SVG diagrams — communicate process/systems WITHOUT
 * showing any real product UI. All colors come from theme tokens so they adapt
 * to light/dark automatically.
 */
import type { Visual } from '@/content/caseStudies';

const stroke = 'var(--border)';
const ink = 'var(--ink)';
const muted = 'var(--muted)';
const accent = 'var(--accent)';

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg className="visual" viewBox="0 0 480 300" role="img" aria-label={label}>
      <rect x="0" y="0" width="480" height="300" fill="var(--surface)" />
      {children}
    </svg>
  );
}

/* Complex tangle of inputs → clean staged sequence */
function SystemTranslation() {
  const nodes = [
    [40, 70], [70, 130], [45, 195], [95, 90], [110, 165], [130, 60], [85, 235],
  ];
  return (
    <Frame label="A complex, many-input system translated into a clear staged sequence">
      {/* messy web on the left */}
      {nodes.map(([x, y], i) =>
        nodes.slice(i + 1).map(([x2, y2], j) => (
          <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke={stroke} strokeWidth="1" />
        )),
      )}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill={muted} />
      ))}
      <text x="85" y="278" textAnchor="middle" fill={muted} fontSize="12" fontFamily="var(--font-sans)">complex system</text>

      {/* arrow */}
      <path d="M175 150 h40" stroke={accent} strokeWidth="2" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill={accent} />
        </marker>
      </defs>

      {/* clean staged steps on the right */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="245" y={60 + i * 45} width="190" height="32" rx="8" fill="var(--surface-2)" stroke={stroke} />
          <circle cx="263" cy={76 + i * 45} r="7" fill={accent} />
          <rect x="282" y={71 + i * 45} width={110 - i * 8} height="5" rx="2.5" fill={ink} opacity="0.65" />
        </g>
      ))}
      <text x="340" y="278" textAnchor="middle" fill={muted} fontSize="12" fontFamily="var(--font-sans)">one guided sequence</text>
    </Frame>
  );
}

/* Anonymized end-to-end flow */
function AnonymizedFlow() {
  const steps = ['Enter', 'Set up', 'Build', 'Review', 'Launch'];
  return (
    <Frame label="An anonymized end-to-end flow from entry to launch">
      {steps.map((s, i) => {
        const x = 30 + i * 88;
        return (
          <g key={s}>
            {i < steps.length - 1 && (
              <line x1={x + 58} y1={150} x2={x + 88} y2={150} stroke={stroke} strokeWidth="2" markerEnd="url(#arrow2)" />
            )}
            <rect x={x} y={120} width="58" height="60" rx="10" fill="var(--surface-2)" stroke={i === 3 ? accent : stroke} strokeWidth={i === 3 ? '2' : '1'} />
            <circle cx={x + 29} cy={144} r="9" fill={i === 3 ? accent : muted} />
            <rect x={x + 12} y={162} width="34" height="5" rx="2.5" fill={ink} opacity="0.5" />
            <text x={x + 29} y={200} textAnchor="middle" fill={muted} fontSize="11" fontFamily="var(--font-sans)">{s}</text>
          </g>
        );
      })}
      <text x="240" y="70" textAnchor="middle" fill={ink} fontSize="13" fontFamily="var(--font-sans)" fontWeight="600">Consistent structure at every step</text>
      <defs>
        <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill={muted} />
        </marker>
      </defs>
    </Frame>
  );
}

/* AI-assisted iteration loop with a human quality gate */
function AILoop() {
  const cx = 240, cy = 155, r = 78;
  const pts = [
    { a: -90, t: 'Frame' },
    { a: -18, t: 'Prompt' },
    { a: 54, t: 'Draft' },
    { a: 126, t: 'Evaluate' },
    { a: 198, t: 'Refine' },
  ];
  const pos = (a: number) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)] as const;
  return (
    <Frame label="An AI-assisted iteration loop with a human quality gate at the center">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={stroke} strokeWidth="2" strokeDasharray="4 6" />
      {pts.map((p) => {
        const [x, y] = pos(p.a);
        return (
          <g key={p.t}>
            <circle cx={x} cy={y} r="8" fill={accent} />
            <text x={x} y={y - 14} textAnchor="middle" fill={muted} fontSize="11" fontFamily="var(--font-sans)">{p.t}</text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="34" fill="var(--surface-2)" stroke={accent} strokeWidth="2" />
      <text x={cx} y={cy - 3} textAnchor="middle" fill={ink} fontSize="12" fontFamily="var(--font-sans)" fontWeight="700">Human</text>
      <text x={cx} y={cy + 13} textAnchor="middle" fill={ink} fontSize="12" fontFamily="var(--font-sans)" fontWeight="700">judgment</text>
      <text x={cx} y={280} textAnchor="middle" fill={muted} fontSize="12" fontFamily="var(--font-sans)">AI accelerates the loop; a person decides what ships</text>
    </Frame>
  );
}

/* Accessibility as layered defaults */
function AccessibilityLayers() {
  const layers = [
    { w: 380, label: 'Perceivable — contrast, text scaling, alt text' },
    { w: 320, label: 'Operable — keyboard, focus, reduced motion' },
    { w: 260, label: 'Understandable — plain language, clear states' },
    { w: 200, label: 'Robust — semantic, standards-based' },
  ];
  return (
    <Frame label="Accessibility built as layered defaults rather than a final checklist">
      {layers.map((l, i) => {
        const x = (480 - l.w) / 2;
        const y = 55 + i * 48;
        return (
          <g key={l.label}>
            <rect x={x} y={y} width={l.w} height="36" rx="8" fill="var(--surface-2)" stroke={i === 0 ? accent : stroke} strokeWidth={i === 0 ? '2' : '1'} />
            <text x="240" y={y + 23} textAnchor="middle" fill={ink} fontSize="11.5" fontFamily="var(--font-sans)">{l.label}</text>
          </g>
        );
      })}
      <text x="240" y="278" textAnchor="middle" fill={muted} fontSize="12" fontFamily="var(--font-sans)">Designed-in from the first layer up</text>
    </Frame>
  );
}

const MAP = {
  'system-translation': SystemTranslation,
  'anonymized-flow': AnonymizedFlow,
  'ai-loop': AILoop,
  'accessibility-layers': AccessibilityLayers,
} as const;

export function AbstractVisual({ name, caption }: { name: Visual; caption?: string }) {
  const Cmp = MAP[name];
  return (
    <figure style={{ margin: 0 }}>
      <Cmp />
      {caption && <figcaption className="visual-caption">{caption}</figcaption>}
    </figure>
  );
}
