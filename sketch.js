var bgl, sleepl, brushl, gyml, eatl, drinkl, move;
var bg,astro;

function preload() {
  bgl = loadImage("iss.png")
  sleepl = loadAnimation("sleep.png")
  brushl = loadAnimation("brush.png")
  gyml = loadAnimation("gym1.png","gym2.png")
  eatl = loadAnimation("eat1.png","eat2.png")
  drinkl = loadAnimation("drink1.png","drink2.png")
  move = loadAnimation("mo.png","mo2.png")

}


function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200, 50, 50);
  bg.addImage(bgl)
  bg.scale = 0.2
  astro = createSprite(400, 200, 50, 50);
  astro.addAnimation("sleep",sleepl)
  astro.scale = 0.1
  edges = createEdgeSprites()
}

function draw() {
  background(255,255,255);
  if (keyDown(UP_ARROW)){
    astro.addAnimation("brush",brushl)
    astro.changeAnimation("brush")
    astro.y = 300
    astro.velocityX = 0
    astro.velocityY = 0
  }
  if (keyDown(DOWN_ARROW)){
    astro.addAnimation("gym",gyml)
    astro.changeAnimation("gym")
    astro.y = 300
    astro.velocityX = 0
    astro.velocityY = 0
  }
  if (keyDown(LEFT_ARROW)){
    astro.addAnimation("eat",eatl)
    astro.changeAnimation("eat")
    astro.y = 300
    astro.velocityX = 0
    astro.velocityY = 0
  }
  if (keyDown(RIGHT_ARROW)){
    astro.addAnimation("drink",drinkl)
    astro.changeAnimation("drink")
    astro.y = 300
    astro.velocityX = 0
    astro.velocityY = 0
  }
  if (keyDown("M")){
    astro.addAnimation("move",move)
    astro.changeAnimation("move")
    astro.velocityX = 3
    astro.velocityY = 4
  }
  astro.bounceOff(edges)


  drawSprites();
  fill("white")
  textSize(15)
  text(" Up Arrow: Brushing\n Down Arrow: Exercise\n Left Arrow: Eating\n Right Arrow: Drinking\n M Key: Moving", 25, 25)
}