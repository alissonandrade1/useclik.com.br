import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  Mail,
  CalendarCheck,
  TrendingUp,
  Link2,
} from 'lucide-react';

const realSolutions = [
  {
    title: 'Seu cliente agenda sozinho em 20 segundos',
    desc: 'Você recebe um link próprio (ex: useclik.com.br/navalhaclub). O cliente escolhe serviço, profissional e horário livre sem esperar você parar o atendimento.',
  },
  {
    title: 'Horário travado na hora + tudo no seu e-mail',
    desc: 'Confirmou no link, a vaga fecha automaticamente contra duplicidade, chega no seu e-mail e sincroniza com a sua agenda.',
  },
  {
    title: 'Visão real de faltas, caixa e quem sumiu',
    desc: 'Saiba exatamente quanto entrou no mês, quanto perdeu com no-shows e quais clientes não voltam há 60 dias para chamá-los de volta.',
  },
];

export default function HeroSection() {
  return (
    <section
      id="dor-solucao"
      className="section"
      style={{
        paddingTop: 'clamp(6.25rem, 10vw, 8.25rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6rem)',
      }}
    >
      <div className="container">
        <div className="hero-grid">
          {/* LEFT: Latent Pain + Real Solution + Primary CTA */}
          <div>
            <div className="eyebrow eyebrow-red" style={{ marginBottom: '1.25rem' }}>
              <span className="pulse-dot-red" />
              <span>A DOR SILENCIOSA DE QUEM VIVE DE AGENDA</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.1rem, 4.4vw, 3.45rem)',
                fontWeight: 800,
                letterSpacing: '-0.036em',
                lineHeight: 1.08,
                marginBottom: '1.1rem',
                color: 'var(--text-primary)',
              }}
            >
              Enquanto você atende um cliente, perde o próximo esperando no WhatsApp.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.65vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.65rem',
                maxWidth: '590px',
              }}
            >
              Você está com a máquina na mão, o celular vibra com{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>"tem vaga hoje?"</span> e,
              quando consegue responder duas horas depois, o cliente já fechou em outro lugar — fora o
              prejuízo da cadeira vazia às 15h de quem marcou de boca e esqueceu de ir.
            </p>

            {/* Real Solution Box */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.35rem',
                marginBottom: '1.75rem',
              }}
            >
              <div
                className="font-mono"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.73rem',
                  fontWeight: 700,
                  color: 'var(--accent-green)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '0.95rem',
                }}
              >
                <span className="pulse-dot" />
                <span>COMO A CLIK. RESOLVE ISSO DE VERDADE</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {realSolutions.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.7rem',
                    }}
                  >
                    <CheckCircle2
                      size={17}
                      color="var(--accent-green)"
                      style={{ marginTop: '2px', flexShrink: 0 }}
                    />
                    <div style={{ fontSize: '0.885rem', lineHeight: 1.5 }}>
                      <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                        {item.title}:
                      </strong>{' '}
                      <span style={{ color: 'var(--text-secondary)' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons right below Latent Pain + Real Solution */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://app.useclik.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-emerald btn-lg btn-mobile-full"
              >
                <span>Perca menos clientes</span>
                <ArrowRight size={18} />
              </a>

              <a href="#sistema" className="btn btn-secondary btn-lg btn-mobile-full">
                <span>Ver funcionando na prática</span>
              </a>
            </div>

            {/* Frictionless Microcopy */}
            <div
              className="font-mono"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem 1.15rem',
                flexWrap: 'wrap',
                marginTop: '1rem',
                fontSize: '0.76rem',
                color: 'var(--text-muted)',
              }}
            >
              <span>✓ Comece grátis (R$ 0)</span>
              <span>✓ Sem cartão de crédito</span>
              <span>✓ Pronto em 3 minutos</span>
            </div>
          </div>

          {/* RIGHT: Live Reality Diagnostic Card (Before vs. With clik. — Fictitious Barbershop) */}
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.15rem, 2.5vw, 1.5rem)',
              boxShadow: '0 28px 70px rgba(0, 0, 0, 0.65)',
              position: 'relative',
            }}
          >
            {/* Card Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '0.9rem',
                marginBottom: '1rem',
                borderBottom: '1px solid var(--border-subtle)',
                gap: '0.5rem',
              }}
            >
              <span
                className="font-mono"
                style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 600 }}
              >
                ROTINA REAL · BARBEARIA NAVALHA CLUB
              </span>
              <span className="status-pill status-pill-neutral font-mono">Terça-feira</span>
            </div>

            {/* WITHOUT CLIK: Bleeding Slots */}
            <div
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.04)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                marginBottom: '0.85rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
                  gap: '0.5rem',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#f87171',
                    letterSpacing: '0.04em',
                  }}
                >
                  ✕ SEM CONTROLE (NO IMPROVISO)
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f87171' }}
                >
                  - R$ 140,00 na tarde
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    backgroundColor: 'var(--bg-void)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.65rem 0.8rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.55rem', alignItems: 'flex-start' }}>
                    <Clock size={14} color="#f87171" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        14:12 · Mensagem perdida durante um corte
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        Respondido às 16:05 → <em>"Valeu mano, já cortei aqui perto"</em>
                      </div>
                    </div>
                  </div>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 700, flexShrink: 0 }}
                  >
                    -R$ 55
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    backgroundColor: 'var(--bg-void)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.65rem 0.8rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.55rem', alignItems: 'flex-start' }}>
                    <AlertCircle size={14} color="#f87171" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        15:00 · Cadeira vazia (No-show)
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        Cliente agendou de boca na segunda e esqueceu o horário
                      </div>
                    </div>
                  </div>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 700, flexShrink: 0 }}
                  >
                    -R$ 85
                  </span>
                </div>
              </div>
            </div>

            {/* Connector Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0.5rem 0',
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  padding: '0.28rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--accent-green-border)',
                  color: 'var(--accent-green)',
                }}
              >
                ↓ A MESMA TARDE COM A CLIK. ATIVA
              </span>
            </div>

            {/* WITH CLIK: Captured Automatically */}
            <div
              style={{
                backgroundColor: 'rgba(35, 202, 130, 0.05)',
                border: '1px solid var(--accent-green-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.05rem',
                marginTop: '0.65rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.8rem',
                  gap: '0.5rem',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--accent-green)',
                    letterSpacing: '0.04em',
                  }}
                >
                  ● OPERAÇÃO AUTOMÁTICA 24/7
                </span>
                <span className="status-pill status-pill-green font-mono">+ R$ 85,00 garantidos</span>
              </div>

              {/* Captured Booking Row */}
              <div
                style={{
                  backgroundColor: 'var(--bg-void)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.85rem',
                  marginBottom: '0.7rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.4rem',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Link2 size={13} color="var(--accent-green)" />
                    <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      useclik.com.br/navalhaclub · 14:13
                    </span>
                  </div>
                  <span className="status-pill status-pill-green">● Confirmado</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Gabriel Ferreira
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      Corte + Barba Terapia · Barbeiro Rafael Costa
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div className="font-mono" style={{ fontSize: '0.88rem', fontWeight: 700 }}>
                      R$ 85,00
                    </div>
                    <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      Qua · 15:00
                    </div>
                  </div>
                </div>
              </div>

              {/* Post-booking automated triggers */}
              <div className="mini-three-grid">
                <div
                  style={{
                    backgroundColor: 'var(--bg-void)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Mail size={13} color="var(--accent-green)" style={{ flexShrink: 0 }} />
                  <span>No seu e-mail</span>
                </div>
                <div
                  style={{
                    backgroundColor: 'var(--bg-void)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <CalendarCheck size={13} color="var(--accent-green)" style={{ flexShrink: 0 }} />
                  <span>Na sua agenda</span>
                </div>
                <div
                  style={{
                    backgroundColor: 'var(--bg-void)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <TrendingUp size={13} color="var(--accent-green)" style={{ flexShrink: 0 }} />
                  <span>CRM + LTV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
