/**
 * `src/index.js` must exist here to be Webpack entry point
 */
setTimeout(() => {
  const h1 = document.querySelector('h1');
  h1.innerText += " (from JS)";
}, 500);

import {renderConsole} from './app.js';
console.log(renderConsole());

(async() => {
  const app = await import('./app.js');
  document.getElementById('placeholder').innerHTML = app.printHtml();
})();