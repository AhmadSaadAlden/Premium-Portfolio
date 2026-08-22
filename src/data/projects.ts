import Portfolio from '../../public/assest/images/projects/Portfolio.png'
import Education from '../../public/assest/images/projects/education.png'
import Eshop from '../../public/assest/images/projects/eshop.png'
import Dashboard from '../../public/assest/images/projects/dashboard.png'
import MediaTok from '../../public/assest/images/projects/mediaTok.png'

import { StaticImageData } from 'next/image';

export interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  image: string | StaticImageData;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'portfolio',
    titleKey: 'project1Title',
    descKey: 'project1Desc',
    image: Portfolio,
    tags: ['Next.js', 'React', 'Shadcn Ui' ,'Tailwind CSS', 'Redux Toolkit', 'TypeScript', 'Responsive Design', 'Vercel', 'Git-Hub'],
    githubUrl: 'https://github.com/AhmadSaadAlden',
    liveUrl: '#',
  },
  {
    id: 'Educational-Platform',
    titleKey: 'project2Title',
    descKey: 'project2Desc',
    image: Education,
    tags: ['Next.js', 'React.js', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Vercel', 'Git-Hub'],
    githubUrl: 'https://github.com/AhmadSaadAlden/Learn-Hub',
    liveUrl: 'https://learn-hub-nine-delta.vercel.app/',
  },
  {
    id: 'Ecommerce-Eshop',
    titleKey: 'project3Title',
    descKey: 'project3Desc',
    image: Eshop,
    tags: ['React.js', 'React-Router', 'React-Hooks', 'Tailwind CSS', 'Responsive Design', 'Vercel', 'Git-Hub'],
    githubUrl: 'https://github.com/AhmadSaadAlden/React-Ecommerce-Esop/',
    liveUrl: 'https://react-ecommerce-esop.vercel.app/',
  },
  {
    id: 'dashboard',
    titleKey: 'project4Title',
    descKey: 'project4Desc',
    image: Dashboard,
    tags: ['React.js', 'React-Router', 'React-Hooks', 'Tailwind CSS', 'TypeScript', 'RESTFULL API', 'Responsive Design', 'Vercel', 'Git-Hub'],
    githubUrl: 'https://github.com/AhmadSaadAlden/Dashboard',
    liveUrl: 'https://dashboard-flame-sigma-81.vercel.app/',
  },
  {
    id: 'media-tok',
    titleKey: 'project5Title',
    descKey: 'project5Desc',
    image: MediaTok,
    tags: ['HTML', 'CSS', 'JS', 'Responsive Design', 'Git-Hub'],
    githubUrl: 'https://github.com/AhmadSaadAlden/media-Tok',
    liveUrl: 'https://ahmadsaadalden.github.io/media-Tok/',
  },
];