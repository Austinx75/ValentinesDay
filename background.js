class BackGround{
    constructor(game, x, y, width, height){
        Object.assign(this, {game,x,y,width,height});

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/couple.png");
        this.updateBB();
    };
    update(){
    };
    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(200, 200,100,100);
    };
    draw(ctx){
        if(PARAMS.DEBUG){
            ctx.strokeStyle = "Red";
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        };
        ctx.drawImage(this.spritesheet, this.x, this.y, this.width, this.height, this.x, this.y, this.width, this.height);
    };

};




class Script{
    constructor(game, x, y, width, height){
        Object.assign(this, {game,x,y,width,height});

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/happyvday.png");
        this.animation = new Animator(this.spritesheet, 0, 0, 700, 252, 12, 0.15, 0, false, true);
        this.updateBB();
    };
    update(){
    };
    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.width, this.height, 700, 252);
    };
    draw(ctx){
        if(PARAMS.DEBUG){
            ctx.strokeStyle = "Red";
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        };
        this.animation.drawFrame(this.game.clockTick, ctx, this.width, this.height, 1);
    };

};





class Heart{
    constructor(game, x, y){
        Object.assign(this,{game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/heart.png");
        this.animation = new Animator(this.spritesheet, 0, 0, PARAMS.HEARTWIDTH, PARAMS.HEARTWIDTH, 1, 0.2, 0, false, true);
        this.velocity = {x: 0, y: 0};
        this.fallAcc = 562.5;
        this.updateBB();
    };
    update(){
        //console.log("If this method is continuously called");
        this.endTimer = Math.floor(Date.now() /100);
        this.elapsedTime = this.endTimer - this.startTimer;
        const TICK = this.game.clockTick;
        //Gravity
        this.velocity.y = this.fallAcc * TICK;

        //Update positions
        this.y += this.fallAcc * TICK;
        this.updateBB();
    };
    draw(ctx){
        if(PARAMS.DEBUG){
            ctx.strokeStyle = "Red";
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        };
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
    };
    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, PARAMS.HEARTWIDTH*3, PARAMS.HEARTWIDTH*3);
    };


};