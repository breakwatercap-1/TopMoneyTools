import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import ToolCards from '@/components/home/ToolCards';
import TrustSection from '@/components/home/TrustSection';
import HomeFAQ from '@/components/home/HomeFAQ';

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <ToolCards />
      <TrustSection />
      <HomeFAQ />
    </PageLayout>
  );
}