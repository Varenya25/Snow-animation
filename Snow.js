class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.snow = loadImage("snow4.webp");
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
    }
    display() {
        
        image(this.snow, 200, 20);
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};