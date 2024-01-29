// class HUD {
//     constructor(game, x, y) {
//         Object.assign(this, {game, x, y});

//         this.x = x;
//         this.y = y;
//         this.game = game;

//         this.animator = new Animator(ASSET_MANAGER.getAsset("hudhearts.png"), 0, 0,5000, 5200, 1, 0.45);
//     }

//     // No need to update anything for a static HUD
//     update() {
//         // Leave this method empty
//     }

//     draw(ctx) {
      
//         this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 10);
//         ctx.fillStyle = "red"; // Set color to red for debugging
//         ctx.fillRect(this.x, this.y, this.animator.frameWidth, this.animator.frameHeight);
//     }
// }
