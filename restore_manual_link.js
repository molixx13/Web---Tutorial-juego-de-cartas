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

const newLink = 'https://drive.google.com/file/d/1MDhLtslKqvBi8fEtT59QJIxoBLWFHfQk/view?usp=sharing';

files.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace current manual link
    const regex = /<a\s+id="nav-manual"\s+class="nav__link"\s+href="[^"]+"\s+target="_blank"\s+rel="noopener noreferrer">MANUAL<\/a>/g;
    const replacement = `<a id="nav-manual" class="nav__link" href="${newLink}" target="_blank" rel="noopener noreferrer">MANUAL</a>`;
    
    content = content.replace(regex, replacement);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Restored ${file}`);
  }
});
