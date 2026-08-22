import React from 'react';
import { MessageSquareOff, ShieldCheck, TrendingDown, RefreshCw } from 'lucide-react';

const benefits = [
  {
    number: '01',
    icon: MessageSquareOff,
    title: 'Menos mensagens',
    desc: 'Clientes encontram horários disponíveis sozinho(a)s sem precisar perguntar manualmente no WhatsApp.'
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Mais controle',
    desc: 'Agenda, clientes, equipe e resultados financeiros deixam de ficar espalhados em papéis e planilhas.'
  },
  {
    number: '03',
    icon: TrendingDown,
    title: 'Menos perdas',
    desc: 'Identifique faltas, no-shows e horários vagos que estão custando dinheiro para o seu negócio.'
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Mais retornos',
    desc: 'Conheça o histórico dos seus clientes e saiba exatamente quem pode estar no momento ideal para agendar novamente.'
  }
];

export default function BenefitsSection() {
  return (
    <section id="ganhos" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-title-sm">RESULTADOS CONCRETOS</div>
          <h2 className="section-heading">
            Menos tempo organizando. Mais tempo crescendo.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Transformação prática que impacta diretamente seu tempo livre e o faturamento do seu negócio.
          </p>
        </div>

        <div className="grid-4">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="clik-card" style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
                    <span className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      CARD {b.number}
                    </span>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)'
                    }}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
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
