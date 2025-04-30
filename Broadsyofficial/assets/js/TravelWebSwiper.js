document.addEventListener("DOMContentLoaded", function () {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    const slides = document.querySelectorAll(".swiper-slide");
    const bullets = document.querySelectorAll(".swiper-pagination-bullet");
    const nextButton = document.querySelector(".swiper-button-next");
    const prevButton = document.querySelector(".swiper-button-prev");

    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 50; // 50px margin-right as you have

    function updateSwiper() {
        // Move the wrapper
        swiperWrapper.style.transform = `translate3d(-${currentIndex * slideWidth}px, 0, 0)`;

        // Update bullets active state
        bullets.forEach((bullet, index) => {
            if (index === currentIndex) {
                bullet.classList.add("swiper-pagination-bullet-active");
            } else {
                bullet.classList.remove("swiper-pagination-bullet-active");
            }
        });

        // Update prev/next button disabled states
        if (currentIndex === 0) {
            prevButton.classList.add("swiper-button-disabled");
        } else {
            prevButton.classList.remove("swiper-button-disabled");
        }

        if (currentIndex === slides.length - 1) {
            nextButton.classList.add("swiper-button-disabled");
        } else {
            nextButton.classList.remove("swiper-button-disabled");
        }
    }

    // Pagination bullet click
    bullets.forEach((bullet, index) => {
        bullet.addEventListener("click", function () {
            currentIndex = index;
            updateSwiper();
        });
    });

    // Next button click
    nextButton.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSwiper();
        }
    });

    // Previous button click
    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSwiper();
        }
    });

    // Initialize Swiper
    updateSwiper();
});
