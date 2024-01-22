class Cell {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.cell = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./cell.png");
        this.animation = new Animator(this.spritesheet, 2, 63, 32, 32, 3, 0.4, false, true);

        this.velocity = { x: 200, y: 200 };
        this.x = x || Math.random() * 10;
        this.y = y || Math.random() * 10;

        this.radius = 14;
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
        return (this.y + this.radius) > 780;
    }

    update() {
        this.x += this.velocity.x * this.game.clockTick;
        this.y += this.velocity.y * this.game.clockTick;
    
        if (this.collideLeft() || this.collideRight()) {
            this.velocity.x = -this.velocity.x;
            if (this.collideLeft()) this.x = this.radius;
            if (this.collideRight()) this.x = 1025 - this.radius;
        }
    
        if (this.collideTop() || this.collideBottom()) {
            this.velocity.y = -this.velocity.y;
            if (this.collideTop()) this.y = this.radius;
            if (this.collideBottom()) this.y = 780 - this.radius;
        }
    }
    

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);

        const circleX = this.x + this.radius;
        const circleY = this.y + this.radius;

        ctx.beginPath();
        ctx.arc(circleX, circleY, this.radius, 0, 2 * Math.PI, false);
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.closePath();
    }
}
