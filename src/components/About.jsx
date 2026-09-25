import './About.css'

const skills = [
  { name: 'HTML5',      icon: '🌐', category: 'Frontend' },
  { name: 'CSS3',       icon: '🎨', category: 'Frontend' },
  { name: 'JavaScript', icon: '⚡', category: 'Frontend' },
  { name: 'React',      icon: '⚛️', category: 'Frontend' },
  { name: 'Tailwind',   icon: '💨', category: 'Frontend' },
  { name: 'Python',     icon: '🐍', category: 'Backend'  },
  { name: 'Django REST',icon: '🔌', category: 'Backend'  },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'MySQL',      icon: '🗄️', category: 'Database' },
  { name: 'C',          icon: '⚙️', category: 'Systems'  },
  { name: 'GitHub',     icon: '🐙', category: 'Tools'    },
  { name: 'Deployment', icon: '🚀', category: 'Tools'    },
]

const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <span className="skill-card__icon">{skill.icon}</span>
    <span className="skill-card__name">{skill.name}</span>
    <span className="skill-card__category">{skill.category}</span>
  </div>
)

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Left: Bio */}
          <div className="about__bio">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Turning Ideas Into<br />Working Products</h2>
            <p className="about__text">
              I'm a full-stack developer who enjoys building an application from
              the first screen down to the database. On the frontend I work with
              <strong> HTML, CSS, JavaScript, React, and Tailwind</strong>, and I care about
              interfaces that are clean, responsive, and easy to use.
            </p>
            <p className="about__text">
              On the backend I build REST APIs with <strong>Python and Django
              REST Framework</strong>, including sign-in, role-based access, and
              automated tests, backed by <strong>PostgreSQL</strong> or
              <strong> MySQL</strong>. I deploy my projects on Render and Vercel. Learning <strong>C</strong> gave me a solid
              understanding of memory and low-level concepts, which helps me write
              more efficient code across the stack.
            </p>
            <p className="about__text">
              I'm actively seeking a <strong>full-stack or frontend internship</strong> where I
              can contribute, grow, and work with experienced developers who push
              me to level up.
            </p>

            <div className="about__highlights">
              {[
                { icon: '🎯', text: 'Detail-oriented UI builder' },
                { icon: '📚', text: 'Fast learner & problem solver' },
                { icon: '🤝', text: 'Team player, open to feedback' },
                { icon: '🔗', text: 'Comfortable from UI to database' },
              ].map((item, i) => (
                <div key={i} className="about__highlight">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="about__skills">
            <p className="section-label">Technical Skills</p>
            <div className="about__skills-grid about__skills-grid--tiles">
              {skills.map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About