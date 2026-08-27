import React from 'react';
import { ArrowRight, Menu, X, LogIn } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(10, 10, 12, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4.5rem'
      }}>
        {/* Official Brand Logo */}
        <a href="/home" style={{ textDecoration: 'none' }}>
          <Logo size="medium" />
        </a>

        {/* Nav Desktop Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.75rem'
        }} className="desktop-nav">
          <a href="#transformacao" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Antes & Depois
          </a>
          <a href="#como-funciona" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Como Funciona
          </a>
          <a href="#solucoes" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Soluções
          </a>
          <a href="#calculadora" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Calculadora
          </a>
          <a href="#planos" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Planos
          </a>
          <a href="#segmentos" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Para quem é
          </a>
        </nav>

        {/* CTA Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <a 
            href="https://app.useclik.com.br/login" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--text-primary)', 
              textDecoration: 'none', 
              fontSize: '0.875rem', 
              fontWeight: 500,
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius-md)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              transition: 'background-color 150ms'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <LogIn size={15} />
            <span>Faça login</span>
          </a>

          <a 
            href="https://app.useclik.com.br/register" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
          >
            <span>Inicie agora</span>
            <ArrowRight size={15} />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-toggle"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          <a href="#transformacao" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Antes & Depois</a>
          <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Como Funciona</a>
          <a href="#solucoes" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Soluções</a>
          <a href="#calculadora" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Calculadora</a>
          <a href="#planos" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Planos & Preços</a>
          <a href="#segmentos" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Para quem é</a>
          <hr style={{ borderColor: 'var(--border-subtle)', margin: '0.25rem 0' }} />
          <a href="https://app.useclik.com.br/login" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>Faça login</a>
          <a href="https://app.useclik.com.br/register" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
            <span>Inicie agora</span>
            <ArrowRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}

