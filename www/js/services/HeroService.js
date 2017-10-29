var HeroService = {

    maxHealth: 3,
    attackDuration: 0.5,
    attackDelay: 3.0,
    movementSpeed: 3,

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