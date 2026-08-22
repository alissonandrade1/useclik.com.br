import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

export default function TransformationSection() {
  return (
    <section id="transformacao" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-title-sm">TRANSFORMAÇÃO REAL</div>
          <h2 className="section-heading" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
            <span>Antes</span>
            <span style={{ color: 'var(--text-muted)' }}>→</span>
            <span>Depois do</span>
            <Logo size="medium" />
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Veja a diferença entre gerenciar sua rotina de forma improvisada ou ter uma operação sob controle.
          </p>
        </div>

        <div className="grid-2">
          {/* ANTES */}
          <div className="clik-card" style={{
            borderColor: 'rgba(239, 68, 68, 0.25)',
            backgroundColor: 'rgba(239, 68, 68, 0.02)',
            padding: 'clamp(1.25rem, 3vw, 2rem)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <XCircle size={24} color="var(--accent-status-red)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-status-red)' }}>
                Antes (Operação Espalhada)
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { title: 'Procurar horários manualmente', desc: 'Mensagens interrompendo o atendimento a todo momento para checar disponibilidade.' },
                { title: 'Conversas e contatos espalhados', desc: 'Histórico de clientes perdido entre conversas antigas e anotações soltas.' },
                { title: 'Clientes esquecidos', desc: 'Nenhum acompanhamento após o serviço. Se o cliente não voltar, ninguém percebe.' },
                { title: 'Falta de visão sobre o negócio', desc: 'Não saber exatamente quanto faturou ou qual serviço é mais rentável.' },
                { title: 'Não saber quanto perdeu', desc: 'No-shows e cancelamentos acontecem sem nenhum controle do impacto financeiro.' },
              ].map((item, index) => (
                <div key={index} style={{
                  padding: '0.875rem 1rem',
                  backgroundColor: 'var(--bg-main)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(239, 68, 68, 0.15)'
                }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    ❌ {item.title}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEPOIS */}
          <div className="clik-card" style={{
            borderColor: 'rgba(16, 185, 129, 0.3)',
            backgroundColor: 'rgba(16, 185, 129, 0.02)',
            padding: 'clamp(1.25rem, 3vw, 2rem)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <CheckCircle2 size={24} color="var(--accent-status-green)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-status-green)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <span>Depois do</span>
                <Logo size="small" />
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { title: 'Clientes agendam sozinhos 24/7', desc: 'Link próprio compartilhado no Instagram e WhatsApp onde o cliente escolhe horário e serviço.' },
                { title: 'Tudo centralizado em um só lugar', desc: 'Agenda, clientes, equipe e resultados reunidos em uma tela clara.' },
                { title: 'Histórico salvo e acessível', desc: 'Conheça a frequência, preferências e valor total gerado por cada cliente.' },
                { title: 'Resultados visíveis em tempo real', desc: 'Acompanhe faturamento, ticket médio e produção por profissional.' },
                { title: 'Oportunidades fáceis de identificar', desc: 'Alertas automáticos para clientes que não voltam há mais de 30 dias.' },
              ].map((item, index) => (
                <div key={index} style={{
                  padding: '0.875rem 1rem',
                  backgroundColor: 'var(--bg-main)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                    ✅ {item.title}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
