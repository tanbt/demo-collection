var add;

fetch('add.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, {})
).then(obj => {
  add = obj.instance.exports._Z3addii;
  console.log("add(3,6): = " + add(3,6));
});
