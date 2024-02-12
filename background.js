/** NOT IMPLEMENTED YET
 * Will use for the official background
 */

class CornerTiles {
    constructor(game, x, y, flip) {
        Object.assign(this, { game, x, y, flip });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/redtiles_bright.png");
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
            // ctx.drawImage(this.spritesheet, 142, 15, 16, 16, (-this.x-32), this.y, 32, 32);

            ctx.restore();

        } else if (this.flip == 2) {
            ctx.scale(1, -1);
            ctx.drawImage(this.spritesheet, 142, 15, 16, 16, this.x - this.game.camera.x, (-this.y - 32) + this.game.camera.y, 32, 32);
            // ctx.drawImage(this.spritesheet, 142, 15, 16, 16, this.x, (-this.y-32), 32, 32);

            ctx.restore();

        } else if (this.flip == 3) {
            ctx.scale(-1, -1);
            ctx.drawImage(this.spritesheet, 142, 15, 16, 16, (-this.x - 32) + this.game.camera.x, (-this.y - 32) + this.game.camera.y, 32, 32);
            // ctx.drawImage(this.spritesheet, 142, 15, 16, 16, (-this.x-32), (-this.y-32), 32, 32);

            ctx.restore();

        } else {
            ctx.drawImage(this.spritesheet, 142, 15, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32, 32);
            // ctx.drawImage(this.spritesheet, 142, 15, 16, 16, this.x, this.y , 32, 32);


        }
        //ctx.restore();
        //this.spritesheet,this.xStart, this.yStart,this.width, this.height,x, y,this.width*scale, this.height*scale
        //ctx.drawImage(this.spritesheet, 142, 15, 16, 16, this.x, this.y, 32, 32);
        ctx.strokeStyle = 'White';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y- this.game.camera.y, this.BB.w, this.BB.h);

    };

};

class TopBottomWalls {
    constructor(game, x, y, flip) {
        Object.assign(this, { game, x, y, flip });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/redtiles_bright.png");
    }

    update() {

    };

    // drawMiniMap(ctx, mmX, mmY) {

    // }

    draw(ctx) {
        ctx.save();

        // 1 == light red up
        if (this.flip == 1) {
            ctx.scale(1, -1);
            ctx.drawImage(this.spritesheet, 111, 15, 16, 16, this.x - this.game.camera.x, (-this.y - 32) + this.game.camera.y, 32, 32);
            // ctx.drawImage(this.spritesheet, 111, 15, 16, 16, this.x, (-this.y-32), 32, 32);

            ctx.restore();

        } else {
            ctx.drawImage(this.spritesheet, 111, 15, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32, 32);
            // ctx.drawImage(this.spritesheet, 111, 15, 16, 16, this.x, this.y, 32, 32);

        }
        //this.spritesheet,this.xStart, this.yStart,this.width, this.height,x, y,this.width*scale, this.height*scale
        // ctx.drawImage(this.spritesheet, 111, 15, 16, 16, this.x, this.y, 32, 32);
        ctx.strokeStyle = 'White';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y- this.game.camera.y, this.BB.w, this.BB.h);
    };

};

class LeftRightWalls {
    constructor(game, x, y, flip) {
        Object.assign(this, { game, x, y, flip });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/redtiles_bright.png");
    }

    update() {

    };

    // drawMiniMap(ctx, mmX, mmY) {

    // }

    draw(ctx) {
        ctx.save();

        // 1 == light red Left
        if (this.flip == 1) {
            ctx.scale(-1, 1);
            ctx.drawImage(this.spritesheet, 143, 31, 16, 16, (-this.x - 32) + this.game.camera.x, this.y - this.game.camera.y, 32, 32);
            // ctx.drawImage(this.spritesheet, 143, 31, 16, 16, (-this.x-32), this.y, 32, 32);

            ctx.restore();

        } else {
            ctx.drawImage(this.spritesheet, 143, 31, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32, 32);
            // ctx.drawImage(this.spritesheet, 143, 31, 16, 16, this.x, this.y , 32, 32);

        }
        //this.spritesheet,this.xStart, this.yStart,this.width, this.height,x, y,this.width*scale, this.height*scale
        //  ctx.drawImage(this.spritesheet, 143, 31, 16, 16, this.x, this.y, 32, 32);
        ctx.strokeStyle = 'White';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y- this.game.camera.y, this.BB.w, this.BB.h);
    };

};

class CharacterTiles {
    constructor(game, x, y, scale) {
        Object.assign(this, { game, x, y, scale });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/redtiles_light.png");
    }

    update() {

    };

    // drawMiniMap(ctx, mmX, mmY) {

    // }

    draw(ctx) {
        //this.spritesheet,this.xStart, this.yStart,this.width, this.height,x, y,this.width*scale, this.height*scale
        ctx.drawImage(this.spritesheet, 62, 0, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32 * this.scale, 32 * this.scale);
        // ctx.drawImage(this.spritesheet, 62, 0, 16, 16, this.x, this.y, 32 * this.scale, 32 * this.scale);

        ctx.strokeStyle = 'White';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y- this.game.camera.y, this.BB.w, this.BB.h);

    };

};

class RippedTiles {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/redtiles_med.png");
    }

    update() {

    };

    // drawMiniMap(ctx, mmX, mmY) {

    // }

    draw(ctx) {
        //this.spritesheet,this.xStart, this.yStart,this.width, this.height,x, y,this.width*scale, this.height*scale
        ctx.drawImage(this.spritesheet, 79, 31, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32, 32);
        // ctx.drawImage(this.spritesheet, 79, 31, 16, 16, this.x, this.y, 32, 32);
        ctx.strokeStyle = 'White';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y- this.game.camera.y, this.BB.w, this.BB.h);
    };

};

class NormalTiles {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/redtiles_med.png");
    }

    update() {

    };

    // drawMiniMap(ctx, mmX, mmY) {

    // }

    draw(ctx) {
        //this.spritesheet,this.xStart, this.yStart,this.width, this.height,x, y,this.width*scale, this.height*scale
        ctx.drawImage(this.spritesheet, 80, 0, 16, 16, this.x - this.game.camera.x, this.y - this.game.camera.y, 32, 32);
        // ctx.drawImage(this.spritesheet, 80, 0, 16, 16, this.x, this.y, 32, 32);
        ctx.strokeStyle = 'White';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y- this.game.camera.y, this.BB.w, this.BB.h);

    };

};