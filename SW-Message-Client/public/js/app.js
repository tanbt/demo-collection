if('serviceWorker' in navigator){
  // Register service worker
  navigator.serviceWorker.register('/service-worker.js').then(function(reg){
    console.log("SW registration succeeded. Scope is "+reg.scope);
  }).catch(function(err){
    console.error("SW registration failed with error "+err);
  });
}

function send_message_to_sw(page, msg) {
  navigator.serviceWorker.controller.postMessage(page + " says '" + msg + "'");
}