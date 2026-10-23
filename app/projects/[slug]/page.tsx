

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }))
}

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="project-detail-page">
      <nav className="nav wrap detail-nav">
        <Link className="brand" href="/#top" aria-label="Laverina home">
          LC<span>.</span>
        </Link>

        <Link className="detail-back" href="/#work">
          ← Back to projects
        </Link>
      </nav>

      <section className="project-detail wrap">
        <p className="eyebrow">
          Project {project.number} · {project.category}
        </p>

        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-intro">{project.overview}</p>

        <div className={`detail-image-panel ${project.accent}`}>
          <img src={project.image} alt={`${project.title} project`} />
        </div>

        <div className="detail-meta">
          <div>
            <span className="detail-label">My role</span>
            <p>{project.role}</p>
          </div>

          <div>
            <span className="detail-label">Tools & methods</span>
            <div className="detail-tags">
              {project.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-content-grid">
          <section>
            <p className="eyebrow">01 / Process</p>
            <h2>What I worked on</h2>
            <p>{project.process}</p>
          </section>

          <section>
            <p className="eyebrow">02 / Outcome</p>
            <h2>Project outcome</h2>
            <p>{project.outcome}</p>
          </section>
        </div>

        <div className="detail-footer">
          <p>Want to explore another project?</p>
          <Link className="button button-dark" href="/#work">
            Explore more projects <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
