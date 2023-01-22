class Wolf{
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./wolfsheet1walkright.png"), 0, 0, 64, 30, 5, 1.25);

        this.x = 0;
        this.y = 0;
        this.speed = 25;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}