export function addCSS(route){
    return `
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = ${route}; 
document.head.appendChild(link);
    `
}
