class Antibody {
    constructor(game, x, y, target) {
        Object.assign(this, { game, x, y, target });

        this.removeFromWorld = false;

        this.frame1 = ASSET_MANAGER.getAsset("./antibody1.png");
        this.frame2 = ASSET_MANAGER.getAsset("./antibody2.png");
        this.frame3 = ASSET_MANAGER.getAsset("./antibody3.png");
        this.frame4 = ASSET_MANAGER.getAsset("./antibody4.png");
        this.frame5 = ASSET_MANAGER.getAsset("./antibody5.png");
        this.frame6 = ASSET_MANAGER.getAsset("./antibody6.png");
        this.frame7 = ASSET_MANAGER.getAsset("./antibody7.png");
        this.frames = [ this.frame1, this.frame2,  this.frame3, this.frame4, this.frame5, this.frame6, this.frame7];

        this.animationFrame = 0;
        this.animationDuration = 0;

        this.speed = 50;

        // to make antibody head toward Micro 
        var dist = getDistance(this, this.target);
        this.velocity = { x: (this.target.x - this.x - 10) / dist * this.speed, y: (this.target.y - this.y - 10) / dist * this.speed };

        this.updateBB();

        this.facing = getFacing(this.velocity); //0 = N, 1 = NE, 2 = E, 3 = SE, 4 = S, 5 = SW, 6 = W, 7 = NW

        this.cache = [];
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

            offscreenCtx.save();
            offscreenCtx.translate(126, 126);
            offscreenCtx.rotate(radians);
            offscreenCtx.translate(-126, -126);
            
            offscreenCtx.drawImage(this.frames[this.animationFrame], 0, 0, 126, 92, 126, 92, 84, 54);

            offscreenCtx.restore();
            this.cache[frameNumber][angle] = offscreenCanvas;

            //console.log(this.cache[frameNumber][angle]);
        }

        if (this.animationFrame < 7) {
            ctx.drawImage((this.cache[frameNumber][angle]), (this.x - xOffset) - this.game.camera.x, (this.y - yOffset) - this.game.camera.y);
        } 
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

        this.drawAngle(ctx, degrees, this.animationFrame);

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

        if (this.animationFrame <= 5 && this.animationDuration <= 2) {
            this.animationDuration++;
        } else if (this.animationDuration > 2) {
            this.animationDuration = 0;
            this.animationFrame++;
        }

        //console.log("facing: " + this.facing);
    };

    updateBB() {
        //FIX THIS FOR NEW SIZE

        if (this.facing == 0) {
            this.BB = new BoundingCircle(this.x + 150 / 2, this.y + 10 / 2, 20);
        } else if (this.facing == 1) {
            this.BB = new BoundingCircle(this.x + 245 / 2, this.y + 50 / 2, 20);
        } else if (this.facing == 2) {
            this.BB = new BoundingCircle(this.x + 250 / 2, this.y + 165 / 2, 20);
        } else if (this.facing == 3) {
            this.BB = new BoundingCircle(this.x + 220 / 2, this.y + 210 / 2, 20);
        } else if (this.facing == 4) {
            this.BB = new BoundingCircle(this.x + 100 / 2, this.y + 245 / 2, 20);
        } else if (this.facing == 5) {
            this.BB = new BoundingCircle(this.x + 20 / 2, this.y + 210 / 2, 20);
        } else if (this.facing == 6) {
            this.BB = new BoundingCircle(this.x + 10 / 2, this.y + 150 / 2, 20);
        } else if (this.facing == 7) {
            this.BB = new BoundingCircle(this.x + 50 / 2, this.y + 5 / 2, 20);
        }

    };

}