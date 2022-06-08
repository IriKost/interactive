
const name = prompt('Как вас зовут?')
document.querySelector('h3')
.textContent = 'Привет, ' + name

setInterval(() => {
    document.querySelector('h1')
.textContent = 'Сейчас ' + new Date()
.toLocaleTimeString()

}, 1000)

const colors = ['plum', 'lightgreen', 'burlywood', 'mistyrose', 'rosybrown', 'tan']
let index = 0

document.querySelector('button')
.onclick = () => {
    document.body.style.background = colors[index]
    index++
    if (index>= colors.length) index=0
}