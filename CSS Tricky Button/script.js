const btn = document.querySelector('[data-btn')

btn.addEventListener('click', () => {
    btn.classList.toggle('animating')
})


var path = document.querySelector('path')
var length = path.getTotalLength()
console.log(length)