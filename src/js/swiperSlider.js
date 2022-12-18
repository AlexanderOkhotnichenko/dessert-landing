import Swiper from 'swiper';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';

SwiperCore.use([Navigation, Autoplay]);

export function swiperSlider() {
  let swiper = new Swiper(".comment-content__slider", {
    spaceBetween: 1,
    slidesPerView: 2,
    centeredSlides: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 4,
    navigation: {
      nextEl: ".swiper-custom-button-next",
      prevEl: ".swiper-custom-button-prev"
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      640: {
        allowTouchMove: true,
      },
    }
  });

  document.querySelector('.comment-content__slider').addEventListener("mouseover", (event) => {
    if (event.target) {
      swiper.autoplay.stop();
    }
  });

  document.querySelector('.comment-content__slider').addEventListener("mouseout", (event) => {
    if (event.target) {
      swiper.autoplay.start();
    }
  });
}
