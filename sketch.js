
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

var stone,chain,mango,mango1,mango2,moago3,mango4,tree,slingShot,
boy
;

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(110,530,10,30);

	tree = new Tree(600,300,10,30);

	boy = new Boy(200,600,0,0);
	
	mango = new Mango(600,100,30)
	mango1 = new Mango(300,200,30)
	mango2 = new Mango(500,300,30)
	mango3 = new Mango(800,100,30)
	mango4 = new Mango(500,150,30)

	slingShot = new Slingshot(stone.body,{x:110,y:530});

	if (isTouching(stone,mango)) {
		mango.setStatic(false)
	   }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  tree.display()
  boy.display()
  stone.display()
  mango.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()

 
  slingShot.display()
  
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly()
}


