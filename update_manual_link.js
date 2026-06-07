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
    
    // Use regex to locate the exact anchor and replace it
    // Match <a id="nav-manual" ... >MANUAL</a>
    const regex = /<a\s+id="nav-manual"\s+class="nav__link"\s+href="[^"]*"(?:\s+target="_blank"\s+rel="noopener noreferrer")?>MANUAL<\/a>/g;
    
    // We adjust the path depending on whether it's in the root or in the `files` folder
    const pdfPath = file.startsWith('files/') ? '../MANUAL.pdf' : 'MANUAL.pdf';

    const replacement = `<a id="nav-manual" class="nav__link" href="${pdfPath}" download="MANUAL.pdf">MANUAL</a>`;
    
    content = content.replace(regex, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
