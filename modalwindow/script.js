"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].assEventListener("click", function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);
