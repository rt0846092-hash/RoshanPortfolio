import './Services.css'

/* Each service points to a real project, so clients see proof, not just a promise */
const services = [
  {
    icon: '🧩',
    title: 'Web applications',
    text: 'Custom tools for running your business: customer portals, booking and enquiry systems, staff dashboards, and admin panels with the right access for each person.',
    proof: 'Like Banana Education',
    href: '#projects',
  },
  {
    icon: '🛒',
    title: 'Online stores',
    text: 'Stores with card payments through Stripe, cash on delivery, live stock that never oversells, order tracking, and a dashboard to manage products.',
    proof: 'Like Voltcart',
    href: '#projects',
  },
  {
    icon: '🌐',
    title: 'Business websites',
    text: 'Fast, mobile-friendly websites that look good on every screen, with contact forms that send enquiries straight to your inbox.',
    proof: 'Like this portfolio',
    href: '#home',
  },
  {
    icon: '🔧',
    title: 'Fixes and improvements',
    text: 'Already have a site or app? I can fix bugs, speed it up, make it work on phones, add features, or test it thoroughly before launch.',
    proof: 'Testing, fixes, new features',
    href: '#contact',
  },
]

const steps = [
  ['1', 'Talk', 'You tell me what you need. I ask questions and suggest the simplest way to get there.'],
  ['2', 'Plan & quote', 'You get a clear plan, timeline, and price before any work starts.'],
  ['3', 'Build', 'I share progress regularly so you can see it take shape and give feedback.'],
  ['4', 'Launch', 'I test it, put it online, and show you how everything works.'],
]

const Services = () => (
  <section className="services" id="services">
    <div className="container">
      <p className="section-label">Services</p>
      <h2 className="section-title">What I Can Build for You</h2>

      <div className="services__grid">
        {services.map(s => (
          <article key={s.title} className="service-card">
            <span className="service-card__icon" aria-hidden="true">{s.icon}</span>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__text">{s.text}</p>
            <a className="service-card__proof" href={s.href}>{s.proof} →</a>
          </article>
        ))}
      </div>

      <h3 className="services__subtitle">How we'll work together</h3>
      <ol className="services__steps">
        {steps.map(([n, title, text]) => (
          <li key={n} className="services__step">
            <span className="services__step-num" aria-hidden="true">{n}</span>
            <div>
              <p className="services__step-title">{title}</p>
              <p className="services__step-text">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

export default Services
