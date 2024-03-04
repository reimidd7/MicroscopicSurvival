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
        this.won = false;

        // size powerup
        this.poweredUpSize = false;
        this.sizeTime = 0;

        // speed powerup
        this.poweredUpSpeed = false;
        this.speedTime = 0;

        // stun powerup
        this.stunMine = null;
        this.activeStunMine = false;
        this.stunTime = 0;

        // explosion powerup
        this.poweredUpExplode = false;
        this.explodeTime = 0;

        // explosion powerup
        this.poweredUpShield = false;
        this.shieldTime = 0;

        // clone powerup
        this.poweredUpClone = false;
        this.cloneTime = 0;

        this.velocity = { x: 0, y: 0 };

        this.lastBB = { x: 0, y: 0 };

        this.updateBB();

        // Testing cellman killing micro
        this.healthBar = new HealthBar(this, true);
        this.maxHealth = 100;
        this.healthpoints = this.maxHealth;

        //saving key currently pressed and key previously pressed
        this.key = this.game.keyCode;
        this.prevCode = null;

        this.walk = 200;

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

        // WALK
        // State 1 = walking
        // facing 0 = forward facing
        this.animations[1][0][0] = new Animator(this.spritesheet, 2, 260, 64, 60, 3, 0.2);

        // State 1 = walking
        // facing 1 = right facing
        this.animations[1][0][1] = new Animator(this.spritesheet, 2, 320, 64, 60, 2, 0.2);

        // State 1 = walking
        // facing 2 = left facing
        this.animations[1][0][2] = new Animator(this.spritesheet, 2, 135, 64, 60, 2, 0.2);

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
            this.BB = new BoundingCircle(this.x + 92 / 2, this.y + 80 / 2, 32);
        }
    };

    updateLastBB() {
        this.lastBB = this.BB;
    };

    //left wall
    collideLeft() {
        if (this.size == 0) {
            return (this.x - this.BB.radius) < 2;
        } else if (this.size == 1) {
            return (this.x - this.BB.radius) < -5;
        }
    };

    //fix this for additional levels
    //right wall
    collideRight() {
        if (this.size == 0) {
            return (this.x + this.BB.radius) > this.game.camera.level.width - 69;
        } else if (this.size == 1) {
            return (this.x + this.BB.radius) > this.game.camera.level.width - 94;
        }
    };

    //Top wall
    collideTop() {
        if (this.size == 0) {
            return (this.y - this.BB.radius) < 0;
        } else if (this.size == 1) {
            return (this.y - this.BB.radius) < -5;
        }
    };

    //fix this for additional levels
    //Bottom wall
    collideBottom() {
        if (this.size == 0) {
            return (this.y + this.BB.radius) > this.game.camera.level.height - 56;
        } else if (this.size == 1) {
            return (this.y + this.BB.radius) > this.game.camera.level.height - 73;
        }
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
                this.game.camera.loadLevel(levelThree, false);
            } else {
                console.log("dead");

                this.velocity.x = 0;
                this.velocity.y = 0;
                this.gameover = true;
                //add end of game screen here? or in draw()
            }

        } else {

            if (this.poweredUpSpeed == true || this.poweredUpSize == true || this.activeStunMine || this.poweredUpExplode || this.poweredUpShield || this.poweredUpClone) {
                this.powerUp();
            }

            this.velocity.x = 0;
            this.velocity.y = 0;


            //update velocity
            if (this.game.left) this.velocity.x -= this.walk;
            if (this.game.right) this.velocity.x += this.walk;
            if (this.game.up) this.velocity.y -= this.walk;
            if (this.game.down) this.velocity.y += this.walk;

            this.key = this.game.keyCode;

            //update position
            // // if (this.collideLeft() || this.collideRight()) {
            // //     if (this.prevCode != this.key && this.key != null) {
            // //         this.velocity.x = -this.velocity.x;
            // //         if (this.collideLeft() && this.size == 0) {
            // //             this.x = this.BB.radius + 20;
            // //         } else if (this.collideLeft() && this.size == 1) {
            // //             this.x = this.BB.radius - 2;
            // //         }

            // //         if (this.collideRight() && this.size == 0) {
            // //             this.x = 950 - this.BB.radius;
            // //         } else if (this.collideRight() && this.size == 1) {
            // //             this.x = 925 - this.BB.radius;
            // //         }

            // //         //random direction after hitting wall
            // //         this.velocity.y = Math.random() * 100 + 50;
            // //         this.updateLastBB();
            // //         this.updateBB();
            // //     }

            // //     this.prevCode = this.key;

            // //     this.key = this.game.keyCode;

            // // } else if (this.collideBottom() || this.collideTop()) {
            // //     if (this.prevCode != this.key && this.key != null) {
            // //         this.velocity.y = -this.velocity.y;
            // //         if (this.collideTop() && this.size == 0) {
            // //             this.y = this.BB.radius + 5;
            // //         } else if (this.collideTop() && this.size == 1) {
            // //             this.y = this.BB.radius - 3;
            // //         }

            // //         if (this.collideBottom() && this.size == 0) {
            // //             this.y = 708 - this.BB.radius;
            // //         } else if (this.collideBottom() && this.size == 1) {
            // //             this.y = 692 - this.BB.radius;
            // //         }

            // //         //random direction after hitting wall
            // //         this.velocity.x = Math.random() * 100 + 50;
            // //         this.updateLastBB();
            // //         this.updateBB();
            // //     }

            // //     this.prevCode = this.key;

            // //     this.key = this.game.keyCode;

            // } else {
            this.x += this.velocity.x * this.game.clockTick;
            this.y += this.velocity.y * this.game.clockTick;
            this.updateLastBB();
            this.updateBB();
            //}


            // update state!
            if (this.game.A) {
                this.state = 2;
            } else if (Math.abs(this.velocity.x) > this.walk) {
                this.state = 1;
            } else if (Math.abs(this.velocity.x) <= this.walk) {
                this.state = 1;
            } else if (Math.abs(this.velocity.y) > this.walk) {
                this.state = 1;
            } else if (Math.abs(this.velocity.y) <= this.walk) {
                this.state = 1;
            } else {

            }

            // update the direction
            if (this.velocity.x < 0) this.facing = 2;
            if (this.velocity.x > 0) this.facing = 1;
            if (this.velocity.y != 0) this.facing = 0;
            if (this.velocity.y == 0 && this.velocity.x == 0) this.facing = 0, this.state = 0;
            if (this.velocity.y == 0 && this.velocity.x == 0 && this.game.A) this.facing = 0, this.state = 2; //ugly code but punching while idle need this

            this.healthBar.update(this);

            // Collisions
            var that = this;
            for (const entity of this.game.entities) {

                // Skip these tiles because there is no collision.
                if (entity instanceof NormalTiles || entity instanceof RippedTiles) {

                } else {
                    // check for collision
                    if (entity !== that && this.BB.collide(entity.BB)) {

                        // when punching Micro causes Cell and Lymphocyte's health to decline
                        // AT some point add cool off to punching
                        if (that.state == 2) {
                            if ((entity instanceof Cell || entity instanceof Lymphocyte) && !entity.dead) {
                                entity.decreaseHealth();



                                if (entity.healthpoints > 0 && this.size == 1) {
                                    entity.decreaseHealth(); //deal double damage (if able to) -- basically only works on lymphocytes
                                }

                                if (entity.healthpoints <= 0) {
                                    if (entity instanceof Cell) this.game.camera.cellCount -= 1;

                                    if (entity instanceof Lymphocyte) this.game.camera.lymphocyteCount -= 1;

                                    entity.dead = true;
                                }

                                if (this.game.camera.cellCount == 0 && this.game.camera.lymphocyteCount == 0) {
                                    this.winner = true;
                                }
                            }
                        } else {

                            // Cell causes Micro's health to decline (used to be in Cell.js)
                            if (entity instanceof Cell && !entity.dead) {
                                // Cell touched the Micro, make the Micro take damage
                                if (entity.timer <= 0) {
                                    this.healthpoints -= 2;
                                    entity.timer = 1;
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

                            // Check collisions with bones and redblood cells and lymphocytes
                            if (entity instanceof Bone || entity instanceof RedBloodCell) {
                                if (this.lastBB.x <= (entity.BB.x - this.BB.radius)) { // Collided with the left
                                    this.x = entity.BB.x - this.BB.radius * 3.5;
                                    if (this.velocity.x > 0) {
                                        this.velocity.x = 0;
                                        this.velocity.y = 0;
                                    }
                                    //console.log("left collision");
                                } else if (this.lastBB.x >= entity.BB.x) { // Collided with the right
                                    this.x = entity.BB.x + this.BB.radius;
                                    if (this.velocity.x > 0) {
                                        this.velocity.x = 0;
                                        this.velocity.y = 0;
                                    }
                                    //console.log("right collision");
                                }

                                if (this.lastBB.y >= (entity.BB.y + this.BB.radius)) { // Collided with the bottom
                                    this.y = entity.BB.y + this.BB.radius;
                                    if (this.velocity.y > 0) {
                                        this.velocity.x = 0;
                                        this.velocity.y = 0;
                                    }
                                    //console.log("bottom collision");
                                } else if (this.lastBB.y <= entity.BB.y) { // Collided with the top
                                    this.y = entity.BB.y - this.BB.radius * 2.5;
                                    if (this.velocity.y > 0) {
                                        this.velocity.x = 0;
                                        this.velocity.y = 0;
                                    }
                                    //console.log("top collision");


                                }
                            }

                            if (entity instanceof Powerup) { //make them last for like 15 seconds only
                                entity.removeFromWorld = true;
                                if (entity.type === "speed") {
                                    entity.removeFromWorld = true;
                                    this.poweredUpSpeed = true;
                                    this.speedTime = 0;

                                } else if (entity.type === "size") {
                                    entity.removeFromWorld = true;
                                    this.poweredUpSize = true;
                                    this.sizeTime = 0;

                                } else if (entity.type === "stun") {
                                    this.stunTime = 0;
                                    this.stunMine = new Mine(this.game, this.x, this.y, "stun");
                                    this.game.addEntity(this.stunMine);
                                    this.stunMine.active = true;
                                    this.activeStunMine = true;

                                } else if (entity.type === "explode") {
                                    this.explodeTime = 0;
                                    this.explodeMine = new Mine(this.game, this.x, this.y, "explode");
                                    this.game.addEntity(this.explodeMine);
                                    entity.removeFromWorld = true;
                                    this.poweredUpExplode = true;

                                } else if (entity.type === "shield") {
                                    entity.removeFromWorld = true;
                                    this.poweredUpShield = true;
                                    this.shieldTime = 0;

                                } else if (entity.type === "clone") {
                                    entity.removeFromWorld = true;
                                    this.poweredUpClone = true;
                                    this.cloneTime = 0;
                                    for (var i = 0; i < 5; i++) {
                                        const clone = new Clone(this.game, this.x, this.y);
                                        this.game.addEntity(clone);
                                    }
                                }
                                this.powerUp();
                            }

                        }
                    }
                }
            }

            if (this.winner) {
                if (this.BB.collide(this.game.camera.portal.BB)) {
                    this.levelCount++;
                    this.winner = false;
                    if (this.levelCount == 2) {
                        this.game.camera.loadLevel(levelTwo, true, false);
                    } else if (this.levelCount == 3) {
                        this.game.camera.loadLevel(levelThree, true, false);
                    } else if (this.levelCount == 4) {
                        this.game.camera.loadLevel(levelFour, true, false);
                    } else if (this.levelCount == 5) {
                        this.game.camera.loadLevel(levelFive, true, false);
                    } else {

                    }
                    this.game.startInput();
                }

                if (this.levelCount == 5 && this.winner) {
                    this.won = true;
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
    };


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

        //Drawing the radius of the explosion
        if (this.poweredUpExplode) {
            ctx.save();
            ctx.translate(this.x - this.game.camera.x + 32, this.y - this.game.camera.y + 30); // Adjusted for center
            ctx.beginPath();
            ctx.arc(0, 0, 50, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
            ctx.fill();
            ctx.strokeStyle = 'red';
            ctx.stroke();
            ctx.restore();
        } else if (this.poweredUpShield && this.size === 1) {
            ctx.save();
            ctx.translate(this.x - this.game.camera.x + 47, this.y - this.game.camera.y + 35); // Adjusted for center
            ctx.beginPath();
            ctx.arc(0, 0, 50, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
            ctx.fill();
            ctx.strokeStyle = 'red'
            ctx.stroke();
            ctx.restore();
        }


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

    powerUp() {

        // speed powerup logic
        if (this.poweredUpSpeed == true && this.speedTime < 700) {
            this.walk = 400;
            this.speedTime++;
            // console.log("setting speed");
            // console.log(this.speedTime);
        } else if (this.poweredUpSpeed == true && this.speedTime >= 700) {
            this.walk = 200;
            this.speedTime = 0;
            this.poweredUpSpeed = false;
            // console.log("resetting speed");
        }

        // size powerup logic
        if (this.poweredUpSize == true && this.sizeTime < 700) {
            //console.log("setting size");
            this.sizeTime++;
            this.size = 1;
        } else if (this.poweredUpSize == true && this.sizeTime >= 700) {
            this.size = 0;
            this.sizeTime = 0;
            this.poweredUpSize = false;
            //console.log("resetting size");
        }
        if (this.poweredUpExplode) {

            if (this.explodeTime >= 420) {
                this.poweredUpExplode = false;
                this.explodeTime = 0;
            } else {
                // Explode logic
                for (const entity of this.game.entities) {
                    if ((entity instanceof Cell || entity instanceof Lymphocyte) && !entity.dead) {
                        const dx = this.x - entity.x;
                        const dy = this.y - entity.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 50) {
                            entity.decreaseHealth();
                            if (entity.healthpoints <= 0) {
                                if (entity instanceof Cell) this.game.camera.cellCount -= 1;
                                if (entity instanceof Lymphocyte) this.game.camera.lymphocyteCount -= 1;
                                entity.dead = true;
                            }
                        }
                    }
                }
                this.explodeTime++;
            }
        }

        if (this.activeStunMine == true && this.stunTime < 500) {
            this.stunTime++;
        } else if (this.activeStunMine == true && this.stunTime >= 500) {
            this.stunMine.active = false;
            //this.stunMine.update();
            this.stunTime = 0;
            this.activeStunMine = false;
        }

        if (this.poweredUpShield) {
            if (this.shieldTime >= 300) {
                this.poweredUpShield = false;
                this.shieldTime = 0;
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
                this.shieldTime++;
            }
        }


        // clone powerup logic NOT NEEDED HERE EVERYTHING IS IN MINE.JS
        // if (this.poweredUpClone == true && this.cloneTime < 50) {
        //     console.log("setting clone");
        //     this.cloneTime++;
        //     console.log(this.cloneTime);
        //     //this.size = 1;
        // } else if (this.poweredUpClone == true && this.cloneTime >= 50) {
        //     //this.size = 0;
        //     this.cloneTime = 0;
        //     this.poweredUpClone = false;
        //     console.log("resetting clone");
        // }

    };
};