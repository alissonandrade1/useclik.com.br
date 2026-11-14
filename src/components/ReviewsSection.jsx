import React from 'react';
import { Star, CheckCircle2, MessageCircleHeart, TrendingUp } from 'lucide-react';

const userReviews = [
  {
    initials: 'HB',
    name: 'Henrique Bastos',
    business: 'Barbearia Dom Henrique · 2 cadeiras',
    location: 'São Paulo, SP',
    painBefore: 'Perdia clientes demorando 2h pra responder WhatsApp no sábado',
    quote:
      'Sábado cheio, eu na metade de um degradê e o celular vibrando sem parar. Quando eu limpava a mão pra responder, metade já tinha cortado em outro lugar. Coloquei o link da clik na bio e na mensagem automática: hoje 80% da minha semana lota sem eu digitar uma palavra.',
    outcome: '+22 cortes/mês fora do expediente',
  },
  {
    initials: 'MV',
    name: 'Marcos Vinícius',
    business: 'Navalha Bruta Barbershop · 3 barbeiros',
    location: 'Curitiba, PR',
    painBefore: 'Choque de horário entre os barbeiros e zero controle de caixa',
    quote:
      'Cada barbeiro anotava no próprio celular e toda semana dava confusão de dois clientes chegarem às 18h pro mesmo profissional. Trouxemos esse problema no primeiro dia, configuramos expediente e pausa individual em minutos e nunca mais tivemos um único horário duplicado.',
    outcome: 'Zero conflito de agenda em 4 meses',
  },
  {
    initials: 'CN',
    name: 'Camila Nogueira',
    business: 'Studio CN Estética & Sobrancelha',
    location: 'Belo Horizonte, MG',
    painBefore: 'Faltas de última hora e clientes antigas que sumiam sem eu notar',
    quote:
      'Eu tinha medo de sair do caderno e achar complicado. Qualquer dúvida que tive no começo foi recebida na hora pelo suporte, super humano. Com o comprovante no e-mail e a lista de quem não volta há 60 dias, recuperei o valor da assinatura no primeiro dia.',
    outcome: 'Faltas caíram de 9/mês para 1/mês',
  },
];

export default function ReviewsSection() {
  return (
    <section id="avaliacoes" className="section">
      <div className="container">
        {/* Header + Aggregate Rating */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.75rem',
          }}
        >
          <div style={{ maxWidth: '660px' }}>
            <div className="eyebrow eyebrow-green" style={{ marginBottom: '1rem' }}>
              <Star size={13} fill="currentColor" />
              <span>AVALIAÇÕES E PROBLEMAS RESOLVIDOS NA PRÁTICA</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
              Quem vivia refém do WhatsApp hoje tem o negócio na mão.
            </h2>
            <p className="section-subtitle">
              Veja quais dores estavam travando a rotina desses profissionais e como cada problema foi
              recebido e resolvido dentro da clik.
            </p>
          </div>

          {/* Aggregate Score Box */}
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: '1rem 1.35rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div>
              <div
                className="font-mono"
                style={{ fontSize: '1.65rem', fontWeight: 800, lineHeight: 1 }}
              >
                4.9<span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>/5</span>
              </div>
              <div style={{ display: 'flex', gap: '2px', marginTop: '0.35rem' }}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={13} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
            </div>
            <div
              style={{
                borderLeft: '1px solid var(--border-subtle)',
                paddingLeft: '1rem',
                fontSize: '0.78rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
              }}
            >
              Avaliação média de
              <br />
              <strong style={{ color: 'var(--text-primary)' }}>donos de agenda</strong>
            </div>
          </div>
        </div>

        {/* 3 Problem -> Resolution Review Cards */}
        <div className="three-col-grid" style={{ marginBottom: '1.5rem' }}>
          {userReviews.map((r, idx) => (
            <article
              key={idx}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.15rem',
              }}
            >
              <div>
                {/* Stars */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.9rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                    Uso verificado
                  </span>
                </div>

                {/* Pain Before Tag */}
                <div
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.07)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    borderRadius: '8px',
                    padding: '0.5rem 0.7rem',
                    fontSize: '0.74rem',
                    color: '#fca5a5',
                    marginBottom: '0.95rem',
                    lineHeight: 1.4,
                  }}
                >
                  <strong style={{ color: '#f87171' }}>Dor antes:</strong> {r.painBefore}
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: '0.885rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                  }}
                >
                  "{r.quote}"
                </p>
              </div>

              <div>
                {/* Outcome Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.32rem 0.7rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--accent-green-dim)',
                    border: '1px solid var(--accent-green-border)',
                    color: 'var(--accent-green)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                  }}
                >
                  <TrendingUp size={13} />
                  <span>{r.outcome}</span>
                </div>

                {/* Author Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    paddingTop: '0.9rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-elevated)',
                      border: '1px solid var(--border-strong)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      flexShrink: 0,
                    }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>{r.name}</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                      {r.business} · {r.location}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* How User Problems & Feedback Are Received */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', maxWidth: '720px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'var(--accent-green-dim)',
                border: '1px solid var(--accent-green-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-green)',
                flexShrink: 0,
              }}
            >
              <MessageCircleHeart size={19} />
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.15rem' }}>
                Como recebemos cada dificuldade do seu dia a dia: sem robô te enrolando.
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Travou na hora de configurar um intervalo ou sentiu falta de um ajuste na rotina da
                barbearia? Nosso time em português acolhe seu relato direto e ajuda a deixar sua agenda
                redonda.
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.78rem',
              color: 'var(--accent-green)',
              fontWeight: 600,
            }}
            className="font-mono"
          >
            <CheckCircle2 size={15} />
            <span>Suporte humano em português</span>
          </div>
        </div>
      </div>
    </section>
  );
}
