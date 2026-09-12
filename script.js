```javascript
/* =====================================================
   AMAN KUMAR PORTFOLIO
   JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ================= ELEMENTS ================= */

    const body = document.body;

    const themeToggle =
        document.getElementById("themeToggle");

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const contactForm =
        document.getElementById("contactForm");

    const backToTop =
        document.getElementById("backToTop");

    const currentYear =
        document.getElementById("currentYear");


    /* ================= YEAR ================= */

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =================================================
       DARK / LIGHT MODE
    ================================================= */

    const savedTheme =
        localStorage.getItem("amanTheme");

    if (savedTheme === "dark") {

        body.classList.add("dark");

        themeToggle.textContent = "☀️";

    } else {

        body.classList.remove("dark");

        themeToggle.textContent = "🌙";
    }


    themeToggle.addEventListener("click", function () {

        body.classList.toggle("dark");

        const isDark =
            body.classList.contains("dark");

        if (isDark) {

            localStorage.setItem(
                "amanTheme",
                "dark"
            );

            themeToggle.textContent = "☀️";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        } else {

            localStorage.setItem(
                "amanTheme",
                "light"
            );

            themeToggle.textContent = "🌙";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );
        }

    });


    /* =================================================
       MOBILE MENU
    ================================================= */

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        const isOpen =
            navMenu.classList.contains("show");

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });


    /* Close mobile menu after clicking link */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");

            menuToggle.textContent = "☰";

        });

    });


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const sections =
        document.querySelectorAll("section[id]");

    function updateActiveLink() {

        const scrollPosition =
            window.scrollY + 150;

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop + sectionHeight
            ) {

                navLinks.forEach(function (link) {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + sectionId
                    ) {
                        link.classList.add("active");
                    }

                });

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveLink
    );

    updateActiveLink();


    /* =================================================
       BACK TO TOP
    ================================================= */

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =================================================
       CONTACT FORM
    ================================================= */

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                alert(
                    "Please fill all the fields."
                );

                return;

            }


            const emailBody =
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message;


            const mailtoLink =
                "mailto:amankr70612@gmail.com" +
                "?subject=" +
                encodeURIComponent(subject) +
                "&body=" +
                encodeURIComponent(emailBody);


            window.location.href =
                mailtoLink;

        }
    );


    /* =================================================
       ESC KEY CLOSES MOBILE MENU
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                navMenu.classList.remove("show");

                menuToggle.textContent = "☰";

            }

        }
    );

});
```
