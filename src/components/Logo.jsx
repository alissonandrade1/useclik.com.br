import React from 'react';

export default function Logo({ size = 'medium', darkText = false, className = '' }) {
  const fontSize =
    size === 'small' ? '1.15rem' : size === 'large' ? '2.125rem' : '1.45rem';

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        fontSize,
        fontWeight: 800,
        letterSpacing: '-0.045em',
        color: darkText ? '#09090b' : '#fafafa',
        fontFamily: "'JetBrains Mono', 'Inter', monospace",
        lineHeight: 1,
        userSelect: 'none',
      }}
    >
      clik
      <span style={{ color: '#23ca82', fontWeight: 900 }}>.</span>
    </span>
  );
}
