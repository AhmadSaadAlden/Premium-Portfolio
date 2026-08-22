'use client'

import { SKILLS_DATA } from "@/data/skills"
import { translations } from "@/data/translations"
import { cn } from "@/lib/utils"
import { useAppSelector } from "@/store/hooks"
import { Code2, Cpu, Wrench } from "lucide-react"
import { MouseEvent, useState } from "react"
import SectionHeader from "../SectionHeader"
import MotionWrapper from "../motion/MotionWrapper"

export default function Skills() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const language = useAppSelector(state => state.language.language)
    const t = translations[language].skills
    
    const categories = [
        {
            id: 'frontend',
            title: t.categories.frontend,
            icon: Code2
        },
        {
            id: 'stateAndLogic',
            title: t.categories.stateAndLogic,
            icon: Cpu
        },
        {
            id: 'toolsAndWorkflow',
            title: t.categories.toolsAndWorkflow,
            icon: Wrench
        },
    ]

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section
            id="skills"
            className={cn(
                "py-20 lg:py-28 relative overflow-hidden bg-muted/30"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                {/* Header */}
                <MotionWrapper direction="up" delay={0.1}>
                    <div className="flex flex-col items-center text-center space-y-3 mb-16">
                        <SectionHeader
                            badge={t.skillsBadge || "My Expertise"}
                            title={t.title} 
                            subtitle={t.subtitle} 
                        />
                    </div>
                </MotionWrapper>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon
                        const categorySkills = SKILLS_DATA.filter((s) => s.category === cat.id)
                        
                        return (
                            <MotionWrapper
                                key={cat.id}
                                direction="up"
                                delay={0.2 + idx* 0.15}
                                scale={true}
                            >
                                <div
                                    key={cat.id}
                                    onMouseMove={handleMouseMove}
                                    style={{
                                        '--mouse-x': `${mousePos.x}px`,
                                        '--mouse-y': `${mousePos.y}px`,
                                    } as React.CSSProperties}
                                    className={cn(
                                        "group relative rounded-3xl bg-border/40 p-[1px] transition-all duration-300",
                                        "hover:shadow-xl hover:shadow-primary/5"
                                    )}
                                >
                                    {/* 1. طبقة الحد المتدرج التفاعلي مع الماوس */}
                                    <div
                                        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), #60a5fa, #34d399, #a855f7, transparent 80%)`,
                                        }}
                                    />

                                    {/* 2. حاوي المحتوى الداخلي للبطاقة */}
                                    <div className="relative z-10 h-full w-full rounded-[23px] bg-background/90 backdrop-blur-md p-6 space-y-6">
                                        {/* Category Header */}
                                        <div className="flex items-center gap-3 border-b border-border/40 pb-4">
                                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold text-foreground">
                                                {cat.title}
                                            </h3>
                                        </div>

                                        {/* Skills Badges Container */}
                                        <div className="flex flex-wrap gap-2" dir="ltr">
                                            {categorySkills.map((skill, i) => (
                                                <div
                                                    key={i}
                                                    title={`Level: ${skill.level}`}
                                                    
                                                    className={cn(
                                                        "px-3.5 py-2 rounded-xl border border-border/50 bg-muted/50",
                                                        "hover:bg-primary/10 hover:border-primary/30",
                                                        "transition-colors flex items-center gap-2 cursor-pointer"
                                                    )}
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    <span className="text-xs sm:text-sm font-medium text-foreground">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </MotionWrapper>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}