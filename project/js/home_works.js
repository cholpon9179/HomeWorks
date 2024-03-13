//задание №1
const innInput = document.querySelector('#gmail_input')
const innCheck = document.querySelector('#gmail_button')
const innResult = document.querySelector('#gmail_result')
const regExp = /[a-zA-Z0-9]+\@gmail.com/
innCheck.onclick = () => {
    if (regExp.test(innInput.value)){
        innResult.innerHTML = 'CORRECT GMAIL'
        innResult.style.color = 'green'
    }else{
        innResult.innerHTML = 'WRONG GMAIL'
        innResult.style.color = 'red'
    }

}



//DZ1 Задание №2/ DZ2 №1 продолжения


const box = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 449 && positionY <= 0) {
        positionX++
        box.style.left =` ${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 449 && positionY <= 449) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX >= 0 && positionY >= 449) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX <= 0 && positionY >= 0) {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}

move()
//DZ2  задание 2

let timer; 
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