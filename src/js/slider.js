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
    mousewheel: {
        sensitivity: 1,
    },
    slidesPerView: 3,
    // initialSlide: 1,
    // spaceBetween: ,
    centeredSlides: true,
    loop: true,
});





// slick.js$(document).ready(function() {
//     $('.reviews__slider').slick({
//         dots: false,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         speed: 300,
//         centerMode: true,
//         centerPadding: '0px',
//         appendArrows: $('.reviews__pagination'),
//         variableWidth: true,
//         responsive: [
//        {
//         breakpoint: 767.98,
//         settings: {
//         slidesToShow: 1,
//         centerMode: false,
//         variableWidth: false,
//       }
//     }
//   ]
//     })
     

// });

