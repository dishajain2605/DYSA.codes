import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    // Hide default cursor across interactive elements
    document.body.style.cursor = 'none'
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .nav-cta, .hamburger, .btn-primary, .btn-outline, .project-card, .contact-card')
    
    interactiveElements.forEach((el) => {
      el.style.cursor = 'none'
    })

    const ctx = gsap.context(() => {
      const cursor = cursorRef.current
      const follower = followerRef.current

      // We use quickSetter for high performance mouse tracking
      const setCursorX = gsap.quickSetter(cursor, 'x', 'px')
      const setCursorY = gsap.quickSetter(cursor, 'y', 'px')
      
      const xTo = gsap.quickTo(follower, 'x', { duration: 0.6, ease: 'power3.out' })
      const yTo = gsap.quickTo(follower, 'y', { duration: 0.6, ease: 'power3.out' })

      const onMouseMove = (e) => {
        setCursorX(e.clientX)
        setCursorY(e.clientY)
        xTo(e.clientX)
        yTo(e.clientY)
      }

      window.addEventListener('mousemove', onMouseMove)

      // Hover states for magnetic effect
      const onMouseEnter = () => {
        gsap.to(cursor, { scale: 0, duration: 0.2 })
        gsap.to(follower, { scale: 2.2, backgroundColor: 'rgba(0, 245, 255, 0.1)', borderColor: '#00f5ff', duration: 0.3 })
      }
      
      const onMouseLeave = () => {
        gsap.to(cursor, { scale: 1, duration: 0.2 })
        gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.3)', duration: 0.3 })
      }

      // Re-query interactive elements periodically in case they get rendered late
      const addHoverEvents = () => {
        document.querySelectorAll('a, button, .contact-card, .project-card, .hamburger, .nav-cta').forEach((el) => {
          el.addEventListener('mouseenter', onMouseEnter)
          el.addEventListener('mouseleave', onMouseLeave)
          el.style.cursor = 'none'
        })
      }
      
      addHoverEvents()
      // Small timeout to catch elements rendered after loader
      setTimeout(addHoverEvents, 3500)

      return () => {
        window.removeEventListener('mousemove', onMouseMove)
        document.querySelectorAll('a, button, .contact-card, .project-card, .hamburger, .nav-cta').forEach((el) => {
          el.removeEventListener('mouseenter', onMouseEnter)
          el.removeEventListener('mouseleave', onMouseLeave)
        })
      }
    })

    return () => {
      document.body.style.cursor = 'auto'
      ctx.revert()
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '8px', height: '8px',
          backgroundColor: '#00f5ff',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '32px', height: '32px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'background-color 0.3s, border-color 0.3s',
        }}
      />
    </>
  )
}
