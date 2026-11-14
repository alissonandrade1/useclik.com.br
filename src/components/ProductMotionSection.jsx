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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Logo from './Logo';

const systemScenes = [
  { id: 'visao', label: 'Visão geral', icon: LayoutGrid },
  { id: 'agenda', label: 'Agendamentos', icon: Calendar },
  { id: 'equipe', label: 'Equipe', icon: Clock },
  { id: 'clientes', label: 'Clientes', icon: Users },
];

const bars = [38, 52, 48, 68, 80, 92, 34, 58, 66, 78, 86, 96, 54, 74];

const clientSteps = [
  { step: 0, label: '1. Serviço', pct: '33%' },
  { step: 1, label: '2. Horário', pct: '66%' },
  { step: 2, label: '3. Dados', pct: '90%' },
  { step: 3, label: 'Pronto', pct: '100%' },
];

export default function ProductMotionSection() {
  const [scene, setScene] = useState(0);
  const [pauseSys, setPauseSys] = useState(false);

  const [bStep, setBStep] = useState(0);
  const [pauseClient, setPauseClient] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (pauseSys) return undefined;
    const t = setInterval(() => setScene((s) => (s + 1) % systemScenes.length), 4200);
    return () => clearInterval(t);
  }, [pauseSys]);

  useEffect(() => {
    if (pauseClient) return undefined;
    const t = setInterval(() => setBStep((s) => (s + 1) % clientSteps.length), 2600);
    return () => clearInterval(t);
  }, [pauseClient]);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section id="sistema" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Seu controle na esquerda. O agendamento do cliente na direita.
          </h2>
        </div>

        <div className="showcase-layout">
          {/* LEFT: SYSTEM MOTION */}
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
            <div
              style={{
                padding: '0.5rem 0.7rem',
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
                        padding: '0.32rem 0.6rem',
                        borderRadius: 'var(--radius-xs)',
                        border: `1px solid ${active ? 'var(--border-default)' : 'transparent'}`,
                        backgroundColor: active ? 'var(--bg-elevated)' : 'transparent',
                        color: active ? 'var(--text-primary)' : 'var(--text-muted)',
                        fontSize: '0.73rem',
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
                            animation: 'progressFill 4200ms linear forwards',
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <span
                className="font-mono desktop-nav"
                style={{ fontSize: '0.65rem', color: 'var(--text-muted)', flexShrink: 0 }}
              >
                sistema
              </span>
            </div>

            <div style={{ display: 'flex', flex: 1, minHeight: '340px' }}>
              <aside
                className="mockup-sidebar"
                style={{
                  width: '140px',
                  backgroundColor: '#0e0e11',
                  borderRight: '1px solid var(--border-subtle)',
                  padding: '0.8rem 0.55rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                }}
              >
                <div>
                  <div
                    style={{
                      padding: '0 0.35rem 0.65rem',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    <Logo size="small" />
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Navalha Club
                    </div>
                  </div>

                  <div style={{ marginTop: '0.55rem', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {[
                      { label: 'Visão geral', icon: LayoutGrid, idx: 0 },
                      { label: 'Agendamentos', icon: Calendar, idx: 1 },
                      { label: 'Equipe', icon: Clock, idx: 2 },
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
                            gap: '0.4rem',
                            padding: '0.38rem 0.45rem',
                            borderRadius: '6px',
                            border: 'none',
                            backgroundColor: sel ? '#19191f' : 'transparent',
                            color: sel ? '#fafafa' : 'var(--text-muted)',
                            fontSize: '0.71rem',
                            fontWeight: sel ? 600 : 400,
                            cursor: 'pointer',
                            textAlign: 'left',
                            width: '100%',
                          }}
                        >
                          <NavIcon size={12} />
                          <span>{nav.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    paddingLeft: '0.35rem',
                    paddingRight: '0.35rem',
                  }}
                >
                  <span>Tema</span>
                  <Sun size={11} />
                </div>
              </aside>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <div
                  style={{
                    height: '36px',
                    borderBottom: '1px solid var(--border-subtle)',
                    padding: '0 0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.68rem',
                  }}
                >
                  <span className="ui-status ui-status-green">● Plano Pro</span>
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
                      padding: '0.18rem 0.48rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.66rem',
                      cursor: 'pointer',
                    }}
                  >
                    <Copy size={10} />
                    <span>{copied ? 'Copiado' : 'Copiar link'}</span>
                  </button>
                </div>

                <div style={{ padding: '0.85rem', flex: 1 }}>
                  {scene === 0 && (
                    <div key="s0" className="scene-enter">
                      <div className="kpi-3-grid" style={{ marginBottom: '0.55rem' }}>
                        {[
                          { k: 'Receita', v: 'R$ 14.820' },
                          { k: 'Atendimentos', v: '196' },
                          { k: 'Presença', v: '96,8%', g: true },
                        ].map((m, i) => (
                          <div
                            key={i}
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '8px',
                              padding: '0.6rem 0.65rem',
                            }}
                          >
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{m.k}</div>
                            <div
                              className="font-mono"
                              style={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                marginTop: '2px',
                                color: m.g ? 'var(--accent-green)' : 'var(--text-primary)',
                              }}
                            >
                              {m.v}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div
                        className="kpi-4-grid"
                        style={{
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '8px',
                          padding: '0.5rem 0.65rem',
                          marginBottom: '0.55rem',
                        }}
                      >
                        {[
                          { k: 'Ticket', v: 'R$ 75' },
                          { k: 'Novos', v: '28' },
                          { k: 'LTV', v: 'R$ 410' },
                          { k: 'Inativos', v: '6' },
                        ].map((item, i) => (
                          <div key={i}>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>{item.k}</div>
                            <div className="font-mono" style={{ fontSize: '0.78rem', fontWeight: 700 }}>
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
                          padding: '0.65rem 0.7rem',
                        }}
                      >
                        <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)', marginBottom: '0.45rem' }}>
                          Últimos 14 dias
                        </div>
                        <div style={{ height: '64px', display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
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
                          marginBottom: '0.6rem',
                        }}
                      >
                        <strong style={{ fontSize: '0.84rem' }}>Hoje · 18 nov</strong>
                        <span
                          style={{
                            backgroundColor: '#fafafa',
                            color: '#0a0a0b',
                            fontSize: '0.66rem',
                            fontWeight: 600,
                            padding: '0.24rem 0.55rem',
                            borderRadius: '5px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '3px',
                          }}
                        >
                          <Plus size={11} /> Novo
                        </span>
                      </div>

                      {[
                        { t: '15:00', c: 'Gabriel Ferreira', s: 'Corte + Barba', p: 'R$ 85' },
                        { t: '16:00', c: 'Bruno Cavalcanti', s: 'Corte Degradê', p: 'R$ 55' },
                        { t: '17:00', c: 'Pedro Henrique', s: 'Barba', p: 'R$ 45' },
                        { t: '18:00', c: 'Thiago Ribeiro', s: 'Corte Social', p: 'R$ 55' },
                      ].map((row, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '7px',
                            padding: '0.52rem 0.7rem',
                            marginBottom: '0.4rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', minWidth: 0 }}>
                            <span className="font-mono" style={{ fontSize: '0.74rem', fontWeight: 700 }}>
                              {row.t}
                            </span>
                            <span style={{ fontSize: '0.76rem', fontWeight: 600 }}>{row.c}</span>
                            <span
                              className="desktop-nav"
                              style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}
                            >
                              · {row.s}
                            </span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
                            <span className="font-mono" style={{ fontSize: '0.72rem' }}>
                              {row.p}
                            </span>
                            <span className="ui-status ui-status-green">●</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {scene === 2 && (
                    <div key="s2" className="scene-enter">
                      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                        {['Rafael Costa', 'Lucas Martins', 'Diego Alves'].map((n, i) => (
                          <span
                            key={i}
                            style={{
                              padding: '0.3rem 0.6rem',
                              borderRadius: '6px',
                              backgroundColor: 'var(--bg-surface)',
                              border: `1px solid ${i === 0 ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
                              fontSize: '0.72rem',
                              fontWeight: i === 0 ? 600 : 400,
                            }}
                          >
                            {n}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.38rem' }}>
                        {[
                          { d: 'Domingo', on: false },
                          { d: 'Segunda', on: true, h: '09:00 – 19:00' },
                          { d: 'Terça a Sexta', on: true, h: '09:00 – 20:00' },
                          { d: 'Sábado', on: true, h: '08:30 – 18:00' },
                        ].map((row, i) => (
                          <div
                            key={i}
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '7px',
                              padding: '0.48rem 0.65rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              fontSize: '0.74rem',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span
                                style={{
                                  width: '26px',
                                  height: '15px',
                                  borderRadius: '99px',
                                  backgroundColor: row.on ? 'var(--accent-green)' : '#27272e',
                                  padding: '2px',
                                  display: 'inline-flex',
                                  justifyContent: row.on ? 'flex-end' : 'flex-start',
                                }}
                              >
                                <span
                                  style={{
                                    width: '11px',
                                    height: '11px',
                                    borderRadius: '50%',
                                    backgroundColor: row.on ? '#fff' : '#71717a',
                                  }}
                                />
                              </span>
                              <span style={{ color: row.on ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                                {row.d}
                              </span>
                            </div>
                            <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                              {row.on ? row.h : 'Fechado'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {scene === 3 && (
                    <div key="s3" className="scene-enter">
                      <div className="form-2-grid" style={{ marginBottom: '0.55rem' }}>
                        {[
                          { n: 'Corte + Barba', p: 'R$ 85' },
                          { n: 'Corte Degradê', p: 'R$ 55' },
                        ].map((s, i) => (
                          <div
                            key={i}
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '7px',
                              padding: '0.5rem 0.65rem',
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontSize: '0.74rem',
                            }}
                          >
                            <strong>{s.n}</strong>
                            <span className="font-mono" style={{ color: 'var(--accent-green)' }}>
                              {s.p}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.38rem' }}>
                        {[
                          { n: 'Bruno Cavalcanti', v: '12x', ltv: 'R$ 1.020' },
                          { n: 'Matheus Oliveira', v: '64d ausente', ltv: 'R$ 680' },
                          { n: 'Pedro Henrique', v: '5x', ltv: 'R$ 425' },
                        ].map((c, i) => (
                          <div
                            key={i}
                            style={{
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: '7px',
                              padding: '0.48rem 0.65rem',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              fontSize: '0.74rem',
                            }}
                          >
                            <span>
                              <strong>{c.n}</strong>{' '}
                              <span style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>· {c.v}</span>
                            </span>
                            <span className="font-mono" style={{ fontSize: '0.72rem', fontWeight: 600 }}>
                              {c.ltv}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CLIENT BOOKING MOTION */}
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
            <div
              style={{
                padding: '0.5rem 0.7rem',
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
                        padding: '0.3rem 0.55rem',
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
              <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                cliente
              </span>
            </div>

            <div
              style={{
                padding: '0.85rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    padding: '0.55rem 0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: '#19191f',
                        border: '1px solid var(--border-default)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                      }}
                    >
                      NC
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700 }}>Navalha Club</div>
                      <div className="font-mono" style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>
                        @navalhaclub
                      </div>
                    </div>
                  </div>
                  <span className="ui-status ui-status-green">● Online</span>
                </div>

                <div
                  style={{
                    height: '2px',
                    backgroundColor: 'var(--border-subtle)',
                    margin: '0.6rem 0',
                    borderRadius: '99px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: clientSteps[bStep].pct,
                      backgroundColor: 'var(--accent-green)',
                      transition: 'width 300ms ease',
                    }}
                  />
                </div>

                {bStep === 0 && (
                  <div key="c0" className="scene-enter" style={{ display: 'flex', flexDirection: 'column', gap: '0.38rem' }}>
                    {[
                      { n: 'Corte + Barba', d: '1h', p: 'R$ 85', sel: true },
                      { n: 'Corte Degradê', d: '45m', p: 'R$ 55', sel: false },
                      { n: 'Barba', d: '30m', p: 'R$ 45', sel: false },
                    ].map((srv, i) => (
                      <div
                        key={i}
                        onClick={() => setBStep(1)}
                        style={{
                          padding: '0.55rem 0.7rem',
                          borderRadius: '7px',
                          backgroundColor: 'var(--bg-surface)',
                          border: `1px solid ${srv.sel ? 'var(--text-primary)' : 'var(--border-subtle)'}`,
                          display: 'flex',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                          fontSize: '0.75rem',
                        }}
                      >
                        <span>
                          <strong>{srv.n}</strong>{' '}
                          <span style={{ color: 'var(--text-muted)' }}>· {srv.d}</span>
                        </span>
                        <span className="font-mono" style={{ fontWeight: 600 }}>
                          {srv.p}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {bStep === 1 && (
                  <div key="c1" className="scene-enter">
                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        padding: '0.7rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.5rem',
                          fontSize: '0.72rem',
                        }}
                      >
                        <strong>Quarta, 18 nov</strong>
                        <span style={{ display: 'inline-flex', gap: '4px' }}>
                          <ChevronLeft size={12} /> <ChevronRight size={12} />
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(7, 1fr)',
                          gap: '4px',
                          marginBottom: '0.55rem',
                        }}
                      >
                        {['15', '16', '17', '18', '19', '20', '21'].map((d) => {
                          const on = d === '18';
                          return (
                            <div
                              key={d}
                              className="font-mono"
                              style={{
                                padding: '0.28rem 0',
                                borderRadius: '5px',
                                textAlign: 'center',
                                backgroundColor: on ? '#fafafa' : 'var(--bg-void)',
                                color: on ? '#0a0a0b' : 'var(--text-secondary)',
                                fontSize: '0.68rem',
                                fontWeight: on ? 700 : 400,
                              }}
                            >
                              {d}
                            </div>
                          );
                        })}
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
                                padding: '0.36rem',
                                borderRadius: '6px',
                                textAlign: 'center',
                                fontSize: '0.7rem',
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

                {bStep === 2 && (
                  <div key="c2" className="scene-enter">
                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        padding: '0.75rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.4rem',
                        fontSize: '0.73rem',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'var(--bg-void)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '6px',
                          padding: '0.4rem 0.55rem',
                        }}
                      >
                        Gabriel Ferreira
                      </div>
                      <div
                        className="font-mono"
                        style={{
                          backgroundColor: 'var(--bg-void)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '6px',
                          padding: '0.4rem 0.55rem',
                          fontSize: '0.68rem',
                        }}
                      >
                        (11) 99824-3190
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2rem 0' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Corte + Barba · 15:00</span>
                        <strong className="font-mono">R$ 85</strong>
                      </div>
                      <button
                        type="button"
                        onClick={() => setBStep(3)}
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          borderRadius: '6px',
                          border: 'none',
                          backgroundColor: '#fafafa',
                          color: '#0a0a0b',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                        }}
                      >
                        Confirmar horário
                      </button>
                    </div>
                  </div>
                )}

                {bStep === 3 && (
                  <div key="c3" className="scene-enter">
                    <div
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-default)',
                        borderRadius: '8px',
                        padding: '1rem 0.85rem',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-green)',
                          color: '#051b11',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '0.45rem',
                        }}
                      >
                        <Check size={15} strokeWidth={3} />
                      </div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 700 }}>Horário confirmado</div>
                      <div className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                        Qua, 18 nov · 15:00 · CLK-94B7M2
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div style={{ textAlign: 'center', paddingTop: '0.6rem', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                via <Logo size="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
