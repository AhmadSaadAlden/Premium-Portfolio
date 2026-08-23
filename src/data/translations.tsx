export type Language = 'en' | 'ar'

export interface TranslationDictionary {
    nav : {
        about : string
        projects : string
        skills : string
        contact : string
        chat : string
    },
    mobileNav : {
        settings : string
    }
    hero : {
        titlePrefix: string
        badge: string
        name: string
        role: string
        description: string            
        primaryCta: string
        secondaryCta: string
        thirdCv : string
    },
    about: {
      aboutBadge : string
      title: string
      subtitle: string
      bioParagraph1: string
      bioParagraph2: string
      stats: {
        experience: string
        projects: string
        techStack: string
      },
    },
    education: {
        badge: string
        title: string
        subtitle: string
        items: {
            master: {
                degree: string
                institution: string
                period: string
                description: string
                status : string
            },
            bachelor: {
                degree: string
                institution: string
                period: string
                description: string
                status : string
            },
            tcc: {
                degree: string
                institution: string
                period: string
                description: string
                status : string
            },
        },
    },
    skills: {
        skillsBadge : string
        title: string
        subtitle: string
        categories: {
            frontend: string
            stateAndLogic: string
            toolsAndWorkflow: string
        },
    },
    projects: {
      projectBadge : string
      title: string
      subtitle: string
      viewCode: string
      liveDemo: string
      details: {
        project1Title: string
        project1Desc: string
        project2Title: string
        project2Desc: string
        project3Title: string
        project3Desc: string
        project4Title: string
        project4Desc: string
        project5Title: string
        project5Desc: string
      },
    },
    contact: {
        contactBadge : string
        title: string
        subtitle: string
        emailLabel: string
        emailCopied: string
        githubLabel: string
        gitHubVistor: string
        linkedinLabel: string
        linkedInVistor: string
        copySuccess: string
        whatsAppLabel : string
        WhatsAppVistor : string
        contactForm: {
            title: string
            subtitle: string
            successTitle: string
            successSubtitle: string
            nameLabel: string
            namePlaceholder: string,
            emailLabel: string
            emailPlaceholder: string
            messageLabel: string
            messagePlaceholder: string
            sendButton: string
        },
    },
    footer: {
      rights: string
      name: string
    },
}

export const translations : Record<Language, TranslationDictionary> = {
    en : {
        nav : {
            about : 'About',
            projects : 'Projects',
            skills : 'Skills',
            contact : 'Contact',
            chat : 'Let\'s Talk',
        },
        mobileNav : {
            settings : 'Settings'
        },

        hero: {
            badge: 'Available for new opportunities',
            titlePrefix: "Hello, I'm",
            name: 'Ahmad Saad Alden',
            role: 'IT Engineer & Front-End Developer',
            description:
                'Specialized in building modern, performant, and accessible web applications with rich user experiences using Next.js, Tailwind CSS, and Redux Toolkit, Shadcn UI.',
            primaryCta: 'View My Work',
            secondaryCta: 'Get In Touch',
            thirdCv : 'Download CV'
        },

        about: {
            aboutBadge: 'WHO I AM',
            title: 'About Me',
            subtitle: 'Passionate about building seamless, highly performant user interfaces',
            bioParagraph1:
                "I'm Ahmad, an IT Engineer and Front-End Developer with a strong passion for designing and developing modern, scalable web applications. My focus is on writing clean, maintainable code while delivering exceptional user experiences.",
            bioParagraph2:
                'I specialize in the React and Next.js ecosystem, pairing them with Tailwind CSS for styling and Redux Toolkit for complex state management, always adhering to seamless multi-language (RTL/LTR) and dark/light theme support.',
            stats: {
                experience: 'Years Experience',
                projects: 'Projects Completed',
                techStack: 'Tech Stack Skills',
            },
        },

        education: {
            badge: "Academic Journey",
            title: "Education & Qualifications",
            subtitle: "Academic qualifications and current software specialization",
            items: {
                master: {
                    degree: "Master's in Web Sciences",
                    institution: "Syrian Virtual University",
                    period: "2024 - Present",
                    description: "Advanced studies focused on modern web technologies, AI, And Security.",
                    status : "In Progress"
                },
                bachelor: {
                    degree: "Bachelor in Information Technology",
                    institution: "Syrian Virtual University",
                    period: "2020 - 2024",
                    description: "Specialized in software engineering, computer networks, and full-stack application development.",
                    status : "Completed"
                },
                tcc: {
                    degree: "Compouter Engineering",
                    institution: "Techincal Computer Collage",
                    period: "2016 - 2020",
                    description: "Specialized in Computer engineering, computer networks.",
                    status : "Completed"
                },
            },
        },

        skills: {
            skillsBadge: "SKILLS", 
            title: 'Skills & Tech Stack',
            subtitle: 'Technologies and tools I leverage to build scalable, high-performance web applications',
            categories: {
                frontend: 'Front-End Development',
                stateAndLogic: 'State & Architecture',
                toolsAndWorkflow: 'Tools & Ecosystem',
            },
        },

        projects: {
            projectBadge : 'PORTFOLIO',
            title: 'Featured Projects',
            subtitle: 'A selection of modern web applications and solutions I have built',
            viewCode: 'Source Code',
            liveDemo: 'Live Demo',
            details: {
                project1Title: 'Premium Portfolio Website',
                project1Desc: 'A highly responsive, clean-architecture application with full i18n support and theme persistence.',
                project2Title: 'Educational platform',
                project2Desc: 'Interactive Educational Platform - A comprehensive educational website that offers a variety of courses in an easy and organized manner.',
                project3Title: 'Ecommerce-Eshop',
                project3Desc: 'A commercial site for selling and showcasing digital technical equipment.',
                project4Title: 'Dashboard',
                project4Desc: 'product managment example `Add Product Edit Delete ` and registration.',
                project5Title: 'mediaTok',
                project5Desc: 'E-commerce product managment',
            },
        },

        contact: {
            contactBadge: "Let's Talk",
            title: 'Get In Touch',
            subtitle: "Have a project or job opportunity in mind? Feel free to reach out and let's connect.",
            emailLabel: 'Email Address',
            emailCopied: 'Copy email',
            githubLabel: 'GitHub Profile',
            gitHubVistor: 'Visit Profile',
            linkedinLabel: 'LinkedIn Profile',
            linkedInVistor: 'Visit Profile',
            copySuccess: 'Email copied to clipboard!',
            whatsAppLabel : 'WhatsApp business Profile',
            WhatsAppVistor : 'lets talk',
            contactForm: {
                title: "Send Me a Message",
                subtitle: "Your message will reach my inbox directly.",
                successTitle: "Message Sent Successfully!",
                successSubtitle: "Thank you for reaching out, I'll reply soon.",
                nameLabel: "Name",
                namePlaceholder: "Enter Your Name",
                emailLabel: "Email",
                emailPlaceholder: "Enter Your Email (example@gmail.com)",
                messageLabel: "Message",
                messagePlaceholder: "Tell me about your project...",
                sendButton: "Send Message",
            },
        },

        footer: {
            rights: 'All rights reserved.',
            name: 'Ahmad Saad Alden'
        },
    },
    /**------------------ */
    ar : {
        nav : {
            about : 'من أنا',
            projects : 'المشاريع',
            skills : 'المهارات',
            contact : 'تواصل معي',
            chat : 'تواصل معي',
        },
        mobileNav : {
            settings : 'الاعدادات'
        },

        hero: {
            badge: 'متاح للأعمال والفرص الجديدة',
            titlePrefix: 'أهلاً بك، أنا',
            name: 'أحمد سعد الدين',
            role: 'مهندس تقنية معلومات ومطور واجهات أمامية',
            description:
                'متخصص في بناء تطبيقات ويب حديثة، سريعة، ومزودة بواجهات مستخدم احترافية وتجارب استثنائية باستخدام Next.js و TailWind CSS و Redux Toolkit, Shadcn UI.',
            primaryCta: 'استكشف مشاريعي',
            secondaryCta: 'تواصل معي',
            thirdCv : 'تنزيل سيرتي الذاتية'
        },

        about: {
            aboutBadge: "من انا", 
            title: 'عنّي',
            subtitle: 'شغف ببناء واجهات مستخدم متكاملة وعالية الأداء',
            bioParagraph1:
                'أنا أحمد، مهندس تقنية معلومات ومطور واجهات أمامية، أمتلك شغفاً كبيراً بتصميم وبناء تطبيقات الويب الحديثة والسهلة الاستخدام. أركز على كتابة كود نظيف، قابل للتوسع، ومراعاة أفضل معايير تجربة المستخدم (UX) وأداء المواقع.',
            bioParagraph2:
                'أتخصص في تقنيات النظام البيئي لـ React و Next.js مع استخدام Tailwind CSS للتنسيقات وسلسلة أدوات Redux لإدارة الحالات المعقدة، مع الحرص الدائم على دعم متعدد اللغات (RTL/LTR) وأنظمة الألوان المظلمة والفاتحة.',
            stats: {
                experience: 'سنوات خبرة',
                projects: 'مشروع منجز',
                techStack: 'تقنيات نتقنها',
            },
        },

        education: {
            badge: "مساري الأكاديمي",
            title: "التعليم والشهادات",
            subtitle: "المؤهلات الأكاديمية والتخصص البرمجي الحالي",
            items: {
                master: {
                    degree: "ماجستير علوم الويب",
                    institution: "الجامعة الافتراضية السورية",
                    period: "2024 - الحالي",
                    description: "دراسة متقدمة تتركز حول تقنيات الويب الحديثة، الذكاء الاصطناعي، وواجهات المستخدم التكيّفية (Adaptive UI).",
                    status : "قيد الدراسة"
                },
                bachelor: {
                    degree: "إجازة في الهندسة / علوم الحاسوب",
                    institution: "الجامعة الافتراضية السورية",
                    period: "2019 - 2024",
                    description: "التخصص في هندسة البرمجيات، شبكات الحاسوب، وتطوير الأنظمة والتطبيقات البرمجية.",
                    status : "مكتمل"
                },
                tcc: {
                    degree: "هندسة حواسيب",
                    institution: "المعهد التقاني للحاسوب",
                    period: "2016 - 2020",
                    description: "تخصص في هندسة الحواسيب وشبكات عامة.",
                    status : "Completed"
                },
            },
        },

        skills: {
            skillsBadge: "خبراتي ", 
            title: 'المهارات والتقنيات',
            subtitle: 'الأدوات والتقنيات التي أستخدمها لبناء تطبيقات ويب حديثة وقابلة للتوسع',
            categories: {
                frontend: 'تطوير الواجهات (Front-End)',
                stateAndLogic: 'إدارة الحالة والمعمارية',
                toolsAndWorkflow: 'الأدوات وبيئة العمل',
            },
        },

        projects: {
            projectBadge : 'معرض اعمالي',
            title: 'ابرز مشاريعي ',
            subtitle: 'نماذج من الأعمال والتطبيقات التي قمت بتطويرها بأحدث التقنيات',
            viewCode: 'الكود المصدري',
            liveDemo: 'معاينة حية',
            details: {
                project1Title: 'موقع معرض الأعمال الشخصي',
                project1Desc: 'تطبيق ويب بمعمارية حديثة يدعم نظام اللغات المزدوج وتغيير المظهر مع إدارة كاملة للحالات.',
                project2Title: 'منصة تعليمية',
                project2Desc: 'منصة تعليمية تفاعلية - موقع إلكتروني تعليمي شامل يقدم مجموعة متنوعة من الدورات بطريقة سهلة ومنظمة.',
                project3Title: 'متجر الكتروني',
                project3Desc: 'موقع تجاري لبيع وعرض المعدات التقنية الرقمية.',
                project4Title: 'لوحة تحكم',
                project4Desc: 'مثال على إدارة المنتجات (إضافة منتج، تعديل، حذف) وعملية التسجيل.',
                project5Title: 'ميديا ​​توك',
                project5Desc: 'إدارة منتجات التجارة الإلكترونية',
            },
        },

        contact: {
            contactBadge: "تواصل معي",
            title: 'تواصل معي',
            subtitle: 'هل لديك مشروع أو فرصة عمل؟ يسعدني دائماً التواصل والحديث مع المهتمين.',
            emailLabel: 'البريد الإلكتروني',
            emailCopied: 'نسخ البريد',
            githubLabel: 'حساب GitHub',
            gitHubVistor: 'زيارة الحساب',
            linkedinLabel: 'حساب LinkedIn',
            linkedInVistor: 'زيارة الحساب',
            copySuccess: 'تم نسخ البريد الإلكتروني!',
            whatsAppLabel : 'WhatsApp business حساب',
            WhatsAppVistor : ' تواصل معي',
            contactForm: {
                title: "أرسل لي رسالة مباشرة",
                subtitle: "سيصلني إشعار فوري برسالتك وسأجيبك في أقرب وقت ممكن.",
                successTitle: "تم إرسال الرسالة بنجاح!",
                successSubtitle: "شكراً لتواصلك، سأرد عليك قريباً.",
                nameLabel: "الاسم",
                namePlaceholder: "ادخل اسمك ",
                emailLabel: "البريد الإلكتروني",
                emailPlaceholder: "ادخل ايميلك الشخصي (example@gmail.com) ",
                messageLabel: "الرسالة",
                messagePlaceholder: "اكتب تفاصيل مشروعك أو استفسارك هنا...",
                sendButton: "إرسال الرسالة",
            },
        },

        footer: {
            rights: 'جميع الحقوق محفوظة.',
            name: 'احمد سعد الدين'
        },
    }
}