// Edit verified personal information here. Empty values are never rendered.
export const profile = {
  name: 'Logann Tuttle',
  headline: 'Data Analyst. Developer. Problem Solver.',
  statement: 'I turn complex problems into intuitive tools, actionable insights, and better ways of working.',
  biography: 'I’m an early-career data analyst and developer interested in the space where business problems meet practical technology. I enjoy making sense of information, improving the way work gets done, and turning a complicated process into something people can use with confidence.',
  education: [{ institution: 'Purdue University', qualification: 'B.S. Applied Statistics · Expected May 2027', detail: 'Minors in Management and Mathematics. Certificates in Applications of Data Science and Entrepreneurship and Innovation. Dean’s List.' }],
  email: 'Logannt04@gmail.com', linkedin: 'https://www.linkedin.com/in/logann-tuttle-aa38622a5/', github: 'https://github.com/LTuttle99', resumePath: '/Logann_Tuttle_Resume.pdf',
  experience: [
    { label: 'AUGUST 2026 — PRESENT · BROTHERHOOD MUTUAL', title: 'Data Analyst, Part-Time', description: 'Analyze enterprise data, interpret findings with business and technical leadership, and improve reporting workflows.', metric: '~8', unit: 'hrs / week', caption: 'ESTIMATED TIME SAVED', points: ['Develop scripts in Python, SQL, Java, C, and JavaScript to identify trends and support decisions.', 'Extract and clean data from SQL Server, Microsoft Dynamics, and other enterprise sources.', 'Help prioritize dashboard requests and improve weekly reporting workflows.'] },
    { label: '2026 — PRESENT · PURDUE ADMISSIONS', title: 'Director of Training and Development', description: 'Lead training and professional development for more than 100 student staff members.', metric: '100+', unit: 'staff', caption: 'TRAINING & DEVELOPMENT', points: ['Designed and implemented a PostgreSQL database to centralize operational data.', 'Automated staff evaluations and attendance tracking to replace manual workflows.'] },
    { label: 'SUMMERS 2025 & 2026 · BROTHERHOOD MUTUAL', title: 'Data Analytics and Data Science Intern', description: 'Contributed to enterprise reporting in 2025 and served as data team lead in 2026.', metric: '02', unit: 'people', caption: 'ONE COLLABORATIVE TEAM', points: ['Developed Power BI reporting workflows for the D4P Data Accountability Project in 2025.', 'Led a two-person data team in 2026, conducting statistical analysis and writing scripts to support business decisions.'] },
    { label: 'MAY 2025 — MAY 2026 · THE DATA MINE, PURDUE', title: 'Teaching Assistant', description: 'Mentored students in a project-based data science course covering databases, data pipelines, and analytical problem solving.', metric: '', unit: '', caption: 'MENTORSHIP THROUGH PRACTICE', points: ['Guided migration of the American Mathematical Society’s legacy PostgreSQL database into a Tableau-ready analytics environment.', 'Guided students developing a generative AI application for Johnson & Johnson focused on patient data and clinical information.'] },
    { label: '2023 — PRESENT · PURDUE ADMISSIONS', title: 'Admissions Ambassador', description: 'Represent Purdue to prospective students and families through campus tours and admissions programming.', metric: '', unit: '', caption: 'COMMUNICATION & CONNECTION', points: ['Help prospective students and families understand the Purdue experience.'] },
  ],
  skills: [
    { name: 'Data Analytics', summary: 'Make the information useful.', items: ['Python', 'R', 'SQL', 'Power BI', 'Tableau', 'Excel', 'SQL Server', 'Data cleaning'] },
    { name: 'Software Development', summary: 'Build around the problem.', items: ['JavaScript', 'Java', 'C', 'HTML', 'CSS', 'PostgreSQL', 'Database integration'] },
    { name: 'Automation and AI', summary: 'Find a better way to work.', items: ['Workflow automation', 'Staff evaluation automation', 'Attendance tracking', 'Generative AI mentorship'] },
    { name: 'Business and Operations', summary: 'Connect people and execution.', items: ['Team leadership', 'Collaboration', 'Business process improvement', 'Workflow design', 'Microsoft Dynamics', 'Jira', 'Applied Epic'] },
  ],
};

// V2 content is based on the supplied résumé and personal statements.
export const identity = {
  portrait: { src: '/images/logann-tuttle.webp', width: 800, height: 800, alt: 'Logann Tuttle wearing glasses and a pink collared shirt.' },
  about: {
    eyebrow: 'THE PERSON BEHIND THE PROCESS',
    heading: { first: 'Curiosity meets', second: 'practical thinking.' },
    lead: 'I like asking better questions. And building useful answers.',
    drivesTitle: 'What Drives Me',
    drives: 'I like improving systems and finding a more useful way forward. Understanding the business problem, asking clear questions, and building a practical solution matter just as much to me as the technology itself.',
    journeyTitle: 'My Journey',
    journey: 'I’m studying Applied Statistics at Purdue University, with graduation expected in May 2027. Alongside my studies, I’ve worked in enterprise analytics, led a two-person internship data team, mentored data science students, and helped improve admissions operations.',
    beyondTitle: 'Beyond Work',
    beyond: 'Fitness has taught me to value consistent effort over quick results. I also enjoy anime and exploring different cultural perspectives, and I’m interested in learning more about music. Those interests keep me curious beyond the work in front of me.',
  },
  impact: {
    heading: 'Making an Impact.',
    description: 'I like finding ways to make things work better. Sometimes that means building something new, and sometimes it means simplifying what’s already there.',
    metrics: [
      { value: 8, prefix: '~', suffix: '', unit: 'hours saved weekly', qualifier: 'Estimated team time savings', accessible: 'Approximately eight hours saved per week, an estimate of team time savings.', detailTitle: 'Making recurring work more useful', detail: 'I contributed to reporting workflow improvements, dashboard prioritization, and recurring reporting processes that saved our team an estimated eight hours per week.' },
      { value: 2, prefix: '0', suffix: '', unit: 'people on the data team', qualifier: 'Internship team lead · Summer 2026', accessible: 'Two-person data team. Served as internship team lead in summer 2026.', detailTitle: 'Leading through collaboration', detail: 'During my 2026 internship, I served as data team lead within a two-person team, bringing shared priorities and analytical thinking to our work.' },
    ],
    operationsTitle: 'A better process makes room for better work.',
    operations: ['Dashboard and report prioritization', 'Recurring reporting workflows', 'Reporting schedules and processes', 'General team efficiency'],
  },
  interests: {
    heading: 'Beyond the Screen.',
    description: 'There’s more to me than code, dashboards, and data.',
    fitness: {
      title: 'Built Through Consistency.',
      figure: '300+', unit: 'pounds lost', qualifier: 'My personal fitness journey',
      description: 'One of the biggest accomplishments in my life has nothing to do with technology. I’ve lost over 300 pounds through my personal fitness journey. That experience taught me a lot about consistency, discipline, and sticking with something even when progress takes time. It’s a mindset I try to carry into everything I do.',
      values: ['Consistency', 'Discipline', 'Resilience'],
    },
    anime: { title: 'Stories Beyond Borders.', label: 'ANIME & CULTURAL CURIOSITY', description: 'I’ve always enjoyed anime, but what makes it especially interesting to me is how much there is to learn beyond the shows themselves. I enjoy exploring different stories, perspectives, and cultures through it.' },
    music: { title: 'Always Exploring.', label: 'MUSIC & DISCOVERY', description: 'Music is something I’ve been wanting to learn more about. I enjoy discovering new things, and it’s another area where I’m excited to expand my interests and understanding.' },
  },
  contact: {
    heading: 'Let’s Make Something Happen.',
    description: 'Whether it’s an opportunity, an idea, or an interesting problem, I’m always interested in connecting.',
  },
};

export type JourneyMilestone = {
  id: string;
  kind: 'employment' | 'education';
  period: string;
  title: string;
  organization: string;
  description: string;
  points: string[];
  featured: boolean;
};

// Chronological by verified start date; education is shown as an expected milestone,
// not an invented enrollment date. Role details come from the existing résumé content.
export const journey: JourneyMilestone[] = [
  { id: 'admissions', kind: 'employment', period: '2023 — Present', title: profile.experience[4].title, organization: 'Purdue University Office of Admissions', description: profile.experience[4].description, points: profile.experience[4].points, featured: false },
  { id: 'internship', kind: 'employment', period: 'Summers 2025 & 2026', title: profile.experience[2].title, organization: 'Brotherhood Mutual Insurance Company', description: profile.experience[2].description, points: profile.experience[2].points, featured: true },
  { id: 'teaching', kind: 'employment', period: 'May 2025 — May 2026', title: profile.experience[3].title, organization: 'The Data Mine · Purdue University', description: profile.experience[3].description, points: profile.experience[3].points, featured: false },
  { id: 'training', kind: 'employment', period: '2026 — Present', title: profile.experience[1].title, organization: 'Purdue University Office of Admissions', description: profile.experience[1].description, points: profile.experience[1].points, featured: false },
  { id: 'analyst', kind: 'employment', period: 'August 2026 — Present', title: profile.experience[0].title, organization: 'Brotherhood Mutual Insurance Company', description: profile.experience[0].description, points: profile.experience[0].points, featured: true },
  { id: 'education', kind: 'education', period: 'Expected May 2027', title: 'B.S. Applied Statistics', organization: profile.education[0].institution, description: 'Applied Statistics, with minors in Management and Mathematics.', points: ['Certificates in Applications of Data Science and Entrepreneurship and Innovation.'], featured: true },
];
