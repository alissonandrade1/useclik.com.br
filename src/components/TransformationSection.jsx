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
    desc: 'Quem já veio? Quando foi a última vez? Qual serviço fez? Você não sabe. E perde oportunidades por isso.'
  },
  {
    title: 'Clientes que somem sem você perceber',
    desc: 'O Marcos não volta há 45 dias. A Ana cancelou duas vezes seguidas. Você só descobre tarde demais — ou nunca.'
  },
  {
    title: 'Resultado financeiro no feeling',
    desc: 'No fim do mês você tenta lembrar quanto faturou. Soma no papel. Ainda assim não sabe qual serviço está valendo mais.'
  },
  {
    title: 'No-show sem impacto visível — mas com custo real',
    desc: 'Cada falta é um horário vazio. Cada horário vazio é dinheiro que não entra. Isso acumula mais do que parece.'
  }
];

const afterItems = [
  {
    title: 'Clientes agendam sozinhos, 24 horas por dia',
    desc: 'Link único compartilhado no Instagram e WhatsApp. O cliente escolhe serviço, profissional e horário — sem você precisar responder.'
  },
  {
    title: 'Histórico de cada cliente sempre acessível',
    desc: 'Quantas vezes veio, quais serviços fez, quanto gastou, quando foi a última visita. Tudo numa tela.'
  },
  {
    title: 'Alertas de clientes que não voltaram',
    desc: 'A CLiK identifica quem está sumido há mais de 30 dias. Você decide agir — antes de perder o cliente de vez.'
  },
  {
    title: 'Faturamento, ticket médio e produção por profissional',
    desc: 'Veja quanto entrou no mês, qual serviço gerou mais receita e quem da equipe está performando melhor.'
  },
  {
    title: 'No-show visível e com custo calculado',
    desc: 'Cada falta aparece no sistema. Você vê o impacto acumulado e consegue agir antes que vire um problema maior.'
  }
];

export default function TransformationSection() {
  return (
    <section id="transformacao" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-title-sm">ANTES E DEPOIS</div>
          <h2 className="section-heading">
            Sua rotina agora. E com a CLiK.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Não é sobre ter um sistema. É sobre sair do modo de apagar incêndio e finalmente entender o que está acontecendo no seu negócio.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid-2" style={{ gap: '1.5rem', alignItems: 'stretch' }}>

          {/* ANTES */}
          <div style={{
            backgroundColor: 'var(--bg-main)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '2rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-status-red-bg)',
                border: '1px solid rgba(239,68,68,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <XCircle size={16} color="var(--accent-status-red)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  Hoje
                </h3>
                <span style={{ fontSize: '0.8125rem', color: 'var(--accent-status-red)', fontWeight: 500 }}>
                  Operação espalhada
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.375rem' }}>
              {beforeItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                  <span style={{
                    color: 'var(--accent-status-red)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    marginTop: '3px',
                    flexShrink: 0,
                    opacity: 0.8
                  }}>✕</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
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
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '2rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-status-green-bg)',
                border: '1px solid rgba(16,185,129,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <CheckCircle2 size={16} color="var(--accent-status-green)" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  Com a
                </h3>
                <Logo size="small" />
                <span style={{ fontSize: '0.8125rem', color: 'var(--accent-status-green)', fontWeight: 500 }}>
                  Operação sob controle
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.375rem' }}>
              {afterItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                  <span style={{
                    color: 'var(--accent-status-green)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    marginTop: '3px',
                    flexShrink: 0
                  }}>✓</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
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
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href="https://app.useclik.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-mobile-full"
                style={{ textDecoration: 'none', display: 'inline-flex' }}
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
