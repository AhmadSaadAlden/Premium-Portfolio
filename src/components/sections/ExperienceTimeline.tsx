'use client'

import { cn } from "@/lib/utils"
import { useAppSelector } from "@/store/hooks"
import { translations } from "@/data/translations"
import SectionHeader from "../SectionHeader"
import MotionWrapper from "../motion/MotionWrapper"
import { GraduationCap, Calendar, School, Award } from "lucide-react"

export default function EducationSection() {
  const language = useAppSelector((state) => state.language.language)
  const t = translations[language].education

  const educationList = [
    {
      id: "master",
      degree: t.items.master.degree,
      institution: t.items.master.institution,
      period: t.items.master.period,
      description: t.items.master.description,
      status: t.items.master.status,
      tags: ["Web Sciences", "Adaptive UI", "AI"],
    },
    {
      id: "bachelor",
      degree: t.items.bachelor.degree,
      institution: t.items.bachelor.institution,
      period: t.items.bachelor.period,
      description: t.items.bachelor.description,
      status: t.items.bachelor.status,
      tags: ["Software Engineering", "Computer Science", "networks"],
    },
    {
      id: "tcc",
      degree: t.items.tcc.degree,
      institution: t.items.tcc.institution,
      period: t.items.tcc.period,
      description: t.items.tcc.description,
      status: t.items.tcc.status,
      tags: ["Computer Engineering", "Maintenance", "Software & Hardware"],
    },
  ]

  return (
    <section id="education" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <MotionWrapper direction="up" delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <SectionHeader
              badge={t.badge}
              title={t.title}
              subtitle={t.subtitle}
            />
          </div>
        </MotionWrapper>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-primary/30 ml-4 sm:ml-32 space-y-10">
          {educationList.map((edu, idx) => (
            <MotionWrapper
              key={edu.id}
              direction="up"
              delay={0.2 + idx * 0.15}
            >
              <div className="relative pl-8 sm:pl-10 group">
                {/* Icon Dot */}
                <div 
                  className={cn(
                    "absolute -left-[17px] top-1.5 flex h-8 w-8",
                    "items-center justify-center rounded-full border border-primary/40 bg-background",
                    "text-primary shadow-md transition-all duration-300",
                    "group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground"
                  )}
                >
                  <GraduationCap className="h-4 w-4" />
                </div>

                {/* Date Tag Desktop */}
                <div 
                  className={cn(
                      "hidden sm:block absolute -left-36 top-2",
                      "text-xs font-semibold text-muted-foreground tracking-wide w-28 text-right"
                  )}
                >
                  <span className="inline-flex items-center gap-1 bg-muted/60 px-2.5 py-1 rounded-full border border-border/40">
                    <Calendar className="w-3 h-3 text-primary" />
                    {edu.period}
                  </span>
                </div>

                {/* Card Content */}
                <div 
                  className={cn(
                      "p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-sm transition-all duration-300",
                      "hover:shadow-md hover:border-primary/40"
                  )}
                >
                    <div className="flex items-center justify-between gap-2 mb-2">
                        {/* Mobile Date Tag */}
                        <span 
                          className={cn(
                              "sm:hidden inline-flex items-center gap-1",
                              "bg-muted/60 px-2.5 py-1 rounded-full border border-border/40",
                              "text-xs font-medium text-muted-foreground"
                          )}
                        >
                            <Calendar className="w-3 h-3 text-primary" />
                            {edu.period}
                        </span>

                        {/* Status Badge */}
                        <span 
                          className={cn(
                            "inline-flex items-center gap-1",
                            "text-[11px] font-medium px-2 py-0.5",
                            "rounded-full bg-primary/10 text-primary border border-primary/20"
                          )}
                        >
                            <Award className="w-3 h-3" />
                            {edu.status}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">
                        {edu.degree}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                        <School className="w-4 h-4 shrink-0" />
                        <span>{edu.institution}</span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-2" dir="ltr">
                        {edu.tags.map((tag, tIdx) => (
                            <span
                                key={tIdx}
                                className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-mono border border-border/40"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}