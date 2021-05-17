const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;



var snow =[];
var bg1, santa, santaImg;
var engine;
var world;
var chymes;

function preload(){
  bg1 = loadImage('snow1.jpg');
  santaImg = loadImage('Santa-Sleigh-PNG.png');
  chymes = loadSound('Service-bell-sound-effect.mp3');

   
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(bg1,'white');
  Engine.update(engine);  
  
  
  //pushing Snow to snow
  if(frameCount%1.5 === 0){
    snow.push(new Snow(random(50 , 750) ,0));
  }  

  //display Snow 
  for (var l = 0; l < snow.length; l++) {
    snow[l].display();
  }

  //display santa when left arrow is pressed
  if(keyWentDown('space')){
    santaM();
  }
 
  drawSprites();
}
function santaM(){
  santa = createSprite(0, 300, 50, 100);
  santa.addImage('theSanta',santaImg);
  santa.velocityX = 2;
  chymes.play();


}