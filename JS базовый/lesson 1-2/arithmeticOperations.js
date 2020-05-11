
let a;
let b;
function getNumber() {
a = parseInt(prompt('Введите любое целое число: '));
b = parseInt(prompt('Введите любое целое число: '));
}
getNumber();
if (Number.isNaN(a) || Number.isNaN(b)) {
    alert('Введённые Вами данные несоответствуют требованиям. Введите любое целое число!');
    getNumber();
}
if (a >= 0 && b >= 0) {
    alert('Разность чисел: ' + (a - b));
} else if (a, b < 0) {
    alert('Произведение чисел: ' + a * b);
} else {
    alert("Сумма чисел равна: " + (a + b));
}