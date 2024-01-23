const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./MicroSpritesheet.png");
ASSET_MANAGER.queueDownload("./cell.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

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


	gameEngine.init(ctx);

	gameEngine.start();
});
