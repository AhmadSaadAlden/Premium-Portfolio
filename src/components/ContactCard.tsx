'use client';

import { Contact } from '@/data/contact';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ContactCardProps {
  item: Contact;
}

export default function ContactCard({ item }: ContactCardProps) {
  const Icon = item.icon;
  const ButtonIcon = item.buttonIcon;

  const cardContent = (
    <Card
      className={`group h-full border border-border/60 bg-background/80 backdrop-blur-md transition-all duration-300 hover:shadow-lg rounded-2xl flex flex-col justify-between ${item.hoverClass}`}
    >
      <CardHeader className="flex flex-col items-center space-y-3 text-center pt-6 px-6 pb-2">
        <div className={`p-3.5 rounded-2xl bg-muted text-muted-foreground transition-colors duration-300 ${item.iconBg}`}>
          <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
        </div>
        <CardTitle className="text-sm font-bold text-foreground">
          {item.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center px-6 py-0">
        <p className="text-xs text-muted-foreground truncate w-full">
          {item.subtitle}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={item.onClick}
          className={`w-full gap-2 text-xs rounded-xl border-border/60 transition-all duration-200 ${
            item.isCopiedState
              ? 'text-green-500 hover:text-green-500 border-green-500/30 hover:border-green-500/40 bg-green-500/10 hover:bg-green-500/20'
              : item.btnHover
          } ${item.href ? 'pointer-events-none' : 'cursor-pointer'}`}
        >
          {ButtonIcon && <ButtonIcon className="w-3.5 h-3.5" />}
          <span>{item.buttonText}</span>
        </Button>
      </CardFooter>
    </Card>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }

  return <div className="h-full">{cardContent}</div>;
}