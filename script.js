async function getSplash() {
  console.log("Picking random splash");
  const url = "https://raw.githubusercontent.com/RedRain0o0/redrain0o0.github.io/refs/heads/main/assets/splashes.txt";
  let x = await fetch(url);
  let y = await x.text();
  //console.log(y);
  var array = y.split('\r\n');
  console.log("There are %s splashes", array.length);
  splash = array[Math.floor(Math.random() * (array.length - 1 + 1) + 0)];
  console.log(splash);
  document.getElementById('splashText').innerHTML = splash;
}