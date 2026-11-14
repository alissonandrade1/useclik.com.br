import React, { useState } from 'react';
import { ArrowRight, Calculator, TrendingDown } from 'lucide-react';

export default function LossSimulatorSection() {
  const [ticketMedio, setTicketMedio] = useState(65);
  const [horariosPerdidosSemana, setHorariosPerdidosSemana] = useState(4);

  const perdidosMes = Math.round(horariosPerdidosSemana * 4.33);
  const perdaMensal = perdidosMes * ticketMedio;
  const perdaAnual = perdaMensal * 12;

  return (
    <section id="calculadora" className="section">
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.5rem, 4vw, 2.75rem)',
          }}
        >
          <div className="two-col-grid" style={{ alignItems: 'center', gap: 'clamp(1.75rem, 4vw, 3rem)' }}>
            {/* Left: Sliders */}
            <div>
              <div className="eyebrow eyebrow-red" style={{ marginBottom: '1rem' }}>
                <Calculator size={13} />
                <span>FAÇA A CONTA RÁPIDA</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(1.55rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  marginBottom: '0.75rem',
                }}
              >
                Quanto o improviso tira do seu bolso todo mês?
              </h2>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                  lineHeight: 1.6,
                }}
              >
                Some as faltas de última hora com os clientes que mandam mensagem enquanto você está
                atendendo e fecham com o concorrente.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.6rem',
                    }}
                  >
                    <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>
                      Valor médio do corte / serviço
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--accent-green)',
                        backgroundColor: 'var(--accent-green-dim)',
                        border: '1px solid var(--accent-green-border)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '6px',
                      }}
                    >
                      R$ {ticketMedio},00
                    </span>
                  </div>
                  <input
                    type="range"
                    className="clik-slider"
                    min={25}
                    max={250}
                    step={5}
                    value={ticketMedio}
                    onChange={(e) => setTicketMedio(Number(e.target.value))}
                    aria-label="Valor médio do serviço"
                  />
                </div>

                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.6rem',
                    }}
                  >
                    <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>
                      Horários perdidos por semana (faltas + demora no WhatsApp)
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: '#f87171',
                        backgroundColor: 'var(--accent-red-dim)',
                        border: '1px solid var(--accent-red-border)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '6px',
                      }}
                    >
                      {horariosPerdidosSemana}/semana
                    </span>
                  </div>
                  <input
                    type="range"
                    className="clik-slider"
                    min={1}
                    max={20}
                    step={1}
                    value={horariosPerdidosSemana}
                    onChange={(e) => setHorariosPerdidosSemana(Number(e.target.value))}
                    aria-label="Horários perdidos por semana"
                  />
                </div>
              </div>
            </div>

            {/* Right: Output Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-void)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.35rem, 3vw, 2rem)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#f87171',
                  marginBottom: '0.5rem',
                }}
                className="font-mono"
              >
                <TrendingDown size={15} />
                <span>DINHEIRO DEIXADO NA MESA ({perdidosMes} HORÁRIOS/MÊS)</span>
              </div>

              <div
                className="font-mono"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.85rem)',
                  fontWeight: 800,
                  color: '#fafafa',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                }}
              >
                R$ {perdaMensal.toLocaleString('pt-BR')}
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  /mês
                </span>
              </div>

              <div
                className="font-mono"
                style={{
                  fontSize: '0.84rem',
                  color: '#f87171',
                  marginTop: '0.35rem',
                  marginBottom: '1.25rem',
                }}
              >
                Ou R$ {perdaAnual.toLocaleString('pt-BR')} perdidos em 12 meses.
              </div>

              <div
                style={{
                  backgroundColor: 'var(--accent-green-dim)',
                  border: '1px solid var(--accent-green-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.8rem 0.95rem',
                  fontSize: '0.84rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.5,
                  marginBottom: '1.25rem',
                }}
              >
                <strong style={{ color: 'var(--accent-green)' }}>1 único horário salvo no mês</strong>{' '}
                já paga um plano inteiro da clik. — e você pode começar hoje no plano gratuito.
              </div>

              <a
                href="https://app.useclik.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
              >
                <span>Perca menos clientes agora</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
