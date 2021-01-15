let radius = 100;
let x,y;
let score = 0;
let r,g,b;
function setup() {
  createCanvas(windowWidth,windowHeight);
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background('#99AFD7');
  fill(r,g,b);
  noStroke();
  ellipse(x,y,radius*2,radius*2);
  textSize(19)
  fill('#2E5090');
  text("Score:"+ score,10,20);
  textSize(25);
  fill('#FAED27');
  text("GET 100 POINTS",windowWidth/2 - 100,20);
  textSize(19);
  fill('#2E5090')
  text('Radius:'+ radius,10,40);
  if (score > 99) {
    textSize(50);
    fill('red');
    textFont('ComicSansMS');
    text('YOU WON',windowWidth/2-100,windowHeight/2);
  }
}
function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    newCircle();
    score = score + 1
    if (score == 10) {
      radius = radius - (radius * 10/100);
    }
    if (score == 20) {
      radius = radius - 10;
    }
    if (score == 30) {
      radius = radius - 10;
    }
    if (score == 40) {
      radius = radius - 10;
    }
    if (score == 50) {
      radius = radius - 10;
    }
    if (score == 60) {
      radius = radius - 10;
    }
    if (score == 70) {
      radius = radius - 10;
    }
    if (score == 80) {
      radius = radius - 10;
    }
  }
}
function newCircle() {
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}
setInterval(newCircle,1500);