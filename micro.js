class Micro {
    // PU == power up;
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.micro = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./MicroSpritesheet.png");

        this.size = 0; // 0 = normal, 1 = big (PU), 2 = shield normal (PU), 3 = shield big (PU) 
        this.facing = 0; // 0 = forward, 1 = right, 2 = left
        this.state = 0; //  0 = idle, 1 = walking, 2 = punching, 3 = running (PU)

        // this.dead = false;
        // dead animation: this.animations = new Animator(this.spritesheet, 2, 0, 64, 60, 3, 0.4 )
        // health decline animation: this.animations = new Animator(this.spritesheet, 0, 75, 65, 60, 1, 0.1 )

        this.velocity = { x: 0, y: 0 };
        // Micro's animations
        //------------------------------------------------------------------------------------------
        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration
        //this.animations = new Animator(this.spritesheet, 5, 200, 64, 60, 3, 0.2)
        //this.x = x;
        //this.y = y;
        //------------------------------------------------------------------------------------------

        this.animations = [];
        this.loadAnimations();
        //this.animation = this.animations[this.state][this.size][this.facing];
    };

    loadAnimations() {
        for (var i = 0; i < 3; i++) { // 2 states for now.. punch and running no sprites yet
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
        this.animations[0][0][0] = new Animator(this.spritesheet, 2, 375, 64, 60, 2, 0.3);
        // this.animations[0][1][0] = new Animator(this.spritesheet, ) not implemented
        // this.animations[0][2][0] = new Animator(this.spritesheet, ) not implemented
        // this.animations[0][3][0] = new Animator(this.spritesheet, ) not implemented

        // WALK
        // State 1 = walking
        // facing 0 = forward facing
        this.animations[1][0][0] = new Animator(this.spritesheet, 2, 260, 64, 60, 3, 0.3);
        //this.animations[1][1][0] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][2][0] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][3][0] = new Animator(this.spritesheet, ) not implemented

        // State 1 = walking
        // facing 1 = right facing
        this.animations[1][0][1] = new Animator(this.spritesheet, 2, 320, 64, 60, 2, 0.3);
        //this.animations[1][1][1] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][2][1] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][3][1] = new Animator(this.spritesheet, ) not implemented

        // State 1 = walking
        // facing 2 = left facing
        this.animations[1][0][2] = new Animator(this.spritesheet, 2, 135, 64, 60, 2, 0.3);
        //this.animations[1][1][2] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][2][2] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][3][2] = new Animator(this.spritesheet, ) not implemented

        // PUNCHING - not implemented
        // State 2 = punching
        // facing 0 = forward facing
        this.animations[2][0][0] = new Animator(this.spritesheet, 5, 200, 64, 60, 3, 0.1); //not implemented
        this.animations[2][0][1] = new Animator(this.spritesheet, 5, 200, 64, 60, 3, 0.1); //not implemented
        this.animations[2][0][2] = new Animator(this.spritesheet, 5, 200, 64, 60, 3, 0.1); //not implemented

        //this.animations[2][1][0] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][2][0] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][3][0] = new Animator(this.spritesheet, ) not implemented

        // State 2 = punching
        // facing 1 = right facing
        //this.animations[2][0][1] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][1][1] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][2][1] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][3][1] = new Animator(this.spritesheet, ) not implemented

        // State 2 = punching
        // facing 2 = left facing
        //this.animations[2][0][2] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][1][2] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][2][2] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][3][2] = new Animator(this.spritesheet, ) not implemented

        // RUNNING - not implemented
        // State 3 = running
        // facing 0 = forward facing
        //this.animations[2][0][0] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][1][0] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][2][0] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][3][0] = new Animator(this.spritesheet, ) not implemented

        // State 3 = running
        // facing 1 = right facing
        //this.animations[2][0][1] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][1][1] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][2][1] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][3][1] = new Animator(this.spritesheet, ) not implemented

        // State 3 = running
        // facing 2 = left facing
        //this.animations[2][0][2] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][1][2] = new Animator(this.spritesheet, ) not implemented
        //this.animations[2][2][2] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][3][2] = new Animator(this.spritesheet, ) not implemented
    };

    update() {
        // all ground physics

        const WALK = 100;
        this.velocity.x = 0;
        this.velocity.y = 0;

        //update velocity
        if (this.game.left) this.velocity.x -= WALK;
        if (this.game.right) this.velocity.x += WALK;
        if (this.game.up) this.velocity.y -= WALK;
        if (this.game.down) this.velocity.y += WALK;


        //update position
        this.x += this.velocity.x * this.game.clockTick;
        this.y += this.velocity.y * this.game.clockTick;

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
        } else {

        }

        // update the direction
        if (this.velocity.x < 0) this.facing = 2;
        if (this.velocity.x > 0) this.facing = 1;
        if (this.velocity.y != 0) this.facing = 0;
        if (this.velocity.y == 0 && this.velocity.x == 0) this.facing = 0, this.state = 0;
        if (this.velocity.y == 0 && this.velocity.x == 0 && this.game.A) this.facing = 0, this.state = 2; //ugly code but punching while idle need this

    };

    draw(ctx) {
        this.animation = this.animations[this.state][this.size][this.facing];
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    };
};