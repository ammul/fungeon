var game;

// important information is stored in these variables
var deviceHeight;
var deviceWidth;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    // get device information
    deviceHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    // initialize game
    game = new Phaser.Game(deviceWidth, deviceHeight, Phaser.AUTO, 'game');

    // initialize states
    game.state.add('boot',bootState);
    game.state.add('load',loadState);
    game.state.add('menu',menuState);
    game.state.add('game',gameState);
    game.state.add('gameover',gameOverState);
    game.state.add('upgrades',upgradesState);

    // run boot state
    game.state.start('boot');

}