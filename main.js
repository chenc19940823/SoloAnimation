var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/charizardX.PNG");
ASSET_MANAGER.queueDownload("./sprites/red.PNG");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	var red = new Red(gameEngine);
	var charizard = new Charizard(gameEngine);

	gameEngine.init(ctx);

	gameEngine.addEntity(red);
	gameEngine.addEntity(charizard);
	
	gameEngine.start();
});
