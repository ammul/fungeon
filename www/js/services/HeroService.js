var HeroService = {

    maxHealth: 3,
    attackDuration: 0.5,
    attackDelay: 1.0,

    getMaxHealth: function(){
        return this.maxHealth;
    },
    getAttackDuration: function(){
        return this.attackDuration;
    },
    getAttackDelay: function(){
        return this.attackDelay;
    }
}