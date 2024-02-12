const MICRO_WIDTH = 64;
const MICRO_HEIGHT = 60;
class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.title = true;
        this.spritesheet = ASSET_MANAGER.getAsset("./TitleSpritesheet.png")
        this.animation = new Animator(this.spritesheet, 143, 75, 52, 40, 3, 0.3); //flea
        this.animation2 = new Animator(this.spritesheet, 116, 0, 75, 70, 3, 0.3); //bird
        this.animation3 = new Animator(this.spritesheet, 148, 420, 48, 30, 3, 0.3); //dog
        this.animation4 = new Animator(this.spritesheet, 7, 280, 145, 140, 3, 0.2); //horse
        this.animation5 = new Animator(this.spritesheet, 108, 121, 74, 140, 3, 0.2); //human



        this.menuSelect = {
            start: false
        };

        this.micro = new Micro(this.game, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);


        this.loadLevel(levelOne, true);
    }

    // clearEntities() {
    //     this.game.entities.foreach(function (entity) {
    //         entity.removeFromWorld = true;
    //     });
    // };

    loadLevel(level, title) {
        this.title = title;
        this.level = level;
        // this.clearEntities();


        for (var i = 0; i < level.cornertiles.length; i++) {
            let corner = level.cornertiles[i];
            this.game.addEntity(new CornerTiles(this.game, corner.x, corner.y, corner.flip));
        }

        if (level.topbottomwalls) {
            for (var i = 0; i < level.topbottomwalls.length; i++) {
                let topbottom = level.topbottomwalls[i];
                this.game.addEntity(new TopBottomWalls(this.game, topbottom.x, topbottom.y, topbottom.flip));
            }
        }

        if (level.leftrightwalls) {
            for (var i = 0; i < level.leftrightwalls.length; i++) {
                let leftright = level.leftrightwalls[i];
                this.game.addEntity(new LeftRightWalls(this.game, leftright.x, leftright.y, leftright.flip));
            }
        }

        if (level.normaltiles) {
            for (var i = 0; i < level.normaltiles.length; i++) {
                let normal = level.normaltiles[i];
                this.game.addEntity(new NormalTiles(this.game, normal.x, normal.y));
            }
        }

        if (level.rippedtiles) {
            for (var i = 0; i < level.rippedtiles.length; i++) {
                let rip = level.rippedtiles[i];
                this.game.addEntity(new RippedTiles(this.game, rip.x, rip.y));
            }
        }

        if (level.bones) {
            for (var i = 0; i < level.bones.length; i++) {
                let bone = level.bones[i];
                this.game.addEntity(new Bone(this.game, bone.x, bone.y));
            }
        }

        if (level.redbloodcells) {
            for (var i = 0; i < level.redbloodcells.length; i++) {
                let blood = level.redbloodcells[i];
                this.game.addEntity(new RedBloodCell(this.game, blood.x, blood.y));
            }
        }

        if (level.lymphocyte) {
            for (var i = 0; i < level.lymphocyte.length; i++) {
                let l = level.lymphocyte[i];
                this.game.addEntity(new Lymphocyte(this.game, l.x, l.y));
            }
        }

        if (level.cell) {
            for (var i = 0; i < level.cell.length; i++) {
                let c = level.cell[i];
                this.game.addEntity(new Cell(this.game, c.x, c.y));
            }
        }

        this.game.addEntity(this.micro);

    };

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;

        let midpointX = PARAMS.CANVAS_WIDTH / 2 - MICRO_WIDTH / 2;
        let midpointY = PARAMS.CANVAS_HEIGHT / 2 - MICRO_HEIGHT / 2;

        // should keep micro completely centered in the screen
        this.x = this.micro.x - midpointX;
        console.log("midpoint" + midpointX);
        this.y = this.micro.y - midpointY;

        if (this.title && (this.game.click || this.game.A)) {
            if ((this.game.click && this.game.click.x > 278 && this.game.click.x < 382) && (this.game.click && this.game.click.y > 425 && this.game.click.y < 452)) {
                console.log("in box");
                this.title = false;
                this.micro = new Micro(this.game, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
                this.loadLevel(levelOne, false);
            }
        }
    };

    draw(ctx) {
        //title screen 
        if (this.title) {
            const width = PARAMS.CANVAS_WIDTH;
            const height = PARAMS.CANVAS_HEIGHT;


            ctx.fillStyle = "#a6a2a8";
            ctx.fillRect(0, 0, width, height);


            // Levels
            this.animation.drawFrame(this.game.clockTick, ctx, 164, 350, 1, true);
            this.animation2.drawFrame(this.game.clockTick, ctx, 226, 335, .75, true);
            this.animation3.drawFrame(this.game.clockTick, ctx, 282, 340, 1.5, true);
            this.animation4.drawFrame(this.game.clockTick, ctx, 355, 300, .65, true);
            this.animation5.drawFrame(this.game.clockTick, ctx, 460, 318, .5, true);

            ctx.drawImage(ASSET_MANAGER.getAsset("./title.png"), 108, 38, 468, 209);

            ctx.font = "32px sans-serif";
            ctx.fillStyle = "White";
            ctx.fillText("START", PARAMS.CANVAS_WIDTH / 2 - 64, 450);



        }

    };
}