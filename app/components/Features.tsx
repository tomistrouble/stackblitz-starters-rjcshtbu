'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Features() {
  const features = [
    {
      title: "Enjoy End Results",
      description: "Life is busy, we'll handle ongoing AI services for you",
      image: "/finished-product-illustration.svg"
    },
    {
      title: "Desired & Value",
      description: "Using an iterative feedback loops, agile gives you value",
      image: "/feedback-loop-illustration.svg"
    },
    {
      title: "Minimum Effort",
      description: "Autonomy on everything allows you to automate everything",
      image: "/snorlax-illustration.svg"
    },
    {
      title: "Minimum Waiting",
      description: "AI doesn't sleep, so projects are built within times you desire",
      image: "/roadrunner-illustration.svg"
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
          <span className="h4 text-primary">Features</span>
        </motion.div>
      </div>

      <AnimatedSection className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={200}
                height={200}
                className="w-full h-48 object-contain mb-6"
              />
              <h3 className="h3 mb-4">{feature.title}</h3>
              <h4 className="h4 text-gray-300">{feature.description}</h4>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}