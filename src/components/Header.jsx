import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, LogIn } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { href: '#dor-solucao', label: 'A Solução' },
  { href: '#sistema', label: 'Funcionalidades' },
  { href: '#email-agenda', label: 'E-mail & Agenda' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#planos', label: 'Planos' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(9, 9, 11, 0.88)' : 'rgba(9, 9, 11, 0.65)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-default)' : 'var(--border-subtle)'}`,
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <div
        className="container"
        style={{
          height: '4.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <a href="#dor-solucao" aria-label="clik. início" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Logo size="medium" />
        </a>

        <nav
          className="desktop-only"
          style={{
            alignItems: 'center',
            gap: '1.65rem',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <a
            href="https://app.useclik.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-only"
            style={{
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              transition: 'color 150ms ease, background-color 150ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <LogIn size={14} />
            <span>Entrar</span>
          </a>

          <a
            href="https://app.useclik.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <span>Perca menos clientes</span>
            <ArrowRight size={14} />
          </a>

          <button
            type="button"
            className="mobile-only"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)',
              width: '38px',
              height: '38px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-default)',
            padding: '1.25rem 1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.95rem',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                padding: '0.25rem 0',
              }}
            >
              {item.label}
            </a>
          ))}
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '0.25rem 0' }} />
          <a
            href="https://app.useclik.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
            }}
          >
            Já tenho conta → Entrar
          </a>
          <a
            href="https://app.useclik.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <span>Perca menos clientes</span>
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
