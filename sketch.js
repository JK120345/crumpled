
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var pa;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paper = Bodies.circle(200,100,20,{restitution: 0.1,friction:0.5,density:1.2});
	paper.image=loadImage("paper.png");
    World.add(world,paper);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  image(paper.image, paper.position.x, paper.position.y,70, 70);
  groundObject.display();
  dustbinObj.display();


}
 function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper,paper.position,{x:75,y:-105});
	
	  }
 }

