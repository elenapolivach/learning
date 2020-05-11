


class Validation {
    constructor() {
        this.templates = [
            {id: "name", pattern: /^[а-яёa-z]+$/i},
            {id: "tel", pattern: /^\+7\(?\d{3}\)?\d{3}\-?\d{4}$/},
            {id: "email", pattern: /^[a-z]+[\.]?[\-]?[a-z]+[\d+]?\@[a-z]+[\.][a-z]+$/},
            {id: "text", pattern: /^[\D0-9\s]+$/i}
        ];
        this.errors = [
            {id: "name", value: 'Имя должно содержать только буквы'},
            {id: "tel", value: 'Введите номер телефона в формате +7(000)000-0000'},
            {id: "email", value: 'Введите адрес почты в формате mymail@mail.ru'},
            {id: "text", value: 'Сообщение не может быть пустым!'}
        ]
        this.inputs = [...this.getInputs()];
        this.buttonSubmit();
        this.validationRun();
    }

    getInputs() {
        return document.querySelectorAll('.value');
     }

    validationRun(){
        for (let input of this.inputs) {
            input.addEventListener('focusin', e => {
                let elem = e.target;
                let pattern = this.templates.find(item => item.id == `${elem.dataset.id}`).pattern;
                this.isValid(elem,pattern);
            })
        }
     }

    isValid(elem,pattern) {
        elem.addEventListener('input', () =>{
            let test = pattern.test(elem.value);
            if(test == true){
                elem.classList.remove('invalid');
                elem.classList.add('valid');
                this.errorBlock(elem, test); 
            }else if (test == false){
                elem.classList.remove('valid');
            elem.classList.add('invalid');
            this.errorBlock(elem, test);
            }
        })
    }

    errorBlock(elem, test){
        let id = elem.dataset.id;
        const block = document.querySelector(`.${id}`)
        if(test == false){
            let error = this.errors.find(item => item.id == `${elem.dataset.id}`).value;
            block.classList.add('visible');
            block.innerHTML = `${error}`;
        }else {
            block.classList.remove('visible');
            block.innerHTML = '';
        }
    }

    buttonSubmit(){
        document.querySelector('.form').addEventListener('submit', e => {
            if(document.querySelector('.invalid')){
                e.preventDefault();
            }
        })
    }

}

const val = new Validation();