function convertToPersianNumbers(str) {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str.replace(/\d/g, function (match) {
        return persianNumbers[parseInt(match)];
    });
}

function convertAllNumbersToPersian() {
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        if (element.children.length === 0) {
            element.innerHTML = convertToPersianNumbers(element.innerHTML);
        }
    });
}

document.addEventListener('DOMContentLoaded', convertAllNumbersToPersian);

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