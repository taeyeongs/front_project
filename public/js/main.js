// import { includeHTML } from "./include.js";
// includeHTML();

// 1. 배너 슬라이더
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 800,
});

// 4컷 슬라이드

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 3컷 이미지

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

