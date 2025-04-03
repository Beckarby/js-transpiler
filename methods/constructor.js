export function generateConstructor(...properties) {
    let constructorCode = `constructor(props) {
    super();
    this.attachShadow({ mode: 'open' });
    this._state = {};
    this._props = {};
    this._elements = {};
    `;
  
    if (properties.length > 0) {
      constructorCode += `\n    // Properties of the component
    // Initialized as null for reference`;
  
      properties.forEach(prop => {
        if (typeof prop !== 'string' || !/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(prop)) {
          console.error("Invalid property detected:", prop);
          throw new Error(`Name of invalid property detected: ${prop}`);
        }
        constructorCode += `\n    this.${prop} = null;`;
      });
    }
  
    constructorCode += `\n}`;
  
    return constructorCode;
  };
  
  // @constructor(paramsofconstructor)
  // Ejemplos de uso:
  // console.log("=== without properties ===");
  // console.log(generateConstructor());
  
  // console.log("\n=== with properties ===");
  // console.log(generateConstructor('images', 'captions', 'autoplay', 'interval'));
  
  // console.log("\n=== with invalid properties (error) ===");
  // try {
  //   console.log(generateConstructor('validProp', 'invalid-prop'));
  // } catch (e) {
  //   console.error(e.message);
  // }