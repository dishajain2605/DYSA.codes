import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import avatarImg from '../assets/WhatsApp Image 2026-05-08 at 3.45.42 PM.jpeg'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = {
  frontend: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX Design'],
  ai:       ['Python', 'YOLOv8', 'Computer Vision', 'Object Detection', 'OCR', 'AI Model Integration', 'Data Processing'],
  robotics: ['ESP32-CAM', 'Sensor Integration', 'Automation Logic', 'Vision-based Tracking', 'Distance Measurement'],
  tools:    ['GitHub', 'REST APIs', 'API Integration', 'Dashboard Development', 'Deployment & Hosting'],
}

const VALUES = [
  'Building meaningful AI solutions',
  'Promoting accessible technology',
  'Creating intelligent automation systems',
  'Designing user-friendly interfaces',
  'Continuous learning in AI & robotics',
  'Open-source contributions',
  'Real-world problem solving',
]

const TAG_CLASS = {
  frontend: 'tag-cyan',
  ai:       'tag-purple',
  robotics: 'tag-green',
  tools:    'tag-pink',
}

export default function About() {
  const sectionRef  = useRef(null)
  const leftRef     = useRef(null)
  const rightRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -60, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      gsap.from(rightRef.current, {
        x: 60, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })

      // Constant floating animation for avatar
      gsap.to('.about-avatar-container', {
        y: -15,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      })
      
      // Floating drop shadow sync
      gsap.to('.about-avatar-container', {
        boxShadow: '0 25px 40px rgba(0, 245, 255, 0.1), 0 10px 10px rgba(139, 92, 246, 0.4)',
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      })

      // Scroll interaction depth parallax
      gsap.to('.about-avatar-img', {
        yPercent: 15,
        rotationZ: 4,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-avatar-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section about-section">
      <div className="section-number">02</div>
      <div className="container">
        <p className="section-label">About Me</p>
        <h2 className="section-title gradient-text-cyan-purple">Who I Am</h2>
        <div className="section-line" />

        <div className="about-grid">
          {/* Left – text */}
          <div ref={leftRef}>
            
            {/* 3D Profile Avatar Floating Container */}
            <div style={{ marginBottom: '3rem', position: 'relative' }}>
              <div 
                className="about-avatar-container"
                style={{
                  position: 'relative',
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))',
                  padding: '3px',
                  boxShadow: '0 0 30px rgba(0, 245, 255, 0.3), 0 0 60px rgba(139, 92, 246, 0.2)',
                }}
              >
                <img 
                  className="about-avatar-img"
                  src={avatarImg} 
                  alt="Disha Jain 3D Avatar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                  }}
                />
              </div>
            </div>

            <div className="about-text">
              <p>
                Hi, I&apos;m <span className="cyan">Disha Jain</span>, also known as{' '}
                <span className="purple" style={{ fontFamily: 'Orbitron', fontSize: '0.95em' }}>DYSA.codes</span>{' '}
                — a React Developer and AI/ML &amp; Robotics enthusiast passionate about building
                intelligent digital experiences.
              </p>
              <p>
                I specialize in developing modern web applications using <span className="cyan">React</span> while
                integrating AI, machine learning models, and real-time APIs. My work spans across
                frontend engineering, computer vision, robotics automation, and intelligent UI systems.
              </p>
              <p>
                I enjoy building products that merge{' '}
                <span className="cyan">AI intelligence</span> +{' '}
                <span className="purple">user experience</span> +{' '}
                <span className="cyan">real-world automation</span>.
              </p>
              <p>
                As a <span className="purple">woman in tech</span>, I focus on building meaningful
                solutions and promoting accessible, inclusive technology.
              </p>
            </div>

            <p style={{
              fontFamily: 'Fira Code',
              fontSize: '0.75rem',
              color: 'var(--neon-cyan)',
              letterSpacing: '0.2em',
              marginTop: '2rem',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}>
              // Core Values
            </p>

            <div className="about-values">
              {VALUES.map(v => (
                <div key={v} className="value-item">
                  <div className="value-dot" />
                  <span>{v}</span>
                </div>
              ))}
            </div>

            {/* Experience badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '2rem' }}>
              {[
                'React Developer',
                'AI/ML Project Developer',
                'Robotics Project Builder',
                'Client Website Developer',
                'API Integration Developer',
              ].map(role => (
                <span key={role} className="exp-badge">
                  <span className="exp-badge-dot" />
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Right – skill tags */}
          <div ref={rightRef}>
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="about-card">
                <div className="about-card-title" style={{
                  color: cat === 'frontend' ? 'var(--neon-cyan)'
                       : cat === 'ai'       ? 'var(--neon-purple)'
                       : cat === 'robotics' ? 'var(--neon-green)'
                       :                      'var(--neon-pink)',
                }}>
                  {cat === 'frontend' ? '⬡ Frontend'
                   : cat === 'ai'     ? '◈ AI / Machine Learning'
                   : cat === 'robotics'? '⬢ Robotics'
                   :                     '◎ Tools & Technologies'}
                </div>
                <div className="skill-tags">
                  {items.map(item => (
                    <span key={item} className={`skill-tag ${TAG_CLASS[cat]}`}>{item}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Quote card */}
            <div style={{
              marginTop: '1.25rem',
              padding: '1.5rem',
              borderLeft: '2px solid var(--neon-cyan)',
              background: 'rgba(0,245,255,0.03)',
              borderRadius: '0 8px 8px 0',
            }}>
              <p style={{
                fontFamily: 'Space Grotesk',
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}>
                &ldquo;Technology should be <span style={{ color: 'var(--neon-cyan)' }}>smart</span>,{' '}
                <span style={{ color: 'var(--neon-purple)' }}>inclusive</span>, and{' '}
                <span style={{ color: 'var(--neon-green)' }}>impactful</span>.&rdquo;
              </p>
              <p style={{
                fontFamily: 'Fira Code',
                fontSize: '0.7rem',
                color: 'var(--text-dim)',
                marginTop: '0.75rem',
                letterSpacing: '0.15em',
              }}>
                — Disha Jain
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
