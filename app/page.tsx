'use client'

import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'Copyin',
    category: 'System Analysis & Design',
    description: 'A printing and stationery ordering system designed from the ground up — from context diagrams to activity flows.',
    tags: ['DFD', 'Use Case', 'Figma'],
    accent: 'mint',
  },
  {
    number: '02',
    title: 'HireSphere',
    category: 'UI/UX Design',
    description: 'A mobile career platform concept that makes job matching, applications, and CV creation feel less overwhelming.',
    tags: ['Research', 'Wireframes', 'Prototype'],
    accent: 'peach',
  },
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
          <p className="eyebrow"><span className="status-dot" /> available for internship</p>
          <h1>Designing ideas<br /><em>into impact.</em></h1>
          <p className="hero-text">Hi, I&apos;m Laverina — an Information Systems student who turns messy problems into clear, useful experiences through UI/UX and data.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">See my work <span>↗</span></a>
            <a className="text-link" href="mailto:laverinac@gmail.com">Let&apos;s connect <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract portrait illustration">
          <div className="sun" />
          <div className="shape shape-one" />
          <div className="shape shape-two" />
          <div className="shape shape-three" />
          <div className="portrait-card"><span>LC</span><small>creative<br />problem solver</small></div>
          <div className="scribble">hello!</div>
          <div className="sticker">IS<br /><strong>student</strong></div>
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

      <section className="contact-section wrap" id="contact"><div className="contact-note">Have a project in mind?<br /><span>Say hi — I don&apos;t bite.</span></div><a className="contact-email" href="mailto:laverinac@gmail.com">laverinac<br /><em>@gmail.com</em> <span>↗</span></a></section>
      <footer className="footer wrap"><span>© 2025 Laverina Candrakirana</span><span>Tangerang, Indonesia</span><a href="https://linkedin.com/in/laverinacandrakirana">LinkedIn ↗</a></footer>
    </main>
  )
}
