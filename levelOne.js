/**
 * THIS CLASS SHOULD GET REMOVED BY THE MINIMUM DELIVERABLE
 */
class LevelOne {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.levelOne = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./redtiles.png");

        this.animator = new Animator(this.spritesheet, 32, 31, 16, 16, 1, 0.1);
    };

    loadAnimations() {

    }

    draw(ctx) {
        for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 32; j++) {
                const row = this.x + j * 32;
                const col = this.y +i * 32;
                //ctx.strokeStyle = 'white';
                //ctx.strokeRect(row, col, 32, 32);
                this.animator.drawFrame(this.game.clockTick, ctx, row, col, 2, true);
            }
        }
    };

    update() {
        // this.x += this.speed * this.game.clockTick;
        const index = this.game.entities.indexOf(this);
        this.game.entities.splice(index, 1);
        this.game.entities.splice(this.game.entities.length, 0, this);
    };
}