import { addCSS } from '../methods/addCss.js';
import { addFetch } from '../methods/addFetch.js';
import { cssShadowRoot } from '../methods/cssShadowRoot.js';
import { openShadowRoot } from '../methods/openShadowRoot.js';
import { addEventListener } from '../methods/addEventListener.js';
import { promises as fs} from 'fs';

async function getMethodTemplate(methodName, ...args) {
  switch(methodName) {
    case 'cssShadowRoot':
      return cssShadowRoot(...args);
    case 'openShadowRoot':
      return openShadowRoot(...args);
    case 'addCSS':
      return addCSS(...args);
    case 'addFetch':
      return addFetch(...args);
    case 'addEventListener':
      return addEventListener(...args);
    default:
      throw new Error(`Method ${methodName} not found`);
  }
}

async function readAndRewriteFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8'); // Specify encoding to get a string

    if (data.includes('mundo')) {
        console.log('The file contains the word "mundo"');
    }

    const lines = data.split('\n');
    const processedLines = await Promise.all(lines.map(async (line) => {
      const classMatch = line.match(/^@class\s+(\w+)/);
      if (classMatch) {
          const className = classMatch[1];
          return `class ${className} {\n\n}`;
      }

      const methodMatch = line.match(/^@method\s+(\w+)\((.*)\)/);
      if (methodMatch) {
          const methodName = methodMatch[1];
          const args = methodMatch[2].split(',').map(arg => arg.trim());
          return await getMethodTemplate(methodName, ...args);
      }

      return line.replace(/mundo/g, 'world'); 
  }));
    
    let modifiedData = processedLines.join('\n');
    // const replacedData = modifiedData.replace(/mundo/g, 'world');


    await fs.writeFile(filePath, modifiedData);
    console.log('File has been rewritten successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
}

readAndRewriteFile('../file/prueba.txt');