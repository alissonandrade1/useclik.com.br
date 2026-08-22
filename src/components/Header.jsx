import React from 'react';
import { Calendar, ArrowRight, Menu, X } from 'lucide-react';
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
        {/* Brand Logo */}
        <a href="/home" style={{ textDecoration: 'none' }}>
          <Logo size="medium" showDomain={true} />
        </a>

        {/* Nav Desktop Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-nav">
          <a href="#pilares" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Os 5 Pilares
          </a>
          <a href="#transformacao" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Transformação
          </a>
          <a href="#calculadora" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Calculadora de Faltas
          </a>
          <a href="#segmentos" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 150ms' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Para quem é
          </a>
        </nav>

        {/* CTA Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#criar-agenda" className="btn btn-primary btn-sm">
            <span>Criar minha agenda</span>
            <ArrowRight size={16} />
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
          gap: '1rem'
        }}>
          <a href="#pilares" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Os 5 Pilares</a>
          <a href="#transformacao" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Transformação</a>
          <a href="#calculadora" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Calculadora de Faltas</a>
          <a href="#segmentos" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Para quem é</a>
        </div>
      )}
    </header>
  );
}
