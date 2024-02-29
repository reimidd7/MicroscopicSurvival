class Lymphocyte {

    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./LymphocyteEdited.png");

        this.animation = new Animator(this.spritesheet, 0, 0, 160, 160, 3, 0.45);

        this.dead = false;
        this.healthpoints = 4;

        this.speed = 50;

        this.fireRate = 80;
        this.elapsedTime = 0;
        this.updateBB();

        this.deadTimer = 0;
    };

    decreaseHealth() {
        this.healthpoints -= 1;
    };

    updateBB() {
        this.BB = new BoundingCircle(this.x + 80 / 2, this.y + 80 / 2, 32);
    }

    update() {
        //if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;
        //this.updateBB();

        if (this.dead && this.deadTimer < 200) {
            this.deadTimer++;
            //console.log("got to deadtimer inc");
        } else if (this.dead && this.deadTimer != 0 && this.deadTimer >= 200) {
            this.removeFromWorld = true;
            this.deadTimer = 0;
            //console.log("got to deadtimer reset");
        }
    };

    drawMinimap(ctx, mmX, mmY) {
        ctx.fillStyle = "Purple";
        ctx.beginPath();
        ctx.arc(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, PARAMS.SCALE, 0, Math.PI * 2);
        ctx.fill();
    }
    

    draw(ctx) {
        //Lymphocytes two states are ALIVE (and shooting) or DEAD (and not shooting)
        var adjustedx = this.x - this.game.camera.x;
        var adjustedy = this.y - this.game.camera.y;

        if (this.dead) {
            this.animation = new Animator(this.spritesheet, 640, 0, 160, 160, 0.65, 0.3);

        } else {
            if (this.elapsedTime > this.fireRate) {
                for (var i = 0; i < this.game.entities.length; i++) {
                    var micro = this.game.entities[i];
                    if (micro instanceof Micro && this.elapsedTime > this.fireRate) {
                        if (!micro.dead) {
                        this.game.addEntity(new Antibody(this.game, this.x-30, this.y-25, micro));

                        this.elapsedTime = 0;
                        }
                    }
                }
            }
            this.elapsedTime++;
            // this.animation.drawFrame(this.game.clockTick, ctx, adjustedx, adjustedy, .5, 1, true);
            // this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, .5, 1, true);

        }
        this.animation.drawFrame(this.game.clockTick, ctx, adjustedx, adjustedy, .45, 0.65, true);

        if (PARAMS.DEBUG) {
        ctx.beginPath();
        ctx.arc(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'red';
        ctx.stroke();
        }
    };

};
