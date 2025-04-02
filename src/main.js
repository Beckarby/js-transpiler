const fs = require('fs').promises;

async function readAndRewriteFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8'); // Specify encoding to get a string

    if (data.includes('mundo')) {
        console.log('The file contains the word "mundo"');
    }

    

    const replacedData = data.replace(/mundo/g, 'world');

    await fs.writeFile(filePath, replacedData);
    console.log('File has been rewritten successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Usage
readAndRewriteFile('../file/prueba.txt');