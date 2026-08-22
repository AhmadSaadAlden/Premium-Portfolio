import { Menu, ChevronRight, ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { useState } from 'react'
import { NAV_ITEMS } from '@/config/navigation'
import { useAppSelector } from '@/store/hooks'
import { translations } from '@/data/translations'
import LanguageSwitcher from '../features/language/LanguageSwitcher'
import ThemeToogle from '../features/theme/ThemeToggle'

export const MobileNav = () => {
    const [open, setOpen] = useState(false)
    const language = useAppSelector((state) => state.language.language)
    const isAr = language === 'ar'
    const t = translations[language].nav

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
                className={cn(
                    "md:hidden rounded-full border border-border/60 bg-background/60 flex items-center justify-center",
                    "backdrop-blur-xl w-10 h-10 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm"
                )}
                aria-label="Open Navigation Menu"
            >
                <Menu className='w-5 h-5 text-foreground transition-transform duration-300' />
            </SheetTrigger>

            <SheetContent
                side={isAr ? 'right' : 'left'}
                className={cn(
                    "w-[290px] sm:w-[330px] bg-background/90 border-border/60 backdrop-blur-2xl",
                    "flex flex-col justify-between h-full p-6 shadow-2xl"
                )}
            >
                <div className='flex flex-col gap-6 mt-2'>   
                    {/* Header with glowing badge */}
                    <SheetHeader className='text-start pb-4 border-b border-border/40'>
                        <SheetTitle className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
                            Ahmad<span className="text-primary font-bold">.dev</span>
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                        </SheetTitle>
                    </SheetHeader>

                    {/* Navigation Links */}
                    <nav className='flex flex-col gap-2.5'>
                        {NAV_ITEMS.map((item) => {
                            const label = t[item.key as keyof Omit<typeof t, 'mobileNav'>] as string
                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "group relative flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-muted-foreground",
                                        "border border-transparent bg-muted/20 hover:bg-primary/10 hover:text-primary hover:border-primary/20",
                                        "transition-all duration-300 hover:shadow-md hover:shadow-primary/5 cursor-pointer",
                                        isAr ? "hover:-translate-x-1" : "hover:translate-x-1"
                                    )}
                                >
                                    <span className="relative z-10 transition-colors group-hover:text-primary">
                                        {label}
                                    </span>

                                    {/* Arrow icon appearing on hover */}
                                    <div className="text-primary/0 group-hover:text-primary transition-all duration-300 group-hover:scale-110">
                                        {isAr ? (
                                            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                                        ) : (
                                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                        )}
                                    </div>
                                </a>
                            )
                        })}
                    </nav>
                </div>

                {/* Footer Controls Container */}
                <div className='pt-5 border-t border-border/50 flex items-center justify-between bg-muted/30 p-3.5 rounded-2xl border border-border/30'>
                    <span className='text-xs text-muted-foreground font-semibold px-1'>
                        {t.mobileNav.settings}
                    </span>
                    <div className='flex items-center gap-2'>
                        <LanguageSwitcher />
                        <ThemeToogle />    
                    </div>                
                </div>
            </SheetContent>
        </Sheet>
    )
}