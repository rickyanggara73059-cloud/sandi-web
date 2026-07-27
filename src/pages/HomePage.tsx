import React from 'react';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { TrustBar } from '../components/home/TrustBar';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { LicenseCalculator } from '../components/home/LicenseCalculator';
import { StatisticsCounter } from '../components/home/StatisticsCounter';
import { FAQSection } from '../components/home/FAQSection';
import { CTABanner } from '../components/home/CTABanner';
import { generateOrganizationSchema } from '../utils/seo';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Mining Consultant Service | Enterprise Mining Licensing Indonesia"
        description="Professional Mining Licensing & Regulatory Consulting Services Across Indonesia. Fast-track assistance for IPP, IUJP, RKAB 3 Tahunan, Minerba One Map, LKPM, ET Batubara, & IUP OP."
        schemaJson={generateOrganizationSchema()}
      />

      <div className="space-y-0">
        <HeroSection />
        <TrustBar />
        <WhyChooseUs />
        <ServicesGrid />
        <ProcessTimeline />
        <LicenseCalculator />
        <StatisticsCounter />
        <FAQSection />
        <CTABanner />
      </div>
    </>
  );
};
