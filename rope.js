class Rope{

constructor(bodyA,pointB,length)
{
var options={
    stiffness:0.005,
    bodyA:bodyA,
    pointB:pointB,
    length:length,
}
this.pointB=pointB
this.rope = Constraint.create(options);
World.add(world,this.rope)
}
display(){
if(this.rope.bodyA){
    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    
function mouseDragged(){
 cutter.Body.setPosition(cutter.body, {x: mouseX , y: mouseY});
}
        
    
}


}
}