'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive digital transformation services including AI implementation, process automation, and custom software development."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but we typically deliver initial results within 2-4 weeks."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile methodology with regular feedback loops to ensure your project stays on track and meets your requirements."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain transparent communication through regular updates and dedicated project management tools."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of modern technologies including AI, cloud services, and various programming frameworks."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We implement rigorous testing procedures and quality assurance processes throughout development."
    },
    {
      question: "What support do you provide after project completion?",
      answer: "We offer ongoing maintenance and support to ensure your solution continues to perform optimally."
    },
    {
      question: "How do you handle project changes?",
      answer: "We maintain flexibility through our agile process to accommodate changes while ensuring project stability."
    },
    {
      question: "What makes your service unique?",
      answer: "Our combination of AI expertise, human-centered design, and focus on automation sets us apart."
    },
    {
      question: "How do you price your services?",
      answer: "We offer transparent, value-based pricing tailored to your specific project needs and objectives."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <AnimatedSection className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-accent rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h4 className="h4 font-semibold">{faq.question}</h4>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-accent" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}