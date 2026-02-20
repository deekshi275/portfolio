import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className={`section about reveal-section ${inView ? 'revealed' : ''}`} ref={ref}>
      <div className="container">
        <motion.h2
          id="about-heading"
          className="section-title reveal-item"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          <span className="section-prefix">$ cat</span> about_me.txt
        </motion.h2>
        <div className="about-grid">
          <motion.div
            className="about-intro reveal-item"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p>
              I am a Computer Science graduate and software developer specializing in Python-backed web
              applications and reliable backend systems. I focus on writing clean, maintainable code and delivering
              production-ready features that solve real user problems.
            </p>
            <p>
              My experience includes building RESTful APIs, small full-stack prototypes, and data-processing
              utilities. I follow best practices such as automated testing, clear documentation, and collaborative
              code review.
            </p>
          </motion.div>
          <motion.div
            className="about-details reveal-item"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3>Education</h3>
            <p>BE in Computer Science — GECM Hassan</p>
            <h3>Technical Summary</h3>
            <p>Python • Flask / Django • REST APIs • SQL • HTML / CSS / JavaScript • Git • Firebase</p>
            <h3>Career Objective</h3>
            <p>
              Seeking an entry-level software engineering role where I can contribute to product development,
              learn from experienced engineers, and grow through impactful work.
            </p>
            <h3>Strengths</h3>
            <ul className="strengths-list">
              <li>Strong fundamentals in data structures, algorithms, and system design basics.</li>
              <li>Delivers readable, tested code and values maintainability.</li>
              <li>Collaborative team member with clear communication and a growth mindset.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
