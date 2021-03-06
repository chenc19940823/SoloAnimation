class Charizard {

	constructor(game) {
        Object.assign(this, { game });
        
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/charizardX.PNG");

        this.animation = new Animator(this.spritesheet, 260, 77, 56, 48, 3, 0.3, 8, false, true)
        
    };

    update() {

    };

    draw(ctx){

        this.animation.drawFrame(this.game.clockTick,ctx, 500, 530, 2);
    };
};
