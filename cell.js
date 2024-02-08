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
        
        // for animations
        this.animator = [];
        this.loadAnimations();

    }

    chaseTarget(target) {
        const directionX = target.x - this.x;
        const directionY = target.y - this.y;

        const distance = Math.sqrt(directionX ** 2 + directionY ** 2);

        let vectorDirectionX, vectorDirectionY;

        if (distance !== 0) {
             vectorDirectionX = directionX / distance;
             vectorDirectionY = directionY / distance;
        } else {
            vectorDirectionX = 0;
            vectorDirectionY = 0;
        }

        // const arrivalThreshold = 10;

        // if (distance < arrivalThreshold) {
        //     // If close enough, make the cell move in a circular motion around the Micro entity
        //     const angle = Math.atan2(this.y - target.y, this.x - target.x);
        //     const circleRadius = 50; // Adjust the radius of the circular motion as needed
    
        //     vectorDirectionX = Math.cos(angle) * circleRadius;
        //     vectorDirectionY = Math.sin(angle) * circleRadius;
        // }

        // Adjust the speed as needed
        const chaseSpeed = 100;

        this.velocity.x = vectorDirectionX * chaseSpeed;
        this.velocity.y = vectorDirectionY * chaseSpeed;

        // Update position based on velocity
        this.x += this.velocity.x * this.game.clockTick;
        this.y += this.velocity.y * this.game.clockTick;
    }

    loadAnimations() {
        for (var i = 0; i < 4; i++) {
            this.animator.push([]);
        }
       
        //Right animation
       this.animator[0] = new Animator(this.spritesheet, 0, 53, 45, 102, 5, 0.4, false, true);
        
       //Left animation
       this.animator[1] = new Animator(this.spritesheet, 0, 0, 45, 51, 5, 0.4, false, true);
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
                    // Collision detected, calculate new positions for avoiding overlap
                    const angle = Math.atan2(dy, dx);
                    const overlap = this.radius + entity.radius - distance;
                    const separationDistance = overlap * 1.5; // Adjust the factor to control separation distance

                    this.x += separationDistance * Math.cos(angle);
                    this.y += separationDistance * Math.sin(angle);

                    entity.x -= separationDistance * Math.cos(angle);
                    entity.y -= separationDistance * Math.sin(angle);

                    // Calculate new velocities for both cells
                    const thisSpeed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
                    const entitySpeed = Math.sqrt(entity.velocity.x ** 2 + entity.velocity.y ** 2);

                    const thisAngle = Math.atan2(this.velocity.y, this.velocity.x);
                    const entityAngle = Math.atan2(entity.velocity.y, entity.velocity.x);

                    this.velocity.x = thisSpeed * Math.cos(thisAngle + angle);
                    this.velocity.y = thisSpeed * Math.sin(thisAngle + angle);

                    entity.velocity.x = entitySpeed * Math.cos(entityAngle + angle + Math.PI);
                    entity.velocity.y = entitySpeed * Math.sin(entityAngle + angle + Math.PI);
                } else if (entity instanceof Micro) {
                    if (targetEntity) {
                        that.hitpoints -= 1;
                    }
            }
        }
    }
        const targetEntity = this.game.entities.find(entity => entity instanceof Micro);
        if (targetEntity) {
            //console.log('Micro is taking -1 damage');
            this.chaseTarget(targetEntity);
        }
    }
}


    draw(ctx) {
        this.animator[this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1, true);

        // const circleX = this.x + this.radius; // Center X
        // const circleY = this.y + this.radius; // Center Y
    
        // ctx.beginPath();
        // ctx.arc(circleX, circleY, this.radius, 0, 2 * Math.PI, false);
        // ctx.strokeStyle = 'red';
        // ctx.stroke();
        // ctx.closePath();
    }
}



