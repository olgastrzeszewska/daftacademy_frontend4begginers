// Show/hide page navigation
const menuButton = document.querySelector('#hamburger');

menuButton.addEventListener('click', (e) => {
    const pageNavigation = document.querySelector('.page-navigation');
    pageNavigation.classList.toggle('page-navigation--visible');
});

// Mark ticket as bought
const concerts = document.querySelector('#concerts');

concerts.addEventListener('click', (e) => {
    if (e.target.classList.contains('button--buy-ticket')) {
        const buyTicketButton = e.target;
        const haveFunText = document.createElement('p');
        haveFunText.textContent = 'Have fun!';

        const buttonContainer = buyTicketButton.parentElement;
        buttonContainer.insertBefore(haveFunText, buyTicketButton);
        buyTicketButton.remove();
        // OR
        // buyTicketButton.replaceWith(haveFunText);
    }
});

// Log form data
const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
});

const galleryItem = document.querySelectorAll('.gallery__item')
galleryItem.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.animation = 'gallery__image--entry 1s'
    image.style.animationFillMode = 'both'
  });
  image.addEventListener('mouseleave', () => {
    image.style.animation = 'gallery__image--leave 1s'
  });
});