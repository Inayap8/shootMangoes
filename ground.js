class Ground{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.body=Matter.Bodies.rectangle(x,y,w,h,{isStatic:true} );
    World.add(world, this.body);

}
Display(){
    push()
    
    translate(this.body.position.x,this.body.position.y)
    rectMode(CENTER)
    fill("green")
    rect(0,0,this.w,this.h)
    pop()
}
}

    
