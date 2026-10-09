// DROPDOWN
export function showDropDownMenu() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropdown-btn');
    const menu = dropdown.querySelector('.dropdown-menu');

    button.addEventListener('click', (e) => {
      e.stopPropagation();

      // Close other dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(m => {
        if (m !== menu) m.classList.remove('show');
      });

      menu.classList.toggle('show');
    });
  });

  window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.remove('show');
    });
  });
}

// CAROUSEL
export function next() {
  const nextBtn = document.querySelector('.next')
  if (!nextBtn) return; 
  
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator .dash');

    const currentSlide = document.querySelector('.carousel-slide.active');
    const index = [...slides].indexOf(currentSlide);
    const nextIndex = (index + 1) % slides.length;

    currentSlide.classList.remove('active');
    slides[nextIndex].classList.add('active');

    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[nextIndex].classList.add('active');
  });
}

export function previous() {
  const prevBtn = document.querySelector('.prev'); 
  if (!prevBtn) return; 
  
 prevBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator .dash');

    const currentSlide = document.querySelector('.carousel-slide.active');
    const index = [...slides].indexOf(currentSlide);
    const previousIndex = (index - 1 + slides.length) % slides.length;

    currentSlide.classList.remove('active');
    slides[previousIndex].classList.add('active');

    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[previousIndex].classList.add('active');
  });
}

export function slideShow(interval = 5000) {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.carousel-indicator .dash');

  if (!slides || !indicators) return; 

  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');
    indicators[index].classList.remove('active');

    index = (index + 1) % slides.length;

    slides[index].classList.add('active');
    indicators[index].classList.add('active');
  }, interval);
}

export function changeSlideByIndicator() {
  const indicators = document.querySelectorAll('.dash'); 
  const slides = document.querySelectorAll('.carousel-slide');
  if (!slides || !indicators) return;

  indicators.forEach((ind, index) => {
    ind.addEventListener('click', (e) => {
      e.preventDefault();

      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(btn => btn.classList.remove('active'));

      slides[index].classList.add('active');
      ind.classList.add('active');
    });
  });
}
