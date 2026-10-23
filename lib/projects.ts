
export type Project = {
  number: string
  slug: string
  title: string
  category: string
  description: string
  overview: string
  role: string
  tools: string[]
  tags: string[]
  accent: string
  image: string
  outcome: string
  projectUrl?: string
  projectUrlLabel?: string
  downloadUrl?: string
  downloadLabel?: string
}

export const projects: Project[] = [
  {
    number: '01',
    slug: 'hiresphere',
    title: 'HireSphere',
    category: 'UI/UX Design',
    description:
      'Designed a mobile career platform concept to help users explore job opportunities, manage applications, and create CVs.',
    overview:
      'HireSphere is a mobile career platform concept that brings job discovery, application tracking, learning resources, community features, and CV management into one experience.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    tags: ['UI/UX', 'Mobile App', 'Career'],
    accent: 'peach',
    image: '/projects/hiresphere.png',
    outcome:
      'A mobile app design concept focused on helping users explore career opportunities and manage their job search activities.',
    projectUrl:
      'https://www.figma.com/design/m3rgLnOJWILgoUl8TcyquX/Hiresphere?node-id=0-1',
    projectUrlLabel: 'Open Figma Design',
  },
  {
    number: '02',
    slug: 'copyin',
    title: 'Copyin',
    category: 'System Analysis & Design',
    description:
      'Analyzed and designed a printing and stationery ordering system using system requirements and modeling diagrams.',
    overview:
      'Copyin is a system analysis and design project focused on a printing and stationery ordering system, including requirements and system modeling diagrams.',
    role: 'System Analyst & Designer',
    tools: ['System Analysis', 'DFD', 'UML'],
    tags: ['System Analysis', 'DFD', 'System Design'],
    accent: 'mint',
    image: '/projects/copyin.png',
    outcome:
      'System analysis and design documentation for a printing and stationery ordering system.',
    projectUrl:
      'https://docs.google.com/document/d/1FpJS_6GwK63WDpW1ek192uAUr2tyxCXXT3JhRPOUf2s/edit?usp=sharing',
    projectUrlLabel: 'View Project Documentation',
  },
  {
    number: '03',
    slug: 'furniland',
    title: 'Furniland',
    category: 'Web Development',
    description:
      'Developed a web-based furniture marketplace with product browsing, catalog filtering, shopping cart functionality, and administrative features.',
    overview:
      'Furniland is a web-based furniture marketplace designed to support product discovery and online shopping, with additional administrative functionality.',
    role: 'Web Developer',
    tools: ['Web Development', 'Database'],
    tags: ['Web App', 'Marketplace', 'E-commerce'],
    accent: 'lavender',
    image: '/projects/furniland.png',
    outcome:
      'A furniture marketplace project with product browsing, catalog filtering, shopping cart, and admin features.',
    downloadUrl: '/Furniland.zip',
    downloadLabel: 'Download Source Code (.zip)',
  },
  {
    number: '04',
    slug: 'healthcare-dashboard',
    title: 'Healthcare Revenue & Treatment Dashboard',
    category: 'Data Analytics · Excel',
    description:
      'Created a healthcare dashboard in Excel to analyze hospital revenue, patient data, treatment costs, daily visits, and service demand.',
    overview:
      'This dashboard presents healthcare-related metrics through summary figures and visualizations to help users explore revenue, patient activity, treatment costs, and service demand.',
    role: 'Data Analyst',
    tools: ['Microsoft Excel', 'PivotTable', 'Charts'],
    tags: ['Excel', 'Dashboard', 'Healthcare'],
    accent: 'yellow',
    image: '/projects/healthcaredb.png',
    outcome:
      'An Excel dashboard for reviewing healthcare metrics and exploring patterns in patient activity and treatment costs.',
    downloadUrl: '/Healthcare%20Dashboard.xlsx',
    downloadLabel: 'Download Excel Dashboard (.xlsx)',
  },
  {
    number: '05',
    slug: 'cafe-sales-dashboard',
    title: 'Cafe Sales Dashboard',
    category: 'Data Analytics · Tableau',
    description:
      'Analyzed cafe sales data and created a Tableau dashboard to visualize revenue, transactions, quantity, monthly trends, and payment methods.',
    overview:
      'The Cafe Sales Dashboard presents sales performance and purchasing patterns through interactive visualizations in Tableau.',
    role: 'Data Analyst',
    tools: ['Tableau', 'Data Visualization'],
    tags: ['Tableau', 'Dashboard', 'Sales Analytics'],
    accent: 'peach',
    image: '/projects/cafedb.png',
    outcome:
      'An interactive dashboard for exploring cafe sales performance, monthly trends, quantities, and payment methods.',
    projectUrl:
      'https://public.tableau.com/views/CafeSalesDashboard_17927533202690/Dashboard1',
    projectUrlLabel: 'Open Tableau Dashboard',
  },
  {
    number: '06',
    slug: 'relive',
    title: 'Relive',
    category: 'UI/UX Design',
    description:
      'Designed a wellness app concept with community support, counseling, and meditation features.',
    overview:
      'Relive is a wellness app concept that brings together community support, counseling, and meditation in a mobile experience.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    tags: ['UI/UX', 'Wellness', 'Mobile App'],
    accent: 'mint',
    image: '/projects/relive.png',
    outcome:
      'A mobile wellness app concept designed around accessible support and wellness activities.',
    projectUrl:
      'https://www.figma.com/design/5N8JSCoJkImKPnY8i8unHf/Relive?node-id=0-1',
    projectUrlLabel: 'Open Figma Design',
  },
  {
    number: '07',
    slug: 'aqquas',
    title: 'Aqquas',
    category: 'UI/UX Design',
    description:
      'Designed an aquarium hobbyist app concept to organize aquarium care information and maintenance routines.',
    overview:
      'Aqquas is a mobile app concept for aquarium hobbyists who want to organize aquarium information and care routines in one place.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    tags: ['UI/UX', 'Aquarium', 'Mobile App'],
    accent: 'lavender',
    image: '/projects/aqquas.png',
    outcome:
      'An aquarium hobbyist app concept focused on organizing information and aquarium maintenance activities.',
    projectUrl:
      'https://www.figma.com/design/MJQK0TiHU9XARsBBWSwHTw/Aqquas?node-id=48-2',
    projectUrlLabel: 'Open Figma Design',
  },
  {
    number: '08',
    slug: 'moneyrv',
    title: 'MoneyRv',
    category: 'UI/UX Design',
    description:
      'Designed a mobile app concept for an ancient and rare coin marketplace with articles, a collector forum, checkout, and user profiles.',
    overview:
      'MoneyRv is a mobile marketplace concept for rare coin collectors, combining coin discovery with educational content and community features.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    tags: ['UI/UX', 'Marketplace', 'Community'],
    accent: 'yellow',
    image: '/projects/moneyrv.png',
    outcome:
      'A mobile marketplace concept connecting rare coin browsing, collector discussions, articles, and checkout.',
    projectUrl:
      'https://www.figma.com/design/NgzYSgA2XAlClR4OLIrwdS/MoneyRV?node-id=0-1',
    projectUrlLabel: 'Open Figma Design',
  },
  {
    number: '09',
    slug: 'edulearn',
    title: 'EduLearn',
    category: 'UI/UX Design',
    description:
      'Designed a mobile learning app concept for managing courses, schedules, attendance, assignments, forums, and chatbot access.',
    overview:
      'EduLearn is a mobile learning app concept designed to bring academic activities and learning support features into one interface.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    tags: ['UI/UX', 'EdTech', 'Mobile App'],
    accent: 'peach',
    image: '/projects/edulearn.png',
    outcome:
      'A learning app concept covering course information, schedules, attendance, assignments, forums, and chatbot access.',
    projectUrl:
      'https://www.figma.com/design/gJIh6vJiG1Vd3TWhOAP4WW/EduLearn?node-id=0-1',
    projectUrlLabel: 'Open Figma Design',
  },
]
