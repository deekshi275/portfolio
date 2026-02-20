import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export const useScrollReveal = (options = {}) => {
  const { ref, inView } = useInView({
    threshold: 0.05,
    rootMargin: '0px 0px -8% 0px',
    ...options
  })

  useEffect(() => {
    if (inView && ref.current) {
      ref.current.classList.add('revealed')
    }
  }, [inView, ref])

  return { ref, inView }
}
