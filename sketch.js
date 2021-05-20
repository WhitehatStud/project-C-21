var bullet,wall;

var thickness,speed,weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  car=createSprite(50,200,50,50);
  car.shapeColor=color(255);
  car.VelocityX=speed;

  wall=createSprite(1200,200,thickness,width/2);
  wall.shapeColor=color(80,80,80);
 
}

function draw() {

  background(255,255,255);

if(hasCollided(bullet,wall)){
car.VelocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}
if(damage>10){
  wall.shapeColor=color(255,0,0);
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}
  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x
if(bulletRightEdge=>wallLeftEdge){

  return true;
}
return false;
  
}
