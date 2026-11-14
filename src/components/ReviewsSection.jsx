import React from 'react';

const reviews = [
  {
    tag: 'Espera no WhatsApp',
    quote: 'Coloquei o link na bio. Hoje 80% da semana enche sem eu parar corte pra responder.',
    author: 'Henrique Bastos',
    role: 'Barbearia Dom Henrique',
  },
  {
    tag: 'Agenda de equipe',
    quote: 'Três barbeiros na mesma operação sem bater horário. Configuramos pausas em 5 minutos.',
    author: 'Marcos Vinícius',
    role: 'Navalha Bruta',
  },
  {
    tag: 'Faltas e suporte',
    quote: 'Tive dúvida no primeiro dia e resolveram comigo em minutos. Minhas faltas caíram de 9 pra 1.',
    author: 'Camila Nogueira',
    role: 'Studio CN',
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
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <h2 className="section-title">Quem usa e como cada problema foi resolvido.</h2>
          <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            ★ 4.9/5 · suporte humano em português
          </span>
        </div>

        <div className="hairline-three-col">
          {reviews.map((item, idx) => (
            <article
              key={idx}
              className="hairline-cell"
              style={{
                padding: 'clamp(1rem, 2vw, 1.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.9rem',
              }}
            >
              <div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.68rem',
                    color: 'var(--accent-green)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.tag}
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  "{item.quote}"
                </p>
              </div>

              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text-secondary)' }}>{item.author}</strong> · {item.role}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
