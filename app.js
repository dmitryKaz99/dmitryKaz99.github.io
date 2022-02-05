"use strict";

// JQ slider
const slider = $("#offers-slick");
slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: true,
});

// const
const header = document.getElementById("header");

// wait function and use
window.addEventListener("load", checkScroll);
window.addEventListener("scroll", checkScroll);

function checkScroll() {
  const scrollPos = window.scrollY;
  scrollPos > 0
    ? header.classList.add("header-active")
    : header.classList.remove("header-active");
}

// scroll navigation
(function () {
  const navLinks = document.querySelectorAll("[data-scroll]");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const linkEl = this.getAttribute("data-scroll").substring(1),
        scrollTarget = document.getElementById(linkEl),
        topOffset = header.offsetHeight,
        elementPosition = scrollTarget.getBoundingClientRect().top,
        offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
})();

// handler dropdownBtn
(function () {
  const dropdownBtn = document.getElementById("dropdown-menu"),
    dropMenu = document.getElementById("nav-menu");

  dropdownBtn.addEventListener("click", function () {
    this.classList.toggle("active-dropdown");
    dropMenu.classList.toggle("active-nav");
  });
})();

// use function 2 times
function hideSlidersActive() {
  const sliderItems = document.querySelectorAll(".slider-item");
  sliderItems.forEach(function (elem) {
    elem.classList.remove("active-slider");
  });
}

// actions on dropdownMenu(1) and saleElelement(2)
(function () {
  const dropLinks = document.querySelectorAll(".dropdown-link"),
    saleElement = document.getElementById("dropdown-sale"),
    ellipseSale = document.getElementById("tab_2");

  // 1
  dropLinks.forEach(onTabClick);
  function onTabClick(link) {
    link.addEventListener("click", function () {
      const currentBtn = link,
        sliderId = currentBtn.getAttribute("data-tab"),
        currentSlider = document.querySelector(sliderId);

      if (!currentSlider.classList.contains("active-slider")) {
        dropLinks.forEach(function (elem) {
          elem.classList.remove("active-link");
        });
        hideSlidersActive();

        currentBtn.classList.add("active-link");
        currentSlider.classList.add("active-slider");

        // control for special btn
        ellipseSale.classList.contains("active-slider")
          ? saleElement.classList.add("dropdown-active")
          : saleElement.classList.remove("dropdown-active");
      }
    });
  }

  // 2
  saleElement.addEventListener("click", () => {
    hideSlidersActive();

    // if click was on special btn
    dropLinks[1].click();

    saleElement.classList.add("dropdown-active");
    ellipseSale.classList.add("active-slider");
  });
})();

// SIMPLE: vailidate and send form, not PHP
(function () {
  const formEl = document.querySelector("form"),
    formInputs = formEl.querySelectorAll(".input"),
    sendForm = document.getElementById("btn-send");

  function validateForm() {
    let flag;

    formInputs.forEach((input) => {
      if (!input.value) {
        input.style.borderBottom = "3px solid red";
        flag = false;
      } else {
        input.style.borderBottom = "3px solid #7c1854";
        flag = true;
      }
    });

    return flag;
  }

  sendForm.addEventListener("click", function (e) {
    e.preventDefault();

    if (validateForm()) {
      alert(
        "Спасибо, ваша заявка принята! \nМы свяжемся с вами в ближайшее время."
      );
      formEl.reset();
    } else {
      alert("Пожалуйста, заполните все поля!");
    }
  });
})();
