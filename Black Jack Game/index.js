

let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'delar': {'scoreSpan': '#delar-blackjack-result', 'div': '#delar-box', 'score': 0},
    'cards': ['2','3','4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'j', 'A'],
    'cardMap': {'2':2, '3': 3, '4': 4, '5': 5, '6':6, '7':7, '8':8, '9':9, '10': 10, 'K' :10, 'Q': 10, 'j': 10, 'A': [1, 11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand' : false,
    'turnsOver' : false
}


const YOU = blackjackGame['you']
const DELAR = blackjackGame['delar']
console.log(YOU)
console.log(DELAR)


const hitSound = new Audio('sounds/swish.m4a')
const winSound = new Audio('sounds/cash.mp3')
const lostSound = new Audio('sounds/aww.mp3')


document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit)
document.querySelector('#blackjack-stand-button').addEventListener('click', delarLogic)
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal)












function blackjackHit() {

    if(blackjackGame['isStand'] == false) {

        let card = randomCard()
        console.log(card)

        showCard(card, YOU)

        updateScore(card, YOU)
        
        showScore(YOU)

        console.log(YOU['score'])
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    
}

async function delarLogic() {

    blackjackGame['isStand'] = true

    while(DELAR['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = randomCard()
        console.log(card)
        
        showCard(card, DELAR)
        
        updateScore(card, DELAR)
        
        showScore(DELAR)

        await sleep(1000)
        }


    blackjackGame['turnsOver'] = true

    let winner = computeWinner()

    showResult(winner)
}




function randomCard() {

    let randomIndex = Math.floor(Math.random() * 13)
    return blackjackGame['cards'][randomIndex]
}


function showCard(card, activePlayer) {

    if(activePlayer['score'] <= 21) {

        let cardImage = document.createElement('img')
        cardImage.src = "images/"+card+".png"
        document.querySelector(activePlayer['div']).appendChild(cardImage)
        hitSound.play()
    }
}


function updateScore(card, activePlayer) {

    if (card === 'A') {

        if (activePlayer['score'] = blackjackGame['cardMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardMap'][card][1]

        } else {
            activePlayer['score'] += blackjackGame['cardMap'][card][0]
        }

    } else {
        activePlayer['score'] += blackjackGame['cardMap'][card]
    }
}


function showScore(activePlayer) {

    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST'
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red'

    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}








function blackjackDeal() {

    
    if(blackjackGame['turnsOver'] === true) {
        
        blackjackGame['isStand'] = false
        
        let yourImages = document.querySelector('#your-box').querySelectorAll('img')
        let delarImages = document.querySelector('#delar-box').querySelectorAll('img')
        
        for(i=0; i< yourImages.length; i++) {
            yourImages[i].remove()
        }
        
        for(i=0; i < delarImages.length; i++) {
            delarImages[i].remove()
        }
        
        YOU['score'] = 0
        DELAR['score'] = 0
        
        
        document.querySelector(' #your-blackjack-result').textContent = 0
        document.querySelector('#your-blackjack-result').style.color = 'white'
        document.querySelector('#delar-blackjack-result').textContent = 0
        document.querySelector('#delar-blackjack-result').style.color = 'white'
        
        
        document.querySelector('#blackjack-result').textContent = 'Lets Play!'
        document.querySelector('#blackjack-result').style.color = 'black'
        
        blackjackGame['turnsOver'] = true

        console.log(blackjackGame['isStand'])
    }
}



// compute winner and return who win
function computeWinner() {
    let winner 

    if (YOU['score'] <= 21) {

        if(YOU['score'] > DELAR['score'] || DELAR['score'] > 21) {
            blackjackGame['wins']++
            winner = YOU
            
        } else if(YOU['score'] < DELAR['score']) {
            blackjackGame['losses']++
            winner = DELAR
            
        } else if(YOU['score'] === DELAR['score']) {
            blackjackGame['draws']++
        }


    } else if(YOU['score'] > 21 && DELAR['score'] <= 21 ){
        blackjackGame['losses']++
        winner = DELAR

    } else if(YOU['score'] > 21 && DELAR['score'] > 21 ){
        blackjackGame['draws']++
    }

    console.log('Winner is : ' + winner)
    return winner
}



function showResult(winner) {

    let message, messageColor

    if (blackjackGame['turnsOver'] == true) {
        
            if(winner == YOU) {
                document.querySelector('#wins').textContent = blackjackGame['wins']
                message = 'You won'
                messageColor = 'green'
                winSound.play()
                
            } else if(winner == DELAR) {
                document.querySelector('#losses').textContent = blackjackGame['losses']
                message = 'You lost'
                messageColor = 'red'
                lostSound.play()
                
            } else {
                document.querySelector('#draws').textContent = blackjackGame['draws']
                message = 'You drew'
                messageColor = 'black'
            } 
            
            document.querySelector('#blackjack-result').textContent = message
            document.querySelector('#blackjack-result').style.color = messageColor
    }
}





