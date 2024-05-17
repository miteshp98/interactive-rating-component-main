"use strict";

const submitBtn = document.querySelector(".submit-btn");
const rearCard = document.querySelector(".rear-card");
const frontCard = document.querySelector(".wrapper");
const ratingBtn = document.querySelectorAll(".rating-btn");
const msg = document.querySelector(".final-rating");
const rating = document.querySelector(".rating");

let selectBtn = 0;

ratingBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const ratingValue = parseInt(button.getAttribute("data-value"));

    ratingBtn.forEach((btn) => {
      btn.classList.remove("active");
    });

    if (selectBtn !== ratingValue) {
      button.classList.add("active");
      selectBtn = ratingValue;
    } else {
      selectBtn = null;
    }
  });
});

submitBtn.addEventListener("click", function () {
  msg.textContent = `You selected ${selectBtn} out of 5`;
  frontCard.classList.add("front-card");
  rearCard.classList.remove("rear-card");
});
