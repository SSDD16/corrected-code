var balls = []
var score=0
var bg,ground,redRect1,redRect2,redRect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	platform = createSprite(150, 275, 300, 170);
	platform.shapeColor = "brown"
	redRect1 = new RedZone(800,350,200,20);
	redRect2 = new RedZone(900,310,20,100);
	redRect3 = new RedZone(700,310,20,100);
	
	ball = new Ball(200,50);
	ball1 = new Ball(99,60);
	ball2 = new Ball(200,50);
	ball3 = new Ball(200,50);
	ball4 = new Ball(200,50);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	slingshot = new SlingShot(ball.body,{x:200, y:50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg); 
  textSize(36)
  fill("white")
  text("score:"+score,width-300,50)
 
  
  drawSprites();
 

 platform.display()
  redRect1.display();
  redRect2.display();
  redRect3.display();
 slingshot.display();
 ball.display();
 ball1.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);			 
		}
    
  }

  function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function preload(){
	bg = loadImage("images/bg.jpg")


}




