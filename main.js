
const ASSET_MANAGER = new AssetManager();



ASSET_MANAGER.queueDownload("./sprites/LymphocyteEdited.png");
ASSET_MANAGER.queueDownload("./sprites/RedBloodCell.png"); 
ASSET_MANAGER.queueDownload("./sprites/speed.png");
ASSET_MANAGER.queueDownload("./sprites/clone.png");
ASSET_MANAGER.queueDownload("./sprites/explode.png");
ASSET_MANAGER.queueDownload("./sprites/shield.png");
ASSET_MANAGER.queueDownload("./sprites/size.png");
ASSET_MANAGER.queueDownload("./sprites/stun.png");
ASSET_MANAGER.queueDownload("./sprites/antibody.png");
ASSET_MANAGER.queueDownload("./sprites/MicroSpritesheet.png");
ASSET_MANAGER.queueDownload("./sprites/cellman.png");
ASSET_MANAGER.queueDownload("./sprites/otherTiles.png");
ASSET_MANAGER.queueDownload("./sprites/redtiles_bright.png");
ASSET_MANAGER.queueDownload("./sprites/redtiles_light.png");
ASSET_MANAGER.queueDownload("./sprites/redtiles_med.png");
// ASSET_MANAGER.queueDownload("./hudlives.png");
ASSET_MANAGER.queueDownload("./sprites/bones.png");

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