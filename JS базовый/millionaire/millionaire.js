'use ctrict'

/* Реализовать игру «Кто хочет стать
миллионером?».
Т.е. у вас должен быть главный объект содержащий всю логику игры, который будет иметь
методы, например
метод run, возможно метод init и т.д.
В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и
предлагать варианты
ответов в виде теста, например:
Сколько букв в слове "привет":
a. Пять.
b. Шесть.
c. Семь.
d. Куда я попал? 
Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и
предложить
сыграть снова.
Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.*/

const questions = [
    { 
        text: 'Как называется экзотическое животное из Южной Америки?',
        answers: {
            'a': 'пчеложор', 
            'b': 'термитоглот',
            'c': 'муравьед',
            'd': 'комаролов'
        },
        correctAnswerIndex: 'c',
    },
    { 
        text: 'Как, образно говоря, способный человек впитывает знания?',
        answers: {
            'a': 'как тряпка', 
            'b': 'как губка',
            'c': 'как газета',
            'd': 'как промокашка'
        },
        correctAnswerIndex: 'b',
    },
    { 
        text: 'Как правильно продолжить припев детской песни: Тили-тили...?',
        answers: {
            'a': 'хали-гали', 
            'b': 'трали-вали',
            'c': 'жили-были',
            'd': 'ели-пили'
        },
        correctAnswerIndex: 'b',
    },
    { 
        text: 'Что понадобится, чтобы взрыхлить землю на грядке?',
        answers: {
            'a': 'тяпка', 
            'b': 'бабка',
            'c': 'скобка',
            'd': 'тряпка'
        },
        correctAnswerIndex: 'a',
    },
    { 
        text: 'Во что превращается гусеница?',
        answers: {
            'a': 'в мячик', 
            'b': 'в пирамидку',
            'c': 'в машинку',
            'd': 'в куколку'
        },
        correctAnswerIndex: 'd',
    },

];

const game = {
    questions,
    score: 0,
    correctAnswerIndex: 0,

    run() {
        let begin = prompt('Сыграем? Для продолжения нажмите любую кнопку, если хотите выйти -1.');
        if (begin == -1) {
            alert('Досвидания!');
            return; 
        }
        this.getAnswer();
    },

    getAnswer() {
        this.score = 0;
        for (let i = 0; i < this.questions.length; i++) {
        const question = questions[i];
        const arrAnswer = [];
        const correctAnswer = question.correctAnswerIndex;
            for(let answ in question.answers) {
                arrAnswer.push(` ${answ} : ${question.answers[answ]}`);
            }
        const answerPlayer = prompt(`Вопрос: \n ${question.text} \n Возможные варианты ответов:\n ${arrAnswer.join(' \n ')}\nДля выхода из игры нажмите -1.`);
        const correctAnswerPlayer = this.getCorrectData(answerPlayer);
        if (correctAnswerPlayer == false) {
            i--;
        }
        const actualValue = this.getActualValue(answerPlayer);
        if (actualValue == false) {
            alert('Досвидания!');
            return; 
        } else if (correctAnswer == answerPlayer) {
            this.score++;
        } else {
            this.score;
        }
        }
        const gameOver = prompt('Игра окончена! Правильных ответов: ' + this.score + '.\nЕсли хотите сыграть еще раз нажмите любую кнопку.\nДля выхода -1.');
        const again = this.isGameOver(gameOver);
        if (again == false) {
            alert('Досвидания');
            return;
        } else {
            this.getAnswer();
        }
    },

    getCorrectData(answerPlayer) {
        const correctData = ['-1', 'a', 'b', 'c', 'd'];
        if (!correctData.includes(answerPlayer)) {
            alert(`Выберите один из указанных вариантов ответа (a, b, c, d). Для выхода нажмите -1.`);
            return false;
        } else {
            return true;
        }
    },

    getActualValue(answerPlayer) {
        if (answerPlayer == -1) {
            return false;
        } else {
            return true;
        }
    },

    isGameOver(gameOver) {
        if (gameOver == -1){
           return false;
        } else {
            return true;
        }

    },

};


game.run();