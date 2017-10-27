var loadState = {

    preload: function(){

        var loadingLabel = game.add.text(deviceWidth/4,100,"loading...",{font: "30px Courier", fill:"#ffffff"});

        game.load.spritesheet("gui_button","assets/gui/button_spritesheet.png",230,60,2);

        game.load.spritesheet("fungeon","assets/game/fungeon_32x32.png",32,32,20);
        game.load.spritesheet("floor","assets/game/floor_32x32.png",32,32,4);
        game.load.spritesheet("hero","assets/game/hero.png");
        game.load.spritesheet("sword","assets/game/sword.png");
        game.load.spritesheet("enemy","assets/game/enemy.png");
        game.load.spritesheet("gold","assets/game/gold.png");



    },

    create: function(){

        FileService.checkIfFileExists("score.txt").then(function(){

            FileService.readFile("score.txt").then(function(score){
                ScoreService.setHighScore(score);
                game.state.start("menu");
            });


        },function(){

            // create file only if it not exists
            FileService.createFile("score.txt").then(function(){
                FileService.overwriteFile("score.txt","0");
                ScoreService.setHighScore(0);
                game.state.start("menu");
            });

        });

    }

}