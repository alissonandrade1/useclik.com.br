import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TransformationSection() {
  return (
    <section id="transformacao" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <div className="section-title-sm">A TRANSFORMAÇÃO OPERACIONAL</div>
          <h2 className="section-heading">
            De uma operação espalhada para um negócio sob controle.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A maioria dos negócios trabalha reagindo ao caos. O clik. centraliza sua rotina para você voltar a ter domínio sobre seu tempo e faturamento.
          </p>
        </div>

        <div className="grid-2">
          {/* ANTES DA CLIK */}
          <div className="clik-card" style={{
            borderColor: 'rgba(239, 68, 68, 0.25)',
            backgroundColor: 'rgba(239, 68, 68, 0.02)',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <XCircle size={24} color="var(--accent-status-red)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-status-red)' }}>
                Antes do clik. (Operação Espalhada)
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'WhatsApp fragmentado', desc: 'Atendimentos interrompidos para responder se "tem horário disponível".' },
                { title: 'Memória e cadernos', desc: 'Contatos e histórico dos clientes espalhados em papéis e mensagens antigas.' },
                { title: 'Financeiro cego', desc: 'Falta de clareza sobre quanto foi faturado e quanto foi perdido com faltas.' },
                { title: 'Equipe desorganizada', desc: 'Dificuldade para saber a ocupação exata e comissões dos profissionais.' },
                { title: 'Clientes esquecidos', desc: 'Nenhum acompanhamento após o atendimento. Se o cliente não voltar, ninguém percebe.' },
              ].map((item, index) => (
                <div key={index} style={{
                  padding: '1rem',
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

          {/* DEPOIS DA CLIK */}
          <div className="clik-card" style={{
            borderColor: 'rgba(16, 185, 129, 0.3)',
            backgroundColor: 'rgba(16, 185, 129, 0.02)',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <CheckCircle2 size={24} color="var(--accent-status-green)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-status-green)' }}>
                Depois do clik. (Operação Centralizada)
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Link próprio de agendamento 24h', desc: 'Seus clientes escolhem o serviço, profissional e horário sozinhos.' },
                { title: 'Base ativa de clientes', desc: 'Histórico completo, frequência, LTV e alertas de clientes sumidos.' },
                { title: 'Painel financeiro transparente', desc: 'Faturamento em tempo real, ticket médio e cálculo exato de no-shows.' },
                { title: 'Gestão clara de equipe', desc: 'Escala, disponibilidade e cálculo de atendimentos por profissional.' },
                { title: 'CRM focado em recorrência', desc: 'Notificações inteligentes para trazer o cliente de volta no tempo certo.' },
              ].map((item, index) => (
                <div key={index} style={{
                  padding: '1rem',
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
