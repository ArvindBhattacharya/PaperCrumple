const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, gravity;
var paper, bin1,bin2,bin3, sling, pos;
var wall1,wall2,wall3,wall4;

engine: engine;

function setup(){
  createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    gravity = world.gravity;
  paper = new Paper(50,300,50,50,false);
    pos = {x:50,y:300};
    wall1 = new Paper(600,595,1200,10,true);
    wall2 = new Paper(1195,300,10,600,true);
    wall3 = new Paper(5,300,10,600,true);
    wall4 = new Paper(600,5,1200,10,true);
    bin1 = new Paper(1000,random(250,580),200,10,true);
    bin2 = new Paper(900,bin1.y-100,10,200,true);
    bin3 = new Paper(1100,bin1.y-100,10,200,true);
  sling = new Slingshot(paper.body, pos);
}

function draw(){
    gravity.y = 1;
  background(0,0,0);  
  Engine.update(engine);
  paper.display();
  wall1.display();
      wall2.display();
      wall3.display();
      wall4.display();
    bin1.display();
        bin2.display();
        bin3.display();
    if (paper.body.position.y < 290 || paper.body.position.y > 580){
        sling.fly();
    }
  }

function mouseReleased(){
    sling.fly();
 sling = new Slingshot(paper.body,{x:mouseX,y:mouseY});
}