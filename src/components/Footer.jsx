import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer
        style={{
          backgroundColor: 'var(--bg-void)',
          borderTop: '1px solid var(--border-subtle)',
          padding: '2rem 0 4.5rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Logo size="small" />
            <span>A plataforma para negócios que vivem de agenda.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="#sistema" style={{ color: 'var(--text-secondary)' }}>
              Produto
            </a>
            <a href="#email-agenda" style={{ color: 'var(--text-secondary)' }}>
              E-mail e agenda
            </a>
            <a href="#avaliacoes" style={{ color: 'var(--text-secondary)' }}>
              Relatos
            </a>
            <a href="#planos" style={{ color: 'var(--text-secondary)' }}>
              Planos
            </a>
            <a href="#faq" style={{ color: 'var(--text-secondary)' }}>
              FAQ
            </a>
            <a
              href="https://app.useclik.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-primary)', fontWeight: 500 }}
            >
              Entrar →
            </a>
          </div>
        </div>
      </footer>

      {showSticky && (
        <div
          className="mobile-btn"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 95,
            backgroundColor: 'rgba(10, 10, 11, 0.94)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderTop: '1px solid var(--border-default)',
            padding: '0.6rem 1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <span style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
            Grátis · Sem cartão
          </span>
          <a
            href="https://app.useclik.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <span>Perca menos clientes</span>
            <ArrowRight size={13} />
          </a>
        </div>
      )}
    </>
  );
}
