'use client';

import AnimatedSection from './AnimatedSection';
import Button from './Button';

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-black/30">
      <AnimatedSection className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Start Your Journey</h2>
        <p className="text-xl text-gray-300 mb-8">
          Take the first step towards transforming your digital presence
        </p>
        <Button>
          Start Your Journey Today
        </Button>
      </AnimatedSection>
    </section>
  );
}