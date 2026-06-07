const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/usuario/OneDrive/Escritorio/Programacion/Web Ramyx';

const files = [
  'cartas.html',
  'culturas.html',
  'index.html',
  'instrucciones.html',
  'nuestra-historia.html',
  'tienda.html',
  'files/instrucciones.html'
];

files.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the current link with a simpler one that opens in a new tab to avoid Chrome's file:/// download blockage
    const regex = /<a\s+id="nav-manual"\s+class="nav__link"\s+href="([^"]+)"\s+download="[^"]*">MANUAL<\/a>/g;
    
    content = content.replace(regex, '<a id="nav-manual" class="nav__link" href="$1" target="_blank" rel="noopener noreferrer">MANUAL</a>');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
});
