class Powerup {

    constructor(game, x, y, type) {
        Object.assign(this, {game, x, y, type});

        this.removeFromWorld = false;
        
        this.spritesheet;

        this.frameCount = 0;

        this.scale = 3;

        switch (this.type) {
            case "speed":
                this.spritesheet = ASSET_MANAGER.getAsset("speed.png");
                this.frameCount = 1;
                this.scale = 1.5; //make smaller bc this sprite is bigger than the rest
                break;
            case "explode":
                this.spritesheet = ASSET_MANAGER.getAsset("explode.png");
                this.frameCount = 7;
                break;
            case "stun": 
                this.spritesheet = ASSET_MANAGER.getAsset("stun.png");
                this.frameCount = 7;  
                break;
            case "clone": 
                this.spritesheet = ASSET_MANAGER.getAsset("clone.png");
                this.frameCount = 8;
                break;
            case "size":
                this.spritesheet = ASSET_MANAGER.getAsset("size.png");
                this.frameCount = 6;
                break;
            case "shield":  
                this.spritesheet = ASSET_MANAGER.getAsset("shield.png");
                this.frameCount = 8;  
                break;  
        }

        this.animator = new Animator(this.spritesheet, 0, 0 , 32, 32, this.frameCount, 1);

        this.updateBB();
        
    };

    updateBB() {
        if (this.type === "speed") {
            this.BB = new BoundingCircle(this.x + 52 / 2, this.y + 48 / 2, 26);
        } else {
            this.BB = new BoundingCircle(this.x + 78 / 2, this.y + 84 /2, 24);
        }


    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, this.scale, true);


        if (PARAMS.DEBUG) {
            ctx.beginPath();
            ctx.arc(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'red';
            ctx.stroke();
            }
    };

    update() {
        //not working yet
        //this.updateBB();
        // for(var i = 0; i < this.game.entities.length; i++) {
        //     var entity = this.game.entities[i];
        //     if (entity instanceof Micro && this.BB.collide(entity.BB)) {
        //         //this.animator.changeDuration(0.5); //fix this
        //         this.removeFromWorld = true;
        //         //console.log("getting to change duration");
        //     } 
        // }

        //if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;

    };
}

