// gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce'})


// gsap.from('.link', {duration: 2, opacity: 0, delay: 1, stagger: .5})

// gsap.from('.right', { duration: 2, x: '-100vw', delay: 1, ease: 'power2.in'})

// gsap.from('.left', {duration: 1, delay: 2, x: '-100%'})

// gsap.to('.footer', {duration:1,  y: 0, ease: 'elastic', delay : 2.5})

// gsap.fromTo('.button', { opacity: 0, sacle:0, rotation: 720,}, {duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0})










const timeLine = gsap.timeline({ defaults: {duration: 1 }})

timeLine
.from('.header', { y: '-100%', ease: 'bounce' })
.from('.link', { opacity: 0, stagger: .5 })
.from('.right', { x: '-100vw', ease: 'power2.in'}, 1)
.from('.left', { x: '-100vw'}, '<.5')
.to('.footer', { y: 0, ease: 'elastic' })
.fromTo('.button', { opacity: 0, sacle:0, rotation: 720,}, { opacity: 1, scale: 1, rotation: 0})


const button = document.querySelector('.button')
    button = addEventListener("click", () => {
        timeLine.reverse()
        timeLine.timeScale(2)
    })