
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");
  const yearElement = document.getElementById("year");

  // Current year
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Dark mode
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector("i");

    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      const isDarkMode = document.body.classList.contains("dark-mode");

      if (isDarkMode) {
        themeIcon.className = "fas fa-sun";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
      } else {
        themeIcon.className = "fas fa-moon";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
      }
    });
  }

  // Mobile menu
  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");

      const menuIcon = menuToggle.querySelector("i");

      if (navbar.classList.contains("active")) {
        menuIcon.className = "fas fa-times";
        menuToggle.setAttribute("aria-label", "Close navigation menu");
      } else {
        menuIcon.className = "fas fa-bars";
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      }
    });

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navbar.classList.remove("active");

        const menuIcon = menuToggle.querySelector("i");
        menuIcon.className = "fas fa-bars";

        menuToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }

  // Back to top button
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
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
});
