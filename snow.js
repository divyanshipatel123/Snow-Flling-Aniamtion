class Snow{
    constructor(x,y){
     var options={
           isStatic : false,
           restitution: 0.002,
           friction: 0.01
        }
        this.r = 20;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, 20, options);
        this.image = loadImage('snow5.webp')
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        image(this.image,0,0,this.r,this.r)
        pop();
    }

}