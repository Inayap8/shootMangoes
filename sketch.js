
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,tree,tree1,boy,boy1,stone1;
var mango1, mango2, mango3, mango4, mango5, mango6,attachment
function preload()
{
	tree=loadImage("Plucking mangoes/tree.png")
	boy1=loadImage("Plucking mangoes/slingshotBoy.png")
}

function setup() {
	createCanvas(1500, 700);
	
	engine = Engine.create();
	world = engine.world;

boy=createSprite(300,600,20,20)
boy.addImage(boy1)
boy.scale=0.6

	tree1=createSprite(1150,500,30,30)
	tree1.addImage(tree)
	tree1.scale=0.3
ground=new Ground(700,690,1500,20)
mango1=new mango(1058,400)
mango2=new mango(1200,400)
mango3=new mango(1200,480)
mango4=new mango(1270,440)
mango5=new mango(1058,480)
mango6=new mango(1130,440)
mango7=new mango(1130,372)
stone1=new stone(338,575)
attachment=new Constraint(stone1.body,{x:338,y:570})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#7DC3FE");
 textSize(20)
fill("green")
text("Please press space for another stone",300,150)
  ground.Display()
 
  drawSprites();
  
  mango1.Display()
  mango2.Display()
 mango3.Display()
 mango4.Display()
 mango5.Display()
 mango6.Display()
 mango7.Display()
 stone1.Display()
 attachment.Display()
 
 collision(stone1,mango1)
 collision(stone1,mango2)
 collision(stone1,mango3)
 collision(stone1,mango4)
 collision(stone1,mango5)
 collision(stone1,mango6)
 collision(stone1,mango7)
 
 
}

function collision(lstone,lmango){
	console.log(lmango)
	console.log(lmango,lmango.body,lmango.body.position)
	var mp=lmango.body.position
var 	a=lstone.body.position
  
	var distance=dist(a.x,a.y,mp.x,mp.y)
	if (distance<=lmango.r+lstone.r){
	  Matter.Body.setStatic(lmango.body,false)
	}
  }

  function keyPressed(){
	 if(keyCode==32){
		 Matter.Body.setPosition(stone1.body,{x:338,y:575})
		 attachment.constraint.bodyA=stone1.body
	 } 
  }
	
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
  
  }
  function mouseReleased(){
	attachment.constraint.bodyA=null
  }





