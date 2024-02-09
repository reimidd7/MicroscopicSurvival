/** NOT IMPLEMENTED YET
 * 
 */
const MICRO_WIDTH = 64;
const MICRO_HEIGHT = 60;
class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.loadLevel(levelOne);
    }

    loadLevel(level) {
       // this.game.entities = [];
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

        for (var i = 0; i < level.bones.length; i++) {
            let bone = level.bones[i];
            this.game.addEntity(new Bone(this.game, bone.x, bone.y));
        }

        for (var i = 0; i < level.redbloodcells.length; i++) {
            let blood = level.redbloodcells[i];
            this.game.addEntity(new RedBloodCell(this.game, blood.x, blood.y));
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

        this.micro = new Micro(this.game, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
        this.game.addEntity(this.micro);

    };

    update() {

        let midpointX = PARAMS.CANVAS_WIDTH / 2 - MICRO_WIDTH / 2 ;
        let midpointY = PARAMS.CANVAS_HEIGHT / 2 - MICRO_HEIGHT / 2;

        // should keep micro completely centered in the screen
        this.x = this.micro.x - midpointX;
        console.log("midpoint" + midpointX); 
        this.y = this.micro.y - midpointY;

    };

    draw() {

    };
}