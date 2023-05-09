const btns = document.querySelectorAll(".navbtn");
const slides = document.querySelectorAll(".imgslide");
const contens = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contens.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contens[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// STICKY NAVBAR
var nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
// HAM MENU
const navbarNav = document.querySelector(".navbarmenu");
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// ALERT
function myFunction() {
  alert("Pesan Telah Terkirim");
}
