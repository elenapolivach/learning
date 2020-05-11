const number = prompt('Введите шестизначный номер билета: ');
let a = parseInt(number / 100000);
let b = parseInt(number / 10000 - a * 10);
let c = parseInt(number / 1000 - a * 100 - b * 10);
let d = parseInt(number / 100 - a * 1000 - b * 100 - c * 10);
let e = parseInt(number / 10 - a * 10000 - b * 1000 - c * 100 - d * 10);
let f = number % 10;
let sum1 = a + b + c;
let sum2 = d + e + f;
if (sum1 == sum2) {
    alert('Поздравляем, у Вас счастливый билет!');
} else {
    alert('Не повезло в этот раз (: ');
}