
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      const icon = themeToggle.querySelector("i");

      if (document.body.classList.contains("dark-mode")) {
        icon.className = "fas fa-sun";
      } else {
        icon.className = "fas fa-moon";
      }
    });
  }
});
