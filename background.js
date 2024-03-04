class CornerTiles {
    constructor(game, x, y, flip, level) {
        Object.assign(this, { game, x, y, flip, level });

        if (this.level.label == "1") {
            this.spritesheet = ASSET_MANAGER.getAsset("./blackBackground.png");
        } else if (this.level.label == "2") {
            this.spritesheet = ASSET_MANAGER.getAsset("./blueBackground.png");
        } else if (this.level.label == "3") {
            this.spritesheet = ASSET_MANAGER.getAsset("./brownBackground.png");
        } else if (this.level.label == "4") {
            this.spritesheet = ASSET_MANAGER.getAsset("./tanBackground.png");
        } else if (this.level.label == "5") {
            this.spritesheet = ASSET_MANAGER.getAsset("./redtiles_bright.png");
        }
       
        this.BB = new BoundingBox(this.x, this.y, 32, 32);


    }

    update() {

    };

    // drawMiniMap(ctx, mmX, mmY) {

    // }

    draw(ctx) {
        ctx.save();
        // 1 == flip horizontal | 2 == flip vertical | 3 == flip horizontal and vertical
        if (this.flip == 1) {
            ctx.scale(-1, 1);
            ctx.drawImage(this.spritesheet, 142, 15, 16, 16, (-this.x - 32) + this.game.camera.x, this.y - this.game.camera.y, 32, 32);

            ctx.restore();

        } else if (this.flip == 2) {
            ctx.scale(1, -1);
            ctx.drawImage(this.spritesheet, 142, 15, 16, 16, this.x - this.game.camera.x, (-this.y - 32) + this.game.camera.y, 32, 32);

            ctx.restore();

        } else if (this.flip == 3) {
            ctx.scale(-1, -1);
            ctx.drawImage(this.spritesheet, 142, 15, 16, 16, (-this.x - 32) + this.game.camera.x, (-this.y - 32) + this.game.camera.y, 32, 32);

            ctx.restore();

        } else {
            ctx.drawImage(this.spritesheet, 142, 15, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32, 32);


        }

        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'White';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.w, this.BB.h);
        }
    };

};

class TopBottomWalls {
    constructor(game, x, y, flip, level) {
        Object.assign(this, { game, x, y, flip, level });

        if (this.level.label == "1") {
            this.spritesheet = ASSET_MANAGER.getAsset("./blackBackground.png");
        } else if (this.level.label == "2") {
            this.spritesheet = ASSET_MANAGER.getAsset("./blueBackground.png");
        } else if (this.level.label == "3") {
            this.spritesheet = ASSET_MANAGER.getAsset("./brownBackground.png");
        } else if (this.level.label == "4") {
            this.spritesheet = ASSET_MANAGER.getAsset("./tanBackground.png");
        } else if (this.level.label == "5") {
            this.spritesheet = ASSET_MANAGER.getAsset("./redtiles_bright.png");
        }

        this.BB = new BoundingBox(this.x, this.y, 32, 32);

    }

    update() {

    };

    draw(ctx) {
        ctx.save();

        // 1 == light red up
        if (this.flip == 1) {
            ctx.scale(1, -1);
            ctx.drawImage(this.spritesheet, 111, 15, 16, 16, this.x - this.game.camera.x, (-this.y - 32) + this.game.camera.y, 32, 32);

            ctx.restore();

        } else {
            ctx.drawImage(this.spritesheet, 111, 15, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32, 32);

        }

        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'White';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.w, this.BB.h);
        }
    };

};

class LeftRightWalls {
    constructor(game, x, y, flip, level ) {
        Object.assign(this, { game, x, y, flip, level });

        if (this.level.label == "1") {
            this.spritesheet = ASSET_MANAGER.getAsset("./blackBackground.png");
        } else if (this.level.label == "2") {
            this.spritesheet = ASSET_MANAGER.getAsset("./blueBackground.png");
        } else if (this.level.label == "3") {
            this.spritesheet = ASSET_MANAGER.getAsset("./brownBackground.png");
        } else if (this.level.label == "4") {
            this.spritesheet = ASSET_MANAGER.getAsset("./tanBackground.png");
        } else if (this.level.label == "5") {
            this.spritesheet = ASSET_MANAGER.getAsset("./redtiles_bright.png");
        }
        this.BB = new BoundingBox(this.x, this.y, 32, 32);


    }

    update() {};

    draw(ctx) {
        ctx.save();

        // 1 == light red Left
        if (this.flip == 1) {
            ctx.scale(-1, 1);
            ctx.drawImage(this.spritesheet, 143, 31, 16, 16, (-this.x - 32) + this.game.camera.x, this.y - this.game.camera.y, 32, 32);

            ctx.restore();

        } else {
            ctx.drawImage(this.spritesheet, 143, 31, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32, 32);

        }
        
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'White';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.w, this.BB.h);
        }
    };

};


class RippedTiles {
    constructor(game, x, y, level ) {
        Object.assign(this, { game, x, y, level });

        if (this.level.label == "1") {
            this.spritesheet = ASSET_MANAGER.getAsset("./blackBackground.png");
        } else if (this.level.label == "2") {
            this.spritesheet = ASSET_MANAGER.getAsset("./blueBackground.png");
        } else if (this.level.label == "3") {
            this.spritesheet = ASSET_MANAGER.getAsset("./brownBackground.png");
        } else if (this.level.label == "4") {
            this.spritesheet = ASSET_MANAGER.getAsset("./tanBackground.png");
        } else if (this.level.label == "5") {
            this.spritesheet = ASSET_MANAGER.getAsset("./redtiles_bright.png");
        }
        this.BB = new BoundingBox(this.x, this.y, 32, 32);
    };


    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 79, 31, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32, 32);

        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'White';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.w, this.BB.h);
        }
    };

};

class NormalTiles {
    constructor(game, x, y, level) {
        Object.assign(this, { game, x, y, level });

        if (this.level.label == "1") {
            this.spritesheet = ASSET_MANAGER.getAsset("./blackBackground.png");
        } else if (this.level.label == "2") {
            this.spritesheet = ASSET_MANAGER.getAsset("./blueBackground.png");
        } else if (this.level.label == "3") {
            this.spritesheet = ASSET_MANAGER.getAsset("./brownBackground.png");
        } else if (this.level.label == "4") {
            this.spritesheet = ASSET_MANAGER.getAsset("./tanBackground.png");
        } else if (this.level.label == "5") {
            this.spritesheet = ASSET_MANAGER.getAsset("./redtiles_bright.png");
        }
        this.BB = new BoundingBox(this.x, this.y, 32, 32);

    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 80, 0, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32, 32);

        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'White';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.w, this.BB.h);
        }

    };

};

class Portal {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./portals.png");
        this.BB = new BoundingCircle(this.x + 32, this.y + 31, 15);

    }

    update() {

    };

    draw(ctx) {
        //this.spritesheet,this.xStart, this.yStart,this.width, this.height,x, y,this.width*scale, this.height*scale
        ctx.drawImage(this.spritesheet, 0, 0, 48, 32, this.x - this.game.camera.x, this.y - this.game.camera.y, 64, 64);

        if (PARAMS.DEBUG) {
            ctx.beginPath();
            ctx.arc(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.radius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'red';
            ctx.stroke();
        }

    };

};