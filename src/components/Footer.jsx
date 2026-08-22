import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-main)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '4rem 0 2.5rem 0',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <Logo size="medium" />
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
              Plataforma de gestão para negócios de serviços por agendamento. Centralize agendamentos, clientes, equipe, financeiro e relacionamento.
            </p>

            <div className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              useclik.com.br
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                NAVEGAÇÃO
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
                <a href="#transformacao" style={{ color: 'inherit', textDecoration: 'none' }}>Antes & Depois</a>
                <a href="#como-funciona" style={{ color: 'inherit', textDecoration: 'none' }}>Como Funciona</a>
                <a href="#solucoes" style={{ color: 'inherit', textDecoration: 'none' }}>Soluções</a>
                <a href="#ganhos" style={{ color: 'inherit', textDecoration: 'none' }}>Resultados Concretos</a>
                <a href="#calculadora" style={{ color: 'inherit', textDecoration: 'none' }}>Calculadora</a>
              </div>
            </div>

            <div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                PRODUTO
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
                <a href="#planos" style={{ color: 'inherit', textDecoration: 'none' }}>Planos & Preços</a>
                <a href="#segmentos" style={{ color: 'inherit', textDecoration: 'none' }}>Para quem é</a>
                <a href="#criar-agenda" style={{ color: 'inherit', textDecoration: 'none' }}>Criar minha agenda</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
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
          <div>
            © {new Date().getFullYear()} clik. Todos os direitos reservados.
          </div>
          <div>
            "Sua agenda é só o começo."
          </div>
        </div>
      </div>
    </footer>
  );
}
