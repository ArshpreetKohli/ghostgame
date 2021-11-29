var towerImg, tower,edges;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost=createSprite(220,440)
  ghost.addImage("ghost",ghostImg)
  ghost.scale=0.35
  climbersGroup=createGroup()
  doorsGroup=createGroup()
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("space")){
      ghost.velocityY=-10

  }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-2
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+1
  }
ghost.velocityY=ghost.velocityY+0.5
edges=createEdgeSprites()
//ghost.collide(edges[3])
doors()
if(climbersGroup.isTouching(ghost)){
  ghost.velocityY=0
  ghost.destroy()
  doorsGroup.destroyEach()
  climbersGroup.destroyEach()
}
if(doorsGroup.isTouching(ghost)){
  ghost.velocityY=0
  ghost.destroy()
  doorsGroup.destroyEach()
  climbersGroup.destroyEach() 
}

    drawSprites()
}
function doors(){
  if(frameCount%300===0){
    door=createSprite(220,260)
door.addImage("door",doorImg)
climber=createSprite(220,330)
climber.addImage("climber",climberImg)
door.velocityY=2
climber.velocityY=2
door.x=Math.round(random(100,400))
climber.x=door.x
climbersGroup.add(climber)
doorsGroup.add(door)
  }
  
}
