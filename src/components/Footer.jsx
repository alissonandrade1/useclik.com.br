import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [showStickyMobile, setShowStickyMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowStickyMobile(window.scrollY > 520);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer
        style={{
          backgroundColor: 'var(--bg-void)',
          borderTop: '1px solid var(--border-subtle)',
          padding: '3.5rem 0 5.5rem',
          color: 'var(--text-secondary)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '2.5rem',
              flexWrap: 'wrap',
              paddingBottom: '2.5rem',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ maxWidth: '320px' }}>
              <Logo size="medium" />
              <p
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.75rem',
                  lineHeight: 1.6,
                }}
              >
                A plataforma para negócios que vivem de agenda. Agendamentos 24h, notificações por
                e-mail, agenda sincronizada, equipe e CRM em um único lugar.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '0.05em',
                  }}
                >
                  PRODUTO
                </span>
                <a href="#dor-solucao" style={{ color: 'var(--text-muted)' }}>
                  A Solução
                </a>
                <a href="#sistema" style={{ color: 'var(--text-muted)' }}>
                  Funcionalidades
                </a>
                <a href="#email-agenda" style={{ color: 'var(--text-muted)' }}>
                  E-mail & Agenda
                </a>
                <a href="#avaliacoes" style={{ color: 'var(--text-muted)' }}>
                  Avaliações
                </a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '0.05em',
                  }}
                >
                  CONTA
                </span>
                <a href="#planos" style={{ color: 'var(--text-muted)' }}>
                  Planos & Preços
                </a>
                <a href="#faq" style={{ color: 'var(--text-muted)' }}>
                  Perguntas Frequentes
                </a>
                <a
                  href="https://app.useclik.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-green)', fontWeight: 600 }}
                >
                  Criar conta grátis
                </a>
                <a
                  href="https://app.useclik.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-primary)', fontWeight: 600 }}
                >
                  Fazer login →
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              paddingTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
            }}
          >
            <span>© {new Date().getFullYear()} clik. Todos os direitos reservados.</span>
            <span className="font-mono">useclik.com.br · "Sua agenda é só o começo."</span>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom CTA Bar (CRO Boost on Smartphones) */}
      {showStickyMobile && (
        <div
          className="mobile-only"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 95,
            backgroundColor: 'rgba(9, 9, 11, 0.92)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: '1px solid var(--border-default)',
            padding: '0.7rem 1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fafafa' }}>
              Pare de perder horários
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
              Comece grátis · Sem cartão
            </div>
          </div>
          <a
            href="https://app.useclik.com.br/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-emerald btn-sm"
            style={{ flexShrink: 0 }}
          >
            <span>Perca menos clientes</span>
            <ArrowRight size={14} />
          </a>
        </div>
      )}
    </>
  );
}
