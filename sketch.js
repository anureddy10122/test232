var bg,bgImg;
var player,playerImg, shooterImg, shooter_shooting;
var zombie
var zombieImg
var ground
var heart1 
var heart2
var heart3
var bulletgroup
var life=3
var zombiegroup
var gameOver
function preload(){
bgImg = loadImage("./assets/bg.jpeg");
playerImg = loadImage("./assets/shooter_1.png");
shootingImg = loadImage("./assets/shooter_1.png");
shooter_shooting = loadImage("./assets/shooter_3.png");
zombieImg = loadImage("./assets/zombie.png");
 heart_1 = loadImage("./assets/heart_1.png")
 heart_2 = loadImage("./assets/heart_2.png")
 heart_3 = loadImage("./assets/heart_3.png")
 gameover = loadImage("./assets/download.jpg")
}

function setup() {
createCanvas(1350,650);
player = createSprite(100,400)
  player.addImage(playerImg)
  player.scale = 0.2
 
  heart1 = createSprite(displayWidth-150,40,20,20)
   heart1.addImage("heart1",heart_1)
  heart1.visible = false
   heart1.scale = 0.4
  
   heart2 = createSprite(displayWidth-100,40,20,20)
   heart2.visible = false
   heart2.addImage("heart2",heart_2)
   heart2.scale = 0.4
  
   heart3 = createSprite(displayWidth-150,40,20,20)
   heart3.addImage("heart3",heart_3)
   heart3.scale = 0.4
zombiegroup = new Group()
bulletgroup = new Group()
   
}

function draw() {
  background(bgImg)
  player.y = mouseY
  spawnObstacles()
if(keyWentDown("space")){
  bullet = createSprite(displayWidth-1150,player.y-13,20,10)
  bullet.velocityX = 20
  bulletgroup.add(bullet)
  player.depth=bullet.depth
  player.depth=player.depth+2
  player.addImage(shooter_shooting)

}
else if(keyWentUp("space")){
  player.addImage(shootingImg)
}


if(zombiegroup.isTouching(bulletgroup)){
  for(var i=0;i<zombiegroup.length;i++){
    if(zombiegroup[i].isTouching(bulletgroup)){
      zombiegroup[i].destroy()
      bulletgroup.destroyEach()
    }
  }
}


if(zombiegroup.isTouching(player)){
  for(var i=0;i<zombiegroup.length;i++){
    if(zombiegroup[i].isTouching(player)){
      zombiegroup[i].destroy()
      life=life-1
    }
     }

}
if(life==2){
  heart2.addImage(heart_2)
}
if(life==1){
  heart1.addImage(heart_1)
}
if(life==0){
  gameOver.addImage(gameover)
}
drawSprites();

}
function spawnObstacles(){
  if (frameCount % 60 === 0) {
    zombie = createSprite(1300,100,40,10);
   zombie.y = Math.round(random(100,600));
   zombie.addImage(zombieImg);
   zombie.scale = 0.15;
   zombie.velocityX = -3;
   zombie.setCollider("rectangle",0,0,400,400)
   
   
   zombie.lifetime = 400;
   
   
   zombiegroup.add(zombie)
  
   }
}