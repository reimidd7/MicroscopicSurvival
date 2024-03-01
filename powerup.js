class Powerup {

    constructor(game, x, y, type) {
        Object.assign(this, { game, x, y, type });

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

        this.animator = new Animator(this.spritesheet, 0, 0, 32, 32, this.frameCount, 1);

        this.updateBB();

    };

    updateBB() {
        if (this.type === "speed") {
            this.BB = new BoundingCircle(this.x + 52 / 2, this.y + 48 / 2, 26);
        } else {
            this.BB = new BoundingCircle(this.x + 78 / 2, this.y + 84 / 2, 24);
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

        // if (this.type === "stun" || this.type === "explode") {
        //     this.mine.update();
        // }
    };
}


class Mine {
    constructor(game, x, y, type) {
        Object.assign(this, { game, x, y, type });

        this.removeFromWorld = false;

        this.BB = new BoundingCircle(this.x + 78 / 2, this.y + 84 / 2, 45);

        this.active = false;

        this.elapsedTime = 0;

        this.entities = [];

        this.oldVelocities = [];
    }


    update() {
        if (this.active && this.elapsedTime < 1) {
            for (var i = 0; i < this.game.entities.length; i++) {
                var entity = this.game.entities[i];
                if (entity instanceof Cell && getDistance(this, entity) < 50) {
                    this.entities.push(entity);
                    this.oldVelocities.push(entity.velocity);
                    entity.stunned = true;
                    entity.velocity = { x: 0, y: 0 };
                }
            }
            this.elapsedTime++;
        } else if (!this.active && this.entities.length > 0) {
            for (var i = 0; i < this.entities.length; i++) {
                this.entities[i].stunned = false;
                this.entities[i].velocity = this.oldVelocities[i];
            }
            this.removeFromWorld = true;
        }

    };

    draw(ctx) {

    };

};

class Clone {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.removeFromWorld = false;
        this.width = this.game.camera.level.width;
        this.height = this.game.camera.level.height;

        

        this.spritesheet = ASSET_MANAGER.getAsset("./MicroSpritesheet.png");

        this.velocity = { x: Math.random() * 300 - 100, y: Math.random() * 300 - 100 };

        this.animation = new Animator(this.spritesheet, 5, 200, 64, 60, 4, 0.1);

        this.updateBB();

        this.timer = 0; // Timer for clone lifespan
        this.maxTimer = 10; // Maximum time in seconds for the clone to exist

    }

    updateBB() {
        this.BB = new BoundingCircle(this.x + 20, this.y + 20, 15);
    }
    //left wall
    collideLeft() {
        return (this.x - this.BB.radius) < 28;
    };

    //fix this for additional levels
    //right wall
    collideRight() {
        return (this.x + this.BB.radius) > this.width - 32;
        
    };

    //top wall
    collideTop() {
        return (this.y - this.BB.radius) < 28;
    };

    //fix this for additional levels
    //bottom wall
    collideBottom() {
        
        return (this.y + this.BB.radius) > this.height - 32;
    };


    update() {
        this.timer += this.game.clockTick;

        if (this.timer >= this.maxTimer) {
            this.removeFromWorld = true; // Remove the clone from the world
            return;
        }

        this.x += this.velocity.x * this.game.clockTick;
        this.y += this.velocity.y * this.game.clockTick;

        // Update the bounding box
        this.updateBB();

        if (this.collideLeft() || this.collideRight()) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.collideTop() || this.collideBottom()) {
            this.velocity.y = -this.velocity.y;
        }

        for (const entity of this.game.entities) {
            // Skip these tiles because there is no collision.
            if (entity instanceof Cell || entity instanceof Lymphocyte) {
                if (this.BB.collide(entity.BB) && !entity.dead) {
                    entity.decreaseHealth();
                    console.log(entity + " " + entity.healthpoints);
                    if (entity.healthpoints <= 0) {
                        if (entity instanceof Cell) this.game.camera.cellCount -= 1;
                        if (entity instanceof Lymphocyte) this.game.camera.lymphocyteCount -= 1;
                        entity.dead = true;
                    }
                }
            }
        }

    };


    draw(ctx) {
        // Draw the clone using the animation
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 0.75, true);

        // If in DEBUG mode, draw the bounding box
        if (PARAMS.DEBUG) {
            ctx.beginPath();
            ctx.arc(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'red';
            ctx.stroke();
        }
    };
};
