export function generateComponent (name, ext) {
  if (/\s/.test(name)) {
    throw new Error(`El nombre del componente "${name}" no puede contener espacios. Usa guiones (-) o guiones bajos (_) en su lugar.`);
  }
  
  if (/\s/.test(ext)) {
    throw new Error(`El nombre de la extension "${ext}" no puede contener espacios.`);
  }
  
  const componentName = name.split(/[-_]/)
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join('');
  
  const cssClass = name;
  let componentCode = '';
  
  if (ext != null) {
    componentCode += `export class ${componentName} extends ${ext} {`
  } else {
    componentCode += `export class ${componentName} {`
  }
  
  
  componentCode += `
  // The constructor must be the first thing to write. 
  // we have a method for that. 
  // use @constructor(params) down below this comment`;
  
  componentCode += `
  
  async #render() {
    // Render logic here
    }`;
    
    componentCode += `
    
    #applyProps() {
      // modify properties here
      }`;

  componentCode += `
}
customElements.define("${cssClass}", ${componentName});
`;

return componentCode;
};

// Works too without the second parameter.
// @class(name, extends)
const name = 'slider-component';
const miComponente = generateComponent(name, 'Q uantum');
console.log(miComponente);