import React, { useState } from 'react';
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';

const faqItems = [
  {
    q: 'Meu cliente precisa baixar aplicativo ou criar conta para agendar?',
    a: 'Não. Seu cliente só clica no seu link (no Instagram ou WhatsApp), escolhe o serviço, o dia e o horário livre, informa nome, telefone e e-mail e pronto. Leva menos de 20 segundos direto no navegador do celular.',
  },
  {
    q: 'Como fico sabendo quando um cliente agenda, remarca ou cancela?',
    a: 'No mesmo instante você recebe todos os detalhes no seu e-mail (e seu cliente também recebe o comprovante com número de protocolo). Além disso, o horário já fica registrado e sincronizado na sua agenda para evitar qualquer choque.',
  },
  {
    q: 'Tenho mais de um barbeiro ou profissional. Dá para separar as agendas?',
    a: 'Sim! Você adiciona cada colaborador, escolhe quais serviços ele atende, configura os dias da semana, horário de entrada/saída, pausa de almoço e até folgas pontuais no calendário.',
  },
  {
    q: 'E se o cliente pedir horário presencialmente ou pelo telefone?',
    a: 'Você clica em "+ Novo agendamento" no seu painel e lança manualmente em poucos segundos. Esse horário já some da página pública na hora para ninguém marcar por cima.',
  },
  {
    q: 'É difícil de configurar para quem nunca usou sistema?',
    a: 'Zero complicação. Em cerca de 3 a 5 minutos você cadastra seus serviços com valor e duração, marca seus horários de trabalho e seu link já está funcionando.',
  },
  {
    q: 'Preciso colocar cartão de crédito para criar a conta gratuita?',
    a: 'Não. Você cria sua conta grátis sem informar cartão, testa no seu dia a dia real e só escolhe um plano pago quando — e se — fizer sentido para o seu volume.',
  },
  {
    q: 'Funciona apenas para barbearias?',
    a: 'A clik. foi desenhada para qualquer negócio que vive de horários marcados: barbearias, salões, estúdios de estética, lash/nail designers, sobrancelha, massoterapeutas, estúdios de tatuagem e clínicas.',
  },
  {
    q: 'Tem fidelidade ou multa se eu quiser cancelar depois?',
    a: 'Nenhuma. Você cancela quando quiser direto pelo painel, sem precisar ligar para ninguém e sem letras miúdas.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        {/* FAQ Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.75rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>
            <span>PERGUNTAS FREQUENTES</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            Dúvidas diretas, respostas sem enrolação.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Tudo o que você precisa saber antes de colocar sua agenda para trabalhar por você.
          </p>
        </div>

        {/* Accordion */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto 4.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
          }}
        >
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: isOpen ? 'var(--bg-surface)' : 'var(--bg-main)',
                  border: `1px solid ${isOpen ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'border-color 180ms ease, background-color 180ms ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.15rem 1.35rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: '0.94rem', fontWeight: 600, lineHeight: 1.4 }}>
                    {item.q}
                  </span>
                  <span
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--accent-green-dim)' : 'var(--bg-elevated)',
                      border: `1px solid ${
                        isOpen ? 'var(--accent-green-border)' : 'var(--border-default)'
                      }`,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease',
                    }}
                  >
                    <ChevronDown
                      size={14}
                      color={isOpen ? 'var(--accent-green)' : 'var(--text-muted)'}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.35rem 1.25rem',
                      fontSize: '0.885rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '0.95rem',
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* High-Conversion Final Closing Block */}
        <div
          style={{
            backgroundColor: '#fafafa',
            color: '#09090b',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2.25rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)',
            textAlign: 'center',
            boxShadow: '0 28px 80px rgba(255, 255, 255, 0.07)',
          }}
        >
          <div
            className="font-mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#09090b',
              color: '#fafafa',
              padding: '0.32rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              marginBottom: '1.25rem',
            }}
          >
            <span className="pulse-dot" />
            <span>SUA AGENDA É SÓ O COMEÇO</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.85rem, 4.2vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.1,
              color: '#09090b',
              maxWidth: '720px',
              margin: '0 auto 0.9rem',
            }}
          >
            Pare de perder clientes enquanto você está trabalhando.
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.98rem, 1.8vw, 1.125rem)',
              color: '#3f3f46',
              maxWidth: '560px',
              margin: '0 auto 2rem',
              lineHeight: 1.55,
            }}
          >
            Crie seu link em 3 minutos, receba tudo no seu e-mail integrado com a sua agenda e nunca
            mais deixe um horário vago por falta de resposta.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.85rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem',
            }}
          >
            <a
              href="https://app.useclik.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-mobile-full"
              style={{
                backgroundColor: '#09090b',
                color: '#fafafa',
                fontWeight: 700,
                padding: '1rem 2rem',
              }}
            >
              <span>Perca menos clientes</span>
              <ArrowRight size={18} color="#23ca82" />
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem 1.5rem',
              flexWrap: 'wrap',
              fontSize: '0.82rem',
              color: '#52525b',
              fontWeight: 500,
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={15} color="#09090b" /> Plano gratuito disponível
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={15} color="#09090b" /> Sem cartão de crédito
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={15} color="#09090b" /> Dados protegidos (LGPD)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
