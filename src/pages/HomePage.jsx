import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductMotionSection from '../components/ProductMotionSection';
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
        <HeroSection />
        <ProductMotionSection />
        <EmailCalendarSection />
        <ReviewsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
