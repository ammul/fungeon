var gameState = {

    inputArea:null,
    swipe:null,
    hero:null,
    weapon:null,
    isAttacking:false,
    attackIsDelayed:false,
    enemies:null,
    enemySpawnTimer:null,
    coolDownBar: null,
    cooldown: 1,
    score:{
        value: 0,
        label: null
    },
    lives:{
        value: 0,
        label: null
    },
    gold:{
        value: 0,
        label: null
    },

    create: function(){

        this.swipe = new Swipe(game);
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.inputArea = new Phaser.Rectangle(0, deviceHeight-(deviceHeight/5), deviceWidth, deviceHeight);

        this.hero = game.add.sprite(deviceWidth/2, (deviceHeight-(deviceHeight/5)-50), "hero");
        this.hero.anchor.set(0.5);
        game.physics.arcade.enable(this.hero);
        this.hero.inputEnabled = true;
        this.hero.body.collideWorldBounds=true;

        this.weapon = game.add.sprite(16,-40, 'sword');
        game.physics.arcade.enable(this.weapon);
        //this.weapon.anchor.setTo(4,32);
        this.hero.addChild(this.weapon);
        this.weapon.visible = false;

        this.enemies = game.add.group();
        this.enemySpawnTimer = game.time.events.loop(Phaser.Timer.SECOND * 1, this.addEnemy, this);

        this.goldcoins = game.add.group();
        this.goldSpawnTimer = game.time.events.loop(Phaser.Timer.SECOND * 3, this.addGold, this);

        ScoreService.setLatestScore(0);
        this.score.value = 0;
        this.lives.value = HeroService.getMaxHealth();
        this.gold.value = 0;

        this.score.label = game.add.text(10,10,"Score: 0",{font: "20px Courier", fill:"#00ff00"});
        this.gold.label = game.add.text(deviceWidth/2,10,"Gold: 0",{font: "20px Courier", fill:"#ffff00"});
        this.lives.label = game.add.text(10,30,"Lives: "+Array(this.lives.value+1).join("♥"),{font: "20px Courier", fill:"#ff0000"});

        // fixes attacking not possible after restart game bug?
        this.isAttacking=false;
        this.attackIsDelayed=false;
        this.coolDownBar = game.add.text(deviceWidth/2,30,"IIIIIIIIII",{font: "20px Courier", fill:"#FFFFFF"});
    },

    update: function(){

        // Collision

        game.physics.arcade.overlap(this.hero, this.enemies, this.enemyCollisionHandler, null, this);
        game.physics.arcade.overlap(this.weapon, this.enemies, this.weaponHitCollisionHandler, null, this);
        game.physics.arcade.overlap(this.hero, this.goldcoins, this.goldCollisionHandler, null, this);

        if(this.attackIsDelayed){

        }

        // Controls
        if(game.input.activePointer.isDown&&game.input.activePointer.y>deviceHeight-(deviceHeight/5)){

            if(game.input.activePointer.x<deviceWidth/2){
                this.hero.x-=7;
            }else if(game.input.activePointer.x>=deviceWidth/2){
                this.hero.x+=7;
            }

        }

        var direction = this.swipe.check();
        if (direction!==null&&!this.isAttacking) {
            // direction= { x: x, y: y, direction: direction }
            switch(direction.direction) {
//                case this.swipe.DIRECTION_LEFT:
                case this.swipe.DIRECTION_RIGHT:
//                case this.swipe.DIRECTION_UP:
//                case this.swipe.DIRECTION_DOWN:
//                case this.swipe.DIRECTION_UP_LEFT:
                case this.swipe.DIRECTION_UP_RIGHT:
                    console.log("up right");
                    this.attack();
                    break;
//                case this.swipe.DIRECTION_DOWN_LEFT:
//                case this.swipe.DIRECTION_DOWN_RIGHT:
            }
        }

    },

    render: function(){
        game.debug.geom(this.inputArea,'#0fffff');
    },

    addEnemy: function(){

        this.enemies.add(new Enemy(game));


    },

    addGold: function(){

            this.goldcoins.add(new Gold(game));


    },

    enemyCollisionHandler: function(hero,enemy){
        enemy.kill();
        this.lives.value-=1;
        this.lives.label.setText("Lives: "+Array(this.lives.value+1).join("♥"));
        if(this.lives.value==0){
            this.enemies.destroy();
            this.hero.destroy();
            game.time.events.add(Phaser.Timer.SECOND * 0.1, function(){game.state.start("gameover")}, this);
        }
    },

    weaponHitCollisionHandler: function(weapon,enemy){
            if(!this.attackIsDelayed){
                enemy.kill();
                this.score.label.setText("Score: "+ScoreService.addPoints(10));
            }
    },

    goldCollisionHandler: function(hero,gold){
        gold.kill();
        this.gold.value+=1;
        this.gold.label.setText("Gold: "+this.gold.value);
    },

    attack: function(){

        var stepDuration = HeroService.getAttackDelay()/10;
        var remainingSteps = 10;

//        console.log(steps);

        if(this.attackIsDelayed==true)return;
        this.isAttacking=true;
        this.weapon.visible=true
        this.weapon.enable=true;
        game.time.events.add(Phaser.Timer.SECOND * HeroService.getAttackDuration(), function(){
            this.isAttacking=false;
            this.weapon.visible=false
            this.weapon.enable=false;
            this.attackIsDelayed=true;
            this.cooldown = Phaser.Timer.SECOND * HeroService.getAttackDelay();

            for(var i=1;i<=10;i++){
                game.time.events.add(Phaser.Timer.SECOND * stepDuration*i,function(){
                    remainingSteps--;
                    this.coolDownBar.setText(Array(11-remainingSteps).join("I"));
                },this)
            }

            game.time.events.add(Phaser.Timer.SECOND * HeroService.getAttackDelay(), function(){
                this.attackIsDelayed=false;
                this.coolDownBar.setText("IIIIIIIIII")
            },this);
        }, this);
    }

    //heroInputListener: function(){
    //}

}