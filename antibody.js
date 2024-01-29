class Antibody {

    constructor(game, x, y, target) {
        Object.assign(this, {game, x, y, target});

        this.removeFromWorld = false;

        this.spritesheet = ASSET_MANAGER.getAsset("antibody.png");

        this.elapsedTime = 0;

        this.x = x;
        this.y = y;

        this.target = target;

        this.speed = 300;

        // to make antibody head toward Micro (for later)
        var dist = getDistance(this, this.target);   
        this.velocity = {x : (this.target.x - this.x) / dist * this.speed, y : (this.target.y - this.y) / dist * this.speed };
        
        this.facing = getFacing(this.velocity); //0 = N, 1 = NE, 2 = E, 3 = SE, 4 = S, 5 = SW, 6 = W, 7 = NW

        this.cache = [];
        this.animator = new Animator(this.spritesheet, 0, 0, 126, 92, 7, 0.1);
    };

    //ADAPTED FROM PROFESSOR MARRIOTT'S TOWER-DEFENSE-DEMO CODE (ARROW CLASS)
    drawAngle(ctx, angle) {
        if (angle < 0 || angle > 359) return;

        var xOffset = 100;
        var yOffset = 65;

        if (!this.cache[angle]) {
           let radians = angle / 360 * 2 * Math.PI;
           let offscreenCanvas = document.createElement('canvas');

            if (this.facing == 0) {
                offscreenCanvas.width = 200;
                offscreenCanvas.height = 130;
                
                xOffset = 100;
                yOffset = 65;
            } else if (this.facing == 1) {
                offscreenCanvas.width = 240;
                offscreenCanvas.height = 280;

                xOffset = 100;
                yOffset = 65;
            } else if (this.facing == 2) {
                offscreenCanvas.width = 238;
                offscreenCanvas.height = 300;
                xOffset = 20;
                yOffset = 100;
            } else if (this.facing == 3) {
                offscreenCanvas.width = 236;
                offscreenCanvas.height = 250;
                xOffset = 50;
                yOffset = 30;
            } else if (this.facing == 4) {
                offscreenCanvas.width = 234;
                offscreenCanvas.height = 270;
                xOffset = 100;
                yOffset = 65;
            } else if (this.facing == 5) {
                offscreenCanvas.width = 220;
                offscreenCanvas.height = 240;
                xOffset = 100;
                yOffset = 65;
            }  else if (this.facing == 6) {
                offscreenCanvas.width = 230;
                offscreenCanvas.height = 300;
                xOffset = 100;
                yOffset = 65;
            }  else if (this.facing == 7) {
                offscreenCanvas.width = 228;
                offscreenCanvas.height = 300;
                xOffset = 102;
                yOffset = 160;
            }
            let offscreenCtx = offscreenCanvas.getContext('2d');

            offscreenCtx.save();
            offscreenCtx.translate(126, 126);
            offscreenCtx.rotate(radians);
            offscreenCtx.translate(-126, -126);
            offscreenCtx.drawImage(this.spritesheet, 126, 92);
            //this.animator.drawFrame(this.game.clockTick, offscreenCtx, this.x, this.y, 1);
            offscreenCtx.restore();
            this.cache[angle] = offscreenCanvas;
        }

        ctx.drawImage(this.cache[angle], this.x - xOffset, this.y - yOffset);
    };

    draw(ctx) {
        // this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        // this.facing = getFacing(this.velocity);

        // console.log(this.animator);
        // console.log(this.facing);

        // if (this.facing == 4) {
        //     this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        // } else {
        //     ctx.save();
        //     if (this.facing == 0) { 
        //         ctx.scale(-1, -1);
        //     } else if (this.facing == 1) {
        //         ctx.scale(-1, -1);
        //     } else if (this.facing == 2) {
        //         ctx.scale(-1, 1); //or maybe the other way around???
        //     } else if (this.facing == 3) {
        //         ctx.scale(1, 1);
        //     } else if (this.facing == 5) {
        //         ctx.scale(-1, 1);
        //     } else if (this.facing == 6) {
        //         ctx.scale(-1, 1);
        //     } else if (this.facing == 7) {
        //         ctx.scale(-1, 1);
        //     } 
        //     this.rotateAntibody(this.facing, ctx);

        //     //this should changed based on rotation too?
        //     //this.animator.drawFrame(this.game.clockTick, ctx, (this.x), this.y, 1);
        //     ctx.restore();
        // }     

        let angle = Math.atan2(this.velocity.y , this.velocity.x);
        if (angle < 0) angle += Math.PI * 2;
        let degrees = Math.floor(angle / Math.PI / 2 * 360);

        this.drawAngle(ctx, degrees);
    };

    // rotateAntibody(facing, ctx) {
    //     let x = this.x;
    //     let y = this.y;
    //     let w = 126;
    //     let h = 92;

    //     let rotateVal = (facing/4) * Math.PI;  //need to account for negatives

    //     var offscreenCanvas = document.createElement('canvas');
    //     offscreenCanvas.width = 126;
    //     offscreenCanvas.height = 126;

    //     var offscreenCtx = offscreenCanvas.getContext('2d');
    //     offscreenCtx.save();
    //     offscreenCtx.translate(63, 63);
    //     offscreenCtx.rotate(rotateVal);
    //     offscreenCtx.translate(-63, -63);
    //     offscreenCtx.drawImage(this.spritesheet, 126, 92); //check this
    //     offscreenCtx.restore();

    //     ctx.drawImage(offscreenCanvas, x, y, w, w);
    // };

    update() {        
        //updates based on Micro's location
        this.x += this.velocity.x * this.game.clockTick;
        this.y += this.velocity.y * this.game.clockTick;

        for(var i = 0; i < this.game.entities.length; i++) {
            var micro = this.game.entities[i];
            if (micro instanceof Micro && collide(this, micro)) {
                this.removeFromWorld = true;
            }
        }

        this.elapsedTime += this.game.clockTick;
        this.facing = getFacing(this.velocity);

        console.log("facing: " + this.facing);
    };

}
