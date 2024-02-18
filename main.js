
const ASSET_MANAGER = new AssetManager();



ASSET_MANAGER.queueDownload("./LymphocyteEdited.png");
ASSET_MANAGER.queueDownload("./RedBloodCell.png"); 
ASSET_MANAGER.queueDownload("speed.png");
ASSET_MANAGER.queueDownload("clone.png");
ASSET_MANAGER.queueDownload("explode.png");
ASSET_MANAGER.queueDownload("shield.png");
ASSET_MANAGER.queueDownload("size.png");
ASSET_MANAGER.queueDownload("stun.png");
ASSET_MANAGER.queueDownload("./antibody.png");
ASSET_MANAGER.queueDownload("./MicroSpritesheet.png");
ASSET_MANAGER.queueDownload("./cellman.png");
ASSET_MANAGER.queueDownload("./otherTiles.png");
ASSET_MANAGER.queueDownload("./redtiles_bright.png");
ASSET_MANAGER.queueDownload("./redtiles_light.png");
ASSET_MANAGER.queueDownload("./redtiles_med.png");
ASSET_MANAGER.queueDownload("./Micro_IDLE.png");
ASSET_MANAGER.queueDownload("./TitleSpritesheet.png");
ASSET_MANAGER.queueDownload("./title.png");
ASSET_MANAGER.queueDownload("./bones.png");

ASSET_MANAGER.downloadAll(() => {
	const gameEngine = new GameEngine();

	//add music here

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;


	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});