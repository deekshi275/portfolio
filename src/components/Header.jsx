import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', text: './home' },
    { href: '#about', text: './about' },
    { href: '#skills', text: './skills' },
    { href: '#projects', text: './projects' },
    { href: '#education', text: './education' },
    { href: '#certifications', text: './certs' },
    { href: '#resume', text: './resume' },
    { href: '#contact', text: './contact' }
  ]

  return (
    <header className="header" role="banner">
      <nav className="nav container" aria-label="Main navigation">
        <a href="#home" className="nav-logo">
          <img src="logo.svg" alt="Portfolio logo" className="site-logo" width="40" height="40" />
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
