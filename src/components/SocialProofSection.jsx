import React, { useState, useEffect, useRef } from 'react';
import { Star, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    initials: 'CM',
    name: 'Carlos Mendez',
    business: 'Barbearia Rei do Corte',
    city: 'São Paulo, SP',
    quote: 'Antes eu passava o dia inteiro respondendo WhatsApp sobre horários. Hoje meus clientes agendam sozinhos e eu sei exatamente quanto faturei no mês — sem precisar calcular nada.',
    rating: 5,
    highlight: 'No-show caiu 82%',
    avatarBg: '#2563eb'
  },
  {
    initials: 'FL',
    name: 'Fernanda Lima',
    business: 'Studio Glow',
    city: 'Rio de Janeiro, RJ',
    quote: 'Em 3 meses reduzi meu no-show de 30% para menos de 5%. A clik me mostrou clientes que tinham sumido há meses e eu nem havia percebido.',
    rating: 5,
    highlight: '+R$ 2.800/mês recuperados',
    avatarBg: '#7c3aed'
  },
  {
    initials: 'TS',
    name: 'Tatiane Souza',
    business: 'Nail Art by Tati',
    city: 'Belo Horizonte, MG',
    quote: 'Consegui dobrar meu número de atendimentos sem contratar mais ninguém. Só com organização e vendo o histórico certo de cada cliente.',
    rating: 5,
    highlight: '2× mais atendimentos',
    avatarBg: '#059669'
  }
];

export default function SocialProofSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const next = () => setCurrent(prev => (prev + 1) % testimonials.length);
  const prev = () => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const t = testimonials[current];

  return (
    <section id="resultados" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 3rem auto' }}>
          <div className="section-title-sm">HISTÓRIAS REAIS</div>
          <h2 className="section-heading">
            Negócios que pararam de improvisar.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Barbearia, salão, nail designer — cada um com uma rotina diferente. Um problema em comum.
          </p>
        </div>

        {/* Carousel */}
        <div
          style={{ position: 'relative', maxWidth: '680px', margin: '0 auto' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card */}
          <div
            key={current}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              animation: 'fadeInTab 350ms ease-out forwards'
            }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {Array(t.rating).fill(0).map((_, i) => (
                <Star key={i} size={16} fill="var(--accent-status-amber)" color="var(--accent-status-amber)" />
              ))}
            </div>

            {/* Quote */}
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              fontStyle: 'italic'
            }}>
              "{t.quote}"
            </p>

            {/* Highlight badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--accent-status-green-bg)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              color: 'var(--accent-status-green)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              alignSelf: 'flex-start'
            }}>
              <TrendingUp size={13} />
              {t.highlight}
            </div>

            {/* Author */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: t.avatarBg,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.9375rem',
                flexShrink: 0,
                letterSpacing: '0.02em'
              }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.125rem' }}>
                  {t.name}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  {t.business} · {t.city}
                </div>
              </div>
            </div>
          </div>

          {/* Controls row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '1.5rem'
          }}>
            {/* Prev / Next */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={prev}
                aria-label="Depoimento anterior"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 150ms, background-color 150ms'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.backgroundColor = 'var(--bg-card)'; }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Próximo depoimento"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 150ms, background-color 150ms'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.backgroundColor = 'var(--bg-card)'; }}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    backgroundColor: i === current ? 'var(--text-primary)' : 'var(--border-strong)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 300ms cubic-bezier(0.4,0,0.2,1)',
                    padding: 0
                  }}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              {current + 1} / {testimonials.length}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{
          textAlign: 'center',
          marginTop: '2rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)'
        }}>
          * Dados demonstrativos. Resultados reais podem variar conforme o negócio.
        </p>
      </div>
    </section>
  );
}
