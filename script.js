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

const hiddenElements = document.querySelectorAll('.hero-section .right');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.hero-section .left');
hiddenElements2.forEach((el) => observer.observe(el));  

const hiddenElements3 = document.querySelectorAll('.hidden');
hiddenElements3.forEach((el) => observer.observe(el));  

const hiddenElements4 = document.querySelectorAll('.hidden-1');
hiddenElements4.forEach((el) => observer.observe(el));  

/* Projects */
const wrapper_project = document.querySelector(".wrapper_project");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper_project i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});