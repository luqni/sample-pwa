function SW(args) {
  this.button = $(args.button);
  this.toast = $(args.toast);

  this.registerSW();
};

SW.prototype.registerSW = function() {
  /*
   *  Register SW dimulai disini
   *  Copy script yang dicantumkan di artikel
   */
  if (!navigator.serviceWorker) return;

  navigator.serviceWorker.register('/sw.js')
    .then(function(reg) {
      console.info('SW is registered.', reg);
    })
    .catch(function() {
      console.error('Failed to register SW.');
    });
}

SW.prototype.trackInstall = function(worker) {
  // Paste dari artikel
}

SW.prototype.updateReady = function(worker) {
  // Paste dari artikel
}
