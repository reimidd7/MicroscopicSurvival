const MICRO_WIDTH = 64;
const MICRO_HEIGHT = 60;

const LYMPOCYTE_WIDTH = 64;
const LYMPOCYTE_HEIGHT = 60;

const CELL_WIDTH = 64;
const CELL_HEIGHT = 60;
class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.micro = new Micro(this.game, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
        this.cell = new Cell(this.game, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
        this.lymphocyte = new Lymphocyte(this.game, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);

        this.microLives =3;

        // Initialize counts
        this.lymphocyteCount = 0;
        this.cellCount = 0;

        this.loadLevel(levelOne);

        this.speedboostLvl1 = new Animator(ASSET_MANAGER.getAsset("./speed.png"), 0, 0, 0, 113, 1, 0, 0, false, true);
        
        this.minimap = new Minimap(this.game, 0, 460,68); // Adjust size as needed

    
    }

    loadLevel(level) {
        //this.game.entities = [];
        this.level = level;


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

        if (level.redbloodcell) {
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

        this.updateCounts();

    };

    
    update() {

        let midpointX = PARAMS.CANVAS_WIDTH / 2 - MICRO_WIDTH / 2;
        let midpointY = PARAMS.CANVAS_HEIGHT / 2 - MICRO_HEIGHT / 2;


        // should keep micro completely centered in the screen
        this.x = this.micro.x - midpointX;
        console.log("midpoint" + midpointX);
        this.y = this.micro.y - midpointY;



    };


    //start of HUD

    // How many enemies are in the level
    updateCounts() {
    
        this.lymphocyteCount = this.level.lymphocyte ? this.level.lymphocyte.length : 0;
     
        this.cellCount = this.level.cell ? this.level.cell.length : 0;
    }

    // Create the HUD with all components.
    renderHUD() {

        //Number of Enemies and Level
        const xPositionLeft = 10; 
        const xPositionCenter = (PARAMS.CANVAS_WIDTH - this.game.ctx.measureText("Level 1: " + (this.level.level1Count || 0)).width) / 2; // Center alignment position
        const yPosition = 20;
        const lineHeight = 30;
        const fontSize = 15;
        this.game.ctx.font = fontSize + "px Comic Sans MS";
        this.game.ctx.fillStyle = "white";
    
        
        this.game.ctx.fillText("Lymphocytes: " + this.lymphocyteCount, xPositionLeft, yPosition);
    
        
        this.game.ctx.fillText("Cellman: " + this.cellCount, xPositionLeft, yPosition + lineHeight);
    
        const level1Text = "Level 1 "; // Text for level 1
        // const level1Count = this.level.level1Count || 0; // Get level 1 count from level object
        //this.game.ctx.fillText(level1Text + level1Count, xPositionCenter, yPosition + 2 * lineHeight);
        this.game.ctx.fillText(level1Text, xPositionCenter, yPosition);

        
        const speedBoostSpriteX = xPositionCenter + this.game.ctx.measureText(level1Text).width + 10; // Adjust the x position as needed
        const speedBoostSpriteY = yPosition - fontSize / 2; // Align with the text vertically
        this.speedboostLvl1.drawFrame(this.game.clockTick, this.game.ctx, speedBoostSpriteX, speedBoostSpriteY); // Adjust x and y positions as needed 



        //Micro lives as circle change into hearts when sprite is found 
        const circleSize = 20;
        const circleGap1 = 20;
        const circleY1 = 20;
        const circleColor = 'green';
        const greyColor = 'grey';

        for (let i = 0; i < 3; i++) {
            const circleX = PARAMS.CANVAS_WIDTH - (3 - i) * (circleSize + circleGap1);
            this.game.ctx.beginPath();
            this.game.ctx.arc(circleX, circleY1, circleSize, 0, 2 * Math.PI);
            this.game.ctx.fillStyle = i < this.microLives ? circleColor : greyColor;
            this.game.ctx.fill();
            this.game.ctx.closePath();
        }
    
    }
    
    

    draw() {
        this.renderHUD();

        this.minimap.draw(this.game.ctx);
    };



    
}

class Minimap {
    constructor(game, x, y, size) {
        Object.assign(this, { game, x, y, size });
    }

    update() {
        // Update logic if needed
    }

    draw(ctx) {

        //background color
        ctx.fillStyle = "lightgrey";
        ctx.fillRect(this.x, this.y, this.size, this.size);
        // Draw minimap border
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.x, this.y, this.size, this.size);

        // Draw entities on the minimap
        for (const entity of this.game.entities) {
            if (entity.drawMinimap) {
                entity.drawMinimap(ctx, this.x, this.y, this.size);
            }
        }
    }
}
