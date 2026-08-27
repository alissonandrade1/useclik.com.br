import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

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
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-amber badge-mono" style={{ marginBottom: '1rem' }}>
            IMPACTO FINANCEIRO REAL
          </div>
          <h2 className="section-heading">
            Faturando mais. Perdendo menos.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Nem todo dinheiro perdido aparece como uma despesa. No-shows, cancelamentos e horários vagos possuem um custo invisível acumulado no mês.
          </p>
        </div>

        {/* Fluid Layout (Single Clean Section Container) */}
        <div style={{
          backgroundColor: 'var(--bg-main)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(1.5rem, 4vw, 3rem)'
        }}>
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>

            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.625rem' }}>
                  Profissionais na equipe: <span className="font-mono" style={{ color: 'var(--text-primary)' }}>{profissionais}</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  value={profissionais}
                  onChange={(e) => setProfissionais(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--text-primary)', cursor: 'pointer' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.625rem' }}>
                  Faltas / no-shows por semana (toda equipe): <span className="font-mono" style={{ color: 'var(--accent-status-red)' }}>{faltasPorSemana} faltas/sem</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  value={faltasPorSemana}
                  onChange={(e) => setFaltasPorSemana(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--accent-status-red)', cursor: 'pointer' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.625rem' }}>
                  Valor médio do atendimento (Ticket Médio): <span className="font-mono">R$ {ticketMedio}</span>
                </label>
                <input 
                  type="range" 
                  min="30" 
                  max="400" 
                  step="5"
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--text-primary)', cursor: 'pointer' }}
                />
              </div>

              {/* Direct Multiplication Visual Highlight */}
              <div style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.375rem' }}>
                  CÁLCULO DIRETO
                </div>
                <div className="font-mono" style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span>{faltasMes} faltas este mês</span>
                  <span style={{ color: 'var(--text-muted)' }}>×</span>
                  <span>R$ {ticketMedio} / atendimento</span>
                  <span style={{ color: 'var(--text-muted)' }}>=</span>
                  <span style={{ color: 'var(--accent-status-red)', fontWeight: 800 }}>R$ {perdaMensal.toLocaleString('pt-BR')}</span>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="calc-divider">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <AlertTriangle size={18} color="var(--accent-status-red)" />
                <span className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--accent-status-red)' }}>PERDA ESTIMADA DE RECEITA</span>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Prejuízo mensal invisível:</div>
                <div className="font-mono" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-status-red)', lineHeight: 1.1, marginTop: '0.25rem' }}>
                  R$ {perdaMensal.toLocaleString('pt-BR')}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.375rem' }}>
                  Equivalente a <span className="font-mono" style={{ color: '#fff' }}>{faltasMes} horários vagos</span> sem faturamento.
                </div>
              </div>

              <div style={{ marginBottom: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Em 1 ano, o valor acumulado é:</div>
                <div className="font-mono" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  R$ {perdaAnual.toLocaleString('pt-BR')}
                </div>
              </div>

              <div style={{
                padding: '1.25rem',
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-status-green)', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>
                  <ShieldCheck size={18} />
                  <span>Potencial de resgate mensal:</span>
                </div>
                <div className="font-mono" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-status-green)' }}>
                  + R$ {economiaEstimadaMensal.toLocaleString('pt-BR')} / mês
                </div>
              </div>

              <a href="#criar-agenda" className="btn btn-primary" style={{ width: '100%' }}>
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
