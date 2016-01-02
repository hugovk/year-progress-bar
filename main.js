window.onload = function onLoad() {
  var line = new ProgressBar.Line('#progress', {
    color: '#FCB03C'
  });

  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var end = new Date(now.getFullYear() + 1, 0, 0);
  var done = (now-start) / (end-start);

  line.animate(done);  // Number from 0.0 to 1.0
};
