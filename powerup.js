class Powerup {

    constructor(game, x, y, type) {
        Object.assign(this, {game, x, y, type});
        
        this.animator;

        this.radius = 25; //??

        switch (this.type) {
            case "speed":
                this.animator = new Animator(ASSET_MANAGER.getAsset("speed.png"), 0, 0, 32, 32, 1, 1);
                break;
            case "explode":
                this.animator = new Animator(ASSET_MANAGER.getAsset("explode.png"), 0, 0, 32, 32, 7, 1); 
                break;
            case "stun":
                this.animator = new Animator(ASSET_MANAGER.getAsset("stun.png"), 0, 0, 32, 32, 7, 1);    
                break;
            case "clone":
                this.animator = new Animator(ASSET_MANAGER.getAsset("clone.png"), 0, 0, 32, 32, 8, 1); 
                break;
            case "size":
                this.animator = new Animator(ASSET_MANAGER.getAsset("size.png"), 0, 0, 32, 32, 6, 1); 
                break;
            case "shield":
                this.animator = new Animator(ASSET_MANAGER.getAsset("shield.png"), 0, 0, 32, 32, 8, 1);    
                break;  
        }
        
    };

    draw(ctx) {
        if (this.type != "speed") {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3, true);
        } else {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2, true);
        }
        
    };

    update() {
        //not working yet
        for(var i = 0; i < this.game.entities.length; i++) {
            var entity = this.game.entities[i];
            if (entity instanceof Micro && collide(this, entity)) {
                this.animator.changeDuration(0.5); //fix this
                this.removeFromWorld = true;
                //console.log("getting to change duration");
            } 
        }

        if (this.animator.elapsedTime > this.animator.totalTime) this.animator.elapsedTime -= this.animator.totalTime;

    };
}