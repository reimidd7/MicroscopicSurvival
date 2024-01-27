const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("bones.png");
ASSET_MANAGER.queueDownload("LymphocyteEdited.png");
ASSET_MANAGER.queueDownload("RedBloodCell.png");
ASSET_MANAGER.queueDownload("SpeedBoost.png");
ASSET_MANAGER.queueDownload("antibody.png");
ASSET_MANAGER.queueDownload("./MicroSpritesheet.png");
ASSET_MANAGER.queueDownload("./cell.png");
ASSET_MANAGER.queueDownload("./otherTiles.png");
ASSET_MANAGER.queueDownload("./redtiles.png");






ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Antibody(gameEngine, 20 , 75));
	//gameEngine.addEntity(new Bone(gameEngine));
	gameEngine.addEntity(new Lymphocyte(gameEngine, 300, 20));
	gameEngine.addEntity(new RedBloodCell(gameEngine));
	gameEngine.addEntity(new SpeedBoost(gameEngine));

	gameEngine.addEntity(new Micro(gameEngine,200,200));

	gameEngine.addEntity(new Cell(gameEngine));

	 // create the cell for the game
	 function createCell() {
        const cell = new Cell(gameEngine);
        gameEngine.addEntity(cell);
    }

    // Spawn 10 cells with a delay
    for (let i = 1; i < 10; i++) {
        setTimeout(createCell, i * 1000); // miliseconds
    }

	gameEngine.addEntity(new LevelOne(gameEngine, 0, 0));



	gameEngine.init(ctx);

	gameEngine.start();
});
