/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
let Header = document.getElementById("header");

if (Header) {
  const headerScrolled = () => {
    if (window.scrollY > 600) {
      Header.classList.add("header-scrolled");
    } else {
      Header.classList.remove("header-scrolled");
    }
  };
  window.addEventListener("load", headerScrolled);
  document.addEventListener("scroll", headerScrolled);
}

/**
 * Back to top button
 */
let backtotop = document.getElementById("back-to-top");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 600) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };
  window.addEventListener("load", toggleBacktotop);
  document.addEventListener("scroll", toggleBacktotop);
}

/**
 * Testimonials slider
 */
new Swiper(".swiper-container", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
