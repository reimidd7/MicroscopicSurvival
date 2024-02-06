/** NOT IMPLEMENTED YET
 * 
 */

class SceneManager {
    constructor(game) {
        this.game = game;
        //this.game.camera = this;

        this.loadLevel(levelOne);
    }

    loadLevel(level) {

        this.game.entities = [];
        this.level = level;





        for (var i = 0; i < level.cornertiles.length; i++) {
            let corner = level.cornertiles[i];
            this.game.addEntity(new CornerTiles(this.game, corner.x, corner.y, corner.flip));
        }
        for (var i = 0; i < level.topbottomwalls.length; i++) {
            let topbottom = level.topbottomwalls[i];
            this.game.addEntity(new TopBottomWalls(this.game, topbottom.x, topbottom.y, topbottom.flip));
        }
        for (var i = 0; i < level.leftrightwalls.length; i++) {
            let leftright = level.leftrightwalls[i];
            this.game.addEntity(new LeftRightWalls(this.game, leftright.x, leftright.y, leftright.flip));
        }

        for (var i = 0; i < level.normaltiles.length; i++) {
            let normal = level.normaltiles[i];
            this.game.addEntity(new NormalTiles(this.game, normal.x, normal.y));
        }

        for (var i = 0; i < level.rippedtiles.length; i++) {
            let rip = level.rippedtiles[i];
            this.game.addEntity(new RippedTiles(this.game, rip.x, rip.y));
        }

        // ADD ENEMIES TO CANVAS USING LEVELS.JS
        for (var i = 0; i < level.lymphocyte.length; i++) {
            let l = level.lymphocyte[i];
            this.game.addEntity(new Lymphocyte(this.game, l.x, l.y));
        }

        for (var i = 0; i < level.cell.length; i++) {
            let c = level.cell[i];
            this.game.addEntity(new Cell(this.game, c.x, c.y));
        }

        this.game.addEntity(new Micro(this.game, 100, 100));



    };

    update() {

    };
}