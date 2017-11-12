var gameOverState = {

    create: function(){

        var gameEndLabel;
        var scoreLabel;
        var goldLabel;
        var highScoreLabel;

        var backToMenuButton;
        var backToMenuGameLabel;
        var upgradesButton;
        var upgradesLabel;

        gameEndLabel = game.add.text(deviceWidth/4,60,"You died!",{font: "40px Silkscreen", fill:"#ff0000"});
        highScoreLabel = game.add.text(deviceWidth/4,100,"",{font: "20px Silkscreen", fill:"#ff8c00"});
        scoreLabel = game.add.text(deviceWidth/4,140,"Your Score:",{font: "20px Silkscreen", fill:"#00ff00"});
        goldLabel = game.add.text(deviceWidth/4,180,"Collected Gold: "+GoldService.getNewGoldSum(),{font: "20px Silkscreen", fill:"#ffff00"});

        upgradesButton = game.add.button(deviceWidth/4, 250, 'gui_button', toUpgrades, this, 0,0,1,0);
        upgradesLabel = game.add.text(deviceWidth/4+10,265,"UPGRADES",{font: "30px Silkscreen", fill:"#ffffff"});

        backToMenuButton = game.add.button(deviceWidth/4, 325, 'gui_button', backToMenu, this, 0,0,1,0);
        backToMenuGameLabel = game.add.text(deviceWidth/4+10,340,"BACK",{font: "30px Silkscreen", fill:"#ffffff"});

        scoreLabel.setText("Your Score: "+ScoreService.getLatestScore());
        if(ScoreService.isNewHighscore()){
            highScoreLabel.setText("NEW HIGHSCORE!!!");
        }


        function backToMenu(){

            game.state.start("menu");

        }

        function toUpgrades(){

            game.state.start("upgrades");

        }

    }

}