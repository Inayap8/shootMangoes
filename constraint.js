class Constraint{
    constructor(a,b){
        this.constraint=Matter.Constraint.create({
            bodyA:a,pointB:b,length:8,stiffness:0.8
        })
        Matter.World.add(world,this.constraint)
    }

Display(){
    if(this.constraint.bodyA!=null){
    var a=this.constraint.bodyA.position
    var b=this.constraint.pointB
    line(a.x,a.y,b.x,b.y)
    }
}
}