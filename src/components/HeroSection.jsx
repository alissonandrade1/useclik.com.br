import React, { useState } from 'react';
import { Calendar, Users, DollarSign, MessageSquare, ArrowRight, CheckCircle2, AlertTriangle, Clock, TrendingUp, UserCheck, Smartphone } from 'lucide-react';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('agenda');

  return (
    <section className="section" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Main Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-mono" style={{ marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-status-green)' }}></span>
            A PLATAFORMA PARA NEGÓCIOS QUE VIVEM DE AGENDA
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            fontWeight: 800,
            marginBottom: '1.25rem'
          }}>
            Sua agenda é só o começo.
          </h1>

          <p style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            maxWidth: '680px',
            margin: '0 auto 2.25rem auto'
          }}>
            Organize seus agendamentos, clientes, equipe e resultados em um só lugar. Tenha controle sobre cada horário e sobre tudo o que acontece depois dele.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#criar-agenda" className="btn btn-primary btn-lg">
              <span>Criar minha agenda grátis</span>
              <ArrowRight size={18} />
            </a>
            <a href="#demonstracao" className="btn btn-secondary btn-lg">
              <span>Ver demonstração interativa</span>
            </a>
          </div>

          {/* Key Quick Indicators */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="var(--accent-status-green)" />
              <span>Sem necessidade de cartão de crédito</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="var(--accent-status-green)" />
              <span>Página própria de agendamento online</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="var(--accent-status-green)" />
              <span>Integração com WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Product Mockup Showcase */}
        <div id="demonstracao" className="clik-card" style={{
          padding: '0',
          overflow: 'hidden',
          borderColor: 'var(--border-strong)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
        }}>
          {/* Top Bar Mockup Header */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            {/* Business Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-status-green)'
              }} />
              <span style={{ fontWeight: 600, fontSize: '0.9375rem', fontFamily: 'var(--font-mono)' }}>
                studio clik<span style={{ color: '#3B82F6' }}>.</span> — Operação Hoje
              </span>
              <span className="badge font-mono" style={{ fontSize: '0.75rem' }}>
                LIVE DEMO
              </span>
            </div>

            {/* Mock Tabs */}
            <div style={{
              display: 'flex',
              gap: '0.375rem',
              backgroundColor: 'var(--bg-main)',
              padding: '0.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}>
              <button 
                onClick={() => setActiveTab('agenda')}
                className={`btn btn-sm ${activeTab === 'agenda' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}
              >
                <Calendar size={14} />
                <span>Agenda</span>
              </button>
              <button 
                onClick={() => setActiveTab('clientes')}
                className={`btn btn-sm ${activeTab === 'clientes' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}
              >
                <Users size={14} />
                <span>Clientes</span>
              </button>
              <button 
                onClick={() => setActiveTab('equipe')}
                className={`btn btn-sm ${activeTab === 'equipe' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}
              >
                <UserCheck size={14} />
                <span>Equipe</span>
              </button>
              <button 
                onClick={() => setActiveTab('financeiro')}
                className={`btn btn-sm ${activeTab === 'financeiro' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}
              >
                <TrendingUp size={14} />
                <span>Financeiro</span>
              </button>
            </div>
          </div>

          {/* Main Dashboard Content Area */}
          <div style={{ padding: '1.75rem' }}>

            {/* TAB 1: AGENDA */}
            {activeTab === 'agenda' && (
              <div>
                {/* Stats Summary Bar */}
                <div className="grid-4" style={{ marginBottom: '1.5rem' }}>
                  <div className="clik-card" style={{ padding: '1rem', backgroundColor: 'var(--bg-surface)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>ATENDIMENTOS HOJE</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }} className="font-mono">14 horários</div>
                  </div>
                  <div className="clik-card" style={{ padding: '1rem', backgroundColor: 'var(--bg-surface)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>CONFIRMADOS</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-status-green)' }} className="font-mono">11 clientes</div>
                  </div>
                  <div className="clik-card" style={{ padding: '1rem', backgroundColor: 'var(--bg-surface)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>PENDENTES</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-status-amber)' }} className="font-mono">2 horários</div>
                  </div>
                  <div className="clik-card" style={{ padding: '1rem', backgroundColor: 'var(--bg-surface)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>NO-SHOW (FALTA)</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-status-red)' }} className="font-mono">1 (R$ 80)</div>
                  </div>
                </div>

                {/* Schedule Table View */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { time: '09:00 - 10:00', client: 'Lucas Silva', service: 'Corte + Barba', prof: 'Gabriel (Barbeiro)', price: 'R$ 90', status: 'Confirmado', badgeClass: 'badge-green' },
                    { time: '10:15 - 11:00', client: 'Mariana Costa', service: 'Design de Sobrancelha', prof: 'Camila (Estética)', price: 'R$ 70', status: 'Confirmado', badgeClass: 'badge-green' },
                    { time: '11:30 - 12:30', client: 'Rafael Mendes', service: 'Corte Degradê', prof: 'Gabriel (Barbeiro)', price: 'R$ 60', status: 'No-show', badgeClass: 'badge-red' },
                    { time: '14:00 - 15:30', client: 'Fernanda Lima', service: 'Lash Lifting Completo', prof: 'Camila (Estética)', price: 'R$ 140', status: 'Confirmado', badgeClass: 'badge-green' },
                    { time: '16:00 - 16:45', client: 'Bruno Oliveira', service: 'Barboterapia', prof: 'Gabriel (Barbeiro)', price: 'R$ 55', status: 'Pendente', badgeClass: 'badge-amber' },
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.875rem 1.25rem',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      gap: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span className="font-mono" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', minWidth: '110px' }}>
                          {item.time}
                        </span>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{item.client}</div>
                          <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{item.service} • <span style={{ color: 'var(--text-muted)' }}>{item.prof}</span></div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <span className="font-mono" style={{ fontWeight: '600', fontSize: '0.9375rem' }}>{item.price}</span>
                        <span className={`badge ${item.badgeClass}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: CLIENTES & RELACIONAMENTO */}
            {activeTab === 'clientes' && (
              <div>
                <div style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <MessageSquare color="var(--accent-status-green)" size={20} />
                    <div>
                      <div style={{ fontWeight: 600 }}>8 clientes não voltam há mais de 30 dias</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>O clik. identificou oportunidades automáticas de retorno via WhatsApp.</div>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-primary" style={{ backgroundColor: 'var(--accent-status-green)', color: '#000' }}>
                    <Smartphone size={14} />
                    <span>Enviar Lembrete Recorrência</span>
                  </button>
                </div>

                <div className="grid-3">
                  {[
                    { name: 'Rodrigo Alves', visits: '12 visitas', lastVisit: 'há 34 dias', status: 'Inativo ⚠️', ltv: 'R$ 1.080', action: 'Reengajar WhatsApp' },
                    { name: 'Ana Beatriz', visits: '8 visitas', lastVisit: 'há 6 dias', status: 'Recorrente', ltv: 'R$ 840', action: 'Ver Histórico' },
                    { name: 'Felipe Santos', visits: '15 visitas', lastVisit: 'há 42 dias', status: 'Inativo ⚠️', ltv: 'R$ 1.350', action: 'Reengajar WhatsApp' },
                  ].map((c, i) => (
                    <div key={i} className="clik-card" style={{ padding: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                        <div style={{ fontWeight: 600 }}>{c.name}</div>
                        <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.status}</span>
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Frequência: {c.visits}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>Último retorno: {c.lastVisit}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                        <span className="font-mono" style={{ fontSize: '0.875rem', fontWeight: 600 }}>{c.ltv}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-primary)', textDecoration: 'underline', cursor: 'pointer' }}>{c.action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: EQUIPE */}
            {activeTab === 'equipe' && (
              <div className="grid-2">
                <div className="clik-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.125rem' }}>Gabriel Barbeiro</h4>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Especialidade: Cortes & Barba</p>
                    </div>
                    <span className="badge badge-green font-mono">100% Ocupação</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Atendimentos este mês:</span>
                      <span className="font-mono" style={{ fontWeight: 600 }}>84 clientes</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Faturamento Gerado:</span>
                      <span className="font-mono" style={{ fontWeight: 600, color: 'var(--accent-status-green)' }}>R$ 6.720,00</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Taxa de No-Show:</span>
                      <span className="font-mono" style={{ color: 'var(--text-muted)' }}>2.3% (baixa)</span>
                    </div>
                  </div>
                </div>

                <div className="clik-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.125rem' }}>Camila Estética</h4>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Especialidade: Sobrancelhas & Lash</p>
                    </div>
                    <span className="badge badge-green font-mono">92% Ocupação</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Atendimentos este mês:</span>
                      <span className="font-mono" style={{ fontWeight: 600 }}>62 clientes</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Faturamento Gerado:</span>
                      <span className="font-mono" style={{ fontWeight: 600, color: 'var(--accent-status-green)' }}>R$ 5.760,00</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Taxa de No-Show:</span>
                      <span className="font-mono" style={{ color: 'var(--text-muted)' }}>1.1% (excelente)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: FINANCEIRO */}
            {activeTab === 'financeiro' && (
              <div>
                <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
                  <div className="clik-card" style={{ backgroundColor: 'var(--bg-surface)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>FATURAMENTO DO MÊS</div>
                    <div className="font-mono" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-status-green)' }}>R$ 12.480,00</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.375rem' }}>+18% em relação ao mês anterior</div>
                  </div>
                  <div className="clik-card" style={{ backgroundColor: 'var(--bg-surface)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>PERDA EM NO-SHOWS (FALTAS)</div>
                    <div className="font-mono" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-status-red)' }}>R$ 640,00</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--accent-status-red)', marginTop: '0.375rem' }}>8 horários vagos por cancelamento tardio</div>
                  </div>
                  <div className="clik-card" style={{ backgroundColor: 'var(--bg-surface)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>TICKET MÉDIO</div>
                    <div className="font-mono" style={{ fontSize: '1.75rem', fontWeight: 700 }}>R$ 85,47</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.375rem' }}>146 agendamentos concluídos</div>
                  </div>
                </div>

                <div style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>💡 Oportunidade de Receita Identificada</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Preenchendo apenas 50% das suas faltas via lista de espera automática WhatsApp, você resgata **R$ 320/mês**.</div>
                  </div>
                  <button className="btn btn-sm btn-primary">Ativar Lista de Espera</button>
                </div>
              </div>
            )}

          </div>

          {/* Mockup Footer Caption */}
          <div style={{
            backgroundColor: 'var(--bg-main)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '0.875rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)'
          }}>
            <span>Veja como o clik. dá visibilidade total da sua operação.</span>
            <span className="font-mono" style={{ color: 'var(--text-secondary)' }}>useclik.com.br/demo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
