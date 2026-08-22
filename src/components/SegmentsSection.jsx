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
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-title-sm">QUEM PRECISA DE MAIS CONTROLE?</div>
          <h2 className="section-heading">
            Se o seu dia funciona por horários.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Se o seu negócio depende de horários, clientes e atendimentos presenciais, este produto foi pensado para a sua rotina.
          </p>
        </div>

        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {segmentos.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="clik-card" style={{ padding: '1.75rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)'
                }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {s.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Central Human Manifesto Card */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(1.75rem, 4vw, 2.5rem)',
          textAlign: 'center',
          maxWidth: '800px',
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
