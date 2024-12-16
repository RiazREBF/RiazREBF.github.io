  // Scroll to Top Functionality
  const scrollToTopButtons = document.querySelectorAll('.scrollToTop');

  // Attach click event to all buttons
  scrollToTopButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  // Show/Hide all buttons based on scroll position
  window.addEventListener('scroll', () => {
    scrollToTopButtons.forEach(button => {
      if (window.scrollY > 300) {
        button.classList.remove('hidden');
      } else {
        button.classList.add('hidden');
      }
    });
  });