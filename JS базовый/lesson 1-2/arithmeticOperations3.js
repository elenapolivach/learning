
let a;
let b;
function getNumber() {
a = parseInt(prompt('Введите любое целое число: '));
b = parseInt(prompt('Введите любое целое число: '));
}

function getSum(a, b) {
    alert('Сумма чисел равна: ' + (a + b));
    return;
}

function getDifference(a, b) {
    alert('Разность чисел равна: ' + (a - b));
    return;  
}

function getMultiplication (a, b) {
    alert('Произведение чисел: ' + a * b);
    return;
}

function getDivision (a, b) {
    alert('Результат деления чисел: ' + a / b);
    return;
}

getNumber();

if (Number.isNaN(a) || Number.isNaN(b)) {
    alert('Введённые Вами данные несоответствуют требованиям. Введите любое целое число!');
    getNumber();
    
}
    getSum(a, b);
    getDifference(a, b);
    getMultiplication(a, b);
    getDivision(a, b);
