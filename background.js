class BackGround{
    constructor(game, x, y, width, height){
        Object.assign(this, {game,x,y,width,height});

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/couple.png");
    };
    update(){
    };
    draw(ctx){
        ctx.drawImage(this.spritesheet, this.x, this.y, this.width, this.height, this.x, this.y, this.width, this.height);
    };
};

class Script{
    constructor(game, x, y, width, height){
        Object.assign(this, {game,x,y,width,height});

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/happyvday.png");
        this.animation = new Animator(this.spritesheet, 0, 0, 700, 252, 12, 0.15, 0, false, true);
    };
    update(){
    };
    draw(ctx){
        this.animation.drawFrame(this.game.clockTick, ctx, this.width, this.height, 1);
    };
};

class Heart{
    constructor(){

    };
    update(){
    };
    draw(ctx){

    };
};