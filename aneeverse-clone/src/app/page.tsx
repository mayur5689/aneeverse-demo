import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Services from '@/components/Services/Services';
import Comparison from '@/components/Features/Comparison';
import OurWork from '@/components/OurWork/OurWork';
import Testimonials from '@/components/Testimonials';
import Talent from '@/components/Testimonials/Talent';
import Hiring from '@/components/Hiring/Hiring';
import CTA from '@/components/CTA';
import PerfectFit from '@/components/Features/PerfectFit';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Brands />
      <Services />
      <Comparison />
      <OurWork />
      <Testimonials />
      <PerfectFit />
      <Talent />
    </main>
  );
}
