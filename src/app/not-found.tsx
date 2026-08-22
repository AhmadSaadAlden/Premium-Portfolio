'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Mail, } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10);

  // التوجيه التلقائي بعد 10 ثوانٍ
  useEffect(() => {
    if (timeLeft === 0) {
      router.push('/');
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, router]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background px-4 overflow-hidden">
      {/* خلفية شبكية مع إضاءة خلفية دائرية (Ambient Glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      {/* بطاقة المحتوى الرئيسية */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center space-y-8 max-w-lg p-8 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl shadow-2xl"
      >
        {/* رقم 404 مع تأثير توهج ثلاثي الأبعاد */}
        <div className="relative">
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="text-8xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-foreground/20 select-none"
          >
            404
          </motion.h1>
          <div className="absolute -inset-1 blur-2xl bg-gradient-to-r from-primary/30 to-purple-600/30 -z-10 rounded-full" />
        </div>

        {/* النصوص والوصف */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            الصفحة المأمول الوصول إليها غير موجودة
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            يبدو أنك سلكت مساراً غير صحيح أو أن الرابط تم نقله. سيتم تحويلك تلقائياً إلى الصفحة الرئيسية خلال{' '}
            <span className="font-mono font-bold text-primary">{timeLeft}</span> ثوانٍ.
          </p>
        </div>

        {/* أزرار الإجراءات (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            <span>الرئيسية</span>
          </Link>

          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-background/50 hover:bg-accent font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span>الإبلاغ عن المشكلة</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}