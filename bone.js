class Bone {

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("bones.png"), 420, 190, 224, 162, 1, 1);

        this.x = 0;
        this.y = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

    update() {
        this.x += this.speed * this.game.clockTick;
    };


    //add minor rotation back and forth (more aesthetic)
}