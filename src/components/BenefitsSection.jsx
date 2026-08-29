import React from 'react';
import { MessageSquareOff, ShieldCheck, TrendingDown, RefreshCw } from 'lucide-react';

const benefits = [
  {
    number: '01',
    icon: MessageSquareOff,
    stat: '−70%',
    title: 'Menos mensagens',
    desc: 'Clientes agendam sozinhos, sem precisar perguntar horários no WhatsApp.'
  },
  {
    number: '02',
    icon: ShieldCheck,
    stat: '1 lugar',
    title: 'Mais controle',
    desc: 'Agenda, clientes, equipe e financeiro centralizados. Sem papel, planilha ou memória.'
  },
  {
    number: '03',
    icon: TrendingDown,
    stat: 'R$0 perdido',
    title: 'Menos perdas',
    desc: 'Veja no-shows e horários vagos com custo real calculado. Decida com dados, não feeling.'
  },
  {
    number: '04',
    icon: RefreshCw,
    stat: '+retornos',
    title: 'Mais retornos',
    desc: 'Saiba quem sumiu e há quanto tempo. Aja antes de perder o cliente definitivamente.'
  }
];

export default function BenefitsSection() {
  return (
    <section id="ganhos" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          <div className="section-title-sm">RESULTADOS CONCRETOS</div>
          <h2 className="section-heading">
            Menos tempo organizando.<br />Mais tempo crescendo.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1px',
          backgroundColor: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden'
        }}>
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-main)',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'background-color 200ms',
                  cursor: 'default'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-surface)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-main)'}
              >
                {/* Number + Icon row */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
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
                    width: '34px',
                    height: '34px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)'
                  }}>
                    <Icon size={15} />
                  </div>
                </div>

                {/* Big Stat */}
                <div className="font-mono" style={{
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 900,
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em'
                }}>
                  {b.stat}
                </div>

                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)' }} />

                {/* Title + Desc */}
                <div>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}>
                    {b.title}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
