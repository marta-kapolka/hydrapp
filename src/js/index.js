import "../scss/main.scss";

import { registerSW } from "./pwa.js";
registerSW();

const counter = document.querySelector(".app__counter--js");
const plusButton = document.querySelector(".plus-button--js");
const minusButton = document.querySelector(".minus-button--js");
const glasses = document.querySelectorAll(".water--js");
console.log(glasses);

const now = new Date();
const todayKey = JSON.stringify(now).split("T")[0] + '"';

function addGlass() {
  let currentCounter = +localStorage.getItem(`${todayKey}`);
  currentCounter += 1;
  localStorage.setItem(`${todayKey}`, currentCounter);
  counter.innerHTML = localStorage.getItem(`${todayKey}`);
  if (currentCounter <= 8) {
    glasses[8 - currentCounter].classList.add("glass--visible");
  }
}

function deleteGlass() {
  let currentCounter = +localStorage.getItem(`${todayKey}`);
  if (currentCounter > 0) {
    currentCounter -= 1;
  }
  localStorage.setItem(`${todayKey}`, currentCounter);
  counter.innerHTML = localStorage.getItem(`${todayKey}`);
  if (currentCounter <= 7) {
    glasses[7 - currentCounter].classList.remove("glass--visible");
  }
}

if (localStorage.getItem(`${todayKey}`) === null) {
  localStorage.setItem(`${todayKey}`, 0);
}

counter.innerHTML = localStorage.getItem(`${todayKey}`);
for (let i = 0; i < counter.innerHTML; i++) {
  if (i > 7) break;
  glasses[7 - i].classList.add("glass--visible");
  
}

plusButton.addEventListener("click", function () {
  addGlass();
});

minusButton.addEventListener("click", function () {
  deleteGlass();
});
