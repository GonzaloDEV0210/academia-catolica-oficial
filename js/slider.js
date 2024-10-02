const swiper = new Swiper('#sliders', {
  loop: true,
  autoplay: {
      delay: 7000,
      disableOnInteraction: false,
  },
  effect: 'fade',
  speed: 1000
});

const swiper_docentes = new Swiper('#slider_docentes', {
loop: true,
autoplay: {
  delay: 5000,
},
speed: 1000,
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
breakpoints: {
  650: {
    slidesPerView: 2,
  },
  900: {
    slidesPerView: 3,
    spaceBetween: 2
  },
  1100: {
    slidesPerView: 3
  }
}
});