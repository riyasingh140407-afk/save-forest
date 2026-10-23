
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");
  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Green pledge button
const pledgeBtn = document.getElementById("pledgeBtn");
const pledgeMessage = document.getElementById("pledgeMessage");

pledgeBtn.addEventListener("click", function () {
  pledgeMessage.textContent =
    "Thank you for supporting our planet! 🌱 Every action counts.";

  pledgeBtn.textContent = "Pledge Taken ✓";
  pledgeBtn.disabled = true;
  pledgeBtn.style.opacity = "0.8";
});

// Contact form demonstration
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formMessage.textContent =
    "Thank you, " + name +
    "! Your message has been received in this demo.";

  contactForm.reset();
});

// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();
