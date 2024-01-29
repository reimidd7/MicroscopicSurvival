class RedBloodCell {

    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.animator = new Animator(ASSET_MANAGER.getAsset("RedBloodCell.png"), 0, 0, 160, 160, 11, 0.2);

        this.x = x;
        this.y = y;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

    update() {
        if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
    };

}