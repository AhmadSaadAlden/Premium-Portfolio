import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';
import { Mail, Check, Copy } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { translations } from './translations';
import { BsWhatsapp } from 'react-icons/bs';

type ContactTranslations = (typeof translations)['en']['contact']

export interface Contact {
  id: string;
  icon: LucideIcon | IconType;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonIcon?: LucideIcon;
  onClick?: () => void;
  href?: string;
  hoverClass: string;
  iconBg: string;
  btnHover: string;
  isCopiedState?: boolean;
}

interface GetContactDataProps {
  t: ContactTranslations
  email: string;
  copied: boolean;
  handleCopyEmail: () => void;
}

export const getContactData = ({
  t,
  email,
  copied,
  handleCopyEmail,
}: GetContactDataProps): Contact[] => [
  {
    id: 'email',
    icon: Mail,
    title: t.emailLabel,
    subtitle: email,
    buttonText: copied ? t.copySuccess : t.emailCopied,
    buttonIcon: copied ? Check : Copy,
    onClick: handleCopyEmail,
    hoverClass: 'hover:border-red-500/50 hover:shadow-red-500/5',
    iconBg: 'group-hover:bg-red-500/10 group-hover:text-red-500',
    btnHover: 'hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30',
    isCopiedState: copied,
  },
  {
    id: 'github',
    icon: FaGithub,
    title: t.githubLabel,
    subtitle: '/AhmadSaadAlden',
    buttonText: t.gitHubVistor,
    href: 'https://github.com/AhmadSaadAlden',
    hoverClass: 'hover:border-slate-500/50 hover:shadow-slate-500/5',
    iconBg: 'group-hover:bg-slate-900/10 dark:group-hover:bg-white/10 group-hover:text-slate-900 dark:group-hover:text-white',
    btnHover: 'hover:bg-slate-900/10 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white hover:border-slate-500/30',
  },
  {
    id: 'linkedin',
    icon: FaLinkedin,
    title: t.linkedinLabel,
    subtitle: '/in/ahmad-saad-alden',
    buttonText: t.linkedInVistor,
    href: 'https://linkedin.com/in/ahmad-saad-alden-7a33311b9',
    hoverClass: 'hover:border-[#0A66C2]/50 hover:shadow-[#0A66C2]/5',
    iconBg: 'group-hover:bg-[#0A66C2]/10 group-hover:text-[#0A66C2]',
    btnHover: 'hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/30',
  },
  {
    id: 'WhatsApp Business',
    icon: BsWhatsapp,
    title: t.whatsAppLabel,
    subtitle: '/wa.me/Ahmad Saad Alden',
    buttonText: t.WhatsAppVistor,
    href: 'https://wa.me/message/XOCJLWI6JGWEI1',
    hoverClass: 'hover:border-[#008000]/50 hover:shadow-[#008000]/5',
    iconBg: 'group-hover:bg-[#008000]/10 group-hover:text-[#008000]',
    btnHover: 'hover:bg-[#008000]/10 hover:text-[#008000] hover:border-[#008000]/30',
  },
];