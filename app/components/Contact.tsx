'use client';

import AnimatedSection from './AnimatedSection';
import Button from './Button';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-black/30">
      <AnimatedSection className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of satisfied customers who trust our solutions
        </p>
        <Button>
          Get in Touch
        </Button>
      </AnimatedSection>
    </section>
  );
}