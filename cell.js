class Cell {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        

        //this.game.cell = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./cellman.png");

        this.facing = 0; //0 = right // 1 = left, dead, stick, idle

        // initial speed of cell man
        this.velocity = { x: 100, y: 100 };

        // The area the cells spawn from
        this.x = x || 0;
        this.y = y || 0;

        // size of circle for collisions
        this.radius = 21;
        this.updateBB();

        // for animations
        this.animator = [];
        this.loadAnimations();

        //fighting
        this.dead = false;
        this.healthpoints = 1;
        this.hitpoints = 1;
        this.timer = 3;

        this.deadTimer=0;
    
        

        this.stunned = false;


    }
    updateBB() {
        this.BB = new BoundingCircle(this.x + 45 / 2, this.y + 51 / 2, 21);
    }

    chaseTarget(target) {
        // Calculate direction and distance to Micro
        const directionX = target.x - this.x;
        const directionY = target.y - this.y;
        const distance = Math.sqrt(directionX ** 2 + directionY ** 2);
        
        if (distance > 0 && !this.stunned) {
            // Calculate normalized components of the direction vector
            const vectorDirectionX = directionX / distance;
            const vectorDirectionY = directionY / distance;
    
            // Set chase speed
            const chaseSpeed = 100;
    
            // Update velocity based on chase speed and direction
            this.velocity.x = vectorDirectionX * chaseSpeed;
            this.velocity.y = vectorDirectionY * chaseSpeed;
    
            // Update position based on velocity
            this.x += this.velocity.x * this.game.clockTick;
            this.y += this.velocity.y * this.game.clockTick;
    
            // Handle wall collisions
            if (this.collideLeft() || this.collideRight()) {
                this.velocity.x = -this.velocity.x;
                if (this.collideLeft()) {
                    this.x = this.BB.radius;
                }
                if (this.collideRight()) {
                    this.x = 960 - this.BB.radius;
                }
            }
    
            if (this.collideTop() || this.collideBottom()) {
                this.velocity.y = -this.velocity.y;
                if (this.collideTop()) {
                    this.y = this.BB.radius;
                }
                if (this.collideBottom()) {
                    this.y = 720 - this.BB.radius;
                }
            }
    
            this.updateBB();
        }
    }
    

    decreaseHealth() {
        this.healthpoints -= 1;
        
        if (this.dead && this.deadTimer < 200) {
            this.deadTimer++;
            //console.log("got to deadtimer inc");
        } else if (this.dead && this.deadTimer != 0 && this.deadTimer >= 200) {
            this.removeFromWorld = true;
            this.deadTimer = 0;
            //console.log("got to deadtimer reset");
        }
    };
    
    

    loadAnimations() {
        for (var i = 0; i < 4; i++) {
            this.animator.push([]);
        }

        //Right animation
        this.animator[0] = new Animator(this.spritesheet, 0, 53, 45, 102, 5, 0.4, false, true);

        //Left animation
        this.animator[1] = new Animator(this.spritesheet, 0, 0, 45, 51, 5, 0.4, false, true);

        //Dead animation
        this.animator[2] = new Animator(this.spritesheet, 224, 0, 45, 51, 1, .3, false, true);
    };

    //left wall
    collideLeft() {
        return (this.x - this.BB.radius) < 0;
    }
    //right wall
    collideRight() {
        return (this.x + this.BB.radius) > 960;
    }
    //Top wall
    collideTop() {
        return (this.y - this.BB.radius) < 0;
    }
    //Bottom wall
    collideBottom() {
        return (this.y + this.BB.radius) > 720;
    }

   
    update() {
        if (this.paused > 0) {
            this.paused -= this.game.clockTick;
        } else {
            if (!this.dead) {
                this.x += this.velocity.x * this.game.clockTick;
                this.y += this.velocity.y * this.game.clockTick;
                
    
                if (this.velocity.x > 0) {
                    this.facing = 0; // Moving right
                } else if (this.velocity.x < 0) {
                    this.facing = 1; // Moving left
                }
                // This might not be needed
                if (this.collideLeft() || this.collideRight()) {
                    this.velocity.x = -this.velocity.x;
                    if (this.collideLeft()) {
                        this.x = this.BB.radius;
                    }
                    if (this.collideRight()) {
                        this.x = 960 - this.BB.radius;
                    }
                }
    
                if (this.collideTop() || this.collideBottom()) {
                    this.velocity.y = -this.velocity.y;
                    if (this.collideTop()) {
                        this.y = this.BB.radius;
                    }
                    if (this.collideBottom()) {
                        this.y = 720 - this.BB.radius;
                    }
                }
    
                this.game.entities.forEach(entity => {
                    if (entity instanceof Cell && entity !== this) {
                        const dx = this.x - entity.x;
                        const dy = this.y - entity.y;
                        const distance = Math.sqrt(dx ** 2 + dy ** 2);
                        const minDistance = this.radius + entity.radius;
                        if (distance < minDistance) {
                            // Resolve collision
                            const overlap = minDistance - distance;
                            const angle = Math.atan2(dy, dx);
                            const targetX = this.x + Math.cos(angle) * overlap / 2;
                            const targetY = this.y + Math.sin(angle) * overlap / 2;
                            this.x = targetX;
                            this.y = targetY;
                            this.updateBB();
                        }
                    }
                });
    
                // Check for Micro and chase if found
                const targetEntity = this.game.entities.find(entity => entity instanceof Micro);
                if (targetEntity) {
                    this.chaseTarget(targetEntity);
                }
            }
    
            this.updateBB();
        }
    };
    

    drawMinimap(ctx, mmX, mmY) {
        ctx.fillStyle = "Grey";
        ctx.beginPath();
        ctx.arc(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, PARAMS.SCALE, 0, Math.PI * 2);
        ctx.fill();
    }
    

    draw(ctx) {
        if (this.dead) {
            this.animator[2].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1, true);
            // this.animator[2].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1, true);

        } else {
            this.animator[this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1, true);
            // this.animator[this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1, true);

        }

        if (PARAMS.DEBUG) {
        ctx.beginPath();
        ctx.arc(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'red';
        ctx.stroke();
        }

    };
};



