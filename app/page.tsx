'use client'

import { useState } from 'react'

const projects = [
  { number: '01', title: 'HireSphere', category: 'UI/UX Design', description: 'Designed a mobile career platform concept in Figma to help users explore job opportunities, manage applications, and create CVs through a clear and user-friendly interface.', tags: ['Figma', 'Mobile App', 'UX'], accent: 'peach' },
  { number: '02', title: 'Copyin', category: 'System Analysis & Design', description: 'Analyzed and designed a printing and stationery ordering system by preparing system requirements, a context diagram, DFDs, use case diagrams, class diagrams, and activity diagrams.', tags: ['DFD', 'Use Case', 'System Design'], accent: 'mint' },
  { number: '03', title: 'Furniland', category: 'Web Development', description: 'Developed a web-based furniture marketplace with product browsing, catalog filtering, shopping cart functionality, and administrative features.', tags: ['Web App', 'Marketplace', 'Admin'], accent: 'lavender' },
  { number: '04', title: 'Healthcare Revenue & Treatment Dashboard', category: 'Data Analytics · Excel', description: 'Created a healthcare dashboard in Microsoft Excel to analyze hospital revenue, patient data, treatment costs, daily patient visits, and service demand through interactive charts and summary metrics.', tags: ['Excel', 'Dashboard', 'Healthcare'], accent: 'yellow' },
  { number: '05', title: 'Cafe Sales Dashboard', category: 'Data Analytics · Tableau', description: 'Analyzed cafe sales data and developed an interactive dashboard in Tableau to visualize total revenue, transactions, average quantity, spending patterns, monthly sales trends, and payment methods.', tags: ['Tableau', 'Data Viz', 'Analytics'], accent: 'peach' },
  { number: '06', title: 'Relive', category: 'UI/UX Design', description: 'Designed a wellness app concept with community support, counseling, and meditation features to make mental wellness resources more accessible through a mobile interface.', tags: ['Wellness', 'Figma', 'Mobile App'], accent: 'mint' },
  { number: '07', title: 'Aqquas', category: 'UI/UX Design', description: 'Designed a UI/UX concept for an aquarium hobbyist app to organize tank-care information and routines in an accessible, user-friendly interface.', tags: ['UI/UX', 'Information Design', 'Figma'], accent: 'lavender' },
  { number: '08', title: 'MoneyRv', category: 'UI/UX Design', description: 'Designed a mobile app UI/UX concept for an ancient and rare coin marketplace, featuring curated articles, a collector forum, product browsing, checkout, and user profiles.', tags: ['Marketplace', 'Community', 'Prototype'], accent: 'yellow' },
  { number: '09', title: 'EduLearn', category: 'UI/UX Design', description: 'Designed a mobile learning app UI/UX concept to help students manage courses, schedules, attendance, assignments, and forums, with an integrated chatbot service.', tags: ['EdTech', 'Chatbot', 'Mobile App'], accent: 'peach' },
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
        <em>Information Systems Student.</em>
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
            <div className="frame-caption">Laverina<br /><em>creative mind</em></div>
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
          {projects.map((project) => <article className={`project-card ${project.accent}`} key={project.title}>
            <div className="project-top"><span>{project.number}</span><span className="project-arrow">↗</span></div>
            <div className="project-visual"><div className="mockup-window"><div className="window-bar"><i /><i /><i /></div><div className="mockup-content"><b>{project.title}</b><div className="mock-lines"><span /><span /><span /></div><div className="mock-pill">explore →</div></div></div></div>
            <div className="project-info"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          </article>)}
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
