



var all_button = document.getElementsByTagName('button')
console.log(all_button)


var copyAllButtons = []
for(let i= 0; i< all_button.length; i++) {
    copyAllButtons.push(all_button[i].classList[1])
}
console.log(copyAllButtons)



function buttonColorChange(button) {
    console.log(button.value)

    if(button.value === 'red') {
        buttonsRed()

    } else if(button.value === 'green') {
        buttonsGreen()

    } else if (button.value === 'reset') {
        buttonColorReset()

    } else if(button.value === 'random') {
        randomColors()
    }
}

function buttonsRed() {
    for(let i=0; i< all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add('btn-danger')
    }
}

function buttonsGreen() {
    for(let i=0; i< all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add('btn-success')
    }
}

function buttonColorReset() {
    for(let i=0; i< all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add(copyAllButtons[i])
    }
}
function randomColors() {
    var choice = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success']

    for (let i = 0; i < all_button.length; i++) {
        let random = Math.floor(Math.random() * 4)
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add(choice[random])
    }

}
