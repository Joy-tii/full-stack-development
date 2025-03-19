// Smooth scroll on Explore button
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Contact form
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
  });
  
  // Scroll-based fade animation
  window.addEventListener('scroll', function () {
    const fades = document.querySelectorAll('.fade');
    fades.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  });
  
  // Initialize fade-in on load
  window.addEventListener('load', () => {
    const fades = document.querySelectorAll('.fade');
    fades.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  });
  