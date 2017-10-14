var gameState = {

    inputArea:null,
    swipe:null,
    hero:null,
    enemies:{
        count:0
    },
    score:{
        value: 0,
        label: null
    },
    lives:{
        value: 3,
        label: null
    },

    create: function(){

        this.swipe = new Swipe(game);
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.score.label = game.add.text(10,10,"Score: 0",{font: "20px Courier", fill:"#ffff00"});
        this.lives.label = game.add.text(10,30,"Lives: "+Array(this.lives.value+1).join("♥"),{font: "20px Courier", fill:"#ff0000"});

        this.inputArea = new Phaser.Rectangle(0, deviceHeight-(deviceHeight/5), deviceWidth, deviceHeight);

        this.hero = game.add.sprite(deviceWidth/2, (deviceHeight-(deviceHeight/5)-50), "hero");
        this.hero.anchor.set(0.5);
        game.physics.arcade.enable(this.hero);
        this.hero.inputEnabled = true;
        this.hero.body.collideWorldBounds=true;
        //this.hero.events.onInputDown.add(this.heroInputListener, this);



    },

    update: function(){

        if(this.enemies.count<5){
            this.addEnemey();
        }

        //check if pointer is in control area
        if(game.input.activePointer.isDown&&game.input.activePointer.y>deviceHeight-(deviceHeight/5)){

            if(game.input.activePointer.x<deviceWidth/2){
                this.hero.x-=7;
            }else if(game.input.activePointer.x>=deviceWidth/2){
                this.hero.x+=7;
            }

        }

        var direction = this.swipe.check();
        if (direction!==null) {
            // direction= { x: x, y: y, direction: direction }
            switch(direction.direction) {
//                case this.swipe.DIRECTION_LEFT:
//                case this.swipe.DIRECTION_RIGHT:
//                case this.swipe.DIRECTION_UP:
//                case this.swipe.DIRECTION_DOWN:
//                case this.swipe.DIRECTION_UP_LEFT:
                case this.swipe.DIRECTION_UP_RIGHT:
                    console.log("up right");
                    break;
//                case this.swipe.DIRECTION_DOWN_LEFT:
//                case this.swipe.DIRECTION_DOWN_RIGHT:
            }
        }

    },

    render: function(){
        game.debug.geom(this.inputArea,'#0fffff');
    },

    addEnemey: function(){

        var randomX = Math.floor(Math.random() * deviceWidth) + 1;
        var currentEnemy = game.add.sprite(randomX, 0, "enemy");
        game.physics.arcade.enable(currentEnemy);
        currentEnemy.body.velocity.y = 100;
        currentEnemy.body.setSize(32, 32, 0, 0);
        currentEnemy.body.mass = 0;

        game.physics.arcade.collide(currentEnemy, this.hero, this.enemyCollisionHandler, null, this);

        this.enemies.count++;
    },

    enemyCollisionHandler: function(enemy,hero){
        console.log("destroy",enemy);
        enemy.destroy();
        this.enemies.count--;
    }

    //heroInputListener: function(){
    //}

}