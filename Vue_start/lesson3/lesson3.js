new Vue ({
    el: '#app',
    data: {
        value: 0,
    },
    methods: {
        increment(userValue){
            this.value = userValue;
        }
    },
    computed:{
    doubleValue(){
        return this.value*2
    }
    }
})