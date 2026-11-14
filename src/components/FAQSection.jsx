import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'O cliente precisa baixar app ou criar senha?',
    a: 'Não. Ele abre seu link no celular, escolhe o horário e confirma em 20 segundos.',
  },
  {
    q: 'Como recebo os avisos de agendamento?',
    a: 'Chega na hora no seu e-mail (e comprovante pro cliente), já travando a vaga na sua agenda.',
  },
  {
    q: 'Funciona para equipe com mais de um profissional?',
    a: 'Sim. Cada colaborador tem seus próprios serviços, expediente e pausas separadas.',
  },
  {
    q: 'Consigo lançar encaixes manualmente?',
    a: 'Sim, pelo botão "+ Novo" você registra em segundos e bloqueia o horário no link público.',
  },
  {
    q: 'Precisa de cartão ou tem fidelidade?',
    a: 'Sem cartão para começar no plano grátis e cancelamento livre em 1 clique.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--bg-main)', borderBottom: 'none' }}>
      <div className="container">
        <div className="faq-layout" style={{ marginBottom: '2.25rem' }}>
          <div>
            <h2 className="section-title">Perguntas frequentes</h2>
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '0.8rem 0',
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
                    <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{item.q}</span>
                    <ChevronDown
                      size={15}
                      color="var(--text-muted)"
                      style={{
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 150ms ease',
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        paddingBottom: '0.8rem',
                        fontSize: '0.825rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
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

        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <strong style={{ fontSize: '1.05rem', display: 'block' }}>
              Pronto para parar de perder horários?
            </strong>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Grátis para começar · Configura em 5 minutos
            </span>
          </div>

          <a
            href="https://app.useclik.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-full-xs"
          >
            <span>Perca menos clientes</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
