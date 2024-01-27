/**
 * THIS CLASS SHOULD GET REMOVED BY THE MINIMUM DELIVERABLE
 */
class LevelOne {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.levelOne = this;

        this.spritesheet2 = ASSET_MANAGER.getAsset("./otherTiles.png");

        this.animator2 = new Animator(this.spritesheet2, 91, 58, 16, 16, 1, 0.1);

        this.spritesheet = ASSET_MANAGER.getAsset("./redtiles.png");


        this.animator = new Animator(this.spritesheet, 62, 0, 16, 16, 1, 0.1);


    


    };

    loadAnimations() {

    }


    draw(ctx) {

        for (let i = 0; i < 22; i++) {
            for (let j = 0; j < 30; j++) {
                const row = this.x + j * 32;
                const col = this.y +i * 32;
                ctx.strokeStyle = 'white';
                ctx.strokeRect(row, col, 32, 32);
                this.animator.drawFrame(this.game.clockTick, ctx, row, col, 2);
            }
        }
    };

    update() {
       // this.x += this.speed * this.game.clockTick;
    };
}