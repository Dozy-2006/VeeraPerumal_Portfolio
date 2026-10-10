import type { Project, ExperienceItem, EducationItem, RecognitionItem, SkillCategory } from '../types/portfolio';

export const personalInfo = {
  name: 'VEERA PERUMAL S',
  shortName: 'Veera Perumal',
  role: 'Software Development | Java | Artificial Intelligence & Data Science',
  location: 'Tiruchendur, Tamil Nadu, India',
  email: 'veeraperumal27112005@gmail.com',
  phone: '+91 88077 72699',
  github: 'https://github.com/VeeraperumalS27112005',
  linkedin: 'https://www.linkedin.com/in/veera-perumal-s',
  resumeUrl: './veera-perumal-resume.pdf',
  heroIntro: "HELLO, I'M VEERA PERUMAL",
  heroHeading: 'Building practical software and intelligent systems.',
  heroDescription:
    "I'm an Artificial Intelligence & Data Science undergraduate at National Engineering College, interested in software development, data-driven applications, and building solutions to real-world problems.",
  statusNote: 'Undergraduate Student • Available for Software Engineering Roles & Internships',
};

export const aboutData = {
  sectionLabel: '01 / ABOUT',
  heading: 'A little about me.',
  paragraphs: [
    "I am an undergraduate student pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at National Engineering College, Kovilpatti. My primary technical focus centers on software development, core Java systems, and data-driven computational applications.",
    "Rather than treating engineering as purely abstract theory, I enjoy building software that solves concrete, operational problems. This focus has driven me to develop analytical tools that trace financial fraud patterns, desktop systems that bridge real-time audio pipelines with computer vision, and interactive business intelligence dashboards for law enforcement.",
    "I value readable architecture, disciplined problem-solving, and clean interfaces that give users immediate clarity over complex datasets. I am continuously deepening my understanding of software engineering fundamentals, data algorithms, and applied machine learning.",
  ],
  quickFacts: [
    { label: 'Current Degree', value: 'B.Tech in Artificial Intelligence & Data Science' },
    { label: 'Institution', value: 'National Engineering College, Kovilpatti' },
    { label: 'Primary Language', value: 'Java & Python' },
    { label: 'Core Interests', value: 'Software Development, AI & Computer Vision' },
  ],
};

export const projectsData: Project[] = [
  {
    id: 'transaction-trail-visualizer',
    number: '01',
    title: 'Transaction Trail Visualizer',
    tagline: 'Hierarchical analytical tool for forensic financial investigation and money laundering pattern tracing.',
    problem:
      'Financial investigators and fraud analysts often struggle to detect complex fund movements across flat spreadsheets and relational records, making it difficult to uncover multi-layered financial crimes quickly.',
    implementation:
      'Engineered an analytical web platform that parses flat transactional datasets into interactive hierarchical network graphs, allowing forensic investigators to traverse multi-hop transfer chains and immediately isolate structuring, layering, and cyclical fund routes.',
    technologies: ['JavaScript', 'Data Visualization', 'Graph Algorithms', 'HTML5/CSS3', 'Data Analysis'],
    keyFeatures: [
      'Interactive hierarchical network visualization of account-to-account relationships',
      'Dynamic detection of circular fund transfers and multi-entity layering schemes',
      'Configurable transaction amount filtering, directional edge routing, and node metrics',
      'Designed to reduce investigation turnaround time for fraud analysts',
    ],
    githubUrl: 'https://github.com/VeeraperumalS27112005',
    visualType: 'transaction-visualizer',
  },
  {
    id: 'ai-notetaker',
    number: '02',
    title: 'AI NoteTaker',
    tagline: 'Desktop meeting assistant pairing virtual audio loopback, YOLO participant detection, and Gemini 2.0 Flash summaries.',
    problem:
      'Virtual meetings across platforms like Zoom and Google Meet require participants to split focus between active discussion and comprehensive note-taking, often leading to incomplete documentation and lost action items.',
    implementation:
      'Constructed a desktop assistant using Python and Tkinter. Engineered an audio loopback pipeline using Stereo Mix to capture pure system audio without microphone feedback, paired with real-time threaded speech-to-text, YOLO computer vision for participant detection, and Google Gemini 2.0 Flash API integration for structured extraction.',
    technologies: ['Python', 'Tkinter', 'Stereo Mix Audio Loopback', 'Speech-to-Text', 'YOLO Computer Vision', 'Google Gemini 2.0 Flash API'],
    keyFeatures: [
      'Pure system audio capture via Stereo Mix avoiding speaker reverberation or microphone echo',
      'Threaded asynchronous speech-to-text pipeline maintaining responsive desktop UI performance',
      'YOLO computer vision participant tracking with timestamped activity logs',
      'Gemini 2.0 Flash automated extraction of key decisions, discussion items, and assigned tasks',
    ],
    githubUrl: 'https://github.com/VeeraperumalS27112005',
    visualType: 'ai-notetaker',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'thoothukudi-police-internship',
    organization: 'Office of the Superintendent of Police, Thoothukudi',
    position: 'Intern',
    projectTitle: 'Crime Flow Analyzer',
    location: 'Thoothukudi, Tamil Nadu, India',
    scope: 'Law Enforcement Business Intelligence & Spatial-Temporal Analytics',
    summary:
      'Developed a full-stack, interactive Business Intelligence (BI) dashboard for the Thoothukudi District Police to visualize, investigate, and analyze district-wide crime patterns.',
    implementationHighlights: [
      'Architected a custom Node.js backend to ingest and process raw incident records stored in Google Sheets',
      'Engineered an interactive, high-performance JavaScript frontend displaying cross-sectional analytical charts and crime heat metrics',
      'Implemented dynamic filtering by jurisdiction, crime typology, and temporal occurrence',
      'Designed executive visual dashboards that enable officers to derive actionable intelligence directly from raw departmental data',
    ],
    technologies: ['Node.js', 'JavaScript', 'Google Sheets API', 'Data Visualization', 'Business Intelligence (BI)'],
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages applied across systems programming, scripting, and backend workflows.',
    items: ['Java', 'Python', 'C', 'SQL'],
  },
  {
    title: 'Technical Competencies',
    description: 'Disciplines practiced across analytical projects and practical engineering tools.',
    items: ['Data Analysis', 'Data Visualization', 'Machine Learning'],
  },
  {
    title: 'Areas of Interest',
    description: 'Domains where I focus my continued study, technical reading, and project exploration.',
    items: [
      'Software Development',
      'Artificial Intelligence',
      'Machine Learning & Deep Learning',
      'Computer Vision',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'nec-kovilpatti',
    institution: 'National Engineering College, Kovilpatti',
    degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
    period: '2023 – 2027',
    gradeLabel: 'Cumulative GPA',
    gradeValue: '7.81 (Till 7 sem)',
    highlights: [
      'Core coursework in Object-Oriented Programming (Java), Data Structures & Algorithms, Database Management Systems (SQL), Machine Learning, and Computer Vision.',
      'Active participant in regional coding events and collegiate technical hackathons.',
    ],
  },
  {
    id: 'kamlavati-school',
    institution: 'Kamlavati Senior Secondary School',
    degree: 'Higher Secondary Education (HSC)',
    period: '2022 – 2023',
    gradeLabel: 'Academic Percentage',
    gradeValue: '75.6%',
    highlights: ['Strong foundation in Mathematics, Physics, and Computer Science fundamentals.'],
  },
];

export const recognitionData: RecognitionItem[] = [
  {
    id: 'tech-trials-winner',
    title: 'Winner — Tech Trials Coding Event',
    event: 'Competitive Programming & Problem Solving Contest',
    organization: 'PSG College of Technology',
    type: 'Award',
  },
  {
    id: 'intellina-finalist',
    title: 'Finalist — INTELLINA HACKATHON',
    event: 'Collegiate Hackathon & System Prototyping',
    organization: 'Coimbatore Institute of Technology',
    type: 'Hackathon Finalist',
  },
  {
    id: 'udemy-java-master',
    title: 'Certification — Java Beginner to Master',
    event: 'Comprehensive Core Java, OOP Architecture & Collections Framework',
    organization: 'Udemy',
    type: 'Certification',
  },
];

export const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Recognition', href: '#recognition' },
  { name: 'Contact', href: '#contact' },
];
