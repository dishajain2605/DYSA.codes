const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');

const responsiveFix = `
/* Layout fixes for mobile navbar */
@media (max-width: 768px) {
  .nav-logo { margin-right: auto; }
  .nav-actions { margin-right: 1.25rem; }
}
`;

fs.appendFileSync(cssPath, responsiveFix, 'utf8');
console.log('Mobile responsive fixes applied.');
