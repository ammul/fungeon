var HeroService = {

    maxHealth: 3,
    currentHealth: 3,
    attackDuration: 0.5,
    attackDelay: 3.0,
    movementSpeed: 3,

    hero: null,

    init:function(){
        this.hero = game.add.sprite(deviceWidth/2, (deviceHeight-(deviceHeight/7)-50), "hero");
        this.hero.anchor.set(0.5);
        game.physics.arcade.enable(this.hero);
        this.hero.inputEnabled = true;
        this.hero.body.collideWorldBounds=true;
        this.hero.addChild(AttackService.weapon);
    },

    getMaxHealth: function(){
        return this.maxHealth;
    },
    getAttackDuration: function(){
        return this.attackDuration
    },
    getAttackDelay: function(){
        return this.attackDelay
    },
    getMovementSpeed: function(){
        return this.movementSpeed
    }
}