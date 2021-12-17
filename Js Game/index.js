






function rpsGame(yourChoice) {
    console.log( yourChoice)
    var humanChoice, botChoice, result, message

    humanChoice = yourChoice.id
    console.log(`Your Choice is : ${humanChoice}`)
    
    botChoice = numberToChoice(randomNumnber())
    console.log('Bot Choice is: ' + botChoice)
    
    result = decideWinner(humanChoice, botChoice)
    console.log(result)

    message = finalMessage(result)
    console.log(message)

    rpsFrontEnd (humanChoice, botChoice, message)
}


function numberToChoice(n) {
    return ['rock', 'paper', 'scissor'][n]
}


function randomNumnber() {
    return Math.floor(Math.random() * 3)
}


function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock' : {'scissor': 1, 'rock': .5, 'paper': 0},
        'paper' : {'rock': 1, 'paper': .5, 'scissor': 0},
        'scissor' : {'paper': 1, 'scissor': .5, 'rock': 0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][yourChoice]

    return [yourScore, computerScore]
}


function finalMessage([yourScore, computerScore]) {
    if(yourScore == 0) {
        return {'message' : 'You lost', 'color': 'red'}

    } else if(yourScore == .5) {
        return {'message' : 'You tied', 'color': 'yellow'}
        
    } else {
        return {'message' : 'You won', 'color': 'green'}
    }
}



function rpsFrontEnd(hImg, botImg, finalMessage) {
    var imageDatabase = {
        'rock':       document.getElementById("rock").src,
        'paper':     document.getElementById("paper").src,
        'scissor':  document.getElementById("scissor").src
    }
    // Remove all images
    document.getElementById('rock').    remove()
    document.getElementById('paper').   remove()
    document.getElementById('scissor'). remove()

    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='" + imageDatabase[hImg] + "' height=158 width=150 style='box-shadow: 0px 10px 50px rgba(37, 58, 233, 1);'>"

    messageDiv.innerHTML = "<h3 style='color: " + finalMessage['color'] + ";'>" + finalMessage['message'] + "</h1>"

    botDiv.innerHTML = "<img src='" + imageDatabase[botImg] + "' height=158 width=150 style='box-shadow: 0px 10px 50px rgba(37, 58, 233, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(botDiv)
}   