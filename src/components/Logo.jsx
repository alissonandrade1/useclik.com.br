import React from 'react';

export default function Logo({ size = 'medium', showDomain = true, className = '' }) {
  const fontSize = size === 'small' ? '1.25rem' : size === 'large' ? '2.25rem' : '1.5rem';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }} className={className}>
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
        cLiK<span style={{ color: '#3B82F6', fontWeight: 900 }}>.</span>
      </span>

      {showDomain && (
        <span style={{
          fontSize: '0.875rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          marginLeft: '0.125rem'
        }}>
          com.br
        </span>
      )}
    </div>
  );
}
