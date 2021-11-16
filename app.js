"use strict";

// JQ slick
const slider = $("#offers-slick");

slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true
});

// JS const (scroll/reload page and scroll Nav)
const header = document.getElementById("header");
const navLinks = document.querySelectorAll("[data-scroll]");

// scroll and reload page
window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll());

function checkScroll() {
    let scrollPos = window.scrollY;
    if (scrollPos > 0) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
}

// scroll Nav
navLinks.forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        let link = this.getAttribute('data-scroll').substring(1);

        const scrollTarget = document.getElementById(link);
        const topOffset = header.offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

//JS const (click Burger)
const dropdownMenu = document.getElementById("dropdown-menu");
const navMenu = document.getElementById("nav-menu");

// click Burger
dropdownMenu.addEventListener("click", onClickMenu);

function onClickMenu() {
    dropdownMenu.classList.toggle("active-dropdown");
    navMenu.classList.toggle("active-nav");
}

//JS const and Dropdown action
const tabsBtn = document.querySelectorAll(".dropdown-link");
const tabsItems = document.querySelectorAll(".slider-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentTab.classList.contains("active-slider")) {
            tabsBtn.forEach(function (item) {
                item.classList.remove("active-link");
            });

            tabsItems.forEach(function (item) {
                item.classList.remove("active-slider");
            });

            currentBtn.classList.add("active-link");
            currentTab.classList.add("active-slider");

            if (ellipseSale.classList.contains("active-slider")) {
                dropdownElement.classList.add("dropdown-active");
                repeatBtnEllipse.click();
            } else {
                dropdownElement.classList.remove("dropdown-active");
            }
        }
    });
}

//JS const and Dropdown-sale action
const dropdownElement = document.getElementById("dropdown-sale");
const ellipseSale = document.getElementById("tab_2");
const repeatBtnEllipse = document.querySelector(".dropdown-link:nth-child(2)");

dropdownElement.addEventListener("click", btnClick);

function btnClick() {
    tabsItems.forEach(function (item) {
        item.classList.remove("active-slider");
    });

    repeatBtnEllipse.click();
    dropdownElement.classList.add("dropdown-active");
    ellipseSale.classList.add("active-slider");
}

//JS const and click btn
const btnSend = document.getElementById("btn-send");

btnSend.addEventListener("click", function () {
    alert("Спасибо, ваша заявка принята! \nМы свяжемся с вами в ближайшее время.");
});
