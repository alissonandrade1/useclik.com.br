import React, { useState, useEffect } from 'react';
import {
  LayoutGrid,
  Calendar,
  Clock,
  Tag,
  Users,
  Sun,
  Check,
  Copy,
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Logo from './Logo';

const systemScenes = [
  { id: 'visao', label: 'Visão geral', icon: LayoutGrid },
  { id: 'agenda', label: 'Agendamentos', icon: Calendar },
  { id: 'equipe', label: 'Equipe e horários', icon: Clock },
  { id: 'clientes', label: 'Serviços e clientes', icon: Users },
];

const bars = [38, 52, 48, 68, 80, 92, 34, 58, 66, 78, 86, 96, 54, 74];

const clientSteps = [
  { step: 0, label: '1. Serviço', pct: '33%' },
  { step: 1, label: '2. Data e hora', pct: '66%' },
  { step: 2, label: '3. Dados', pct: '90%' },
  { step: 3, label: 'Confirmado', pct: '100%' },
];

export default function ProductMotionSection() {
  const [scene, setScene] = useState(0);
  const [pauseSys, setPauseSys] = useState(false);

  const [bStep, setBStep] = useState(0);
  const [pauseClient, setPauseClient] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (pauseSys) return undefined;
    const t = setInterval(() => setScene((s) => (s + 1) % systemScenes.length), 4400);
    return () => clearInterval(t);
  }, [pauseSys]);

  useEffect(() => {
    if (pauseClient) return undefined;
    const t = setInterval(() => setBStep((s) => (s + 1) % clientSteps.length), 2700);
    return () => clearInterval(t);
  }, [pauseClient]);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="sistema" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">funcionalidades na prática</span>
          <h2 className="section-title">
            Controle da operação de um lado. Agendamento fácil do outro.
          </h2>
          <p className="section-subtitle">
            Você acompanha agenda, profissionais, serviços e retorno de clientes. Na direita, seu
            cliente escolhe o horário sozinho pelo link — sem baixar aplicativo.
          </p>
        </div>

        <div className="showcase-layout">
          {/* LEFT: SYSTEM DASHBOARD MOTION */}
          <div
            onMouseEnter={() => setPauseSys(true)}
            onMouseLeave={() => setPauseSys(false)}
            style={{
              backgroundColor: 'var(--bg-void)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Scene Selector Strip */}
            <div
              style={{
                padding: '0.55rem 0.75rem',
                backgroundColor: 'var(--bg-surface)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
              }}
            >
              <div className="tabs-scroll">
                {systemScenes.map((item, idx) => {
                  const Icon = item.icon;
                  const active = scene === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScene(idx)}
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.35rem 0.65rem',
                        borderRadius: 'var(--radius-xs)',
                        border: `1px solid ${active ? 'var(--border-default)' : 'transparent'}`,
                        backgroundColor: active ? 'var(--bg-elevated)' : 'transparent',
                        color: active ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontSize: '0.74rem',
                        fontWeight: active ? 600 : 400,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={12} />
                      <span>{item.label}</span>
                      {active && !pauseSys && (
                        <span
                          key={`line-${scene}`}
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            height: '1.5px',
                            backgroundColor: '#fafafa',
                            animation: 'progressFill 4400ms linear forwards',
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <span
                className="font-mono desktop-nav"
                style={{ fontSize: '0.66rem', color: 'var(--text-muted)', flexShrink: 0 }}
              >
                painel do negócio
              </span>
            </div>

            {/* App Interface */}
            <div style={{ display: 'flex', flex: 1, minHeight: '375px' }}>
              {/* Sidebar */}
              <aside
                className="mockup-sidebar"
                style={{
                  width: '150px',
                  backgroundColor: '#0e0e11',
                  borderRight: '1px solid var(--border-subtle)',
                  padding: '0.85rem 0.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                }}
              >
                <div>
                  <div
                    style={{
                      padding: '0 0.35rem 0.7rem',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <Logo size="small" />
                    <div
                      style={{
                        fontSize: '0.66rem',
                        color: 'var(--text-muted)',
                        marginTop: '2px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Navalha Club
                    </div>
                  </div>

                  <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {[
                      { label: 'Visão geral', icon: LayoutGrid, idx: 0 },
                      { label: 'Agendamentos', icon: Calendar, idx: 1 },
                      { label: 'Equipe & Horários', icon: Clock, idx: 2 },
                      { label: 'Serviços', icon: Tag, idx: 3 },
                      { label: 'Clientes', icon: Users, idx: 3 },
                    ].map((nav, i) => {
                      const NavIcon = nav.icon;
                      const sel = scene === nav.idx && !(nav.label === 'Serviços' && scene !== 3);
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setScene(nav.idx)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            padding: '0.4rem 0.45rem',
                            borderRadius: '6px',
                            border: 'none',
                            backgroundColor: sel ? '#19191f' : 'transparent',
                            color: sel ? '#fafafa' : 'var(--text-muted)',
                            fontSize: '0.72rem',
                            fontWeight: sel ? 600 : 400,
                            cursor: 'pointer',
                            textAlign: 'left',
                            width: '100%',
                          }}
                        >
                          <NavIcon size={12} />
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {nav.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '0.55rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.66rem',
                    color: 'var(--text-muted)',
                    paddingLeft: '0.35rem',
                    paddingRight: '0.35rem',
                  }}
                >
                  <span>Tema</span>
                  <Sun size={12} />
                </div>
              </aside>

              {/* Main Content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                {/* Topbar */}
                <div
                  style={{
                    height: '38px',
                    borderBottom: '1px solid var(--border-subtle)',
                    padding: '0 0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.7rem',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Qua, 18 nov</span>
                    <span className="ui-status ui-status-green">● Plano Pro</span>
                  </div>
                  <button
                    type="button"
                    onClick={onCopy}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '5px',
                      padding: '0.2rem 0.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.68rem',
                      cursor: 'pointer',
                    }}
                  >
                    <Copy size={10} />
                    <span>{copied ? 'Copiado' : 'Copiar link'}</span>
                  </button>
                </div>

                {/* Scene Views */}
                <div style={{ padding: '0.9rem', flex: 1 }}>
                  {scene === 0 && (
                    <div key="s0" className="scene-enter">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          marginBottom: '0.65rem',
                          gap: '0.5rem',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>Olá, Navalha Club</div>
                          <div className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                            app.useclik.com.br/navalhaclub
                          </div>
                        </div>
                        <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                          Novembro
                        </span>
                      </div>

                      <div className="kpi-3-grid" style={{ marginBottom: '0.55rem' }}>
                        {[
                          { k: 'Receita realizada', v: 'R$ 14.820', s: '+18% no mês' },
                          { k: 'Atendimentos', v: '196', s: '184 concluídos · 12 hoje' },
                          { k: 'Ticket médio', v: 'R$ 75,60', s: 'Projetado: R$ 16.400' },
                        ].map((m, i) => (
                          <div
                            key={i}
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '8px',
                              padding: '0.65rem 0.7rem',
                            }}
                          >
                            <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>{m.k}</div>
                            <div className="font-mono" style={{ fontSize: '1rem', fontWeight: 700, margin: '2px 0' }}>
                              {m.v}
                            </div>
                            <div style={{ fontSize: '0.64rem', color: 'var(--text-secondary)' }}>{m.s}</div>
                          </div>
                        ))}
                      </div>

                      <div
                        className="kpi-4-grid"
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '8px',
                          padding: '0.55rem 0.7rem',
                          marginBottom: '0.55rem',
                        }}
                      >
                        {[
                          { k: 'Novos', v: '28' },
                          { k: 'LTV médio', v: 'R$ 410' },
                          { k: 'Presença', v: '96,8%', g: true },
                          { k: 'Sem retorno 60d+', v: '6' },
                        ].map((item, i) => (
                          <div key={i}>
                            <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>{item.k}</div>
                            <div
                              className="font-mono"
                              style={{
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                color: item.g ? 'var(--accent-green)' : 'var(--text-primary)',
                              }}
                            >
                              {item.v}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '8px',
                          padding: '0.65rem 0.75rem',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '0.68rem',
                            marginBottom: '0.45rem',
                          }}
                        >
                          <span style={{ fontWeight: 600 }}>Volume diário (14 dias)</span>
                          <span style={{ color: 'var(--text-muted)' }}>Concluídos e confirmados</span>
                        </div>
                        <div style={{ height: '56px', display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                          {bars.map((h, i) => (
                            <div
                              key={i}
                              style={{
                                flex: 1,
                                height: `${h}%`,
                                backgroundColor: i >= 11 ? 'var(--accent-green)' : '#d4d4d8',
                                opacity: i >= 11 ? 0.85 : 0.7,
                                borderRadius: '2px 2px 0 0',
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {scene === 1 && (
                    <div key="s1" className="scene-enter">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.65rem',
                          gap: '0.5rem',
                        }}
                      >
                        <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>Agendamentos do dia</div>
                        <span
                          style={{
                            backgroundColor: '#fafafa',
                            color: '#0a0a0b',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            padding: '0.28rem 0.6rem',
                            borderRadius: '5px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '3px',
                          }}
                        >
                          <Plus size={11} /> Novo
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          marginBottom: '0.65rem',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            minWidth: '140px',
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '6px',
                            padding: '0.3rem 0.55rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.68rem',
                            color: 'var(--text-muted)',
                          }}
                        >
                          <Search size={11} />
                          <span>Buscar cliente ou protocolo...</span>
                        </div>
                        <span className="ui-status ui-status-neutral">Confirmados 11</span>
                        <span className="ui-status ui-status-neutral">Concluídos 3</span>
                      </div>

                      {[
                        {
                          t: '15:00',
                          c: 'Gabriel Ferreira',
                          s: 'Corte + Barba · Rafael Costa',
                          p: 'R$ 85,00',
                          meta: '(11) 99824-3190 · Protocolo CLK-94B7M2 · Página pública',
                        },
                        {
                          t: '16:00',
                          c: 'Bruno Cavalcanti',
                          s: 'Corte Degradê · Lucas Martins',
                          p: 'R$ 55,00',
                        },
                        {
                          t: '17:00',
                          c: 'Pedro Henrique',
                          s: 'Barba Toalha Quente · Rafael Costa',
                          p: 'R$ 45,00',
                        },
                      ].map((row, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '8px',
                            padding: '0.6rem 0.75rem',
                            marginBottom: '0.45rem',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              gap: '0.5rem',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', minWidth: 0 }}>
                              <span className="font-mono" style={{ fontSize: '0.76rem', fontWeight: 700 }}>
                                {row.t}
                              </span>
                              <div style={{ minWidth: 0 }}>
                                <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>{row.c}</div>
                                <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                                  {row.s}
                                </div>
                              </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
                              <span className="font-mono" style={{ fontSize: '0.74rem', fontWeight: 600 }}>
                                {row.p}
                              </span>
                              <span className="ui-status ui-status-green">● Confirmado</span>
                            </div>
                          </div>
                          {row.meta && (
                            <div
                              className="font-mono"
                              style={{
                                marginTop: '0.45rem',
                                paddingTop: '0.45rem',
                                borderTop: '1px solid var(--border-subtle)',
                                fontSize: '0.64rem',
                                color: 'var(--text-muted)',
                              }}
                            >
                              {row.meta}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {scene === 2 && (
                    <div key="s2" className="scene-enter">
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.55rem' }}>
                        Equipe & expediente semanal
                      </div>

                      <div style={{ display: 'flex', gap: '0.45rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
                        {[
                          { n: 'Rafael Costa', r: 'Titular', a: true },
                          { n: 'Lucas Martins', r: 'Barbeiro', a: false },
                          { n: 'Diego Alves', r: 'Barbeiro', a: false },
                        ].map((p, i) => (
                          <div
                            key={i}
                            style={{
                              padding: '0.38rem 0.65rem',
                              borderRadius: '7px',
                              backgroundColor: 'var(--bg-surface)',
                              border: `1px solid ${p.a ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
                              fontSize: '0.72rem',
                            }}
                          >
                            <strong>{p.n}</strong>{' '}
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>· {p.r}</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.38rem' }}>
                        {[
                          { d: 'Domingo', on: false },
                          { d: 'Segunda-feira', on: true, h: '09:00 às 19:00' },
                          { d: 'Terça a Sexta', on: true, h: '09:00 às 20:00' },
                          { d: 'Sábado', on: true, h: '08:30 às 18:00' },
                        ].map((row, i) => (
                          <div
                            key={i}
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '7px',
                              padding: '0.48rem 0.7rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              fontSize: '0.75rem',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                              <span
                                style={{
                                  width: '28px',
                                  height: '16px',
                                  borderRadius: '99px',
                                  backgroundColor: row.on ? 'var(--accent-green)' : '#27272e',
                                  padding: '2px',
                                  display: 'inline-flex',
                                  justifyContent: row.on ? 'flex-end' : 'flex-start',
                                }}
                              >
                                <span
                                  style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    backgroundColor: row.on ? '#fff' : '#71717a',
                                  }}
                                />
                              </span>
                              <span style={{ color: row.on ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                                {row.d}
                              </span>
                            </div>
                            <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                              {row.on ? `${row.h} · +Pausa` : 'Fechado'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {scene === 3 && (
                    <div key="s3" className="scene-enter">
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.55rem' }}>
                        Serviços ativos & histórico de clientes
                      </div>

                      <div className="form-2-grid" style={{ marginBottom: '0.65rem' }}>
                        {[
                          { n: 'Corte + Barba', d: '1h · R$ 85,00' },
                          { n: 'Corte Degradê', d: '45min · R$ 55,00' },
                        ].map((s, i) => (
                          <div
                            key={i}
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '7px',
                              padding: '0.55rem 0.65rem',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <div>
                              <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>{s.n}</div>
                              <div className="font-mono" style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                                {s.d}
                              </div>
                            </div>
                            <span className="ui-status ui-status-green">Ativo</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {[
                          { n: 'Bruno Cavalcanti', v: '12 visitas', ltv: 'R$ 1.020', st: 'Recorrente' },
                          { n: 'Matheus Oliveira', v: '8 visitas', ltv: 'R$ 680', st: '64d sem voltar' },
                          { n: 'Pedro Henrique', v: '5 visitas', ltv: 'R$ 425', st: 'Última há 18d' },
                        ].map((c, i) => (
                          <div
                            key={i}
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '7px',
                              padding: '0.5rem 0.7rem',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              fontSize: '0.75rem',
                            }}
                          >
                            <div>
                              <strong>{c.n}</strong>{' '}
                              <span style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>· {c.v}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span className="font-mono" style={{ fontSize: '0.72rem', fontWeight: 600 }}>
                                {c.ltv}
                              </span>
                              <span className="ui-status ui-status-neutral">{c.st}</span>
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

          {/* RIGHT: CLIENT BOOKING FLOW MOTION */}
          <div
            onMouseEnter={() => setPauseClient(true)}
            onMouseLeave={() => setPauseClient(false)}
            style={{
              backgroundColor: 'var(--bg-void)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Step Bar */}
            <div
              style={{
                padding: '0.55rem 0.75rem',
                backgroundColor: 'var(--bg-surface)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.4rem',
              }}
            >
              <div className="tabs-scroll">
                {clientSteps.map((s) => {
                  const active = bStep === s.step;
                  return (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => setBStep(s.step)}
                      style={{
                        padding: '0.32rem 0.55rem',
                        borderRadius: 'var(--radius-xs)',
                        border: `1px solid ${active ? 'var(--border-default)' : 'transparent'}`,
                        backgroundColor: active ? 'var(--bg-elevated)' : 'transparent',
                        color: active ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontSize: '0.72rem',
                        fontWeight: active ? 600 : 400,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
              <span className="font-mono" style={{ fontSize: '0.66rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                cliente
              </span>
            </div>

            {/* Public Booking Page */}
            <div
              style={{
                padding: '0.95rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Store Header */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '9px',
                    padding: '0.65rem 0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#19191f',
                        border: '1px solid var(--border-default)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                      }}
                    >
                      NC
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>Barbearia Navalha Club</div>
                      <div className="font-mono" style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                        @navalhaclub
                      </div>
                    </div>
                  </div>
                  <span className="ui-status ui-status-green">● Agenda online</span>
                </div>

                {/* Progress Bar */}
                <div
                  style={{
                    height: '2px',
                    backgroundColor: 'var(--border-subtle)',
                    margin: '0.65rem 0',
                    borderRadius: '99px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: clientSteps[bStep].pct,
                      backgroundColor: 'var(--accent-green)',
                      transition: 'width 320ms ease',
                    }}
                  />
                </div>

                {/* STEP 0 */}
                {bStep === 0 && (
                  <div key="c0" className="scene-enter">
                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '9px',
                        padding: '0.8rem',
                      }}
                    >
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.6rem' }}>
                        1. Escolha o serviço
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {[
                          { n: 'Corte + Barba', d: '1h', p: 'R$ 85,00', sel: true },
                          { n: 'Corte Degradê', d: '45min', p: 'R$ 55,00', sel: false },
                          { n: 'Barba Toalha Quente', d: '30min', p: 'R$ 45,00', sel: false },
                        ].map((srv, i) => (
                          <div
                            key={i}
                            onClick={() => setBStep(1)}
                            style={{
                              padding: '0.55rem 0.7rem',
                              borderRadius: '7px',
                              backgroundColor: 'var(--bg-void)',
                              border: `1px solid ${srv.sel ? 'var(--text-primary)' : 'var(--border-subtle)'}`,
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              cursor: 'pointer',
                              fontSize: '0.76rem',
                            }}
                          >
                            <span>
                              <strong>{srv.n}</strong>{' '}
                              <span style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>· {srv.d}</span>
                            </span>
                            <span className="font-mono" style={{ fontWeight: 600 }}>
                              {srv.p}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 1 */}
                {bStep === 1 && (
                  <div key="c1" className="scene-enter">
                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        padding: '0.45rem 0.7rem',
                        marginBottom: '0.45rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.72rem',
                      }}
                    >
                      <span>✓ Corte + Barba · R$ 85,00</span>
                      <span style={{ color: 'var(--text-muted)' }}>Alterar</span>
                    </div>

                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '9px',
                        padding: '0.75rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.55rem',
                          fontSize: '0.76rem',
                        }}
                      >
                        <strong>2. Data e horário</strong>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem' }}>
                          <ChevronLeft size={12} /> Novembro <ChevronRight size={12} />
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(7, 1fr)',
                          gap: '4px',
                          marginBottom: '0.6rem',
                        }}
                      >
                        {[
                          { d: '15', w: 'D', off: true },
                          { d: '16', w: 'S' },
                          { d: '17', w: 'T' },
                          { d: '18', w: 'Q', on: true },
                          { d: '19', w: 'Q' },
                          { d: '20', w: 'S' },
                          { d: '21', w: 'S' },
                        ].map((x, i) => (
                          <div
                            key={i}
                            style={{
                              padding: '0.3rem 0',
                              borderRadius: '6px',
                              textAlign: 'center',
                              backgroundColor: x.on ? '#fafafa' : 'var(--bg-void)',
                              color: x.on ? '#0a0a0b' : 'var(--text-primary)',
                              opacity: x.off ? 0.35 : 1,
                              border: '1px solid var(--border-subtle)',
                              fontSize: '0.68rem',
                            }}
                            className="font-mono"
                          >
                            <div style={{ fontSize: '0.55rem' }}>{x.w}</div>
                            <strong>{x.d}</strong>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.35rem' }}>
                        {['09:00', '10:30', '14:00', '15:00', '16:30', '18:00'].map((slot) => {
                          const on = slot === '15:00';
                          return (
                            <div
                              key={slot}
                              onClick={() => setBStep(2)}
                              className="font-mono"
                              style={{
                                padding: '0.38rem',
                                borderRadius: '6px',
                                textAlign: 'center',
                                fontSize: '0.72rem',
                                fontWeight: on ? 700 : 400,
                                backgroundColor: on ? '#fafafa' : 'var(--bg-void)',
                                color: on ? '#0a0a0b' : 'var(--text-primary)',
                                border: '1px solid var(--border-subtle)',
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

                {/* STEP 2 */}
                {bStep === 2 && (
                  <div key="c2" className="scene-enter">
                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '9px',
                        padding: '0.8rem',
                      }}
                    >
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.55rem' }}>
                        3. Seus dados para confirmação
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.74rem' }}>
                        <div
                          style={{
                            backgroundColor: 'var(--bg-void)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '6px',
                            padding: '0.42rem 0.6rem',
                          }}
                        >
                          Gabriel Ferreira
                        </div>
                        <div className="form-2-grid">
                          <div
                            className="font-mono"
                            style={{
                              backgroundColor: 'var(--bg-void)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '6px',
                              padding: '0.42rem 0.55rem',
                              fontSize: '0.68rem',
                            }}
                          >
                            (11) 99824-3190
                          </div>
                          <div
                            style={{
                              backgroundColor: 'var(--bg-void)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '6px',
                              padding: '0.42rem 0.55rem',
                              fontSize: '0.68rem',
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
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0.4rem 0.1rem',
                            fontSize: '0.72rem',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          <span>18 de nov · 15:00 (1h)</span>
                          <strong className="font-mono" style={{ color: 'var(--text-primary)' }}>
                            R$ 85,00
                          </strong>
                        </div>

                        <button
                          type="button"
                          onClick={() => setBStep(3)}
                          style={{
                            width: '100%',
                            padding: '0.55rem',
                            borderRadius: '6px',
                            border: 'none',
                            backgroundColor: '#fafafa',
                            color: '#0a0a0b',
                            fontWeight: 600,
                            fontSize: '0.76rem',
                            cursor: 'pointer',
                          }}
                        >
                          Confirmar agendamento
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {bStep === 3 && (
                  <div key="c3" className="scene-enter">
                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-default)',
                        borderRadius: '9px',
                        padding: '1.1rem 0.9rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
                        <span
                          style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-green)',
                            color: '#051b11',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Check size={13} strokeWidth={3} />
                        </span>
                        <strong style={{ fontSize: '0.86rem' }}>Agendamento confirmado</strong>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                        Reservado sem login e sem esperar resposta manual.
                      </p>
                      <div
                        className="font-mono"
                        style={{
                          borderTop: '1px solid var(--border-subtle)',
                          paddingTop: '0.6rem',
                          fontSize: '0.7rem',
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem',
                        }}
                      >
                        <div>Protocolo: CLK-94B7M2</div>
                        <div>Data: Qua, 18 de nov às 15:00</div>
                        <div>Comprovante enviado por e-mail</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                style={{
                  textAlign: 'center',
                  paddingTop: '0.7rem',
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                }}
              >
                Agendamento via <Logo size="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
