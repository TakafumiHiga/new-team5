'use strict';

  var slider1 = new Swiper ('.js-mv-swiper', {
    loop: true,
    effect: 'fade',
    speed: 2000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
});

  var slider2 = new Swiper ('.js-works-swiper', {
    loop: true,
    effect: 'horizontal',
    speed: 2000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
});
