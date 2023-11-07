const designCards = document.querySelectorAll('.design-card');
const introductionTexts = document.querySelectorAll('.introduction-text');
const singleProfileCards = document.querySelectorAll('.single-profile-card');
const testimonialCards = document.querySelectorAll('.testimonial-card');

function toggleElements(elements, index) {
  elements.forEach((element, elementIndex) => {
    if (index === elementIndex) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}

function toggleClasses(elements, index, className) {
  elements.forEach((element, elementIndex) => {
    if (index === elementIndex) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  });
}

function showIntroductionText(index) {
  toggleElements(introductionTexts, index);
  toggleClasses(designCards, index, 'active');
}

function showTestimonialCard(index) {
  toggleElements(testimonialCards, index);
  toggleClasses(singleProfileCards, index, 'profile-card-active');
}

designCards.forEach((button, index) => {
  button.addEventListener('click', () => {
    showIntroductionText(index);
  });
});

singleProfileCards.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    showTestimonialCard(index);
  });
});

function mostrarAlerta() {
  alert("¡Hello Welcome to my Website.");
}

window.addEventListener('load', mostrarAlerta);
