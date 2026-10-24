
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const sections = ['top', 'about', 'work', 'contact']

    const handleScroll = () => {
      let current = 'top'

      for (const id of sections) {
        const section = document.getElementById(id)

        if (section && section.getBoundingClientRect().top <= 140) {
          current = id
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="site-shell">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Laverina home">
          LC<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#work"
            className={activeSection === 'work' ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Work
          </a>

          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <h1>Hi! I&apos;m Laverina Candrakirana</h1>

          <p className="hero-text">
            I&apos;m an Information Systems student at BINUS University
            with an interest in UI/UX design, data analytics, and
            system analysis. I enjoy working on projects that combine
            technology, problem-solving, and user needs.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              See my work <span>↗</span>
            </a>
            <a className="text-link" href="#contact">
              Let&apos;s connect <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Profile photo">
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
          </div>

          <div className="scribble">hi, there!</div>
          <div className="sticker">
            IS<br />
            <strong>student</strong>
          </div>
          <div className="sparkle">✦</div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <span>
          UI/UX DESIGN ✦ DATA ANALYTICS ✦ SYSTEM THINKING ✦
          UI/UX DESIGN ✦ DATA ANALYTICS ✦ SYSTEM THINKING ✦
        </span>
      </div>

      {/* ABOUT SECTION */}
      <section className="about-section wrap" id="about">
        <div className="section-heading">
          <p className="eyebrow">more about me</p>
          <h2>
            Curious by nature,<br />
            <em>intentional by design.</em>
          </h2>
        </div>

        <div className="about-grid">
          <p className="about-lead">
            I enjoy using technology and data to understand
            problems and create useful solutions.
          </p>

          <div className="details">
            <div>
              <b>Education</b>
              <p>
                <strong>2024 — 2028</strong><br />
                BINUS University<br />
                Bachelor of Information Systems<br />
                <small>GPA: 3.59 / 4.00</small>
              </p>
              <p>
                <strong>2020 — 2023</strong><br />
                SMAK St. Albertus Malang<br />
                Mathematics &amp; Natural Sciences
              </p>
            </div>

            <div>
              <b>Toolbox</b>
              <p>
                Figma · Canva · Tableau<br />
                Excel · SQL · Python<br />
                Oracle APEX · ERD · BRD
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="work-section wrap" id="work">
        <div className="section-heading">
          <p className="eyebrow">selected projects</p>
          <h2>
            A little bit of<br />
            <em>what I&apos;ve made.</em>
          </h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              className={`project-card ${project.accent}`}
              key={project.title}
              aria-label={`View details for ${project.title}`}
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
                />
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

                <span className="project-explore">
                  View project details <span>↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      {/* CONTACT SECTION */}
      <section className="contact-section wrap" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">let&apos;s connect</p>

          <div className="contact-note">
            Open to internship<br />
            <span>opportunities.</span>
          </div>

          <div className="contact-links">
            <a href="mailto:laverinac@gmail.com">
              Email me <span>↗</span>
            </a>
            <a
              href="https://linkedin.com/in/laverinacandrakirana"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span>↗</span>
            </a>
          </div>
        </div>

        <a className="contact-email" href="mailto:laverinac@gmail.com">
          <span className="email-label">
            I&apos;d love to hear from you
          </span>
          laverinac<br />
          <em>@gmail.com</em> <span>↗</span>
        </a>
      </section>

      {/* FOOTER: NAME AND LOCATION ONLY */}
      <footer className="footer wrap">
        <span>© 2026 Laverina Candrakirana</span>
        <span>Tangerang, Indonesia</span>
      </footer>
    </main>
  )
}
