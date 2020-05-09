/**
 * `src/index.js` must exist here to be Webpack entry point
 */
setTimeout(() => {
  const h1 = document.querySelector('h1');
  h1.innerText += " (from JS)";
}, 500);

import {renderConsole} from './statement.js';
console.log(renderConsole());

(async() => {
  const app = await import('./statement.js');
  document.getElementById('placeholder').innerHTML = app.printHtml();
})();