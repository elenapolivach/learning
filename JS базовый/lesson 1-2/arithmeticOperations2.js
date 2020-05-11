let arg1;
let arg2;
let operation;

function getNumber() {
arg1 = parseInt(prompt('Введите любое целое число: '));
arg2 = parseInt(prompt('Введите любое целое число: '));
}

function getSum(arg1, arg2) {
    alert('Сумма чисел равна: ' + (arg1 + arg2));
    return;
}

function getDifference(arg1, arg2) {
    alert('Разность чисел равна: ' + (arg1 - arg2));
    return;  
}

function getMultiplication (arg1, arg2) {
    alert('Произведение чисел: ' + arg1 * arg2);
    return;
}

function getDivision (arg1, arg2) {
    alert('Результат деления чисел: ' + arg1 / arg2);
    return;
}

function mathOperation(arg1, arg2) {
    if (arg1 >= 0 && arg2 >= 0) {
        operation = getDifference(arg1, arg2);
    } else if (arg1 < 0 && arg2 < 0) {
        operation = getMultiplication (arg1, arg2);
        operation = getDivision (arg1, arg2);
    } else {
        operation = getSum(arg1, arg2);
    }

}

getNumber();

if (Number.isNaN(arg1) || Number.isNaN(arg2)) {
    alert('Введённые Вами данные несоответствуют требованиям. Введите любое целое число!');
    getNumber();
}

mathOperation(arg1, arg2);
