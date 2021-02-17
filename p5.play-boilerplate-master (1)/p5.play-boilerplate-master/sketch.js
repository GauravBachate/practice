const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
var object
var ground
function setup() {
  createCanvas(800,400);
  engine = Engine.create ()
  world = engine.world
  var proper = {
    isStatic: true
  }
  var bounce = {
    restitution : 5
  }
  object = Bodies.rectangle (300,300,20,20,bounce);
  World.add (world,object)
  ground = Bodies.rectangle (400,350,800,10,proper)
  World.add (world,ground)
}

function draw() {
  background(255,255,255); 
  Engine.update (engine) 
  rectMode (CENTER)
  rect (object.position.x,object.position.y,20,20)
  rect (ground.position.x,ground.position.y,800,10)
  drawSprites();
}