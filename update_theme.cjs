const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Replace variables
css = css.replace('--bg-primary: #05050f;', '--bg-primary: #080004;');
css = css.replace('--bg-secondary: #0a0a1e;', '--bg-secondary: #12000a;');
css = css.replace('--bg-card: rgba(10, 10, 30, 0.8);', '--bg-card: rgba(18, 0, 10, 0.8);');
css = css.replace('--neon-cyan: #00f5ff;', '--neon-cyan: #ff3399;'); // Map cyan to pink
css = css.replace('--neon-purple: #8b5cf6;', '--neon-purple: #cc0066;'); // Map purple to deep magenta
css = css.replace('--neon-green: #00ff88;', '--neon-green: #ff66b3;'); // Map green to soft pink
css = css.replace('--text-secondary: #94a3b8;', '--text-secondary: #f0cce6;');
css = css.replace('--text-dim: #475569;', '--text-dim: #a87b97;');
css = css.replace('--border-dim: rgba(255, 255, 255, 0.06);', '--border-dim: rgba(255, 51, 153, 0.1);');
css = css.replace('--border-cyan: rgba(0, 245, 255, 0.25);', '--border-cyan: rgba(255, 51, 153, 0.25);');

// 2. Replace rgba colors
css = css.replace(/rgba\(0,\s*245,\s*255/g, 'rgba(255, 51, 153');
css = css.replace(/rgba\(139,\s*92,\s*246/g, 'rgba(204, 0, 102');

// 3. Replace fonts
css = css.replace(/font-family:\s*'Orbitron',\s*monospace;/g, "font-family: 'Space Grotesk', sans-serif;");
css = css.replace(/font-family:\s*'Fira Code',\s*monospace;/g, "font-family: 'Inter', sans-serif; letter-spacing: 0.05em;");

// 4. Soften the aesthetics (remove grid lines for humanized feel)
css = css.replace(/background-image:\s*linear-gradient[^\;]+;/g, 'background-image: none; /* Removed for softer look */');
css = css.replace(/border-radius:\s*2px;/g, 'border-radius: 8px;');
css = css.replace(/border-radius:\s*0;/g, 'border-radius: 12px;');

// 5. Change specific background colors to fit magenta
css = css.replace(/background:\s*rgba\(5,\s*5,\s*15,\s*0\.85\);/g, 'background: rgba(8, 0, 4, 0.85);');
css = css.replace(/background:\s*rgba\(10,10,30,0\.95\)/g, 'background: rgba(18, 0, 10, 0.95)');
css = css.replace(/background:\s*rgba\(10,10,30,0\.7\)/g, 'background: rgba(18, 0, 10, 0.7)');
css = css.replace(/background:\s*rgba\(8,\s*8,\s*22,\s*0\.8\)/g, 'background: rgba(12, 0, 6, 0.8)');

fs.writeFileSync(cssPath, css, 'utf8');
console.log('CSS theme updated successfully.');
