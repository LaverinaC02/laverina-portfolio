
export type ProcessStep = {
  number: string
  title: string
  description: string
  image: string
}

export type Project = {
  number: string
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  accent: string
  image: string
  overview: string
  role: string
  tools: string[]
  process: string
  outcome: string
  projectUrl: string
  projectUrlLabel: string
  processSteps: ProcessStep[]
}

export const projects: Project[] = [
  {
    number: '01',
    slug: 'hiresphere',
    title: 'HireSphere',
    category: 'UI/UX Design',
    description:
      'Designed a mobile career platform concept to help users explore job opportunities, manage applications, and create CVs.',
    tags: ['Figma', 'Mobile App', 'UX'],
    accent: 'peach',
    image: '/projects/hiresphere.png',
    overview:
      'A mobile career platform concept that brings job discovery, application tracking, learning resources, community features, and CV management into one experience.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    process:
      'Planned the career-related user journey, organized key features, designed mobile screens, and connected the screens into a prototype.',
    outcome:
      'A mobile app concept covering job discovery, application management, learning progress, and CV creation.',
    projectUrl:
      'https://www.figma.com/design/m3rgLnOJWILgoUl8TcyquX/Hiresphere?node-id=0-1&t=6RqHd6qp1HXLbMGa-1',
    projectUrlLabel: 'Open Figma Design',
    processSteps: [
      {
        number: '01',
        title: 'User Flow & Wireframing',
        description:
          'Organized the main career-related user journey and planned screen layouts for job discovery, applications, learning, and CV management.',
        image: '/projects/hiresphere-wireframe.png',
      },
      {
        number: '02',
        title: 'UI Design',
        description:
          'Designed mobile interfaces for job listings, application tracking, community features, and learning progress.',
        image: '/projects/hiresphere-design.png',
      },
      {
        number: '03',
        title: 'Prototyping',
        description:
          'Connected the designed screens to demonstrate navigation between the main career platform features.',
        image: '/projects/hiresphere-prototype.png',
      },
    ],
  },
  {
    number: '02',
    slug: 'copyin',
    title: 'Copyin',
    category: 'System Analysis & Design',
    description:
      'Analyzed and designed a printing and stationery ordering system using system requirements and modeling diagrams.',
    tags: ['DFD', 'Use Case', 'System Design'],
    accent: 'mint',
    image: '/projects/copyin.png',
    overview:
      'A printing and stationery ordering system project focused on analyzing system requirements and representing the proposed system through structured diagrams.',
    role: 'System Analyst & Designer',
    tools: ['System Modeling', 'DFD', 'UML'],
    process:
      'Analyzed system requirements and prepared diagrams to document system boundaries, data flows, user interactions, structure, and activities.',
    outcome:
      'A system analysis and design documentation package. Refer to the linked project document for the actual scope and deliverables.',
    projectUrl:
      'https://docs.google.com/document/d/1FpJS_6GwK63WDpW1ek192uAUr2tyxCXXT3JhRPOUf2s/edit?usp=sharing',
    projectUrlLabel: 'View Project Documentation',
    processSteps: [
      {
        number: '01',
        title: 'Requirement Analysis',
        description:
          'Documented the system requirements and identified the main processes and user interactions for the ordering system.',
        image: '/projects/copyin-requirements.png',
      },
      {
        number: '02',
        title: 'Context Diagram, DFD & Use Cases',
        description:
          'Represented the system boundary, data flows, and user interactions using a context diagram, Data Flow Diagrams, and use case diagrams.',
        image: '/projects/copyin-diagrams.png',
      },
      {
        number: '03',
        title: 'Class & Activity Diagrams',
        description:
          'Used class diagrams to represent the planned system structure and activity diagrams to describe process flows.',
        image: '/projects/copyin-system-design.png',
      },
    ],
  },
  {
    number: '03',
    slug: 'furniland',
    title: 'Furniland',
    category: 'Web Development',
    description:
      'Developed a web-based furniture marketplace with product browsing, catalog filtering, shopping cart functionality, and administrative features.',
    tags: ['Web App', 'Marketplace', 'Admin'],
    accent: 'lavender',
    image: '/projects/furniland.png',
    overview:
      'A furniture marketplace concept for browsing furniture products and supporting shopping and administrative activities.',
    role: 'Web Developer',
    tools: ['Web Development', 'SQL'],
    process:
      'Worked on the marketplace experience, product catalog, shopping features, and administrative functionality.',
    outcome:
      'A web-based furniture marketplace with customer-facing and administrative features.',
    projectUrl: 'mailto:laverinac@gmail.com?subject=Furniland%20Project',
    projectUrlLabel: 'Request Project Access',
    processSteps: [
      {
        number: '01',
        title: 'Data & System Structure',
        description:
          'Organized the information required to support product browsing, users, and marketplace transactions.',
        image: '/projects/furniland-database.png',
      },
      {
        number: '02',
        title: 'Product Catalog & Shopping',
        description:
          'Worked on product browsing, catalog filtering, product information, and shopping cart functionality.',
        image: '/projects/furniland-customer-features.png',
      },
      {
        number: '03',
        title: 'Admin Features',
        description:
          'Developed administrative features to support marketplace management.',
        image: '/projects/furniland-admin.png',
      },
    ],
  },
  {
    number: '04',
    slug: 'healthcare-dashboard',
    title: 'Healthcare Revenue & Treatment Dashboard',
    category: 'Data Analytics · Excel',
    description:
      'Created a healthcare dashboard in Microsoft Excel to analyze hospital revenue, patient data, treatment costs, daily visits, and service demand.',
    tags: ['Excel', 'Dashboard', 'Healthcare'],
    accent: 'yellow',
    image: '/projects/healthcare-dashboard.png',
    overview:
      'A healthcare analytics dashboard designed to present hospital revenue, patient activity, treatment costs, and service demand through summary metrics and visualizations.',
    role: 'Data Analyst',
    tools: ['Microsoft Excel', 'PivotTable', 'Charts'],
    process:
      'Prepared healthcare data, organized summary metrics, and built charts to present key indicators in a dashboard.',
    outcome:
      'A dashboard for exploring healthcare performance metrics and patient service patterns.',
    projectUrl: 'mailto:laverinac@gmail.com?subject=Healthcare%20Dashboard',
    projectUrlLabel: 'Request Dashboard File',
    processSteps: [
      {
        number: '01',
        title: 'Data Preparation',
        description:
          'Prepared the healthcare dataset for analysis of revenue, patient activity, treatment costs, and service demand.',
        image: '/projects/healthcare-data.png',
      },
      {
        number: '02',
        title: 'Metrics & Visualization',
        description:
          'Organized summary metrics and charts to examine hospital revenue, daily patient visits, treatment costs, and service demand.',
        image: '/projects/healthcare-charts.png',
      },
      {
        number: '03',
        title: 'Dashboard Development',
        description:
          'Combined the main metrics and visualizations into an Excel dashboard for easier review of healthcare performance.',
        image: '/projects/healthcare-dashboard-process.png',
      },
    ],
  },
  {
    number: '05',
    slug: 'cafe-sales-dashboard',
    title: 'Cafe Sales Dashboard',
    category: 'Data Analytics · Tableau',
    description:
      'Analyzed cafe sales data and developed an interactive Tableau dashboard to visualize revenue, transactions, quantity, monthly trends, and payment methods.',
    tags: ['Tableau', 'Data Viz', 'Analytics'],
    accent: 'peach',
    image: '/projects/cafe-sales-dashboard.png',
    overview:
      'An interactive sales dashboard for exploring cafe performance, purchasing patterns, revenue, and payment methods.',
    role: 'Data Analyst',
    tools: ['Tableau', 'Data Visualization'],
    process:
      'Explored the sales dataset, analyzed key performance indicators, and organized interactive visualizations in Tableau.',
    outcome:
      'An interactive dashboard that makes cafe sales metrics and trends easier to explore.',
    projectUrl:
      'https://public.tableau.com/views/CafeSalesDashboard_17927533202690/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link',
    projectUrlLabel: 'Open Tableau Dashboard',
    processSteps: [
      {
        number: '01',
        title: 'Data Exploration',
        description:
          'Reviewed the sales data to understand transaction records, revenue, quantities, and payment methods.',
        image: '/projects/cafe-data.png',
      },
      {
        number: '02',
        title: 'Sales Analysis',
        description:
          'Analyzed revenue, transaction counts, quantities, spending patterns, and monthly sales trends.',
        image: '/projects/cafe-analysis.png',
      },
      {
        number: '03',
        title: 'Tableau Dashboard',
        description:
          'Built interactive visualizations and summary metrics to explore sales performance and purchasing patterns.',
        image: '/projects/cafe-dashboard-process.png',
      },
    ],
  },
  {
    number: '06',
    slug: 'relive',
    title: 'Relive',
    category: 'UI/UX Design',
    description:
      'Designed a wellness app concept with community support, counseling, and meditation features.',
    tags: ['Wellness', 'Figma', 'Mobile App'],
    accent: 'mint',
    image: '/projects/relive.png',
    overview:
      'A mobile wellness app concept designed to make mental wellness resources and support features accessible through a clear interface.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    process:
      'Organized the wellness features, planned screen layouts, designed the mobile interface, and prepared a prototype of the main experience.',
    outcome:
      'A wellness app concept featuring community support, counseling, and meditation.',
    projectUrl:
      'https://www.figma.com/design/5N8JSCoJkImKPnY8i8unHf/Relive?node-id=0-1&t=bRnd0ZcIEFugRxaa-1',
    projectUrlLabel: 'Open Figma Design',
    processSteps: [
      {
        number: '01',
        title: 'Feature Planning & Wireframing',
        description:
          'Organized the main wellness features and planned screen layouts for community support, counseling, and meditation.',
        image: '/projects/relive-wireframe.png',
      },
      {
        number: '02',
        title: 'UI Design',
        description:
          'Designed the mobile interface for accessing wellness resources and support features.',
        image: '/projects/relive-design.png',
      },
      {
        number: '03',
        title: 'Prototyping',
        description:
          'Connected the key screens to demonstrate navigation through the planned wellness features.',
        image: '/projects/relive-prototype.png',
      },
    ],
  },
  {
    number: '07',
    slug: 'aqquas',
    title: 'Aqquas',
    category: 'UI/UX Design',
    description:
      'Designed an aquarium hobbyist app concept to organize aquarium care information and maintenance routines.',
    tags: ['UI/UX', 'Information Design', 'Figma'],
    accent: 'lavender',
    image: '/projects/aqquas.png',
    overview:
      'A mobile app concept for aquarium hobbyists, designed to make aquarium information and care routines easier to access.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    process:
      'Planned the information hierarchy, developed wireframes, designed the interface, and connected screens into a prototype.',
    outcome:
      'An aquarium hobbyist app concept for accessing aquarium information and organizing maintenance routines.',
    projectUrl:
      'https://www.figma.com/design/MJQK0TiHU9XARsBBWSwHTw/Aqquas?node-id=48-2&t=iS1GCdfjx8MK61Nc-1',
    projectUrlLabel: 'Open Figma Design',
    processSteps: [
      {
        number: '01',
        title: 'Wireframing',
        description:
          'Planned screen layouts, information hierarchy, and navigation for aquarium information and maintenance routines.',
        image: '/projects/aqquas-wireframe.png',
      },
      {
        number: '02',
        title: 'UI Design',
        description:
          'Designed the visual interface for aquarium information, care routines, and related app features.',
        image: '/projects/aqquas-design.png',
      },
      {
        number: '03',
        title: 'Prototyping',
        description:
          'Connected screens into an interactive prototype to demonstrate navigation and the intended user experience.',
        image: '/projects/aqquas-prototype.png',
      },
    ],
  },
  {
    number: '08',
    slug: 'moneyrv',
    title: 'MoneyRv',
    category: 'UI/UX Design',
    description:
      'Designed a mobile app concept for an ancient and rare coin marketplace with articles, a collector forum, checkout, and user profiles.',
    tags: ['Marketplace', 'Community', 'Prototype'],
    accent: 'yellow',
    image: '/projects/moneyrv.png',
    overview:
      'A mobile marketplace concept for rare coin collectors, combining product discovery with educational content and community features.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    process:
      'Organized the main user journeys, designed marketplace and community interfaces, and prepared a prototype of key screens.',
    outcome:
      'A mobile app concept connecting rare coin browsing, collector discussions, articles, and checkout.',
    projectUrl:
      'https://www.figma.com/design/NgzYSgA2XAlClR4OLIrwdS/MoneyRV?node-id=0-1&t=0IrDs6vwEA5h0ifW-1',
    projectUrlLabel: 'Open Figma Design',
    processSteps: [
      {
        number: '01',
        title: 'Feature Planning & User Flow',
        description:
          'Organized the main journeys for browsing rare coins, reading articles, joining collector discussions, and managing profiles.',
        image: '/projects/moneyrv-wireframe.png',
      },
      {
        number: '02',
        title: 'Marketplace UI Design',
        description:
          'Designed the interface for coin discovery, product information, collector community features, and checkout.',
        image: '/projects/moneyrv-design.png',
      },
      {
        number: '03',
        title: 'Prototyping',
        description:
          'Connected the main screens to demonstrate navigation through the marketplace and community experience.',
        image: '/projects/moneyrv-prototype.png',
      },
    ],
  },
  {
    number: '09',
    slug: 'edulearn',
    title: 'EduLearn',
    category: 'UI/UX Design',
    description:
      'Designed a mobile learning app concept for managing courses, schedules, attendance, assignments, forums, and chatbot access.',
    tags: ['EdTech', 'Chatbot', 'Mobile App'],
    accent: 'peach',
    image: '/projects/edulearn.png',
    overview:
      'A mobile learning app concept that brings academic activities and learning support into one interface.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    process:
      'Mapped student activities, designed the main academic interfaces, and connected key screens into a prototype.',
    outcome:
      'A learning app concept covering course information, schedules, attendance, assignments, forums, and chatbot access.',
    projectUrl:
      'https://www.figma.com/design/gJIh6vJiG1Vd3TWhOAP4WW/EduLearn?node-id=0-1&t=VLMucScUp27KvJ2c-1',
    projectUrlLabel: 'Open Figma Design',
    processSteps: [
      {
        number: '01',
        title: 'Academic User Flow & Wireframing',
        description:
          'Mapped key student activities, including accessing courses, checking schedules, viewing attendance, and managing assignments.',
        image: '/projects/edulearn-wireframe.png',
      },
      {
        number: '02',
        title: 'UI Design',
        description:
          'Designed the interface for course information, schedules, attendance, assignments, forums, and chatbot access.',
        image: '/projects/edulearn-design.png',
      },
      {
        number: '03',
        title: 'Prototyping',
        description:
          'Connected the designed screens to demonstrate navigation between academic management and learning support features.',
        image: '/projects/edulearn-prototype.png',
      },
    ],
  },
]
