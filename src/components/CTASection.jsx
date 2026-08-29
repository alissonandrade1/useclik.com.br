import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="criar-agenda" className="section" style={{
      backgroundColor: 'var(--bg-surface)',
      borderBottom: 'none',
      paddingTop: 'clamp(4rem, 8vw, 7rem)',
      paddingBottom: 'clamp(4rem, 8vw, 7rem)'
    }}>
      <div className="container">
        <div style={{
          backgroundColor: '#ffffff',
          color: '#0a0a0c',
          padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4.5rem)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
          boxShadow: '0 30px 80px rgba(255, 255, 255, 0.08)',
          position: 'relative',
          overflow: 'hidden'
        }}>

          {/* Subtle background pattern */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,0,0,0.03) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(0,0,0,0.03) 0%, transparent 50%)`,
            pointerEvents: 'none'
          }} />

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            borderRadius: '9999px',
            backgroundColor: '#0a0a0c',
            color: '#ffffff',
            fontSize: '0.75rem',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
            marginBottom: '1.75rem',
            letterSpacing: '0.05em'
          }}>
            <Zap size={12} fill="currentColor" />
            COMECE HOJE. DE GRAÇA. SEM CARTÃO.
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.1,
            color: '#0a0a0c',
            maxWidth: '800px',
            margin: '0 auto 1.25rem auto'
          }}>
            Sua agenda é só o começo.
          </h2>

          {/* Subheadline */}
          <p style={{
            fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
            color: '#4a4a52',
            maxWidth: '580px',
            margin: '0 auto 2.75rem auto',
            lineHeight: 1.55
          }}>
            Configure em menos de 5 minutos. Compartilhe seu link. Deixe os clientes agendar sozinhos — e volte a focar no que você faz de melhor.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}>
            <a
              href="https://app.useclik.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-mobile-full"
              style={{
                backgroundColor: '#0a0a0c',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: 700,
                textDecoration: 'none',
                minHeight: '52px',
                padding: '0.875rem 2rem'
              }}
            >
              <span>Criar minha agenda grátis</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#planos"
              className="btn btn-lg btn-mobile-full"
              style={{
                backgroundColor: 'transparent',
                color: '#0a0a0c',
                border: '1px solid #d1d1d6',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                minHeight: '52px',
                padding: '0.875rem 2rem'
              }}
            >
              <span>Ver planos e preços</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(1rem, 3vw, 2rem)',
            fontSize: '0.875rem',
            color: '#62626e',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <CheckCircle2 size={16} color="#0a0a0c" />
              <span>Sem cartão de crédito</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <CheckCircle2 size={16} color="#0a0a0c" />
              <span>Configure em 5 minutos</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <CheckCircle2 size={16} color="#0a0a0c" />
              <span>Cancele quando quiser</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <Shield size={16} color="#0a0a0c" />
              <span>Dados protegidos (LGPD)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
