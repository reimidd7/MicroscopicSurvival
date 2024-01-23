const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("bones.png");
ASSET_MANAGER.queueDownload("LymphocyteEdited.png");
ASSET_MANAGER.queueDownload("RedBloodCell.png");
ASSET_MANAGER.queueDownload("SpeedBoost.png");
ASSET_MANAGER.queueDownload("antibody.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	//gameEngine.addEntity(new Antibody(gameEngine, 20 , 75));
	gameEngine.addEntity(new Bone(gameEngine));
	gameEngine.addEntity(new Lymphocyte(gameEngine, 20, 20));
	gameEngine.addEntity(new RedBloodCell(gameEngine));
	gameEngine.addEntity(new SpeedBoost(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
