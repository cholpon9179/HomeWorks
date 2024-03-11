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


//Задание №2

let position = 0;
function moveBox() {
    let box = document.querySelector('.child_block');
    box.style.left = `${position}px`;
    position++;
    if (position < 449) {
        requestAnimationFrame(moveBox);
    }
}
moveBox()