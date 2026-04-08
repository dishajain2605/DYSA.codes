import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CATEGORIES = [
  {
    id: 'frontend',
    icon: '⬡',
    title: 'Frontend',
    color: '#00f5ff',
    colorVar: '--neon-cyan',
    items: [
      'React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3',
      'Responsive Design', 'UI/UX Design', 'Component Architecture',
    ],
  },
  {
    id: 'ai',
    icon: '◈',
    title: 'AI / Machine Learning',
    color: '#8b5cf6',
    colorVar: '--neon-purple',
    items: [
      'Python', 'YOLOv8', 'Computer Vision', 'Object Detection',
      'OCR', 'AI Model Integration', 'Data Processing', 'Real-time Inference',
    ],
  },
  {
    id: 'robotics',
    icon: '⬢',
    title: 'Robotics & Hardware',
    color: '#00ff88',
    colorVar: '--neon-green',
    items: [
      'ESP32-CAM', 'Sensor Integration', 'Automation Logic',
      'Vision-based Tracking', 'Distance Measurement', 'Embedded Systems',
    ],
  },
  {
    id: 'tools',
    icon: '◎',
    title: 'Tools & More',
    color: '#ff2d78',
    colorVar: '--neon-pink',
    items: [
      'GitHub', 'REST APIs', 'Dashboard Development',
      'Real-time UI', 'Deployment & Hosting', 'Digital Marketing',
      'Client Projects', 'Performance Optimization',
    ],
  },
]

export default function TechStack() {
  const sectionRef = useRef(null)
  const cardsRef   = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="section tech-section">
      <div className="section-number">03</div>
      <div className="container">
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title" style={{ color: '#fff' }}>
          Skills &amp;{' '}
          <span className="gradient-text-cyan-purple">Technologies</span>
        </h2>
        <div className="section-line" />

        <div className="tech-grid">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.id}
              ref={el => cardsRef.current[i] = el}
              className="tech-category"
              style={{ '--cat-color': cat.color }}
            >
              {/* Glow corner accent */}
              <div style={{
                position: 'absolute',
                top: 0, right: 0,
                width: '80px', height: '80px',
                background: `radial-gradient(circle at top right, ${cat.color}18, transparent 70%)`,
                borderRadius: '0 16px 0 0',
                pointerEvents: 'none',
              }} />

              <div className="tech-cat-header">
                <span className="tech-cat-icon">{cat.icon}</span>
                <h3 className="tech-cat-title" style={{ color: cat.color }}>
                  {cat.title}
                </h3>
              </div>

              <div className="tech-items">
                {cat.items.map(item => (
                  <span
                    key={item}
                    className="tech-item"
                    style={{
                      borderColor: `${cat.color}30`,
                      color: cat.color,
                      background: `${cat.color}08`,
                    }}
                    onMouseEnter={e => {
                      e.target.style.background = `${cat.color}1a`
                      e.target.style.boxShadow  = `0 0 12px ${cat.color}40`
                    }}
                    onMouseLeave={e => {
                      e.target.style.background = `${cat.color}08`
                      e.target.style.boxShadow  = 'none'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom summary bar */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem 2rem',
          background: 'rgba(8,8,22,0.8)',
          border: '1px solid rgba(0,245,255,0.1)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          backdropFilter: 'blur(10px)',
        }}>
          {[
            { num: '7+',  label: 'Frontend Skills',  color: '#00f5ff' },
            { num: '8+',  label: 'AI/ML Tools',       color: '#8b5cf6' },
            { num: '6',   label: 'Robotics Skills',   color: '#00ff88' },
            { num: '8+',  label: 'Dev Tools',          color: '#ff2d78' },
          ].map(({ num, label, color }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Orbitron',
                fontSize: '2rem',
                fontWeight: 900,
                color,
                textShadow: `0 0 10px ${color}`,
                lineHeight: 1,
              }}>{num}</div>
              <div style={{
                fontFamily: 'Fira Code',
                fontSize: '0.65rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.15em',
                marginTop: '4px',
                textTransform: 'uppercase',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
