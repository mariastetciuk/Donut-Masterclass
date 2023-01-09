new Swiper('.reviews__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
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
        }
    },
});


