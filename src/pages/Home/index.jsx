import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import TrustedBySection from './TrustedBySection';
import WhyChooseUsSection from './WhyChooseUsSection';
import AdvancedSecuritySection from './AdvancedSecuritySection';
import StatsSection from './StatsSection';
import RealSolutionsSection from './RealSolutionsSection';
import ServicesSection from './ServicesSection';
import FaqSection from './FaqSection';
import PricingSection from './PricingSection';
import TeamSection from './TeamSection';
import BlogSection from './BlogSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4a2424] to-[#202020]">
      <Header />
      
      <main>
        <HeroSection />
        <TrustedBySection />
        <WhyChooseUsSection />
        <AdvancedSecuritySection />
        <StatsSection />
        <RealSolutionsSection />
        <ServicesSection />
        <FaqSection />
        <PricingSection />
        <TeamSection />
        <BlogSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;