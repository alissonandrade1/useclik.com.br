import React from 'react';
import { Calendar, Users, UserCheck, TrendingUp } from 'lucide-react';

const solutions = [
  {
    icon: Calendar,
    title: 'Agenda que trabalha por você',
    desc: 'Compartilhe seu link próprio e permita que clientes encontrem horários disponíveis 24h por dia, sem precisar perguntar manualmente no WhatsApp.'
  },
  {
    icon: Users,
    title: 'Clientes que você conhece',
    desc: 'Tenha o histórico completo de cada cliente e saiba exatamente quem é recorrente, quem cancelou e quem está há tempo demais sem aparecer.'
  },
  {
    icon: UserCheck,
    title: 'Equipe sem confusão',
    desc: 'Organize profissionais, serviços, disponibilidade individual e atendimentos em um único painel claro e transparente.'
  },
  {
    icon: TrendingUp,
    title: 'Resultados que fazem sentido',
    desc: 'Entenda o faturamento do mês, ticket médio, valor perdido com no-shows e oportunidades reais de receita não realizada.'
  }
];

export default function SolutionsSection() {
  return (
    <section id="solucoes" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-title-sm">FEITO PARA A SUA ROTINA</div>
          <h2 className="section-heading">
            Menos improviso. Mais controle.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Ferramentas organizadas para resolver os problemas reais do dia a dia do seu negócio.
          </p>
        </div>

        <div className="grid-2">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="clik-card" style={{ padding: '2rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)'
                }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.625rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
