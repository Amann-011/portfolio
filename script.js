"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    const contactForm = document.getElementById("contactForm");
    const backToTop = document.getElementById("backToTop");
    const currentYear = document.getElementById("currentYear");

    const profilePhoto = document.getElementById("profilePhoto");
    const photoPlaceholder = document.getElementById("photoPlaceholder");


    /* Year */
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* Photo fallback */
    if (profilePhoto && photoPlaceholder) {
        profilePhoto.addEventListener("error", function () {
            profilePhoto.style.display = "none";
            photoPlaceholder.style.display = "flex";
        });

        profilePhoto.addEventListener("load", function () {
            profilePhoto.style.display = "block";
            photoPlaceholder.style.display = "none";
        });
    }


    /* Mobile menu */
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("show");

            menuToggle.textContent = isOpen ? "✕" : "☰";
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("show");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Open menu");
            });
        });
    }


    /* Back to top */
    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    /* Contact form */
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {
                alert("Please fill all the fields.");
                return;
            }

            const body =
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message;

            const mailtoUrl =
                "mailto:amankr70612@gmail.com" +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);

            window.location.href = mailtoUrl;
        });
    }


    /* Escape key */
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && navMenu && menuToggle) {
            navMenu.classList.remove("show");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-label", "Open menu");
        }
    });
});
