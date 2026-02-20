import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    
    // Validation
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.'
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message.'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitting(true)
    
    // EmailJS integration would go here
    if (typeof emailjs !== 'undefined') {
      try {
        await emailjs.sendForm(
          'service_i2humlj',
          'template_ndfha3t',
          e.target
        )
        alert('Message Sent Successfully!')
        setFormData({ name: '', email: '', message: '' })
      } catch (error) {
        console.error('EmailJS error:', error)
        alert('Failed to send. Please try again later.')
      }
    } else {
      alert('Email service not available. Please contact directly.')
    }
    
    setSubmitting(false)
  }

  return (
    <section id="contact" className={`section contact reveal-section ${inView ? 'revealed' : ''}`} ref={ref}>
      <div className="container">
        <motion.h2
          id="contact-heading"
          className="section-title reveal-item"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-prefix">$</span> contact --connect
        </motion.h2>
        <div className="contact-wrapper">
          <motion.div
            className="contact-info reveal-item"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p>
              <strong>Email</strong><br />
              <a href="mailto:deekshithbh04@gmail.com">deekshithbh04@gmail.com</a>
            </p>
            <p>
              <strong>Phone</strong><br />
              <a href="tel:+919876543210">+91 8867290934</a>
            </p>
            <p>
              <strong>Location</strong><br />
              City, State, Country
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/deekshith-bh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/deekshi275"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
            </div>
          </motion.div>
          <motion.form
            className="contact-form reveal-item"
            id="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={errors.name ? 'error' : ''}
              placeholder="Your name"
            />
            <span className="form-error" role="alert">{errors.name || ''}</span>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? 'error' : ''}
              placeholder="your@email.com"
            />
            <span className="form-error" role="alert">{errors.email || ''}</span>

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={errors.message ? 'error' : ''}
              placeholder="Your message"
            />
            <span className="form-error" role="alert">{errors.message || ''}</span>

            <motion.button
              type="submit"
              className="btn btn-primary"
              disabled={submitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
