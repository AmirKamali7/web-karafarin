
// Persianization-numbers

document.addEventListener('DOMContentLoaded', convertAllNumbersToPersian);
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


// section-Status-board
document.addEventListener('DOMContentLoaded', function() {
    var a = 0;
    window.addEventListener('scroll', function() {
        var oTop = document.querySelector('.text-status').offsetTop - window.innerHeight;
        if (a == 0 && window.scrollY > oTop) {
            document.querySelectorAll('.count').forEach(function(element) {
                var countTo = parseInt(element.getAttribute('data-number'), 10);
                var countNum = 0;
                var duration = 2000;
                var startTime = null;

                function animateCount(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = timestamp - startTime;
                    var currentCount = Math.min(Math.ceil((progress / duration) * countTo), countTo);
                    
                    element.textContent = currentCount.toLocaleString('fa-IR', { useGrouping: true });

                    if (progress < duration) {
                        requestAnimationFrame(animateCount);
                    } else {
                        element.textContent = countTo.toLocaleString('fa-IR', { useGrouping: true });
                    }
                }

                requestAnimationFrame(animateCount);
            });
            a = 1;
        }
    });
});

// slaiders

// header
var swiper = new Swiper(".header-Swiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

// Comment
var swiper = new Swiper(".Comment-Swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

//   article
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
