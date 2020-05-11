Vue.component('basket', {
    data() {
        return {
            basketUrl: '/getBasket.json',
            basketProducts: [],
            imgBasket: 'https://placehold.it/100x50',
            addToBasket: '/addToBasket.json',
            deleteFromBasket: '/deleteFromBasket.json',
            visible: false,
            text: 'Корзина пуста'
        }
    },
    methods: {
        addProduct(el){
            this.$parent.getJson(`${Api+this.addToBasket}`)
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
            this.$parent.getJson(`${Api+this.deleteFromBasket}`)
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
        this.$parent.getJson(`${Api + this.basketUrl}`)
            .then(data => {
                for(let element of data.contents){
                    this.basketProducts.push(element);
                }
            })
        },
    template: `<div>
                    <button class="button-basket" type="button" @click="visible=!visible">Корзина</button>
                    <div class="basket-block" v-show="visible">
                        <span v-if="basketIsEmpty()">{{ text }}</span>
                        <basket-product
                        v-for="el of basketProducts" 
                        :key="el.id_product"
                        :basketProduct = "el"
                        :img="imgBasket"
                        @deleteProductBasket="deleteProductBasket"
                        ></basket-product>
                        
                    </div>
                </div>`

});

Vue.component('basket-product', {
    props: ['basketProduct','img'],
    template: `<div class = "basket-product">
                <div>
                    <img :src = "img" alt = "basketProduct.product_name">
                    <div>{{basketProduct.product_name}}</div>
                    <div>{{basketProduct.price}}</div>
                    <div>Количество: {{basketProduct.quantity}}</div>
                </div>
                <div>
                    <div>{{basketProduct.price*basketProduct.quantity}}</div>
                    <button class = "delete-button" @click="$emit('deleteProductBasket', basketProduct)">Удалить</button>
                </div>
            </div>`
});