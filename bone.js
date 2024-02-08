class Bone {

    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./bones.png");
        this.animator = new Animator(this.spritesheet, 0, 0, 47, 45, 4, 0.4);

       // this.updateBB();
    };


    update() {
        // if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
       // this.updateBB();
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 0.3, true);
    };

    update() {
        if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
    };


}