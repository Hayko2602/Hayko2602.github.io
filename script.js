// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.onclick = () => {
  navLinks.classList.toggle("active");
};
// Close menu when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
});

// Optional: close when a menu item is clicked (useful on mobile)
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("active");
  }
});





// SECTION 3 Scroll Reveal Animation
function revealOnScroll() {
  const revealItems = document.querySelectorAll('.sec3-title, .sec3-content');
  revealItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8;
    if (rect.top <= triggerPoint) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
  });
}
window.addEventListener('scroll', revealOnScroll);

// =====================		Section 3 animation effect
function revealFadeScale() {
  const title = document.querySelector('.sec3-title');
  const content = document.querySelector('.sec3-content');
  const triggerPoint = window.innerHeight * 0.8;
  // Title
  if (title.getBoundingClientRect().top <= triggerPoint) {
    title.classList.add('active');
  }
  // Content
  if (content.getBoundingClientRect().top <= triggerPoint) {
    content.classList.add('active');
  }
}
window.addEventListener('scroll', revealFadeScale);

// Section 5 Contact forms

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  // Collect values
  const messageData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    country: document.getElementById('country').value,
    topic: document.getElementById('topic').value,
    message: document.getElementById('message').value,
    date: new Date().toLocaleString()
  };
  // Load existing messages or create array
  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  // Add new message
  messages.push(messageData);
  // Save back
  localStorage.setItem("messages", JSON.stringify(messages));
  alert("Message sent successfully!");
  form.reset();
});