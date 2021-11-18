var bg, sleep, brush, gym, eat, drink, move, shower, astronaut;

function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  move = loadAnimation("move1.png", "move2.png");
  shower = loadAnimation("bath1.png", "bath2.png");
}

function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut = createSprite(300, 200);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}
 


function draw() {

  background(bg);  
  drawSprites();
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym", gym);
    astronaut.changeAnimation("gym");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("shower", shower);
    astronaut.changeAnimation("shower");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 250;
    astronaut.velocityX = 0.3;
    astronaut.velocityY = -0.3;
  }

  if(keyDown("M")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  

}