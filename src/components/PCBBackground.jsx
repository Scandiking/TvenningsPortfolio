import React from 'react';

const DOT = 10;

const TRACES = [
  // y = 120
  "M 0 120 H 200", "M 200 120 H 400", "M 400 120 H 600",
  "M 600 120 H 800", "M 800 120 H 1000",
  // y = 260 (no far-right segment)
  "M 0 260 H 200", "M 200 260 H 400", "M 400 260 H 600", "M 600 260 H 800",
  // y = 400
  "M 0 400 H 200", "M 200 400 H 400", "M 400 400 H 600",
  "M 600 400 H 800", "M 800 400 H 1000",
  // y = 540
  "M 0 540 H 200", "M 200 540 H 400", "M 400 540 H 600",
  "M 600 540 H 800", "M 800 540 H 1000",
  // y = 680 (no far edges)
  "M 200 680 H 400", "M 400 680 H 600", "M 600 680 H 800",

  // x = 200 verticals
  "M 200 120 V 260", "M 200 260 V 400", "M 200 400 V 540", "M 200 540 V 680",
  // x = 400 verticals
  "M 400 120 V 260", "M 400 260 V 400", "M 400 400 V 540", "M 400 540 V 680",
  // x = 600 verticals
  "M 600 120 V 260", "M 600 260 V 400", "M 600 400 V 540", "M 600 540 V 680",
  // x = 800 verticals
  "M 800 120 V 260", "M 800 260 V 400", "M 800 400 V 540", "M 800 540 V 680",

  // Edge stubs
  "M 0 120 V 260", "M 0 400 V 540",
  "M 1000 120 V 260", "M 1000 400 V 540",
];

const VIAS = [
  [200, 120], [400, 120], [600, 120], [800, 120],
  [200, 260], [400, 260], [600, 260], [800, 260],
  [200, 400], [400, 400], [600, 400], [800, 400],
  [200, 540], [400, 540], [600, 540], [800, 540],
  [200, 680], [400, 680], [600, 680], [800, 680],
  [0, 120], [0, 260], [0, 400], [0, 540],
  [1000, 120], [1000, 260], [1000, 400], [1000, 540],
];

// Lengths are exact: 200px horizontal segments, 140px vertical segments
const SIGNALS = [
  { d: "M 0 120 H 200 V 260 H 400 V 400 H 200 V 540 H 400 V 680", len: 1360, delay: 0,   dur: 16  },
  { d: "M 1000 120 H 800 V 260 H 600 V 400 H 800 V 540 H 600 V 680", len: 1360, delay: 4,   dur: 17  },
  { d: "M 400 120 V 260 H 600 V 400 H 400 V 540 H 600 V 680 H 800",  len: 1360, delay: 2,   dur: 15  },
  { d: "M 0 260 H 200 V 400 H 0",                                     len: 540,  delay: 7,   dur: 8   },
  { d: "M 1000 400 H 800 V 540 H 1000",                               len: 540,  delay: 1,   dur: 8   },
  { d: "M 0 540 H 200 V 680 H 400",                                   len: 540,  delay: 10,  dur: 9   },
];

const css = `
  .pcb-wrap {
    --pcb-trace: rgba(147, 174, 232, 0.22);
    --pcb-via:   rgba(147, 174, 232, 0.35);
    --pcb-sig:   rgba(52, 97, 209, 0.6);
  }
  .dark .pcb-wrap {
    --pcb-trace: rgba(52, 97, 209, 0.15);
    --pcb-via:   rgba(52, 97, 209, 0.25);
    --pcb-sig:   rgba(91, 127, 224, 0.5);
  }
  ${SIGNALS.map(({ len, delay, dur }, i) => `
    .pcb-s${i} {
      stroke-dasharray: ${DOT} ${len + DOT};
      animation: pcbPulse${i} ${dur}s ${delay}s linear infinite;
    }
    @keyframes pcbPulse${i} {
      0%   { stroke-dashoffset:  ${DOT}; }
      100% { stroke-dashoffset: -${len}; }
    }
  `).join('')}
`;

const PCBBackground = () => (
  <>
    <style>{css}</style>
    <svg
      viewBox="0 0 1000 760"
      preserveAspectRatio="xMidYMid slice"
      className="pcb-wrap absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Static traces */}
      <g fill="none" strokeWidth="1.5" stroke="var(--pcb-trace)">
        {TRACES.map((d, i) => <path key={i} d={d} />)}
      </g>

      {/* Via pads */}
      <g fill="var(--pcb-via)">
        {VIAS.map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="3.5" />)}
      </g>

      {/* Signal pulses — no blur filter (performance) */}
      {SIGNALS.map(({ d }, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          stroke="var(--pcb-sig)"
          className={`pcb-s${i}`}
        />
      ))}
    </svg>
  </>
);

export default PCBBackground;
