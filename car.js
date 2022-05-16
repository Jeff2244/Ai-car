class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        //call control class to control the car
        this.controls = new Controls();

        //create speed and acceleration so the car looks more real
        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;
    }
    /*update the postion of the car as the arrow key is pressed
    if one of the controls(object, instance of class Controls) property is true, postion will be updated*/
    update() {
        //direction
        if (this.controls.forward) {
            //this.y -= 4; changing car position only looks fake. So:
            this.speed += this.acceleration;
        }
        if (this.controls.reverse) {
            this.speed -= this.acceleration;
        }
        /*if the car is reversing, turning should be different, left and right is switched
        if car is not moving, it shouldn't be able to turn*/
        if (this.speed != 0) {
            const flip = this.speed > 0 ? 1 : -1;
            if (this.controls.left) {
                this.angle += 0.03 * flip;
            }
            if (this.controls.right) {
                this.angle -= 0.03 * flip;
            }
        }

        //some physics, forward: positive speed, reverse: negative speed
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.speed < -this.maxSpeed) {
            this.speed = -this.maxSpeed / 2;
        }
        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }
        if(Math.abs(this.speed)<this.friction){
            this.speed = 0
        }

        //speed builds up when key is pressed longer
        this.y -= Math.cos(this.angle) * this.speed;
        this.x -= Math.sin(this.angle) * this.speed;
    }

    //create function draw
    draw(ctx) {
        ctx.save();
        //turning the car
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);

        //moving the car
        ctx.beginPath();
        ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.fill();
        ctx.restore();
    }
}
