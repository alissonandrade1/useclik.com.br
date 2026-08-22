import React, { useState } from 'react';
import { Calculator, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function NoShowCalculator() {
  const [profissionais, setProfissionais] = useState(3);
  const [faltasPorSemana, setFaltasPorSemana] = useState(5);
  const [ticketMedio, setTicketMedio] = useState(75);

  const faltasMes = Math.round(faltasPorSemana * 4.33);
  const perdaMensal = faltasMes * ticketMedio;
  const perdaAnual = perdaMensal * 12;
  const economiaEstimadaMensal = Math.round(perdaMensal * 0.75); // 75% recuperado com lembretes automaticos CLiK

  return (
    <section id="calculadora" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-amber badge-mono" style={{ marginBottom: '1rem' }}>
            FERRAMENTA INTERATIVA
          </div>
          <h2 className="section-heading">
            Quanto o seu negócio perde com faltas e no-shows?
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Horários vazios e clientes que faltam sem avisar são o maior vazamento invisível de caixa em negócios de agendamento.
          </p>
        </div>

        <div className="clik-card" style={{ padding: '2.5rem', backgroundColor: 'var(--bg-main)' }}>
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>

            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Número de profissionais na equipe: <span className="font-mono" style={{ color: 'var(--text-primary)' }}>{profissionais}</span>
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
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Média de faltas/no-shows por semana (toda equipe): <span className="font-mono" style={{ color: 'var(--accent-status-red)' }}>{faltasPorSemana} faltas</span>
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
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Valor médio do serviço (Ticket médio): <span className="font-mono">R$ {ticketMedio}</span>
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

              <div style={{
                padding: '1rem',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)'
              }}>
                ℹ️ A CLiK envia confirmações automáticas por WhatsApp e permite lista de espera para preencher desistências no mesmo dia.
              </div>
            </div>

            {/* Results Display */}
            <div style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <AlertTriangle size={20} color="var(--accent-status-red)" />
                <span className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--accent-status-red)' }}>ESTIMATIVA DE PREJUÍZO</span>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Você perde por mês:</div>
                <div className="font-mono" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-status-red)' }}>
                  R$ {perdaMensal.toLocaleString('pt-BR')}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  Aproximadamente <span className="font-mono" style={{ color: '#fff' }}>{faltasMes} horários vazios</span> por mês.
                </div>
              </div>

              <div style={{ marginBottom: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Em 1 ano, o prejuízo acumulado é:</div>
                <div className="font-mono" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
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
                  <span>Com a CLiK você pode resgatar:</span>
                </div>
                <div className="font-mono" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-status-green)' }}>
                  + R$ {economiaEstimadaMensal.toLocaleString('pt-BR')} / mês
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  Reduzindo no-shows com confirmação WhatsApp e reagendamento inteligente.
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
