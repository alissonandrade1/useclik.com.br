import React from 'react';

export default function EmailCalendarSection() {
  return (
    <section id="email-agenda" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Cai no seu e-mail. Trava na sua agenda.
          </h2>
          <p className="section-subtitle">
            Confirmou no link, você recebe os dados na hora e o horário fecha contra duplicidade.
          </p>
        </div>

        <div className="hairline-two-col">
          {/* LEFT: EMAIL */}
          <div className="hairline-cell" style={{ padding: 'clamp(1rem, 2.2vw, 1.35rem)' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.75rem',
              }}
            >
              <strong style={{ fontSize: '0.88rem' }}>No seu e-mail</strong>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                instantâneo
              </span>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-void)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '0.6rem 0.8rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  fontSize: '0.74rem',
                }}
              >
                <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)', marginBottom: '2px' }}>
                  notificacoes@useclik.com.br
                </div>
                <strong>✓ Novo horário: Gabriel Ferreira — Qua, 15:00</strong>
              </div>

              <div
                className="form-2-grid"
                style={{ padding: '0.7rem 0.8rem', fontSize: '0.74rem', gap: '0.5rem' }}
              >
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.62rem', display: 'block' }}>
                    SERVIÇO
                  </span>
                  <strong>Corte + Barba · R$ 85</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.62rem', display: 'block' }}>
                    PROFISSIONAL
                  </span>
                  <strong>Rafael Costa</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.62rem', display: 'block' }}>
                    WHATSAPP
                  </span>
                  <span className="font-mono">(11) 99824-3190</span>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.62rem', display: 'block' }}>
                    PROTOCOLO
                  </span>
                  <span className="font-mono">CLK-94B7M2</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: AGENDA */}
          <div className="hairline-cell" style={{ padding: 'clamp(1rem, 2.2vw, 1.35rem)' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.75rem',
              }}
            >
              <strong style={{ fontSize: '0.88rem' }}>Integrado à sua agenda</strong>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                Google / Apple
              </span>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-void)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.7rem 0.8rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.42rem',
                fontSize: '0.74rem',
              }}
            >
              {[
                { h: '14:00', t: 'Thiago Ribeiro', st: 'Concluído', on: false },
                { h: '15:00', t: 'Gabriel Ferreira · Corte + Barba', st: 'Sincronizado', on: true },
                { h: '16:00', t: 'Bruno Cavalcanti', st: 'Confirmado', on: false },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.68rem',
                      color: s.on ? 'var(--accent-green)' : 'var(--text-muted)',
                      width: '36px',
                      flexShrink: 0,
                    }}
                  >
                    {s.h}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      padding: '0.42rem 0.6rem',
                      borderRadius: '6px',
                      backgroundColor: s.on ? '#141917' : 'var(--bg-surface)',
                      border: `1px solid ${s.on ? 'var(--accent-green-border)' : 'var(--border-subtle)'}`,
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '0.4rem',
                    }}
                  >
                    <strong>{s.t}</strong>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.65rem',
                        color: s.on ? 'var(--accent-green)' : 'var(--text-muted)',
                      }}
                    >
                      {s.st}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
