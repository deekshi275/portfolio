import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Welcome = ({ onComplete }) => {
  const [typingText, setTypingText] = useState('')
  const [showWelcome, setShowWelcome] = useState(true)
  const word = 'Welcome'

  useEffect(() => {
    let i = 0
    const typeInterval = setInterval(() => {
      if (i < word.length) {
        setTypingText(word.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeInterval)
      }
    }, 90)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
      setTimeout(() => onComplete(), 1000)
    }, 4500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          className="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
        >
          <div className="welcome-bg">
            <div className="welcome-gradient-orb welcome-orb-1"></div>
            <div className="welcome-gradient-orb welcome-orb-2"></div>
            <div className="welcome-gradient-orb welcome-orb-3"></div>
            <div className="welcome-grid-overlay"></div>
            <div className="welcome-particles" id="welcome-particles" aria-hidden="true">
              {Array.from({ length: 22 }).map((_, i) => (
                <span
                  key={i}
                  className="welcome-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 15}s`,
                    animationDuration: `${12 + Math.random() * 8}s`
                  }}
                />
              ))}
            </div>
          </div>
          <div className="welcome-content">
            <div className="welcome-terminal">
              <div className="welcome-term-bar">
                <span className="welcome-term-dots"></span>
                <span className="welcome-term-title">system@portfolio — initializing</span>
                <span className="welcome-term-status">● LOADING</span>
              </div>
              <div className="welcome-term-body">
                <div className="welcome-text-container">
                  <motion.p
                    className="welcome-prompt"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="welcome-prompt-symbol">$</span> echo "
                    <span className="welcome-typing-wrap">
                      {typingText}
                      <span className="welcome-cursor" aria-hidden="true">|</span>
                    </span>"
                  </motion.p>
                  <motion.h1
                    className="welcome-title"
                    initial={{ opacity: 0, y: 40, scale: 0.92, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    <span className="welcome-title-inner">Welcome</span>
                  </motion.h1>
                  <motion.p
                    className="welcome-prompt welcome-prompt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <span className="welcome-prompt-symbol">$</span> cat ./portfolio.txt
                  </motion.p>
                  <motion.p
                    className="welcome-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    Initializing portfolio session...
                  </motion.p>
                  <div className="welcome-loader">
                    <motion.div
                      className="welcome-loader-bar"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 2.2, duration: 2.2, ease: [0.33, 1, 0.68, 1] }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Welcome
