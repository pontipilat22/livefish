/* --------------------------------------
   ГАМБУРГЕР-МЕНЮ (открытие/закрытие)
-------------------------------------- */
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

/* --------------------------------------
   КАРУСЕЛЬ ОТЗЫВОВ
-------------------------------------- */
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = testimonials.length - 1;
  }
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }
  showTestimonial(currentIndex);
});

// По умолчанию показываем первый отзыв
showTestimonial(currentIndex);

/* --------------------------------------
   КАРУСЕЛЬ ДЛЯ КАРПА (Ассортимент)
-------------------------------------- */
const fishSlides = document.querySelectorAll('.fish-slide');
const fishPrevBtn = document.querySelector('.fish-prev');
const fishNextBtn = document.querySelector('.fish-next');
let fishIndex = 0;

function showFishSlide(index) {
  fishSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

fishPrevBtn.addEventListener('click', () => {
  fishIndex--;
  if (fishIndex < 0) {
    fishIndex = fishSlides.length - 1;
  }
  showFishSlide(fishIndex);
});

fishNextBtn.addEventListener('click', () => {
  fishIndex++;
  if (fishIndex >= fishSlides.length) {
    fishIndex = 0;
  }
  showFishSlide(fishIndex);
});

// Изначально показываем первый слайд
showFishSlide(fishIndex);

/* --------------------------------------
   КНОПКА "НАВЕРХ"
-------------------------------------- */
const btnToTop = document.getElementById('btnToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    btnToTop.style.display = 'flex';
  } else {
    btnToTop.style.display = 'none';
  }
});

btnToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
