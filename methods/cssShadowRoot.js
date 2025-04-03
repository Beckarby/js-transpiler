export function cssShadowRoot(css){
    return `
const sheet = new CSSStyleSheet();
sheet.replaceSync(${css});
this.shadowRoot.adoptedStyleSheets = [sheet];
    `
}