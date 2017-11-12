Gold = function (game) {

    var x = game.rnd.between(16, deviceWidth-16);
    var y = 45;

    Phaser.Sprite.call(this, game, x, y, 'gold');

    game.physics.arcade.enable(this);

    this.body.velocity.y = 75;

};

Gold.prototype = Object.create(Phaser.Sprite.prototype);
Gold.prototype.constructor = Gold;