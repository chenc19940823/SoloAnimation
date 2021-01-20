class Red {

	constructor(game) {
        Object.assign(this, { game });
        
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/red.PNG");

        this.animation = new Animator(this.spritesheet, 12, 130, 45, 66, 3, 0.3, 27, false, true)
        
    };

    update() {

    };

    draw(ctx){

        this.animation.drawFrame(this.game.clockTick,ctx, 440, 550, 1.3);
    };
};
