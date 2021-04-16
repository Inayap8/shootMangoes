class stone{
    constructor(x,y){
        this.x=x
        this.y=y
        this.r=10
        this.h=20
        this.img=loadImage("Plucking mangoes/stone.png")
        this.body=Bodies.circle(x,y,this.r,{restitution:0,density:1,friction:0.5})
        World.add(world,this.body)
    }
    Display(){
    push()
  
    var a=this.body.position
    translate(a.x,a.y)
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.img,0,0,this.r*2,this.r*2)
    //ellipseMode(RADIUS)
   // ellipse(0,0,this.r)
    pop()
    }

}