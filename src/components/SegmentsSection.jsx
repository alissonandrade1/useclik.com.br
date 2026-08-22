import React from 'react';
import { Scissors, Sparkles, Eye, Feather, Heart, Paintbrush } from 'lucide-react';

const segmentos = [
  { icon: Scissors, name: 'Barbearias', desc: 'Agendamentos rápidos de cortes, barba e pacotes recorrentes.' },
  { icon: Sparkles, name: 'Salões de Beleza', desc: 'Organização de múltiplos profissionais, serviços e horários da equipe.' },
  { icon: Eye, name: 'Studios de Estética & Sobrancelhas', desc: 'Controle preciso de procedimentos, duração e histórico de clientes.' },
  { icon: Feather, name: 'Lash & Nail Designers', desc: 'Agendamento de manutenções periódicas e lembretes de retorno.' },
  { icon: Heart, name: 'Massagistas & Terapias', desc: 'Gestão de horários com tempo de tolerância e confirmação prévia.' },
  { icon: Paintbrush, name: 'Estúdios de Tatuagem', desc: 'Sessões com horários definidos e organização de agenda.' },
];

export default function SegmentsSection() {
  return (
    <section id="segmentos" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <div className="section-title-sm">QUEM PRECISA DE MAIS CONTROLE?</div>
          <h2 className="section-heading">
            Se o seu dia funciona por horários.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Se o seu negócio depende de horários, clientes e atendimentos presenciais, este produto foi pensado para a sua rotina.
          </p>
        </div>

        {/* Fluid 3-Column Open Grid (No Heavy Cards) */}
        <div className="grid-3" style={{ marginBottom: '3.5rem', gap: '2rem' }}>
          {segmentos.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} style={{
                paddingBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.625rem'
                }}>
                  <div style={{ color: 'var(--text-primary)' }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {s.name}
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, paddingLeft: '1.75rem' }}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Central Human Manifesto (Clean Open Quote Block) */}
        <div style={{
          borderTop: '1px solid var(--border-strong)',
          borderBottom: '1px solid var(--border-strong)',
          padding: 'clamp(2rem, 4vw, 3rem) 0',
          textAlign: 'center',
          maxWidth: '850px',
          margin: '0 auto'
        }}>
          <blockquote style={{
            fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)',
            fontWeight: 600,
            lineHeight: 1.4,
            color: 'var(--text-primary)'
          }}>
            "Não importa se você trabalha sozinho ou com uma equipe de 15 pessoas. Se sua operação vive de horários marcados, ter controle é o primeiro passo para crescer."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
