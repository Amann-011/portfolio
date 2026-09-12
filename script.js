"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");
    const contactForm = document.getElementById("contactForm");
    const backToTop = document.getElementById("backToTop");
    const currentYear = document.getElementById("currentYear");

    const profilePhoto = document.getElementById("profilePhoto");
    const photoPlaceholder = document.getElementById("photoPlaceholder");


    /* ================= YEAR ================= */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* ================= PHOTO FALLBACK ================= */

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


    /* ================= DARK MODE ================= */

    function applyTheme(theme) {
        const darkModeEnabled = theme === "dark";

        body.classList.toggle("dark", darkModeEnabled);

        if (themeToggle) {
            themeToggle.textContent = darkModeEnabled ? "☀️" : "🌙";

            themeToggle.setAttribute(
                "aria-label",
                darkModeEnabled
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

            themeToggle.setAttribute(
                "title",
                darkModeEnabled
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );
        }
    }

    let savedTheme = "light";

    try {
        savedTheme = localStorage.getItem("amanTheme") || "light";
    } catch (error) {
        savedTheme = "light";
    }

    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const isDark = body.classList.contains("dark");
            const newTheme = isDark ? "light" : "dark";

            applyTheme(newTheme);

            try {
                localStorage.setItem("amanTheme", newTheme);
            } catch (error) {
                // Theme will still work even if localStorage is unavailable.
            }
        });
    }


    /* ================= MOBILE MENU ================= */

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            const menuIsOpen = navMenu.classList.toggle("show");

            menuToggle.textContent = menuIsOpen ? "✕" : "☰";

            menuToggle.setAttribute(
                "aria-label",
                menuIsOpen ? "Close menu" : "Open menu"
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


    /* ================= ACTIVE NAVIGATION ================= */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 150;

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                navLinks.forEach(function (link) {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + sectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();


    /* ================= BACK TO TOP ================= */

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


    /* ================= CONTACT FORM ================= */

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

            const emailBody =
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message;

            const mailtoUrl =
                "mailto:amankr70612@gmail.com" +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(emailBody);

            window.location.href = mailtoUrl;
        });
    }


    /* ================= ESC KEY ================= */

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && navMenu && menuToggle) {
            navMenu.classList.remove("show");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-label", "Open menu");
        }
    });
});
