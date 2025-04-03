export function addEventListener(selector, event, handler) {
    return `
document.querySelector('${selector}')
.addEventListener('${event}', (${handler}));`
  }