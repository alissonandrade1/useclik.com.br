import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'Meu cliente precisa baixar aplicativo ou criar senha?',
    a: 'Não. Ele abre seu link direto no navegador do celular, escolhe o serviço, o dia e o horário livre, preenche nome, WhatsApp e e-mail e confirma em cerca de 20 segundos.',
  },
  {
    q: 'Como recebo os avisos de novos agendamentos ou cancelamentos?',
    a: 'Tudo chega na hora no seu e-mail (e seu cliente também recebe o comprovante com protocolo). O horário fica registrado e sincronizado na sua agenda para evitar conflito.',
  },
  {
    q: 'Tenho mais de um barbeiro ou profissional. As agendas ficam separadas?',
    a: 'Sim. Cada colaborador tem seus próprios serviços, dias de trabalho, pausa de almoço e folgas no calendário.',
  },
  {
    q: 'Consigo lançar horários manualmente se o cliente pedir no balcão?',
    a: 'Sim. Pelo botão "+ Novo agendamento" você registra encaixes ou ligações em segundos, bloqueando aquela vaga automaticamente na página pública.',
  },
  {
    q: 'Preciso cadastrar cartão de crédito para usar o plano grátis?',
    a: 'Não. Você cria a conta grátis sem cartão, coloca seu link no ar em 5 minutos e só muda de plano se o seu volume crescer.',
  },
  {
    q: 'Funciona só para barbearias?',
    a: 'Atende qualquer negócio que trabalhe com hora marcada: barbearias, salões, estúdios de estética, lash e nail designers, sobrancelha, massagem, tatuagem e clínicas.',
  },
  {
    q: 'Tem multa ou fidelidade para cancelar?',
    a: 'Nenhuma. Você cancela direto pelo painel quando quiser, sem precisar ligar para suporte.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--bg-main)', borderBottom: 'none' }}>
      <div className="container">
        <div className="faq-layout" style={{ marginBottom: '2.75rem' }}>
          {/* Left Sticky/Compact Intro */}
          <div>
            <span className="section-label">faq</span>
            <h2 className="section-title" style={{ marginBottom: '0.6rem' }}>
              Perguntas frequentes
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              As dúvidas mais comuns de quem está saindo do papel ou organizando os agendamentos do
              WhatsApp.
            </p>
          </div>

          {/* Right Clean Hairline Accordion */}
          <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '0.9rem 0',
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
                    <span style={{ fontSize: '0.885rem', fontWeight: 600, lineHeight: 1.4 }}>
                      {item.q}
                    </span>
                    <ChevronDown
                      size={15}
                      color="var(--text-muted)"
                      style={{
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 160ms ease',
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        paddingBottom: '0.95rem',
                        fontSize: '0.84rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.58,
                        maxWidth: '620px',
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Architectural Closing Strip */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.25rem, 3vw, 1.85rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                marginBottom: '0.25rem',
              }}
            >
              Pare de perder clientes enquanto está ocupado atendendo.
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              Crie seu link em 5 minutos, receba tudo no seu e-mail e mantenha sua agenda sob controle.
            </p>
          </div>

          <a
            href="https://app.useclik.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg btn-full-xs"
          >
            <span>Perca menos clientes</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
