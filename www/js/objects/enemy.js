Enemy = function (game) {

    var x = game.rnd.between(32, deviceWidth-32);
    var y = 40;

    Phaser.Sprite.call(this, game, x, y, 'goblin');

    game.physics.arcade.enable(this);

    this.body.velocity.y = 100;

};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;