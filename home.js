document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.querySelector('.products');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
  
    // Slide to the right
    arrowRight.addEventListener('click', function () {
      productsContainer.scrollBy({
        left: 300, // Adjust this value as needed
        behavior: 'smooth',
      });
    });
  
    // Slide to the left
    arrowLeft.addEventListener('click', function () {
      productsContainer.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    });
  
    // Add animations when scrolling
    const sections = document.querySelectorAll('.section'); // Sections to animate
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add animation class when visible
          } else {
            entry.target.classList.remove('visible'); // Remove class when out of view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    // Trigger animations for elements already in view
    const animatedElements = document.querySelectorAll('.animate');
    const onScroll = () => {
      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };
  
    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger on page load
  });
  