'use strict'

/* С помощью цикла while вывести все простые числа в промежутке от 0 до 100
(можно без оптимизаций). */

let num = 100;
const arr = [];
let i = 2;

simpleNum:
for (i = 2; i <= num; i++) {
    let j = 2; 
    while(i > j) {
        if (i % j !== 0) {
            j++;
        } else {
            continue simpleNum;
        }
    }
    arr.push(i); 
}

alert('Простые числа в диапазоне от 0 до 100: ' + arr);
