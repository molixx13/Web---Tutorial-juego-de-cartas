const fs = require('fs');

try {
  let mainJsFile = 'c:/Users/usuario/OneDrive/Escritorio/Programacion/Web Ramyx/js/main.js';
  let js = fs.readFileSync(mainJsFile, 'utf8');
  js = js.replace('.inst-texto-panel p', '.inst-texto-panel-rol');
  fs.writeFileSync(mainJsFile, js, 'utf8');

  let htmlFile = 'c:/Users/usuario/OneDrive/Escritorio/Programacion/Web Ramyx/instrucciones.html';
  let html = fs.readFileSync(htmlFile, 'utf8');

  // Remove the toggle buttons
  html = html.replace(/\s*<button type="button" class="inst-rol-toggle-btn"[\s\S]*?<\/button>/g, '');

  // Remove the descripcion dropdowns
  html = html.replace(/\s*<div class="inst-rol-descripcion" style="display:none;"[\s\S]*?<\/div>\s*<\/div>/g, '\n        </div>');

  // Add the text panel after the last role wrapper in each panel
  // We can do this by finding the aria-label="Roles Sikuani" and Nukak and injecting before the closing </div> of the inst-roles-panel
  html = html.replace(/(<div class="inst-roles-panel" role="list" aria-label="Roles Sikuani">[\s\S]*?)(\s*<\/div>\s*<!-- Panel derecho)/g, '$1\n        <div class="inst-texto-panel-rol" aria-live="polite"></div>$2');
  
  html = html.replace(/(<div class="inst-roles-panel" role="list" aria-label="Roles Nukak">[\s\S]*?)(\s*<\/div>\s*<!-- Panel derecho)/g, '$1\n        <div class="inst-texto-panel-rol" aria-live="polite"></div>$2');

  fs.writeFileSync(htmlFile, html, 'utf8');
  console.log("Success");
} catch(e) {
  console.error(e);
}
