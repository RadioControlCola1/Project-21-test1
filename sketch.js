
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);
	// 800,700

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic : false,
		restitution:0.3,
		friction:0,
		denstity:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(100,10,20,ball_options);
  	World.add(world,ball);

	groundObj = new ground(width/2,670,width,20);
	World.add(world,groundObj);

	leftSide = new ground(1100,600,20,120);
	World.add(world,leftSide);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  groundObj.display();
  leftSide.display();

  Engine.update(engine);
  
  drawSprites();
 
}



