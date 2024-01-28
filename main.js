const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("bones.png");
ASSET_MANAGER.queueDownload("LymphocyteEdited.png");
ASSET_MANAGER.queueDownload("RedBloodCell.png");
ASSET_MANAGER.queueDownload("SpeedBoost.png");
ASSET_MANAGER.queueDownload("antibody.png");
ASSET_MANAGER.queueDownload("./MicroSpritesheet.png");
ASSET_MANAGER.queueDownload("./cellman.png");
ASSET_MANAGER.queueDownload("./otherTiles.png");
ASSET_MANAGER.queueDownload("./redtiles.png");
ASSET_MANAGER.queueDownload("./hudlives.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Antibody(gameEngine, 20 , 75));
	gameEngine.addEntity(new Bone(gameEngine, 20, 400));
	gameEngine.addEntity(new Lymphocyte(gameEngine, 20, 20));
	gameEngine.addEntity(new RedBloodCell(gameEngine, 20, 200));
	gameEngine.addEntity(new SpeedBoost(gameEngine));

	gameEngine.addEntity(new Micro(gameEngine,200,200));

	for (let i = 0; i < 10; i++) {
        const randomX = Math.random() * canvas.width;
        const randomY = Math.random() * canvas.height;
        gameEngine.addEntity(new Cell(gameEngine, randomX, randomY));
    }
	
	gameEngine.addEntity(new LevelOne(gameEngine, 0, 0));
	// gameEngine.addEntity(new HUD(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
