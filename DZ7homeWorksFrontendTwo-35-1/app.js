// const riddles = document.querySelectorAll('.riddle')
//
// riddles.forEach(riddle => {
//     const answerBtn = riddle.querySelector('.answer-btn')
//     const answer = riddle.querySelector('.answer')
//
//     answerBtn.addEventListener('click', function() {
//         answer.classList.toggle('show')
//         if (answer.classList.contains('show')) {
//             answerBtn.innerHTML = "Скрыть ответ"
//         } else {
//             answerBtn.innerHTML = "Показать ответ"
//         }
//     })
// })

//вариант с this, drap, drop
const riddles = document.querySelectorAll('.riddle')

riddles.forEach(riddle => {
    const answerBtn = riddle.querySelector('.answer-btn')
    const answer = riddle.querySelector('.answer')

    answerBtn.addEventListener('click', function() {
        this.classList.toggle('active') // Добавляем класс при клике на кнопку
        answer.classList.toggle('show')
        if (answer.classList.contains('show')) {
            this.innerHTML = "Скрыть ответ"
        } else {
            this.innerHTML = "Показать ответ"
        }
    })

    answerBtn.addEventListener('dragstart', function(event) {
        // Логика, выполняемая при начале перетаскивания кнопки
    })

    answerBtn.addEventListener('drop', function(event) {
        // Логика, выполняемая при отпускании кнопки в зоне перетаскивания
    })
})
