'use client';

import { useAppSelector } from '@/store/hooks';
import { translations } from '@/data/translations';
import { cn } from '@/lib/utils';

export default function Footer() {
  const language = useAppSelector((state) => state.language.language);
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={cn(
        "relative z-10 w-full border-t border-border/40 py-8",
        "bg-background transition-colors duration-300",
      )}
    >
      <div 
        className={cn(
          "max-w-7xl w-full mx-auto px-6 sm:px-8",
          "flex flex-col sm:flex-row items-center justify-between gap-4",
          "text-sm text-muted-foreground"
        )}
      >
        <p>© {currentYear} {t.name}. {t.rights}</p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/AhmadSaadAlden"
            target="_blank" 
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}