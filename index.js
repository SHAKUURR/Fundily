"use strict";
const header = document.querySelector(".nav-section");
const elements = document.querySelector(".nav-list");
const menu = document.querySelectorAll(".nav-link");
const icon = document.querySelector("#menu-icon i");

window.onscroll = () => {
	if (window.scrollY > 1) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
};

menu.forEach((element) => {
	element.addEventListener("click", () => {
		elements.classList.toggle("active");
		icon.classList.toggle("active");
	});
});

//Animation on scroll........................
ScrollReveal({ distance: "60px", duration: 2000, delay: 400 });
ScrollReveal().reveal(".header-image", {
	delay: 100,
	distance: "40px",
	origin: "right",
});

ScrollReveal().reveal(".about-details, .work-image, .payment-image", {
	delay: 10,
	origin: "right",
});
ScrollReveal().reveal(".about-image, .work-details", {
	delay: 10,
	origin: "left",
});

ScrollReveal().reveal(".payment-details, .feature-box", {
	delay: 100,
	origin: "bottom",
	interval: 500,
});
