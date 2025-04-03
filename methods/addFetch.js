export function addFetch(route, thisMethod, headers, data){
    return `
fetch(${route}, {
method: '${thisMethod},
headers: {${headers}},
body: JSON.stringify(${data})
})
    `
}