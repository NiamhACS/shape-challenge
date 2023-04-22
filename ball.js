const ballObj = document.getElementById('ball')
const velObj = document.getElementById('xSpd')
const gravObj = document.getElementById('grav')
const fricObj = document.getElementById('fric')
const bounceObj = document.getElementById('bounce')
const defaultBallX = 50
const defaultBallY = 250
const maxY = 735

let xPosition = defaultBallX
let yPosition = defaultBallY
let xVelocity = 0
let yVelocity = 0
let gravity = 0
let friction = 0
let bounciness = 0
let intervalID

function startBallMotion(){
    //reset sim
    clearInterval(intervalID)
    xPosition = defaultBallX
    yPosition = defaultBallY
    xVelocity = Number(velObj.value)
    yVelocity = 0
    gravity = Number(gravObj.value)/10
    friction = Number(fricObj.value)/5
    bounciness = Number(bounceObj.value)

    setBallPosition(xPosition, yPosition)
    intervalID = setInterval(moveBall, 10)
}

function moveBall(){
    xPosition = xPosition + xVelocity
    yPosition = yPosition + yVelocity
    
    //bounce
    if(yPosition >= maxY){
        yPosition = maxY

        //if barely bouncing, stop, otherwise bounce
        if(Math.abs(yVelocity) < Math.abs(gravity/10)){
            yVelocity = 0
        }
        else{
            yVelocity = yVelocity * -bounciness
        }

        //apply friction
        if(xVelocity >= friction){
            xVelocity = xVelocity - friction
        }
        else{
            xVelocity = 0
        }
    }
    else{
        yVelocity = yVelocity + gravity
    }
    setBallPosition(xPosition, yPosition)
}

function setBallPosition(x, y){
    ballObj.style.left = x + "px"
    ballObj.style.top = y + "px"
}