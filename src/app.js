/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const getRandom = maxCant => {
  return Math.floor(Math.random() * maxCant);
};

let listan = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let listap = ["♦", "♥", "♠", "♣"];

function mostrarEvento() {
  let randomn = getRandom(listan.length);
  let numero = document.querySelector(".numero");
  numero.innerHTML = listan[randomn];

  let randomp = getRandom(listap.length);
  let palo = document.querySelector(".palo");
  let palorotado = document.querySelector(".palorotado");
  palo.innerHTML = listap[randomp];
  palorotado.innerHTML = listap[randomp];
  if (randomp < 2) {
    palo.style.color = "red";
    palorotado.style.color = "red";
  } else {
    palo.style.color = "black";
    palorotado.style.color = "black";
  }
}

window.onload = function() {
  mostrarEvento();
};

let boton = document.querySelector("#hello");
boton.onclick = function() {
  mostrarEvento();
};
