import './Hero.css'
import profile from'../assets/img.jpg'
const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__bg-glow" aria-hidden="true" />

      <div className="container hero__inner">
      <div className="hero__content">
          <div className="hero__badge">
          <span className="hero__badge-dot" />
          Open to Frontend Internship Opportunities
        </div>

        <h1 className="hero__title">
          Hi, I'm <span className="hero__name">Roshan</span>
          <br />
          <span className="hero__role">Frontend Developer</span>
        </h1>

        <p className="hero__bio">
          I build fast, clean, and accessible web interfaces using React & modern CSS.
          Passionate about crafting smooth user experiences — from pixel-perfect UIs
          to performant, maintainable code.
        </p>

        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            View Projects
          </button>
          <button className="btn btn--secondary" onClick={() => scrollTo('contact')}>
            Contact Me
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">4+</span>
            <span className="hero__stat-label">Projects Built</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">5+</span>
            <span className="hero__stat-label">Technologies</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Dedication</span>
          </div>
        </div>
      </div>
        <img src={profile} alt="Roshan profile" className="hero__image" />
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero