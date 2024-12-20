const swiper = new Swiper('#sliders', {
  loop: true,
  autoplay: {
      delay: 7000,
      disableOnInteraction: false,
  },
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
  850: {
    slidesPerView: 3,
    spaceBetween: 2
  },
  1100: {
    slidesPerView: 3
  },
  1260: {
    slidesPerView: 4
  }
}
});

const swiper_noticias = new Swiper('#slider_noticias', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.noticias_next',
    prevEl: '.noticias_prev',
  },
  spaceBetween: 20,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

const swiper_gal_nat = new Swiper('#gal_natacion', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000
});

const swiper_gal_ballet = new Swiper('#gal_ballet', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000
});

const swiper_gal_teatro = new Swiper('#gal_teatro', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000
});