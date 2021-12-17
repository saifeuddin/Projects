




const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('progress');



function showtime() {
    let date = new Date()

    let hr = date.getHours()
    let mn = date.getMinutes()
    let sec = date.getSeconds()

    hour.textContent = hr
    minute.textContent = mn
    second.textContent = sec


    progress.style.width = (sec/60) * 100 + '%'
}

setInterval(showtime, 1000);



