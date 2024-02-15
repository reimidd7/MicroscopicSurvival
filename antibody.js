class Antibody {

    constructor(game, x, y, target) {
        Object.assign(this, { game, x, y, target });

        this.removeFromWorld = false;

        this.spritesheet = ASSET_MANAGER.getAsset("./antibody.png");

        this.frame1 = ASSET_MANAGER.getAsset("./antibody1.png");
        this.frame2 = ASSET_MANAGER.getAsset("./antibody2.png");
        this.frame3 = ASSET_MANAGER.getAsset("./antibody3.png");
        this.frame4 = ASSET_MANAGER.getAsset("./antibody4.png");
        this.frame5 = ASSET_MANAGER.getAsset("./antibody5.png");
        this.frame6 = ASSET_MANAGER.getAsset("./antibody6.png");
        this.frame7 = ASSET_MANAGER.getAsset("./antibody7.png");

        this.antibodySprites = [this.frame1, this.frame2, this.frame3, this.frame4, this.frame5, this.frame6, this.frame7];
        //after on frame, do this, after 2 frames, do frame 2

        this.speed = 30;

        this.radius = 30;

        // to make antibody head toward Micro 
        var dist = getDistance(this, this.target);
        this.velocity = { x: (this.target.x - this.x - 10) / dist * this.speed, y: (this.target.y - this.y - 10) / dist * this.speed };

        this.updateBB();

        this.facing = getFacing(this.velocity); //0 = N, 1 = NE, 2 = E, 3 = SE, 4 = S, 5 = SW, 6 = W, 7 = NW

        this.cache = [];
        this.animator = new Animator(this.spritesheet, 0, 10, 126, 82, 7, 0.1);

        this.canvas = document.getElementById("canvas");
        this.snapshot;
    };

    //ADAPTED FROM PROFESSOR MARRIOTT'S TOWER-DEFENSE-DEMO CODE (ARROW CLASS)
    drawAngle(ctx, angle, frameNumber) {
        this.facing = getFacing(this.velocity);
        if (angle < 0 || angle > 359) return;

        var xOffset = 60;
        var yOffset = 60;


        if (this.cache[frameNumber][angle].length == 0) {
            let radians = angle / 360 * 2 * Math.PI;
            let offscreenCanvas = document.createElement('canvas');

            offscreenCanvas.width = 254;
            offscreenCanvas.height = 254;

            let offscreenCtx = offscreenCanvas.getContext('2d');

            //this.animator.drawFrame(this.game.clockTick, offscreenCtx, this.x, this.y, 1, false); //trying to get spritesheet to animate properly

            //this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1, false);

            if (this.facing == 0) {
                var xOffset = 0;
                var yOffset = 450;
            } else if (this.facing == 1) {
                
            } else if (this.facing == 2) {
                
            } else if (this.facing == 3) {
                
            } else if (this.facing == 4) {
                
            } else if (this.facing == 5) {
                var xOffset = 60;
                var yOffset = 60;
            } else if (this.facing == 6) {
                
            } else if (this.facing == 7) {
                
            }

            offscreenCtx.save();
            offscreenCtx.translate(126, 126);
            offscreenCtx.rotate(radians);
            offscreenCtx.translate(-126, -126);

            //attempt - tried changing values/the order too
            // for (let i = 0; i <= 7; i++) {
            //     offscreenCtx.drawImage(this.spritesheet, 0 + (frameNumber * 126), 82, 126, 82, 0, 0, 84, 54);
            // }

            //for reference
            //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

            //working
            offscreenCtx.drawImage(this.antibodySprites[frameNumber], 0, 0, 126, 92, 126, 92, 126, 92);
            offscreenCtx.restore();
            this.cache[frameNumber][angle] = offscreenCanvas;

            //console.log(this.cache[frameNumber][angle]);

        }
        this.snapshot = ctx.getImageData(0, 0, ctx.width, ctx.height);
        //prof said to try focusing on this
        //attempt
        //ctx.drawImage(this.cache[frameNumber][angle], 0 + 126 * frameNumber, 92, 126, 92, (this.x - xOffset) - this.game.camera.x, (this.y - yOffset) - this.game.camera.y, 126, 92);

        //working
        ctx.drawImage((this.cache[frameNumber][angle]), (this.x - xOffset) - this.game.camera.x, (this.y - yOffset) - this.game.camera.y);


        //this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1, false);
        //for reference
        // ctx.drawImage(this.spritesheet, 
        //     this.xStart + this.width*frame, this.yStart,
        //     this.width, this.height,
        //     x, y,
        //     this.width*scale, this.height*scale);
    };

    //ADAPTED FROM PROFESSOR MARRIOTT'S TOWER-DEFENSE-DEMO CODE (ARROW CLASS)
    draw(ctx) {
        let angle = Math.atan2(this.velocity.y, this.velocity.x);
        if (angle < 0) angle += Math.PI * 2;
        let degrees = Math.floor(angle / Math.PI / 2 * 360);

        //made cache into a 2d array to try to get rotations for all 7 frames
        for (let i = 0; i < 8; i++) { // 7 frames
            this.cache.push([]);
            for (var j = 0; j < 360; j++) { // 360 degrees
                this.cache[i].push([]);
            }
        }

        //calls 7 times for all 7 frames in the spritesheet
        for (let k = 0; k < 7; k++) {
            this.drawAngle(ctx, degrees, k);
            ctx.putImageData(this.snapshot, this.x, this.y);
        }

        //this.drawAngle(ctx, degrees, 1);

        this.updateBB();
        
        if (PARAMS.DEBUG) {
            ctx.beginPath();
            ctx.arc(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'red';
            ctx.stroke();
        }

    };

    update() {
        //updates based on Micro's location
        this.x += this.velocity.x * this.game.clockTick;
        this.y += this.velocity.y * this.game.clockTick;

        this.updateBB();

        for (var i = 0; i < this.game.entities.length; i++) {
            var micro = this.game.entities[i];
            if (micro instanceof Micro && collide(this, micro)) {
                this.removeFromWorld = true;
            }
        }

        this.facing = getFacing(this.velocity);

        //console.log("facing: " + this.facing);
    };

    updateBB() {
        //FIX THIS FOR ALL DIRECTIONS!!

        if (this.facing == 0) {
            this.BB = new BoundingCircle(this.x + 90 / 2, this.y + 280 / 2, 20);
        } else if (this.facing == 1) {
            this.BB = new BoundingCircle(this.x + 90 / 2, this.y + 280 / 2, 20);
        } else if (this.facing == 2) {
            this.BB = new BoundingCircle(this.x + 90 / 2, this.y + 280 / 2, 20);
        } else if (this.facing == 3) {
            this.BB = new BoundingCircle(this.x + 90 / 2, this.y + 280 / 2, 20);
        } else if (this.facing == 4) {
            this.BB = new BoundingCircle(this.x + 90 / 2, this.y + 280 / 2, 20);
        } else if (this.facing == 5) {
            this.BB = new BoundingCircle(this.x + 90 / 2, this.y + 280 / 2, 20);
        } else if (this.facing == 6) {
            this.BB = new BoundingCircle(this.x + 90 / 2, this.y + 280 / 2, 20);
        } else if (this.facing == 7) {
            this.BB = new BoundingCircle(this.x + 90 / 2, this.y + 280 / 2, 20);
        }

    };

}