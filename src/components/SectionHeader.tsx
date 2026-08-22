'use client';

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center space-y-4 mb-16", className)}>
      {/* 1. شارة علوية بلون الهوية مع نقطة متوهجة */}
      {badge && (
        <div 
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1.5",
            "rounded-full border border-primary/20 bg-primary/10",
            "text-primary text-xs font-semibold tracking-wide uppercase"
          )}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      {/* 2. العنوان الرئيسي بتدرج لوني جذاب */}
      <h2 
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl",
          "font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-primary to-green-300",
          "bg-clip-text text-transparent pb-1"
        )}
      >
        {title}
      </h2>

      {/* 3. خط زخرفي متدرج ينتهي بنعومة */}
      <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-primary to-green-300 rounded-full" />

      {/* 4. النص الفرعي للتوضيح */}
      {subtitle && (
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}