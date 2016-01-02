window.onload = function onLoad() {
  var line = new ProgressBar.Line('#progress', {
    color: '#FCB03C'
  });

  function progress() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);  // Start of this year
    var end = new Date(now.getFullYear() + 1, 0, 0);  // End of this year
    var done = (now-start) / (end-start);
    return done;
  }

  line.animate(progress());  // Number from 0.0 to 1.0

  setInterval(update, 1000);

  function update() {
    line.set(progress());
  }

};
