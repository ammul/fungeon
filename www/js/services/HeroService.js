var HeroService = {

    initial: {
        maxHealth: 3,
        currentHealth: 3,
        attackDuration: 0.5,
        attackDelay: 3.0,
        movementSpeed: 3,
    },
    current: {},

    hero: null,

    init:function(){
        this.hero = game.add.sprite(deviceWidth/2, (deviceHeight-(deviceHeight/7)-50), "hero");
        this.hero.anchor.set(0.5);
        game.physics.arcade.enable(this.hero);
        this.hero.inputEnabled = true;
        this.hero.body.collideWorldBounds=true;
        this.hero.addChild(AttackService.weapon);

        this.current.currentHealth = this.current.maxHealth

    },

    getMaxHealth: function(){
        return this.current.maxHealth
    },
    setMaxHealth: function(value){
        this.current.maxHealth = value
    },
    getCurrentHealth: function(){
        return this.current.currentHealth
    },
    setCurrentHealth: function(value){
        this.current.currentHealth = value
    },
    getAttackDuration: function(){
        return this.current.attackDuration
    },
    setAttackDuration: function(value){
        this.current.attackDuration = value
    },
    getAttackDelay: function(){
        return this.current.attackDelay
    },
    setAttackDelay: function(value){
        this.current.attackDelay = value
    },
    getMovementSpeed: function(){
        return this.current.movementSpeed
    },
    setMovementSpeed: function(value){
        this.current.movementSpeed = value
    },
    getInitialStats: function(){
        return this.initial
    },
    setCurrentStats: function(stats){
        this.current = stats
    },
    getCurrentStats: function(stats){
        return this.current
    }
}