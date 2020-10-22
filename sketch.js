const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var world,engine;
var person,personImg;
var backgroundImg,groundImg,ground;
var background1,background2;
var dogImg1,dogImg2;

function preload(){
  personImg = loadImage("person.png");

  backgroundImg = loadImage("background1.jpg");

  groundImg = loadImage("street.jpg");

  dogImg1 = loadImage("dog.png");

  dogImg2 = loadImage("dog1.png");
}

function setup() {
  createCanvas(windowWidth-20,windowHeight-20);

  engine = Engine.create();
  world = engine.world;

 // ground = Bodies.rectangle(width/2,500,width,30);
  //World.add(world,ground);

  background1 = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  background1.addImage(backgroundImg);
  background1.velocityX = -6;
  background1.scale= 2.2;
  
  background2 = createSprite(windowWidth*3/2,windowHeight/2,windowWidth,windowHeight);
  background2.addImage(backgroundImg);
  background2.velocityX = -6;
  background2.scale = 2.2;

  person = createSprite(100,windowHeight/2+130,40,100);
  person.addImage(personImg);
  person.scale = 1;
}

function draw() {
  Engine.update(engine);
  background(255);  

  //image(groundImg,ground.position.x,ground.position.y,width,30);

  if (background1.x <-windowWidth/2){
    background1.x = windowWidth/2;
    background2.x = windowWidth*3/2;
  }

  spawnAnimals();

  console.log(frameCount);

  drawSprites();
}

function spawnAnimals(){
  if(frameCount%200===0){
    var animals = createSprite(windowWidth,windowHeight/2+130,20,20);
    animals.velocityX = -2;
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1:animals.addImage(dogImg1);
      break;
      case 2: animals.addImage(dogImg2);
      break;
      default:break;
    }
  }

}