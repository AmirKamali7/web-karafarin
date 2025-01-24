var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });
  var swiper = new Swiper(".articleSwiper", {
    slidesPerView: 1, // mobile
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2, // tablet
            
        },
        992: {
            slidesPerView: 3, // desktop
        },
        1200: {
            slidesPerView: 3, // large
        },
    },
});