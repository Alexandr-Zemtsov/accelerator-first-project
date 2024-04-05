// https://swiperjs.com/get-started#installation
import Swiper from 'swiper/bundle';

import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import { renderSpan } from './price.js';
renderSpan();

new Swiper('.swiper-container', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  touchRatio: 1,
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  slidesPerView: 2,
  initialSlide: 0,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      initialSlide: 0,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      initialSlide: 0,
    }
  },
});

const accordeons = document.querySelectorAll('.accordeon-faq__item');
// const btnAccordeon = document.querySelectorAll('.accordeon-faq__button');

accordeons.forEach(element => {
  const btnAccordeon = element.querySelector('.accordeon-faq__button');

  btnAccordeon.addEventListener('click', () => {
    element.classList.toggle('accordeon-faq__item--active');
    btnAccordeon.classList.toggle('accordeon-faq__button--open');
  });
});
