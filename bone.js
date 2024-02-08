class Bone {

    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.animator = new Animator(ASSET_MANAGER.getAsset("bones.png"), 0, 0, 163, 202, 3, 0.4);
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.3, true);
    };

    update() {
        if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
    };
}