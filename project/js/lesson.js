//DZ -3
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabContentBlocks = document.querySelectorAll('.tab_content_block')

function showSlide(index) {

    tabContentBlocks.forEach(block => {
        block.style.display = 'none'
    })

    tabContentItems.forEach(item => {
        item.classList.remove('tab_content_item_active')
    })

    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}

tabContentItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showSlide(index)
    })
})

showSlide(0)

function nextSlide() {
    const activeIndex = Array.from(tabContentItems).findIndex(item => item.classList.contains('tab_content_item_active'))
    const nextIndex = (activeIndex + 1) % tabContentItems.length
    showSlide(nextIndex)
}

setInterval(nextSlide, 3000)


//converter 
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (elem, target, target2) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            target.forEach(e => {
                if (target2 === 'som') {
                    e.value = (elem.value / response[e.id]).toFixed(2)
                } else if (e === som) {
                    e.value = (elem.value * response[elem.id]).toFixed(2)
                } else {
                    e.value = ((elem.value * response[elem.id]) / response[e.id]).toFixed(2)
                }
            })
            if (elem.value === '') {
                target.forEach(e => e.value = '')
            }
            elem.value === '' && (target.forEach(e => e.value = ''))
        }
    }
}

convert(som, [usd, eur], 'som')
convert(usd, [som, eur], 'usd')
convert(eur, [som, usd], 'eur')