class Bone {

    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/bones.png");
        this.animator = new Animator(this.spritesheet, 0, 0, 47, 45, 4, 0.4);

       this.updateBB();
    };

    updateBB() {
        // will need to add more when bones rotate and scale
        this.BB = new BoundingCircle(this.x + 50 / 2 , this.y + 54 / 2, 15);
    }

    update() {
        // if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
       // this.updateBB();
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    };

    update() {
        //if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
    };


}