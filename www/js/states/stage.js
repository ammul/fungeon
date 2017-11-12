var stageState = {

    create: function(){

        var stageCompletedLabel = game.add.text(deviceWidth/6,100,GameLevelService.getStageStateHeading(),{font: "30px Courier", fill:"#ffffff"})
        var nextStageLabel = game.add.text(deviceWidth/6,140,GameLevelService.getNextLevelCaption(),{font: "20px Courier", fill:"#ff0000"})

        var nextLevelButton = game.add.button(deviceWidth/5, 250, 'gui_button', toNextLevel, this, 0,0,1,0)
        var nextLevelLabel = game.add.text(deviceWidth/5+10,265,"START",{font: "30px Courier", fill:"#ffffff"})

        function toNextLevel(){

            game.state.start("game");

        }

    }

}