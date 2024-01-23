class Lymphocyte {

    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.animator = new Animator(ASSET_MANAGER.getAsset("LymphocyteEdited.png"), 0, 0, 160, 160, 3, 0.45);

        this.dead = false;

        this.speed = 100;

        this.fireRate = 5;
        this.elapsedTime = 0;
    };

    draw(ctx) {
        //Lymphocytes two states are ALIVE (and shooting) or DEAD (and not shooting)
        if (this.dead) {
            this.animator = new Animator(ASSET_MANAGER.getAsset("LymphocyteEdited.png"), 640, 0, 160, 160, 1, 1);
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        } else {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            if (this.elapsedTime > this.fireRate) {
                this.game.addEntity(new Antibody(this.game, this.x, this.y+50, 0))
                this.elapsedTime = 0;
            //     this.antibody = new Animator(ASSET_MANAGER.getAsset("antibody.png"), 0, 0, 126, 92, 7, .1);
            //     this.antibody.drawFrame(this.game.clockTick, ctx, this.x, this.y+50);
            }
        }
    };

    update() {
        if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
    };
}