
const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("bones.png");
ASSET_MANAGER.queueDownload("LymphocyteEdited.png");
ASSET_MANAGER.queueDownload("RedBloodCell.png");
ASSET_MANAGER.queueDownload("SpeedBoost.png");
ASSET_MANAGER.queueDownload("antibody.png");
ASSET_MANAGER.queueDownload("./MicroSpritesheet.png");
ASSET_MANAGER.queueDownload("./cellman.png");
ASSET_MANAGER.queueDownload("./otherTiles.png");
ASSET_MANAGER.queueDownload("./redtiles_bright.png");
ASSET_MANAGER.queueDownload("./redtiles_light.png");
ASSET_MANAGER.queueDownload("./redtiles_med.png");
ASSET_MANAGER.queueDownload("./hudlives.png");


ASSET_MANAGER.downloadAll(() => {
	const gameEngine = new GameEngine();

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");


	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});
