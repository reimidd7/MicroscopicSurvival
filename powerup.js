// This powerup class is only used to draw the animations of each power up.
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

    };
}

// This class handles the logic for both mines (stun and explode). It also draws the Explode radius.
class Mine {
    constructor(game, x, y, type) {
        Object.assign(this, { game, x, y, type });

        this.removeFromWorld = false;

        this.BB = new BoundingCircle(this.x + 78 / 2, this.y + 84 / 2, 45);

        this.active = false;

        this.elapsedTime = 0;
        this.timer = 0;
        this.maxTimer = 10;

        this.entities = [];

        this.oldVelocities = [];
    }


    update() {
        // used with the exploding time to hanldle time
        this.timer += this.game.clockTick;

        // stun logic... timed by powerup() in Micro.js
        if (this.type == "stun") {
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
        }

        // explode logic... pulled from powerup()
        // time is handled WITHNIN using timer and maxTimer (no need for the if statement in powerup())
        if (this.type == "explode") {
            if (this.timer >= this.maxTimer) {
                this.game.micro.poweredUpExplode = false; 
                return;
            }

            if (this.game.micro.poweredUpExplode) {
                for (const entity of this.game.entities) {
                    if ((entity instanceof Cell || entity instanceof Lymphocyte) && !entity.dead) {
                        const dx = this.game.micro.x - entity.x;
                        const dy = this.game.micro.y - entity.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 50 && !entity.dead) {
                            entity.decreaseHealth();
                            if (entity.healthpoints <= 0 ) {
                                if (entity instanceof Cell) this.game.camera.cellCount -= 1;
                                if (entity instanceof Lymphocyte) this.game.camera.lymphocyteCount -= 1;
                                entity.dead = true;
                            }
                        }
                    }
                }
                //this.explodeTime++; // not needed anymore due to time being handled with Timer
            }
        }
    };

    draw(ctx) {

        // Draws the exploding radius, disappears after the powerup logic has stopped
        if (this.type == "explode" && this.timer < this.maxTimer) {
            ctx.save();
            ctx.translate(this.game.micro.x - this.game.camera.x + 32, this.game.micro.y - this.game.camera.y + 30); // Adjusted for center
            ctx.beginPath();
            ctx.arc(0, 0, 50, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
            ctx.fill();
            ctx.strokeStyle = 'red';
            ctx.stroke();
            ctx.restore();
        }
    };

};

// This class handles the logic and drawing of the clones
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


class Shield {
    constructor(game, x, y, type) {
        Object.assign(this, { game, x, y, type });

        this.timer = 0;
        this.maxTimer = 10;

    }


    update() {
            if (his.type == "shield") {
                if (this.timer >= this.maxTimer) {
                    this.game.micro.poweredUpShield = false; 
                    return;
                } else {
                    for (const entity of this.game.entities) {
                        if (this.poweredUpShield) {
                            const shieldRadius = 50;
                            const centerX = this.x;
                            const centerY = this.y;
                            const distanceThreshold = 50;
        
                            this.game.entities.forEach((entity) => {
                                if ((entity instanceof Cell || entity instanceof Antibody) && !entity.dead) {
                                    const dx = centerX - entity.x;
                                    const dy = centerY - entity.y;
                                    const distance = Math.sqrt(dx * dx + dy * dy);
                                    if (distance < shieldRadius) {
                                        // Move the entity outside the shield radius
                                        const angle = Math.atan2(dy, dx);
                                        const newDistance = shieldRadius + distanceThreshold;
                                        const newX = centerX + newDistance * Math.cos(angle);
                                        const newY = centerY + newDistance * Math.sin(angle);
                                        entity.x = newX;
                                        entity.y = newY;
                                    }
                                }
                            });
                        }
                    }
                }
            }
        };
        


    draw(ctx) {

          //Drawing the radius of the shield
          if (this.poweredUpShield && this.size === 0) {
            ctx.save();
            ctx.translate(this.x - this.game.camera.x + 32, this.y - this.game.camera.y + 30); // Adjusted for center
            ctx.beginPath();
            ctx.arc(0, 0, 50, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(64, 224, 208, 0.2)'; // Turquoise color
            ctx.fill();
            ctx.strokeStyle = 'turquoise'; // Turquoise color
            ctx.stroke();
            ctx.restore();
        } else if (this.poweredUpShield && this.size === 1) {
            ctx.save();
            ctx.translate(this.x - this.game.camera.x + 47, this.y - this.game.camera.y + 35); // Adjusted for center
            ctx.beginPath();
            ctx.arc(0, 0, 50, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(64, 224, 208, 0.2)'; // Turquoise color
            ctx.fill();
            ctx.strokeStyle = 'turquoise'; // Turquoise color
            ctx.stroke();
            ctx.restore();
        }
        

    };
}
