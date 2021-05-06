var mario, marioimg,backimg,back;
var ground,groundimg
var ground1
var ob1,ob2,ob3,ob4,obstacle;
var score=0
var obstacleG
var gameover,gameoverimg
var play,end
var gamestate=play

                  
function preload(){
backimg=loadImage("bg.png")
marioimg=loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png")
groundimg=loadImage("ground2.png")
ob1=loadImage("obstacle1.png")
ob2=loadImage("obstacle2.png")
ob3=loadImage("obstacle3.png")
ob4=loadImage("obstacle4.png")
gameoverimg=loadImage("gameOver.png")
}

function setup(){
createCanvas(600,300)
back=createSprite(200,200,600,300)
back.addImage(backimg)
ground=createSprite(100,295,600,20)
ground.addImage(groundimg)
mario=createSprite(200,230,10,40)
mario.addAnimation("running",marioimg)
mario.scale=1.7
ground.velocityX=-3
ground1=createSprite(50,270,600,20)
ground1.visible=false
obstacleG=new Group()
gameover=createSprite(300,50)
gameover.addImage(gameoverimg)
}

function draw(){
background(0)
score=score+1
if(gamestate==play){
console.log(mario.y)
if(ground.x<0){
ground.x=ground.width/2
}
if(keyDown ("space")&&mario.y>=220){
mario.velocityY=-13
}
mario.velocityY=mario.velocityY+0.7
spawnobstacles()
if(obstacleG.isTouching(mario)){
gamestate=end
}
}
else if(gamestate===end){
ground.velocityX=0
score=0
obstacleG.setVelocityXEach(0)
}
mario.collide(ground1)

drawSprites()
textSize(20)
fill("red")
text("score="+score,400,40)
}

function spawnobstacles(){
if(frameCount%100===0){
obstacle=createSprite(500,230,20,20)
obstacle.velocityX=-4
obstacle.lifetime=300
var r =Math.round(random(1,4))
switch(r){
  case 1:obstacle.addImage(ob1)
  break;
  case 2:obstacle.addImage(ob2)
  break;
  case 3:obstacle.addImage(ob3)
  break;
  case 4:obstacle.addImage(ob4)
  break;
}
obstacleG.add(obstacle)
}  
}
