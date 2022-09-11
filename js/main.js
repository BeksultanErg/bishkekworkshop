'use strict';

const burgerButton = document.querySelector('.burger__btn');
const navMboile = document.querySelector('.nav__mobile');

burgerButton.addEventListener('click', () => {
   burgerButton.classList.toggle('change');
   navMboile.classList.toggle('active');
});

if (window.innerWidth <= 769) {
   const links = document.querySelectorAll('.nav__link');
   links.forEach((item) => {
      item.addEventListener('click', () => {
         burgerButton.classList.toggle('change');
         navMboile.classList.toggle('active');
      });
   });
}

$('.single-item').slick({
   autoplay: true,
   prevArrow: '<img class="slick-prev" class="user-icon" src="./img/arrow-left.svg" alt="img">',
   nextArrow: '<img class="slick-next" class="user-icon" src="./img/arrow-right.svg" alt="img">',
});