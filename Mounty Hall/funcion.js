
x1="abierta.png";
x2="cldoor.png";
x3="tesoro.png";
x4="copia.png";

var b1 = document.getElementById("sorteo");
b1.addEventListener("click", f);
function f()
{
  var n = 3; 
  var vector = []; 

  for (var i = 0; i < n; i++) {vector[i] = i+1;}

  function getRandomArbitrary(min, max){return Math.floor(Math.random() * (max - min) + min);}
  var x=(getRandomArbitrary(1,4));



var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var r3 = document.getElementById("r3");


var b5 = document.querySelector('#Puerta1');
let counter = 0;
b5.addEventListener('click', function() {
  counter++;
  if (counter === 1) {
    // Acción 1
    y=1;
    r1.src =x4;
  } else if (counter === 2) {
    // Acción 2
    w=1;d();
  }
});

var b6 = document.querySelector('#Puerta2');
b6.addEventListener('click', function() {
  counter++;
  if (counter === 1) {
    // Acción 1
    y=2;
  r2.src =x4;
  } else if (counter === 2) {
    // Acción 2
    w=2;d();
  }
});

var b7 = document.querySelector('#Puerta3');
b7.addEventListener('click', function() {
  counter++;
  if (counter === 1) {
    // Acción 1
    y=3;
    r3.src =x4;
  } else if (counter === 2) {
    // Acción 2
    w=3;d();
  }
});

  function c()
  {
    var vectorNuevo = [];
    var j = 0;
    var n1;
    for (var i = 0; i < vector.length; i++) {
      if (vector[i] !== x && vector[i] !== y) {
        vectorNuevo[j] = vector[i];
        j++;
      }
    }
    var n1 = vectorNuevo[Math.floor(Math.random() * vectorNuevo.length)];

  if(n1==1){r1.src =x1}
  else if(n1==2){r2.src =x1}
  else{r3.src =x1}

  de.innerHTML ="Recuerda la puerta 🚪🚪 que escogio es la numero: "+y+" te quedas con esa o cambia?";
 }
  var de = document.getElementById("de");
  //var resultado1 = document.getElementById("resultado1");
  //var resultado2 = document.getElementById("resultado2");
  //var resultado3 = document.getElementById("resultado3");
  var b2 = document.getElementById("sorteo1");
  b2.addEventListener("click", c);

function d()
{

r1.src=x1;
r2.src=x1;
r3.src=x1;
if(x==1){r1.src=x3}
else if(x==2){r2.src=x3}
else{r3.src=x3}

if(w==x){d1.innerHTML ="Felicitaciones Ganaste ✅✅💰💰🥇🥇🙏😇";
}
else{d1.innerHTML ="Que Lastima Perdiste 😢😭🫣🐂🙉😂😓🤣";}
}
var d1 = document.getElementById("d1");

}
