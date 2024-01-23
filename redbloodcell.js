class RedBloodCell {

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("RedBloodCell.png"), 0, 0, 156, 158, 12, 1);

        this.x = 0;
        this.y = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

    update() {
        this.x += this.speed * this.game.clockTick;
    };
}