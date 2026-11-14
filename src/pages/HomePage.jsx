import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductMotionSection from '../components/ProductMotionSection';
import LossSimulatorSection from '../components/LossSimulatorSection';
import EmailCalendarSection from '../components/EmailCalendarSection';
import ReviewsSection from '../components/ReviewsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Header />
      <main style={{ flex: 1, width: '100%' }}>
        {/* Dobra 1: Dor latente + Como resolvemos de verdade + CTA "Perca menos clientes" */}
        <HeroSection />

        {/* Dobra 2: Motion design do sistema (esq) + Motion de como é fácil pro cliente agendar (dir) */}
        <ProductMotionSection />

        {/* Dobra 3 (CRO): Simulador rápido do custo invisível de horários perdidos */}
        <LossSimulatorSection />

        {/* Dobra 4: Tudo no seu e-mail + Integrado com sua agenda */}
        <EmailCalendarSection />

        {/* Dobra 5: Avaliações dos usuários & Como os problemas foram recebidos e resolvidos */}
        <ReviewsSection />

        {/* CRO: Planos transparentes com entrada gratuita sem cartão */}
        <PricingSection />

        {/* Dobra 6: FAQ + Fechamento de alta conversão */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
