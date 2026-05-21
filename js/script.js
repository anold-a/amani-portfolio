
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

// menu functionality to close when open
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
  });
});

// contact form functionality 
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = '✓ Message Sent!';
  btn.disabled = true;
  setTimeout(function () {
    btn.textContent = 'Send Message →';
    btn.disabled = false;
    form.reset();
  }, 3000);
});

// the fading while scrolling functionality 
const cards = document.querySelectorAll(
  '.service-card, .project-card, .about-card, .stack-card'
);

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

cards.forEach(function (card) {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});
