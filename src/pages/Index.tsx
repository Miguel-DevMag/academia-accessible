import React from 'react';
import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { WorkoutsPreview } from '@/components/WorkoutsPreview';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta tags são gerenciadas pelo index.html */}
      <HeroSection />
      <FeaturesSection />
      <WorkoutsPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
