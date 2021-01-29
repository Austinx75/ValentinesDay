class SceneManager{
	constructor(game){
		this.game = game;        

        this.loadPage();
	};
    clearEntities(){
        this.game.entities = [];
    };
    loadPage(){
        this.background = new BackGround(this.game, 0,0,1024,768);
        this.game.addEntity(this.background);

        this.script = new Script(this.game, 0,0,162.5,515);
        this.game.addEntity(this.script);
    };
    update(){
    };
    draw(ctx){
    };


};