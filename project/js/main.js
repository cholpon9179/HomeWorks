const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
let count = 1

const fetchData = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.completed}</h3>
            `
            block.innerHTML = '' 
            block.append(div)
        })
}

const clampCount = () => {
    if (count > 200) {
        count = 1
    } else if (count < 1) {
        count = 200
    }
}

const updateCard = (increment) => {
    count += increment
    clampCount()
    fetchData(`https://jsonplaceholder.typicode.com/todos/${count}`)
}

btnNext.onclick = () => {
    updateCard(1)
}

btnPrev.onclick = () => {
    updateCard(-1)
}


//задача №2
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))

  