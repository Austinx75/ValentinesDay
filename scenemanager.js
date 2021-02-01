class SceneManager{
	constructor(game){
        this.game = game;   
        this.startTimer = Math.floor(Date.now() / 100);
        this.oldTime = 0;   
        this.count = 1;
        this.spawnFrequency = 5;  
        var x = Math.floor(Math.random() * Math.floor(1010));
        var y = Math.floor(Math.random() * Math.floor(100));
        this.heart = new Heart(this.game,x, y);
        this.loadPage();
	};
    clearEntities(){
        this.game.entities = [];
    };
    loadPage(){
        this.background = new BackGround(this.game, 0,0,1024,768);
        this.game.addEntity(this.background);

        this.game.addEntity(this.heart);

        this.script = new Script(this.game, 0,0,162.5,515);
        this.game.addEntity(this.script);
    };
    update(){
        PARAMS.DEBUG = document.getElementById("debug").checked;
        this.endTimer = Math.floor(Date.now() /100);
        this.elapsedTime = this.endTimer - this.startTimer;
   
        if(this.elapsedTime % this.spawnFrequency === 0 && this.elapsedTime !== this.oldTime){
            console.log("Does this ever get called?");
            var ranX = Math.floor(Math.random() * Math.floor(1010));
            var ranY = Math.floor(Math.random() * Math.floor(100));
            this.game.addEntity(new Heart(this.game, ranX, ranY));
            this.count++;
            this.oldTime = this.elapsedTime;
        
        }
        
    };
    draw(ctx){
    };

    


};