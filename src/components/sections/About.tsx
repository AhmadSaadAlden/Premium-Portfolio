'use client'

import { translations } from "@/data/translations"
import { cn } from "@/lib/utils"
import { useAppSelector } from "@/store/hooks"
import { Award, CheckCircle, Code } from "lucide-react"
import SectionHeader from "../SectionHeader"
import MotionWrapper from "../motion/MotionWrapper"

export default function About () {
    const language = useAppSelector(state => state.language.language)
    const t = translations[language].about
    const stats = [
        {icon : Code, value : '+3', label : t.stats.experience},
        {icon : Award, value : '+4', label : t.stats.projects},
        {icon : CheckCircle, value : '+17', label : t.stats.techStack},
    ]

    return (
        <section
            id="about"
            className={cn(
                "py-20 lg:py-28 relative overflow-hidden"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Section Header */}
                <MotionWrapper direction="up" delay={0.1}>
                    <SectionHeader
                        badge={t.aboutBadge || "Who I Am"}
                        title={t.title} 
                        subtitle={t.subtitle} 
                    />
                </MotionWrapper>
            </div> 
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Bio Text Column */}
                <div
                    className={cn(
                        "lg:col-span-7 space-y-6",
                        "text-base sm:text-lg text-muted-foreground leading-relaxed"
                    )}
                >
                    <MotionWrapper direction="right" delay={0.2}>
                        <p className="bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50">
                            {t.bioParagraph1}
                        </p>
                    </MotionWrapper>
                    <MotionWrapper direction="right" delay={0.2}>
                        <p className="bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50">
                            {t.bioParagraph2}
                        </p>
                    </MotionWrapper>
                </div>
                
                {/* Quick Stats Grid Column */}
                <div 
                    className={cn(
                        "lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
                    )}
                >
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon
                        return (
                            <MotionWrapper 
                                key={idx} 
                                direction="up" 
                                delay={0.2 + idx * 0.15}
                                scale={true}
                            >
                                <div
                                    className={cn(
                                        "flex items-center gap-4 p-5 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50",
                                        "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                                    )}
                                >
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                                        <Icon className="w-6 h-6"/>
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">
                                        {stat.value}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            </MotionWrapper>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}