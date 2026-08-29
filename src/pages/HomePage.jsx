import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SocialProofSection from '../components/SocialProofSection';
import TransformationSection from '../components/TransformationSection';
import CycleSection from '../components/CycleSection';
import SolutionsSection from '../components/SolutionsSection';
import BenefitsSection from '../components/BenefitsSection';
import NoShowCalculator from '../components/NoShowCalculator';
import FAQSection from '../components/FAQSection';
import SegmentsSection from '../components/SegmentsSection';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>
      <Header />
      <main style={{ flex: 1, width: '100%', paddingTop: '4.5rem' }}>
        {/* 1. Hero — promessa principal + mockup */}
        <HeroSection />
        {/* 2. Prova Social — stats + depoimentos (quebra desconfiança) */}
        <SocialProofSection />
        {/* 3. Antes & Depois — dor → solução (identifica o problema) */}
        <TransformationSection />
        {/* 4. Como Funciona — ciclo de valor (educa o visitante) */}
        <CycleSection />
        {/* 5. Soluções — os 5 pilares do produto */}
        <SolutionsSection />
        {/* 6. Resultados Concretos — benefícios com dados */}
        <BenefitsSection />
        {/* 7. Calculadora — impacto financeiro real (urgência) */}
        <NoShowCalculator />
        {/* 8. FAQ — quebra de objeções */}
        <FAQSection />
        {/* 9. Segmentos — para quem é */}
        <SegmentsSection />
        {/* 10. Planos — pricing */}
        <PricingSection />
        {/* 11. CTA Final — conversão */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
