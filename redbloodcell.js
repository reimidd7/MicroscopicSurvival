class RedBloodCell {

    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.animator = new Animator(ASSET_MANAGER.getAsset("RedBloodCell.png"), 0, 0, 160, 160, 11, 0.2);
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.4, true);
    };

    update() {
        if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
    };

}