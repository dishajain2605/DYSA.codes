export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle top glow */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '400px', height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)',
        boxShadow: '0 0 20px var(--neon-cyan)',
      }} />

      <div className="container">
        {/* Logo */}
        <div className="footer-logo">
          <span style={{ color: 'var(--neon-cyan)', textShadow: '0 0 15px var(--neon-cyan)' }}>DYSA</span>
          <span style={{ color: '#fff' }}>.</span>
          <span style={{ color: 'var(--neon-purple)', textShadow: '0 0 15px var(--neon-purple)' }}>codes</span>
        </div>

        <p className="footer-tagline">
          React Developer &nbsp;|&nbsp; AI/ML &nbsp;|&nbsp; Robotics
        </p>

        <p style={{
          fontFamily: 'Fira Code',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          fontStyle: 'italic',
          letterSpacing: '0.05em',
          marginBottom: '1.5rem',
        }}>
          &ldquo;Building intelligent experiences with code.&rdquo;
        </p>

        {/* Social links row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub',    href: 'https://github.com/dishajain2605',                         color: '#8b5cf6' },
            { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/disha-jain-b6190a242',         color: '#00f5ff' },
            { label: 'Instagram', href: 'https://www.instagram.com/disha_jain_2004/',               color: '#ff2d78' },
            { label: 'Email',     href: 'mailto:msgtodisha.2202@gmail.com',                         color: '#00ff88' },
          ].map(({ label, href, color }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Fira Code',
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                transition: 'color 0.3s',
                padding: '4px 0',
              }}
              onMouseEnter={e => { e.target.style.color = color }}
              onMouseLeave={e => { e.target.style.color = 'var(--text-dim)' }}
            >
              {label}
            </a>
          ))}
        </div>

        <p className="footer-copy">
          © {year} Disha Jain — DYSA.codes &nbsp;·&nbsp; Crafted with ⚡ React &amp; GSAP &amp; three.js
        </p>
      </div>
    </footer>
  )
}
