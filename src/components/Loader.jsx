import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const LOGO = ['D', 'Y', 'S', 'A', '.', 'c', 'o', 'd', 'e', 's']

export default function Loader({ onComplete }) {
  const wrapRef     = useRef(null)
  const lettersRef  = useRef([])
  const taglineRef  = useRef(null)
  const barRef      = useRef(null)
  const percentRef  = useRef(null)
  const counterRef  = useRef({ val: 0 })

  useEffect(() => {
    lettersRef.current = lettersRef.current.slice(0, LOGO.length)
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Set initial states
    gsap.set(lettersRef.current, { opacity: 0, y: 60, rotationX: 90, transformOrigin: '50% 50%' })
    gsap.set(taglineRef.current, { opacity: 0, y: 20 })
    gsap.set(barRef.current, { scaleX: 0, transformOrigin: 'left center' })
    gsap.set(percentRef.current, { opacity: 0 })

    tl
      // Letters cascade in
      .to(lettersRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: 'back.out(2)',
      })
      // Tagline
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      }, '-=0.2')
      // Percent counter
      .to(percentRef.current, { opacity: 1, duration: 0.3 }, '-=0.3')
      // Loading bar + counter
      .to(barRef.current, {
        scaleX: 1,
        duration: 1.6,
        ease: 'power1.inOut',
      }, '-=0.1')
      .to(counterRef.current, {
        val: 100,
        duration: 1.6,
        ease: 'power1.inOut',
        onUpdate() {
          if (percentRef.current) {
            percentRef.current.textContent = `${Math.round(counterRef.current.val)}%`
          }
        },
      }, '<')
      // Neon flicker on letters
      .to(lettersRef.current.slice(0, 4), {
        textShadow: '0 0 30px #00f5ff, 0 0 60px #00f5ff, 0 0 100px rgba(0,245,255,0.8)',
        duration: 0.15,
        stagger: 0.05,
        yoyo: true,
        repeat: 1,
      }, '-=0.4')
      // Exit — slide up and fade
      .to(wrapRef.current, {
        yPercent: -100,
        duration: 0.75,
        ease: 'power2.inOut',
        delay: 0.25,
        onComplete,
      })

    return () => tl.kill()
  }, [onComplete])

  const getClass = (char, i) => {
    if (char === '.') return 'loader-letter dot'
    if (i >= 5)       return 'loader-letter lower'
    return 'loader-letter'
  }

  return (
    <div ref={wrapRef} className="loader-wrap">
      {/* Grid */}
      <div className="loader-grid" />
      {/* Scan line */}
      <div className="loader-scan" />
      {/* Corner decorations */}
      <div className="loader-corner tl" />
      <div className="loader-corner tr" />
      <div className="loader-corner bl" />
      <div className="loader-corner br" />

      {/* Central content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <h1 className="loader-logo" aria-label="DYSA.codes">
          {LOGO.map((char, i) => (
            <span
              key={i}
              ref={el => lettersRef.current[i] = el}
              className={getClass(char, i)}
            >
              {char}
            </span>
          ))}
        </h1>

        <p ref={taglineRef} className="loader-tagline">
          React Developer &nbsp;•&nbsp; AI/ML &nbsp;•&nbsp; Robotics
        </p>
      </div>

      {/* Bottom loading bar */}
      <div className="loader-bar-track">
        <div ref={barRef} className="loader-bar-fill" />
      </div>
      <p ref={percentRef} className="loader-percent">0%</p>
    </div>
  )
}
