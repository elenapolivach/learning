'use strict'

/* Дан массив (создать такой же, с такими же значениями):
const arr = [
[2, 4, 6],
[1, 5, 10],
[7, 4, 2],
Задания:
1 Найти массив, у которого сумма всех чисел максимальна, вывести в console.log
индекс этого массива.
2 Получить и вывести в console.log минимальное значение найденное в массиве,
который мы получили в первом пункте.
*/

const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 2],
]
const arr1 = [];
let max = 0;
let min;
let n;
let j;

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    arr1.push(sum);
    return;
}

getSum(arr[0]);
getSum(arr[1]);
getSum(arr[2]); 

console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] > max) {
        max = arr1[i];
        n = i;
    }
}

console.log(" Максимальная сумма массива: " + max + ". Индекс массива " + n);

min = max;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < min) {
        min = arr1[i];
        j = i;
    }
}
console.log(" Минимальная сумма массива: " + min + ". Индекс массива " + j);

