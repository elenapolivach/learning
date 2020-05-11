new Vue ({
    el: '#app',
    data: {
        show: true,
        mess: 'Привет Мир!',
        cars: [
            {model: 'BMW', speed: 200},
            {model: 'FORD', speed: 180}
        ]
    },
    computed:{
        showMess() {
            return this.mess.toUpperCase();
        }
    },
    filters: {
        lowerCase(value) {
            return value.toLowerCase();
        }
    }
})