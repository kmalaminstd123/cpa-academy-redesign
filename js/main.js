// nav bar hide and close on scroll

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("load", () => {
    // Show it on page load with animation
    navbar.classList.add("show");
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// banner swiper / slider functionality 

const bannerSwiper = new Swiper('.bannerSwiperSlider', {
    slidesPerView: 1,
    parallax: true,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000
    },
    loop: true
})