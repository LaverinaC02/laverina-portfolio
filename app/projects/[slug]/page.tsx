
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  const isEmailLink = project.projectUrl.startsWith('mailto:')

  return (
    <main className="project-detail-page">
      <header className="detail-nav">
        <Link href="/" className="detail-brand">
          LC<span>.</span>
        </Link>

        <Link href="/#work" className="back-link">
          <span>←</span> All projects
        </Link>
      </header>

      <section className="detail-hero">
        <p className="eyebrow">
          PROJECT {project.number} · {project.category}
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
        <img
          src={project.image}
          alt={`${project.title} project cover`}
        />
      </section>

      <section className="detail-meta">
        <div>
          <p className="eyebrow">MY ROLE</p>
          <p className="meta-value">{project.role}</p>
        </div>

        <div>
          <p className="eyebrow">TOOLS & METHODS</p>
          <div className="detail-tags">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-project-link">
        <div>
          <p className="eyebrow">EXPLORE THE PROJECT</p>
          <h2>See the work in more detail.</h2>
          <p>
            Open the project file or supporting documentation
            to explore the work.
          </p>
        </div>

        <a
          className="button button-dark"
          href={project.projectUrl}
          target={isEmailLink ? undefined : '_blank'}
          rel={isEmailLink ? undefined : 'noreferrer'}
        >
          {project.projectUrlLabel} <span>↗</span>
        </a>
      </section>

      <section className="detail-process">
        <div className="process-intro">
          <p className="eyebrow">BEHIND THE PROJECT</p>
          <h2>From planning to final outcome.</h2>
          <p>
            An overview of the main activities and deliverables
            involved in this project.
          </p>
        </div>

        <div className="process-list">
          {project.processSteps.map((step) => (
            <article className="process-step" key={step.number}>
              <div className="process-heading">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
              </div>

              <p className="process-description">
                {step.description}
              </p>

              <div className="process-image">
                <img
                  src={step.image}
                  alt={`${project.title}: ${step.title}`}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                    event.currentTarget.nextElementSibling
                      ?.classList.add('is-visible')
                  }}
                />

                <div className="process-placeholder">
                  <span>SCREENSHOT PLACEHOLDER</span>
                  <strong>{step.title}</strong>
                  <p>
                    Upload your screenshot for this stage here.
                  </p>
                  <small>{step.image}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-outcome">
        <div>
          <p className="eyebrow">PROJECT OUTCOME</p>
          <h2>What the project delivers.</h2>
        </div>

        <p>{project.outcome}</p>
      </section>

      <footer className="detail-footer">
        <p>Want to explore another project?</p>

        <Link href="/#work" className="button button-dark">
          Explore more projects <span>↗</span>
        </Link>
      </footer>
    </main>
  )
}
