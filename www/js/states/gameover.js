var gameOverState = {

    create: function(){

        var gameEndLabel;
        var scoreLabel;
        var highScoreLabel;

        var backToMenuButton;
        var backToMenuGameLabel;

        gameEndLabel = game.add.text(deviceWidth/4,100,"You died!",{font: "40px Courier", fill:"#ff0000"});
        scoreLabel = game.add.text(deviceWidth/4,140,"Your Score:",{font: "20px Courier", fill:"#ffff00"});
        highScoreLabel = game.add.text(deviceWidth/4,180,":",{font: "20px Courier", fill:"#0000ff"});

        backToMenuButton = game.add.button(deviceWidth/4, 250, 'gui_button', backToMenu, this, 0,0,1,0);
        backToMenuGameLabel = game.add.text(deviceWidth/4+10,265,"back to menu",{font: "30px Courier", fill:"#ffffff"});

        scoreLabel.setText("Your Score: "+ScoreService.getLatestScore());
        highScoreLabel.setText(ScoreService.getNewHighScoreText());


        function backToMenu(){

            game.state.start("menu");

        }

    }

}