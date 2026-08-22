'use client';

import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import { translations } from '@/data/translations';
import { getContactData } from '@/data/contact';
import ContactCard from '@/components/ContactCard';
import SectionHeader from '../SectionHeader';
import MotionWrapper from '../motion/MotionWrapper';
import ContactForm from '../ContactForm';

export default function Contact() {
  const language = useAppSelector((state) => state.language.language);
  const t = translations[language].contact;
  const [copied, setCopied] = useState(false);

  const email = 'ahmadsaad01045@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = getContactData({
    t,
    email,
    copied,
    handleCopyEmail,
  });

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <MotionWrapper direction="up" delay={0.1}>
          <div className="flex flex-col items-center text-center space-y-3 mb-16">
            <SectionHeader 
              badge={t.contactBadge || "Let's Talk"}
              title={t.title} 
              subtitle={t.subtitle} 
            />
          </div>
        </MotionWrapper>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side: 2x2 Grid for Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {contactItems.map((item, idx) => (
              <MotionWrapper 
                key={item.id} 
                direction="up" 
                delay={0.2 + idx * 0.1} 
                scale={true}
              >
                <ContactCard item={item} />
              </MotionWrapper>
            ))}
          </div>

          {/* Right Side: Contact Form */}
          <MotionWrapper direction="up" delay={0.3}>
            <ContactForm />
          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}