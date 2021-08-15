class Candy{
    constructor(x,y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.01,
        }
        this.body = Bodies.circle(x, y,r,options);
        this.width = width;
        this.height = height;
        this.r=r;
        this.image=loadImage("Candy.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        //ellipse(pos.x,pos.y,2*this.r,2*this.r)
        image(this.image,0,0,this.r,this.r)
        pop();
      }
}