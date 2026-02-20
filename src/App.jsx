import { useState, useEffect } from 'react'
import Welcome from './components/Welcome'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import './styles.css'

function App() {
  const [welcomeComplete, setWelcomeComplete] = useState(false)

  useEffect(() => {
    if (welcomeComplete) {
      document.body.classList.remove('welcome-active')
    } else {
      document.body.classList.add('welcome-active')
    }
  }, [welcomeComplete])

  return (
    <>
      {!welcomeComplete && (
        <Welcome onComplete={() => setWelcomeComplete(true)} />
      )}
      
      <ScrollProgress />
      <Header />
      
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}

export default App
