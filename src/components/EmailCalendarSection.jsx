import React from 'react';
import {
  Mail,
  Calendar,
  BellRing,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Smartphone,
  ArrowUpRight,
} from 'lucide-react';

export default function EmailCalendarSection() {
  return (
    <section
      id="email-agenda"
      className="section"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <div className="container">
        {/* Heading */}
        <div style={{ maxWidth: '720px', marginBottom: '2.75rem' }}>
          <div className="eyebrow eyebrow-green" style={{ marginBottom: '1rem' }}>
            <Mail size={13} />
            <span>ZERO SURPRESA ENTRE UM ATENDIMENTO E OUTRO</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: '0.85rem' }}>
            Você recebe tudo no seu e-mail. E já fica integrado com a sua agenda.
          </h2>
          <p className="section-subtitle">
            Não precisa ficar abrindo sistema o dia inteiro. No segundo em que seu cliente confirma,
            remarca ou cancela, o aviso chega mastigado no seu e-mail e o horário é bloqueado
            automaticamente na sua agenda.
          </p>
        </div>

        {/* Two Visual Pillars: Instant Email + Integrated Calendar */}
        <div className="two-col-grid" style={{ marginBottom: '1.75rem' }}>
          {/* CARD 1: INSTANT EMAIL NOTIFICATION */}
          <div
            style={{
              backgroundColor: 'var(--bg-void)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.25rem',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '9px',
                      backgroundColor: 'var(--accent-green-dim)',
                      border: '1px solid var(--accent-green-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-green)',
                    }}
                  >
                    <Mail size={17} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                      Tudo documentado no seu e-mail
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                      Para você, para o barbeiro da vez e comprovante para o cliente
                    </div>
                  </div>
                </div>
                <span className="status-pill status-pill-green font-mono">Instantâneo</span>
              </div>

              {/* Realistic Email Client Preview */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                }}
              >
                {/* Email Header */}
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    backgroundColor: '#131318',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.3rem',
                    }}
                  >
                    <span>
                      De: <strong style={{ color: 'var(--text-secondary)' }}>clik. Agenda</strong>{' '}
                      &lt;notificacoes@useclik.com.br&gt;
                    </span>
                    <span className="font-mono">Agora mesmo</span>
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    ✓ Novo agendamento: Gabriel Ferreira — Qua, 18 nov às 15:00
                  </div>
                </div>

                {/* Email Body */}
                <div style={{ padding: '1rem' }}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.85rem',
                    }}
                  >
                    Olá, <strong style={{ color: '#fafafa' }}>Rafael Costa</strong>. Um novo horário
                    acabou de ser confirmado pela sua página pública:
                  </div>

                  <div
                    className="sub-two-grid"
                    style={{
                      backgroundColor: 'var(--bg-void)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '9px',
                      padding: '0.8rem',
                      gap: '0.65rem',
                      fontSize: '0.76rem',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>CLIENTE</div>
                      <div style={{ fontWeight: 600, marginTop: '2px' }}>Gabriel Ferreira</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>SERVIÇO</div>
                      <div style={{ fontWeight: 600, marginTop: '2px' }}>
                        Corte + Barba (R$ 85)
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>DATA & HORA</div>
                      <div className="font-mono" style={{ fontWeight: 600, marginTop: '2px' }}>
                        18/11 · 15:00 às 16:00
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>WHATSAPP</div>
                      <div className="font-mono" style={{ color: 'var(--accent-green)', marginTop: '2px' }}>
                        (11) 99824-3190
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '0.8rem',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <span className="font-mono">Protocolo: CLK-94B7M2</span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        color: 'var(--text-primary)',
                        fontWeight: 600,
                      }}
                    >
                      Adicionar à agenda <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
              }}
            >
              <CheckCircle2 size={15} color="var(--accent-green)" style={{ flexShrink: 0 }} />
              <span>
                Seu cliente também recebe confirmação imediata por e-mail para não esquecer o horário.
              </span>
            </div>
          </div>

          {/* CARD 2: CALENDAR INTEGRATION & ANTI-CONFLICT SYNC */}
          <div
            style={{
              backgroundColor: 'var(--bg-void)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.25rem',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '9px',
                      backgroundColor: 'var(--accent-green-dim)',
                      border: '1px solid var(--accent-green-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-green)',
                    }}
                  >
                    <Calendar size={17} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                      Integrado com a sua agenda
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                      Sincronizado no celular e protegido contra choque de horários
                    </div>
                  </div>
                </div>
                <span className="status-pill status-pill-neutral font-mono">Tempo real</span>
              </div>

              {/* Live Daily Timeline Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '0.75rem',
                    marginBottom: '0.75rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    fontSize: '0.76rem',
                  }}
                >
                  <span style={{ fontWeight: 700 }}>Quarta, 18 de Novembro · Rafael Costa</span>
                  <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--accent-green)' }}>
                    ● Sincronizado
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {/* 14:00 Slot */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      opacity: 0.7,
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{ fontSize: '0.72rem', color: 'var(--text-muted)', width: '42px' }}
                    >
                      14:00
                    </span>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: 'var(--bg-void)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        padding: '0.5rem 0.75rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.76rem',
                      }}
                    >
                      <span>Thiago Ribeiro · Corte Social</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>Concluído</span>
                    </div>
                  </div>

                  {/* 15:00 Newly Synced Slot */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span
                      className="font-mono"
                      style={{ fontSize: '0.72rem', color: 'var(--accent-green)', fontWeight: 700, width: '42px' }}
                    >
                      15:00
                    </span>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: 'rgba(35, 202, 130, 0.08)',
                        border: '1px solid var(--accent-green)',
                        borderRadius: '8px',
                        padding: '0.65rem 0.75rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.2rem',
                        }}
                      >
                        <strong style={{ fontSize: '0.8rem' }}>
                          Gabriel Ferreira · Corte + Barba
                        </strong>
                        <span className="status-pill status-pill-green">Novo · Trancado</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.85rem',
                          fontSize: '0.7rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                          <BellRing size={11} color="var(--accent-green)" /> Alerta 30 min antes
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Smartphone size={11} color="var(--accent-green)" /> Google / Apple Agenda
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 16:00 Slot */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{ fontSize: '0.72rem', color: 'var(--text-muted)', width: '42px' }}
                    >
                      16:00
                    </span>
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: 'var(--bg-void)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        padding: '0.5rem 0.75rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.76rem',
                      }}
                    >
                      <span>Bruno Cavalcanti · Corte Degradê</span>
                      <span style={{ color: 'var(--accent-green)', fontSize: '0.7rem' }}>● Confirmado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
              }}
            >
              <ShieldCheck size={15} color="var(--accent-green)" style={{ flexShrink: 0 }} />
              <span>
                Trava anti-conflito: ocupou às 15h, o horário desaparece da página pública na mesma hora.
              </span>
            </div>
          </div>
        </div>

        {/* 3 Bottom Value Pills */}
        <div className="three-col-grid">
          {[
            {
              icon: Clock,
              title: 'Bateu o olho, sabe quem é o próximo',
              desc: 'Entre um corte e outro, basta olhar a tela do celular para ver o nome, serviço e horário do próximo cliente.',
            },
            {
              icon: BellRing,
              title: 'Cancelou ou remarcou? Você sabe na hora',
              desc: 'Qualquer alteração dispara aviso no seu e-mail e libera a vaga automaticamente para outro cliente ocupar.',
            },
            {
              icon: Calendar,
              title: 'Agenda individual por colaborador',
              desc: 'Cada barbeiro ou profissional enxerga e sincroniza seus próprios atendimentos sem misturar horários da equipe.',
            },
          ].map((feat, idx) => {
            const FeatIcon = feat.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-void)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    marginBottom: '0.45rem',
                  }}
                >
                  <FeatIcon size={16} color="var(--accent-green)" />
                  <h3 style={{ fontSize: '0.92rem', fontWeight: 700 }}>{feat.title}</h3>
                </div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
