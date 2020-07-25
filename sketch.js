const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var rectangle;
var red1;
var red2;
var red3

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)
    red1 = new Rectangle(80,330,10,50);
    red2 = new Rectangle(90,335,70,10);
    red3 = new Rectangle(250.350,10,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    rectangle.display();
    red1.display();
    red2.display();
    red3.display();
}