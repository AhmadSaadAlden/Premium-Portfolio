'use client'

import { cn } from "@/lib/utils"
import ThemeToogle from "../features/theme/ThemeToggle"
import LanguageSwitcher from "../features/language/LanguageSwitcher"
import { useAppSelector } from "@/store/hooks"
import { translations } from "@/data/translations"
import { NAV_ITEMS } from "@/config/navigation"
import { MobileNav } from "./MobileNav"
import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const language = useAppSelector((state) => state.language.language)
  const t = translations[language].nav

  // متابعة التمرير لتغيير نمط الـ Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-4 sm:px-8",
        isScrolled ? "py-3" : "py-5"
      )}
    >
        <div
            className={cn(
                "max-w-7xl mx-auto rounded-full transition-all duration-300",
                "flex items-center justify-between px-6 h-14",
                isScrolled
                    ? "bg-background/70 backdrop-blur-xl border border-border/60 shadow-lg shadow-black/5"
                    : "bg-background/30 backdrop-blur-md border border-border/20"
            )}
        >
            {/* Logo / Brand */}
            <div className="flex items-center gap-3">
                <a
                    href="#"
                    className="group flex items-center gap-2.5 text-foreground transition-all duration-300"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="font-extrabold text-lg tracking-tight group-hover:text-primary transition-colors">
                        Ahmad
                        <span className="text-primary font-mono text-sm ml-1 px-1.5 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                            .dev
                        </span>
                    </span>
                </a>
            </div>

            {/* Desktop Navigation Links - Floating Capsule */}
            <nav className="hidden md:flex items-center gap-1 bg-muted/40 p-1.5 rounded-full border border-border/40 backdrop-blur-md">
                {NAV_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={cn(
                                "relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
                                "text-muted-foreground hover:text-foreground hover:bg-background/80 hover:shadow-sm"
                            )}
                        >
                            {t[item.key as keyof typeof t]}
                        </a>
                ))}
            </nav>

            {/* Actions (Language, Theme & CTA) */}
            <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-3">
                    <LanguageSwitcher />
                    <ThemeToogle />
                    
                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className={cn(
                            "group relative inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-full",
                            "bg-primary text-primary-foreground shadow-md shadow-primary/20",
                            "hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]",
                            "transition-all duration-300"
                        )}
                    >
                        <span>{t.chat}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>

                {/* Mobile Hamburger Navigation */}
                <MobileNav />
            </div>
        </div>
    </header>
  )
}