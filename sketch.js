const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball;
var ball2;
var ball3;
var ball4;
var ball5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(320, 350, 10);
	World.add(world, ball);	

	ball2 = Bodies.circle(360, 350, 10);
	World.add(world, ball2);

	ball3 = Bodies.circle(400, 350, 10);
	World.add(world, ball3);

	ball4 = Bodies.circle(440, 350, 10);
	World.add(world, ball4);

	ball5 = Bodies.circle(480, 350, 10);
	World.add(world, ball5);

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
	ellipse(ball.position.x, ball.position.y, 40);
	ellipse(ball2.position.x, ball2.position.y, 40);
	ellipse(ball3.position.x, ball3.position.y, 40);
	ellipse(ball4.position.x, ball4.position.y, 40);
	ellipse(ball5.position.x, ball5.position.y, 40);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
