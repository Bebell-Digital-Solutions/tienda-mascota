// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", (e) => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", (e) => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
  }

  // Initialize animations if ScrollReveal is available
  if (typeof ScrollReveal !== 'undefined') {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // Header section animations
    ScrollReveal().reveal(".header__content h4", {
      ...scrollRevealOption,
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".header__content h2", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 1500,
    });
    ScrollReveal().reveal(".header__btn", {
      ...scrollRevealOption,
      delay: 2000,
    });

    // Intro section animations
    ScrollReveal().reveal(".intro__card", {
      ...scrollRevealOption,
      interval: 500,
    });

    // About section animations
    ScrollReveal().reveal(
      ".about__row:nth-child(3) .about__image img, .about__row:nth-child(5) .about__image img",
      {
        ...scrollRevealOption,
        origin: "left",
      }
    );
    ScrollReveal().reveal(".about__row:nth-child(4) .about__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".about__content span", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".about__content h4", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".about__content p", {
      ...scrollRevealOption,
      delay: 1500,
    });

    // Product section animations
    ScrollReveal().reveal(".product__card", {
      ...scrollRevealOption,
      interval: 500,
    });

    // Service section animations
    ScrollReveal().reveal(".service__card", {
      duration: 1000,
      interval: 500,
    });

    // Instagram section animations
    ScrollReveal().reveal(".instagram__grid img", {
      duration: 1000,
      interval: 500,
    });
  }

  // Initialize Swiper if available
  const swiperEl = document.querySelector('.swiper');
  if (swiperEl && typeof Swiper !== 'undefined') {
    new Swiper(".swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
