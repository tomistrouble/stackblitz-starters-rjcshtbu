'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full py-8 px-4 md:px-8 flex items-center justify-between fixed top-0 z-50 bg-primary/80 backdrop-blur-lg"
    >
      <div className="flex items-center gap-4">
        <Image
          src="/logo.svg"
          alt="PrudenPro Logo"
          width={40}
          height={40}
          className="w-auto h-8"
        />
        <span className="text-xl font-semibold">PrudenPro</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        {['What we do', 'Services', 'Company', 'Stories', 'Community'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-white/80 hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}