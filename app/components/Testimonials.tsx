'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Wonderful to work with, with excellent project management skills. We worked together at Sopra Steria where our projects were dependant on each other for success. Thomas delivered his mile stones and clearly and concisely communicated any issues he had so I was aware and we could work on them together. Would highly recommend him to anyone who has the chance to work with him."
    },
    {
      text: "Tom was great to work with, picks up instantly anything that was dropped on him, and always stays focused. He ensured that all parties understood his communications along with their roles and actions. He made sure that timelines were met and the route to the finish was open. If there was a threat of a project clash, he did his utmost to ensure no conflicts or they're minimalised. I look forward to working with Tom again."
    },
    {
      text: "Tom is a very diligent person, any work is completed to a very high standard. He is given a high level briefing and he will go away and complete that working in an agile way to produce and handover not only something that meets the briefing but in almost all cases exceeds. I have no hesitation in recommending as he is a healthy asset to have onboard whether it is a full program of works down to an individual project."
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
          <span className="h4 text-primary">Testimony</span>
        </motion.div>
      </div>

      <AnimatedSection className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="h3 mb-2">What clients say...</h3>
          <h4 className="h4 text-right uppercase font-thin -mt-6">Top reviews</h4>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <p className="text-white/90">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}