import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )

    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <a href="#home" className="nav-logo" aria-label="DYSA.codes">
        <span className="dysa">DYSA</span>
        <span className="dot">.</span>
        <span className="codes">codes</span>
      </a>

      {/* Desktop Links */}
      <ul className="nav-links">
        {LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="nav-link">{label}</a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://github.com/dishajain2605"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
      >
        <span>⌬</span> GitHub
      </a>

      {/* Mobile hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none', transition: 'transform 0.3s' }} />
        <span style={{ opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', transition: 'transform 0.3s' }} />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          background: 'rgba(5,5,15,0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,245,255,0.15)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          zIndex: 999,
        }}>
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1rem' }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
