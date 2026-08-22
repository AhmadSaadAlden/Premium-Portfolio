'use client'

import { cn } from "@/lib/utils"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from "../common/ScrollToTop"

export default function MainLayout({children} : {children : React.ReactNode}) {
    return (
        <div className={cn(
            "relative min-h-screen flex flex-col", 
            "bg-background text-foreground transition-colors",
            "duration-500 overflow-x-hidden"
        )}>
            
            {/* Background Glow Effect */}
            <div className="pointer-events-none fixed inset-0 z-0 flex justify-center">
                <div className={cn(
                    "w-[700px] h-[400px] bg-primary/20 blur-[140px] rounded-full", 
                    "opacity-70 dark:opacity-40"
                )}></div>
            </div>

            {/* Header */}  
             <Navbar />

            {/* Main Content Container */}
            <main className={cn(
                "relative z-10 flex-1 max-w-7xl w-full mx-auto px-6", 
                "sm:px-8 py-12 sm:py-20"
            )}>
                {children}
            </main>

            {/* Footer */}
            <ScrollToTop />
            <Footer />
            
        </div>

    )
}