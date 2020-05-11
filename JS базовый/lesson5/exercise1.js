'use strict'

/* Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0,
    999],
    мы должны получить на выходе объект, в котором в соответствующих свойствах описаны
    разряды числа:
    - единицы (в свойстве firstDigit)
    - десятки (в свойстве secondDigit)
    - сотни (в свойстве thirdDigit)
    Например, для числа 45 мы должны получить следующий объект:
    ```
    firstDigit: 5,
    secondDigit: 4,
    thirdDigit: 0,
    ```
    Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
    */

   const num = {
    units: 0,
    tens: 0,
    hundred: 0,
};

   function getNumber(num) {
        
        let min = 0;
        let max = 999;
        let number = prompt('Введите целое чмсло в диапазоне от 0 до 999: ');
        
        if (number % 1 === 0 && min <= number <= max) {
            num.units = number % 10;
            num.tens = parseInt((number / 10) % 10);
            num.hundred = parseInt(number / 100);
        } else {
            return num;
        }

    }

    getNumber(num); 
    alert('Единицы: ' + num.units + ';\nДесятки: ' + num.tens + ';\nСотни: ' + num.hundred + '.');

