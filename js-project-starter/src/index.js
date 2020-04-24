/**
 * `src/index.js` must exist here to be Webpack entry point
 */
setTimeout(() => {
  const h1 = document.querySelector('h1');
  h1.innerText += " (from JS)";
}, 1000);

export const sum = (a, b) => (a+b);
