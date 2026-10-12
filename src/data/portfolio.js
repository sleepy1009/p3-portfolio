export const PROFILE = {
  name: 'Pham Quoc Cuong',
  role: 'Fresher Full-stack DEV / MES / ERP', 

  bio1: 'I’m a Software Engineering graduate specializing in Fullstack and MES development, I thrive on algorithmic challenges and efficient database design.',
  bio2: 'From optimizing complex NP-Hard scheduling to building AI-integrated web apps, I enjoy making complex logic work simply, eager to contribute to impactful enterprise software.',

  points: [
    { label: 'Major', value: 'Software Engineering' },
    { label: 'Education', value: 'Quang Ninh University of Industry · GPA [3.61/4.0]' },
    //{ label: 'Experience', value: '< 1 year' },
  ],

  email: 'cuongpq2004.it@gmail.com',

  links: {
    cv: '/cv.pdf', // public/cv.pdf
    github: 'https://github.com/sleepy1009',
  },
};

export const SKILLS = [
  { cat: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'] },
  { cat: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
  { cat: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
];

export const PROJECTS = [
  {
    title: 'Music Therapy',
    desc: 'Psychological consultation system and automatic emotional navigation with music, is architected based on the Weighted Euclidean Distance algorithm that combines the ISO principle in music and Large Language Models (LLMs).',
    tech: ['Python', 'Django REST', 'React', 'PostgreSQL', 'Gemini API'],
    image: '/projects/music-therapy.png',
    live: 'https://music-therapy-project.vercel.app/',
    repo: 'https://github.com/sleepy1009/MusicTherapyProject',
  },
  {
    title: 'MES-APS',
    desc: 'Production scheduling algorithm with simple constraints. Currently working on UI features.',
    tech: ['C++', 'Node.js', 'JavaScript', 'PostgreSQL', 'APS algorithm'],
    image: '/projects/mes-aps.png',
    live: '',
    repo: 'https://github.com/sleepy1009/mes-aps',
  },
  {
    title: 'Recipe Recommendation System',
    desc: 'Recommendation system for recipes, built with Flask and React, featuring a personalized recommendation algorithm based on user preferences and order history.',
    tech: ['Python', 'Flask', 'React', 'SQL Server'],
    image: '/projects/food-app.png',
    live: '',
    repo: 'https://github.com/blockmine224/FOOD_APP',
  },
];

// core: true, ortherwise false
export const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: [
      { name: 'C / C++', icon: 'cpp', core: true },
      { name: 'JavaScript', icon: 'js', core: true },
      
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'React', icon: 'react', core: true },
      { name: 'Tailwind CSS', icon: 'tailwind', core: true },
      { name: 'Django', icon: 'django', core: true },
      { name: 'Node.js / Express', icon: 'node', core: true },
      { name: 'Flask', icon: 'flask' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'SQL Server', icon: 'sqlserver', core: true },
      { name: 'PostgreSQL', icon: 'postgres', core: true },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
  },
  {
    label: 'AI & Algorithms',
    items: [
      { name: 'Recommendation algorithm', icon: 'recommend', core: true },
      { name: 'LLM API', icon: 'llm', core: true },
      { name: 'Production scheduling (APS)', icon: 'aps', core: true },
      { name: 'Prompt design', icon: 'prompt' },
    ],
  },
];

export const CERTIFICATES = [
  {
    name: 'TOEIC Listening & Reading',
    issuer: 'ETS · IIG Vietnam',
    date: '10/2026',
    score: '820',
    unit: ' / 990',
    verify: '', 
  },
  {
    name: 'SQL (Basic & Intermediate)',
    issuer: 'HackerRank',
    date: '09/2026',
    score: 'Intermediate',
    unit: '',
    verify: 'https://www.hackerrank.com/certificates/48e2e2b578e9',
  },
  {
    name: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: '09/2026',
    score: '',
    unit: '',
    verify: 'https://www.hackerrank.com/certificates/f12740bf72ef',
  },
];

export const CONTACT = {
  leetcode: {
    url: 'https://leetcode.com/u/QLm76H3sZl/',
    solved: 309,
    easy: 139,
    medium: 159,
    hard: 11,
    maxStreak: 115,
    activeDays: 234,
    submissionsYear: 657,
    badges: 4,
    latestBadge: '200 Days Badge 2026',
    asOf: '10/2026',
  },
  github: {
    url: 'https://github.com/sleepy1009',
    label: 'sleepy1009',
  },
};