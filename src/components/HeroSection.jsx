import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar as CalendarIcon, 
  Tag, 
  Clock, 
  Users, 
  Layers, 
  MessageSquare, 
  Settings, 
  Sun, 
  LogOut, 
  ChevronLeft, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Search, 
  Mail, 
  ChevronDown, 
  Edit3, 
  Trash2, 
  UserPlus
} from 'lucide-react';
import Logo from './Logo';

export default function HeroSection() {
  const [activeNav, setActiveNav] = useState('visao-geral');
  const [agendamentosView, setAgendamentosView] = useState('calendario');

  return (
    <section className="section" style={{ paddingTop: 'clamp(3rem, 5vw, 4.5rem)', paddingBottom: 'clamp(3.5rem, 6vw, 5rem)' }}>
      <div className="container">
        {/* Main Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 3rem auto' }}>
          <div className="badge badge-mono" style={{ marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-status-green)' }}></span>
            PLATAFORMA DE GESTÃO PARA NEGÓCIOS DE SERVIÇOS
          </div>

          <h1 style={{
            fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            fontWeight: 800,
            marginBottom: '1.25rem'
          }}>
            Sua agenda é só o começo.
          </h1>

          <p style={{
            fontSize: 'clamp(1.0625rem, 2vw, 1.35rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            maxWidth: '700px',
            margin: '0 auto 2.25rem auto'
          }}>
            Organize seus agendamentos, clientes, equipe e resultados em um só lugar. Tenha controle sobre cada horário e sobre tudo o que acontece depois dele.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="https://app.useclik.com.br/register" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-lg"
              style={{ textDecoration: 'none' }}
            >
              <span>Inicie agora</span>
              <ArrowRight size={18} />
            </a>
            <a href="#como-funciona" className="btn btn-secondary btn-lg" style={{ textDecoration: 'none' }}>
              <span>Ver como funciona</span>
            </a>
          </div>

          {/* Key Quick Indicators */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.75rem',
            marginTop: '2rem',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <CheckCircle2 size={16} color="var(--accent-status-green)" />
              <span>Sem cartão de crédito</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <CheckCircle2 size={16} color="var(--accent-status-green)" />
              <span>Página pública de agendamento</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <CheckCircle2 size={16} color="var(--accent-status-green)" />
              <span>Gestão de equipe e LTV</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Product Mockup Showcase matching REAL APP screens */}
        <div id="demonstracao" className="clik-card" style={{
          padding: '0',
          overflow: 'hidden',
          borderColor: 'var(--border-strong)',
          boxShadow: '0 25px 80px rgba(0,0,0,0.85)',
          backgroundColor: '#0a0b10',
          borderRadius: 'var(--radius-lg)'
        }}>
          {/* Main App Container */}
          <div style={{ display: 'flex', minHeight: '620px', flexWrap: 'nowrap' }}>
            
            {/* Real App Left Sidebar */}
            <aside style={{
              width: '230px',
              backgroundColor: '#07080c',
              borderRight: '1px solid #1a1c26',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1.25rem 0.875rem',
              flexShrink: 0,
            }} className="app-sidebar-responsive">
              <div>
                {/* App Brand */}
                <div style={{ padding: '0 0.5rem 1.25rem 0.5rem', borderBottom: '1px solid #151720', marginBottom: '1.25rem' }}>
                  <Logo size="small" />
                  <div style={{ fontSize: '0.75rem', color: '#62626e', marginTop: '0.125rem' }} className="font-mono">
                    admin
                  </div>
                </div>

                {/* Main Navigation Items */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {[
                    { id: 'visao-geral', label: 'Visão geral', icon: LayoutDashboard },
                    { id: 'agendamentos', label: 'Agendamentos', icon: CalendarIcon },
                    { id: 'servicos', label: 'Serviços', icon: Tag },
                    { id: 'disponibilidade', label: 'Disponibilidade', icon: Clock },
                    { id: 'clientes', label: 'Clientes', icon: Users },
                    { id: 'planos', label: 'Planos & Upgrade', icon: Layers },
                    { id: 'whatsapp', label: 'WhatsApp Bot', icon: MessageSquare, badge: 'Em breve' },
                    { id: 'configuracoes', label: 'Configurações', icon: Settings },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isActive = activeNav === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveNav(item.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: '0.625rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: isActive ? '#1c2235' : 'transparent',
                          color: isActive ? '#60a5fa' : '#8f94a6',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '0.84rem',
                          fontWeight: isActive ? 600 : 400,
                          textAlign: 'left',
                          transition: 'all 150ms'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                          <Icon size={16} color={isActive ? '#3b82f6' : '#8f94a6'} />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span style={{
                            fontSize: '0.65rem',
                            backgroundColor: '#451a03',
                            color: '#f59e0b',
                            padding: '0.125rem 0.375rem',
                            borderRadius: '9999px',
                            fontWeight: 600
                          }}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Sidebar Settings */}
              <div style={{ borderTop: '1px solid #151720', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.5rem 0.75rem', color: '#8f94a6', fontSize: '0.8125rem' }}>
                  <Sun size={15} />
                  <span>Aparência</span>
                </div>
                <button style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.625rem', 
                  padding: '0.5rem 0.75rem', 
                  color: '#8f94a6', 
                  fontSize: '0.8125rem', 
                  backgroundColor: 'transparent',
                  border: '1px solid #1c202d',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  width: '100%' 
                }}>
                  <LogOut size={14} />
                  <span>Sair</span>
                </button>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.375rem 0.75rem', color: '#525666', fontSize: '0.75rem' }}>
                  <span>Recolher</span>
                  <ChevronLeft size={14} />
                </div>
              </div>
            </aside>

            {/* App Main Content Area */}
            <main style={{ flex: 1, backgroundColor: '#0a0b10', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
              
              {/* App Topbar Header */}
              <div style={{
                height: '3.75rem',
                borderBottom: '1px solid #171922',
                padding: '0 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#0b0c12'
              }}>
                <div style={{ fontSize: '0.8125rem', color: '#8f94a6' }}>
                  Qui, 27 de ago
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: '#3b82f6',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.75rem'
                  }}>
                    A
                  </div>
                  <span style={{ fontSize: '0.84rem', fontWeight: 500, color: '#d1d5db' }}>admin</span>
                </div>
              </div>

              {/* VIEW 1: VISÃO GERAL */}
              {activeNav === 'visao-geral' && (
                <div style={{ padding: '1.5rem' }}>
                  {/* Header Title & Date Filters */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                        Olá, admin
                      </h2>
                      <div style={{ fontSize: '0.8125rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="font-mono">/admin-1d1c6f</span>
                        <span>•</span>
                        <span className="font-mono" style={{ textTransform: 'uppercase' }}>AGOSTO 2026</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', backgroundColor: '#13151f', padding: '0.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid #202434' }}>
                      {['Este mês', '30 dias', '90 dias', 'Personalizado'].map((t, idx) => (
                        <button key={idx} style={{
                          padding: '0.35rem 0.75rem',
                          fontSize: '0.75rem',
                          borderRadius: '4px',
                          border: 'none',
                          backgroundColor: idx === 0 ? '#1e2436' : 'transparent',
                          color: idx === 0 ? '#ffffff' : '#8f94a6',
                          fontWeight: idx === 0 ? 600 : 400,
                          cursor: 'pointer'
                        }}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 7 Metric Cards Grid matching Screenshot 1 */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '0.875rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }} className="font-mono">RECEITA</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff' }} className="font-mono">R$ 0,00</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }} className="font-mono">AGENDAMENTOS</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff' }} className="font-mono">2</div>
                      <div style={{ fontSize: '0.72rem', color: '#6b7280', marginTop: '0.25rem' }}>0 concluídos · 1 confirmados</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }} className="font-mono">TICKET MÉDIO</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff' }} className="font-mono">R$ 0,00</div>
                      <div style={{ fontSize: '0.72rem', color: '#6b7280', marginTop: '0.25rem' }}>Receita projetada R$ 0,00</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }} className="font-mono">NOVOS CLIENTES</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff' }} className="font-mono">1</div>
                      <div style={{ fontSize: '0.72rem', color: '#6b7280', marginTop: '0.25rem' }}>1 no total</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }} className="font-mono">LTV MÉDIO</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#9ca3af' }} className="font-mono">—</div>
                      <div style={{ fontSize: '0.72rem', color: '#6b7280', marginTop: '0.25rem' }}>Configure preços nos serviços</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }} className="font-mono">TAXA DE CONCLUSÃO</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff' }} className="font-mono">0.0%</div>
                      <div style={{ fontSize: '0.72rem', color: '#ef4444', marginTop: '0.25rem' }}>1 no-show · 50.0%</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }} className="font-mono">CHURN (60 DIAS)</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff' }} className="font-mono">0</div>
                      <div style={{ fontSize: '0.72rem', color: '#6b7280', marginTop: '0.25rem' }}>clientes sem retorno</div>
                    </div>
                  </div>

                  {/* Chart Container */}
                  <div style={{
                    backgroundColor: '#12141d',
                    border: '1px solid #1e2232',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.05em' }} className="font-mono">
                        AGENDAMENTOS — ÚLTIMOS 30 DIAS
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>por dia / status</div>
                    </div>
                    <div style={{ height: '80px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '4px', paddingBottom: '0.5rem', borderBottom: '1px solid #1e2232' }}>
                      {Array.from({ length: 28 }).map((_, i) => (
                        <div key={i} style={{
                          flex: 1,
                          height: i === 25 ? '70px' : (i % 5 === 0 ? '25px' : '6px'),
                          backgroundColor: i === 25 ? '#3b82f6' : '#1e2436',
                          borderRadius: '2px'
                        }} />
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#6b7280', marginTop: '0.5rem' }} className="font-mono">
                      <span>28/07</span>
                      <span>11/08</span>
                      <span>26/08</span>
                    </div>
                  </div>

                  {/* Bottom Row (3 Cards matching Screenshot 2) */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    {/* Próximos agendamentos */}
                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.05em', marginBottom: '1rem' }} className="font-mono">
                        PRÓXIMOS AGENDAMENTOS
                      </div>
                      <div style={{ backgroundColor: '#0e1017', border: '1px solid #1c202d', borderRadius: 'var(--radius-sm)', padding: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem' }}>J</div>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>José Alisson</div>
                            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>corte • kk</div>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 600 }} className="font-mono">28/08, 10:30</div>
                          <span style={{ fontSize: '0.65rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.125rem 0.5rem', borderRadius: '4px', fontWeight: 700 }} className="font-mono">
                            CONFIRMADO
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Serviços mais usados */}
                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.05em', marginBottom: '1rem' }} className="font-mono">
                        SERVIÇOS MAIS USADOS
                      </div>
                      <div style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.875rem' }}><span style={{ color: '#6b7280' }}>#1</span> corte</span>
                        <span className="font-mono" style={{ fontWeight: 700, color: '#3b82f6' }}>2×</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.375rem' }}>
                        R$ 0,00 em receita
                      </div>
                    </div>

                    {/* Saúde do negócio */}
                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.05em', marginBottom: '1rem' }} className="font-mono">
                        SAÚDE DO NEGÓCIO
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.8125rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#8f94a6' }}>Taxa de conclusão</span>
                          <span className="font-mono" style={{ fontWeight: 700, color: '#ef4444' }}>0.0%</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#8f94a6' }}>Taxa de no-show</span>
                          <span className="font-mono" style={{ fontWeight: 700, color: '#ef4444' }}>50.0%</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#8f94a6' }}>Taxa de retorno</span>
                          <span className="font-mono" style={{ fontWeight: 700, color: '#10b981' }}>100.0%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 2: AGENDAMENTOS */}
              {activeNav === 'agendamentos' && (
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Agendamentos</h2>
                      <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>2 confirmados</p>
                    </div>

                    <div style={{ display: 'flex', backgroundColor: '#13151f', padding: '0.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid #202434' }}>
                      <button 
                        onClick={() => setAgendamentosView('lista')}
                        style={{
                          padding: '0.35rem 0.875rem',
                          fontSize: '0.8125rem',
                          borderRadius: '4px',
                          border: 'none',
                          backgroundColor: agendamentosView === 'lista' ? '#1e2436' : 'transparent',
                          color: agendamentosView === 'lista' ? '#ffffff' : '#8f94a6',
                          fontWeight: agendamentosView === 'lista' ? 600 : 400,
                          cursor: 'pointer'
                        }}
                      >
                        Lista
                      </button>
                      <button 
                        onClick={() => setAgendamentosView('calendario')}
                        style={{
                          padding: '0.35rem 0.875rem',
                          fontSize: '0.8125rem',
                          borderRadius: '4px',
                          border: 'none',
                          backgroundColor: agendamentosView === 'calendario' ? '#1e2436' : 'transparent',
                          color: agendamentosView === 'calendario' ? '#ffffff' : '#8f94a6',
                          fontWeight: agendamentosView === 'calendario' ? 600 : 400,
                          cursor: 'pointer'
                        }}
                      >
                        Calendário
                      </button>
                    </div>
                  </div>

                  {agendamentosView === 'lista' ? (
                    /* Lista View matching Screenshot 4 */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', letterSpacing: '0.05em', marginBottom: '0.75rem' }} className="font-mono">
                          CONFIRMADOS · 2
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>J</div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>José Alisson</div>
                                <div style={{ fontSize: '0.8125rem', color: '#6b7280' }}>corte · 28 de ago., 13:30</div>
                              </div>
                            </div>
                            <span style={{ fontSize: '0.75rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>
                              Confirmado
                            </span>
                          </div>

                          <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>J</div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>José Alisson</div>
                                <div style={{ fontSize: '0.8125rem', color: '#6b7280' }}>corte · 27 de ago., 14:30</div>
                              </div>
                            </div>
                            <span style={{ fontSize: '0.75rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>
                              Confirmado
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ef4444', letterSpacing: '0.05em', marginBottom: '0.75rem' }} className="font-mono">
                          NÃO COMPARECEU · 1
                        </div>
                        <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>J</div>
                            <div>
                              <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>José Alisson</div>
                              <div style={{ fontSize: '0.8125rem', color: '#6b7280' }}>corte · 27 de ago., 13:30</div>
                            </div>
                          </div>
                          <span style={{ fontSize: '0.75rem', backgroundColor: 'rgba(239, 68, 68, 0.12)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.25)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontWeight: 600 }}>
                            Não compareceu
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Calendário View matching Screenshot 3 */
                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
                        <span style={{ color: '#8f94a6', cursor: 'pointer' }}>‹</span>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Agosto 2026</h3>
                        <span style={{ color: '#8f94a6', cursor: 'pointer' }}>›</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem', fontWeight: 600 }}>
                        <span>Dom</span><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                        {/* Empty padding days for Aug 2026 */}
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={`empty-${i}`} style={{ minHeight: '52px' }} />
                        ))}

                        {/* Days 1 to 31 */}
                        {Array.from({ length: 31 }).map((_, i) => {
                          const day = i + 1;
                          const isDay27 = day === 27;
                          const isDay28 = day === 28;

                          return (
                            <div key={day} style={{
                              minHeight: '58px',
                              backgroundColor: (isDay27 || isDay28) ? '#0f1422' : '#0e1017',
                              border: isDay27 ? '1.5px solid #3b82f6' : '1px solid #1c202d',
                              borderRadius: '6px',
                              padding: '0.375rem',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between'
                            }}>
                              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: (isDay27 || isDay28) ? '#3b82f6' : '#9ca3af' }}>{day}</span>
                              {isDay27 && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                  <div style={{ fontSize: '0.6rem', backgroundColor: '#064e3b', color: '#34d399', padding: '1px 3px', borderRadius: '2px', overflow: 'hidden', whiteSpace: 'nowrap' }} className="font-mono">
                                    14:30 José
                                  </div>
                                  <div style={{ fontSize: '0.6rem', backgroundColor: '#064e3b', color: '#34d399', padding: '1px 3px', borderRadius: '2px', overflow: 'hidden', whiteSpace: 'nowrap' }} className="font-mono">
                                    13:30 José
                                  </div>
                                </div>
                              )}
                              {isDay28 && (
                                <div style={{ fontSize: '0.6rem', backgroundColor: '#064e3b', color: '#34d399', padding: '1px 3px', borderRadius: '2px', overflow: 'hidden', whiteSpace: 'nowrap' }} className="font-mono">
                                  13:30 José
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* VIEW 3: SERVIÇOS */}
              {activeNav === 'servicos' && (
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Serviços</h2>
                      <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>Gerencie o que você oferece aos seus clientes</p>
                    </div>

                    <button style={{
                      backgroundColor: '#3b82f6',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.625rem 1.25rem',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer'
                    }}>
                      <Plus size={16} />
                      <span>Adicionar serviço</span>
                    </button>
                  </div>

                  <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '4px', height: '36px', backgroundColor: '#3b82f6', borderRadius: '2px' }} />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontWeight: 700, fontSize: '1rem' }}>corte</span>
                          <span style={{ fontSize: '0.65rem', backgroundColor: '#1e3a8a', color: '#93c5fd', padding: '0.125rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>Ativo</span>
                        </div>
                        <div style={{ fontSize: '0.8125rem', color: '#6b7280', marginTop: '0.25rem' }}>
                          1h • Preço não informado
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button style={{ background: 'transparent', border: '1px solid #202434', color: '#9ca3af', padding: '0.375rem', borderRadius: '4px', cursor: 'pointer' }}><Edit3 size={14} /></button>
                      <button style={{ background: 'transparent', border: '1px solid #202434', color: '#ef4444', padding: '0.375rem', borderRadius: '4px', cursor: 'pointer' }}><Trash2 size={14} /></button>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 4: DISPONIBILIDADE */}
              {activeNav === 'disponibilidade' && (
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Configure horários de atendimento, pausas e dias disponíveis.</p>
                  </div>

                  {/* Employee switcher */}
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    <div style={{ backgroundColor: '#2563eb', color: '#fff', padding: '0.625rem 1rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.625rem', cursor: 'pointer' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8125rem' }}>J</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.84rem' }}>José Alisson</div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>Proprietário</div>
                      </div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', color: '#9ca3af', padding: '0.625rem 1rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.625rem', cursor: 'pointer' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#059669', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8125rem' }}>K</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.84rem' }}>kk</div>
                        <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>Sem função</div>
                      </div>
                    </div>

                    <div style={{ border: '1px dashed #2a2e40', color: '#8f94a6', padding: '0.625rem 1rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', cursor: 'pointer' }}>
                      <UserPlus size={15} />
                      <span>+ Funcionário</span>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '1.25rem' }}>
                    {/* Weekly schedule */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Horários semanais</h3>
                        <button style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: '0.8125rem' }}>Salvar horários</button>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'].map((day, idx) => {
                          const isMonday = idx === 1;
                          return (
                            <div key={day} style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-sm)', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '32px', height: '18px', backgroundColor: isMonday ? '#3b82f6' : '#202434', borderRadius: '9999px', position: 'relative' }}>
                                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#fff', position: 'absolute', top: '2px', left: isMonday ? '16px' : '2px' }} />
                                </div>
                                <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>{day}</span>
                              </div>

                              {isMonday && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <span className="font-mono" style={{ backgroundColor: '#0e1017', border: '1px solid #202434', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8125rem' }}>09:00</span>
                                  <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>até</span>
                                  <span className="font-mono" style={{ backgroundColor: '#0e1017', border: '1px solid #202434', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8125rem' }}>18:00</span>
                                  <span style={{ color: '#3b82f6', fontSize: '0.75rem', fontWeight: 600, marginLeft: '0.5rem' }}>+ Pausa</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Mini Calendar side panel */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.75rem' }}>Agosto 2026</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '0.7rem', color: '#6b7280', gap: '2px', marginBottom: '0.5rem' }}>
                          <span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '0.75rem', gap: '4px' }}>
                          {Array.from({ length: 31 }).map((_, i) => (
                            <span key={i} style={{ padding: '2px 0', color: i >= 26 ? '#3b82f6' : '#9ca3af', fontWeight: i >= 26 ? 700 : 400 }}>{i + 1}</span>
                          ))}
                        </div>
                        <p style={{ fontSize: '0.68rem', color: '#6b7280', textAlign: 'center', marginTop: '0.75rem' }}>
                          Clique num dia para marcar/desmarcar ausência — <span style={{ color: '#3b82f6' }}>salva automaticamente</span>
                        </p>
                      </div>

                      <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.05em', marginBottom: '0.5rem' }} className="font-mono">SERVIÇOS</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>corte</div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>1h · R$ 0.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 5: CLIENTES */}
              {activeNav === 'clientes' && (
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Clientes</h2>
                      <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>1 cliente cadastrado</p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '0.4rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8125rem', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        <span>LTV ↓ (maior primeiro)</span>
                        <ChevronDown size={14} />
                      </div>
                      <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '0.4rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8125rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Search size={14} />
                        <span>Buscar por nome, e-mail...</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1rem' }}>J</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>José Alisson</div>
                        <div style={{ fontSize: '0.78rem', color: '#6b7280' }} className="font-mono">ploner.mkt0@gmail.com 98448201</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.9375rem' }} className="font-mono">2</div>
                        <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>serviços</div>
                      </div>

                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#9ca3af' }} className="font-mono">—</div>
                        <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>LTV</div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.7rem', color: '#6b7280', fontWeight: 700 }} className="font-mono">ÚLTIMA VISITA</div>
                        <div style={{ fontSize: '0.8125rem', color: '#d1d5db' }}>28 de ago. de 2026</div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.375rem' }}>
                        <button style={{ backgroundColor: '#1a1d29', border: '1px solid #282c3f', color: '#9ca3af', padding: '0.375rem', borderRadius: '4px', cursor: 'pointer' }}><Mail size={14} /></button>
                        <button style={{ backgroundColor: '#1a1d29', border: '1px solid #282c3f', color: '#9ca3af', padding: '0.375rem', borderRadius: '4px', cursor: 'pointer' }}><MessageSquare size={14} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 6, 7, 8: FALLBACK PLACEHOLDERS FOR OTHER TABS */}
              {['planos', 'whatsapp', 'configuracoes'].includes(activeNav) && (
                <div style={{ padding: '3rem', textAlign: 'center', color: '#8f94a6' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>
                    {activeNav === 'planos' && 'Planos & Upgrade'}
                    {activeNav === 'whatsapp' && 'WhatsApp Bot (Em breve)'}
                    {activeNav === 'configuracoes' && 'Configurações'}
                  </div>
                  <p style={{ fontSize: '0.875rem' }}>Gerencie recursos avançados e automações do seu estabelecimento no CLiK.</p>
                </div>
              )}

            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

