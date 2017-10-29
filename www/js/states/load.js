var loadState = {

    preload: function(){

        var loadingLabel = game.add.text(deviceWidth/4,100,"loading...",{font: "30px Courier", fill:"#ffffff"});

        game.load.spritesheet("gui_button","assets/gui/button_spritesheet.png",230,60,2);
        game.load.spritesheet("arrow_left_button","assets/gui/arrow_button_left.png",64,64,2);
        game.load.spritesheet("arrow_right_button","assets/gui/arrow_button_right.png",64,64,2);
        game.load.spritesheet("attack_button","assets/gui/attack_button.png",64,64,2);
        game.load.spritesheet("blank_button","assets/gui/blank_button.png",64,64,2);

        game.load.image('floor', 'assets/game/floor.jpg');

        game.load.spritesheet("fungeon","assets/game/fungeon_32x32.png",32,32,20);
//        game.load.spritesheet("floor","assets/game/floor_32x32.png",32,32,4);
        game.load.spritesheet("hero","assets/game/hero.png");
        game.load.spritesheet("sword","assets/game/sword.png");
        game.load.spritesheet("goblin","assets/game/goblin.png");
        game.load.spritesheet("gold","assets/game/gold.png");



    },

    create: function(){

        var createOrReadFile = function(file){

            var def = Q.defer()

             FileService.checkIfFileExists(file).then(function(){

                 FileService.readFile(file).then(function(value){
                     console.log("file "+file+" does exist, value:",value)
                     switch(file){
                        case 'score.txt':
                            ScoreService.setHighScore(parseInt(value))
                        break
                        case 'gold.txt':
                            GoldService.setStoredGold(parseInt(value))
                        break
                     }
                     def.resolve()
                 });


             },function(){

                 // create file only if it not exists
                 FileService.createFile(file).then(function(){
                     console.log("file "+file+" does not exist, creating new file")
                     FileService.overwriteFile(file,"0")
                     switch(file){
                         case 'score.txt':
                             ScoreService.setHighScore(0)
                         break
                         case 'gold.txt':
                             GoldService.setStoredGold(0)
                         break
                      }
                     def.resolve()
                 });

             });

            return def.promise

        }

        createOrReadFile("score.txt").then(function(){
            createOrReadFile("gold.txt").then(function(){
                game.state.start("menu");
            })
        })

    },



}