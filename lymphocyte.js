class Lymphocyte {

    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.animator = new Animator(ASSET_MANAGER.getAsset("./LymphocyteEdited.png"), 0, 0, 160, 160, 3, 0.45);

        this.dead = false;
        this.healthpoints = 2;

        this.speed = 100;

        this.fireRate = 65;
        this.elapsedTime = 0;
        this.updateBB();
    };

    updateBB() {
        this.BB = new BoundingCircle(this.x + 80 / 2, this.y + 80 / 2, 32);
    }

    update() {
        //if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
        //this.updateBB();

    };

    draw(ctx) {
        //Lymphocytes two states are ALIVE (and shooting) or DEAD (and not shooting)
        var adjustedx = this.x - this.game.camera.x;
        var adjustedy = this.y - this.game.camera.y;
        if (this.dead) {
            this.animator = new Animator(ASSET_MANAGER.getAsset("LymphocyteEdited.png"), 640, 0, 160, 160, 1, 1);
            this.animator.drawFrame(this.game.clockTick, ctx, adjustedx, adjustedy, .5, 1, true);
            // this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, .5, 1, true);

        } else {
            if (this.elapsedTime > this.fireRate) {
                for (var i = 0; i < this.game.entities.length; i++) {
                    var micro = this.game.entities[i];
                    if (micro instanceof Micro && this.elapsedTime > this.fireRate) {
                        //(this.game.entities[this.game.entities.length - 1]).removeFromWorld = true;
                        this.game.addEntity(new Antibody(this.game, this.x, this.y, micro));
                        // this.game.addEntity(new Antibody(this.game, this.x , this.y, micro));

                        this.elapsedTime = 0;
                    }
                }
            }
            this.elapsedTime++;
            this.animator.drawFrame(this.game.clockTick, ctx, adjustedx, adjustedy, .5, 1, true);
            // this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, .5, 1, true);

        }

        ctx.beginPath();
        ctx.arc(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'red';
        ctx.stroke();
    };

}
