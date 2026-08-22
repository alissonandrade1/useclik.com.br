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
    desc: 'Identifique clientes inativos e use lembretes de retorno no momento ideal.'
  }
];

export default function CycleSection() {
  return (
    <section id="como-funciona" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-title-sm">PROCESSO CONTÍNUO</div>
          <h2 className="section-heading">
            Um ciclo que continua.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A jornada não termina quando o serviço é realizado. Tudo está conectado do primeiro agendamento ao próximo retorno.
          </p>
        </div>

        {/* 5-Step Process Cards Grid */}
        <div className="grid-5" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem'
        }}>
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="clik-card" style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
                    <span className="font-mono" style={{
                      fontSize: '1.125rem',
                      fontWeight: 800,
                      color: 'var(--text-muted)'
                    }}>
                      {s.number}
                    </span>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)'
                    }}>
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {s.desc}
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
