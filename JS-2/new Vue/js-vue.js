
const Api = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '.container',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',

        basketUrl: '/getBasket.json',
        basketProducts: [],
        imgBasket: 'https://placehold.it/100x50',
        addToBasket: '/addToBasket.json',
        deleteFromBasket: '/deleteFromBasket.json',

        visible: false,
        text: 'Корзина пуста'


    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProduct(el){
            this.getJson(`${Api+this.addToBasket}`)
            .then(data => {
                if(data){
                    let findProduct = this.basketProducts.find(product => product.id_product == el.id_product);
                        if(findProduct) {
                            findProduct.quantity++;
                        }else{
                            let productNew = Object.assign({quantity : 1}, el);
                            this.basketProducts.push(productNew);
                        }
                    }
            })
            
        },

        deleteProductBasket(el) {
            this.getJson(`${Api+this.deleteFromBasket}`)
            .then(data => {
                if(data){
                    let deleteProduct = this.basketProducts.find(product => product.id_product == el.id_product);
                    if(deleteProduct.quantity > 1) {
                        deleteProduct.quantity--;
                    }else {
                    let index = this.basketProducts.indexOf(deleteProduct);
                    this.basketProducts.splice(index, 1);   
                    }
                }
            })

        },

        basketIsEmpty(){
            if(!this.basketProducts.length){
                return true;
            } else{
                return false;
            }
        }

    },
    mounted(){
        this.getJson(`${Api + this.catalogUrl}`)
            .then(data => {
                for(let element of data){
                    this.products.push(element);
                }
            }),
        this.getJson(`${Api + this.basketUrl}`)
            .then(data => {
                for(let element of data.contents){
                    this.basketProducts.push(element);
                }
            })
        }

})