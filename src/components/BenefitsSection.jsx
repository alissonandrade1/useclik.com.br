import React from 'react';
import { MessageSquareOff, ShieldCheck, TrendingDown, RefreshCw } from 'lucide-react';

const benefits = [
  {
    number: '01',
    icon: MessageSquareOff,
    stat: '−70%',
    statLabel: 'menos perguntas no WhatsApp',
    title: 'Menos mensagens',
    desc: 'Clientes encontram horários disponíveis sozinhos. Sem precisar te chamar para conferir agenda.'
  },
  {
    number: '02',
    icon: ShieldCheck,
    stat: '1 lugar',
    statLabel: 'para tudo que importa',
    title: 'Mais controle',
    desc: 'Agenda, clientes, equipe e resultados financeiros em uma tela. Sem planilha, sem papel, sem memória.'
  },
  {
    number: '03',
    icon: TrendingDown,
    stat: 'R$ 1.200',
    statLabel: 'perdidos por mês em média com no-shows',
    title: 'Menos perdas',
    desc: 'Identifique faltas, no-shows e horários vagos que estão custando dinheiro — e tome uma decisão com base nisso.'
  },
  {
    number: '04',
    icon: RefreshCw,
    stat: '+88%',
    statLabel: 'de taxa de retorno com acompanhamento',
    title: 'Mais retornos',
    desc: 'Saiba exatamente quem não volta há mais de 30 dias e quem está no momento certo para agendar de novo.'
  }
];

export default function BenefitsSection() {
  return (
    <section id="ganhos" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 4rem auto' }}>
          <div className="section-title-sm">RESULTADOS CONCRETOS</div>
          <h2 className="section-heading">
            Menos tempo organizando.<br />Mais tempo crescendo.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Impacto direto no seu tempo, no seu caixa e na sua tranquilidade.
          </p>
        </div>

        <div className="grid-4" style={{ gap: '2rem 1.5rem' }}>
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} style={{
                paddingTop: '1.5rem',
                borderTop: '2px solid var(--border-strong)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Number + Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}>
                  <span className="font-mono" style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                  }}>
                    {b.number}
                  </span>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)'
                  }}>
                    <Icon size={16} />
                  </div>
                </div>

                {/* Big Stat */}
                <div className="font-mono" style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.02em'
                }}>
                  {b.stat}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                  lineHeight: 1.3
                }}>
                  {b.statLabel}
                </div>

                <h3 style={{
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem'
                }}>
                  {b.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55
                }}>
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
