const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['rgb(238, 130, 238)', 'rgb(75,0,130)', 'rgb(0,191,255)', 'rgb(124,252,0)', 'rgb(255,255,0)', 'rgb(255,165,0)', 'rgb(255,0,0)']
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
        event.preventDefault()
        screens[0].classList.add('up')
})

timeList.addEventListener('click', event =>
 {
    if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
         }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains
        ('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})


function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
    if (current < 10) {
        current = `0${current}`
    }
    setTime(current)
    }
}
    
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
    if (time === 60) {
        timeEl.innerHTML = `01:00`
    }
  }
  function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Your Score: <span class="primary">${score}</h1>`
  }

  function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
    
    circle.style.backgroundColor = colors[getRandomNumber(0, 6)]

}

  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min)
  }


  document.querySelector('.restart-btn').addEventListener('click', function(){
    timeEl.parentNode.classList.add('hide')
    window.location.reload();
    return false;
  });