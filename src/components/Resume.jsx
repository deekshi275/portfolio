import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Resume = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="resume" className={`section resume-section reveal-section ${inView ? 'revealed' : ''}`} ref={ref}>
      <div className="container resume-container">
        <motion.h2
          id="resume-heading"
          className="section-title reveal-item"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-prefix">$</span> download resume.pdf
        </motion.h2>
        <motion.p
          className="resume-desc reveal-item"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Download my resume to view my full experience, education, and skills in one place.
        </motion.p>
        <motion.div
          className="resume-actions reveal-item"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="https://drive.google.com/file/d/1A3ea_zIb7aEYEXYY_G6S0yJfO52kCiXN/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume (PDF)
          </motion.a>
          <a
            href="https://drive.google.com/file/d/1A3ea_zIb7aEYEXYY_G6S0yJfO52kCiXN/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-open-link"
          >
            Open in new tab
          </a>
        </motion.div>
        <motion.p
          className="resume-note reveal-item"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          Replace <code>resume.pdf</code> in the project folder with your actual resume file.
        </motion.p>
      </div>
    </section>
  )
}

export default Resume
