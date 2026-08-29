import React from 'react';
import { Star, TrendingUp, Users, CalendarCheck, Award, Quote } from 'lucide-react';

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
    quote: 'Em 3 meses reduzi meu no-show de 30% para menos de 5%. A CLiK me mostrou clientes que tinham sumido há meses e eu nem havia percebido.',
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

const stats = [
  { value: '+800', label: 'negócios ativos', icon: Users },
  { value: 'R$ 4M+', label: 'em serviços gerenciados', icon: CalendarCheck },
  { value: '96%', label: 'de satisfação dos usuários', icon: Award },
  { value: '4.9★', label: 'avaliação média', icon: Star }
];

export default function SocialProofSection() {
  return (
    <section id="resultados" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">

        {/* Stats Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '1.5rem 2rem',
          marginBottom: '4rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                className="font-mono"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                  marginBottom: '0.375rem',
                  letterSpacing: '-0.02em'
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          <div className="section-title-sm">HISTÓRIAS REAIS</div>
          <h2 className="section-heading">
            Negócios que pararam de improvisar.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Barbearia, salão, nail designer — cada um com uma rotina diferente. Um problema em comum.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3" style={{ gap: '1.25rem' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'border-color 200ms, transform 200ms',
                cursor: 'default'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {Array(t.rating).fill(0).map((_, si) => (
                  <Star key={si} size={14} fill="var(--accent-status-amber)" color="var(--accent-status-amber)" />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                flexGrow: 1
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
                <TrendingUp size={12} />
                {t.highlight}
              </div>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: t.avatarBg,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  flexShrink: 0,
                  letterSpacing: '0.02em'
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.125rem' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    {t.business} · {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{
          textAlign: 'center',
          marginTop: '1.75rem',
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
