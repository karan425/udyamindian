
var navToggle = document.querySelector(".nav-toggle");
var serviceNavigation = document.getElementById("service-navigation");

function closeServiceNavigation(returnFocus) {
    navToggle.setAttribute("aria-expanded", "false");
    serviceNavigation.classList.remove("is-open");
    if (returnFocus) navToggle.focus();
}

navToggle.addEventListener("click", function () {
    var isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    serviceNavigation.classList.toggle("is-open", !isExpanded);
});

serviceNavigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 760px)").matches) {
            closeServiceNavigation(false);
        }
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        closeServiceNavigation(true);
    }
});

document.addEventListener("click", function (event) {
    if (window.matchMedia("(max-width: 760px)").matches &&
        navToggle.getAttribute("aria-expanded") === "true" &&
        !event.target.closest(".header")) {
        closeServiceNavigation(false);
    }
});

window.addEventListener("resize", function () {
    if (!window.matchMedia("(max-width: 760px)").matches) {
        closeServiceNavigation(false);
    }
});

document.querySelectorAll(".service-cta").forEach(function (link) {
    link.addEventListener("click", function () {
        document.getElementById("service").value = this.dataset.service;
    });
});

document.getElementById("enquiry-form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("form-status").textContent = "Thanks! This visual prototype does not send enquiries yet.";
    this.reset();
});