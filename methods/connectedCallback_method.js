const generateconnectedCallback = () => {
    let connectedCallbackCode = `async connectedCallback() {
// Basic callback had to implement ur changes.-
this.#applyProps();
await this.#render(await this.#getCss());
}
    `;
    return connectedCallbackCode;
};

// @connectedCallback()
console.log(generateconnectedCallback());
  