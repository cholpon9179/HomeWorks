
const container = document.getElementById('container')
const xhr = new XMLHttpRequest()
xhr.open('GET', 'persons.json', true)
xhr.responseType = 'json'
xhr.send()

xhr.onload = function() {
    if (xhr.status === 200) {
        const data = xhr.response
        data.forEach(person => {
            const card = document.createElement('div')
            card.classList.add('card')

            const avatar = document.createElement('img')
            avatar.src = person.avatar
            avatar.classList.add('avatar')
            card.appendChild(avatar)

            const name = document.createElement('h2')
            name.textContent = person.name
            card.appendChild(name)

            const age = document.createElement('p')
            age.textContent = `Age: ${person.age}`
            card.appendChild(age)

            container.appendChild(card)

            console.log(person)
        })
    } else {
        console.error('Error loading data')
    }
}

  