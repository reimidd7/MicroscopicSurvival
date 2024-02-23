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

        this.title = true;
        this.spritesheet = ASSET_MANAGER.getAsset("./TitleSpritesheet.png");
        this.animation = new Animator(this.spritesheet, 143, 75, 52, 40, 3, 0.3); //flea
        this.animation2 = new Animator(this.spritesheet, 116, 0, 75, 70, 3, 0.3); //bird
        this.animation3 = new Animator(this.spritesheet, 148, 420, 48, 30, 3, 0.3); //dog
        this.animation4 = new Animator(this.spritesheet, 7, 280, 145, 140, 3, 0.2); //horse
        this.animation5 = new Animator(this.spritesheet, 108, 121, 74, 140, 3, 0.2); //human

        this.menuSelect = {
            start: false
        };

        this.micro = new Micro(this.game, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
        this.cell = new Cell(this.game, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
        this.lymphocyte = new Lymphocyte(this.game, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);

        this.microLives = 3;

        // Initialize counts
        this.lymphocyteCount = 0;
        this.cellCount = 0;

        this.speedboostLvl1 = new Animator(ASSET_MANAGER.getAsset("speed.png"), 0, 0, 0, 113, 1, 0, 0, false, true);

        this.minimap = new Minimap(this.game, 0, 460, 68); // Adjust size as needed


        this.loadLevel(levelOne, true);

        //Adding timer for cells
        this.cellSpawnTimer = 0;
        this.cellSpawnInterval = 5; //seconds
        this.cellsToSpawn = 5;



    }

    clearEntities() {
        for (const entity of this.game.entities) {
            entity.removeFromWorld = true;
        }
    };

    loadLevel(level, title) {
        this.title = title;
        this.level = level;
        this.clearEntities();

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

        //this.game.addEntity(this.micro);

        if (level.lymphocyte) {
            for (var i = 0; i < level.lymphocyte.length; i++) {
                let l = level.lymphocyte[i];
                this.game.addEntity(new Lymphocyte(this.game, l.x, l.y));
            }
        }

        // if (level.cell) {
        //     for (var i = 0; i < level.cell.length; i++) {
        //         let c = level.cell[i];
        //         this.game.addEntity(new Cell(this.game, c.x, c.y, this));
        //     }
        // }


        //This was for the showing Chris meeting spawnded 5 cell man
        if (!this.title) {
            this.cellSpawnTimer += this.game.clockTick;
            if (this.cellSpawnTimer >= this.cellSpawnInterval) {
                this.cellSpawnTimer = 0;
                for (let i = 0; i < 30; i++) {
                    let x = Math.random();
                    let y = Math.random();
                    this.game.addEntity(new Cell(this.game, x, y));
                }
            }
        }
        

        if (level.powerups) {
            for (var i = 0; i < level.powerups.length; i++) {
                let p = level.powerups[i];
                this.game.addEntity(new Powerup(this.game, p.x, p.y, p.type));
            }
        }

        this.micro.removeFromWorld = false;

        //this.micro = {x: PARAMS.CANVAS_WIDTH / 2, y: PARAMS.CANVAS_HEIGHT / 2};

        this.game.addEntity(this.micro);


        this.updateCounts();


    };


    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;

        let midpointX = PARAMS.CANVAS_WIDTH / 2 - MICRO_WIDTH / 2;
        let midpointY = PARAMS.CANVAS_HEIGHT / 2 - MICRO_HEIGHT / 2;


        // should keep micro completely centered in the screen
        this.x = this.micro.x - midpointX;
        this.y = this.micro.y - midpointY;


        if (this.title) {
            if ((this.game.click && this.game.click.x > 278 && this.game.click.x < 382) && (this.game.click && this.game.click.y > 425 && this.game.click.y < 452)) {
                this.title = false;
                //this.micro = new Micro(this.game, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
                this.loadLevel(levelOne, false);
            }
        }

        if (this.micro.won) {
            console.log("portal");
            this.game.addEntity(new Portal(this.game, 480, 675));

        }

        this.cellSpawnTimer += this.game.clockTick;

        // Check if it's time to spawn cells
        if (this.cellSpawnTimer >= this.cellSpawnInterval) {
            this.spawnCells();
            this.cellSpawnTimer = 0; // Reset the timer
        }
    };

    spawnCells() {
        // Count the total number of cells currently in the game
        let totalCells = this.game.entities.filter(entity => entity instanceof Cell).length;
    
        // limit of 30
        let cellsToSpawn = Math.min(30 - totalCells, this.cellsToSpawn);
    
        // Spawn number of cells
        for (let i = 0; i < cellsToSpawn; i++) {
            let x = Math.random() * PARAMS.CANVAS_WIDTH;
            let y = Math.random() * PARAMS.CANVAS_HEIGHT;
            this.game.addEntity(new Cell(this.game, x, y));
        }
    }
    

 
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


        const speedBoostSpriteX = xPositionCenter + this.game.ctx.measureText(level1Text).width + 10; // Adjust the x 
        const speedBoostSpriteY = yPosition - fontSize / 2; // Align with the text vertically
        this.speedboostLvl1.drawFrame(this.game.clockTick, this.game.ctx, speedBoostSpriteX, speedBoostSpriteY); // Adjust x and y positions



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


            ctx.drawImage(ASSET_MANAGER.getAsset("./title.png"), 108, 48, 468, 209);

            ctx.drawImage(ASSET_MANAGER.getAsset("./Micro_IDLE.png"), 140, 155, 128, 64);


            ctx.font = "24px sans-serif";
            ctx.fillStyle = "White";
            ctx.fillText("LEVELS:", 170, 320);
            ctx.font = "32px sans-serif";
            ctx.fillStyle = "White";
            ctx.fillText("START", PARAMS.CANVAS_WIDTH / 2 - 64, 450);
        } else if (this.micro.gameover) {
            // Code to draw the game over screen
            ctx.font = "60px Veranda";
            ctx.fillStyle = "White";
            ctx.fillText("GAME OVER", 170, 150);

        } else if (this.micro.won) {
            ctx.font = "40px Veranda";
            ctx.fillStyle = "White";
            ctx.fillText("YOU WON LEVEL" + this.level.label, 190, 100);
            ctx.font = "20px Veranda";
            ctx.fillText("Find Portal...", 300, 300);
        } else {

            // Check if the game has started for mini map pop up on Title screen 
            if (this.title) {
                // Game has not started, do not draw the minimap
                return;
            }

            //HUD and minimap
            this.renderHUD();
            this.minimap.draw(ctx);
        }

        // if (this.micro.gameover) {
        //     //add end screen here
        //     ctx.fillStyle = "#a6a2a8";
        //     ctx.fillRect(0, 0, width, height);
        //     this.animation = new Animator(ASSET_MANAGER.getAsset("./MicroSpritesheet.png"), 2, 0, 64, 60, 3, 0.4);
        //     this.animation.drawFrame(this.game.clockTick, ctx, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2, 1.5, true);
        // }
        // if (this.micro.won) {
        //     ctx.font = "40px Veranda";
        //     ctx.fillStyle = "White";
        //     ctx.fillText("YOU WON LEVEL" + this.level.label, 190, 100);
        //     ctx.font = "20px Veranda";
        //     ctx.fillText("Find Portal...", 300, 300);

        // }
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
