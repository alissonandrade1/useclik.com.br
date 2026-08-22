import React from 'react';
import { Scissors, Sparkles, Eye, Feather, Heart, Paintbrush, Clock, Check } from 'lucide-react';

const segmentos = [
  { icon: Scissors, name: 'Barbearias', desc: 'Agendamento rápido de cortes, barboterapia e combos.' },
  { icon: Sparkles, name: 'Salões de Beleza', desc: 'Gestão de múltiplos cabeleireiros, manicures e procedimentos.' },
  { icon: Eye, name: 'Studios de Estética & Sobrancelhas', desc: 'Controle rigoroso de horários e retoques recorrentes.' },
  { icon: Feather, name: 'Lash & Nail Designers', desc: 'Agendamento de manutenções periódicas e aviso de retorno.' },
  { icon: Heart, name: 'Massagistas & Terapias', desc: 'Agendamentos com tempo de tolerância e confirmação prévia.' },
  { icon: Paintbrush, name: 'Estúdios de Tatuagem', desc: 'Sessões com duração definida e sinal de confirmação.' },
];

export default function SegmentsSection() {
  return (
    <section id="segmentos" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-title-sm">PARA QUEM O CLIK. EXISTE</div>
          <h2 className="section-heading">
            Feito para quem vive de horários e atendimentos.
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Se a sua operação depende de pessoas marcando um horário com sua equipe, a plataforma clik. foi desenhada sob medida para você.
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

        {/* Central Idea Banner */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            IDEIA CENTRAL DA MARCA
          </div>
          <blockquote style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            fontWeight: 700,
            lineHeight: 1.3,
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            "Não importa o seu segmento. Se você vive de agenda, você precisa ter controle sobre o que acontece antes, durante e depois de cada horário."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
