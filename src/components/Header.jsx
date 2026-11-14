import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { href: '#sistema', label: 'Produto' },
  { href: '#email-agenda', label: 'E-mail e agenda' },
  { href: '#avaliacoes', label: 'Relatos' },
  { href: '#planos', label: 'Planos' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'rgba(10, 10, 11, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div
        className="container"
        style={{
          height: '3.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#inicio" aria-label="clik. início" style={{ display: 'inline-flex' }}>
            <Logo size="small" />
          </a>

          <nav className="desktop-nav" style={{ alignItems: 'center', gap: '1.35rem' }}>
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: '0.825rem',
                  color: 'var(--text-secondary)',
                  transition: 'color 140ms ease',
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
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <a
            href="https://app.useclik.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-nav"
            style={{
              fontSize: '0.825rem',
              color: 'var(--text-secondary)',
              padding: '0.4rem 0.65rem',
            }}
          >
            Entrar
          </a>

          <a
            href="https://app.useclik.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <span>Perca menos clientes</span>
            <ArrowRight size={13} />
          </a>

          <button
            type="button"
            className="mobile-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xs)',
              color: 'var(--text-primary)',
              width: '34px',
              height: '34px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            backgroundColor: 'var(--bg-main)',
            borderBottom: '1px solid var(--border-default)',
            padding: '1rem 1.25rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: '0.9rem', color: 'var(--text-primary)', padding: '0.2rem 0' }}
            >
              {item.label}
            </a>
          ))}
          <div
            style={{
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}
          >
            <a
              href="https://app.useclik.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}
            >
              Já tem conta? Entrar →
            </a>
            <a
              href="https://app.useclik.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <span>Perca menos clientes</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
