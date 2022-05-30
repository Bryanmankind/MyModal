"use strict";

const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal--1");
const modal2 = document.querySelector(".modal--2");
const btn_openmodal = document.querySelector(".modal_0");
const btn_openmodal1 = document.querySelector(".modal_1");
const btn_openmodal2 = document.querySelector(".modal_2");
const btn_closemodal = document.querySelector(".close_hidden");
const btn_closemodal1 = document.querySelector(".close_hidden1");
const btn_closemodal2 = document.querySelector(".close_hidden2");
const overlay = document.querySelector(".overlay");

const OpenModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const OpenModal1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const OpenModal2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const CloseModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const CloseModal1 = function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};

const CloseModal2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

btn_openmodal.addEventListener("click", OpenModal);
btn_closemodal.addEventListener("click", CloseModal);
overlay.addEventListener("click", CloseModal);

btn_openmodal1.addEventListener("click", OpenModal1);
btn_closemodal1.addEventListener("click", CloseModal1);
overlay.addEventListener("click", CloseModal1);

btn_openmodal2.addEventListener("click", OpenModal2);
btn_closemodal2.addEventListener("click", CloseModal2);
overlay.addEventListener("click", CloseModal2);

document.addEventListener("keydown", function (e) {
  //   console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    CloseModal();
  }
});
