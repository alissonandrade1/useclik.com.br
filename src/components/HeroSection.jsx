import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="section"
      style={{
        paddingTop: 'clamp(4.75rem, 7vw, 5.75rem)',
        paddingBottom: 'clamp(2.25rem, 4vw, 3.25rem)',
      }}
    >
      <div className="container">
        <div className="hero-layout">
          {/* LEFT: Latent Pain + Concrete Solution + Direct CTA */}
          <div>
            <span className="section-label">
              para barbearias, salões, estúdios e quem vive de horário marcado
            </span>

            <h1
              style={{
                fontSize: 'clamp(1.75rem, 3.3vw, 2.55rem)',
                fontWeight: 800,
                letterSpacing: '-0.034em',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '0.85rem',
              }}
            >
              Enquanto você atende um cliente, perde outro esperando resposta no WhatsApp.
            </h1>

            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.55,
                marginBottom: '1rem',
                maxWidth: '540px',
              }}
            >
              Demorar duas horas para responder <em>"tem horário hoje?"</em> faz o cliente fechar em
              outro lugar. E quando alguém marca na conversa e esquece de ir, a cadeira fica vazia e
              você absorve o prejuízo.
            </p>

            {/* Real Solution — Plain, Unboxed, Scannable */}
            <div
              style={{
                borderLeft: '2px solid var(--border-strong)',
                paddingLeft: '0.9rem',
                marginBottom: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                Como a clik. resolve isso na prática:
              </div>

              {[
                'Um link próprio onde seu cliente escolhe serviço e horário livre sozinho em 20s.',
                'Horário travado na hora, com confirmação enviada no seu e-mail e na sua agenda.',
                'Controle direto de faturamento, faltas e clientes que sumiram há mais de 60 dias.',
              ].map((line, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.45,
                  }}
                >
                  <Check
                    size={14}
                    color="var(--accent-green)"
                    style={{ marginTop: '3px', flexShrink: 0 }}
                  />
                  <span>{line}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA Right Below */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                flexWrap: 'wrap',
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
                <span>Ver o sistema</span>
              </a>
            </div>

            <div
              className="font-mono"
              style={{
                marginTop: '0.75rem',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
              }}
            >
              Comece grátis · Sem cartão de crédito · Configura em 5 minutos
            </div>
          </div>

          {/* RIGHT: Single Flat Architectural Comparison Panel (No Nested Cards) */}
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}
          >
            {/* Top Header Row */}
            <div
              style={{
                padding: '0.65rem 1rem',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
              }}
              className="font-mono"
            >
              <span>Barbearia Navalha Club · Terça-feira</span>
              <span>comparativo real</span>
            </div>

            {/* Section A: Sem a clik. */}
            <div style={{ padding: '0.9rem 1rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.6rem',
                  fontSize: '0.75rem',
                }}
              >
                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>
                  No improviso (WhatsApp + papel)
                </span>
                <span className="font-mono" style={{ color: '#f87171', fontWeight: 600 }}>
                  - R$ 140 na tarde
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span>
                    <strong className="font-mono" style={{ color: 'var(--text-muted)', fontWeight: 500 }}>
                      14:12
                    </strong>{' '}
                    · Mensagem sem resposta durante um corte
                  </span>
                  <span className="font-mono" style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
                    -R$ 55
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span>
                    <strong className="font-mono" style={{ color: 'var(--text-muted)', fontWeight: 500 }}>
                      15:00
                    </strong>{' '}
                    · Cliente marcado de boca esqueceu de ir
                  </span>
                  <span className="font-mono" style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
                    -R$ 85
                  </span>
                </div>
              </div>
            </div>

            {/* Section B: Com a clik. */}
            <div style={{ padding: '0.95rem 1rem', backgroundColor: '#131317' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.65rem',
                  fontSize: '0.75rem',
                }}
              >
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  Com o link da clik. ativo
                </span>
                <span className="ui-status ui-status-green font-mono">● Agenda online</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                  }}
                >
                  <div>
                    <span className="font-mono" style={{ color: 'var(--accent-green)', fontSize: '0.75rem' }}>
                      14:13
                    </span>{' '}
                    · <strong>Gabriel Ferreira</strong> agendou sozinho (Corte + Barba)
                  </div>
                  <span className="font-mono" style={{ fontWeight: 700, flexShrink: 0 }}>
                    +R$ 85
                  </span>
                </div>

                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                  Horário de 15:00 bloqueado na agenda · Aviso enviado no seu e-mail e comprovante no
                  e-mail do cliente.
                </div>

                <div
                  style={{
                    marginTop: '0.35rem',
                    paddingTop: '0.6rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    fontSize: '0.73rem',
                    color: 'var(--text-secondary)',
                  }}
                  className="font-mono"
                >
                  <span>Presença: 96,8%</span>
                  <span>6 inativos (60d+) listados</span>
                  <span>LTV calculado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
