import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [codeLines, setCodeLines] = useState([])
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const heroRef = useRef(null)
  
  // Set both refs
  const setRefs = (node) => {
    heroRef.current = node
    if (typeof ref === 'function') {
      ref(node)
    } else if (ref) {
      ref.current = node
    }
  }

  useEffect(() => {
    // Mouse parallax effect
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Animated code lines
    const codeSnippets = [
      'def build_portfolio():',
      '    skills = ["Python", "React", "Django"]',
      '    projects = load_projects()',
      '    return render(skills, projects)',
      '',
      '>>> build_portfolio()',
      'Portfolio initialized successfully!'
    ]

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < codeSnippets.length) {
        setCodeLines(prev => [...prev, codeSnippets[currentIndex]])
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 600)

    return () => clearInterval(interval)
  }, [])

  // Particles are handled via CSS animations

  return (
    <section id="home" className={`hero reveal-section ${inView ? 'revealed' : ''}`} ref={setRefs}>
      {/* Animated background layers */}
      <div className="hero-bg-layers">
        <motion.div
          className="hero-bg-orb hero-orb-1"
          animate={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="hero-bg-orb hero-orb-2"
          animate={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 0.7 }}
        />
        <div className="hero-grid-mesh" />
        <div className="hero-code-rain">
          {Array.from({ length: 20 }).map((_, i) => {
            const charCode = Math.floor(0x30A0 + Math.random() * 96)
            return (
              <motion.div
                key={i}
                className="code-char"
                initial={{ y: -100, opacity: 0 }}
                animate={{
                  y: 'calc(100vh + 100px)',
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  delay: Math.random() * 2,
                  repeat: Infinity
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 10 + 12}px`
                }}
              >
                {String.fromCharCode(charCode)}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Floating particles - rendered via CSS animation */}

      <div className="hero-terminal container">
        {/* 3D Terminal Window */}
        <motion.div
          className="term-bar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="term-dots"></span>
          <span className="term-title">root@deekshith — session_active</span>
          <motion.span
            className="term-status"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ● CONNECTED
          </motion.span>
        </motion.div>

        <div className="hero-content term-body">
          <motion.div
            className="hero-text term-output"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="hero-prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="hero-prompt-symbol">$</span> whoami
            </motion.p>

            <motion.h1
              id="hero-heading"
              className="term-result"
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.span
                animate={{ textShadow: [
                  '0 0 10px rgba(57, 211, 83, 0.5)',
                  '0 0 20px rgba(57, 211, 83, 0.8)',
                  '0 0 10px rgba(57, 211, 83, 0.5)'
                ]}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Deekshith BH
              </motion.span>
              <span className="cursor" aria-hidden="true">|</span>
            </motion.h1>

            <motion.p
              className="hero-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="term-label">ROLE:</span> Python Full Stack Developer | Software Engineer | Fresher
            </motion.p>

            <motion.p
              className="hero-prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="hero-prompt-symbol">$</span> cat ./summary.txt
            </motion.p>

            <motion.p
              className="hero-summary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Building clean, practical solutions with Python and web technologies. Eager to
              contribute to real-world software projects.
            </motion.p>

            {/* Animated Code Block */}
            <motion.div
              className="hero-code-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="code-block-header">
                <span className="code-lang">Python</span>
                <span className="code-lines">{codeLines.length} lines</span>
              </div>
              <div className="code-block-content">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    className="code-line"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                  >
                    <span className="code-line-num">{i + 1}</span>
                    <span className="code-line-text">{line || '\u00A0'}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              className="hero-prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <span className="hero-prompt-symbol">$</span> run --action
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(57, 211, 83, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                ./view_projects
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1A3ea_zIb7aEYEXYY_G6S0yJfO52kCiXN/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ./download_resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Avatar Panel */}
          <motion.div
            className="hero-image-wrap term-pane"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div className="term-pane-bar">[ IDENTITY — click to view ]</div>
            <motion.button
              type="button"
              className="hero-avatar-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="hero-avatar"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(57, 211, 83, 0.3)',
                    '0 0 40px rgba(57, 211, 83, 0.5)',
                    '0 0 20px rgba(57, 211, 83, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <img src="dd.jpeg" alt="Deekshith BH - Professional photo" width="180" height="180" loading="lazy" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
