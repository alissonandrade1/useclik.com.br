import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

export default function TransformationSection() {
  return (
    <section id="transformacao" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header: Clean & Direct "Antes & Depois" */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-title-sm">TRANSFORMAÇÃO REAL</div>
          <h2 className="section-heading">
            Antes & Depois
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Veja a diferença entre gerenciar sua rotina de forma improvisada ou ter uma operação sob controle.
          </p>
        </div>

        {/* Fluid Side-by-Side Comparison */}
        <div className="grid-2" style={{ gap: '2rem', alignItems: 'stretch' }}>
          {/* ANTES */}
          <div style={{
            backgroundColor: 'var(--bg-main)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
                minHeight: '52px'
              }}>
                <XCircle size={22} color="var(--accent-status-red)" style={{ flexShrink: 0 }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Antes <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Operação Espalhada)</span>
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'Procurar horários manualmente', desc: 'Atendimento interrompido a todo momento para responder disponibilidade no WhatsApp.' },
                  { title: 'Conversas e contatos espalhados', desc: 'Histórico dos clientes perdido entre papéis, conversas antigas e bloco de notas.' },
                  { title: 'Clientes esquecidos', desc: 'Nenhum acompanhamento após o serviço. Se o cliente não voltar, ninguém percebe.' },
                  { title: 'Falta de visão sobre o negócio', desc: 'Não saber exatamente quanto faturou no mês ou qual serviço traz mais retorno.' },
                  { title: 'Não saber quanto perdeu com faltas', desc: 'No-shows e cancelamentos acontecem sem nenhum controle do impacto no caixa.' },
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    gap: '0.875rem',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{ color: 'var(--accent-status-red)', fontWeight: 700, fontSize: '0.875rem', marginTop: '2px', flexShrink: 0 }}>✕</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.125rem' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DEPOIS DO CLIK */}
          <div style={{
            backgroundColor: 'var(--bg-main)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
                minHeight: '52px'
              }}>
                <CheckCircle2 size={22} color="var(--accent-status-green)" style={{ flexShrink: 0 }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap' }}>
                  <span>Depois do</span>
                  <Logo size="small" />
                  <span style={{ fontSize: '0.875rem', color: 'var(--accent-status-green)', fontWeight: 500, marginLeft: '0.25rem' }}>(Centralizada)</span>
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'Clientes agendam sozinhos 24/7', desc: 'Link próprio compartilhado no Instagram e WhatsApp onde o cliente escolhe serviço e horário.' },
                  { title: 'Tudo centralizado em um só lugar', desc: 'Agenda, clientes, equipe e resultados reunidos em uma tela clara e inteligente.' },
                  { title: 'Histórico salvo e acessível', desc: 'Conheça a frequência, preferências e valor total gerado (LTV) por cada cliente.' },
                  { title: 'Resultados visíveis em tempo real', desc: 'Acompanhe faturamento, ticket médio e produção por profissional sem planilhas.' },
                  { title: 'Oportunidades de retorno', desc: 'Alertas inteligentes para clientes que não agendam há mais de 30 dias.' },
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    gap: '0.875rem',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{ color: 'var(--accent-status-green)', fontWeight: 700, fontSize: '0.875rem', marginTop: '2px', flexShrink: 0 }}>✓</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.125rem' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
