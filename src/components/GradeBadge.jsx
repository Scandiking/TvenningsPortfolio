import React from 'react';

const GRADE_STYLES = {
  A: 'bg-[#2a9d5c] text-white',
  B: 'bg-brand-500 text-white',
  C: 'bg-[#e8901a] text-white',
  D: 'bg-[#f5c872] text-neutral-900',
  E: 'bg-[#cc3344] text-white',
  F: 'bg-neutral-800 text-white',
};

function GradeBadge({ grade }) {
  const styles = GRADE_STYLES[grade] ?? 'bg-neutral-400 text-white';
  return (
    <span className={`inline-flex items-center gap-1.5 font-body font-semibold text-xs px-3 py-1 rounded-full ${styles}`}>
      Karakter: {grade}
    </span>
  );
}

export default GradeBadge;
