class Calculator {
    constructor() {
        this.inputSelect = this.inputSelect()
    }

    inputSelect() {
        let inputArr = [];
        let inputChecked = document.querySelectorAll(`input:checked`);
        for (let i = 0; i< inputChecked.length; i++) {
            inputArr.push(inputChecked[i]);
        }
        return inputArr;
    }

    sumPrice() {
        let price = 0;
        this.inputSelect.forEach(element => {
        price += +element.dataset.price;
        });
        document.querySelector(".price").innerHTML = `${price} руб.`;
            
    }

    sumCalories() {
        let calories = 0;
        this.inputSelect.forEach(element => {
        calories += +element.dataset.calories;
        });
        document.querySelector(".calories").innerHTML = `${calories} руб.`;
        
    }

}


// const Burger = {
   
//     price:  null,
//     calories: null,
//     inputArr:  null,

//     getBurger() {
//         this.getInput();
//         this.getPrice();
//         this.getCalories(); 
//     },

//     getInput() {
//         this.inputArr = [];
//         let inputChecked = document.querySelectorAll(`input:checked`);
//             for (let i = 0; i< inputChecked.length; i++) {
//                 this.inputArr.push(inputChecked[i]);
//              }
//     },

//     getPrice() {
//         this.price = 0;
//         this.inputArr.forEach(element => {
//             this.price += +element.dataset.price;
//          });
//          document.querySelector(".price").innerHTML = `${this.price} руб.`;
//     },
    
//     getCalories() {
//         this.calories = 0;
//         this.inputArr.forEach(element => {
//             this.calories += +element.dataset.calories;
//          });
//          document.querySelector(".calories").innerHTML = `${this.calories} калорий.`;
//     }

// }


// /* 3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:

// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий). 
// ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). 
// ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. */