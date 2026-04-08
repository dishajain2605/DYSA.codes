import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: 'solar',
    emoji: '🌌',
    title: 'Solar System — 2D & 3D Interactive Explorer',
    desc: 'A visually engaging Solar System representation featuring both 2D and 3D views. Users can explore planets interactively with detailed information and Wikipedia links.',
    features: [
      '2D and 3D solar system visualization',
      'Interactive planet selection & info panels',
      'External Wikipedia links integration',
      'Smooth animations & educational UI design',
    ],
    tech: ['React', 'JavaScript', 'CSS', 'Three.js', 'Animation'],
    accent: '#00f5ff',
    link: null,
    github: 'https://github.com/dishajain2605',
  },
  {
    id: 'smartvoice',
    emoji: '🦯',
    title: 'SmartVoice AI Vision Stick',
    desc: 'An advanced computer vision-based vision assistance system designed to help visually impaired users understand their surroundings using real-time AI.',
    features: [
      'Object detection using COCO-90 dataset',
      'Real-time environment scanning',
      'OCR for text reading & sign detection',
      'Voice-enabled assistance logic',
      'Live AI processing pipeline',
    ],
    tech: ['Python', 'Computer Vision', 'YOLOv8', 'OCR', 'AI Models', 'MobileNetSSD'],
    accent: '#8b5cf6',
    link: null,
    github: 'https://github.com/dishajain2605',
  },
  {
    id: 'golfbot',
    emoji: '⛳',
    title: 'Golf Bot — AI Tracking & Club Assistant',
    desc: 'A smart robotics-based golf assistant that tracks ball movement, calculates distance, and recommends professional golf clubs using real-time AI.',
    features: [
      'AI ball tracking using YOLOv8',
      'ESP32-CAM live camera feed',
      'Distance sensing (10–30cm)',
      'Club recommendation system',
      'Real-time dashboard UI & yardage calculation',
    ],
    tech: ['Python', 'YOLOv8', 'ESP32-CAM', 'Computer Vision', 'Robotics', 'Dashboard UI'],
    accent: '#00ff88',
    link: null,
    github: 'https://github.com/dishajain2605',
  },
  {
    id: 'tamara',
    emoji: '🎓',
    title: 'Tamara Education — Client Project',
    desc: 'A client-based educational platform developed during a hackathon, focused on showcasing international-level education and initiatives with a professional UI.',
    features: [
      'Modern responsive UI design',
      'Educational content structure',
      'Client-based customization',
      'Professional landing page',
    ],
    tech: ['React', 'Frontend Development', 'Responsive UI', 'Client Work'],
    accent: '#ff2d78',
    link: 'https://tamaraedu.com',
    github: null,
  },
  {
    id: 'abhivyaktti',
    emoji: '💃',
    title: 'Abhivyaktti — Dance Narrative Platform',
    desc: 'A creative website built for a dance narrative platform showcasing performances and artistic expression with smooth navigation and visual storytelling.',
    features: [
      'Artistic & animated UI design',
      'Smooth navigation & transitions',
      'Visual storytelling layout',
      'Performance showcase sections',
    ],
    tech: ['React', 'Frontend Design', 'UI/UX', 'Responsive'],
    accent: '#ffd700',
    link: 'https://abhivyaktti.com',
    github: null,
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        delay: (index % 3) * 0.12,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
      })
    })
    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="project-card"
      style={{
        '--card-accent': `linear-gradient(90deg, ${project.accent}, ${project.accent}88)`,
        '--card-color': project.accent,
        '--card-color-opacity': 0.8,
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '120px', height: '120px',
        background: `radial-gradient(circle at top right, ${project.accent}15, transparent 70%)`,
        borderRadius: '0 16px 0 0',
        pointerEvents: 'none',
      }} />

      <span className="project-emoji">{project.emoji}</span>

      <h3 className="project-title">{project.title}</h3>

      <p className="project-desc">{project.desc}</p>

      <ul className="project-features">
        {project.features.map(f => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <div className="project-tech">
        {project.tech.map(t => (
          <span key={t} className="project-tech-tag">{t}</span>
        ))}
      </div>

      <div className="project-links">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            style={{ '--card-color': project.accent }}
          >
            ↗ Live Site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            style={{ '--card-color': project.accent }}
          >
            ⌬ GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  return (
    <section id="projects" ref={sectionRef} className="section projects-section">
      <div className="section-number">04</div>
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title" style={{ color: '#fff' }}>
          What I&apos;ve{' '}
          <span className="gradient-text-cyan-purple">Built</span>
        </h2>
        <div className="section-line" />

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '3.5rem',
          padding: '2.5rem',
          background: 'rgba(8,8,22,0.7)',
          border: '1px solid rgba(0,245,255,0.1)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
        }}>
          <p style={{
            fontFamily: 'Fira Code',
            fontSize: '0.8rem',
            color: 'var(--text-dim)',
            letterSpacing: '0.2em',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
          }}>
            // Explore more on GitHub
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            lineHeight: 1.7,
          }}>
            AI projects, React websites, Robotics systems, Computer vision apps &amp; Experimental builds
          </p>
          <a
            href="https://github.com/dishajain2605"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="github-explore-btn"
          >
            ⌬ View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
