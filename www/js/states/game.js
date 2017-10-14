var gameState = {

    inputArea:null,
    hero:null,
    score:{
        value: 0,
        label: null
    },
    lives:{
        value: 3,
        label: null
    },

    create: function(){

        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.score.label = game.add.text(10,10,"Score: 0",{font: "12px Courier", fill:"#ffff00"});
        this.lives.label = game.add.text(10,30,"Lives: "+Array(this.lives.value).join("♥"),{font: "12px Courier", fill:"#ff0000"});

        this.inputArea = new Phaser.Rectangle(0, deviceHeight-(deviceHeight/5), deviceWidth, deviceHeight);

        this.hero = game.add.sprite(deviceWidth/2, (deviceHeight-(deviceHeight/5)-50), "hero");
        this.hero.anchor.set(0.5);
        game.physics.arcade.enable(this.hero);
        this.hero.inputEnabled = true;
        this.hero.body.collideWorldBounds=true;
        this.hero.events.onInputDown.add(this.heroInputListener, this);

    },

    update: function(){

        //check if pointer is in control area
        if(game.input.activePointer.isDown&&game.input.activePointer.y>deviceHeight-(deviceHeight/5)){

            if(game.input.activePointer.x<deviceWidth/2){
                this.hero.x-=5;
            }else if(game.input.activePointer.x>=deviceWidth/2){
                this.hero.x+=5;
            }

        }

    },

    render: function(){
        game.debug.geom(this.inputArea,'#0fffff');
    },

    heroInputListener: function(){
    }

}