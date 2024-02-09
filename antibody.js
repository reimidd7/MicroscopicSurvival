class Antibody {

    constructor(game, x, y, target) {
        Object.assign(this, {game, x, y, target});

        this.removeFromWorld = false;

        this.spritesheet = ASSET_MANAGER.getAsset("./antibody.png");

        this.x = x;
        this.y = y;

        this.target = target;

        this.speed = 30;

        this.radius = 30;

        // to make antibody head toward Micro 
        var dist = getDistance(this, this.target);   
        this.velocity = { x: (this.target.x - this.x-10) / dist * this.speed, y: (this.target.y - this.y-10) / dist * this.speed };
        
        this.facing = getFacing(this.velocity); //0 = N, 1 = NE, 2 = E, 3 = SE, 4 = S, 5 = SW, 6 = W, 7 = NW

        this.cache = [];
        this.animator = new Animator(this.spritesheet, 0, 10, 126, 82, 7, 0.1);
    };

    //ADAPTED FROM PROFESSOR MARRIOTT'S TOWER-DEFENSE-DEMO CODE (ARROW CLASS)
    drawAngle(ctx, angle) {
        this.facing = getFacing(this.velocity);
        if (angle < 0 || angle > 359) return;

        var xOffset = 100;
        var yOffset = 45;

        if (!this.cache[angle]) {
           let radians = angle / 360 * 2 * Math.PI;
           let offscreenCanvas = document.createElement('canvas');

            if (this.facing == 0) {
                offscreenCanvas.width = 250;
                offscreenCanvas.height = 120;
                
                xOffset = 100;
                yOffset = 45;
            } else if (this.facing == 1) {
                offscreenCanvas.width = 230;
                offscreenCanvas.height = 320;

                xOffset = 10;
                yOffset = 25;
            } else if (this.facing == 2) {
                offscreenCanvas.width = 240;
                offscreenCanvas.height = 300;

                xOffset = -10;
                yOffset = -25;
            } else if (this.facing == 3) {
                offscreenCanvas.width = 236;
                offscreenCanvas.height = 250;
                xOffset = 0;
                yOffset = 30;
            } else if (this.facing == 4) {
                offscreenCanvas.width = 200;
                offscreenCanvas.height = 270;
                xOffset = 80;
                yOffset = 70;
            } else if (this.facing == 5) {
                offscreenCanvas.width = 220;
                offscreenCanvas.height = 240;
                xOffset = 0;
                yOffset = 0;
            }  else if (this.facing == 6) {
                offscreenCanvas.width = 276;
                offscreenCanvas.height = 300;
                xOffset = -10;
                yOffset = 10;
            }  else if (this.facing == 7) {
                offscreenCanvas.width = 226;
                offscreenCanvas.height = 280;
                xOffset = 0;
                yOffset = -50;
            }
            let offscreenCtx = offscreenCanvas.getContext('2d');

            //this.animator.drawFrame(this.game.clockTick, offscreenCtx, this.x, this.y, 1, false); //trying to get spritesheet to animate properly
        
            //this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1, false);

            offscreenCtx.save();
            offscreenCtx.translate(126, 126);
            offscreenCtx.rotate(radians);
            offscreenCtx.translate(-126, -126);
            // for (let i = 0; i <= 7; i++) {
            //     offscreenCtx.drawImage(this.spritesheet, 0+(i*126), 0 + (i*92), 126, 92, 126, 92, 126, 92);
            // }
            //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
            
            offscreenCtx.drawImage(this.spritesheet, 0, 0, 126, 92, 126, 92, 126, 92);
            offscreenCtx.restore();
            this.cache[angle] = offscreenCanvas;

            //this.animator = new Animator(this.cache[angle], 0, 10, 126+xOffset, 82+yOffset, 7, 0.1);
                    
        }
        
        ctx.drawImage(this.cache[angle], (this.x - xOffset), (this.y - yOffset));

        //this.animator.drawFrame(this.game.clockTick, ctx, this.x-xOffset, this.y -yOffset, 1, true);

    };

    //ADAPTED FROM PROFESSOR MARRIOTT'S TOWER-DEFENSE-DEMO CODE (ARROW CLASS)
    draw(ctx) {
        let angle = Math.atan2(this.velocity.y , this.velocity.x);
        if (angle < 0) angle += Math.PI * 2;
        let degrees = Math.floor(angle / Math.PI / 2 * 360);

        //for (let i = 1; i <= 7; i++) {
            this.drawAngle(ctx, degrees);
        //}
        
    };

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

        this.facing = getFacing(this.velocity);

        console.log("facing: " + this.facing);
    };

}