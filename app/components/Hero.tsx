'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start px-4 md:px-8 pt-24 bg-[url('/HeadlineBG.png')] bg-cover bg-center">
      <div className="max-w-3xl">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="h1 font-bold mb-6">
            Turn ideas into digital reality
          </h1>
          <h4 className="h4 text-white/90 mb-8">
            We'll plan, build and organise your business. You get to live life and keep the benefits.
          </h4>
          <Button>
            Start Here
          </Button>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
