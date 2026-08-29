import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

function SliderRow({ label, value, display, accentColor, min, max, step = 1, onChange }) {
  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.75rem',
        gap: '0.75rem'
      }}>
        <span style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          lineHeight: 1.4,
          flex: '1'
        }}>
          {label}
        </span>
        <span
          className="font-mono"
          style={{
            fontSize: '0.84rem',
            fontWeight: 700,
            color: accentColor,
            backgroundColor: `${accentColor}18`,
            border: `1px solid ${accentColor}40`,
            padding: '0.25rem 0.75rem',
            borderRadius: '6px',
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}
        >
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{
          width: '100%',
          height: '6px',
          accentColor: accentColor,
          cursor: 'pointer',
          display: 'block'
        }}
      />
    </div>
  );
}

export default function NoShowCalculator() {
  const [profissionais, setProfissionais] = useState(3);
  const [faltasPorSemana, setFaltasPorSemana] = useState(4);
  const [ticketMedio, setTicketMedio] = useState(80);

  const faltasMes = Math.round(faltasPorSemana * 4.33);
  const perdaMensal = faltasMes * ticketMedio;
  const perdaAnual = perdaMensal * 12;
  const economiaEstimadaMensal = Math.round(perdaMensal * 0.75);

  return (
    <section id="calculadora" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-amber badge-mono" style={{ marginBottom: '1rem' }}>
            IMPACTO FINANCEIRO REAL
          </div>
          <h2 className="section-heading">
            Faturando mais. Perdendo menos.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Nem todo dinheiro perdido aparece como uma despesa. No-shows e horários vagos têm um custo invisível que acumula todo mês.
          </p>
        </div>

        <div style={{
          backgroundColor: 'var(--bg-main)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            alignItems: 'start'
          }}>

            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <SliderRow
                label="Profissionais na equipe"
                value={profissionais}
                display={`${profissionais} ${profissionais === 1 ? 'profissional' : 'profissionais'}`}
                accentColor="#3b82f6"
                min={1}
                max={15}
                onChange={setProfissionais}
              />
              <SliderRow
                label="Faltas / no-shows por semana"
                value={faltasPorSemana}
                display={`${faltasPorSemana} faltas/sem`}
                accentColor="#ef4444"
                min={1}
                max={30}
                onChange={setFaltasPorSemana}
              />
              <SliderRow
                label="Valor médio do atendimento"
                value={ticketMedio}
                display={`R$ ${ticketMedio},00`}
                accentColor="#10b981"
                min={30}
                max={400}
                step={5}
                onChange={setTicketMedio}
              />

              {/* Calculation breakdown */}
              <div style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.625rem',
                  letterSpacing: '0.05em'
                }}>
                  CÁLCULO DIRETO
                </div>
                <div className="font-mono" style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{ backgroundColor: '#141824', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid #202638' }}>
                    {faltasMes} faltas/mês
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>×</span>
                  <span style={{ backgroundColor: '#141824', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid #202638', whiteSpace: 'nowrap' }}>
                    R$ {ticketMedio},00
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>=</span>
                  <span style={{
                    color: 'var(--accent-status-red)',
                    fontWeight: 800,
                    backgroundColor: 'rgba(239, 68, 68, 0.12)',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    whiteSpace: 'nowrap'
                  }}>
                    R$ {perdaMensal.toLocaleString('pt-BR')},00
                  </span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div style={{
              borderTop: '2px solid var(--border-strong)',
              paddingTop: '1.75rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                <AlertTriangle size={16} color="var(--accent-status-red)" />
                <span className="font-mono" style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent-status-red)',
                  letterSpacing: '0.05em',
                  fontWeight: 700
                }}>
                  PERDA ESTIMADA DE RECEITA
                </span>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.375rem' }}>
                  Prejuízo mensal invisível:
                </div>
                <div className="font-mono" style={{
                  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                  fontWeight: 800,
                  color: 'var(--accent-status-red)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em'
                }}>
                  R$ {perdaMensal.toLocaleString('pt-BR')}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                  Equivalente a <span className="font-mono" style={{ color: '#fff', fontWeight: 600 }}>{faltasMes} horários</span> sem faturamento.
                </div>
              </div>

              <div style={{
                marginBottom: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.375rem' }}>
                  Em 1 ano, o valor acumulado é:
                </div>
                <div className="font-mono" style={{ fontSize: '1.375rem', fontWeight: 700 }}>
                  R$ {perdaAnual.toLocaleString('pt-BR')}
                </div>
              </div>

              <div style={{
                padding: '1.125rem 1.25rem',
                backgroundColor: 'rgba(16, 185, 129, 0.07)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-status-green)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  marginBottom: '0.375rem'
                }}>
                  <ShieldCheck size={16} />
                  <span>Potencial de resgate mensal:</span>
                </div>
                <div className="font-mono" style={{
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: 'var(--accent-status-green)'
                }}>
                  + R$ {economiaEstimadaMensal.toLocaleString('pt-BR')} / mês
                </div>
              </div>

              <a
                href="https://app.useclik.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <span>Parar de perder dinheiro com faltas</span>
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
