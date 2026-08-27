import React from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import Logo from './Logo';

export default function CTASection() {
  return (
    <section id="criar-agenda" className="section" style={{
      backgroundColor: 'var(--bg-surface)',
      borderBottom: 'none',
      paddingTop: 'clamp(4rem, 8vw, 6rem)',
      paddingBottom: 'clamp(4rem, 8vw, 6rem)'
    }}>
      <div className="container">
        <div className="clik-card" style={{
          backgroundColor: '#ffffff',
          color: '#0a0a0c',
          padding: 'clamp(2rem, 5vw, 4.5rem)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
          borderColor: '#ffffff',
          boxShadow: '0 20px 60px rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 0.875rem',
            borderRadius: '9999px',
            backgroundColor: '#0a0a0c',
            color: '#ffffff',
            fontSize: '0.75rem',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
            marginBottom: '1.5rem'
          }}>
            ORGANIZAÇÃO & CONTROLE
          </div>

          <h2 style={{
            fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: '#0a0a0c',
            maxWidth: '820px',
            margin: '0 auto 1.25rem auto'
          }}>
            Sua agenda não precisa ser o limite do seu negócio.
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            color: '#4a4a52',
            maxWidth: '620px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.5
          }}>
            Comece a organizar seus horários, clientes, equipe e resultados em um só lugar. Configure sua conta em menos de 2 minutos.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a 
              href="https://app.useclik.com.br/register" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-lg btn-mobile-full" 
              style={{
                backgroundColor: '#0a0a0c',
                color: '#ffffff',
                padding: '0.875rem 2rem',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                minHeight: '48px'
              }}
            >
              <span>Inicie agora</span>
              <ArrowRight size={18} />
            </a>
            <a href="#como-funciona" className="btn btn-lg btn-mobile-full" style={{
              backgroundColor: 'transparent',
              color: '#0a0a0c',
              border: '1px solid #d1d1d6',
              padding: '0.875rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              textDecoration: 'none',
              minHeight: '48px'
            }}>
              <span>Ver como funciona</span>
            </a>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.75rem',
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
              <span>Configuração rápida</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <Shield size={16} color="#0a0a0c" />
              <span>Suporte prioritário</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

