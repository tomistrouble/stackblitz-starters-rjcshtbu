'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, className = '', variant = 'primary' }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-[40px] font-medium text-[24px] leading-[30px] transition-all duration-200";
  const variantStyles = {
    primary: "bg-[#FFCA0A] text-[#483700] hover:bg-[#EAA700] border-[5px] border-[#EAA700]",
    secondary: "bg-transparent text-white border-[5px] border-[#EAA700] hover:bg-[#FFCA0A]/10"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}