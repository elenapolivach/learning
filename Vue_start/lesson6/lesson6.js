Vue.component('app-car', {
    data() {
        return {
            cars: [
                {model: "BMW"},
                {model: "Honda"},
                {model: "Ford"}
            ]
        }
    },
    template: `<div>
                <div v-for="car in cars"> 
                    <p>{{ car.model }}</p>
                </div>
                </div>`
})

new Vue ({
    el: '#app',
    data: {
    
    }
});
new Vue ({
    el: '#app2',
    data: {
    
    }
})