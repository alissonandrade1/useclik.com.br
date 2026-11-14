import React from 'react';

export default function EmailCalendarSection() {
  return (
    <section id="email-agenda" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">notificações e sincronização</span>
          <h2 className="section-title">
            Você recebe tudo no seu e-mail. E já fica integrado com a sua agenda.
          </h2>
          <p className="section-subtitle">
            Sem precisar abrir o sistema o tempo todo: cada confirmação, remarcação ou cancelamento
            chega na hora no seu e-mail e trava o horário na sua agenda.
          </p>
        </div>

        {/* Flush 2-Column Architectural Grid */}
        <div className="hairline-two-col">
          {/* LEFT CELL: EMAIL */}
          <div className="hairline-cell" style={{ padding: 'clamp(1.15rem, 2.5vw, 1.5rem)' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: '0.5rem',
                marginBottom: '0.35rem',
              }}
            >
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Aviso imediato no seu e-mail</h3>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                profissional + cliente
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Você sabe quem marcou, qual serviço escolheu e o WhatsApp de contato. Seu cliente recebe o
              comprovante com protocolo para não esquecer.
            </p>

            {/* Clean Email Preview */}
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
                  padding: '0.65rem 0.85rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  fontSize: '0.72rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'var(--text-muted)',
                    marginBottom: '2px',
                  }}
                >
                  <span>clik. &lt;notificacoes@useclik.com.br&gt;</span>
                  <span className="font-mono">14:13</span>
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  Novo agendamento: Gabriel Ferreira — Qua, 18 nov às 15:00
                </div>
              </div>

              <div
                className="form-2-grid"
                style={{
                  padding: '0.75rem 0.85rem',
                  fontSize: '0.74rem',
                  gap: '0.55rem',
                }}
              >
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.64rem', display: 'block' }}>
                    SERVIÇO E VALOR
                  </span>
                  <strong>Corte + Barba · R$ 85,00</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.64rem', display: 'block' }}>
                    PROFISSIONAL
                  </span>
                  <strong>Rafael Costa</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.64rem', display: 'block' }}>
                    WHATSAPP
                  </span>
                  <span className="font-mono">(11) 99824-3190</span>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.64rem', display: 'block' }}>
                    PROTOCOLO
                  </span>
                  <span className="font-mono">CLK-94B7M2</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CELL: CALENDAR INTEGRATION */}
          <div className="hairline-cell" style={{ padding: 'clamp(1.15rem, 2.5vw, 1.5rem)' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: '0.5rem',
                marginBottom: '0.35rem',
              }}
            >
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Integrado com a sua agenda</h3>
              <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                Google / Apple Agenda
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Consulte seus próximos cortes direto na agenda do celular. Quando um horário ocupa, ele
              some da página pública no mesmo segundo — sem risco de duplicidade.
            </p>

            {/* Clean Timeline */}
            <div
              style={{
                backgroundColor: 'var(--bg-void)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem 0.85rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
                fontSize: '0.75rem',
              }}
            >
              {[
                {
                  h: '14:00',
                  t: 'Thiago Ribeiro · Corte Social',
                  st: 'Concluído',
                  active: false,
                },
                {
                  h: '15:00',
                  t: 'Gabriel Ferreira · Corte + Barba',
                  st: 'Sincronizado · Alerta 30min',
                  active: true,
                },
                {
                  h: '16:00',
                  t: 'Bruno Cavalcanti · Corte Degradê',
                  st: 'Confirmado',
                  active: false,
                },
              ].map((slot, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.7rem',
                      color: slot.active ? 'var(--accent-green)' : 'var(--text-muted)',
                      fontWeight: slot.active ? 700 : 400,
                      width: '38px',
                      flexShrink: 0,
                    }}
                  >
                    {slot.h}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.45rem 0.65rem',
                      borderRadius: '6px',
                      backgroundColor: slot.active ? '#141917' : 'var(--bg-surface)',
                      border: `1px solid ${
                        slot.active ? 'var(--accent-green-border)' : 'var(--border-subtle)'
                      }`,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <strong style={{ fontWeight: slot.active ? 600 : 400 }}>{slot.t}</strong>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.66rem',
                        color: slot.active ? 'var(--accent-green)' : 'var(--text-muted)',
                      }}
                    >
                      {slot.st}
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
