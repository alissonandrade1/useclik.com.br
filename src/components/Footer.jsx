import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-main)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '4.5rem 0 2.5rem 0',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">

        {/* Trust Seals Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(1.25rem, 3vw, 2.5rem)',
          flexWrap: 'wrap',
          marginBottom: '3.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          {[
            { icon: '🔒', label: 'Dados protegidos' },
            { icon: '✓', label: 'LGPD compliant' },
            { icon: '○', label: 'Sem cartão de crédito' },
            { icon: '↺', label: 'Cancele quando quiser' },
            { icon: '⚡', label: 'Setup em 5 minutos' },
          ].map((seal, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              whiteSpace: 'nowrap'
            }}>
              <span style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                flexShrink: 0
              }}>
                {seal.icon}
              </span>
              {seal.label}
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>

          {/* Brand Info */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <Logo size="medium" />
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1.25rem'
            }}>
              A plataforma para negócios que vivem de agenda. Centralize agendamentos, clientes, equipe, financeiro e relacionamento.
            </p>
            <div className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              useclik.com.br
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Navegação
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
                <a href="#transformacao" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.target.style.color = 'inherit'}>
                  Antes &amp; Depois
                </a>
                <a href="#como-funciona" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.target.style.color = 'inherit'}>
                  Como Funciona
                </a>
                <a href="#ganhos" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.target.style.color = 'inherit'}>
                  Resultados
                </a>
                <a href="#calculadora" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.target.style.color = 'inherit'}>
                  Calculadora
                </a>
                <a href="#faq" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.target.style.color = 'inherit'}>
                  Perguntas Frequentes
                </a>
              </div>
            </div>

            <div>
              <div style={{
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Produto &amp; Conta
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
                <a href="#planos" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.target.style.color = 'inherit'}>
                  Planos &amp; Preços
                </a>
                <a href="#segmentos" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.target.style.color = 'inherit'}>
                  Para quem é
                </a>
                <a
                  href="https://app.useclik.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.target.style.color = 'inherit'}
                >
                  Criar conta grátis
                </a>
                <a
                  href="https://app.useclik.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}
                >
                  Fazer login →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8125rem',
          color: 'var(--text-muted)'
        }}>
          <div>© {new Date().getFullYear()} CLiK. Todos os direitos reservados.</div>
          <div className="font-mono" style={{ letterSpacing: '0.02em' }}>
            "Sua agenda é só o começo."
          </div>
        </div>

      </div>
    </footer>
  );
}
