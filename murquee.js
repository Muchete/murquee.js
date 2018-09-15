var cW = $(".mq-container").width();
var t = $(".mq-title").outerWidth(true);
var tW;
var step = 0.05;
var pos;
var percentOfParent;
var dir = -1;

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
  } while (cW + t * 4 >= tW);
  tW = $(".mq-title-wrap").outerWidth();
}

function setT(){
  var d = $(".mq-title").eq(1).position().left;
  console.log(d);

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
//$(".mq-title-wrap").css('animation','mq-scroll-'+ direction +' '+speed+'s infinite linear');

function animate() {
  var id = setInterval(frame, 1);
}

function frame() {
  if (dir > 0) {
    if (pos < percentOfParent) {
      pos+=step;
    } else {
      pos = pos+percentOfParent;
    }
    setLeft(pos);
  } else {
    console.log(pos);
    if (pos > percentOfParent) {
      pos-=step;
    } else {
      pos = pos-percentOfParent;
    }
    setLeft(pos);
  }
}


init();
setT();
setToOffset();
animate();
