var loadState = {

    preload: function(){

        var loadingLabel = game.add.text(deviceWidth/4,100,"loading...",{font: "30px Silkscreen", fill:"#ffffff"});

        game.load.spritesheet("gui_button","assets/gui/button_spritesheet.png",230,60,2);
        game.load.spritesheet("arrow_left_button","assets/gui/arrow_button_left.png",64,64,2);
        game.load.spritesheet("arrow_right_button","assets/gui/arrow_button_right.png",64,64,2);
        game.load.spritesheet("attack_button","assets/gui/attack_button.png",64,64,2);
        game.load.spritesheet("skill_plus_button","assets/gui/skill_plus_button.png",64,64,2);
        game.load.spritesheet("blank_button","assets/gui/blank_button.png",64,64,2);

        game.load.image('blank', 'assets/gui/blank.png');

        game.load.image('entrance', 'assets/game/entrance.jpg');
        game.load.image('catacombs', 'assets/game/catacombs.jpg');
        game.load.image('graveyard', 'assets/game/graveyard.jpg');

        game.load.spritesheet("fungeon","assets/game/fungeon_32x32.png",32,32,20);
//        game.load.spritesheet("floor","assets/game/floor_32x32.png",32,32,4);
        game.load.spritesheet("hero","assets/game/hero.png");
        game.load.spritesheet("sword","assets/game/sword.png");
        game.load.spritesheet("zombie","assets/game/zombie.png");
        game.load.spritesheet("skeleton","assets/game/skeleton.png");
        game.load.spritesheet("fighter","assets/game/fighter.png");
        game.load.spritesheet("gold","assets/game/gold.png");



    },

    create: function(){

        var createOrReadFile = function(file){

            var def = Q.defer()

             FileService.checkIfFileExists(file).then(function(){

                 FileService.readFile(file).then(function(value){
                     console.log("file >"+file+"< does exist")
                     console.log(value)
                     switch(file){
                        case 'score.txt':
                            ScoreService.setHighScore(parseInt(value))
                            break;
                        case 'gold.txt':
                            GoldService.setStoredGold(parseInt(value))
                            break;
                        case 'stats.txt':
                            console.log(value,JSON.parse(value))
                            HeroService.setCurrentStats(JSON.parse(value))
                            break;
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
                            FileService.overwriteFile('score.txt',"0")
                            ScoreService.setHighScore(0)
                            break;
                         case 'gold.txt':
                            FileService.overwriteFile('gold.txt',"0")
                            GoldService.setStoredGold(0)
                            break;
                         case 'stats.txt':
                            var json = JSON.stringify(HeroService.getInitialStats())
                            console.log("writing",json)
                            FileService.overwriteFile('stats.txt',json)
                            HeroService.setCurrentStats(HeroService.getInitialStats())
                            break;
                      }
                     def.resolve()
                 });

             });

            return def.promise

        }

        createOrReadFile("score.txt").then(function(){
            createOrReadFile("gold.txt").then(function(){
                createOrReadFile("stats.txt").then(function(){
                    game.state.start("menu");
                })
            })
        })

    },

}