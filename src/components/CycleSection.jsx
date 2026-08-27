import React from 'react';
import { Calendar, UserCheck, FileText, BarChart3, Repeat } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Agendar',
    desc: 'O cliente acessa seu link próprio e escolhe serviço, profissional e horário disponível.'
  },
  {
    number: '02',
    icon: UserCheck,
    title: 'Atender',
    desc: 'A agenda organiza exatamente quem será atendido, por quem e em qual horário.'
  },
  {
    number: '03',
    icon: FileText,
    title: 'Registrar',
    desc: 'Cada atendimento concluído alimenta automaticamente o histórico completo do cliente.'
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Entender',
    desc: 'Seu painel mostra o faturamento real, ticket médio e o valor de no-shows evitados.'
  },
  {
    number: '05',
    icon: Repeat,
    title: 'Fazer voltar',
    desc: 'Identifique clientes inativos e envie lembretes de retorno no momento ideal.'
  }
];

export default function CycleSection() {
  return (
    <section id="como-funciona" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <div className="section-title-sm">FLUXO CONTÍNUO DE ATENDIMENTO</div>
          <h2 className="section-heading">
            Um ciclo que continua.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A jornada não termina quando o serviço é realizado. Tudo está conectado do primeiro agendamento ao próximo retorno.
          </p>
        </div>

        {/* Fluid Horizontal Timeline Flow (No Heavy Cards) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem 1.5rem',
          position: 'relative'
        }}>
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} style={{
                paddingTop: '1.25rem',
                borderTop: '2px solid var(--border-subtle)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  height: '24px'
                }}>
                  <span className="font-mono" style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)'
                  }}>
                    {s.number}
                  </span>
                  <div style={{
                    color: 'var(--text-primary)'
                  }}>
                    <Icon size={18} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
