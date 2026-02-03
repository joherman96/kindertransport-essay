document.addEventListener('DOMContentLoaded', function() {
  // Select all sections that need fade-in animation
  const sections = document.querySelectorAll('.essay-section, .works-cited-section');

  // Intersection Observer options
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  // Create the observer
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe each section
  sections.forEach(section => {
    observer.observe(section);
  });
});
