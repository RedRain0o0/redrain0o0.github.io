function getSplash() {
  console.log("Picking random splash");
  const url = "https://raw.githubusercontent.com/RedRain0o0/redrain0o0.github.io/refs/heads/main/assets/splashes.txt"
  fetch(url)
     .then( r => r.text() )
     //.then( t => //process your text! )

}