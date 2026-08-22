import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TransformationSection from '../components/TransformationSection';
import PilaresSection from '../components/PilaresSection';
import NoShowCalculator from '../components/NoShowCalculator';
import SegmentsSection from '../components/SegmentsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <HeroSection />
        <TransformationSection />
        <PilaresSection />
        <NoShowCalculator />
        <SegmentsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
