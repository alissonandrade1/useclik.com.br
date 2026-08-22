import React from 'react';

export default function Logo({ size = 'medium', className = '' }) {
  const fontSize = size === 'small' ? '1.25rem' : size === 'large' ? '2.25rem' : '1.5rem';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }} className={className}>
      <span 
        style={{
          fontSize: fontSize,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: '#ffffff',
          fontFamily: "'JetBrains Mono', 'Inter', monospace",
          lineHeight: 1,
          display: 'inline-flex',
          alignItems: 'baseline'
        }}
      >
        clik<span style={{ color: '#3B82F6', fontWeight: 900 }}>.</span>
      </span>
    </div>
  );
}
