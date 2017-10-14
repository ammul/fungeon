var menuState = {

    create: function(){

        var startGameButton;
        var startGameLabel;
        var exitGameButton;
        var exitGameLabel;

        var nameLabel = game.add.text(deviceWidth/4,100,"FUNGEON RUN",{font: "40px Courier", fill:"#ff0000"});
        var scoreLabel = game.add.text(deviceWidth/4,140,"Highscore:",{font: "20px Courier", fill:"#ffff00"});

        startGameButton = game.add.button(deviceWidth/4, 250, 'gui_button', startGame, this, 0,0,1,0);
        startGameLabel = game.add.text(deviceWidth/4+10,265,"START",{font: "30px Courier", fill:"#ffffff"});

        startGameButton = game.add.button(deviceWidth/4, 320, 'gui_button', exitGame, this, 0,0,1,0);
        startGameLabel = game.add.text(deviceWidth/4+10,335,"EXIT",{font: "30px Courier", fill:"#ffffff"});

        scoreLabel.setText("Highscore: "+ScoreService.getHighScore());


        function startGame(){

            game.state.start("game");

        }

        function exitGame(){

            navigator.app.exitApp();

        }
    }

}