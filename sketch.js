const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var snow,backgroundimg
snow=[]
var engine,world
function preload() {
  backgroundimg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine=Engine.create();
  world=engine.world;
}

function draw() {
  background(backgroundimg);  
  Engine.update(engine)
  if(frameCount%60===0){
    snow.push(new Snow(random(width-2000,width),random(10,300),100,100))
  }
  for(var i =0;i <snow.length;i++){
    snow[i].display();
  }
  drawSprites();
}