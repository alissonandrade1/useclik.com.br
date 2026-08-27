import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TransformationSection from '../components/TransformationSection';
import CycleSection from '../components/CycleSection';
import SolutionsSection from '../components/SolutionsSection';
import BenefitsSection from '../components/BenefitsSection';
import NoShowCalculator from '../components/NoShowCalculator';
import SegmentsSection from '../components/SegmentsSection';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>
      <Header />
      <main style={{ flex: 1, width: '100%', paddingTop: '4.5rem' }}>
        <HeroSection />
        <TransformationSection />
        <CycleSection />
        <SolutionsSection />
        <BenefitsSection />
        <NoShowCalculator />
        <SegmentsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
