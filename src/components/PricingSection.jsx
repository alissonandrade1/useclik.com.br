import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 'R$ 0',
    featured: false,
    cta: 'Começar grátis',
    items: ['1 profissional', '15 horários/mês', 'Link próprio', 'Avisos no e-mail'],
  },
  {
    name: 'Start',
    price: 'R$ 29,90',
    featured: false,
    cta: 'Escolher Start',
    items: ['Até 2 profissionais', 'Horários ilimitados', '200 clientes', 'Pausas e LTV'],
  },
  {
    name: 'Pro',
    price: 'R$ 59,90',
    tag: 'Popular',
    featured: true,
    cta: 'Perca menos clientes',
    items: ['Até 10 profissionais', 'Tudo ilimitado', 'E-mail + agenda', 'Inativos 60d+'],
  },
  {
    name: 'Scale',
    price: 'R$ 129,90',
    featured: false,
    cta: 'Escolher Scale',
    items: ['Equipe ilimitada', 'Tudo ilimitado', 'Exportação', 'Suporte dedicado'],
  },
];

export default function PricingSection() {
  return (
    <section id="planos" className="section">
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
          <h2 className="section-title">Planos diretos. Comece grátis.</h2>
          <span className="font-mono" style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            Sem cartão · Cancele quando quiser
          </span>
        </div>

        <div className="pricing-grid">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className="pricing-cell"
              style={{
                padding: '1.15rem',
                backgroundColor: p.featured ? '#141418' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}
                >
                  <strong style={{ fontSize: '0.92rem' }}>{p.name}</strong>
                  {p.tag && <span className="ui-status ui-status-green font-mono">{p.tag}</span>}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.2rem',
                    paddingBottom: '0.75rem',
                    marginBottom: '0.75rem',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <span className="font-mono" style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                    {p.price}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>/mês</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {p.items.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.78rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Check size={13} color="var(--accent-green)" style={{ flexShrink: 0 }} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://app.useclik.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-sm ${p.featured ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%' }}
              >
                <span>{p.cta}</span>
                <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
