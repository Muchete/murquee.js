var cW = $(".mq-container").width();
var t = $(".mq-title").outerWidth(true);
var tW;
var step = 0.05;
var pos;
var percentOfParent;

//init here
// create duplicates
function init() {
  var tElem;
  tW = $(".mq-title-wrap").outerWidth();
  do {
    tElem = $(".mq-title")
      .first()
      .clone();
    tElem.appendTo($(".mq-title-wrap"));
    tW = $(".mq-title-wrap").outerWidth();
  } while (cW + t * 3 >= tW);
  tW = $(".mq-title-wrap").outerWidth();
}
//--------

function setToOffset() {
  percentOfParent = t / cW * -100;
  pos = percentOfParent;
  resetLeft();
}

function resetLeft() {
  setLeft(percentOfParent);
}

function setLeft(l) {
  $(".mq-title-wrap").css("left", l + "%");
}

function animate() {
  var id = setInterval(frame, 1);
}

function frame() {
  if (step > 0 && pos > percentOfParent) {
    pos = pos + percentOfParent;
  } else if (step < 0 && pos < percentOfParent * 2) {
    pos = pos - percentOfParent;
  } else if (step != 0) {
    pos += step;
  }
  setLeft(pos);
}

function update(s) {
  step = s;
}

init();
setToOffset();
animate();
update(0);


//---------------------------------------------------------------
//gyro

function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

if ('DeviceOrientationEvent' in window) {
  window.addEventListener('deviceorientation', deviceOrientationHandler, false);
} else {
  document.getElementById('gyro').innerText = 'Device Orientation API not supported.';
}

function deviceOrientationHandler(eventData) {
  var tiltLR = eventData.gamma;
  // var tiltFB = eventData.beta;
  // var dir = eventData.alpha;

  document.getElementById("gyro").innerHTML = Math.round(tiltLR);
  var val = map_range(tiltLR, -90, 90, -1, 1);
  update(val);
  // document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
  // document.getElementById("doDirection").innerHTML = Math.round(dir);

  // var logo = document.getElementById("imgLogo");
  // logo.style.webkitTransform = "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)";
  // logo.style.MozTransform = "rotate(" + tiltLR + "deg)";
  // logo.style.transform = "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)";
}
