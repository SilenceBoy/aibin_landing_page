import { useEffect } from 'react'

export const useScrollObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, {
      threshold: 0.1
    })

    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
}
