Enemy = function (game) {

    var x = game.rnd.between(16, deviceWidth-16);
    var y = 0

    Phaser.Sprite.call(this, game, x, y, 'enemy');

    game.physics.arcade.enable(this);

    this.body.velocity.y = 100;

};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;