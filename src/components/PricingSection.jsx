import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 'R$ 0',
    period: '/mês',
    desc: 'Para profissionais autônomos começando a organizar a agenda.',
    popular: false,
    cta: 'Selecionar Free',
    features: [
      '1 profissional (apenas você)',
      'Até 15 agendamentos por mês',
      'Até 50 clientes cadastrados',
      'Página pública de agendamento',
      'CRM e Histórico de clientes',
      'Disparos de e-mail de confirmação',
      'Alertas de No-show',
    ]
  },
  {
    name: 'Start',
    price: 'R$ 29,90',
    period: '/mês',
    desc: 'Para pequenos negócios com um assistente ou dupla.',
    popular: false,
    cta: 'Selecionar Start',
    features: [
      'Até 2 profissionais (você + 1)',
      'Agendamentos ilimitados',
      'Até 200 clientes cadastrados',
      'CRM Básico + Cálculo de LTV',
      'Pausas e disponibilidade por atendente',
      'Disparos de e-mail automáticos',
      'Alertas de No-show',
    ]
  },
  {
    name: 'Pro',
    price: 'R$ 59,90',
    period: '/mês',
    desc: 'A solução completa para salões, barbearias e clínicas em crescimento.',
    popular: true,
    badgeText: 'MAIS POPULAR',
    cta: 'Selecionar Pro',
    features: [
      'Até 10 profissionais na equipe',
      'Agendamentos e clientes ilimitados',
      'Disparos de e-mail automáticos (Resend SDK)',
      'CRM Completo com LTV automático',
      'Alertas de No-show e Métricas de saúde',
      'Suporte prioritário',
    ]
  },
  {
    name: 'Scale',
    price: 'R$ 129,90',
    period: '/mês',
    desc: 'Para redes de atendimento e estabelecimentos sem limites.',
    popular: false,
    cta: 'Selecionar Scale',
    features: [
      'Profissionais ilimitados',
      'Agendamentos e clientes ilimitados',
      'Disparos de e-mail automáticos',
      'WhatsApp Bot automações (Em breve)',
      'Relatórios avançados e exportação',
      'Gerente de conta dedicado',
    ]
  }
];

const comparisonData = [
  { resource: 'Profissionais', free: '1 profissional', start: 'Até 2', pro: 'Até 10', scale: 'Ilimitados' },
  { resource: 'Agendamentos', free: '15 / mês', start: 'Ilimitados', pro: 'Ilimitados', scale: 'Ilimitados' },
  { resource: 'Clientes cadastrados', free: 'Até 50', start: 'Até 200', pro: 'Ilimitados', scale: 'Ilimitados' },
  { resource: 'Página pública de agendamento', free: '✓', start: '✓', pro: '✓', scale: '✓' },
  { resource: 'CRM & Histórico de Clientes', free: '✓', start: '✓ + LTV', pro: 'Completo + LTV', scale: 'Avançado' },
  { resource: 'Disparos de e-mail', free: 'Confirmação', start: 'Automáticos', pro: 'Automáticos (Resend)', scale: 'Automáticos' },
  { resource: 'Alertas de No-show & Saúde', free: '✓', start: '✓', pro: '✓ Completo', scale: '✓ Completo' },
  { resource: 'Disponibilidade por atendente', free: '—', start: '✓', pro: '✓', scale: '✓' },
  { resource: 'WhatsApp Bot automações', free: '—', start: '—', pro: '—', scale: 'Em breve' },
  { resource: 'Relatórios avançados', free: '—', start: '—', pro: '✓', scale: '✓ + Exportação' },
  { resource: 'Suporte & Atendimento', free: 'Padrão', start: 'Padrão', pro: 'Prioritário', scale: 'Gerente Dedicado' },
];

export default function PricingSection() {
  return (
    <section id="planos" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <div className="section-title-sm">PLANOS E ASSINATURA</div>
          <h2 className="section-heading">
            Escolha o plano ideal para a escala do seu negócio.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Atualize a qualquer momento. Transparência total sem taxas escondidas.
          </p>
        </div>

        {/* 4 Sleek Plan Cards */}
        <div className="grid-4" style={{ marginBottom: '4.5rem', alignItems: 'stretch', gap: '1.5rem' }}>
          {plans.map((p, idx) => (
            <div key={idx} style={{
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              border: p.popular ? '1px solid #ffffff' : '1px solid var(--border-subtle)',
              backgroundColor: p.popular ? 'var(--bg-card)' : 'var(--bg-main)',
              boxShadow: p.popular ? '0 10px 30px rgba(255, 255, 255, 0.05)' : 'none',
            }}>
              {p.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-13px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '0.25rem 0.875rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}>
                  <Star size={12} fill="#000" />
                  <span>{p.badgeText}</span>
                </div>
              )}

              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.375rem' }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', minHeight: '48px', marginBottom: '1.25rem', lineHeight: 1.4 }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem', marginBottom: '1.5rem', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
                  <span className="font-mono" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', fontWeight: 800, whiteSpace: 'nowrap' }}>{p.price}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{p.period}</span>
                </div>

                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Recursos inclusos
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.75rem', fontSize: '0.84rem', minHeight: '250px' }}>
                  {p.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} color={p.popular ? '#ffffff' : 'var(--accent-status-green)'} style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="https://app.useclik.com.br/register" 
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${p.popular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <span>{p.cta}</span>
                <ArrowRight size={14} />
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
            Compare cada detalhe e escolha o plano perfeito para o seu estabelecimento.
          </p>
        </div>

        <div className="scroll-hint-mobile font-mono">← Deslize para ver todos os recursos →</div>
        <div className="pricing-table-wrapper">
          <table className="pricing-table">
            <thead>
              <tr>
                <th style={{ width: '28%' }}>Recurso</th>
                <th style={{ width: '18%', textAlign: 'center' }}>Free</th>
                <th style={{ width: '18%', textAlign: 'center' }}>Start</th>
                <th style={{ width: '18%', textAlign: 'center', color: '#ffffff' }}>Pro ★</th>
                <th style={{ width: '18%', textAlign: 'center' }}>Scale</th>
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

