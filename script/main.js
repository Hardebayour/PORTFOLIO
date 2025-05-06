// transparent header on scrolling
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("bg-transparent", "backdrop-blur-md", "shadow-none");
    header.classList.remove("bg-white", "shadow-md");
  } else {
    header.classList.add("bg-white", "shadow-md");
    header.classList.remove(
      "bg-transparent",
      "backdrop-blur-md",
      "shadow-none"
    );
  }
});

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

// backToTop
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

// scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
