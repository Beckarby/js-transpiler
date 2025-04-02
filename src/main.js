const fs = require('fs').promises;

async function readAndRewriteFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8'); // Specify encoding to get a string

    if (data.includes('mundo')) {
        console.log('The file contains the word "mundo"');
    }

    const lines = data.split('\n');
    const processedLines = lines.map(line => {
        const classMatch = line.match(/^@class\s+(\w+)/);
        if (classMatch) {
            const className = classMatch[1];
            return `class ${className} {\n\n}`;
        }
        return line;
    })
    
    let modifiedData = processedLines.join('\n');
    const replacedData = modifiedData.replace(/mundo/g, 'world');


    await fs.writeFile(filePath, replacedData);
    console.log('File has been rewritten successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Usage
readAndRewriteFile('../file/prueba.txt');