class mango{
    constructor(x,y){
        this.x=x
        this.y=y
       
        this.img=loadImage("Plucking mangoes/mango.png")
    this.r=20
    this.h=40
    this.body=Matter.Bodies.circle(this.x,this.y,this.r,{isStatic:true,restitution:0,fricton:1,density:0.5})
 World.add(world,this.body)
    }
Display(){
push()
 var mp=this.body.position
translate(mp.x,mp.y)
rotate(this.body.angle)
imageMode(CENTER)
image(this.img,0,0,this.r*2,this.r*2)
//ellipseMode(RADIUS)
//ellipse(0,0,this.r)
    pop()
}}