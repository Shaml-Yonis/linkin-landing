  let currentIndex = 0;
  const slides = document.querySelectorAll('.testimonial-slide');

  function showNextSlide() {
    slides[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.transform = 'translateX(0)';
  }

  setInterval(showNextSlide, 3000); // يتغير كل 3 ثواني
