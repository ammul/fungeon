var stageState = {

    create: function(){

        var stageCompletedLabel = game.add.text(deviceWidth/9,100,GameLevelService.getStageStateHeading(),{font: "35px Silkscreen", fill:"#ffffff"})
        var nextStageLabel = game.add.text(deviceWidth/9,170,"NEXT STAGE:",{font: "25px Silkscreen", fill:"#ffff00"})
        var nextStageLabel = game.add.text(deviceWidth/9,200,GameLevelService.getNextLevelCaption(),{font: "30px Silkscreen", fill:"#ff0000"})

        var nextLevelButton = game.add.button(deviceWidth/9, deviceHeight-115, 'gui_button', toNextLevel, this, 0,0,1,0)
        var nextLevelLabel = game.add.text(deviceWidth/9+10,deviceHeight-100,"START",{font: "30px Silkscreen", fill:"#ffffff"})

        function toNextLevel(){

            game.state.start("game");

        }

    }

}