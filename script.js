```javascript
/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


/* Close menu after clicking a link */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀";

    } else {

        themeBtn.textContent = "☾";

    }

});


/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const formMessage =
        document.getElementById("formMessage");


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;

    }


    /*
       Opens the user's email application.
       No backend/server is required.
    */

    const subject =
        encodeURIComponent(
            "Portfolio Enquiry from " + name
        );

    const body =
        encodeURIComponent(
            message +
            "\n\nReply to: " +
            email
        );


    window.location.href =
        "mailto:amankr70612@gmail.com" +
        "?subject=" +
        subject +
        "&body=" +
        body;


    formMessage.textContent =
        "Opening your email application...";

});
```
