class Cell {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        

        this.game.cell = this;

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


    }
    updateBB() {
        this.BB = new BoundingCircle(this.x + 45 / 2, this.y + 51 / 2, 21);
    }

    chaseTarget(target) {
        //direction and distance to Micro
        const directionX = target.x - this.x;
        const directionY = target.y - this.y;

        const distance = Math.sqrt(directionX ** 2 + directionY ** 2);

        let vectorDirectionX, vectorDirectionY;
        // Check if the distance between the current cell and the target is not zero
        if (distance !== 0) {
            // If not zero, calculate the normalized components of the direction vector
            vectorDirectionX = directionX / distance;
            vectorDirectionY = directionY / distance;
        } else {
            // If the distance is zero (to avoid division by zero), set the components to zero
            vectorDirectionX = 0;
            vectorDirectionY = 0;
        }

        const scalingFactor = Math.sqrt(this.game.entities.length / 30); // Adjust 30 based on your desired threshold

        // Adjust the speed as needed, considering the scaling factor
        let chaseSpeed = 1 * scalingFactor;

        // Check if there are only a few cells left
        if (this.game.entities.length <= 5) {
            // Increase speed when only a few cells are left
            chaseSpeed *= 1.5; // You can adjust the multiplier as needed
        }

        this.velocity.x = vectorDirectionX * chaseSpeed;
        this.velocity.y = vectorDirectionY * chaseSpeed;

        // Update position based on velocity
        this.x += this.velocity.x * this.game.clockTick;
        this.y += this.velocity.y * this.game.clockTick;
        this.updateBB();

    }

    decreaseHealth() {
        this.healthpoints -= 1;
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
        return (this.x - this.radius) < 0;
    }
    //right wall
    collideRight() {
        return (this.x + this.radius) > 1025;
    }
    //Top wall
    collideTop() {
        return (this.y - this.radius) < 0;
    }
    //Bottom wall
    collideBottom() {
        return (this.y + this.radius) > 770;
    }

    update() {
        if (this.paused > 0) {
            this.paused -= this.game.clockTick;
        } else {

            if (!this.dead) {
                this.x += this.velocity.x * this.game.clockTick;
                this.y += this.velocity.y * this.game.clockTick;


                if (this.velocity.x > 0) {
                    // Moving right
                    this.facing = 0;
                } else if (this.velocity.x < 0) {
                    // Moving left
                    this.facing = 1;
                }

                if (this.collideLeft() || this.collideRight()) {
                    this.velocity.x = -this.velocity.x;
                    if (this.collideLeft()) {
                        this.x = this.radius;
                    }
                    if (this.collideRight()) {
                        this.x = 1010 - this.radius;
                    }

                    //random direction after hitting wall
                    this.velocity.y = Math.random() * 100 + 50;
                }

                if (this.collideTop() || this.collideBottom()) {
                    this.velocity.y = -this.velocity.y;
                    if (this.collideTop()) this.y = this.radius;
                    if (this.collideBottom()) this.y = 740 - this.radius;

                    //random direction after hitting wall
                    this.velocity.x = Math.random() * 100 + 50;
                }

                // Check for collisions with other cells
                for (const entity of this.game.entities) {
                    if (entity !== this && entity instanceof Cell) {
                        const dx = this.x - entity.x;
                        const dy = this.y - entity.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < this.radius + entity.radius) {
                            // Calculate new positions for avoiding overlap
                            const angle = Math.atan2(dy, dx);
                            const overlap = this.radius + entity.radius - distance;
                            const separationDistance = overlap; // Adjust the factor to control separation distance

                            // Update positions without changing velocities
                            this.x += separationDistance * Math.cos(angle);
                            this.y += separationDistance * Math.sin(angle);

                            entity.x -= separationDistance * Math.cos(angle);
                            entity.y -= separationDistance * Math.sin(angle);
                        }

                
                        

                        // for (const entity of this.game.entities) {
                        //     if (entity !== this && entity instanceof Micro) {
                        //         const dx = this.x - entity.x;
                        //         const dy = this.y - entity.y;
                        //         const distance = Math.sqrt(dx * dx + dy * dy);

                        //         if (distance < this.radius + entity.BB.radius && this.timer <= 0) {
                        //             // Cell touched the Micro, make the Micro take damage


                                    
                        //             entity.healthpoints -= this.hitpoints; // Use the hitpoints property of the Cell
                        //             this.timer = 3;
                        //             // Check if Micro's healthpoints reach zero
                        //             if (entity.healthpoints <= 0) {
                        //                 entity.dead = true;
                        //                 // Additional logic for Micro's death can be added here
                        //             }
                        //         }
                        //     }
                        // }

                        // this.timer -= this.game.clockTick;
                        // if (this.timer < 0) {
                        //     this.timer = 0;
                        // }
                        const targetEntity = this.game.entities.find(entity => entity instanceof Micro);
                        if (targetEntity) {

                            this.chaseTarget(targetEntity);
                        }
                    }
                }
            }

            this.updateBB();

        }
    };

    drawMinimap(ctx, mmX, mmY) {
        ctx.fillStyle = "Red";
        ctx.fillRect(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, PARAMS.SCALE, PARAMS.SCALE * Math.min(this.size + 1, 2));
    }


    draw(ctx) {
        if (this.dead) {
            this.animator[2].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1, true);
            // this.animator[2].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1, true);

        } else {
            this.animator[this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1, true);
            // this.animator[this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1, true);

        }
        ctx.beginPath();
        ctx.arc(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'red';
        ctx.stroke();

    };
};



