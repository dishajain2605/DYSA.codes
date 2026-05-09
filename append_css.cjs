const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');

const lightModeStyles = `

/* ============================================
   LIGHT MODE OVERRIDES
   ============================================ */
body.light-mode {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --bg-card: rgba(255, 255, 255, 0.85);
  --neon-cyan: #0284c7;
  --neon-purple: #7e22ce;
  --neon-green: #059669;
  --neon-pink: #be185d;
  --neon-yellow: #d97706;
  --text-primary: #0f172a;
  --text-secondary: #334155;
  --text-dim: #64748b;
  --border-dim: rgba(0, 0, 0, 0.1);
  --border-cyan: rgba(2, 132, 199, 0.3);
}

body.light-mode .loader-grid,
body.light-mode .hero-grid {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
}

body.light-mode .navbar.scrolled {
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

body.light-mode .about-section {
  background: linear-gradient(180deg, var(--bg-primary) 0%, rgba(255,255,255,0.95) 50%, var(--bg-primary) 100%);
}

body.light-mode .about-card,
body.light-mode .tech-category {
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
}

body.light-mode .contact-section .contact-glow,
body.light-mode .hero-glow-1,
body.light-mode .hero-glow-2 {
  opacity: 0.5;
}

body.light-mode .hero-name {
  background: linear-gradient(135deg, #0f172a 0%, #334155 50%, #64748b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .nav-actions .nav-cta { display: none; }
}
`;

fs.appendFileSync(cssPath, lightModeStyles, 'utf8');
console.log('Light mode styles appended successfully.');
