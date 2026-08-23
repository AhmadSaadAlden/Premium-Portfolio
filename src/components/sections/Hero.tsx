'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { translations } from "@/data/translations"
import { cn } from "@/lib/utils"
import { useAppSelector } from "@/store/hooks"
import { ArrowLeft, ArrowRight, Code2, Download, Sparkles } from "lucide-react"
import Image from "next/image"
import profileImage from "../../../public/assest/images/profile.png"
import MotionWrapper from "../motion/MotionWrapper"

export default function Hero() {
  const language = useAppSelector((state) => state.language.language)
  const t = translations[language].hero
  const isRtl = language === 'ar'
  const cvHref = 'https://drive.google.com/uc?export=download&id=1E_mdmlMpPwW6ouSu6S1veyNZNdGse1YO'
    //https://drive.google.com/file/d/1E_mdmlMpPwW6ouSu6S1veyNZNdGse1YO/view?usp=sharing
    return (
        <section
        className={cn(
            "relative min-h-[calc(100vh-5rem)] overflow-hidden py-12 lg:py-20",
            "flex justify-center items-center"
        )}
        >
            {/* Background Decorative Blur */}
            <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
                <div 
                    className={cn(
                        "w-[450px] sm:w-[600px] h-[450px] bg-primary/10 rounded-full",
                        "blur-3xl animate-pulse"
                    )}
                />
            </div>

            <div
                className={cn(
                    "max-w-7xl mx-auto px-6 sm:px-8 w-full z-10",
                    "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
                )}
            >

                {/* Text Content Column */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start space-y-6">
            
                {/* Badge */}
                <MotionWrapper direction="down" delay={0.1}>
                    <Badge 
                        variant="outline" 
                        className={cn(
                            "inline-flex items-center gap-2.5 px-4 py-2",
                            "rounded-full bg-background/60 border-border/60 backdrop-blur-md shadow-sm text-sm font-normal"
                        )}
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </span>
                        <span className="text-foreground">{t.badge}</span>
                    </Badge>
                </MotionWrapper>

                {/* Title & Role */}
                <div className="space-y-3 w-full">
                    <MotionWrapper direction="up" delay={0.2}>
                        <h1 
                            className={cn(
                                "text-3xl sm:text-5xl lg:text-6xl font-semibold",
                                "tracking-tight text-foreground leading-tight"
                            )}
                        >
                            {t.titlePrefix}{' '}
                            <span
                                className={cn(
                                    "bg-gradient-to-r from-primary via-blue-500 to-indigo-600",
                                    "bg-clip-text text-transparent"
                                )}
                            >
                                {t.name}
                            </span>
                        </h1>
                    </MotionWrapper>

                    <MotionWrapper direction="up" delay={0.3}>
                        <p 
                            className={cn(
                            "flex items-center justify-center lg:justify-start gap-2 pt-1",
                            "text-lg sm:text-xl lg:text-2xl font-semibold text-primary/90"
                            )}
                        >
                            <Code2 className="w-6 h-6 text-primary shrink-0" />
                            <span>{t.role}</span>
                        </p>
                    </MotionWrapper>
                </div>

                {/* Description */}
                <MotionWrapper direction="up" delay={0.4}>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {t.description}
                    </p>
                </MotionWrapper>

                {/* Action Buttons */}
                <MotionWrapper direction="up" delay={0.5}>
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
                        <Button 
                            asChild 
                            size="lg" 
                            className="w-full sm:w-auto rounded-full px-8 shadow-lg shadow-primary/25 gap-2 cursor-pointer"
                        >
                            <a href="#projects">
                                <span>{t.primaryCta}</span>
                                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                            </a>
                        </Button>

                        <Button 
                            asChild 
                            variant="outline" 
                            size="lg" 
                            className="w-full sm:w-auto rounded-full px-8 gap-2 bg-background/80 backdrop-blur-sm cursor-pointer"
                        >
                            <a href="#contact">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span>{t.secondaryCta}</span>
                            </a>
                        </Button>

                        <Button 
                            asChild 
                            variant="outline"
                            size="lg" 
                            className="w-full sm:w-auto rounded-full px-8 gap-2 bg-background/80 backdrop-blur-sm cursor-pointer"
                        >
                            <a href={cvHref}>
                                <Download className="w-4 h-4 text-primary" />
                                <span>{t.thirdCv}</span>
                            </a>
                        </Button>
                    </div>
                </MotionWrapper>
            </div>

            {/* Image Container Column */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
                <MotionWrapper direction="left" delay={0.3} scale={true} className="w-full flex justify-center">
                    <div className="relative group w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-square shrink-0">
                        <div 
                            className={cn(
                                "absolute -inset-1",
                                "bg-gradient-to-r from-primary via-blue-500 to-indigo-600",
                                "rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" 
                            )}
                        />
                    
                        <div 
                            className={cn(
                                "relative w-full h-full rounded-3xl overflow-hidden",
                                "border-2 border-border/60 bg-background/80 backdrop-blur-md p-2",
                            )}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-muted">
                                <Image
                                    src={profileImage}
                                    alt={t.name}
                                    fill
                                    priority
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 280px, (max-width: 1200px) 340px, 380px"
                                />
                            </div>
                        </div>
                    </div>
                </MotionWrapper>
            </div>
        </div>
    </section>
  )
}