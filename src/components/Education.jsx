import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const education = [
    {
      year: '2023 – 2026',
      degree: 'BE in Computer Science',
      institute: 'GECM Hassan, Hassan',
      grade: 'CGPA: 8.2 / 10'
    },
    {
      year: '2020 – 2023',
      degree: 'Diploma in Computer Science',
      institute: 'Government Polytechnic, Turuvekere',
      grade: 'CGPA: 7.76 / 10'
    }
  ]

  return (
    <section id="education" className={`section education reveal-section ${inView ? 'revealed' : ''}`} ref={ref}>
      <div className="container">
        <motion.h2
          id="education-heading"
          className="section-title reveal-item"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-prefix">$ cat</span> education.log
        </motion.h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.article
              key={edu.degree}
              className={`education-item ${inView ? 'in-view' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
            >
              <div className="education-year">{edu.year}</div>
              <div className="education-details">
                <h3>{edu.degree}</h3>
                <p className="education-institute">{edu.institute}</p>
                <p className="education-grade">{edu.grade}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
