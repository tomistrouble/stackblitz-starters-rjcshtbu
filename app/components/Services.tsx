'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Services() {
  const services = [
    {
      title: "Define Roadmap",
      description: "We design and plan a fundamental solution to build your goals",
      image: "/roadmap-illustration.svg"
    },
    {
      title: "Build & Deliver",
      description: "Build in an iterative feedback loop, and report to ensure a desirable outputs",
      image: "/build-illustration.svg"
    },
    {
      title: "Optimise, Automate",
      description: "Automate all services required for you to use the outcome delivered",
      image: "/rocket-illustration.svg"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="flex justify-center mb-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 bg-white rounded-[40px] px-10 py-4"
        >
          <Heart className="w-8 h-8 text-primary" />
          <span className="h4 text-primary">Services</span>
        </motion.div>
      </div>

      <AnimatedSection className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={200}
                className="w-full h-48 object-contain mb-6"
              />
              <h3 className="h3 mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}