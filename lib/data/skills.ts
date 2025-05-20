import { Skill } from '@/types/skills';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  FaGit,
  FaJava,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaAws,
  FaReact,
  FaBootstrap,
  FaGitlab,
} from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import {
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiNextra,
  SiServerless,
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';
export const skills: Skill[] = [
  {
    Icon: FaHtml5,
    name: 'HTML',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: ['Frontend'],
  },
  {
    Icon: IoLogoJavascript,
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: ['Frontend', 'Backend'],
  },
  {
    Icon: SiTypescript,
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    category: ['Frontend', 'Backend'],
  },
  {
    Icon: FaReact,
    name: 'React',
    link: 'https://react.dev/',
    category: ['Frontend'],
  },
  {
    Icon: SiNextdotjs,
    name: 'NextJs',
    link: 'https://nextjs.org/',
    category: ['Frontend'],
  },
  {
    Icon: TbBrandThreejs,
    name: 'ThreeJs',
    link: 'https://threejs.org/',
    category: ['Frontend'],
  },
  {
    Icon: SiNextra,
    name: 'Nextra',
    link: 'https://nextra.site/ ',
    category: ['Frontend'],
  },
  {
    Icon: FaBootstrap,
    name: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    category: ['Frontend'],
  },
  {
    Icon: FaAws,
    name: 'AWS',
    link: 'https://sass-lang.com/',
    category: ['DevOps'],
  },
  {
    Icon: SiTailwindcss,
    name: 'Tailwind',
    link: 'https://tailwindcss.com/',
    category: ['Frontend'],
  },
  {
    Icon: FaNodeJs,
    name: 'NodeJs',
    link: 'https://nodejs.org/en',
    category: ['Backend'],
  },
  {
    Icon: SiServerless,
    name: 'Serverless',
    link: 'https://www.serverless.com/',
    category: ['Backend'],
  },
  {
    Icon: SiPython,
    name: 'Python',
    link: 'https://www.python.org/',
    category: ['Backend'],
  },
  {
    Icon: FaCss3Alt,
    name: 'CSS',
    link: 'https://sass-lang.com/',
    category: ['Frontend'],
  },
  {
    Icon: FaJava,
    name: 'Java',
    link: 'https://www.java.com/en/',
    category: ['Backend'],
  },
  {
    Icon: SiMongodb,
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
    category: ['Database'],
  },
  {
    Icon: GrMysql,
    name: 'MySQL',
    link: 'https://www.mysql.com/',
    category: ['Database'],
  },
  {
    Icon: FaGit,
    name: 'Git',
    link: 'https://git-scm.com/',
    category: ['Tools'],
  },
  {
    Icon: FaGithub,
    name: 'GitHub',
    link: 'https://github.com/',
    category: ['Tools'],
  },
  {
    Icon: FaGitlab,
    name: 'Gitlab',
    link: 'https://github.com/',
    category: ['Tools'],
  },
];

export const skillCategories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
  'Tools',
] as const;
