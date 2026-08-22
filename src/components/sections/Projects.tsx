'use client';

import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';
import { translations } from '@/data/translations';
import { PROJECTS_DATA } from '@/data/projects';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeader from '../SectionHeader';
import MotionWrapper from '../motion/MotionWrapper';
import { cn } from '@/lib/utils';

export default function Projects() {
  const language = useAppSelector((state) => state.language.language);
  const t = translations[language].projects;

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <MotionWrapper direction="up" delay={0.1}>
          <div className="flex flex-col items-center text-center space-y-3 mb-16">
            <SectionHeader
              badge={t.projectBadge || 'Portfolio'}
              title={t.title}
              subtitle={t.subtitle}
            />
          </div>
        </MotionWrapper>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => {
            const title = t.details[project.titleKey as keyof typeof t.details];
            const description = t.details[project.descKey as keyof typeof t.details];

            return (
              <MotionWrapper
                key={project.id}
                direction="up"
                delay={0.2 + idx * 0.15}
                scale={true}
              >
                <Card 
                  className={cn(
                    "group relative overflow-hidden",
                    "border-border/60 bg-background/80 backdrop-blur-md",
                    "flex flex-col justify-between transition-all duration-300 shadow-sm",
                    "hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 rounded-3xl hover:scale-105 h-full",
                  )}
                >
                  {/* Project Image Banner */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={title || ''}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />
                  </div>

                  {/* Card Main Container */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <CardHeader className="p-0 space-y-2">
                        <CardTitle className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="p-0">
                        <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {description}
                        </CardDescription>
                      </CardContent>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2" dir="ltr">
                      {project.tags.map((tag, tagIdx) => (
                        <Badge
                          key={tagIdx}
                          variant="secondary"
                          className={cn(
                            "text-xs font-semibold px-3 py-1 rounded-full",
                            "border border-border/60 bg-muted/60 text-muted-foreground hover:bg-muted",
                          )}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Card Actions / Footer */}
                    <CardFooter 
                      className={cn(
                          "p-0 pt-4 border-t border-border/90",
                          "flex items-center justify-center gap-4",
                          "bg-background-none rounded-none"
                      )}
                    >
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 gap-2 rounded-full cursor-pointer pointer-events-auto"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>{t.liveDemo}</span>
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-2 rounded-full border-border/80 cursor-pointer pointer-events-auto"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>{t.viewCode}</span>
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}