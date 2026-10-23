
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="project-detail-page">
      <nav className="detail-nav">
        <Link href="/" className="detail-brand">
          LC<span>.</span>
        </Link>

        <Link href="/#work" className="back-link">
          ← Back to projects
        </Link>
      </nav>

      <section className="detail-hero">
        <p className="detail-eyebrow">
          PROJECT {project.number} / {project.category}
        </p>

        <h1>{project.title}</h1>

        <p className="detail-intro">{project.overview}</p>

        <div className="detail-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="detail-cover">
        <img src={project.image} alt={`${project.title} project`} />
      </section>

      <section className="detail-information">
        <div className="detail-info-item">
          <p className="detail-eyebrow">MY ROLE</p>
          <h3>{project.role}</h3>
        </div>

        <div className="detail-info-item">
          <p className="detail-eyebrow">TOOLS</p>
          <div className="detail-tags">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-description">
        <p className="detail-eyebrow">ABOUT THE PROJECT</p>
        <h2>Project overview</h2>
        <p>{project.description}</p>
      </section>

      <section className="detail-outcome">
        <div>
          <p className="detail-eyebrow">THE RESULT</p>
          <h2>Project outcome</h2>
        </div>

        <p>{project.outcome}</p>
      </section>

      {project.projectUrl && (
        <section className="detail-cta">
          <div>
            <p className="detail-eyebrow">WANT TO SEE MORE?</p>
            <h2>Explore the project.</h2>
            <p>
              Open the project link to explore the design,
              dashboard, or supporting documentation.
            </p>
          </div>

          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="detail-button"
          >
            {project.projectUrlLabel ?? 'View Project'} <span>↗</span>
          </a>
        </section>
      )}

      <footer className="detail-footer">
        <Link href="/#work">← Back to all projects</Link>
        <Link href="/#contact">Get in touch ↗</Link>
      </footer>
    </main>
  )
}
