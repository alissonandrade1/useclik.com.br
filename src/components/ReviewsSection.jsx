import React from 'react';

const reviews = [
  {
    problem: 'Demora no WhatsApp em dia cheio',
    quote:
      'No sábado eu perdia cliente porque não dava pra parar o degradê pra responder mensagem. Coloquei o link na bio e na resposta automática. Hoje o cliente escolhe o horário sozinho e eu só confiro quem vem a seguir.',
    author: 'Henrique Bastos',
    role: 'Barbearia Dom Henrique · São Paulo',
    metric: '80% dos horários vindos do link',
  },
  {
    problem: 'Conflito de horário na equipe',
    quote:
      'Cada barbeiro anotava no próprio celular e toda semana batia dois clientes no mesmo horário. Cadastramos os três com pausa de almoço individual em dez minutos e nunca mais deu choque na agenda.',
    author: 'Marcos Vinícius',
    role: 'Navalha Bruta (3 cadeiras) · Curitiba',
    metric: 'Zero horário duplicado',
  },
  {
    problem: 'Faltas e receio na migração do papel',
    quote:
      'Eu usava caderno e achei que ia apanhar pra configurar. Mandei dúvida sobre os intervalos no primeiro dia, me responderam rápido por gente de verdade e já ajustaram comigo. Minhas faltas caíram de 9 pra 1 no mês.',
    author: 'Camila Nogueira',
    role: 'Studio CN · Belo Horizonte',
    metric: 'De 9 faltas/mês para 1',
  },
];

export default function ReviewsSection() {
  return (
    <section id="avaliacoes" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div
          className="section-header"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span className="section-label">avaliações e suporte</span>
            <h2 className="section-title">
              Quem usa na rotina e como cada problema foi resolvido.
            </h2>
            <p className="section-subtitle">
              Relatos diretos de quem organizou a operação — com atendimento humano em português que
              escuta e resolve rápido quando surge qualquer dúvida.
            </p>
          </div>

          <div
            className="font-mono"
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
            }}
          >
            <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>4.9/5</strong> ·
            avaliação média
          </div>
        </div>

        {/* Flush 3-Column Hairline Grid */}
        <div className="hairline-three-col">
          {reviews.map((item, idx) => (
            <article
              key={idx}
              className="hairline-cell"
              style={{
                padding: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    paddingBottom: '0.65rem',
                    marginBottom: '0.75rem',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  {item.problem}
                </div>

                <p
                  style={{
                    fontSize: '0.855rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.58,
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              <div
                style={{
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {item.author}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.role}</div>
                </div>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.68rem', color: 'var(--accent-green)' }}
                >
                  {item.metric}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
