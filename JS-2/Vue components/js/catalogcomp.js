Vue.component('catalog', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: 'https://placehold.it/200x150',
        }
    },
    mounted(){
        this.$parent.getJson(`${Api + this.catalogUrl}`)
            .then(data => {
                for(let element of data){
                    this.products.push(element);
                }
            })
    },
    template: `<div class="products">
              <catalog-card
              v-for="el of products" 
              :key="el.id_product"
              :catalogCard="el"
              :img="imgCatalog"
              ></catalog-card>  
            </div>`
})

Vue.component('catalog-card', {
    props: ['catalogCard','img'],
    template: `<div class = "product-card">
                <img :src = "img" :alt = "catalogCard.product_name">
                <div>{{catalogCard.product_name}}</div>
                <div>{{catalogCard.price}}</div>
                <button class ="buy" @click="$root.$refs.basket.addProduct(catalogCard)">Купить</button>
            </div>`
})