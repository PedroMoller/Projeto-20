
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
  var groundConfig = {
    isStatic: true
  }

  var block1Config = {
    restitution: 0.5,
    friction:0.02,
    frictionAir:0,
  }

  var block2Config = {
    restitution: 0.7,
    friction:0.01,
    frictionAir:0.1,
  }

  var block3Config = {
    restitution: 0.1,
    friction:1,
    frictionAir:0.3,
  }

  ground = Bodies.rectangle(200,390,400,20, groundConfig);
  World.add(world,ground);

  block1 = Bodies.circle(220,10,10,block1Config);
  World.add(world,block1);

  block2 = Bodies.rectangle(110,50,10,10,block2Config);
  World.add(world,block2);

  block3 = Bodies.rectangle(350,50,10,10,block3Config);
  World.add(world,block3);

	Engine.run(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  
  background("blue");
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, 400, 20);
  ellipse(block1.position.x, block1.position.y, 10, 10);
  rect(block2.position.x, block2.position.y, 10, 10);
  rect(block3.position.x, block3.position.y, 10, 10);
}
