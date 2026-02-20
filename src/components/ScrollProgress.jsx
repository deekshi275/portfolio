import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.12 }}
    />
  )
}

export default ScrollProgress
