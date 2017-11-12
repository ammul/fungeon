var menuState = {

    scoreLabel: null,

    create: function(){

        var startGameButton;
        var startGameLabel;
        var exitGameButton;
        var exitGameLabel;
        var upgradesGameButton;
        var upgradesGameLabel;

        var nameLabel = game.add.text(deviceWidth/6,100,"FUNGEON RUN",{font: "40px Courier", fill:"#ff0000"});
        this.scoreLabel = game.add.text(deviceWidth/4,140,"Highscore:",{font: "20px Courier", fill:"#ffff00"});

        startGameButton = game.add.button(deviceWidth/4, 250, 'gui_button', startGame, this, 0,0,1,0);
        startGameLabel = game.add.text(deviceWidth/4+10,265,"START",{font: "30px Courier", fill:"#ffffff"});

        exitGameButton = game.add.button(deviceWidth/4, 320, 'gui_button', toUpgrades, this, 0,0,1,0);
        exitGameLabel = game.add.text(deviceWidth/4+10,335,"UPGRADES",{font: "30px Courier", fill:"#ffffff"});

        exitGameButton = game.add.button(deviceWidth/4, 390, 'gui_button', exitGame, this, 0,0,1,0);
        exitGameLabel = game.add.text(deviceWidth/4+10,405,"EXIT",{font: "30px Courier", fill:"#ffffff"});

        this.scoreLabel.setText("Highscore: "+ScoreService.getHighScore());


        function startGame(){

            game.state.start("stage");

        }

        function toUpgrades(){

            game.state.start("upgrades");

        }

        function exitGame(){

            navigator.app.exitApp();

        }
    },

    update: function(){
//        this.scoreLabel.setText("Highscore: "+ScoreService.getHighScore());
    }

}