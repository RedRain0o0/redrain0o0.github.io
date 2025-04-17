async function getSplash() {
  console.log("Picking random splash");
  const url = "https://raw.githubusercontent.com/RedRain0o0/redrain0o0.github.io/refs/heads/main/assets/splashes.txt";
  let x = await fetch(url);
  let y = await x.text();
  var array = y.split('\r\n');
  console.log("There are %s splashes", array.length);
  random = Math.floor(Math.random() * (array.length - 1 + 1));
  splash = array[random];
  console.log(random)
  console.log(splash);
  document.getElementById('splashTextText').innerHTML = splash;
  document.getElementById('splashTextShadow').innerHTML = splash;
  if (random == 25 || splash == '') {
    getSplash();
  }
}

function myMove() {
  let id = null;
  const elem = document.getElementById("splashText");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
      myMove();
    } else {
      ms = pos*10/1000;
      var f = 1.8 - Math.abs(Math.sin(ms * 6.2831855) * 0.1);
      f = f * 100.0 / ((document.getElementById("splashTextText").innerHTML.length * 5) + 32);
      //console.log(document.getElementById("splashTextText").innerHTML.length);
      console.log(f);
      elem.style.transform = "translate(-50%, -50%) scale("+f+") rotate(-20deg)";
      pos++;
    }
  }
}

/*  function test() {
  random = Math.random().toFixed(4);
  console.log(random);
  var f = 1.8 - Math.abs(Math.sin(random * 6.2831855) * 0.1);
  f = f * 100.0 / 64;
  console.log(f);
}  */

/*  float f = 1.8F - Mth.abs(Mth.sin((float)(Util.getMillis() % 1000L) / 1000.0F * 6.2831855F) * 0.1F);
    f = f * 100.0F / (float)(font.width(this.splash) + 32);
    
    Anim lasts 1 second in 1000 ms intervals
    'f' is the result of 1.8 - the positive form of the sin() of the current ms of 1 second * 6.2831855) * 0.1
    'f' is the result of 'f' * 100 divided by the font width + 32  */