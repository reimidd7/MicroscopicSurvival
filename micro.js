class Micro {
    // PU == power up;
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.micro = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./MicroSpritesheet.png");

        this.size = 0; // 0 = normal, 1 = big (PU), 2 = shield normal (PU), 3 = shield big (PU) 
        this.facing = 0; // 0 = forward, 1 = right, 2 = left
        this.state = 0; //  0 = idle, 1 = walking, 2 = punching, 3 = running (PU)

        this.dead = false;

        // health decline animation: this.animations = new Animator(this.spritesheet, 0, 75, 65, 60, 1, 0.1 )

        this.velocity = { x: 0, y: 0 };

        this.lastBB = { x: 0, y: 0 };

        this.updateBB();

        // Testing cellman killing micro
        this.healthBar = new HealthBar(this, true);
        this.maxHealth = 10;
        this.healthpoints = this.maxHealth;

        this.gameover = false;

        // Micro's animations
        this.animations = [];
        this.loadAnimations();


    };

    loadAnimations() {
        for (var i = 0; i < 3; i++) { // 3 states for now.. running not implemented yet
            this.animations.push([]);
            for (var j = 0; j < 1; j++) { // 1 size for now... until power ups are added
                this.animations[i].push([]);
                for (var k = 0; k < 3; k++) { // 3 directions
                    this.animations[i][j].push([]);
                }
            }
        }
        // REMEMBER [STATE][SIZE][FACING]

        // IDLE
        // State 0 = idle animation
        // Facing 0 = forward facing
        this.animations[0][0][0] = new Animator(this.spritesheet, 2, 375, 64, 60, 2, 0.2);
        // this.animations[0][2][0] = new Animator(this.spritesheet, ) not implemented
        // this.animations[0][3][0] = new Animator(this.spritesheet, ) not implemented

        // WALK
        // State 1 = walking
        // facing 0 = forward facing
        this.animations[1][0][0] = new Animator(this.spritesheet, 2, 260, 64, 60, 3, 0.2);
        //this.animations[1][2][0] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][3][0] = new Animator(this.spritesheet, ) not implemented

        // State 1 = walking
        // facing 1 = right facing
        this.animations[1][0][1] = new Animator(this.spritesheet, 2, 320, 64, 60, 2, 0.2);
        //this.animations[1][2][1] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][3][1] = new Animator(this.spritesheet, ) not implemented

        // State 1 = walking
        // facing 2 = left facing
        this.animations[1][0][2] = new Animator(this.spritesheet, 2, 135, 64, 60, 2, 0.2);
        //this.animations[1][2][2] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][3][2] = new Animator(this.spritesheet, ) not implemented

        // PUNCHING - not implemented
        // State 2 = punching
        // facing 0 = forward facing
        this.animations[2][0][0] = new Animator(this.spritesheet, 5, 200, 64, 60, 4, 0.1); //not implemented
        this.animations[2][0][1] = new Animator(this.spritesheet, 5, 200, 64, 60, 4, 0.1); //not implemented
        this.animations[2][0][2] = new Animator(this.spritesheet, 5, 200, 64, 60, 4, 0.1); //not implemented
    };

    updateBB() {
        if (this.size === 0) {
            this.BB = new BoundingCircle(this.x + 64 / 2, this.y + 60 / 2, 20);
        } else if (this.size === 1) {
            this.BB = new BoundingCircle(this.x + 88 / 2, this.y + 74 / 2, 40);
        }
    };

    updateLastBB() {
        this.lastBB = this.BB;
    };

    //left wall
    collideLeft() {
        if (this.size == 0) {
            return (this.x - this.BB.radius) < 0;
        } else if (this.size == 1) {
            return (this.x - this.BB.radius) < -32;
        }
    };

    //right wall
    collideRight() {
        return (this.x + this.BB.radius) > 960;
    };

    //Top wall
    collideTop() {
        if (this.size == 0) {
            return (this.y - this.BB.radius) < 0;
        } else if (this.size == 1) {
            return (this.y - this.BB.radius) < -32;
        }
    };

    //Bottom wall
    collideBottom() {
        return (this.y + this.BB.radius) > 720;
    };

    update() {
        // all ground physics

        if (this.dead) {
            this.game.camera.microLives -= 1;
            if (this.game.camera.microLives > 0) {

                this.dead = false;
                this.healthpoints = this.maxHealth;
                this.x = PARAMS.CANVAS_WIDTH / 2;
                this.y = PARAMS.CANVAS_WIDTH / 2;
                this.game.camera.loadLevel(levelOne, false);
            } else {
                console.log("dead");

                this.velocity.x = 0;
                this.velocity.y = 0;
                this.gameover = true;
                //add end of game screen here? or in draw()
            }

        } else {
            const WALK = 150;
            this.velocity.x = 0;
            this.velocity.y = 0;

            //update velocity
            if (this.game.left) this.velocity.x -= WALK;
            if (this.game.right) this.velocity.x += WALK;
            if (this.game.up) this.velocity.y -= WALK;
            if (this.game.down) this.velocity.y += WALK;

            // update state!
            if (this.game.A) {
                this.state = 2;
            } else if (Math.abs(this.velocity.x) > WALK) {
                this.state = 1;
            } else if (Math.abs(this.velocity.x) <= WALK) {
                this.state = 1;
            } else if (Math.abs(this.velocity.y) > WALK) {
                this.state = 1;
            } else if (Math.abs(this.velocity.y) <= WALK) {
                this.state = 1;
            } else { }

            // update the direction
            if (this.velocity.x < 0) this.facing = 2;
            if (this.velocity.x > 0) this.facing = 1;
            if (this.velocity.y != 0) this.facing = 0;
            if (this.velocity.y == 0 && this.velocity.x == 0) this.facing = 0, this.state = 0;
            if (this.velocity.y == 0 && this.velocity.x == 0 && this.game.A) this.facing = 0, this.state = 2; //ugly code but punching while idle need this

            //update wall collisions
            if (this.collideLeft() || this.collideRight()) {
                this.velocity.x = -this.velocity.x;
                if (this.collideLeft() && this.size == 0) {
                    this.x = this.BB.radius;
                } else if (this.collideLeft() && this.size == 1) {
                    this.x = this.BB.radius - 20;
                }

                if (this.collideRight()) {
                    this.x = 955 - this.BB.radius;
                }

                //random direction after hitting wall
                this.velocity.y = Math.random() * 100 + 50;
                this.updateLastBB();
                this.updateBB();

            } else if (this.collideBottom() || this.collideTop()) {
                this.velocity.y = -this.velocity.y;
                if (this.collideTop() && this.size == 0) {
                    this.y = this.BB.radius;
                } else if (this.collideTop() && this.size == 1) {
                    this.y = this.BB.radius - 20;
                }

                if (this.collideBottom()) {
                    this.y = 715 - this.BB.radius;
                }

                //random direction after hitting wall
                this.velocity.x = Math.random() * 100 + 50;
                this.updateLastBB();
                this.updateBB();

            } else {
                this.x += this.velocity.x * this.game.clockTick;
                this.y += this.velocity.y * this.game.clockTick;
                this.updateLastBB();
                this.updateBB();
            }

            // Collisions
            var that = this;
            for (const entity of this.game.entities) {

                // Skip these tiles because there is no collision.
                if (entity instanceof NormalTiles || entity instanceof RippedTiles) {

                } else {
                    // check for collision
                    if (entity !== that && this.BB.collide(entity.BB)) {

                        // when punching Micro causes Cell and Lymphocyte's health to decline
                        if (that.state == 2) {
                            if ((entity instanceof Cell || entity instanceof Lymphocyte) && !entity.dead) {
                                entity.decreaseHealth();

                                if (entity.healthpoints > 0 && this.size == 1) {
                                    entity.decreaseHealth(); //deal double damage (if able to) -- basically only works on lymphocytes
                                }

                                if (entity.healthpoints <= 0) {
                                    entity.dead = true;


                                }
                            }
                        } else {

                            // Cell causes Micro's health to decline (used to be in Cell.js)
                            if (entity instanceof Cell && !entity.dead) {
                                // Cell touched the Micro, make the Micro take damage
                                if (entity.timer <= 0) {
                                    this.healthpoints -= 1;
                                    entity.timer = 2;
                                }
                                // makes it so micro doesnt die as quick
                                entity.timer -= this.game.clockTick;

                                if (entity.timer < 0) {
                                    entity.timer = 0;
                                }

                                // Check if Micro's healthpoints reach zero
                                if (this.healthpoints <= 0) {
                                    this.dead = true;

                                }
                            }

                            // Check collisions with the antibodies MUST ADD BOUNDING BOXES TO THE ANTIBODIES (theres a chance this might be weird)
                            if (entity instanceof Antibody) {
                                entity.removeFromWorld = true;
                                this.healthpoints -= 1;
                            }

                            //account for case where micro has size powerup!!!!!!!!!
                            // Check collisions with bones and redblood cells
                            if (entity instanceof Bone || entity instanceof RedBloodCell) {
                                if (that.size == 0 && this.BB.collide(entity.BB)) {

                                    if (this.velocity.y > 0 && this.velocity.x > 0) {
                                        this.x -= this.BB.radius - 15;
                                        this.y -= this.BB.radius - 15;

                                    } else if (this.velocity.y > 0 && this.velocity.x < 0) {
                                        this.x += this.BB.radius - 15;
                                        this.y -= this.BB.radius - 15;

                                    } else if (this.velocity.y < 0 && this.velocity.x < 0) {
                                        this.x += this.BB.radius - 15;
                                        this.y += this.BB.radius - 15;

                                    } else if (this.velocity.y < 0 && this.velocity.x > 0) {
                                        this.x -= this.BB.radius - 15;
                                        this.y += this.BB.radius - 15;

                                    } else if (this.velocity.x > 0) {
                                        this.x -= this.BB.radius - 16;
                                        this.y -= this.velocity.y;

                                    } else if (this.velocity.x < 0) {
                                        this.x += this.BB.radius - 16;
                                        this.y -= this.velocity.y;

                                    } else if (this.velocity.y > 0) {
                                        this.x -= this.velocity.x;
                                        this.y -= this.BB.radius - 16;

                                    } else if (this.velocity.y < 0) {
                                        this.x -= this.velocity.x;
                                        this.y += this.BB.radius - 16;
                                    }
                                    this.velocity.x = 0;
                                    this.velocity.y = 0;

                                }

                                // if (this.lastBB.x <= (entity.BB.x - this.BB.radius)) { // Collided with the left
                                //     this.x = entity.BB.x - this.BB.radius * 3.5;
                                //     if (this.velocity.x > 0) {
                                //         this.velocity.x = 0;
                                //         this.velocity.y = 0;
                                //     }
                                //     //console.log("left collision");
                                // } else if (this.lastBB.x >= entity.BB.x) { // Collided with the right
                                //     this.x = entity.BB.x + this.BB.radius;
                                //     if (this.velocity.x > 0) {
                                //         this.velocity.x = 0;
                                //         this.velocity.y = 0;
                                //     }
                                //     //console.log("right collision");
                                // }

                                // if (this.lastBB.y >= (entity.BB.y + this.BB.radius)) { // Collided with the bottom
                                //     this.y = entity.BB.y + this.BB.radius;
                                //     if (this.velocity.y > 0) {
                                //         this.velocity.x = 0;
                                //         this.velocity.y = 0;
                                //     }
                                //     //console.log("bottom collision");
                                // } else if (this.lastBB.y <= entity.BB.y) { // Collided with the top
                                //     this.y = entity.BB.y - this.BB.radius * 2.5;
                                //     if (this.velocity.y > 0) {
                                //         this.velocity.x = 0;
                                //         this.velocity.y = 0;
                                //     }
                                //     //console.log("top collision");
                                // }

                            }

                            if (entity instanceof Powerup) { //make them last for like 15 seconds only
                                if (entity.type === "speed") {
                                    this.WALK = 1000;
                                    entity.removeFromWorld = true;
                                } else if (entity.type === "size") {
                                    this.size = 1;
                                    entity.removeFromWorld = true;
                                }
                            }
                        }

                    }
                }
            }
            this.healthBar.update(this);
        }
    };

    drawMinimap(ctx, mmX, mmY) {
        ctx.fillStyle = "Green";
        ctx.beginPath();
        ctx.arc(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, PARAMS.SCALE, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }


    draw(ctx) {
        if (this.gameover) {
            this.animation = new Animator(this.spritesheet, 2, 0, 64, 60, 3, 0.4);
        } else {
            this.animation = this.animations[this.state][0][this.facing];
        }

        if (this.size == 0) {
            this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1, true);
        } else if (this.size == 1) {
            this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, 1.5, true);
        }

        const barX = (ctx.canvas.width - this.healthBar.barWidth) / 2;
        const barY = ctx.canvas.height - this.healthBar.barHeight;
        this.healthBar.draw(ctx, barX, barY, this);


        if (PARAMS.DEBUG) {
            ctx.beginPath();
            ctx.arc(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'red';
            ctx.stroke();
        }
    };
};