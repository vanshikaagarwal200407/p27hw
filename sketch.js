
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roof1=new Roof(350,150,390,40)
bob1=new bob(200,450,70)
bob2=new bob(270,450,70)
bob3=new bob(340,450,70)
bob4=new bob(410,450,70)
bob5=new bob(480,450,70)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}



