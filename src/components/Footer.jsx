import React from 'react';
import Logo from './Logo';

const trustSeals = [
  { icon: '🔒', label: 'Dados protegidos' },
  { icon: '✓', label: 'LGPD compliant' },
  { icon: '○', label: 'Sem cartão de crédito' },
  { icon: '↺', label: 'Cancele quando quiser' },
  { icon: '⚡', label: 'Setup em 5 minutos' },
];

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
          marginBottom: '3.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.625rem 2rem',
            flexWrap: 'wrap'
          }}>
            {trustSeals.map((seal, i) => (
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
                  flexShrink: 0,
                  lineHeight: 1
                }}>
                  {seal.icon}
                </span>
                {seal.label}
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>

          {/* Brand Info */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <Logo size="medium" />
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1.25rem',
              maxWidth: '280px'
            }}>
              A plataforma para negócios que vivem de agenda. Centralize agendamentos, clientes, equipe, financeiro e relacionamento.
            </p>
            <div className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              useclik.com.br
            </div>
          </div>

          {/* Navigation */}
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
              {[
                { href: '#transformacao', label: 'Antes & Depois' },
                { href: '#como-funciona', label: 'Como Funciona' },
                { href: '#ganhos', label: 'Resultados' },
                { href: '#calculadora', label: 'Calculadora' },
                { href: '#faq', label: 'Perguntas Frequentes' },
              ].map((link, i) => (
                <a key={i} href={link.href} style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  transition: 'color 150ms'
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.target.style.color = 'inherit'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Product & Account */}
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
              Produto & Conta
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <a href="#planos" style={{ color: 'inherit', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.target.style.color = 'inherit'}>
                Planos & Preços
              </a>
              <a href="#segmentos" style={{ color: 'inherit', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.target.style.color = 'inherit'}>
                Para quem é
              </a>
              <a
                href="https://app.useclik.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
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
          <div>© {new Date().getFullYear()} clik. Todos os direitos reservados.</div>
          <div className="font-mono" style={{ letterSpacing: '0.02em' }}>
            "Sua agenda é só o começo."
          </div>
        </div>

      </div>
    </footer>
  );
}
