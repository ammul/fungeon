var stageState = {

    line1: null,
    line2: null,

    levelGraveyardButton: null,
    levelRoadButton: null,
    levelEntranceButton: null,

    stageSelected:false,

    create: function(){

        this.stageSelected = false

        var stageCompletedLabel = game.add.text(deviceWidth/9,30,GameLevelService.getStageStateHeading(),{font: "35px Silkscreen", fill:"#ffffff"})
        var nextStageLabel = game.add.text(deviceWidth/9,90,"choose next stage",{font: "25px Silkscreen", fill:"#ffff00"})
//        var nextStageLabel = game.add.text(deviceWidth/9,200,GameLevelService.getNextLevelCaption(),{font: "30px Silkscreen", fill:"#ff0000"})

        var nextLevelButton = game.add.button(deviceWidth/9, deviceHeight-115, 'gui_button', toNextLevel.bind(null,this), this, 0,0,1,0)
        var nextLevelLabel = game.add.text(deviceWidth/9+10,deviceHeight-100,"START",{font: "30px Silkscreen", fill:"#ffffff"})

        GameLevelService.levels[0].button = game.add.button(64, deviceHeight/4, 'level_graveyard', showTooltip.bind(null,0,this), this, 0,0,1,0)
        GameLevelService.levels[1].button = game.add.button(deviceWidth-128, deviceHeight/4, 'level_road', showTooltip.bind(null,1,this), this, 0,0,1,0)
        GameLevelService.levels[2].button = game.add.button(deviceWidth-256, deviceHeight/4+128, 'level_entrance', showTooltip.bind(null,2,this), this, 0,0,1,0)

        var tooltipHeaderLabel = game.add.text(deviceWidth/10,deviceHeight-250,"",{font: "23px Silkscreen", fill:"#ffffff"})
        var tooltipDurationLabel = game.add.text(deviceWidth/9,deviceHeight-220,"",{font: "20px Silkscreen", fill:"#ffffff"})
        var dangerDurationLabel = game.add.text(deviceWidth/9,deviceHeight-200,"",{font: "20px Silkscreen", fill:"#ffffff"})

        this.drawLines()

        this.tintUnreachableLvls()

        function toNextLevel(context){

            console.log(context.stageSelected)
            if(context.stageSelected == false) return
            GameLevelService.startLevel()
            game.state.start("game")

        }

        function showTooltip(level,context){

            console.log(level+"==2&&"+!(GameLevelService.getLevel(0).completed==true||GameLevelService.getLevel(1)==true))

            if(level==2&&!(GameLevelService.getLevel(0).completed==true||GameLevelService.getLevel(1)==true)) return

            context.stageSelected = true

            var currentLevel = GameLevelService.getLevel(level)

            var duration = currentLevel.duration > 90 ? "long" : "short"

            tooltipHeaderLabel.setText(currentLevel.caption)
            tooltipDurationLabel.setText("Duration: "+duration)
            dangerDurationLabel.setText("Danger: "+currentLevel.danger)

            GameLevelService.setNextLevel(level)
        }

    },

    drawLines: function(){

        // create the line
        this.line1 = new Phaser.Line(GameLevelService.levels[0].button.x+64,GameLevelService.levels[0].button.y+64,GameLevelService.levels[2].button.x, GameLevelService.levels[2].button.y);
        this.line2 = new Phaser.Line(GameLevelService.levels[1].button.x,GameLevelService.levels[1].button.y+64,GameLevelService.levels[2].button.x+64, GameLevelService.levels[2].button.y);

        // create and show the graphics
        var graphicsLine = game.add.graphics(0, 0);
        graphicsLine.clear();
        graphicsLine.lineStyle(1, 0xddff00, 1);
        graphicsLine.moveTo(this.line1.start.x, this.line1.start.y);
        graphicsLine.lineTo(this.line1.end.x, this.line1.end.y);
        graphicsLine.endFill();

        var graphicsLine = game.add.graphics(0, 0);
        graphicsLine.clear();
        graphicsLine.lineStyle(1, 0xddff00, 1);
        graphicsLine.moveTo(this.line2.start.x, this.line2.start.y);
        graphicsLine.lineTo(this.line2.end.x, this.line2.end.y);
        graphicsLine.endFill();

    },

    tintUnreachableLvls: function(){

        console.log()

        if(GameLevelService.levels[0].completed==false&&GameLevelService.levels[1].completed==false){
            GameLevelService.levels[2].button.tint = 0xff0000
        }

    }

}