export function defineCustomElement(elementName, css) {
    const className = elementName
      .split('-')
      .map(part => part[0].toUpperCase() + part.slice(1))
      .join('');
  
    return `
  class ${className} extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(\`${css}\`);
      this.shadowRoot.adoptedStyleSheets = [sheet];
    }
  }
  
  customElements.define('${elementName}', ${className});
    `;
  }