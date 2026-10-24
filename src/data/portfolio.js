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
    title: 'MindMelody - Music Therapy',
    desc: [
      'Built a full-stack psychological therapy platform (React, Django, PostgreSQL) utilizing DASS-21 clinical assessments to quantify user mental states.',
      'Engineered a Weighted Euclidean Distance algorithm in Python to process 50,000+ tracks, generating therapeutic music trajectories (ISO-principle).',
      'Integrated Gemini API with Static RAG architecture to develop a Cognitive Behavioral Therapy (CBT) chatbot with an implicit feedback loop.',
      'Implemented strict safety guardrails, achieving high accuracy in detecting self-harm intents to trigger emergency SOS protocols.'
    ],
    tech: ['React', 'Django', 'PostgreSQL', 'Gemini API', 'TailwindCSS'],
    image: '/projects/mind-melody.png',
    live: 'https://music-therapy-project.vercel.app/',
    repo: 'https://github.com/sleepy1009/MusicTherapyProject',
  },
  {
    title: 'MES-APS - Production Scheduling System',
    desc: [
      'Built, tested and deployed end-to-end an MES-style scheduling system; schedules them under release/due dates, priorities, setup times, machine efficiency and breakdowns, with a Gantt chart and OTD, tardiness, utilization and bottleneck KPIs.',
      'Designed an PostgreSQL schema and a Node.js REST API; ran the C++17 scheduler in an N-API worker so the event loop is never blocked (about 0.55 s per run locally).',
      'Implemented a genetic algorithm reaching best-known solutions on 16/20 Lawrence benchmarks (best of 50 seeded runs); on a congested 10-order test it had 0 late orders vs.\ 3 (FIFO) and 2 (EDD) simple baselines.',
      'Added rescheduling at time \textit{T} after a machine breakdown.'
    ],
    tech: ['C++17', 'Node.js', 'React', 'PostgreSQL'],
    image: '/projects/mes-aps.png',
    live: 'https://mes-aps-rosy.vercel.app/',
    repo: 'https://github.com/sleepy1009/mes-aps',
  },
  {
    title: 'NutriPlan - Data-Driven Diet Recommendation',
    desc: [
      'Developed a full-stack health-tech platform to generate personalized dietary plans aimed at improving life expectancy and overall health.',
      'Implemented nutritional algorithms utilizing the Mifflin-St Jeor equation to accurately calculate users\' BMI, BMR, and TDEE, dynamically adjusting caloric targets based on weight goals.',
      'Engineered a recommendation engine that queries a comprehensive food database (USDA) to allocate precise macronutrient (Protein, Carbs, Fat) and micronutrient ratios.',
      'Built secure user authentication using JWT and developed features for users to track, customize, and save daily meal plans aligned with their metabolic profiles.'
    ],
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