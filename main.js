const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("bones.png");
ASSET_MANAGER.queueDownload("LymphocyteEdited.png");
ASSET_MANAGER.queueDownload("RedBloodCell.png"); 
ASSET_MANAGER.queueDownload("speed.png");
ASSET_MANAGER.queueDownload("clone.png");
ASSET_MANAGER.queueDownload("explode.png");
ASSET_MANAGER.queueDownload("shield.png");
ASSET_MANAGER.queueDownload("size.png");
ASSET_MANAGER.queueDownload("stun.png");
ASSET_MANAGER.queueDownload("antibody.png");
ASSET_MANAGER.queueDownload("./MicroSpritesheet.png");
ASSET_MANAGER.queueDownload("./cellman.png");
ASSET_MANAGER.queueDownload("./otherTiles.png");
ASSET_MANAGER.queueDownload("./redtiles.png");
//ASSET_MANAGER.queueDownload("./hudlives.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Bone(gameEngine, 140, 350));
	gameEngine.addEntity(new RedBloodCell(gameEngine, 200, 220));
	gameEngine.addEntity(new Powerup(gameEngine, 350, 75, "speed")); 
	gameEngine.addEntity(new Powerup(gameEngine, 380, 320, "size"));
	gameEngine.addEntity(new Powerup(gameEngine, 185, 440, "clone")); 
	gameEngine.addEntity(new Powerup(gameEngine, 700, 300, "explode")); 
	gameEngine.addEntity(new Powerup(gameEngine, 675, 450, "stun"));
	gameEngine.addEntity(new Powerup(gameEngine, 300, 650, "shield"));   

	gameEngine.addEntity(new Micro(gameEngine,500,300));

	gameEngine.addEntity(new Lymphocyte(gameEngine, 500, 500));
	

	// for (let i = 0; i < 10; i++) {
    //     const randomX = Math.random() * canvas.width;
    //     const randomY = Math.random() * canvas.height;
    //     gameEngine.addEntity(new Cell(gameEngine, randomX, randomY));
    // }
	
	gameEngine.addEntity(new LevelOne(gameEngine, 0, 0));
	// gameEngine.addEntity(new HUD(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
