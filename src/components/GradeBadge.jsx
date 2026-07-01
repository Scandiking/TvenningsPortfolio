import React from 'react';

const GRADE_STYLES = {
  A: 'bg-success-500 text-white',
  B: 'bg-primary-500 text-white',
  C: 'bg-warning-500 text-white',
  D: 'bg-warning-300 text-default-900',
  E: 'bg-danger-500 text-white',
  F: 'bg-default-800 text-white',
};

function GradeBadge({ grade }) {
  const styles = GRADE_STYLES[grade] ?? 'bg-default-400 text-white';
  return (
    <span className={`inline-flex items-center gap-1.5 font-body font-semibold text-xs px-3 py-1 rounded-full ${styles}`}>
      Karakter: {grade}
    </span>
  );
}

export default GradeBadge;
