class Antibody {

    constructor(game, x, y, target) {
        Object.assign(this, {game, x, y, target});

        this.spritesheet = ASSET_MANAGER.getAsset("antibody.png");

        this.facing = 0; //0 = right, 1 = left, 2 = up, 3 = down

        this.x = x;
        this.y = y;

        this.velocity = {x : 0, y : 0};

        // to make antibody head toward Micro (for later)
        //var dist = distance(this, this.target);   
        //this.speed = 200;
        //this.velocity = {x : (this.target.x - this.x) / dist * this.speed, y : (this.target.y - this.y) / dist * this.speed };
        
        this.animator = [];

        this.loadAnimations();
    };

    loadAnimations() {
        for (var i = 0; i < 4; i++) {
            this.animator.push([]);
        }

        this.animator[0] = new Animator(this.spritesheet, 0, 0, 126, 92, 7, 0.1);
        //add 3 other animations for the 3 other directions
    };

    draw(ctx) {
        //FOR ROTATING IN 4 DIRECTIONS
        // let x = 63;
        // let y = 96;
        // let w = 24;
        // let h = 24;

        // let rotateVal = 0; //0 = 0, 1 = Math.PI/2, 2 = Math.PI, 3 = (3*Math.PI)/2

        // var offscreenCanvas = document.createElement('canvas');
        // offscreenCanvas.width = 126;
        // offscreenCanvas.height = 92;

        // var offscreenCtx = offscreenCanvas.getContext('2d');
        // offscreenCtx.save();

        // offscreenCtx.translate(x, y);
        // offscreenCtx.rotate(rotateVal);
        // offscreenCtx.translate(-x, -y);
        // offscreenCtx.drawImage(this.spritesheet, 0, 0, 126, 92, 7, 0.1); //check this
        // offscreenCtx.restore();

        ctx.drawImage(offscreenCanvas, x, y, h, h);

        this.animator[this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

    update() {
        //update x and y based off Micro's location 

        this.velocity.x = 0;
        this.velocity.y = 0;
        
        //update based on Micro's location
        if (this.velocity.x > 0 && this.velocity.y > 0) {
            this.facing = 0;
        } else if (this.velocity.x < 0 && this.velocity.y < 0) {
            this.facing = 1;
        } else if (this.velocity.x < 0 && this.velocity.y > 0) {
            this.facing = 2;
        } else if (this.velocity.x > 0 && this.velocity.y < 0) {
            this.facing = 3;
        }

        //for now, eventually will use this.velocity.x/y
        this.x += 500 * this.game.clockTick;
        this.y += 0 * this.game.clockTick
    };

}
