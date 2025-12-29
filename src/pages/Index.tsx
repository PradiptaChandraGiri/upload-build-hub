import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import SkillsPreview from '@/components/SkillsPreview';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="relative z-10">
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
