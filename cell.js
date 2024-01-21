class Cell {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.cell = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./cell.png")

        this.size = 0; // 0 = regular
        this.facing = 0; // 0 = forward
        this.state = 0; // 0 = idle, 1 = walking
        this.dead = false;

        this.velocity = { x: 0, y: 0 };

        this.x = 200;
        this.y = 200;

        this.animations = [];
        this.loadAnimations();
        this.animation = this.animations[this.state][this.size][this.facing];

        this.radius = 14; // radius of circle
        this.friction = 0.2;
    }

    loadAnimations() {
        for (var i = 0; i < 6; i++) {
            this.animations.push([]);
            for (var k = 0; k < 4; k++) { // four directions
                this.animations[i].push([]);
            }
        }

        // debug
        // this.animations[1][0][0] = new Animator(this.spritesheet, 2, 63, 32, 32, 1, 0.4);
        //Animation to move right
        this.animations[1][0][1] = new Animator(this.spritesheet, 2, 63, 32, 32, 3, 0.4);
        //Animation to move left
        this.animations[1][0][2] = new Animator(this.spritesheet, 2, 63, 32, 32, 3, 0.4);
        //
        //  this.animations[1][0][4] = new Animator(this.spritesheet, 2, 32, 32, 32, 6, 0.4);
    }


    collideLeft() {
        return this.x - this.radius < 0;
    }

    collideRight() {
        return this.x + this.radius > this.game.surfaceWidth;
    }

    collideTop() {
        return this.y - this.radius < 0;
    }

    collideBottom() {
        return this.y + this.radius > this.game.surfaceHeight;
    }

    update() {
        //const WALK is taking precedince over other movements
        const WALK = 100;
        this.velocity.x = 0;
        this.velocity.y = 0;

        // move right
        this.velocity.x = WALK;
        // move left
        this.velocity.x = -WALK;
        // // move up diagonal
         this.velocity.y = -WALK;
        // // move down diagonal
         this.velocity.y = WALK;

        // Update position
        this.x += this.velocity.x * this.game.clockTick;
        this.y += this.velocity.y * this.game.clockTick;

        // Update the states
        if (this.velocity.x > 0) {
            this.facing = 1;
            this.state = 1;
        } else if (this.velocity.x < 0) {
            this.facing = 1;
            this.state = 1;
        } else if (this.velocity.y != 0) {
            this.state = 1;
        } else if (this.velocity.x == 0 && this.velocity.y == 0) {
            this.state = 0;
        } else {

        }

        this.animation = this.animations[this.state][this.size][this.facing];

           // collision with left or right walls
    if (this.collideLeft() || this.collideRight()) {
        this.velocity.x = -this.velocity.x * this.friction;
        if (this.collideLeft()) this.x = this.radius;
        if (this.collideRight()) this.x = this.game.surfaceWidth - this.radius;
    }

    }

    draw(ctx) {
        // Draw the animation
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    
        // Draw the collision circle centered around the cell
        const circleX = this.x + this.radius; 
        const circleY = this.y + this.radius; 
    
        ctx.beginPath();
        ctx.arc(circleX, circleY, this.radius, 0, 2 * Math.PI, false);
        ctx.strokeStyle = 'red'; 
        ctx.stroke();
        ctx.closePath();
    }
    
}
