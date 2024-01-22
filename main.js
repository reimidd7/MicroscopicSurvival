const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./MicroSpritesheet.png");
ASSET_MANAGER.queueDownload("./cell.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Micro(gameEngine,200,200));

	gameEngine.addEntity(new Cell(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
