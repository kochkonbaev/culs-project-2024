// Selecting all slide sections and initializing variables
const slides = document.querySelectorAll('main section');
let currentSlide = 0;
const totalSlides = slides.length;

// Function to show the current slide based on index
const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  document.getElementById('slide-count').textContent = `Slide ${index + 1} of ${totalSlides}`;
  
  // Disable/Enable navigation buttons at boundaries
  document.getElementById('previous-slide').disabled = index === 0;
  document.getElementById('next-slide').disabled = index === totalSlides - 1;
};

// Initialize by showing the first slide
showSlide(currentSlide);

// Next Slide button event
document.getElementById('next-slide').addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

// Previous Slide button event
document.getElementById('previous-slide').addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});
