'use client'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { toggleThemeMode } from "@/store/slices/themeSlice"
import { Moon, Sun } from "lucide-react"

export default function ThemeToogle () {
    const themeMode = useAppSelector((state) => state.theme.mode)
    const dispatch = useAppDispatch()
    const isDark = themeMode === 'dark'
    return (
        <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => dispatch(toggleThemeMode())}
            className={cn(
                "relative rounded-full w-10 h-10 bg-background/50 backdrop-blur-md",
                "border border-border/50 transition-all duration-300",
                "hover:bg-accent hover:border-border hover:scale-105",
                "active:scale-95 shadow-sm"
            )}
            aria-label="Toggle theme"
        >
            {
                isDark
                ?
                    (
                       <Moon className={cn(
                            "w-5 h-5 text-sky-400 transition-all ease-in-out duration-500 rotate-90 scale-0",
                            "dark:rotate-0 dark:scale-100"
                        )} 
                        />  
                    )
                :
                    (
                        <Sun  className={cn(
                            "w-5 h-5 scale-100 transition-all duration-500 ease-in-out",
                            "dark:-rotate-90 dark:scale-0 text-amber-500"
                        )}
                        />
                    )
            }
        </Button>     
    )
}