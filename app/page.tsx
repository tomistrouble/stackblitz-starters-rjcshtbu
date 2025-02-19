import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}