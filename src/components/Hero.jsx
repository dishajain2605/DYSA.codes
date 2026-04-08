import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TypeAnimation } from 'react-type-animation'
import HeroCanvas from './HeroCanvas'

export default function Hero() {
  const introRef  = useRef(null)
  const nameRef   = useRef(null)
  const aliasRef  = useRef(null)
  const rolesRef  = useRef(null)
  const bioRef    = useRef(null)
  const ctaRef    = useRef(null)
  const statsRef  = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 })

    tl.to(introRef.current,  { opacity: 1, y: 0, duration: 0.6 })
      .to(nameRef.current,   { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
      .to(aliasRef.current,  { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .to(rolesRef.current,  { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to(bioRef.current,    { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to(ctaRef.current,    { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to(statsRef.current,  { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to(scrollRef.current, { opacity: 1, duration: 0.5 }, '-=0.2')
  }, [])

  return (
    <section id="home" className="hero-section">
      {/* Grid overlay */}
      <div className="hero-grid" />

      {/* Ambient glow blobs */}
      <div className="hero-glow-blob hero-glow-1" />
      <div className="hero-glow-blob hero-glow-2" />

      {/* 3D Canvas */}
      <div className="hero-canvas-wrap">
        <HeroCanvas />
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '640px' }} className="hero-content">

          {/* Intro label */}
          <p
            ref={introRef}
            className="hero-intro"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            Hello, World!
          </p>

          {/* Name */}
          <h1
            ref={nameRef}
            className="hero-name"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            Disha Jain
          </h1>

          {/* Alias */}
          <div
            ref={aliasRef}
            className="hero-alias"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            <span className="brand-dysa">DYSA</span>
            <span className="brand-dot">.</span>
            <span className="brand-codes">codes</span>
          </div>

          {/* Typing roles */}
          <div
            ref={rolesRef}
            className="hero-roles"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            <TypeAnimation
              sequence={[
                'React Developer',           2000,
                'AI/ML Enthusiast',          2000,
                'Robotics Builder',          2000,
                'Computer Vision Engineer',  2000,
                'API Integration Developer', 2000,
                'Problem Solver',            2000,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              cursor={false}
            />
            <span className="cursor" style={{ color: 'var(--neon-cyan)' }}>_</span>
          </div>

          {/* Bio */}
          <p
            ref={bioRef}
            className="hero-bio"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            I design and build <span style={{ color: 'var(--neon-cyan)', fontWeight: 600 }}>intelligent web experiences</span> powered
            by React, AI/ML, and robotics. From interactive web applications to
            computer vision systems — I create solutions that combine{' '}
            <span style={{ color: 'var(--neon-purple)', fontWeight: 600 }}>creativity with real-world impact</span>.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="hero-cta"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            <a href="#projects" className="btn-primary" id="hero-projects-btn">
              ⚡ View Projects
            </a>
            <a href="#contact" className="btn-outline" id="hero-contact-btn">
              ✉ Contact Me
            </a>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="hero-stats"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            {[
              { num: '5+',  label: 'Projects Built' },
              { num: '3',   label: 'AI/ML Systems' },
              { num: '2',   label: 'Client Sites' },
              { num: '∞',   label: 'Learning Mode' },
            ].map(({ num, label }) => (
              <div key={label} className="stat-item">
                <div className="stat-number">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="scroll-indicator"
        style={{ opacity: 0 }}
      >
        <span className="scroll-text">scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
