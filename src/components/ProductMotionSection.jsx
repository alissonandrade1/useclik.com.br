import React, { useState, useEffect } from 'react';
import {
  LayoutGrid,
  Calendar,
  Clock,
  Tag,
  Users,
  MessageSquare,
  Settings,
  Sun,
  Check,
  Copy,
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import Logo from './Logo';

const systemScenes = [
  { id: 'visao-geral', label: 'Visão geral', icon: LayoutGrid },
  { id: 'agendamentos', label: 'Agendamentos', icon: Calendar },
  { id: 'equipe', label: 'Equipe & Horários', icon: Clock },
  { id: 'clientes', label: 'Serviços & CRM', icon: Users },
];

const chartBars = [
  { h: 42, green: 34, cancel: 0 },
  { h: 58, green: 50, cancel: 8 },
  { h: 52, green: 52, cancel: 0 },
  { h: 74, green: 68, cancel: 6 },
  { h: 86, green: 86, cancel: 0 },
  { h: 94, green: 90, cancel: 4 },
  { h: 35, green: 35, cancel: 0 },
  { h: 62, green: 62, cancel: 0 },
  { h: 70, green: 64, cancel: 6 },
  { h: 82, green: 82, cancel: 0 },
  { h: 90, green: 86, cancel: 4 },
  { h: 100, green: 100, cancel: 0 },
  { h: 48, green: 48, cancel: 0 },
  { h: 76, green: 76, cancel: 0 },
];

const clientSteps = [
  { step: 0, label: '1. Serviço', progress: '33%' },
  { step: 1, label: '2. Horário', progress: '66%' },
  { step: 2, label: '3. Dados', progress: '90%' },
  { step: 3, label: '✓ Pronto', progress: '100%' },
];

export default function ProductMotionSection() {
  const [activeScene, setActiveScene] = useState(0);
  const [pauseSystem, setPauseSystem] = useState(false);

  const [bookingStep, setBookingStep] = useState(0);
  const [pauseBooking, setPauseBooking] = useState(false);
  const [copiedDemo, setCopiedDemo] = useState(false);

  useEffect(() => {
    if (pauseSystem) return undefined;
    const timer = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % systemScenes.length);
    }, 4600);
    return () => clearInterval(timer);
  }, [pauseSystem]);

  useEffect(() => {
    if (pauseBooking) return undefined;
    const timer = setInterval(() => {
      setBookingStep((prev) => (prev + 1) % clientSteps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [pauseBooking]);

  const handleCopyDemo = () => {
    setCopiedDemo(true);
    setTimeout(() => setCopiedDemo(false), 1800);
  };

  return (
    <section
      id="sistema"
      className="section"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ maxWidth: '720px', marginBottom: '2.75rem' }}>
          <div className="eyebrow eyebrow-green" style={{ marginBottom: '1rem' }}>
            <Sparkles size={13} />
            <span>DOIS LADOS DA MESMA OPERAÇÃO</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: '0.85rem' }}>
            Controle completo pra você. Três toques pro seu cliente agendar.
          </h2>
          <p className="section-subtitle">
            À esquerda, o painel onde sua barbearia acompanha agenda, equipe, serviços e receita.
            À direita, a página limpa onde seu cliente reserva sozinho em segundos — sem baixar aplicativo.
          </p>
        </div>

        {/* Two-Column Motion Design Grid */}
        <div className="motion-showcase-grid">
          {/* =========================================================
              LEFT COLUMN: SYSTEM DASHBOARD MOTION (Barbershop)
             ========================================================= */}
          <div
            onMouseEnter={() => setPauseSystem(true)}
            onMouseLeave={() => setPauseSystem(false)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--bg-void)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.55)',
            }}
          >
            {/* Top Motion Selector Bar */}
            <div
              style={{
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-surface)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                {systemScenes.map((scene, idx) => {
                  const Icon = scene.icon;
                  const isActive = activeScene === idx;
                  return (
                    <button
                      key={scene.id}
                      type="button"
                      onClick={() => setActiveScene(idx)}
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.42rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: `1px solid ${isActive ? 'var(--border-strong)' : 'transparent'}`,
                        backgroundColor: isActive ? 'var(--bg-elevated)' : 'transparent',
                        color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontSize: '0.76rem',
                        fontWeight: isActive ? 600 : 500,
                        cursor: 'pointer',
                        transition: 'all 180ms ease',
                      }}
                    >
                      <Icon size={13} color={isActive ? 'var(--accent-green)' : 'currentColor'} />
                      <span>{scene.label}</span>
                      {isActive && !pauseSystem && (
                        <span
                          key={`prog-${activeScene}`}
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            height: '2px',
                            backgroundColor: 'var(--accent-green)',
                            animation: 'progressLinear 4600ms linear forwards',
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                {pauseSystem ? '⏸ Pausado' : '● Painel do estabelecimento'}
              </span>
            </div>

            {/* App Window Shell (Matches v1_151721.mp4) */}
            <div style={{ display: 'flex', flex: 1, minHeight: '455px' }}>
              {/* Sidebar */}
              <aside
                className="dashboard-sidebar-mockup"
                style={{
                  width: '172px',
                  backgroundColor: '#101013',
                  borderRight: '1px solid var(--border-subtle)',
                  padding: '1rem 0.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                }}
              >
                <div>
                  <div style={{ padding: '0 0.4rem 0.9rem', borderBottom: '1px solid var(--border-subtle)' }}>
                    <Logo size="small" />
                    <div
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                        marginTop: '0.2rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      Barbearia Navalha Club
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      padding: '0.85rem 0.4rem 0.4rem',
                      fontWeight: 600,
                    }}
                  >
                    Operação
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    {[
                      { label: 'Visão geral', icon: LayoutGrid, match: 0 },
                      { label: 'Agendamentos', icon: Calendar, match: 1 },
                      { label: 'Equipe & Horários', icon: Clock, match: 2 },
                      { label: 'Serviços', icon: Tag, match: 3 },
                      { label: 'Clientes', icon: Users, match: 3 },
                    ].map((nav, i) => {
                      const NavIcon = nav.icon;
                      const selected =
                        activeScene === nav.match &&
                        !(nav.label === 'Serviços' && activeScene !== 3);
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveScene(nav.match)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.48rem 0.55rem',
                            borderRadius: '7px',
                            border: 'none',
                            backgroundColor: selected ? '#1b1b21' : 'transparent',
                            color: selected ? '#fafafa' : 'var(--text-secondary)',
                            fontSize: '0.75rem',
                            fontWeight: selected ? 600 : 400,
                            cursor: 'pointer',
                            textAlign: 'left',
                            width: '100%',
                          }}
                        >
                          <NavIcon size={13} />
                          <span>{nav.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div
                    style={{
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      padding: '0.9rem 0.4rem 0.35rem',
                      fontWeight: 600,
                    }}
                  >
                    Sistema
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.42rem 0.55rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.73rem',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                      <MessageSquare size={13} /> WhatsApp
                    </span>
                    <span
                      style={{
                        fontSize: '0.6rem',
                        padding: '1px 5px',
                        borderRadius: '99px',
                        backgroundColor: '#1b1b21',
                      }}
                    >
                      Breve
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.42rem 0.55rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.73rem',
                    }}
                  >
                    <Settings size={13} /> Configurações
                  </div>
                </div>

                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '0.65rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: 'var(--text-muted)',
                    fontSize: '0.7rem',
                    paddingLeft: '0.4rem',
                    paddingRight: '0.4rem',
                  }}
                >
                  <span>Tema</span>
                  <Sun size={13} />
                </div>
              </aside>

              {/* Main Workspace Area */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                {/* Dashboard Top Strip */}
                <div
                  style={{
                    height: '44px',
                    borderBottom: '1px solid var(--border-subtle)',
                    padding: '0 1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    fontSize: '0.74rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Qua, 18 de nov</span>
                    <span className="status-pill status-pill-green">● Plano Pro</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <button
                      type="button"
                      onClick={handleCopyDemo}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-default)',
                        borderRadius: '6px',
                        padding: '0.25rem 0.55rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.7rem',
                        cursor: 'pointer',
                      }}
                    >
                      <Copy size={11} />
                      <span>{copiedDemo ? 'Link copiado!' : 'Copiar meu link'}</span>
                    </button>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#1f1f26',
                        border: '1px solid var(--border-default)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                      }}
                    >
                      NC
                    </div>
                  </div>
                </div>

                {/* Animated Scene Body */}
                <div style={{ padding: '1.15rem', flex: 1 }}>
                  {/* SCENE 0: VISÃO GERAL */}
                  {activeScene === 0 && (
                    <div key="scene-0" className="animate-scene">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.85rem',
                          gap: '0.5rem',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                            Olá, Navalha Club
                          </div>
                          <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}>
                            Resumo operacional · Novembro ·{' '}
                            <span className="font-mono" style={{ color: 'var(--text-secondary)' }}>
                              app.useclik.com.br/navalhaclub
                            </span>
                          </div>
                        </div>
                        <div
                          style={{
                            display: 'inline-flex',
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '7px',
                            padding: '2px',
                            fontSize: '0.68rem',
                          }}
                        >
                          <span
                            style={{
                              backgroundColor: '#1d1d24',
                              padding: '3px 8px',
                              borderRadius: '5px',
                              fontWeight: 600,
                            }}
                          >
                            Este mês
                          </span>
                          <span style={{ padding: '3px 8px', color: 'var(--text-muted)' }}>30d</span>
                          <span style={{ padding: '3px 8px', color: 'var(--text-muted)' }}>90d</span>
                        </div>
                      </div>

                      {/* 3 Primary Metric Cards */}
                      <div className="metrics-3-grid" style={{ marginBottom: '0.75rem' }}>
                        <div
                          style={{
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '10px',
                            padding: '0.8rem',
                          }}
                        >
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            Receita realizada
                          </div>
                          <div
                            className="font-mono"
                            style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '0.25rem' }}
                          >
                            R$ 14.820
                          </div>
                          <div
                            style={{
                              fontSize: '0.68rem',
                              color: 'var(--accent-green)',
                              marginTop: '0.2rem',
                            }}
                          >
                            +18% vs. mês anterior
                          </div>
                        </div>

                        <div
                          style={{
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '10px',
                            padding: '0.8rem',
                          }}
                        >
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            Atendimentos
                          </div>
                          <div
                            className="font-mono"
                            style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '0.25rem' }}
                          >
                            196
                          </div>
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                            184 concluídos · 12 hoje
                          </div>
                        </div>

                        <div
                          style={{
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '10px',
                            padding: '0.8rem',
                          }}
                        >
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            Ticket médio
                          </div>
                          <div
                            className="font-mono"
                            style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '0.25rem' }}
                          >
                            R$ 75,60
                          </div>
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                            Projetado: R$ 16.400
                          </div>
                        </div>
                      </div>

                      {/* 4 Sub-metrics Strip */}
                      <div
                        className="metrics-4-grid"
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '10px',
                          padding: '0.65rem 0.8rem',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Novos clientes</div>
                          <div className="font-mono" style={{ fontSize: '0.88rem', fontWeight: 700 }}>
                            28
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>LTV médio</div>
                          <div className="font-mono" style={{ fontSize: '0.88rem', fontWeight: 700 }}>
                            R$ 410
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Comparecimento</div>
                          <div
                            className="font-mono"
                            style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-green)' }}
                          >
                            96.8%
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Inativos 60d+</div>
                          <div className="font-mono" style={{ fontSize: '0.88rem', fontWeight: 700 }}>
                            6
                          </div>
                        </div>
                      </div>

                      {/* Attendance Bar Chart */}
                      <div
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '10px',
                          padding: '0.85rem',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '0.65rem',
                          }}
                        >
                          <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                            Volume diário de cortes (últimos 14 dias)
                          </span>
                          <div style={{ display: 'flex', gap: '0.6rem', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                            <span>● Concluídos</span>
                            <span style={{ color: 'var(--accent-green)' }}>● Confirmados</span>
                          </div>
                        </div>
                        <div
                          style={{
                            height: '74px',
                            display: 'flex',
                            alignItems: 'flex-end',
                            gap: '6px',
                          }}
                        >
                          {chartBars.map((bar, idx) => (
                            <div
                              key={idx}
                              style={{
                                flex: 1,
                                height: `${bar.h}%`,
                                backgroundColor: idx >= 11 ? 'var(--accent-green)' : '#e4e4e7',
                                opacity: idx >= 11 ? 0.9 : 0.78,
                                borderRadius: '3px 3px 0 0',
                                transition: 'height 400ms ease',
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCENE 1: AGENDAMENTOS */}
                  {activeScene === 1 && (
                    <div key="scene-1" className="animate-scene">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.8rem',
                          gap: '0.5rem',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>Agendamentos</div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            Acompanhe e gerencie todos os horários da barbearia.
                          </div>
                        </div>
                        <span
                          style={{
                            backgroundColor: '#fafafa',
                            color: '#09090b',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            padding: '0.38rem 0.75rem',
                            borderRadius: '7px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                          }}
                        >
                          <Plus size={12} /> Novo agendamento
                        </span>
                      </div>

                      {/* Search & Status Filter Pills */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          marginBottom: '0.85rem',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            minWidth: '150px',
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '7px',
                            padding: '0.38rem 0.65rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.7rem',
                            color: 'var(--text-muted)',
                          }}
                        >
                          <Search size={12} />
                          <span>Buscar cliente, protocolo ou corte...</span>
                        </div>
                        <span
                          style={{
                            backgroundColor: '#fafafa',
                            color: '#09090b',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            padding: '0.3rem 0.65rem',
                            borderRadius: '99px',
                          }}
                        >
                          Todos 14
                        </span>
                        <span className="status-pill status-pill-neutral">Confirmados 11</span>
                        <span className="status-pill status-pill-neutral">Concluídos 3</span>
                      </div>

                      {/* Expanded Booking Card (Matches frame_10) */}
                      <div
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--accent-green-border)',
                          borderRadius: '10px',
                          padding: '0.85rem',
                          marginBottom: '0.6rem',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingBottom: '0.65rem',
                            borderBottom: '1px solid var(--border-subtle)',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <div>
                              <div className="font-mono" style={{ fontSize: '0.84rem', fontWeight: 700 }}>
                                15:00
                              </div>
                              <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>18 de nov</div>
                            </div>
                            <div>
                              <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Gabriel Ferreira</div>
                              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                                Corte + Barba Terapia · Rafael Costa
                              </div>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                            <span className="font-mono" style={{ fontSize: '0.82rem', fontWeight: 700 }}>
                              R$ 85,00
                            </span>
                            <span className="status-pill status-pill-green">● Confirmado</span>
                          </div>
                        </div>

                        <div
                          className="mini-three-grid"
                          style={{
                            gap: '0.6rem',
                            paddingTop: '0.65rem',
                            fontSize: '0.7rem',
                          }}
                        >
                          <div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.62rem' }}>WHATSAPP</div>
                            <div className="font-mono" style={{ marginTop: '2px' }}>
                              (11) 99824-3190
                            </div>
                          </div>
                          <div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.62rem' }}>PROTOCOLO</div>
                            <div className="font-mono" style={{ marginTop: '2px' }}>
                              CLK-94B7M2
                            </div>
                          </div>
                          <div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.62rem' }}>ORIGEM</div>
                            <div style={{ marginTop: '2px', color: 'var(--accent-green)' }}>
                              Página pública
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Next Compact Rows */}
                      {[
                        {
                          time: '16:00',
                          client: 'Bruno Cavalcanti',
                          service: 'Corte Degradê · Lucas Martins',
                          price: 'R$ 55,00',
                        },
                        {
                          time: '17:00',
                          client: 'Pedro Henrique',
                          service: 'Barba na Toalha Quente · Rafael Costa',
                          price: 'R$ 45,00',
                        },
                      ].map((row, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '9px',
                            padding: '0.62rem 0.85rem',
                            marginBottom: '0.45rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <span className="font-mono" style={{ fontSize: '0.8rem', fontWeight: 700 }}>
                              {row.time}
                            </span>
                            <div>
                              <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{row.client}</div>
                              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                                {row.service}
                              </div>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span className="font-mono" style={{ fontSize: '0.76rem', fontWeight: 600 }}>
                              {row.price}
                            </span>
                            <span className="status-pill status-pill-green">● Confirmado</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* SCENE 2: EQUIPE & HORÁRIOS */}
                  {activeScene === 2 && (
                    <div key="scene-2" className="animate-scene">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.85rem',
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1.05rem', fontWeight: 700 }}>Equipe & Horários</span>
                            <span className="status-pill status-pill-neutral">● 3 barbeiros ativos</span>
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            Expediente semanal, pausas de almoço e folgas individuais.
                          </div>
                        </div>
                      </div>

                      {/* Barber Cards */}
                      <div style={{ display: 'flex', gap: '0.55rem', marginBottom: '0.9rem', flexWrap: 'wrap' }}>
                        {[
                          { init: 'RC', name: 'Rafael Costa', role: 'Titular', active: true },
                          { init: 'LM', name: 'Lucas Martins', role: 'Barbeiro Sênior', active: false },
                          { init: 'DA', name: 'Diego Alves', role: 'Barbeiro', active: false },
                        ].map((prof, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.55rem',
                              padding: '0.5rem 0.75rem',
                              borderRadius: '9px',
                              backgroundColor: 'var(--bg-surface)',
                              border: `1px solid ${prof.active ? '#fafafa' : 'var(--border-subtle)'}`,
                            }}
                          >
                            <div
                              style={{
                                width: '26px',
                                height: '26px',
                                borderRadius: '50%',
                                backgroundColor: prof.active ? '#fafafa' : '#1f1f26',
                                color: prof.active ? '#09090b' : '#fafafa',
                                fontSize: '0.68rem',
                                fontWeight: 700,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {prof.init}
                            </div>
                            <div>
                              <div style={{ fontSize: '0.76rem', fontWeight: 600 }}>{prof.name}</div>
                              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{prof.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Weekly Schedule Switches (Matches frame_13) */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {[
                          { day: 'Domingo', open: false },
                          { day: 'Segunda-feira', open: true, start: '09:00', end: '19:00' },
                          { day: 'Terça-feira', open: true, start: '09:00', end: '20:00' },
                          { day: 'Quarta-feira', open: true, start: '09:00', end: '20:00' },
                          { day: 'Sábado', open: true, start: '08:30', end: '18:00' },
                        ].map((d, idx) => (
                          <div
                            key={idx}
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '8px',
                              padding: '0.52rem 0.8rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '0.5rem',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                              {/* Toggle Pill */}
                              <div
                                style={{
                                  width: '32px',
                                  height: '18px',
                                  borderRadius: '99px',
                                  backgroundColor: d.open ? 'var(--accent-green)' : '#27272f',
                                  padding: '2px',
                                  display: 'flex',
                                  justifyContent: d.open ? 'flex-end' : 'flex-start',
                                }}
                              >
                                <span
                                  style={{
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '50%',
                                    backgroundColor: d.open ? '#ffffff' : '#71717a',
                                  }}
                                />
                              </div>
                              <span
                                style={{
                                  fontSize: '0.78rem',
                                  fontWeight: 500,
                                  color: d.open ? 'var(--text-primary)' : 'var(--text-muted)',
                                }}
                              >
                                {d.day}
                              </span>
                            </div>

                            {d.open ? (
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <span
                                  className="font-mono"
                                  style={{
                                    fontSize: '0.72rem',
                                    backgroundColor: 'var(--bg-void)',
                                    border: '1px solid var(--border-subtle)',
                                    padding: '2px 7px',
                                    borderRadius: '5px',
                                  }}
                                >
                                  {d.start}
                                </span>
                                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>às</span>
                                <span
                                  className="font-mono"
                                  style={{
                                    fontSize: '0.72rem',
                                    backgroundColor: 'var(--bg-void)',
                                    border: '1px solid var(--border-subtle)',
                                    padding: '2px 7px',
                                    borderRadius: '5px',
                                  }}
                                >
                                  {d.end}
                                </span>
                                <span
                                  style={{
                                    fontSize: '0.66rem',
                                    color: 'var(--text-secondary)',
                                    border: '1px solid var(--border-subtle)',
                                    padding: '2px 6px',
                                    borderRadius: '5px',
                                  }}
                                >
                                  + Pausa
                                </span>
                              </div>
                            ) : (
                              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Fechado</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SCENE 3: SERVIÇOS & CLIENTES (CRM + LTV) */}
                  {activeScene === 3 && (
                    <div key="scene-3" className="animate-scene">
                      <div style={{ marginBottom: '0.85rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '1.05rem', fontWeight: 700 }}>Catálogo & CRM de Clientes</span>
                          <span className="status-pill status-pill-green">LTV automático</span>
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          Preços visíveis no link público e histórico real de quanto cada cliente já gastou.
                        </div>
                      </div>

                      {/* Services Mini Catalog */}
                      <div className="sub-two-grid" style={{ marginBottom: '0.85rem' }}>
                        {[
                          { name: 'Corte + Barba Terapia', dur: '1h', val: 'R$ 85,00' },
                          { name: 'Corte Degradê / Social', dur: '45min', val: 'R$ 55,00' },
                        ].map((srv, idx) => (
                          <div
                            key={idx}
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '9px',
                              padding: '0.65rem 0.75rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <div>
                              <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>{srv.name}</div>
                              <div
                                className="font-mono"
                                style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '2px' }}
                              >
                                {srv.dur} · <strong>{srv.val}</strong>
                              </div>
                            </div>
                            <span className="status-pill status-pill-green">● Ativo</span>
                          </div>
                        ))}
                      </div>

                      {/* CRM Clients List (Matches frame_26) */}
                      <div
                        className="font-mono"
                        style={{
                          fontSize: '0.66rem',
                          color: 'var(--text-muted)',
                          marginBottom: '0.45rem',
                          letterSpacing: '0.04em',
                        }}
                      >
                        BASE DE CLIENTES · ORDENADO POR MAIOR RECEITA (LTV)
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {[
                          {
                            init: 'BC',
                            name: 'Bruno Cavalcanti',
                            phone: '(11) 99763-1029',
                            visits: '12 visitas',
                            ltv: 'R$ 1.020,00',
                            status: 'Recorrente',
                            warn: false,
                          },
                          {
                            init: 'MO',
                            name: 'Matheus Oliveira',
                            phone: '(11) 99412-8804',
                            visits: '8 visitas',
                            ltv: 'R$ 680,00',
                            status: '64 dias sem voltar',
                            warn: true,
                          },
                          {
                            init: 'PH',
                            name: 'Pedro Henrique',
                            phone: '(11) 99105-4421',
                            visits: '5 visitas',
                            ltv: 'R$ 425,00',
                            status: 'Última há 18d',
                            warn: false,
                          },
                        ].map((cli, idx) => (
                          <div
                            key={idx}
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              border: `1px solid ${cli.warn ? 'var(--accent-amber-border)' : 'var(--border-subtle)'}`,
                              borderRadius: '9px',
                              padding: '0.6rem 0.8rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '0.5rem',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                              <div
                                style={{
                                  width: '28px',
                                  height: '28px',
                                  borderRadius: '50%',
                                  backgroundColor: '#1f1f27',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '0.68rem',
                                  fontWeight: 700,
                                }}
                              >
                                {cli.init}
                              </div>
                              <div>
                                <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{cli.name}</div>
                                <div className="font-mono" style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                                  {cli.phone} · {cli.visits}
                                </div>
                              </div>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                              <div className="font-mono" style={{ fontSize: '0.78rem', fontWeight: 700 }}>
                                {cli.ltv}
                              </div>
                              <span
                                className={`status-pill ${
                                  cli.warn ? 'status-pill-amber' : 'status-pill-green'
                                }`}
                                style={{ marginTop: '2px' }}
                              >
                                {cli.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: CLIENT BOOKING FLOW MOTION (v2_151821.mp4)
             ========================================================= */}
          <div
            onMouseEnter={() => setPauseBooking(true)}
            onMouseLeave={() => setPauseBooking(false)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--bg-void)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.55)',
            }}
          >
            {/* Top Stepper Header */}
            <div
              style={{
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-surface)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                {clientSteps.map((s) => {
                  const active = bookingStep === s.step;
                  return (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => setBookingStep(s.step)}
                      style={{
                        padding: '0.35rem 0.6rem',
                        borderRadius: '7px',
                        border: `1px solid ${active ? 'var(--accent-green-border)' : 'transparent'}`,
                        backgroundColor: active ? 'var(--accent-green-dim)' : 'transparent',
                        color: active ? 'var(--accent-green)' : 'var(--text-muted)',
                        fontSize: '0.72rem',
                        fontWeight: active ? 700 : 500,
                        cursor: 'pointer',
                      }}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>

              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                Visão do cliente
              </span>
            </div>

            {/* Public Booking Page Canvas (Matches v2_151821.mp4) */}
            <div
              style={{
                padding: '1.15rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Public Page Top Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.85rem',
                  }}
                >
                  <Logo size="small" />
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '7px',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: 'var(--bg-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Sun size={13} />
                  </div>
                </div>

                {/* Barbershop Identity Card */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '12px',
                    padding: '0.8rem 0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: '#1b1b22',
                        border: '1px solid var(--border-default)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                      }}
                    >
                      NC
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>
                        Barbearia Navalha Club
                      </div>
                      <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        @navalhaclub
                      </div>
                    </div>
                  </div>

                  <span className="status-pill status-pill-green">● Agenda online</span>
                </div>

                {/* Emerald Progress Line */}
                <div
                  style={{
                    height: '2px',
                    width: '100%',
                    backgroundColor: 'var(--border-subtle)',
                    borderRadius: '99px',
                    margin: '0.75rem 0',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: clientSteps[bookingStep].progress,
                      backgroundColor: 'var(--accent-green)',
                      transition: 'width 400ms var(--ease-out)',
                    }}
                  />
                </div>

                {/* STEP 0: ESCOLHA O SERVIÇO */}
                {bookingStep === 0 && (
                  <div key="b-step-0" className="animate-scene">
                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '12px',
                        padding: '0.95rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.55rem',
                          marginBottom: '0.8rem',
                        }}
                      >
                        <span
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: '#fafafa',
                            color: '#09090b',
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          1
                        </span>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Escolha o serviço</span>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          {
                            name: 'Corte + Barba Terapia',
                            dur: '1h · Toalha quente inclusa',
                            price: 'R$ 85,00',
                            selected: true,
                          },
                          {
                            name: 'Corte Degradê / Social',
                            dur: '45min · Acabamento na navalha',
                            price: 'R$ 55,00',
                            selected: false,
                          },
                          {
                            name: 'Barba na Toalha Quente',
                            dur: '30min · Hidratação',
                            price: 'R$ 45,00',
                            selected: false,
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => setBookingStep(1)}
                            className={item.selected ? 'tap-highlight' : ''}
                            style={{
                              padding: '0.7rem 0.8rem',
                              borderRadius: '9px',
                              backgroundColor: item.selected
                                ? 'rgba(35, 202, 130, 0.08)'
                                : 'var(--bg-void)',
                              border: `1px solid ${
                                item.selected ? 'var(--accent-green)' : 'var(--border-subtle)'
                              }`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              cursor: 'pointer',
                            }}
                          >
                            <div>
                              <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{item.name}</div>
                              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                                {item.dur}
                              </div>
                            </div>
                            <span className="font-mono" style={{ fontSize: '0.78rem', fontWeight: 700 }}>
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 1: DATA E HORÁRIO (Matches frame_03 & frame_06) */}
                {bookingStep === 1 && (
                  <div key="b-step-1" className="animate-scene">
                    {/* Collapsed Step 1 */}
                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '10px',
                        padding: '0.6rem 0.85rem',
                        marginBottom: '0.55rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                        <span
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-green)',
                            color: '#051b11',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <div style={{ fontSize: '0.75rem' }}>
                          <strong>Corte + Barba Terapia</strong>{' '}
                          <span className="font-mono" style={{ color: 'var(--text-muted)' }}>
                            · R$ 85,00
                          </span>
                        </div>
                      </div>
                      <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Alterar</span>
                    </div>

                    {/* Active Step 2 */}
                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '12px',
                        padding: '0.85rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.65rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              backgroundColor: '#fafafa',
                              color: '#09090b',
                              fontSize: '0.7rem',
                              fontWeight: 800,
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            2
                          </span>
                          <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>Data e horário</span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.72rem',
                          }}
                        >
                          <ChevronLeft size={13} color="var(--text-muted)" />
                          <span>Novembro</span>
                          <ChevronRight size={13} color="var(--text-muted)" />
                        </div>
                      </div>

                      {/* Compact Week Strip */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(7, 1fr)',
                          gap: '0.3rem',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {[
                          { d: '15', w: 'Dom', off: true },
                          { d: '16', w: 'Seg' },
                          { d: '17', w: 'Ter' },
                          { d: '18', w: 'Qua', active: true },
                          { d: '19', w: 'Qui' },
                          { d: '20', w: 'Sex' },
                          { d: '21', w: 'Sáb' },
                        ].map((day, idx) => (
                          <div
                            key={idx}
                            style={{
                              padding: '0.35rem 0.15rem',
                              borderRadius: '7px',
                              textAlign: 'center',
                              backgroundColor: day.active ? '#fafafa' : 'var(--bg-void)',
                              color: day.active
                                ? '#09090b'
                                : day.off
                                ? 'var(--text-muted)'
                                : 'var(--text-primary)',
                              opacity: day.off ? 0.45 : 1,
                              border: '1px solid var(--border-subtle)',
                            }}
                          >
                            <div style={{ fontSize: '0.58rem' }}>{day.w}</div>
                            <div className="font-mono" style={{ fontSize: '0.74rem', fontWeight: 700 }}>
                              {day.d}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '0.45rem' }}>
                        Horários livres em <strong style={{ color: '#fafafa' }}>quarta, 18 de nov</strong>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: '0.4rem',
                        }}
                      >
                        {['09:00', '10:30', '14:00', '15:00', '16:30', '18:00'].map((slot) => {
                          const picked = slot === '15:00';
                          return (
                            <div
                              key={slot}
                              onClick={() => setBookingStep(2)}
                              className={`font-mono ${picked ? 'tap-highlight' : ''}`}
                              style={{
                                padding: '0.45rem',
                                borderRadius: '7px',
                                textAlign: 'center',
                                fontSize: '0.74rem',
                                fontWeight: picked ? 700 : 500,
                                backgroundColor: picked
                                  ? 'rgba(35, 202, 130, 0.14)'
                                  : 'var(--bg-void)',
                                border: `1px solid ${
                                  picked ? 'var(--accent-green)' : 'var(--border-subtle)'
                                }`,
                                color: picked ? 'var(--accent-green)' : 'var(--text-primary)',
                                cursor: 'pointer',
                              }}
                            >
                              {slot}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: SEUS DADOS PARA CONFIRMAÇÃO (Matches frame_11) */}
                {bookingStep === 2 && (
                  <div key="b-step-2" className="animate-scene">
                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '10px',
                        padding: '0.5rem 0.8rem',
                        marginBottom: '0.45rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.73rem',
                      }}
                    >
                      <Check size={13} color="var(--accent-green)" />
                      <span>Corte + Barba · 18 de nov. às 15:00</span>
                    </div>

                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '12px',
                        padding: '0.9rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginBottom: '0.7rem',
                        }}
                      >
                        <span
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: '#fafafa',
                            color: '#09090b',
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          3
                        </span>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>
                          Seus dados para confirmação
                        </span>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        <div
                          style={{
                            backgroundColor: 'var(--bg-void)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '7px',
                            padding: '0.48rem 0.65rem',
                            fontSize: '0.76rem',
                          }}
                        >
                          Gabriel Ferreira
                        </div>
                        <div className="sub-two-grid" style={{ gap: '0.45rem' }}>
                          <div
                            className="font-mono"
                            style={{
                              backgroundColor: 'var(--bg-void)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '7px',
                              padding: '0.48rem 0.6rem',
                              fontSize: '0.7rem',
                            }}
                          >
                            (11) 99824-3190
                          </div>
                          <div
                            style={{
                              backgroundColor: 'var(--bg-void)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '7px',
                              padding: '0.48rem 0.6rem',
                              fontSize: '0.7rem',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            gabriel.ferreira@email.com
                          </div>
                        </div>

                        <div
                          style={{
                            backgroundColor: 'var(--bg-void)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '8px',
                            padding: '0.55rem 0.7rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '0.74rem',
                            marginTop: '0.15rem',
                          }}
                        >
                          <span style={{ color: 'var(--text-muted)' }}>Total a pagar no local</span>
                          <strong className="font-mono">R$ 85,00</strong>
                        </div>

                        <button
                          type="button"
                          onClick={() => setBookingStep(3)}
                          className="tap-highlight"
                          style={{
                            marginTop: '0.25rem',
                            width: '100%',
                            padding: '0.62rem',
                            borderRadius: '8px',
                            border: 'none',
                            backgroundColor: '#fafafa',
                            color: '#09090b',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                          }}
                        >
                          Confirmar agendamento
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: CONFIRMADO! */}
                {bookingStep === 3 && (
                  <div key="b-step-3" className="animate-pop">
                    <div
                      style={{
                        backgroundColor: 'rgba(35, 202, 130, 0.06)',
                        border: '1px solid var(--accent-green-border)',
                        borderRadius: '14px',
                        padding: '1.35rem 1rem',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-green)',
                          color: '#051b11',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <Check size={22} strokeWidth={3} />
                      </div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 800, marginBottom: '0.3rem' }}>
                        Horário reservado em 18 segundos!
                      </div>
                      <div
                        style={{
                          fontSize: '0.76rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.9rem',
                        }}
                      >
                        Sem cadastro de senha. Sem esperar resposta no WhatsApp.
                      </div>

                      <div
                        style={{
                          backgroundColor: 'var(--bg-void)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '9px',
                          padding: '0.65rem 0.8rem',
                          textAlign: 'left',
                          fontSize: '0.73rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.3rem',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Protocolo</span>
                          <span className="font-mono" style={{ color: 'var(--accent-green)', fontWeight: 700 }}>
                            CLK-94B7M2
                          </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Horário</span>
                          <span className="font-mono">Qua, 18 nov · 15:00</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Notificação</span>
                          <span>Enviada p/ e-mail e agenda ✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer signature matching v2_151821 */}
              <div
                style={{
                  textAlign: 'center',
                  paddingTop: '0.85rem',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                }}
              >
                Agendamento seguro via <Logo size="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
