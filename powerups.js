class Powerups {
    constructor(game, x, y,) {
        Object.assign(this, { game, x, y});
        this.animation = new Animator(ASSET_MANAGER.getAsset("./sprites/items.png"), 0, 0, 16, 16, 7, .4,false, true);

4

    }









}