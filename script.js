/* Scroll */
const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav")
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".mobile-menu .close-icon")
const mobileMenu = document.querySelector(".mobile-menu")

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
  }
  else {
    nav.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
  }
});

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

/* Fade Effects */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } 
      else {
        entry.target.classList.remove('show');
      }
  });
});

const hiddenElements2 = document.querySelectorAll('.hero-section .left');
hiddenElements2.forEach((el) => observer.observe(el));  

const hiddenElements3 = document.querySelectorAll('.hidden');
hiddenElements3.forEach((el) => observer.observe(el));  

const hiddenElements4 = document.querySelectorAll('.hidden-1');
hiddenElements4.forEach((el) => observer.observe(el));  

/* Projects*/
const wrapper_project = document.querySelector(".wrapper_project");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper_project i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; 
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);