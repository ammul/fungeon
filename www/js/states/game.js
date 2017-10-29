var gameState = {

    inputArea:null,
    backgroundTileSprite: null,

    create: function(){

        // init Arcade Engine
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // set background
        this.backgroundTileSprite = game.add.tileSprite(0, 0, deviceWidth, deviceHeight, 'floor');

        // define input area
        this.inputArea = new Phaser.Rectangle(0, deviceHeight-(deviceHeight/5), deviceWidth, deviceHeight);

        ScoreService.setLatestScore(0);

        // fixes attacking not possible after restart game bug?
        AttackService.isAttacking=false;
        AttackService.attackIsDelayed=false;

        // init Services
        GameGuiService.initBackgrounds()
        SpawnTimerService.init()
        AttackService.init()
        HeroService.init()
        GameGuiService.initGui()

    },

    update: function(){

        // Background
        this.backgroundTileSprite.tilePosition.y += 1;

        // Collision
        game.physics.arcade.overlap(HeroService.hero, SpawnTimerService.enemies, this.enemyCollisionHandler, null, this);
        game.physics.arcade.overlap(AttackService.weapon, SpawnTimerService.enemies, AttackService.weaponHitCollisionHandler, null, this);
        game.physics.arcade.overlap(HeroService.hero, SpawnTimerService.goldCoins, GoldService.goldCollisionHandler, null, this);


        // Controls
        if(game.input.activePointer.isDown&&game.input.activePointer.y>deviceHeight-(deviceHeight/7)){

            if(game.input.activePointer.x<deviceWidth/4){
                HeroService.hero.x-=HeroService.getMovementSpeed();
            }else if(game.input.activePointer.x>=((deviceWidth/2)+(deviceWidth/4))){
                HeroService.hero.x+=HeroService.getMovementSpeed();
            }

        }

    },

    enemyCollisionHandler: function(hero,enemy){
        enemy.kill()
        HeroService.currentHealth = HeroService.currentHealth - 1
        console.log(HeroService.currentHealth)
        GameGuiService.labels.lives.setText("Health: "+Array(HeroService.currentHealth+1).join("♥"))
        if(HeroService.currentHealth==0){
            console.log("adding "+GoldService.getNewGoldSum())
            GoldService.addGold(GoldService.getNewGoldSum())
            SpawnTimerService.enemies.destroy()
            SpawnTimerService.goldCoins.destroy()
            HeroService.hero.destroy()
            game.time.events.add(Phaser.Timer.SECOND * 0.1, function(){game.state.start("gameover")}, this)
        }
    }

}