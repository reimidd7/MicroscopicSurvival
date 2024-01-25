class Cell {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.cell = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./cellman.png");
        //Moving right
        //this.animation = new Animator(this.spritesheet, 0, 0, 30, 35, 5, 0.4, false, true);
       
        //Moving left
        this.animation = new Animator(this.spritesheet, 0, 36, 30, 70, 5, 0.4, false, true);

        this.velocity = { x: 100, y: 100 };
        
        // The area the cells spawn from
        this.x = x || 0;
        this.y = y || 0;

        this.radius = 16;
        // base stats for prototype
        // this.health = 1;
        // this.damage = 2;
    }
    //left wall
    collideLeft() {
        return (this.x - this.radius) < 0;
    }
    //right wall
    collideRight() {
        return (this.x + this.radius) > 1025;
    }
    //Top wall
    collideTop() {
        return (this.y - this.radius) < 0;
    }
    //Bottom wall
    collideBottom() {
        return (this.y + this.radius) > 770;
    }

    update() {
        this.x += this.velocity.x * this.game.clockTick;
        this.y += this.velocity.y * this.game.clockTick;
    
        if (this.collideLeft() || this.collideRight()) {
            this.velocity.x = -this.velocity.x;
            if (this.collideLeft()) this.x = this.radius;
            if (this.collideRight()) this.x = 1010 - this.radius;
        }
    
        if (this.collideTop() || this.collideBottom()) {
            this.velocity.y = -this.velocity.y;
            if (this.collideTop()) this.y = this.radius;
            if (this.collideBottom()) this.y = 740 - this.radius;
        }
    }
    

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);

        const circleX = this.x + this.radius; // Center X
        const circleY = this.y + this.radius; // Center Y
    
        ctx.beginPath();
        ctx.arc(circleX, circleY, this.radius, 0, 2 * Math.PI, false);
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.closePath();
    }
}
