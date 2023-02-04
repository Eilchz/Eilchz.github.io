
const buttonA = document.querySelector('#Puerta1');

buttonA.onclick = () => {
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var number;
number = (getRandomInt(100));
if(number >= 30){
    alert("Cabra " + number);
}
if(number <= 30){
    alert("Auto "+ number);
}
}

const buttonB = document.querySelector('#Puerta2');
buttonB.onclick = () => {
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var number;
number = (getRandomInt(100));
if(number >= 30){
    alert("Cabra " + number);
}
if(number <= 30){
    alert("Auto "+ number);
}
}

const buttonC = document.querySelector('#Puerta3');
buttonC.onclick = () => {
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var number;
number = (getRandomInt(100));
if(number >= 30){
    alert("Cabra " + number);
}
if(number <= 30){
    alert("Auto "+ number);
}
}

