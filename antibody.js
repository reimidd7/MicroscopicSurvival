class Antibody {

    constructor(game, x, y, target) {
        Object.assign(this, {game, x, y, target});

        this.removeFromWorld = false;

        this.spritesheet = ASSET_MANAGER.getAsset("antibody.png");

        this.elapsedTime = 0;

        this.x = x;
        this.y = y;

        this.target = target;

        this.speed = 300;

        // to make antibody head toward Micro (for later)
        var dist = getDistance(this, this.target);   
        this.velocity = {x : (this.target.x - this.x) / dist * this.speed, y : (this.target.y - this.y) / dist * this.speed };
        
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

        //ctx.drawImage(offscreenCanvas, x, y, h, h);

        this.animator[this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

}
