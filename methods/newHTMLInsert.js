export function newHTMLInsert(parent, type, style, idName, className) {
    return `
const insert = \`
    <${type} id="${idName}" class="${className}" style="${style}"></${type}>
\`;
${parent}.insertAdjacentHTML('beforeend', insert);
    `;
}
