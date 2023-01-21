new Swiper('.reviews__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  grabCursor: true,
  slideToClickedSlide: true,
  keyboard: {
    enadled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // mousewheel: {
  //     sensitivity: 1,
  // },
  centeredSlides: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case China:
      price = 100;
      message = `Shipping to &{case} will cost &{price} credits`;

    case Chile:
      price = 250;
      message = `Shipping to &{case} will cost &{price} credits`;

    case Australia:
      price = 170;
      message = `Shipping to &{case} will cost &{price} credits`;

    case Jamaica:
      price = 120;
      message = `Shipping to &{case} will cost &{price} credits`;

      defaul: message = 'Sorry, there is no delivery to your country';
  }
  // Change code above this line
  return message;
}
