"use strict";

const btnLeftImgSlider = document.querySelector(".btn-slide-left");
const btnRightImgSlider = document.querySelector(".btn-slide-right");
const serviceCards = document.querySelector(".service-cards");

let currentPosition = 0;
const imgSlideRight = function () {
  btnLeftImgSlider.style.display = "block";
  currentPosition += 100;
  if (currentPosition === 300) btnRightImgSlider.style.display = "none";
  console.log(currentPosition);
  serviceCards.style.transform = `translateX(-${currentPosition}%)`;
};
const imgSlideLeft = function () {
  btnRightImgSlider.style.display = "block";
  currentPosition -= 100;
  if (currentPosition === 0) btnLeftImgSlider.style.display = "none";
  console.log(currentPosition);
  serviceCards.style.transform = `translateX(-${currentPosition}%)`;
};
btnRightImgSlider.addEventListener("click", imgSlideRight);
btnLeftImgSlider.addEventListener("click", imgSlideLeft);
