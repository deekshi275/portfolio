import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const projects = [
    {
      icon: 'icons/car.svg',
      title: 'Car Pool — Drive Sharing App',
      problem: 'A platform to create and join shared rides, reduce commuting costs, and optimise vehicle occupancy for city routes.',
      tech: 'HTML, CSS, JavaScript, Node.js, MongoDB',
      features: [
        'User registration, login, and profile management',
        'Create and search rides by origin, destination, date and time',
        'Join/leave ride flow, seat management, and simple messaging between driver & passengers',
        'Responsive front-end with server APIs and data persisted in MongoDB'
      ]
    },
    {
      icon: 'icons/python.svg',
      title: 'Attendance Management System (Python)',
      problem: 'Digital attendance tracking for classrooms or small organizations with import/export capabilities and summary reports.',
      tech: 'Python, CSV/Excel, SQLite/MySQL, Flask (optional)',
      features: [
        'Mark daily attendance and store records in a database',
        'Import/export using CSV or Excel for integration with school records',
        'Generate attendance reports and PDF/CSV exports',
        'Optional web UI using Flask for easy deployment and user access'
      ]
    },
    {
      icon: 'icons/weather.svg',
      title: 'Weather Broadcast Management',
      problem: 'A frontend application to display weather forecasts and schedule broadcast-style updates for users or display screens.',
      tech: 'HTML, CSS, JavaScript, Public Weather APIs (e.g. OpenWeatherMap), optional Chart.js',
      features: [
        'Current weather and multi-day forecast UI with clear visual indicators',
        'Schedule automatic broadcast messages/alerts based on conditions',
        'Responsive dashboard suitable for kiosks or mobile devices',
        'Integration with third-party weather APIs for reliable data'
      ]
    }
  ]

  return (
    <section id="projects" className={`section projects reveal-section ${inView ? 'revealed' : ''}`} ref={ref}>
      <div className="container">
        <motion.h2
          id="projects-heading"
          className="section-title reveal-item"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-prefix">$ ls</span> ./projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card reveal-item"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * (index + 1) }}
              whileHover={{ y: -8 }}
            >
              <div className="project-icon" aria-hidden="true">
                <img src={project.icon} alt={`${project.title} icon`} width="48" height="48" />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-problem">{project.problem}</p>
              <p className="project-tech">
                <strong>Technologies:</strong> {project.tech}
              </p>
              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="demo-link">Live Demo</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
