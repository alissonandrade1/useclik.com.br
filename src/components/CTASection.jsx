import React from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="criar-agenda" className="section" style={{
      backgroundColor: 'var(--bg-surface)',
      borderBottom: 'none',
      paddingTop: '6rem',
      paddingBottom: '6rem'
    }}>
      <div className="container">
        <div className="clik-card" style={{
          backgroundColor: '#ffffff',
          color: '#0a0a0c',
          padding: 'clamp(2.5rem, 5vw, 4.5rem)',
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
            SUA AGENDA É SÓ O COMEÇO
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#0a0a0c',
            maxWidth: '800px',
            margin: '0 auto 1.25rem auto'
          }}>
            Tenha controle sobre cada horário. E sobre tudo o que acontece depois dele.
          </h2>

          <p style={{
            fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)',
            color: '#4a4a52',
            maxWidth: '600px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.5
          }}>
            Crie sua conta em menos de 2 minutos. Configure seus serviços, profissionais e compartilhe seu link de agendamento online hoje mesmo.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button className="btn btn-lg" style={{
              backgroundColor: '#0a0a0c',
              color: '#ffffff',
              padding: '1rem 2.25rem',
              fontSize: '1.0625rem',
              fontWeight: 700
            }}>
              <span>Criar minha agenda agora</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
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
              <span>Configuração rápida em 2 minutos</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <Shield size={16} color="#0a0a0c" />
              <span>Suporte via WhatsApp incluso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
