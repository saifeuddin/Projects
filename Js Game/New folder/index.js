


const initGame = ()=> {
    const startGame = confirm("Shall we play rock , paper or scissors?")
    startGame ? playGame() : alert('Ok, maybe next time')
}



const playGame = ()=> {

    while(true){
        let playerChoice = getPlayerChoice()
        playerChoice = formatPlayerChoice(playerChoice)
        
        if(!playerChoice) {
            decideNotToPlay()
            break
        }

        if(playerChoice === "") {
            invalidChoice()
            continue
        }
        
        playerChoice = evaluatePlayerChoice(playerChoice)
        
        if(!playerChoice) {
            invalidChoice()
            continue
        }

        const computerChoice = getComputerChoice()
        const result = determinedWinner(playerChoice, computerChoice)
        disPlayResult(result)

        if(askToPlayAgain()) {
            continue
            
        } else {
            thanksForPlaying()
            break
        }
    }

}


function getPlayerChoice() {
    return prompt('Please enter rock, paper or scissors.')
}

const formatPlayerChoice = (value) => {

    if (value || value === '') {
        return value.trim().toLowerCase()

    } else {
        return false
    }
}


const invalidChoice = () => {
    alert("You didn't enter any value");
}


const decideNotToPlay = ()=> {
    alert('I guess you changed your mind. Maybe next time.');
}

const evaluatePlayerChoice = (choice) => {

    if (choice == 'rock' ||
    choice == 'paper' ||
    choice == 'scissors') {
        return choice

    } else {
        return false
    }
}




const getComputerChoice = ()=> {
    const randomNumber = Math.floor(Math.random()*3)
    const ary = ['rock', 'paper', 'scissors']
    return ary[randomNumber]
}


const determinedWinner = (player, computer) => {
    const winner = 
    player === computer
        ? 'Tie game' 
        : player === 'rock' && computer === "paper"
        ? `player : ${player}\ncomputer : ${computer}\n computer wins!`
        : player === 'rock' && computer === 'scissors'
        ? `player : ${player}\ncomputer : ${computer}\n player wins!`
        : player  ===  'paper' && computer === 'rock'
        ? `player : ${player}\ncomputer : ${computer}\n player wins!`
        : player  ===  'scissors' && computer === 'rock'
        ? `player : ${player}\ncomputer : ${computer}\n computer wins!`
        : player  ===  'scissors' && computer === 'paper'
        ? `player : ${player}\ncomputer : ${computer}\n plyer wins!`
        : `player : ${player}\ncomputer : ${computer}\n computer wins!`


        return winner
}

const disPlayResult = (result) => {
    alert(result)
}

const askToPlayAgain = () => {
    return confirm('Play again?')
}

const thanksForPlaying = () => {
    alert('Ok, Thanks for playing.')
}


initGame()
