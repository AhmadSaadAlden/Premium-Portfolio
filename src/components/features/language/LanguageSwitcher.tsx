'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { toggleLanguage } from "@/store/slices/languageSlice"
import { Languages } from "lucide-react"

export default function LanguageSwitcher () {
    const language = useAppSelector((state) => state.language.language)
    const dispatch = useAppDispatch()
    return (
        <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => dispatch(toggleLanguage())}
            className={cn(
                "flex items-center gap-2 rounded-full border box-border/50",
                "bg-background/50 backdrop-blur-md px-3 h-10",
                "transition-all duration-300",
                "hover:bg-accent hover:scale-105",
                "active:scale-95 shadow-sm"
            )}
            aria-label="Toggle language"
        >
            <Languages className="w-4 h-4 text-primary"/>
            <span
                className={cn(
                    "text-xs font-semibold uppercase tracking-wider text-foreground"
                )}
            >
                {language === 'en' ? 'AR' : 'EN'}
            </span>
            
        </Button>
    )
}