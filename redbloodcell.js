class RedBloodCell {

    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./RedBloodCell.png");
        this.animator = new Animator(this.spritesheet, 0, 0, 65, 52, 12, 0.2);

        this.updateBB();

        // this.x = x;
        // this.y = y;
    };

    updateBB() {
        // will need to add more when bones rotate and scale
        this.BB = new BoundingCircle(this.x + 65 / 2 , this.y + 56 / 2, 20);
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1, true);
        // this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1, true);

        if (PARAMS.DEBUG) {
        ctx.beginPath();
        ctx.arc(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'red';
        ctx.stroke();
        }

    };

    update() {
       // if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
    };

}