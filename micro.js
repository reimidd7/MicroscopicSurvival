class Micro {
    // PU == power up;
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.game.micro = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./MicroSpritesheet.png");

        // this.size = 0; // 0 = normal, 1 = big (PU), 2 = shield normal (PU), 3 = shield big (PU) 
        // this.facing = 0; // 0 = forward, 1 = right, 2 = left
        // this.state = 0; //  0 = idle, 1 = walking, 2 = punching, 3 = running (PU)
        
        // this.dead = false;

        // Micro's animations
        //------------------------------------------------------------------------------------------
        //spritesheet, xStart, yStart, width, height, frameCount, frameDuration
        // this.animations = new Animator(this.spritesheet, 320, 0, 160, 150, 2, 0.3 )
        // this.x = 0;
        // this.y = 0;
        // this.speed = 50;
        //------------------------------------------------------------------------------------------

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for (var i = 0; i < 4; i++) { // 4 states
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
        this.animations[0][0][0] = new Animator(this.spritesheet, 0, 0, 160, 150, 2, 0.3)
        // this.animations[0][1][0] = new Animator(this.spritesheet, ) not implemented
        // this.animations[0][2][0] = new Animator(this.spritesheet, ) not implemented
        // this.animations[0][3][0] = new Animator(this.spritesheet, ) not implemented
        
        // WALK
        // State 1 = walking
        // facing 0 = forward facing
        this.animations[1][0][0] = new Animator(this.spritesheet, 955, 0, 160, 150, 3, 0.3)
        //this.animations[1][1][0] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][2][0] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][3][0] = new Animator(this.spritesheet, ) not implemented

        // State 1 = walking
        // facing 1 = right facing
        this.animations[1][0][1] = new Animator(this.spritesheet, 650, 0, 160, 150, 2, 0.3)
        //this.animations[1][1][1] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][2][1] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][3][1] = new Animator(this.spritesheet, ) not implemented

        // State 1 = walking
        // facing 2 = left facing
        this.animations[1][0][2] = new Animator(this.spritesheet, 320, 0, 160, 150, 2, 0.3)
        //this.animations[1][1][2] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][2][2] = new Animator(this.spritesheet, ) not implemented
        //this.animations[1][3][2] = new Animator(this.spritesheet, ) not implemented

        // PUNCHING - not implemented
        // State 2 = punching
        // facing 0 = forward facing
        //this.animations[2][0][0] = new Animator(this.spritesheet, ) not implemented
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

    };

    draw(ctx) {
        this.animations.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    };
};