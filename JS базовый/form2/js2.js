'use strict'

const form = document.querySelector('.form');
form.addEventListener('submit', divDelete);
form.addEventListener('submit', validation);


function divDelete() {
    const findMyDivs = document.querySelectorAll('.divError');
        for (let i = 0; i < findMyDivs.length; i++) {
            const findMyDiv = findMyDivs[i];
            findMyDiv.remove();
        }
};

function validation() {
    const userName = document.querySelector('.name');
    const userPhone = document.querySelector('.phone');
    const userPassword = document.querySelector('.pass');
    const userPasswordVerification = document.querySelector('.verification');
    const arr = [];


    if (userName.value == '' || userName.value.length > 50) {
        const myDiv = document.createElement('div');
        myDiv.classList.add('divError');
        myDiv.innerHTML = 'Длина поля не менне 1 символа!';
        let inputName = document.querySelector('.name');
        inputName.insertAdjacentElement('afterEnd', myDiv);
        arr.push('false'); 
        myDiv.style.color = 'red';
        userName.style.border = '2px solid red';
    } else {
        userName.style.border = '1px solid grey';
    };

    if (userPhone.value.length !== 11 || userPhone.value % 1 !== 0) {
        const myDiv = document.createElement('div');
        myDiv.classList.add('divError');
        myDiv.innerHTML = 'Введите 11 цифр!';
        let inputName = document.querySelector('.phone');
        inputName.insertAdjacentElement('afterEnd', myDiv);
        arr.push('false');
        myDiv.style.color = 'red';
        userPhone.style.border = '2px solid red';
    } else {
        userPhone.style.border = '1px solid grey';
    };

    if (userPassword.value.length < 5 || userPassword.value.length > 50) {
        const myDiv = document.createElement('div');
        myDiv.classList.add('divError');
        myDiv.innerHTML = 'Введите от 5 до 50 символов!';
        let inputName = document.querySelector('.pass');
        inputName.insertAdjacentElement('afterEnd', myDiv);
        arr.push('false');
        myDiv.style.color = 'red';
        userPassword.style.border = '2px solid red';
    } else {
        userPassword.style.border = '1px solid grey';
    };

    if (userPasswordVerification.value !== userPassword.value || userPasswordVerification.value == '') {
        const myDiv = document.createElement('div');
        myDiv.classList.add('divError');
        myDiv.innerHTML = 'Пароли не совпадают!';
        let inputName = document.querySelector('.verification');
        inputName.insertAdjacentElement('afterEnd', myDiv);
        arr.push('false');
        myDiv.style.color = 'red';
        userPasswordVerification.style.border = '2px solid red';
    } else {
        userPasswordVerification.style.border = '1px solid grey';
    };

    if (arr.length > 0) {
        event.preventDefault();
        return;
    }
    return;
};




/*Имя - должно содержать как минимум 1 символ, не более 50 символов.
* Телефон - должно содержать 11 цифр, не больше, не меньше.
* Пароль - минимум 5 символов, максимум 50
* Повтор пароля - значение должно совпадать с полем пароль.
* Кнопка отправить форму - при нажатии на кнопку форма должна провериться, при
прохождении проверки, форма
отправляется, если проверка не была пройдена, то:
- Каждое поле, которое не прошло проверку должно выделяться красным цветом.
- Под каждым полем, что не прошло проверку, должна писаться подсказка по какой причине
проверка провалилась.
Можете пользоваться стилями бутстрапа, если лень самим писать.
Пользоваться аттрибутами HTML5 запрещено, необходимо проверки реализовать с помощью
javascript.*/