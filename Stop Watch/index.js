




const start = document.getElementById('start');
const rest = document.getElementById('rest');
const pause = document.getElementById('pause');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');


start.addEventListener('click',  startF);
reset.addEventListener('click',  resetF);
pause.addEventListener('click',  pauseF);

let min;
let sec = 0;
let timer ;
let watch = false


function startF() {
    console.log('Time counting started')

    if(!watch) {
        watch = true

        timer = setInterval(() => {
            sec++
            
            let { min, second}= getTime(sec)
            minutes.textContent = min < 10 ? (`0 ${min}`) : min
            seconds.textContent = second < 10 ? (`0 ${second}`) : second
        }, 1000);
    }
}


function resetF() {
    console.log('Time has Reset')
    clearInterval(timer)

    min = 0;
    sec = 0;

    minutes.textContent = '00'
    seconds.textContent = '00'

    watch = false
}


function pauseF() {
    console.log('Time has paused')

    clearInterval(timer)
    watch = false

}



function getTime(s) {
    min = parseInt(s/60)
    let second = parseInt(s % 60)
    
    return {min, second}
}


