import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Certifications = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const certs = [
    {
      title: 'Internship Certificate',
      description: 'Company/Startup Name — Role (e.g., Python Developer Intern)',
      meta: 'Duration: 2–3 months'
    },
    {
      title: 'Online Course',
      description: 'Python for Everybody / CS50 / Coursera / Udemy — Course name',
      meta: 'Platform: Coursera / edX / Udemy'
    },
    {
      title: 'Coding Platform',
      description: 'LeetCode / HackerRank / GeeksforGeeks — Problem solving & DSA',
      meta: 'Profile link or badge'
    }
  ]

  return (
    <section id="certifications" className={`section certifications reveal-section ${inView ? 'revealed' : ''}`} ref={ref}>
      <div className="container">
        <motion.h2
          id="certifications-heading"
          className="section-title reveal-item"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-prefix">$</span> certs --show
        </motion.h2>
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="cert-card reveal-item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * (index + 1) }}
              whileHover={{ scale: 1.02 }}
            >
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <p className="cert-meta">{cert.meta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
