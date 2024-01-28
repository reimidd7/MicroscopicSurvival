class Bone {

    constructor(game, x, y) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("bones.png"), 0, 0, 163, 202, 3, 0.4);

        this.x = x;
        this.y = y;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

    update() {
        if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
    };


    //add minor rotation back and forth (more aesthetic)
}