import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Banana Education Consultancy',
    description:
      'A study-abroad consultancy platform with a public site that captures student enquiries and a private back office for staff. New students are auto-assigned to a counsellor, who tracks calls, university applications, and documents. Role-based access keeps each counsellor to their own students, while the owner gets reports and CSV exports. Covered by 75 automated tests.',
    tags: ['React', 'Django REST', 'PostgreSQL', 'Tailwind', 'JWT'],
    liveDemo: 'https://banana-web-crk2.onrender.com',
    github: 'https://github.com/rt0846092-hash/BananaEducationConsaltency',
    featured: true,
    badge: 'Full-Stack',
    gradient: 'linear-gradient(135deg, #0B2340 0%, #f5c518 100%)',
    emoji: '🎓',
  },
  {
    id: 2,
    title: 'Income & Expense Tracker',
    description:
      'A multi-user money tracker with secure sign-in, so the same account works on phone and laptop. Each entry keeps the currency it was made in and converts live to your chosen display currency. Includes a charts dashboard and a remittance tracker that shows the fee lost when sending money between countries.',
    tags: ['React', 'Django REST', 'MySQL', 'Tailwind', 'Recharts'],
    liveDemo: 'https://expense-tracker-1tm3vqa4t-rt0846092-3762s-projects.vercel.app',
    github: 'https://github.com/rt0846092-hash/personalExpense_tracer',
    featured: true,
    badge: 'Full-Stack',
    gradient: 'linear-gradient(135deg, #0070f3 0%, #00d4ff 100%)',
    emoji: '💰',
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'Real-time weather dashboard using the OpenWeather API. Search any city for live temperature, humidity, and 5-day forecasts.',
    tags: ['React', 'REST API', 'HTML5', 'CSS3'],
    liveDemo: 'https://weather-app-by-daddaa.vercel.app/',
    github: 'https://github.com/rt0846092-hash/WeatherAppByDaddaa',
    featured: false,
    gradient: 'linear-gradient(135deg, #17ead9 0%, #6078ea 100%)',
    emoji: '🌦️',
  },
  {
    id: 4,
    title: 'DaddaBlog',
    description:
      'A personal blogging platform with markdown support, post categories, and a minimalist reading experience built from scratch.',
    tags: ['React', 'CSS3', 'Markdown', 'Vite'],
    liveDemo: 'https://dadda-blog-fobkz5vzx-rt0846092-3762s-projects.vercel.app',
    github: 'https://github.com/rt0846092-hash/DaddaBlog',
    featured: false,
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    emoji: '✍️',
  },
]

const ProjectCard = ({ project }) => (
  <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
    <div className="project-card__top">
      <div
        className="project-card__preview"
        style={{ background: project.gradient }}
      >
        <span className="project-card__emoji">{project.emoji}</span>
        <div className="project-card__preview-shine" />
      </div>
    </div>

    <div className="project-card__body">
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        {project.badge && (
          <span className="project-card__badge">{project.badge}</span>
        )}
      </div>

      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__tags">
        {project.tags.map(tag => (
          <span key={tag} className="project-card__tag">{tag}</span>
        ))}
      </div>
    </div>

    <div className="project-card__footer">
      {project.liveDemo && (
      <a
        href={project.liveDemo}
        className="project-card__btn project-card__btn--demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        Live Demo
      </a>
      )}
      <a
        href={project.github}
        className="project-card__btn project-card__btn--github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </article>
)

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__header">
          <p className="section-label">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects I've built, from full-stack Django and React
            applications to frontend-only React apps.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects__footer">
          <p className="projects__footer-text">Want to see more?</p>
          <a
            href="https://github.com/rt0846092-hash"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__github-link"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects