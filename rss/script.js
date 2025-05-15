function scrollKnob() {
  console.log("Scrolled");
}

var myInput = document.getElementById('my-input');
var myInputCntnr = document.getElementById('my-input-cntnr');
myInput.value = 0;
myInputCntnr.onmousewheel = function(e) {
  console.log(e.deltaY);
  if(e.deltaY > 1) {
    myInput.value++;
  } else if (e.deltaY < -1) {
    myInput.value--;
  }
}