import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AgencyBanner from '@/components/AgencyBanner';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Destinations from '@/components/Destinations';
import CtaBanner from '@/components/CtaBanner';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import VisaTicker from '@/components/VisaTicker';
import Contact from '@/components/Contact';
import HomeBlog from '@/components/HomeBlog';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <AgencyBanner />
      <About />
      <WhyChooseUs />
      <Destinations />
      <CtaBanner />
      <FAQ />
      <Testimonials />
      <VisaTicker />
      <Contact />
      <HomeBlog />
    </main>
  );
}
