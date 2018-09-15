var cW = $(".mq-container").width();
var t = $(".mq-title").outerWidth(true);
var tW;
var step = -0.05;
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
      pos = pos+percentOfParent;
    } else if (step < 0 && pos < percentOfParent*2){
      pos = pos-percentOfParent;
    } else if (step != 0) {
      pos+=step;
    }
    setLeft(pos);
}

init();
setToOffset();
animate();
