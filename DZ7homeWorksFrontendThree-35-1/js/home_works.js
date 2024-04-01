//задание №1

//Получаем инпут для ввода GMAIL
const innInput = document.querySelector('#gmail_input')

//Получаем кнопку для проверки GMAIL
const innCheck = document.querySelector('#gmail_button')

//Получаем поле для вывода результата
const innResult = document.querySelector('#gmail_result')

//Переменная где хранится регулярное выражение для проверки GMAIL
const regExp = /[a-zA-Z0-9]+\@gmail.com/

// стрелочная анонимная функция которая срабатывает при нажатии на кнопку
innCheck.onclick = () => {
    //при помощи .test сопоставляем наш введеный GMAIL с регулярным выражением
    if (regExp.test(innInput.value)){
        innResult.innerHTML = 'CORRECT GMAIL'
        innResult.style.color = 'green'
    }else{
        innResult.innerHTML = 'WRONG GMAIL'
        innResult.style.color = 'red'
    }

}


//Задание №2

// изначальное положение равно нулю
let position = 0;

//создаем функцию
function moveBox() {
    //достаем наш квадрат и сохраняем его
    let box = document.querySelector('.child_block');
    //устанавливаем значение свойства CSS left элемента box в позицию, указанную переменной position (в пикселях)
    box.style.left = `${position}px`;
    //инкремент(счетчик прибавления)
    position++;
    //условие если позиция нашего квадрата больше чем ширина большого квадрата, то идет зацикливание анимации
    if (position < 449) {
        requestAnimationFrame(moveBox);
    }
}
moveBox()


let timer; // глобальная переменная для хранения таймера
let counter = 0; // счетчик

function startTimer() {
    timer = setInterval(() => {
        counter++;
        document.getElementById("seconds").innerText = counter;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    counter = 0;
    document.getElementById("seconds").innerText = counter;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

