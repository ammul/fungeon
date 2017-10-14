var loadState = {

    preload: function(){

        var loadingLabel = game.add.text(deviceWidth/4,100,"loading...",{font: "30px Courier", fill:"#ffffff"});

        game.load.spritesheet("gui_button","assets/gui/button_spritesheet.png",230,60,2);
        game.load.spritesheet("hero","assets/game/hero.png");
        game.load.spritesheet("enemy","assets/game/enemy.png");
        game.load.spritesheet("gold","assets/game/gold.png");

        FileService.checkIfFileExists("score.txt").then(function(){

            FileService.readFile("score.txt").then(function(score){
                ScoreService.setHighScore(score);
            });


        },function(){

            // create file only if it not exists
            FileService.createFile("score.txt").then(function(){
                FileService.overwriteFile("score.txt","0");
                ScoreService.setHighScore(0);
            });

        })

    },

    create: function(){

        game.state.start("menu");

    }

}