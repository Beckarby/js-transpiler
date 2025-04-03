export function openShadowRoot(selector){
    return `
const hostElement = document.querySelector(${selector});
const shadowRoot = hostElement.attachShadow({ mode: 'open' });
    `
}