import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 'R$ 0',
    desc: 'Para começar hoje e organizar sua agenda sem custo.',
    featured: false,
    cta: 'Começar grátis',
    items: [
      '1 profissional',
      'Até 15 agendamentos/mês',
      'Página pública própria',
      'Confirmação no e-mail',
      'Histórico de clientes',
    ],
  },
  {
    name: 'Start',
    price: 'R$ 29,90',
    desc: 'Para autônomos com agenda cheia ou dupla.',
    featured: false,
    cta: 'Escolher Start',
    items: [
      'Até 2 profissionais',
      'Agendamentos ilimitados',
      'Até 200 clientes na base',
      'Expediente e pausas individuais',
      'Cálculo automático de LTV',
    ],
  },
  {
    name: 'Pro',
    price: 'R$ 59,90',
    tag: 'Mais usado',
    desc: 'Para barbearias, salões e estúdios com equipe.',
    featured: true,
    cta: 'Perca menos clientes',
    items: [
      'Até 10 profissionais',
      'Agendamentos e clientes ilimitados',
      'E-mail automático + agenda integrada',
      'CRM com filtro de inativos 60d+',
      'Suporte prioritário',
    ],
  },
  {
    name: 'Scale',
    price: 'R$ 129,90',
    desc: 'Para operações maiores sem limite de equipe.',
    featured: false,
    cta: 'Escolher Scale',
    items: [
      'Profissionais ilimitados',
      'Agendamentos e clientes ilimitados',
      'Relatórios e exportação',
      'Automações WhatsApp (em breve)',
      'Acompanhamento dedicado',
    ],
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
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span className="section-label">planos</span>
            <h2 className="section-title">Comece grátis. Um corte salvo já paga o mês.</h2>
          </div>
          <span className="font-mono" style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            Sem cartão para testar · Cancele quando quiser
          </span>
        </div>

        <div className="pricing-grid">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className="pricing-cell"
              style={{
                padding: '1.25rem',
                backgroundColor: p.featured ? '#141418' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.15rem',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.25rem',
                  }}
                >
                  <strong style={{ fontSize: '0.98rem' }}>{p.name}</strong>
                  {p.tag && (
                    <span className="ui-status ui-status-green font-mono">{p.tag}</span>
                  )}
                </div>

                <p
                  style={{
                    fontSize: '0.76rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.4,
                    minHeight: '34px',
                    marginBottom: '0.85rem',
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.25rem',
                    paddingBottom: '0.85rem',
                    marginBottom: '0.85rem',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <span className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800 }}>
                    {p.price}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/mês</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {p.items.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.45rem',
                        fontSize: '0.78rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Check
                        size={13}
                        color="var(--accent-green)"
                        style={{ marginTop: '2px', flexShrink: 0 }}
                      />
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
