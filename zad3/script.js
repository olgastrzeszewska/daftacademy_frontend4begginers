//1
const menuButton = document.querySelector('.menu__button');
const navigation = document.querySelector('.page-navigation');
//2
const buttonBuy = document.querySelectorAll('.button__buy');
//3
const buttonContact = document.querySelector('.button--contact');
const emailForm = document.querySelector('.form__input__email');
const topicForm = document.querySelector('.form__input__topic');
var formData = new FormData();

//1
menuButton.addEventListener('click', () =>
    navigation.classList.toggle('page-navigation__hamburger')
);

//2
buttonBuy.forEach((button) =>
    button.addEventListener('click', () => button.replaceWith('Have fun!'))
);

//3
buttonContact.addEventListener('click', (e) => {
    e.preventDefault();
    formData.append(emailForm.value, topicForm.value);
    console.log(Object.fromEntries(formData));
});