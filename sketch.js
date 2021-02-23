var   thickness,wall;
var bullet,speed,weight;




function setup() {
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  bullet=createSprite(50,200,50,50);
  wall=createSprite(700,200,thickness,height/2);
  bullet.velocityX=speed;
  
  

 
}

function draw() {
  background(0);  

if(wall.x-  bullet.x < (  bullet.width+wall.width)/2){


  bullet.velocityX=0;
var damage=0.5 * weight *speed* speed/(thickness * thickness * thickness);
if(damage<10)
{

  bullet.shapeColor="green";
  text("bullet is effective against wall",300,200)
}
if(damage<10 )
{
  bullet.shapeColor="red";
  text("bullet is  not effective against wall",300,200)
  

} 
}
  drawSprites();
}