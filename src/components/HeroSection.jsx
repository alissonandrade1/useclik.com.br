import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Calendar as CalendarIcon, 
  Tag, 
  Clock, 
  Users, 
  MessageSquare, 
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
  UserPlus,
  Play,
  Pause,
  TrendingUp,
  Sparkles,
  Smartphone
} from 'lucide-react';
import Logo from './Logo';

export default function HeroSection() {
  const [activeNav, setActiveNav] = useState('visao-geral');
  const [agendamentosView, setAgendamentosView] = useState('calendario');
  const [selectedCalendarDay, setSelectedCalendarDay] = useState(27);
  const [autoPlay, setAutoPlay] = useState(false);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState(false);
  const [activeProf, setActiveProf] = useState('gabriel');

  // Auto-play tabs animation if enabled
  useEffect(() => {
    if (!autoPlay) return;
    const tabs = ['visao-geral', 'agendamentos', 'servicos', 'disponibilidade', 'clientes'];
    const timer = setInterval(() => {
      setActiveNav(prev => {
        const nextIndex = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const handleSaveHours = () => {
    setSaveSuccessNotice(true);
    setTimeout(() => setSaveSuccessNotice(false), 2500);
  };

  return (
    <section className="section" style={{ paddingTop: 'clamp(3rem, 5vw, 4.5rem)', paddingBottom: 'clamp(3.5rem, 6vw, 5rem)' }}>
      <div className="container">
        {/* Main Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 3rem auto' }}>
          <div className="badge badge-mono" style={{ marginBottom: '1.25rem' }}>
            <span className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-status-green)' }}></span>
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
              className="btn btn-primary btn-lg btn-mobile-full"
              style={{ textDecoration: 'none' }}
            >
              <span>Inicie agora</span>
              <ArrowRight size={18} />
            </a>
            <a href="#como-funciona" className="btn btn-secondary btn-lg btn-mobile-full" style={{ textDecoration: 'none' }}>
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
          {/* Top Demo Bar Controls */}
          <div style={{
            backgroundColor: '#07080d',
            borderBottom: '1px solid #1a1c26',
            padding: '0.625rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span style={{ fontWeight: 600, color: '#e5e7eb' }} className="font-mono">DEMONSTRAÇÃO AO VIVO — SISTEMA REAL</span>
              <span style={{ fontSize: '0.68rem', backgroundColor: '#1e2436', color: '#60a5fa', padding: '0.125rem 0.5rem', borderRadius: '4px' }} className="font-mono">
                Studio Beleza & Estilo
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button 
                onClick={() => setAutoPlay(!autoPlay)}
                style={{
                  background: autoPlay ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                  border: '1px solid #202434',
                  color: autoPlay ? '#60a5fa' : '#9ca3af',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.72rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem'
                }}
              >
                {autoPlay ? <Pause size={12} /> : <Play size={12} />}
                <span>{autoPlay ? 'Pausar Tour Automático' : 'Iniciar Tour Automático'}</span>
              </button>
            </div>
          </div>

          {/* Mobile Horizontal Scrollable Tab Bar (Visible on mobile/tablet <= 840px) */}
          <div className="app-mobile-nav-bar">
            {[
              { id: 'visao-geral', label: 'Visão geral', icon: LayoutDashboard },
              { id: 'agendamentos', label: 'Agendamentos', icon: CalendarIcon },
              { id: 'servicos', label: 'Serviços', icon: Tag },
              { id: 'disponibilidade', label: 'Disponibilidade', icon: Clock },
              { id: 'clientes', label: 'Clientes', icon: Users },
              { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveNav(item.id); setAutoPlay(false); }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: isActive ? '#1c2235' : '#12141d',
                    color: isActive ? '#60a5fa' : '#8f94a6',
                    border: isActive ? '1px solid #3b82f6' : '1px solid #202434',
                    fontSize: '0.78rem',
                    fontWeight: isActive ? 600 : 400,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer'
                  }}
                >
                  <Icon size={14} color={isActive ? '#3b82f6' : '#8f94a6'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main App Container */}
          <div style={{ display: 'flex', minHeight: '640px', flexWrap: 'nowrap' }}>
            
            {/* Real App Left Sidebar (No Planos or Configuracoes) */}
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
                    Studio Beleza & Estilo
                  </div>
                </div>

                {/* Main Navigation Items */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  {[
                    { id: 'visao-geral', label: 'Visão geral', icon: LayoutDashboard },
                    { id: 'agendamentos', label: 'Agendamentos', icon: CalendarIcon },
                    { id: 'servicos', label: 'Serviços', icon: Tag },
                    { id: 'disponibilidade', label: 'Disponibilidade', icon: Clock },
                    { id: 'clientes', label: 'Clientes', icon: Users },
                    { id: 'whatsapp', label: 'WhatsApp Bot', icon: MessageSquare, badge: 'Em breve' },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isActive = activeNav === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => { setActiveNav(item.id); setAutoPlay(false); }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: '0.625rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: isActive ? '#1c2235' : 'transparent',
                          color: isActive ? '#60a5fa' : '#8f94a6',
                          border: isActive ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid transparent',
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
                  <span>Aparência Escura</span>
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
                <div style={{ fontSize: '0.8125rem', color: '#8f94a6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>Qui, 27 de ago</span>
                  <span style={{ color: '#3b82f6', fontWeight: 600 }}>• 14 agendamentos hoje</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.78rem'
                  }}>
                    SB
                  </div>
                  <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#d1d5db' }}>Studio Beleza</span>
                </div>
              </div>

              {/* VIEW 1: VISÃO GERAL (100% Fictional Thriving Data) */}
              {activeNav === 'visao-geral' && (
                <div style={{ padding: '1.5rem' }} className="animate-fade-in">
                  {/* Header Title & Date Filters */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                        Olá, Studio Beleza 👋
                      </h2>
                      <div style={{ fontSize: '0.8125rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="font-mono" style={{ color: '#3b82f6' }}>/studio-beleza</span>
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

                  {/* 7 Metric Cards Grid with Rich Fictional Data */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '0.875rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)', transition: 'transform 150ms', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem', whiteSpace: 'nowrap' }} className="font-mono">RECEITA DO MÊS</div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#10b981', whiteSpace: 'nowrap' }} className="font-mono">R$ 18.420,00</div>
                      <div style={{ fontSize: '0.72rem', color: '#10b981', marginTop: '0.25rem', fontWeight: 600, whiteSpace: 'nowrap' }}>+24.5% vs mês anterior</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem', whiteSpace: 'nowrap' }} className="font-mono">AGENDAMENTOS</div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap' }} className="font-mono">168</div>
                      <div style={{ fontSize: '0.72rem', color: '#6b7280', marginTop: '0.25rem', whiteSpace: 'nowrap' }}>152 concluidos · 14 confirmados</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem', whiteSpace: 'nowrap' }} className="font-mono">TICKET MÉDIO</div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap' }} className="font-mono">R$ 109,64</div>
                      <div style={{ fontSize: '0.72rem', color: '#3b82f6', marginTop: '0.25rem', whiteSpace: 'nowrap' }}>Projetada R$ 20.200,00</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem', whiteSpace: 'nowrap' }} className="font-mono">NOVOS CLIENTES</div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap' }} className="font-mono">42</div>
                      <div style={{ fontSize: '0.72rem', color: '#10b981', marginTop: '0.25rem', whiteSpace: 'nowrap' }}>+12 nesta semana</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem', whiteSpace: 'nowrap' }} className="font-mono">LTV MÉDIO</div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap' }} className="font-mono">R$ 840,00</div>
                      <div style={{ fontSize: '0.72rem', color: '#8f94a6', marginTop: '0.25rem', whiteSpace: 'nowrap' }}>Recorrência de 3.2x</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem', whiteSpace: 'nowrap' }} className="font-mono">TAXA DE CONCLUSÃO</div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#10b981', whiteSpace: 'nowrap' }} className="font-mono">96.4%</div>
                      <div style={{ fontSize: '0.72rem', color: '#6b7280', marginTop: '0.25rem', whiteSpace: 'nowrap' }}>Apenas 2 no-shows (1.2%)</div>
                    </div>

                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.7rem', color: '#8f94a6', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem', whiteSpace: 'nowrap' }} className="font-mono">CHURN (60 DIAS)</div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap' }} className="font-mono">2</div>
                      <div style={{ fontSize: '0.72rem', color: '#10b981', marginTop: '0.25rem', whiteSpace: 'nowrap' }}>Retenção de 98.8%</div>
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
                      <div style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.375rem' }} className="font-mono">
                        <TrendingUp size={14} />
                        <span>Crescimento constante (+18%)</span>
                      </div>
                    </div>
                    <div style={{ height: '90px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '4px', paddingBottom: '0.5rem', borderBottom: '1px solid #1e2232' }}>
                      {[40, 55, 30, 65, 75, 50, 80, 45, 60, 85, 95, 70, 80, 90, 65, 75, 88, 100, 70, 85, 90, 95, 80, 88, 92, 100, 85, 90].map((h, i) => (
                        <div key={i} style={{
                          flex: 1,
                          height: `${h}%`,
                          backgroundColor: i >= 24 ? '#3b82f6' : '#1c2438',
                          borderRadius: '2px',
                          transition: 'all 200ms ease'
                        }} />
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#6b7280', marginTop: '0.5rem' }} className="font-mono">
                      <span>28/07</span>
                      <span>11/08</span>
                      <span>26/08</span>
                    </div>
                  </div>

                  {/* Bottom Row (3 Cards with Rich Fictional Data) */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    {/* Próximos agendamentos */}
                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.05em', marginBottom: '1rem' }} className="font-mono">
                        PRÓXIMOS AGENDAMENTOS
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                        {[
                          { name: 'Lucas Silva', service: 'Corte & Barba Premium', time: 'Hoje, 14:30', badge: 'CONFIRMADO', color: '#10b981' },
                          { name: 'Camila Rocha', service: 'Lash Lifting & Sobrancelha', time: 'Hoje, 15:45', badge: 'CONFIRMADO', color: '#10b981' },
                          { name: 'Rafael Mendes', service: 'Corte Degradê', time: 'Hoje, 17:00', badge: 'CONFIRMADO', color: '#10b981' },
                        ].map((item, idx) => (
                          <div key={idx} style={{ backgroundColor: '#0e1017', border: '1px solid #1c202d', borderRadius: 'var(--radius-sm)', padding: '0.625rem 0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem' }}>{item.name[0]}</div>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.8125rem' }}>{item.name}</div>
                                <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>{item.service}</div>
                              </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{ fontSize: '0.7rem', color: '#9ca3af', fontWeight: 600 }} className="font-mono">{item.time}</div>
                              <span style={{ fontSize: '0.6rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: item.color, border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.125rem 0.375rem', borderRadius: '4px', fontWeight: 700 }} className="font-mono">
                                {item.badge}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Serviços mais usados */}
                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.05em', marginBottom: '1rem' }} className="font-mono">
                        SERVIÇOS MAIS USADOS
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {[
                          { rank: '#1', name: 'Corte + Barba Premium', count: '84×', rev: 'R$ 7.560,00' },
                          { rank: '#2', name: 'Design de Sobrancelha', count: '52×', rev: 'R$ 4.160,00' },
                          { rank: '#3', name: 'Lash Lifting Completo', count: '32×', rev: 'R$ 4.480,00' },
                        ].map((s, idx) => (
                          <div key={idx} style={{ borderBottom: idx === 2 ? 'none' : '1px solid #1c202d', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                              <span style={{ fontWeight: 600, fontSize: '0.8125rem' }}><span style={{ color: '#6b7280' }}>{s.rank}</span> {s.name}</span>
                              <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>{s.rev} em receita</div>
                            </div>
                            <span className="font-mono" style={{ fontWeight: 700, color: '#3b82f6', fontSize: '0.875rem' }}>{s.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Saúde do negócio */}
                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.05em', marginBottom: '1rem' }} className="font-mono">
                        SAÚDE DO NEGÓCIO
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8125rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#8f94a6' }}>Taxa de conclusão</span>
                          <span className="font-mono" style={{ fontWeight: 700, color: '#10b981' }}>96.4%</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#8f94a6' }}>Taxa de no-show</span>
                          <span className="font-mono" style={{ fontWeight: 700, color: '#10b981' }}>1.2% (apenas 2)</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#8f94a6' }}>Taxa de retorno</span>
                          <span className="font-mono" style={{ fontWeight: 700, color: '#3b82f6' }}>88.5% (recorrentes)</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#8f94a6' }}>Satisfação Clientes</span>
                          <span className="font-mono" style={{ fontWeight: 700, color: '#f59e0b' }}>4.9 ★★★★★</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 2: AGENDAMENTOS */}
              {activeNav === 'agendamentos' && (
                <div style={{ padding: '1.5rem' }} className="animate-fade-in">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Agendamentos</h2>
                      <p style={{ fontSize: '0.8125rem', color: '#10b981', fontWeight: 600 }}>14 confirmados para hoje</p>
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
                    /* Lista View with Rich Data */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', letterSpacing: '0.05em', marginBottom: '0.75rem' }} className="font-mono">
                          CONFIRMADOS HOJE · 4
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                          {[
                            { name: 'Lucas Silva', service: 'Corte + Barba Premium', time: 'Hoje, 14:30', status: 'Confirmado', prof: 'Gabriel Barbeiro' },
                            { name: 'Camila Rocha', service: 'Lash Lifting & Sobrancelha', time: 'Hoje, 15:45', status: 'Confirmado', prof: 'Dra. Vanessa' },
                            { name: 'Mariana Costa', service: 'Design de Sobrancelha', time: 'Hoje, 16:30', status: 'Confirmado', prof: 'Camila Designer' },
                            { name: 'Rodrigo Alves', service: 'Barboterapia Especial', time: 'Hoje, 17:30', status: 'Confirmado', prof: 'Gabriel Barbeiro' },
                          ].map((item, idx) => (
                            <div key={idx} style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{item.name[0]}</div>
                                <div>
                                  <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{item.name}</div>
                                  <div style={{ fontSize: '0.8125rem', color: '#6b7280' }}>{item.service} · <span style={{ color: '#3b82f6' }}>{item.prof}</span></div>
                                </div>
                              </div>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.125rem' }} className="font-mono">{item.time}</div>
                                <span style={{ fontSize: '0.7rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.125rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>
                                  {item.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3b82f6', letterSpacing: '0.05em', marginBottom: '0.75rem' }} className="font-mono">
                          CONCLUÍDOS HOJE · 3
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                          {[
                            { name: 'Gabriel Souza', service: 'Corte Degradê', time: 'Hoje, 09:00', status: 'Concluído' },
                            { name: 'Amanda Lima', service: 'Limpeza de Pele', time: 'Hoje, 10:15', status: 'Concluído' },
                          ].map((item, idx) => (
                            <div key={idx} style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#059669', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{item.name[0]}</div>
                                <div>
                                  <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{item.name}</div>
                                  <div style={{ fontSize: '0.8125rem', color: '#6b7280' }}>{item.service}</div>
                                </div>
                              </div>
                              <span style={{ fontSize: '0.7rem', backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '0.125rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>
                                {item.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Calendário View Interactive */
                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', items: 'center', gap: '1rem' }}>
                          <span style={{ color: '#8f94a6', cursor: 'pointer' }}>‹</span>
                          <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Agosto 2026</h3>
                          <span style={{ color: '#8f94a6', cursor: 'pointer' }}>›</span>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#3b82f6' }} className="font-mono">Clique nos dias para visualizar agendamentos</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem', fontWeight: 600 }}>
                        <span>Dom</span><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={`empty-${i}`} style={{ minHeight: '52px' }} />
                        ))}

                        {Array.from({ length: 31 }).map((_, i) => {
                          const day = i + 1;
                          const isSelected = selectedCalendarDay === day;
                          const hasAppointments = [12, 18, 24, 27, 28, 29, 30].includes(day);

                          return (
                            <div 
                              key={day} 
                              onClick={() => setSelectedCalendarDay(day)}
                              style={{
                                minHeight: '58px',
                                backgroundColor: isSelected ? '#152038' : '#0e1017',
                                border: isSelected ? '1.5px solid #3b82f6' : '1px solid #1c202d',
                                borderRadius: '6px',
                                padding: '0.375rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                transition: 'all 150ms'
                              }}
                            >
                              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: isSelected ? '#60a5fa' : '#9ca3af' }}>{day}</span>
                              {hasAppointments && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                  <div style={{ fontSize: '0.58rem', backgroundColor: '#064e3b', color: '#34d399', padding: '1px 3px', borderRadius: '2px', overflow: 'hidden', whiteSpace: 'nowrap' }} className="font-mono">
                                    {day === 27 ? '14:30 Lucas' : '09:00 Camila'}
                                  </div>
                                  <div style={{ fontSize: '0.58rem', backgroundColor: '#1e3a8a', color: '#93c5fd', padding: '1px 3px', borderRadius: '2px', overflow: 'hidden', whiteSpace: 'nowrap' }} className="font-mono">
                                    {day === 27 ? '15:45 Camila' : '11:00 Rafael'}
                                  </div>
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

              {/* VIEW 3: SERVIÇOS (Rich Fictional Data) */}
              {activeNav === 'servicos' && (
                <div style={{ padding: '1.5rem' }} className="animate-fade-in">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Serviços</h2>
                      <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>4 serviços ativos configurados</p>
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

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { name: 'Corte + Barba Premium', duration: '1h', price: 'R$ 90,00', count: '84 agendamentos este mês' },
                      { name: 'Design de Sobrancelha', duration: '45min', price: 'R$ 75,00', count: '52 agendamentos este mês' },
                      { name: 'Lash Lifting Completo', duration: '1h 15min', price: 'R$ 140,00', count: '32 agendamentos este mês' },
                      { name: 'Limpeza de Pele Profunda', duration: '1h 30min', price: 'R$ 160,00', count: '24 agendamentos este mês' },
                    ].map((s, idx) => (
                      <div key={idx} style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ width: '4px', height: '36px', backgroundColor: '#3b82f6', borderRadius: '2px' }} />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span style={{ fontWeight: 700, fontSize: '1rem' }}>{s.name}</span>
                              <span style={{ fontSize: '0.65rem', backgroundColor: '#1e3a8a', color: '#93c5fd', padding: '0.125rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>Ativo</span>
                            </div>
                            <div style={{ fontSize: '0.8125rem', color: '#6b7280', marginTop: '0.25rem' }}>
                              {s.duration} • <span style={{ color: '#10b981', fontWeight: 600 }} className="font-mono">{s.price}</span> • <span style={{ color: '#8f94a6' }}>{s.count}</span>
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <button style={{ background: 'transparent', border: '1px solid #202434', color: '#9ca3af', padding: '0.375rem', borderRadius: '4px', cursor: 'pointer' }}><Edit3 size={14} /></button>
                          <button style={{ background: 'transparent', border: '1px solid #202434', color: '#ef4444', padding: '0.375rem', borderRadius: '4px', cursor: 'pointer' }}><Trash2 size={14} /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 4: DISPONIBILIDADE (Interactive with Feedback) */}
              {activeNav === 'disponibilidade' && (
                <div style={{ padding: '1.5rem' }} className="animate-fade-in">
                  <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Configure horários de atendimento, pausas e dias disponíveis.</p>
                    {saveSuccessNotice && (
                      <span style={{ fontSize: '0.75rem', backgroundColor: '#064e3b', color: '#34d399', padding: '0.25rem 0.75rem', borderRadius: '4px', fontWeight: 600 }} className="animate-fade-in font-mono">
                        ✓ Horários salvos com sucesso!
                      </span>
                    )}
                  </div>

                  {/* Employee switcher */}
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    <div 
                      onClick={() => setActiveProf('gabriel')}
                      style={{ 
                        backgroundColor: activeProf === 'gabriel' ? '#2563eb' : '#12141d', 
                        border: activeProf === 'gabriel' ? '1px solid #3b82f6' : '1px solid #1e2232',
                        color: '#fff', 
                        padding: '0.625rem 1rem', 
                        borderRadius: 'var(--radius-sm)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.625rem', 
                        cursor: 'pointer' 
                      }}
                    >
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8125rem' }}>G</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.84rem' }}>Gabriel Santos</div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>Barbeiro Senior</div>
                      </div>
                    </div>

                    <div 
                      onClick={() => setActiveProf('vanessa')}
                      style={{ 
                        backgroundColor: activeProf === 'vanessa' ? '#2563eb' : '#12141d', 
                        border: activeProf === 'vanessa' ? '1px solid #3b82f6' : '1px solid #1e2232',
                        color: '#fff', 
                        padding: '0.625rem 1rem', 
                        borderRadius: 'var(--radius-sm)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.625rem', 
                        cursor: 'pointer' 
                      }}
                    >
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#059669', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8125rem' }}>V</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.84rem' }}>Dra. Vanessa</div>
                        <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Estética Facial</div>
                      </div>
                    </div>

                    <div style={{ border: '1px dashed #2a2e40', color: '#8f94a6', padding: '0.625rem 1rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', cursor: 'pointer' }}>
                      <UserPlus size={15} />
                      <span>+ Atendente</span>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '1.25rem' }}>
                    {/* Weekly schedule */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Horários semanais</h3>
                        <button 
                          onClick={handleSaveHours}
                          style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: '0.8125rem', cursor: 'pointer' }}
                        >
                          Salvar horários
                        </button>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'].map((day, idx) => {
                          const isActiveDay = idx >= 1 && idx <= 6;
                          return (
                            <div key={day} style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-sm)', padding: '0.625rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '32px', height: '18px', backgroundColor: isActiveDay ? '#3b82f6' : '#202434', borderRadius: '9999px', position: 'relative' }}>
                                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#fff', position: 'absolute', top: '2px', left: isActiveDay ? '16px' : '2px' }} />
                                </div>
                                <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>{day}</span>
                              </div>

                              {isActiveDay && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <span className="font-mono" style={{ backgroundColor: '#0e1017', border: '1px solid #202434', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8125rem' }}>08:30</span>
                                  <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>até</span>
                                  <span className="font-mono" style={{ backgroundColor: '#0e1017', border: '1px solid #202434', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8125rem' }}>19:30</span>
                                  <span style={{ color: '#3b82f6', fontSize: '0.72rem', fontWeight: 600, marginLeft: '0.375rem', cursor: 'pointer' }}>+ Pausa</span>
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
                            <span key={i} style={{ padding: '2px 0', color: i >= 20 ? '#3b82f6' : '#9ca3af', fontWeight: i >= 20 ? 700 : 400 }}>{i + 1}</span>
                          ))}
                        </div>
                        <p style={{ fontSize: '0.68rem', color: '#6b7280', textAlign: 'center', marginTop: '0.75rem' }}>
                          Marcar ausência salva automaticamente
                        </p>
                      </div>

                      <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.05em', marginBottom: '0.5rem' }} className="font-mono">SERVIÇOS VINCULADOS</div>
                        <div style={{ fontSize: '0.84rem', fontWeight: 600 }}>Corte + Barba Premium</div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>1h · R$ 90,00</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 5: CLIENTES (CRM & LTV Fictional Data) */}
              {activeNav === 'clientes' && (
                <div style={{ padding: '1.5rem' }} className="animate-fade-in">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Clientes (CRM)</h2>
                      <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>42 clientes ativos cadastrados</p>
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

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { name: 'Lucas Silva', email: 'lucas.silva@email.com', phone: '11 99482-1102', visits: '14 visitas', ltv: 'R$ 1.260,00', lastVisit: '24/08/2026', badge: 'Recorrente 🌟', badgeColor: '#10b981' },
                      { name: 'Camila Rocha', email: 'camila.rocha@email.com', phone: '11 98823-4410', visits: '8 visitas', ltv: 'R$ 1.120,00', lastVisit: '18/08/2026', badge: 'VIP 💎', badgeColor: '#3b82f6' },
                      { name: 'Mariana Costa', email: 'mariana.costa@email.com', phone: '11 97712-3099', visits: '6 visitas', ltv: 'R$ 680,00', lastVisit: '10/08/2026', badge: 'Recorrente', badgeColor: '#10b981' },
                      { name: 'Rodrigo Alves', email: 'rodrigo.alves@email.com', phone: '11 96621-9988', visits: '12 visitas', ltv: 'R$ 1.080,00', lastVisit: 'há 34 dias', badge: 'Alerta Retorno ⚠️', badgeColor: '#f59e0b' },
                    ].map((client, idx) => (
                      <div key={idx} style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1rem' }}>{client.name[0]}</div>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{client.name}</span>
                              <span style={{ fontSize: '0.65rem', backgroundColor: `${client.badgeColor}22`, color: client.badgeColor, border: `1px solid ${client.badgeColor}44`, padding: '0.125rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>{client.badge}</span>
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#6b7280' }} className="font-mono">{client.email} · {client.phone}</div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ fontWeight: 700, fontSize: '0.9375rem' }} className="font-mono">{client.visits}</div>
                            <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>frequência</div>
                          </div>

                          <div style={{ textAlign: 'center' }}>
                            <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#10b981' }} className="font-mono">{client.ltv}</div>
                            <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>LTV Total</div>
                          </div>

                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '0.7rem', color: '#6b7280', fontWeight: 700 }} className="font-mono">ÚLTIMA VISITA</div>
                            <div style={{ fontSize: '0.8125rem', color: '#d1d5db' }}>{client.lastVisit}</div>
                          </div>

                          <div style={{ display: 'flex', gap: '0.375rem' }}>
                            <button style={{ backgroundColor: '#1a1d29', border: '1px solid #282c3f', color: '#9ca3af', padding: '0.375rem', borderRadius: '4px', cursor: 'pointer' }}><Mail size={14} /></button>
                            <button style={{ backgroundColor: '#1a1d29', border: '1px solid #282c3f', color: '#10b981', padding: '0.375rem', borderRadius: '4px', cursor: 'pointer' }}><MessageSquare size={14} /></button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 6: WHATSAPP BOT (Em breve) */}
              {activeNav === 'whatsapp' && (
                <div style={{ padding: '2rem', textAlign: 'center' }} className="animate-fade-in">
                  <div style={{ maxWidth: '480px', margin: '0 auto' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                      <Smartphone size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>WhatsApp Bot & Automações (Em Breve)</h3>
                    <p style={{ fontSize: '0.875rem', color: '#8f94a6', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                      Lembretes automáticos 24h antes, confirmações via WhatsApp e reengajamento automático de clientes que não voltam há mais de 30 dias.
                    </p>
                    <div style={{ backgroundColor: '#12141d', border: '1px solid #1e2232', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'left' }}>
                      <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, marginBottom: '0.5rem' }} className="font-mono">💬 Exemplo de Notificação Automática:</div>
                      <div style={{ fontSize: '0.8125rem', color: '#d1d5db', backgroundColor: '#0e1017', padding: '0.75rem', borderRadius: '6px', borderLeft: '3px solid #10b981' }}>
                        "Olá Lucas! Confirmando seu atendimento amanhã às 14:30 no Studio Beleza & Estilo. Digite 1 para confirmar ou 2 para remarcar."
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </main>
          </div>
        </div>
      </div>
    </section>
  );
}


