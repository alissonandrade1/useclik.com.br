import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 'R$ 0',
    period: '/mês',
    desc: 'Para testar na rotina real e organizar sua primeira cadeira sem custo.',
    popular: false,
    cta: 'Começar grátis',
    features: [
      '1 profissional (você)',
      'Até 15 agendamentos por mês',
      'Página pública própria de agendamento',
      'Confirmação automática no e-mail',
      'CRM e histórico de clientes',
      'Alertas de faltas (No-show)',
    ],
  },
  {
    name: 'Start',
    price: 'R$ 29,90',
    period: '/mês',
    desc: 'Para profissionais com agenda cheia ou dupla de atendimento.',
    popular: false,
    cta: 'Começar no Start',
    features: [
      'Até 2 profissionais na equipe',
      'Agendamentos ilimitados',
      'Até 200 clientes na base',
      'Expediente e pausas por profissional',
      'Disparos automáticos de e-mail',
      'Cálculo automático de LTV',
    ],
  },
  {
    name: 'Pro',
    price: 'R$ 59,90',
    oldPrice: 'R$ 79,00',
    period: '/mês',
    desc: 'O favorito de barbearias, salões e estúdios em crescimento.',
    popular: true,
    cta: 'Perca menos clientes no Pro',
    features: [
      'Até 10 profissionais na equipe',
      'Agendamentos e clientes ilimitados',
      'Tudo no seu e-mail + integração de agenda',
      'CRM completo com filtro de inativos 60d+',
      'Métricas de saúde, retenção e receita',
      'Suporte prioritário em português',
    ],
  },
  {
    name: 'Scale',
    price: 'R$ 129,90',
    period: '/mês',
    desc: 'Para operações maiores e múltiplas cadeiras sem limites.',
    popular: false,
    cta: 'Escolher Scale',
    features: [
      'Profissionais ilimitados',
      'Agendamentos e clientes ilimitados',
      'Relatórios avançados e exportação',
      'Automações WhatsApp (Acesso prioritário)',
      'Acompanhamento dedicado na implantação',
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="planos"
      className="section"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>
            <span>PLANOS SIMPLES E TRANSPARENTES</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            Custa menos que um único corte perdido no mês.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Comece sem pagar nada, valide na rotina do seu espaço e evolua quando sua agenda pedir.
          </p>
        </div>

        {/* Risk Reversal Pill */}
        <div
          style={{
            maxWidth: '540px',
            margin: '0 auto 2.5rem',
            padding: '0.75rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--accent-green-dim)',
            border: '1px solid var(--accent-green-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.55rem',
            fontSize: '0.83rem',
            color: 'var(--accent-green)',
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          <ShieldCheck size={16} style={{ flexShrink: 0 }} />
          <span>Sem cartão de crédito para começar · Cancele em 1 clique quando quiser</span>
        </div>

        {/* 4 Plan Cards */}
        <div className="four-col-grid">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                backgroundColor: plan.popular ? 'var(--bg-surface)' : 'var(--bg-void)',
                border: `1px solid ${plan.popular ? 'var(--accent-green)' : 'var(--border-default)'
                  }`,
                borderRadius: 'var(--radius-xl)',
                padding: '1.65rem 1.35rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: plan.popular ? '0 20px 50px rgba(35, 202, 130, 0.09)' : 'none',
              }}
            >
              {plan.popular && (
                <span
                  className="font-mono"
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--accent-green)',
                    color: '#051b11',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '0.22rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  MAIS ESCOLHIDO
                </span>
              )}

              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {plan.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.45,
                    minHeight: '44px',
                    marginBottom: '1.15rem',
                  }}
                >
                  {plan.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.35rem',
                    marginBottom: '1.35rem',
                  }}
                >
                  {plan.oldPrice && (
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'line-through',
                      }}
                    >
                      {plan.oldPrice}
                    </span>
                  )}
                  <span className="font-mono" style={{ fontSize: '1.85rem', fontWeight: 800 }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {plan.period}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {plan.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.8125rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Check
                        size={15}
                        color="var(--accent-green)"
                        style={{ marginTop: '2px', flexShrink: 0 }}
                      />
                      <span style={{ lineHeight: 1.4 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://app.useclik.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.popular ? 'btn-emerald' : 'btn-secondary'}`}
                style={{ width: '100%' }}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
