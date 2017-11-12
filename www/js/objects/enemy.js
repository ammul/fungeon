Enemy = function (game,enemy) {

    var x = game.rnd.between(32, deviceWidth-32);
    var y = 45;

    Phaser.Sprite.call(this, game, x, y, enemy);

    game.physics.arcade.enable(this);

    this.body.velocity.y = 100;

};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;