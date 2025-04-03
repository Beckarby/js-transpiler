const fs = require('fs');
const path = require('path');

const generateTemplate = (templatePath) => {
  try {
    const fullPath = path.resolve(process.cwd(), templatePath);
    const templateContent = fs.readFileSync(fullPath, 'utf8');
    
    const templateCode = `#getTemplate() {
return \`
${preserveIndentation(templateContent)}
\`;
}
    `;
    
    return templateCode;
  } catch (error) {
    console.error('Error al leer el archivo de template:', error.message);
    // Retornar versión básica si hay error
    return `
  #getTemplate() {
    return \`
      <div class="component">
        <!-- Template por defecto -->
        <slot></slot>
      </div>
    \`;
  }
    `;
  }
};

// Helper para preservar indentación
function preserveIndentation(content) {
  return content.split('\n')
    .map(line => `      ${line}`)
    .join('\n');
}

// Ejemplo de uso:
const templateCode = generateTemplate('template.html');
console.log(templateCode);