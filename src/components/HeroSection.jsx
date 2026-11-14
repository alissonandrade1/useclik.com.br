import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="section"
      style={{
        paddingTop: 'clamp(5.25rem, 8.5vw, 6.75rem)',
        paddingBottom: 'clamp(2.75rem, 5vw, 4rem)',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(1.9rem, 4.2vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.036em',
              lineHeight: 1.08,
              color: 'var(--text-primary)',
              marginBottom: '0.9rem',
            }}
          >
            Enquanto você atende, perde clientes esperando no WhatsApp.
          </h1>

          <p
            style={{
              fontSize: 'clamp(0.98rem, 1.6vw, 1.125rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              maxWidth: '540px',
              margin: '0 auto 1.5rem',
            }}
          >
            Com a <strong style={{ color: 'var(--text-primary)' }}>clik.</strong>, seu cliente
            escolhe serviço e horário livre sozinho em 20 segundos — sem você parar o atendimento e
            sem cadeira vazia.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem',
            }}
          >
            <a
              href="https://app.useclik.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg btn-full-xs"
            >
              <span>Perca menos clientes</span>
              <ArrowRight size={16} />
            </a>

            <a href="#sistema" className="btn btn-secondary btn-lg btn-full-xs">
              <span>Ver funcionando</span>
            </a>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem 1.35rem',
              flexWrap: 'wrap',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
            }}
          >
            {['Link próprio 24h', 'Aviso no e-mail e agenda', 'Grátis e sem cartão'].map(
              (item, i) => (
                <span
                  key={i}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Check size={13} color="var(--accent-green)" />
                  <span>{item}</span>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
