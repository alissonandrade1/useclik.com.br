import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 'R$ 0',
    period: 'para sempre',
    desc: 'Para começar a organizar seus agendamentos.',
    popular: false,
    cta: 'Começar gratuitamente',
    features: [
      '1 Profissional',
      'Agendamentos limitados',
      'Página/Link próprio',
      'Até 50 Clientes cadastrados',
    ]
  },
  {
    name: 'Start',
    price: 'R$ 29,90',
    period: '/mês',
    desc: 'Para profissionalizar sua rotina de agendamentos.',
    popular: false,
    cta: 'Escolher Start',
    features: [
      'Até 2 Profissionais',
      'Agendamentos ilimitados',
      'Página/Link próprio',
      'Até 500 Clientes cadastrados',
      'CRM & Financeiro básicos',
      'Relatórios básicos'
    ]
  },
  {
    name: 'Pro',
    price: 'R$ 49,90',
    period: '/mês',
    desc: 'Para ter uma visão mais completa de clientes, equipe e resultados.',
    popular: true,
    cta: 'Começar com Pro',
    features: [
      'Até 10 Profissionais',
      'Agendamentos ilimitados',
      'Página/Link próprio',
      'Clientes ilimitados',
      'CRM de Recorrência completo',
      'Financeiro & Alertas de No-Show',
      'Confirmações por WhatsApp',
      'Relatórios Avançados',
      'Gestão de Equipe completa'
    ]
  },
  {
    name: 'Scale',
    price: 'R$ 129,90',
    period: '/mês',
    desc: 'Para negócios com equipes maiores e uma operação mais completa.',
    popular: false,
    cta: 'Escolher Scale',
    features: [
      'Profissionais Ilimitados',
      'Agendamentos ilimitados',
      'Página/Link próprio',
      'Clientes ilimitados',
      'CRM Avançado de Recorrência',
      'Financeiro completo & DRE',
      'Notificações WhatsApp inclusas',
      'Relatórios Avançados & Exportação',
      'Gestão de Equipe avançada'
    ]
  }
];

const comparisonData = [
  { resource: 'Profissionais', free: '1', start: '2', pro: '10', scale: 'Ilimitado' },
  { resource: 'Agendamentos', free: 'Limitado', start: 'Ilimitado', pro: 'Ilimitado', scale: 'Ilimitado' },
  { resource: 'Link próprio', free: '✓', start: '✓', pro: '✓', scale: '✓' },
  { resource: 'Clientes', free: '50', start: '500', pro: 'Ilimitados', scale: 'Ilimitados' },
  { resource: 'CRM', free: '—', start: 'Básico', pro: '✓', scale: 'Avançado' },
  { resource: 'Financeiro', free: '—', start: 'Básico', pro: '✓', scale: '✓' },
  { resource: 'WhatsApp', free: '—', start: '—', pro: '✓', scale: '✓' },
  { resource: 'Relatórios', free: '—', start: 'Básicos', pro: 'Avançados', scale: 'Avançados' },
  { resource: 'Equipe', free: '—', start: 'Básico', pro: '✓', scale: '✓' },
];

export default function PricingSection() {
  return (
    <section id="planos" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <div className="section-title-sm">TRANSPARÊNCIA TOTAL</div>
          <h2 className="section-heading">
            Um plano para cada momento.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Comece gratuitamente e evolua conforme seu negócio cresce. Sem fidelidade ou taxas escondidas.
          </p>
        </div>

        {/* 4 Sleek Open Columns (No Heavy Cards) */}
        <div className="grid-4" style={{ marginBottom: '4.5rem', alignItems: 'stretch', gap: '1.5rem' }}>
          {plans.map((p, idx) => (
            <div key={idx} style={{
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              border: p.popular ? '1px solid #ffffff' : '1px solid var(--border-subtle)',
              backgroundColor: p.popular ? 'var(--bg-card)' : 'var(--bg-main)',
            }}>
              {p.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '0.2rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  whiteSpace: 'nowrap'
                }}>
                  <Star size={12} fill="#000" />
                  <span>MAIS POPULAR</span>
                </div>
              )}

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.375rem' }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', minHeight: '38px', marginBottom: '1.25rem' }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.5rem' }}>
                  <span className="font-mono" style={{ fontSize: '2.25rem', fontWeight: 800 }}>{p.price}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{p.period}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.75rem', fontSize: '0.875rem' }}>
                  {p.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} color={p.popular ? '#ffffff' : 'var(--accent-status-green)'} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="#criar-agenda" 
                className={`btn ${p.popular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%' }}
              >
                <span>{p.cta}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Comparativo completo de recursos
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
            Compare cada detalhe e escolha o melhor plano para a sua equipe.
          </p>
        </div>

        <div className="pricing-table-wrapper">
          <table className="pricing-table">
            <thead>
              <tr>
                <th style={{ width: '32%' }}>Recurso</th>
                <th style={{ width: '17%', textAlign: 'center' }}>Free</th>
                <th style={{ width: '17%', textAlign: 'center' }}>Start</th>
                <th style={{ width: '17%', textAlign: 'center', color: '#ffffff' }}>Pro ★</th>
                <th style={{ width: '17%', textAlign: 'center' }}>Scale</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td>{row.resource}</td>
                  <td style={{ textAlign: 'center', color: 'var(--text-secondary)' }} className="font-mono">{row.free}</td>
                  <td style={{ textAlign: 'center', color: 'var(--text-secondary)' }} className="font-mono">{row.start}</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.03)' }} className="font-mono">{row.pro}</td>
                  <td style={{ textAlign: 'center', color: 'var(--text-secondary)' }} className="font-mono">{row.scale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
