import './About.css'

const skills = [
  { name: 'HTML5',      icon: '🌐', category: 'Frontend' },
  { name: 'CSS3',       icon: '🎨', category: 'Frontend' },
  { name: 'JavaScript', icon: '⚡', category: 'Frontend' },
  { name: 'React',      icon: '⚛️', category: 'Frontend' },
  { name: 'Python',     icon: '🐍', category: 'Backend'  },
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
            <h2 className="section-title">Turning Ideas Into<br />Real Interfaces</h2>
            <p className="about__text">
              I'm a frontend developer focused on building clean, responsive, and
              user-friendly web experiences. My main stack is <strong>HTML, CSS,
              JavaScript, and React</strong> — I care deeply about writing readable
              code and building UIs that just feel right.
            </p>
            <p className="about__text">
              Beyond the frontend, I'm curious about how things work under the hood.
              I've explored <strong>Python</strong> for scripting and basic backend
              logic, and <strong>C</strong> for understanding memory management and
              low-level concepts — giving me a broader foundation than most frontend
              developers at my level.
            </p>
            <p className="about__text">
              I'm actively seeking a <strong>frontend internship</strong> where I
              can contribute, grow, and work with experienced developers who push
              me to level up.
            </p>

            <div className="about__highlights">
              {[
                { icon: '🎯', text: 'Detail-oriented UI builder' },
                { icon: '📚', text: 'Fast learner & problem solver' },
                { icon: '🤝', text: 'Team player, open to feedback' },
                { icon: '🌍', text: 'Curious about the full stack' },
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