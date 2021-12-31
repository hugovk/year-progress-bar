window.onload = function onLoad() {
  var line = new ProgressBar.Line('#progress', {
    color: '#FCB03C'
  });

  function progress() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 1);  // Start of this year
    var end = new Date(now.getFullYear() + 1, 0, 1);  // End of this year
    var done = (now-start) / (end-start);
    var percentStr = (100.0 * done).toString();
    if (done < 0.1) {
      percentStr = percentStr.slice(0, 9);
    } else {
      percentStr = percentStr.slice(0, 10);
    }
    document.getElementById("percent").innerHTML = percentStr + "%";
    return done;
  }

  line.animate(progress());  // Number from 0.0 to 1.0

  requestAnimationFrame(update);

  function update() {
    line.set(progress());
    requestAnimationFrame(update);
  }
};
