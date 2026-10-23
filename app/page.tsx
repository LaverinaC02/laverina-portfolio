'use client'

import { useState } from 'react'


const projects = [
  {
    number: '01',
    title: 'HireSphere',
    category: 'UI/UX Design',
    description: 'Designed a mobile career platform concept in Figma to help users explore job opportunities, manage applications, and create CVs through a clear and user-friendly interface.',
    tags: ['Figma', 'Mobile App', 'UX'],
    accent: 'peach',
    image: '/projects/hiresphere.png',
    overview: 'A mobile career platform concept designed to help users explore job opportunities, manage applications, and create CVs in one place.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    process: 'Organized key career-related features and designed mobile interfaces for job discovery, application management, and CV creation.',
    outcome: 'A mobile app concept that brings essential job-seeking activities into one user-friendly experience.'
  },
  
  {
    number: '02',
    title: 'Copyin',
    category: 'System Analysis & Design',
    description: 'Analyzed and designed a printing and stationery ordering system by preparing system requirements, a context diagram, DFDs, use case diagrams, class diagrams, and activity diagrams.',
    tags: ['DFD', 'Use Case', 'System Design'],
    accent: 'mint',
    image: '/projects/copyin.png',
    overview: 'A system design project focused on a printing and stationery ordering service.',
    role: 'System Analyst',
    tools: ['DFD', 'Use Case Diagram', 'Class Diagram', 'Activity Diagram'],
    process: 'Identified system requirements and modeled system interactions, processes, activities, and classes using system analysis diagrams.',
    outcome: 'A structured system design document describing the requirements and planned functionality of the ordering system.'
  },
  
  {
    number: '03',
    title: 'Furniland',
    category: 'Web Development',
    description: 'Developed a web-based furniture marketplace with product browsing, catalog filtering, shopping cart functionality, and administrative features.',
    tags: ['Web App', 'Marketplace', 'Admin'],
    accent: 'lavender',
    image: '/projects/furniland.png',
    overview: 'A web-based furniture marketplace designed to help users browse furniture products and manage shopping activities.',
    role: 'Web Developer',
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    process: 'Developed marketplace functionality for browsing products, filtering catalogs, managing shopping carts, and supporting administrative tasks.',
    outcome: 'A marketplace website concept with product discovery, shopping cart, and administrative functionality.'
  },
  
  {
    number: '04',
    title: 'Healthcare Revenue & Treatment Dashboard',
    category: 'Data Analytics · Excel',
    description: 'Created a healthcare dashboard in Microsoft Excel to analyze hospital revenue, patient data, treatment costs, daily patient visits, and service demand through interactive charts and summary metrics.',
    tags: ['Excel', 'Dashboard', 'Healthcare'],
    accent: 'yellow',
    image: '/projects/healthcaredb.png',
    overview: 'A healthcare analytics dashboard created to summarize hospital revenue, patient activity, treatment costs, and service demand.',
    role: 'Data Analyst',
    tools: ['Microsoft Excel', 'PivotTables', 'Charts'],
    process: 'Organized healthcare data and developed summary metrics and interactive visualizations to explore revenue, patient visits, and treatment-related information.',
    outcome: 'An interactive Excel dashboard that presents healthcare metrics in a more accessible visual format.'
  },
  
  {
    number: '05',
    title: 'Cafe Sales Dashboard',
    category: 'Data Analytics · Tableau',
    description: 'Analyzed cafe sales data and developed an interactive dashboard in Tableau to visualize total revenue, transactions, average quantity, spending patterns, monthly sales trends, and payment methods.',
    tags: ['Tableau', 'Data Viz', 'Analytics'],
    accent: 'peach',
    image: '/projects/cafedb.png',
    overview: 'An interactive sales dashboard designed to explore cafe performance and customer purchasing patterns.',
    role: 'Data Analyst',
    tools: ['Tableau', 'Data Visualization'],
    process: 'Analyzed sales data and built visualizations for revenue, transaction volume, quantity, monthly trends, spending patterns, and payment methods.',
    outcome: 'An interactive Tableau dashboard for exploring cafe sales performance and identifying patterns in the available data.'
  },
  
  {
    number: '06',
    title: 'Relive',
    category: 'UI/UX Design',
    description: 'Designed a wellness app concept with community support, counseling, and meditation features to make mental wellness resources more accessible through a mobile interface.',
    tags: ['Wellness', 'Figma', 'Mobile App'],
    accent: 'mint',
    image: '/projects/relive.png',
    overview: 'A mobile wellness app concept focused on making wellness resources and support features accessible through one interface.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    process: 'Designed mobile interface concepts for community support, counseling, and meditation features.',
    outcome: 'A wellness app concept that brings together different types of wellness support in a mobile experience.'
  },
  {
    number: '07',
    title: 'Aqquas',
    category: 'UI/UX Design',
    description: 'Designed a UI/UX concept for an aquarium hobbyist app to organize tank-care information and routines in an accessible, user-friendly interface.',
    tags: ['UI/UX', 'Information Design', 'Figma'],
    accent: 'lavender',
    image: '/projects/aqquas.png',
    overview: 'An aquarium hobbyist app concept designed to organize aquarium care information and maintenance routines.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    process: 'Structured aquarium care information and designed interface concepts to help users access care routines more easily.',
    outcome: 'A mobile app concept that presents aquarium care information and routines in an organized interface.'
  },
  {
    number: '08',
    title: 'MoneyRv',
    category: 'UI/UX Design',
    description: 'Designed a mobile app UI/UX concept for an ancient and rare coin marketplace, featuring curated articles, a collector forum, product browsing, checkout, and user profiles.',
    tags: ['Marketplace', 'Community', 'Prototype'],
    accent: 'yellow',
    image: '/projects/moneyrv.png',
    overview: 'A mobile marketplace concept for collectors interested in ancient and rare coins.',
    role: 'UI/UX Designer',
    tools: ['Figma', 'Prototyping'],
    process: 'Designed interface concepts for coin browsing, curated articles, collector discussions, checkout, and user profile management.',
    outcome: 'A mobile marketplace concept combining coin discovery, collector community features, and shopping flows.'
  },
  {
    number: '09',
    title: 'EduLearn',
    category: 'UI/UX Design',
    description: 'Designed a mobile learning app UI/UX concept to help students manage courses, schedules, attendance, assignments, and forums, with an integrated chatbot service.',
    tags: ['EdTech', 'Chatbot', 'Mobile App'],
    accent: 'peach',
    image: '/projects/edulearn.png',
    overview: 'A mobile learning app concept designed to help students organize academic activities and access learning support.',
    role: 'UI/UX Designer',
    tools: ['Figma'],
    process: 'Designed interface concepts for course management, schedules, attendance, assignments, student forums, and chatbot access.',
    outcome: 'A mobile learning app concept that brings academic management and learning support features into one interface.'
  }
]


export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Laverina home">LC<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
         
      <h1>
        Hi! I&apos;m Laverina Candrakirana<br />
      </h1>
      
      <p className="hero-text">
        I&apos;m an Information Systems student at BINUS University with an interest in UI/UX design, data analytics, and system analysis. I enjoy working on projects that combine technology, problem-solving, and user needs.
      </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">See my work <span>↗</span></a>
            <a className="text-link" href="mailto:laverinac@gmail.com">Let&apos;s connect <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Photo placeholder and decorative shapes">
          <div className="sun" />
          <div className="shape shape-one" />
          <div className="shape shape-two" />
          <div className="shape shape-three" />
          <div className="photo-frame">
            <img
                className="photo-image"
                src="/laverina.jpg"
                alt="Laverina Candrakirana"
              />
            {/* <div className="frame-caption">Laverina<br /><em>creative mind</em></div> */}
          </div>
          <div className="scribble">hi, there!</div>
          <div className="sticker">IS<br /><strong>student</strong></div>
          <div className="sparkle">✦</div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><span>UI/UX DESIGN ✦ DATA ANALYTICS ✦ SYSTEM THINKING ✦ UI/UX DESIGN ✦ DATA ANALYTICS ✦ SYSTEM THINKING ✦ </span></div>

      <section className="work-section wrap" id="work">
        <div className="section-heading"><p className="eyebrow">selected projects</p><h2>A little bit of<br /><em>what I&apos;ve made.</em></h2></div>
        
<div className="project-grid">
  {projects.map((project) => (
    <article
      className={`project-card ${project.accent}`}
      key={project.title}
    >
      <div className="project-top">
        <span>{project.number}</span>
        <span className="project-arrow">↗</span>
      </div>

      <div className="project-visual">
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} project preview`}
          onError={(event) => {
            event.currentTarget.style.display = 'none'
            event.currentTarget.nextElementSibling?.classList.add('is-visible')
          }}
        />

        <div className="project-placeholder">
          <span className="placeholder-number">{project.number}</span>
          <span className="placeholder-title">{project.title}</span>
          <span className="placeholder-category">{project.category}</span>
          <span className="placeholder-label">PROJECT PREVIEW</span>
        </div>
      </div>

      <div className="project-info">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  ))}
</div>

      </section>

      <section className="about-section wrap" id="about">
        <div className="section-heading"><p className="eyebrow">more about me</p><h2>Curious by nature,<br /><em>intentional by design.</em></h2></div>
        <div className="about-grid"><p className="about-lead">I&apos;m currently studying Information Systems at BINUS University. I love sitting at the intersection of people, technology, and visual storytelling.</p><div className="details"><div><b>Education</b><p><strong>2024 — 2028</strong><br />BINUS University<br />Bachelor of Information Systems<br /><small>GPA: 3.59 / 4.00</small></p><p><strong>2020 — 2023</strong><br />SMAK St. Albertus Malang<br />Mathematics &amp; Natural Sciences</p></div><div><b>Toolbox</b><p>Figma · Canva · Tableau<br />Excel · SQL · Python<br />Oracle APEX · ERD · BRD</p></div></div></div>
      </section>

      <section className="contact-section wrap" id="contact"><div className="contact-copy"><p className="eyebrow">let&apos;s make something</p><div className="contact-note">Have a project in mind?<br /><span>Say hi — I don&apos;t bite.</span></div><div className="contact-links"><a href="mailto:laverinac@gmail.com">Email me <span>↗</span></a><a href="https://linkedin.com/in/laverinacandrakirana" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div><a className="contact-email" href="mailto:laverinac@gmail.com"><span className="email-label">say hello</span>laverinac<br /><em>@gmail.com</em> <span>↗</span></a></section>
      <footer className="footer wrap"><span>© 2025 Laverina Candrakirana</span><span>Tangerang, Indonesia</span><a href="https://linkedin.com/in/laverinacandrakirana">LinkedIn ↗</a></footer>
    </main>
  )
}
