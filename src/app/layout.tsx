import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/components/features/theme/ThemeProvider";
import MainLayout from "@/components/layout/MainLayout";
import LanguageProvider from "@/components/features/language/LanguageProvider";
 
const geist = Geist({subsets:['latin'],variable:'--font-sans'});

// رابط موقعك على Vercel
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  // عنوان الموقع في تبويب المتصفح ومحركات البحث
  title: 'Ahmad Saad Alden | Front-End Engineer & Instructor',
  
  // وصف قصير يظهر تحت اسمك في نتائج بحث Google
  description: 'Portfolio of Ahmad Saad Alden, specializing in building high-performance modern web applications using Next.js, React, TypeScript, Tailwind CSS, and Shadcn UI.',
  
  // الكلمات المفتاحية لمساعدة Google في إيجادك
  keywords: [
    'Ahmad Saad Alden',
    'أحمد سعد الدين',
    'Front-End Engineer',
    'مهندس مطور واجهات',
    'Next.js Portfolio',
    'React Developer',
    'TypeScript Specialist',
  ],

  // إعدادات المعاينة عند مشاركة الرابط (واتساب، لينكد إن، إلخ)
  openGraph: {
    title: 'Ahmad Saad Alden | Front-End Engineer',
    description: 'High-performance portfolio showcasing modern web engineering projects and expertise.',
    url: siteUrl,
    siteName: 'Ahmad Saad Alden Portfolio',
    images: [
      {
        url: '/og-image.jpg' , // الصورة الموجودة في مجلد public
        width: 1200,
        height: 630,
        alt: 'Ahmad Saad Alden Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // إعدادات المعاينة للمنصات التي تعتمد تنسيق تويتر
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmad Saad Alden | Front-End Engineer',
    description: 'High-performance portfolio showcasing modern web engineering projects and expertise.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col antialiased selection:bg-primary/20 selection:text-primary">
        <ReduxProvider>
          <ThemeProvider>
            <LanguageProvider>
              <MainLayout>
                {children}
              </MainLayout>
            </LanguageProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
