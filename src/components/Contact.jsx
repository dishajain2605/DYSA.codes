import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CONTACTS = [
  {
    platform: 'Email',
    icon: '✉',
    handle: 'msgtodisha.2202@gmail.com',
    href: 'mailto:msgtodisha.2202@gmail.com',
    color: '#00f5ff',
  },
  {
    platform: 'GitHub',
    icon: '⌬',
    handle: 'dishajain2605',
    href: 'https://github.com/dishajain2605',
    color: '#8b5cf6',
  },
  {
    platform: 'LinkedIn',
    icon: '◈',
    handle: 'disha-jain',
    href: 'https://www.linkedin.com/in/disha-jain-b6190a242',
    color: '#00ff88',
  },
  {
    platform: 'Instagram',
    icon: '◉',
    handle: '@disha_jain_2004',
    href: 'https://www.instagram.com/disha_jain_2004/',
    color: '#ff2d78',
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const headRef    = useRef(null)
  const cardsRef   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 80%' },
      })
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: 60, opacity: 0, duration: 0.7, ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: { trigger: card, start: 'top 88%' },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="section contact-section">
      <div className="section-number">05</div>
      <div className="contact-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={headRef}>
          <p className="section-label" style={{ justifyContent: 'center' }}>
            Contact
          </p>
          <h2 className="contact-heading">
            Let&apos;s Build Something <br /> Amazing Together
          </h2>
          <p className="contact-sub">
            Open to collaborations, freelance projects, and full-time opportunities.
          </p>
        </div>

        {/* Contact cards */}
        <div className="contact-cards">
          {CONTACTS.map((c, i) => (
            <a
              key={c.platform}
              ref={el => cardsRef.current[i] = el}
              href={c.href}
              target={c.platform !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-card"
              id={`contact-${c.platform.toLowerCase()}`}
              style={{ '--contact-color': c.color }}
            >
              <div style={{ position: 'absolute', inset: 0, borderRadius: '12px', background: `radial-gradient(circle at 50% 0%, ${c.color}08, transparent 70%)`, pointerEvents: 'none' }} />
              <span className="contact-icon">{c.icon}</span>
              <span className="contact-platform">{c.platform}</span>
              <span className="contact-handle">{c.handle}</span>
              <span className="contact-arrow">→</span>
            </a>
          ))}
        </div>

        {/* Big email CTA */}
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'rgba(8,8,22,0.7)',
          border: '1px solid rgba(0,245,255,0.12)',
          borderRadius: '20px',
          backdropFilter: 'blur(15px)',
          maxWidth: '700px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Corner accents */}
          {['tl','tr','bl','br'].map(pos => (
            <div key={pos} style={{
              position: 'absolute',
              width: '16px', height: '16px',
              ...(pos.includes('t') ? { top: '16px' } : { bottom: '16px' }),
              ...(pos.includes('l') ? { left: '16px', borderLeft: '1px solid var(--neon-cyan)', ...(pos.includes('t') ? { borderTop: '1px solid var(--neon-cyan)' } : { borderBottom: '1px solid var(--neon-cyan)' }) } : { right: '16px', borderRight: '1px solid var(--neon-cyan)', ...(pos.includes('t') ? { borderTop: '1px solid var(--neon-cyan)' } : { borderBottom: '1px solid var(--neon-cyan)' }) }),
            }} />
          ))}

          <p style={{
            fontFamily: 'Fira Code',
            fontSize: '0.75rem',
            color: 'var(--neon-cyan)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            // ping me directly
          </p>

          <a
            href="mailto:msgtodisha.2202@gmail.com"
            id="contact-email-direct"
            style={{
              fontFamily: 'Orbitron',
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              fontWeight: 700,
              color: 'var(--neon-cyan)',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '0.5rem',
              transition: 'text-shadow 0.3s',
            }}
            onMouseEnter={e => e.target.style.textShadow = '0 0 20px var(--neon-cyan), 0 0 40px rgba(0,245,255,0.5)'}
            onMouseLeave={e => e.target.style.textShadow = 'none'}
          >
            msgtodisha.2202@gmail.com
          </a>

          <p style={{
            fontFamily: 'Fira Code',
            fontSize: '0.75rem',
            color: 'var(--text-dim)',
            letterSpacing: '0.1em',
          }}>
            I typically respond within 24 hours ✓
          </p>
        </div>
      </div>
    </section>
  )
}
