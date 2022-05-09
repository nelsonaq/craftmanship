"use strict";

const btnLeftImgSlider = document.querySelector(".btn-slide-left");
const btnRightImgSlider = document.querySelector(".btn-slide-right");
const serviceCardsFigure = document.querySelector(".service-cards figure");
const labels = document.querySelector(".labels");

let currentImgPosition = 0;
const imgSlideRight = function () {
  btnLeftImgSlider.style.display = "block";
  currentImgPosition += 100;
  if (currentImgPosition === 300) btnRightImgSlider.style.display = "none";
  serviceCardsFigure.style.transform = `translateX(-${currentImgPosition}%)`;
};
const imgSlideLeft = function () {
  btnRightImgSlider.style.display = "block";
  currentImgPosition -= 100;
  if (currentImgPosition === 0) btnLeftImgSlider.style.display = "none";
  serviceCardsFigure.style.transform = `translateX(-${currentImgPosition}%)`;
};
btnRightImgSlider.addEventListener("click", imgSlideRight);
btnLeftImgSlider.addEventListener("click", imgSlideLeft);
