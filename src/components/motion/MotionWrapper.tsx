'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  scale?: boolean; // خيار التكبير الناعم عند الظهور
  className?: string;
}

export default function MotionWrapper({
  children,
  delay = 0,
  direction = 'up',
  scale = false,
  className = '',
}: MotionWrapperProps) {
  // تحديد اتجاه الإزاحة
  const getDirections = () => {
    switch (direction) {
      case 'up':
        return { y: 35, x: 0 };
      case 'down':
        return { y: -35, x: 0 };
      case 'left':
        return { x: 35, y: 0 };
      case 'right':
        return { x: -35, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
      default:
        return { x: 0, y: 35 };
    }
  };

  const initialDir = getDirections();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialDir.x,
        y: initialDir.y,
        scale: scale ? 0.94 : 1, // يبدأ بحجم أصغر قليلاً إذا تم تفعيل الـ scale
        filter: 'blur(6px)', // ضبابية خفيفة جداً تزيد الفخامة
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{
        once: true, // تظهر الحركة مرة واحدة فقط عند التمرير
        amount: 0.15, // تبدأ الحركة بمجرد دخول 15% من العنصر في الشاشة
      }}
      transition={{
        duration: 0.65,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // منحنى حركة ناعم جداً ممتاز لـ Next.js
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}