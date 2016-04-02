var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var carRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var p1rightPressed = false;
var p1leftPressed = false;
var drawCounter = 0;
var difficulty = .5;
var obstacles = [];

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) { // right arrow
        p1rightPressed = true;
    }
    else if(e.keyCode == 37) { // left arrow
        p1leftPressed = true;
    }
    else if(e.keyCode == 88) { // x
        p2rightPressed = true;
    }
    else if(e.keyCode == 90) { // z
        p2leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        p1rightPressed = false;
    }
    else if(e.keyCode == 37) {
        p1leftPressed = false;
    }
    else if(e.keyCode == 88) { // x
        p2rightPressed = false;
    }
    else if(e.keyCode == 90) { // z
        p2leftPressed = false;
    }
}



function drawCar () {
  ctx.beginPath();
  ctx.beginPath();
  ctx.arc(x, y, carRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function sendObstacle() {
    // console.log(250/difficulty);
    box = {
      x: Math.floor((Math.random() * canvas.width) ),
      y: -10,
      h: Math.floor((Math.random() * 30) + 20),
      l: Math.floor((Math.random() * 30) + 20)
    };
    obstacles.push(box);
}


function drawObstacles() {

  for (i=0 ; i < obstacles.length; i++) {
    ctx.beginPath();
    ctx.rect(obstacles[i].x , obstacles[i].y , obstacles[i].l, obstacles[i].h);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.closePath();
    obstacles[i].y += 5;
    if (obstacles[i].y > canvas.height) {
      obstacles.splice(i, 1);
    }
  }
}

function checkCollision() {

  for (i=0 ; i < obstacles.length; i++) {
    var curr = obstacles[i];

  }

}

function draw () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCar();

  if (drawCounter > 150/difficulty) {
    console.log(250/difficulty);
    console.log(obstacles);
    sendObstacle();
    difficulty += .1;
    drawCounter = 0;
  }

  drawObstacles();
  checkCollision();

  if(p1rightPressed && x < canvas.width - carRadius){
    x += 10;
  }
  else if (p1leftPressed && x > 0 + carRadius) {
    x -= 10
  }


  drawCounter ++;
  // console.log(drawCounter);
}

setInterval(draw, 10);
