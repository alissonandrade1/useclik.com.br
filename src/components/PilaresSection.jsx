import React, { useState } from 'react';
import { Calendar, Users, UserCheck, TrendingUp, MessageSquare, ArrowRight } from 'lucide-react';

const pilares = [
  {
    id: 'agendamentos',
    icon: Calendar,
    title: '1. Agendamentos',
    subtitle: 'Uma agenda online que trabalha pelo seu negócio 24 horas por dia.',
    desc: 'Cada negócio ganha um link exclusivo para compartilhar no Instagram e WhatsApp. O cliente seleciona o serviço, o profissional, o dia e o horário de forma autônoma. Agendamentos manuais também são realizados em segundos.',
    features: [
      'Página própria de agendamento online',
      'Configuração de duração e preço por serviço',
      'Disponibilidade individual por profissional',
      'Confirmação direta de horários'
    ],
    monoQuote: 'Compartilhe seu link e deixe seus clientes escolherem o melhor horário.'
  },
  {
    id: 'clientes',
    icon: Users,
    title: '2. Clientes',
    subtitle: 'Transforme uma simples lista de contatos em uma base de clientes real.',
    desc: 'Esqueça anotações soltas. O clik. constrói um histórico inteligente de cada cliente: serviços já realizados, faltas, frequência de visitas e valor gerado (LTV).',
    features: [
      'Histórico completo de atendimentos',
      'Registro de cancelamentos e no-shows',
      'Frequência e valor gerado por cliente',
      'Identificação automática de clientes inativos'
    ],
    monoQuote: '8 clientes ainda não voltaram este mês.'
  },
  {
    id: 'equipe',
    icon: UserCheck,
    title: '3. Equipe',
    subtitle: 'Organize profissionais e acompanhe o desempenho de cada um.',
    desc: 'Cadastre sua equipe com horários de trabalho personalizados. Tenha clareza sobre quem atende quais serviços, a ocupação das agendas e o faturamento gerado por cada profissional.',
    features: [
      'Agendas individuais por profissional',
      'Escala e dias de atendimento customizados',
      'Relatório de atendimentos concluídos por membro',
      'Transparência no cálculo de produção'
    ],
    monoQuote: 'Veja a ocupação e o faturamento por profissional.'
  },
  {
    id: 'financeiro',
    icon: TrendingUp,
    title: '4. Financeiro e Resultados',
    subtitle: 'Entenda exatamente o que aconteceu, por que aconteceu e onde há oportunidade.',
    desc: 'O clik. não mostra apenas números frios. Ele traz visibilidade sobre faturamento, ticket médio, faturamento por serviço e, principalmente, o dinheiro perdido com no-shows e faltas.',
    features: [
      'Faturamento em tempo real por período',
      'Métrica clara de valor perdido por no-shows',
      'Ticket médio e serviços mais rentáveis',
      'Potencial de receita não realizado'
    ],
    monoQuote: 'Você faturou R$ 12.480 este mês. Você perdeu R$ 640 em no-shows.'
  },
  {
    id: 'relacionamento',
    icon: MessageSquare,
    title: '5. Relacionamento & CRM',
    subtitle: 'Não esqueça seus clientes depois do atendimento.',
    desc: 'A jornada não termina quando o serviço é concluído. A camada de CRM do clik. identifica quem está sumido e sugere pontos de contato para você reengajar seus clientes via WhatsApp.',
    features: [
      'Alertas de clientes que não voltam há 30, 60 ou 90 dias',
      'Segmentação por valor de cliente',
      'Modelos rápidos de mensagem para WhatsApp',
      'Campanhas de retorno e fidelização'
    ],
    monoQuote: 'Veja quem precisa ser lembrado de agendar um novo horário.'
  }
];

export default function PilaresSection() {
  const [selectedPilar, setSelectedPilar] = useState(pilares[0]);

  return (
    <section id="pilares" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-title-sm">OS PILARES DO PRODUTO</div>
          <h2 className="section-heading">
            Tudo o que seu negócio precisa em 5 pilares conectados.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            O clik. conecta o que acontece antes, durante e depois de cada atendimento.
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '1rem',
          marginBottom: '2rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          {pilares.map((p) => {
            const Icon = p.icon;
            const isSelected = selectedPilar.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPilar(p)}
                className={`btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.875rem',
                  borderRadius: 'var(--radius-md)',
                  flexShrink: 0
                }}
              >
                <Icon size={16} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pilar Content Card */}
        <div className="clik-card" style={{ padding: '2.5rem', backgroundColor: 'var(--bg-surface)' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge badge-mono font-mono" style={{ marginBottom: '1rem' }}>
                PILAR {selectedPilar.title.split('.')[0]}
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {selectedPilar.subtitle}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {selectedPilar.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.75rem' }}>
                {selectedPilar.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9375rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-white)' }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a href="#criar-agenda" className="btn btn-primary btn-sm">
                <span>Experimentar {selectedPilar.title.split('.')[1]}</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Direct Voice Quote Card */}
            <div style={{
              backgroundColor: 'var(--bg-main)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                TOM DE VOZ clik.
              </div>
              <div className="font-mono" style={{
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
                lineHeight: 1.4,
                margin: '1.5rem 0'
              }}>
                "{selectedPilar.monoQuote}"
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                Informações diretas, sem jargões corporativos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
