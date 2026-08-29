import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'É difícil de configurar?',
    a: 'Não. Em menos de 5 minutos você cadastra seus serviços, define sua disponibilidade e já tem um link de agendamento pronto para compartilhar com seus clientes. Sem manual técnico, sem suporte necessário para começar.'
  },
  {
    q: 'Preciso de cartão de crédito para começar?',
    a: 'Não. O plano gratuito não exige cartão. Você cria sua conta, configura tudo e só decide se quer um plano pago quando — e se — fizer sentido para o seu negócio.'
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. Sem multa, sem burocracia, sem aquela ligação chata para cancelar. Se você decidir sair, é só fazer isso pelo próprio painel. Seus dados ficam disponíveis por 30 dias após o cancelamento.'
  },
  {
    q: 'Funciona para o meu tipo de negócio?',
    a: 'Se o seu negócio funciona com horários e atendimentos presenciais — barbearia, salão, nail designer, lash, sobrancelha, massagem, estúdio de tatuagem, clínica estética, personal trainer — a clik foi feita para você. O produto não é exclusivo para beleza: serve para qualquer negócio que vive de agenda.'
  },
  {
    q: 'Como meus clientes fazem o agendamento?',
    a: 'Você recebe um link próprio (por exemplo: useclik.com.br/seu-negocio). Compartilha no WhatsApp, no Instagram ou onde preferir. Seu cliente clica, escolhe o serviço, o profissional, o dia e o horário disponível — e confirma. Sem precisar falar com você.'
  },
  {
    q: 'Meus dados e os dos meus clientes ficam seguros?',
    a: 'Sim. Os dados são armazenados com criptografia e seguem as diretrizes da LGPD. Você tem controle total sobre as informações do seu negócio e dos seus clientes.'
  },
  {
    q: 'O que acontece quando atinjo o limite do plano gratuito?',
    a: 'Você é avisado com antecedência. Nenhum agendamento é bloqueado ou perdido de surpresa. Você decide, com calma, se quer fazer upgrade. Sem susto.'
  },
  {
    q: 'Tem suporte se eu tiver dificuldades?',
    a: 'Sim, com atendimento em português. No plano Free o suporte é padrão. No Pro, o atendimento é prioritário. No Scale, você tem um gerente de conta dedicado. Nenhum cliente fica sem resposta.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section">
      <div className="container">

        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-title-sm">PERGUNTAS FREQUENTES</div>
          <h2 className="section-heading">
            Ficou alguma dúvida?
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Aqui estão as respostas mais comuns de quem está pensando em começar.
          </p>
        </div>

        <div style={{
          maxWidth: '760px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: isOpen ? 'var(--bg-surface)' : 'var(--bg-main)',
                  border: `1px solid ${isOpen ? 'var(--border-strong)' : 'var(--border-subtle)'}`,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'background-color 200ms, border-color 200ms'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-primary)',
                    textAlign: 'left'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    lineHeight: 1.4,
                    color: isOpen ? 'var(--text-primary)' : 'var(--text-primary)'
                  }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'var(--border-strong)' : 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'transform 200ms, background-color 200ms',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    <ChevronDown size={14} color="var(--text-muted)" />
                  </div>
                </button>

                <div style={{
                  maxHeight: isOpen ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 300ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  <div style={{
                    padding: '0 1.5rem 1.375rem 1.5rem',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '1rem'
                  }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA prompt */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
            Ainda com dúvidas? Comece de graça e veja você mesmo.
          </p>
          <a
            href="https://app.useclik.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ textDecoration: 'none', display: 'inline-flex' }}
          >
            <span>Criar minha conta grátis</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
