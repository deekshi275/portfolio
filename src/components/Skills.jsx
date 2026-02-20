import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const skills = [
    {
      title: 'Technical Skills',
      items: [
        { icon: '🐍', name: 'Python' },
        { icon: '🌐', name: 'HTML, CSS, JavaScript' },
        { icon: '🗄️', name: 'SQL' },
        { icon: '📦', name: 'Git & GitHub' }
      ]
    },
    {
      title: 'Tools',
      items: [
        { icon: '💻', name: 'VS Code' },
        { icon: '📊', name: 'Excel' },
        { icon: '🐧', name: 'Linux basics' }
      ]
    },
    {
      title: 'Soft Skills',
      items: [
        { icon: '💬', name: 'Communication' },
        { icon: '⏱️', name: 'Time management' },
        { icon: '🔄', name: 'Adaptability' }
      ]
    }
  ]

  return (
    <section id="skills" className={`section skills reveal-section ${inView ? 'revealed' : ''}`} ref={ref}>
      <div className="container">
        <motion.h2
          id="skills-heading"
          className="section-title reveal-item"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-prefix">$</span> skills --list
        </motion.h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category reveal-item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * (index + 1) }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.items.map((skill) => (
                  <li key={skill.name}>
                    <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
