'use strict'

const Api = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class Products {
    constructor(basket, url = '/catalogData.json', container = '.products') {
        this.url = url;
        this.container = container;
        this.data = []; 
        this.productsAll = []; 
        this.basket = basket;
        this.fetchGoods();
        this.buyClick();
    }

    fetchGoods() {
        fetch(`${Api + this.url}`)
        .then(result => result.json())
        .then(data => {
            this.data = [...data];
            this.render();
        })
        .catch(error => console.log(error));
        
    }

    render() {
        const block = document.querySelector(this.container);
        for (let element of this.data) {
            const product = new CardProduct(element);
            this.productsAll.push(product);
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }

    buyClick () {
        document.querySelector('.products').addEventListener('click', event => {
            if (event.target.classList.contains('buy')) {
                const id = +event.target.dataset.id;
                const el = this.productsAll.find(element => element.id_product == id);
                basket.addProductBasket(el);
            }
        })
    }
}

class CardProduct {
    constructor (product, img = "https://placehold.it/200x150"){
        this.id_product = product.id_product; 
        this.product_name = product.product_name;
        this.price = product.price;
        this.img = img
    }
    render() {
        return `<div class = "product-card">
                    <img src = "${this.img}" alt = "${this.product_name}">
                    <div>${this.product_name}</div>
                    <div>${this.price}</div>
                    <button class ="buy" data-id = "${this.id_product}">Купить</button>
                   </div>`
    }

}

class Basket {
    constructor(container = '.basket-block') {
        this.container = container;
        this.data = [];
        this.productsAll = [];
        this.fetchGoods();
        this.deleteClick();
        this.clickBasket();
    }
    fetchGoods() {
        fetch(`${Api}/getBasket.json`) 
        .then(result => result.json())
        .then(data => {
            this.data = [...data.contents];
            this.render();
        })
        .catch(error => console.log(error));
        
    }

    render() {
        const blockBasket = document.querySelector(this.container);
        for (let element of this.data) {
            const basketCard = new BasketProduct(element);
            this.productsAll.push(basketCard);
            blockBasket.insertAdjacentHTML('beforeend', basketCard.render());
        }
    }

    addProductBasket(product) {
        fetch(`${Api}/addToBasket.json`) 
        .then(result => result.json())
        .then(data => {
            if (data.result) {
                let findProduct = this.productsAll.find(element => element.id_product == product.id_product)
                if(findProduct) {
                    findProduct.quantity++;
                    const blockProduct = document.querySelector(`.basket-product[data-id = "${findProduct.id_product}"]`);
                    blockProduct.querySelector('.quantity').innerHTML = `Количество: ${findProduct.quantity}`;
                    blockProduct.querySelector('.price').innerHTML = `${findProduct.price*findProduct.quantity}`;
                }else{
                    let productNew = Object.assign(product, {quantity : 1});
                    this.data = [productNew];
                    this.render(); 
                }
            }else{
                console.log('Что-то пошло не так!');
            }
        })
        .catch(error => console.log(error));


    }

    deleteClick () {
        document.querySelector('.basket-block').addEventListener('click', event => {
            if (event.target.classList.contains('delete-button')) {
                const id = +event.target.dataset.id;
                const el = this.productsAll.find(element => element.id_product === id);
                this.deleteProductBasket(el);
            }
        })
    }

    deleteProductBasket(product) {
        fetch(`${Api}/deleteFromBasket.json`) 
        .then(result => result.json())
        .then(data => {
            if (data.result) {
                let deleteProduct = this.productsAll.find(element => element.id_product == product.id_product);
                if(deleteProduct.quantity > 1) {
                    const blockProduct = document.querySelector(`.basket-product[data-id = "${deleteProduct.id_product}"]`);
                    deleteProduct.quantity--;
                    blockProduct.querySelector('.quantity').innerHTML = `Количество: ${deleteProduct.quantity}`;
                    blockProduct.querySelector('.price').innerHTML = `${deleteProduct.price*deleteProduct.quantity}`;
                }else{
                     const deleteBlock = document.querySelector(`.basket-product[data-id = "${product.id_product}"]`);
                     deleteBlock.remove();
                     let index = this.productsAll.indexOf(deleteProduct);
                     this.productsAll.splice(index, 1); 
                }
            }else{
                console.log('Что-то пошло не так!');
            }
        })
        .catch(error => console.log(error));
    }

    clickBasket() {
        document.querySelector('.button-basket').addEventListener('click', () => {
            document.querySelector('.basket-block').classList.toggle('invisible');
        });
    }
}

class BasketProduct {
    constructor (product, img = "https://placehold.it/100x50"){
        this.id_product = product.id_product; 
        this.product_name = product.product_name;
        this.price = product.price;
        this.img = img;
        this.quantity = +product.quantity;
    }

    render() {
        return `<div class = "basket-product" data-id = "${this.id_product}">
                    <div>
                        <img src = "${this.img}" alt = "${this.product_name}">
                        <div>${this.product_name}</div>
                        <div>${this.price}</div>
                        <div class = "quantity">Количество: ${this.quantity}</div>
                    </div>
                
                    <div>
                        <div class = "price">${this.price*this.quantity}</div>
                        <button class = "delete-button" data-id = "${this.id_product}" >Удалить</button>
                    </div>
                </div>`
    }
}

const products = new Products();
const basket = new Basket();









