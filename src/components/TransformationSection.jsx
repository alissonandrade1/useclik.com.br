import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const beforeItems = [
  {
    title: 'WhatsApp travado com perguntas de horário',
    desc: 'Você para o que está fazendo para checar se tem vaga às 15h de quinta. Toda hora.'
  },
  {
    title: 'Histórico dos clientes só na sua cabeça',
    desc: 'Quem já veio? Quando foi a última vez? Qual serviço fez? Você não sabe — e perde oportunidades por isso.'
  },
  {
    title: 'Clientes que somem sem você perceber',
    desc: 'O Marcos não volta há 45 dias. A Ana cancelou duas vezes seguidas. Você só descobre tarde demais.'
  },
  {
    title: 'Faturamento no feeling',
    desc: 'No fim do mês você tenta lembrar quanto faturou. Soma no papel. Ainda assim não tem certeza.'
  },
  {
    title: 'No-show sem custo visível — mas real',
    desc: 'Cada falta é um horário vazio. Cada horário vazio é dinheiro que não entrou. Isso acumula mais do que parece.'
  }
];

const afterItems = [
  {
    title: 'Clientes agendam sozinhos, 24h por dia',
    desc: 'Link único compartilhado onde quiser. O cliente escolhe serviço, profissional e horário — sem te chamar.'
  },
  {
    title: 'Histórico de cada cliente sempre acessível',
    desc: 'Quantas vezes veio, quais serviços fez, quanto gastou, quando foi a última visita. Tudo numa tela.'
  },
  {
    title: 'Alertas de clientes que não voltaram',
    desc: 'A clik identifica quem está sumido há mais de 30 dias. Você decide agir antes de perder o cliente.'
  },
  {
    title: 'Faturamento, ticket médio e produção da equipe',
    desc: 'Veja quanto entrou no mês, qual serviço gerou mais e quem da equipe está performando melhor.'
  },
  {
    title: 'No-show visível com impacto calculado',
    desc: 'Cada falta aparece no sistema com o custo real. Você vê o acumulado e consegue agir com dados.'
  }
];

export default function TransformationSection() {
  return (
    <section id="transformacao" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-title-sm">ANTES E DEPOIS</div>
          <h2 className="section-heading">
            Sua rotina agora. E com a clik.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Não é sobre ter um sistema. É sobre sair do modo de apagar incêndio e finalmente entender o que está acontecendo no seu negócio.
          </p>
        </div>

        {/* Comparison — mobile: vertical stack with clear labels */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          alignItems: 'start'
        }}>

          {/* ANTES */}
          <div style={{
            backgroundColor: 'var(--bg-main)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden'
          }}>
            {/* Label header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '1rem 1.5rem',
              backgroundColor: 'rgba(239,68,68,0.06)',
              borderBottom: '1px solid rgba(239,68,68,0.15)'
            }}>
              <XCircle size={18} color="var(--accent-status-red)" />
              <div>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Hoje</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--accent-status-red)', fontWeight: 500, marginLeft: '0.5rem' }}>
                  Operação espalhada
                </span>
              </div>
            </div>

            <div style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              {beforeItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{
                    color: 'var(--accent-status-red)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    marginTop: '2px',
                    flexShrink: 0,
                    opacity: 0.8
                  }}>✕</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEPOIS */}
          <div style={{
            backgroundColor: 'var(--bg-main)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
          }}>
            {/* Label header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '1rem 1.5rem',
              backgroundColor: 'rgba(16,185,129,0.06)',
              borderBottom: '1px solid rgba(16,185,129,0.15)'
            }}>
              <CheckCircle2 size={18} color="var(--accent-status-green)" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Com a</span>
                <Logo size="small" />
                <span style={{ fontSize: '0.8125rem', color: 'var(--accent-status-green)', fontWeight: 500 }}>
                  Operação sob controle
                </span>
              </div>
            </div>

            <div style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              {afterItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{
                    color: 'var(--accent-status-green)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    marginTop: '2px',
                    flexShrink: 0
                  }}>✓</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div style={{
              padding: '1rem 1.5rem 1.5rem 1.5rem',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <a
                href="https://app.useclik.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <span>Quero ter controle do meu negócio</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
