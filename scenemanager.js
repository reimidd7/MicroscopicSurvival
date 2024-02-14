const MICRO_WIDTH = 64;
const MICRO_HEIGHT = 60;
class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.title = true;

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

        if (level.powerups) {
            for (var i = 0; i < level.powerups.length; i++) {
                let p = level.powerups[i];
                this.game.addEntity(new Powerup(this.game, p.x, p.y, p.type));
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
        //console.log("midpoint" + midpointX);
        this.y = this.micro.y - midpointY;

    };

    draw(ctx) {
        //title screen 
        if (this.title) {
            const width = 100;
            const height = 100;
            ctx.fillStyle = "White";
            ctx.strokeRect(0,0,width, height);

        }

    };
}