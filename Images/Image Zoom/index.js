imgZoom('myimg', 'myresult')


function imgZoom(imgID, resultID) {
    var img, lens, result, cx, cy

    img = document.getElementById(imgID)
    result = document.getElementById(resultID)
    lens = document.createElement('div')
    lens.setAttribute('class', 'img-zoom-lens')


    img.parentElement.insertBefore(lens, img)

    cx = result.offsetWidth / lens.offsetWidth
    cy = result.offsetHeight / lens.offsetHeight
    console.log(cx, cy)
    console.log(result.offsetHeight, lens.offsetHeight)
    console.log(result.offsetWidth, lens.offsetWidth)


    result.style.backgroundImage = `url("${img.src}")`
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`
    console.log(result.style.backgroundSize)

    lens.addEventListener('mousemove', moveLens)
    img.addEventListener('mousemove', moveLens)

    function moveLens(e) {
        var pos, x, y;
        e.preventDefault()

        pos = getCursorPos(e)
        console.log(pos)

        x = pos.x - (lens.offsetWidth / 2)
        y = pos.y - (lens.offsetHeight / 2)

        if (x > img.width - lens.offsetWidth) {
            x = img.width - lens.offsetWidth
        }
        if (x < 0) {
            x = 0
        }
        if (y > img.height - lens.offsetHeight) {
            y = img.height - lens.offsetHeight
        }
        if (y < 0) {
            y = 0
        }


        lens.style.left = x + 'px'
        lens.style.top = y + 'px'
        console.log(lens.style.left, lens.style.top)

        result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`
        console.log(result.style.backgroundPosition)
    }


    function getCursorPos(e) {
        var a, x = 0,
            y = 0
        e = e || window.event
        console.log(e)

        a = img.getBoundingClientRect()
        console.log(a)

        x = e.pageX - a.left
        y = e.pageY - a.top
        console.log(x, y)

        console.log(window.pageXOffset, window.pageYOffset)
        x = x - window.pageXOffset
        y = y - window.pageYOffset
        console.log(x, y)

        return {
            x: x,
            y: y
        }
    }
}