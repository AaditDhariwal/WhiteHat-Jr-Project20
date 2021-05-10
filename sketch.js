var car, wall;
var speed, weight;
var deformation;

function setup() {
createCanvas(1600,400);

car=createSprite(100,200,45,20);
wall=createSprite(1300,200,30,150);

weight=random(1000,3000);
speed=random(40,60);

deformation=(0.5*weight*speed*speed)/(22500);

car.shapeColor="white";
car.depth=wall.depth+1;
}

function draw() {
background("black");
console.log(deformation);

car.velocityX=random(10,15);

if(wall.x-car.x < car.width/2+wall.width/2){
car.velocityX=0;

checkDeformation();
}
 drawSprites();
}

function checkDeformation(){
  if(deformation<80){
    car.shapeColor="green";
  }
  else if(80<deformation<120){
    if(deformation<120){car.shapeColor="yellow";}
   else if(deformation>120){car.shapeColor="red";}
  }

}
