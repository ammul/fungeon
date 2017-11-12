var SpawnTimerService = {

    enemySpawnTimer: null,
    goldSpawnTimer: null,

    // spawn groups
    enemies: null,
    goldCoins: null,

    init: function(){

        this.enemies = game.add.group();
        this.goldCoins = game.add.group();

        this.enemySpawnTimer = game.time.events.loop(Phaser.Timer.SECOND * 1, this.addEnemy, this)
        this.goldSpawnTimer = game.time.events.loop(Phaser.Timer.SECOND * 3, this.addGoldCoin, this)

    },

    addGoldCoin: function(object,group){

        this.goldCoins.add(new Gold(game))

    },

    addEnemy: function(){

        this.enemies.add(new Enemy(game,GameLevelService.getCurrentLevel().enemy))

    }

}