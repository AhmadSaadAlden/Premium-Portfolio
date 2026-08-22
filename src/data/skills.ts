export interface Skill {
    name : string
    category : 'frontend' | 'stateAndLogic' | 'toolsAndWorkflow'
    level : string // Advanced ot Expert
}

export const SKILLS_DATA: Skill[] = [
  // Front-End
  { name: 'React.js', category: 'frontend', level: 'Advanced' },
  { name: 'Next.js (App Router)', category: 'frontend', level: 'Advanced' },
  { name: 'TypeScript', category: 'frontend', level: 'Advanced' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Expert' },
  { name: 'BootStrap', category: 'frontend', level: 'Advanced' },
  { name: 'Shadcn UI', category: 'frontend', level: 'Advanced' },
  { name: 'HTML5 / CSS3 / JavaScript (ES6+)', category: 'frontend', level: 'Expert' },
  { name: 'Responsive Designe', category: 'frontend', level: 'Advanced' },

  // State & Logic
  { name: 'Redux Toolkit', category: 'stateAndLogic', level: 'Advanced' },
  { name: 'RESTful APIs Integration', category: 'stateAndLogic', level: 'Advanced' },
  { name: 'i18n & RTL/LTR Architecture', category: 'stateAndLogic', level: 'Expert' },

  // Tools & Ecosystem
  { name: 'Git & GitHub', category: 'toolsAndWorkflow', level: 'Advanced' },
  { name: 'Vercel Deployment', category: 'toolsAndWorkflow', level: 'Advanced' },
  { name: 'VS Code & Web Dev Tools', category: 'toolsAndWorkflow', level: 'Expert' },
];