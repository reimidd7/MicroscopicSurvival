class TransitionScreen {
    constructor(game, x, y, level) {
        Object.assign(this, { game, x, y, level });

        this.spritesheet = ASSET_MANAGER.getAsset("./TitleSpritesheet.png");
        this.animation = new Animator(this.spritesheet, 143, 75, 52, 40, 3, 0.3); //flea
        this.animation2 = new Animator(this.spritesheet, 116, 0, 75, 70, 3, 0.3); //bird
        this.animation3 = new Animator(this.spritesheet, 148, 420, 48, 30, 3, 0.3); //dog
        this.animation4 = new Animator(this.spritesheet, 7, 280, 145, 140, 3, 0.2); //horse
        this.animation5 = new Animator(this.spritesheet, 108, 121, 74, 140, 3, 0.2); //human

        this.spritesheet2 = ASSET_MANAGER.getAsset("./RIP.png");
        this.animation6 = new Animator(this.spritesheet2, 0, 0, 64, 64, 2, 0.5);

        this.elapsed = 0;
    };

    update() {
        this.elapsed += this.game.clockTick;

        if (this.game.micro.transitionlife) {
            if (this.elapsed > 1) this.game.camera.loadLevel(this.level, false, false);
        } else {
            if (this.elapsed > 2) this.game.camera.loadLevel(this.level, false, false);
        }
    };

    draw(ctx) {
        ctx.fillStyle = "Black";
        ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        if (this.game.micro.transitionlife) {
            ctx.font = "40px Veranda";
            ctx.fillStyle = "White";
            const xPositionCenter = (PARAMS.CANVAS_WIDTH - ctx.measureText("Life lost :(").width) / 2; // Center alignment position
            ctx.fillText("Life lost :(", xPositionCenter - 5, PARAMS.CANVAS_HEIGHT / 2);
        } else {
            // add next level here
            ctx.font = "40px Veranda";
            ctx.fillStyle = "White";
            const xPositionCenter = (PARAMS.CANVAS_WIDTH - ctx.measureText("STARTING LEVEL " + this.level.label + "...").width) / 2; // Center alignment position
            ctx.fillText("STARTING LEVEL " + this.level.label + "...", xPositionCenter - 5, PARAMS.CANVAS_HEIGHT / 2);

            ctx.fillStyle = "#5C5B5B";
            ctx.fillRect(150, 295, 370, 100);




            if (this.game.micro.levelCount == 1) {
                ctx.beginPath();
                ctx.arc(190, 360, 29, 0, 2 * Math.PI);
                ctx.fillStyle = "#FFFFA4";
                ctx.fill();
                this.animation.drawFrame(this.game.clockTick, ctx, 164, 350, 1, true);
                this.animation2.drawFrame(this.game.clockTick, ctx, 226, 335, .75, true);
                this.animation3.drawFrame(this.game.clockTick, ctx, 282, 340, 1.5, true);
                this.animation4.drawFrame(this.game.clockTick, ctx, 355, 300, .65, true);
                this.animation5.drawFrame(this.game.clockTick, ctx, 460, 318, .5, true);

            } else if (this.game.micro.levelCount == 2) {
                ctx.beginPath();
                ctx.arc(250, 360, 28, 0, 2 * Math.PI);
                ctx.fillStyle = "#FFFFA4";
                ctx.fill();
                this.animation6.drawFrame(this.game.clockTick, ctx, 154, 326, 1, true);
                this.animation2.drawFrame(this.game.clockTick, ctx, 226, 335, .75, true);
                this.animation3.drawFrame(this.game.clockTick, ctx, 282, 340, 1.5, true);
                this.animation4.drawFrame(this.game.clockTick, ctx, 355, 300, .65, true);
                this.animation5.drawFrame(this.game.clockTick, ctx, 460, 318, .5, true);
            } else if (this.game.micro.levelCount == 3) {
                ctx.beginPath();
                ctx.arc(318, 358, 35, 0, 2 * Math.PI);
                ctx.fillStyle = "#FFFFA4";
                ctx.fill();
                this.animation6.drawFrame(this.game.clockTick, ctx, 154, 326, 1, true);
                this.animation6.drawFrame(this.game.clockTick, ctx, 218, 326, 1, true);
                this.animation3.drawFrame(this.game.clockTick, ctx, 282, 340, 1.5, true);
                this.animation4.drawFrame(this.game.clockTick, ctx, 355, 300, .65, true);
                this.animation5.drawFrame(this.game.clockTick, ctx, 460, 318, .5, true);
            } else if (this.game.micro.levelCount == 4) {
                ctx.beginPath();
                ctx.arc(402, 345, 52, 0, 2 * Math.PI);
                ctx.fillStyle = "#FFFFA4";
                ctx.fill();
                this.animation6.drawFrame(this.game.clockTick, ctx, 154, 326, 1, true);
                this.animation6.drawFrame(this.game.clockTick, ctx, 218, 326, 1, true);
                this.animation6.drawFrame(this.game.clockTick, ctx, 282, 326, 1, true);
                this.animation4.drawFrame(this.game.clockTick, ctx, 355, 300, .65, true);
                this.animation5.drawFrame(this.game.clockTick, ctx, 460, 318, .5, true);
            } else if (this.game.micro.levelCount == 5) {
                ctx.beginPath();
                ctx.arc(485, 350, 36, 0, 2 * Math.PI);
                ctx.fillStyle = "#FFFFA4";
                ctx.fill();
                this.animation6.drawFrame(this.game.clockTick, ctx, 154, 326, 1, true);
                this.animation6.drawFrame(this.game.clockTick, ctx, 223, 326, 1, true);
                this.animation6.drawFrame(this.game.clockTick, ctx, 292, 326, 1, true);
                this.animation6.drawFrame(this.game.clockTick, ctx, 363, 326, 1, true);
                this.animation5.drawFrame(this.game.clockTick, ctx, 460, 318, .5, true);
            }

        }


    };

    drawMinimap() {

    };
};