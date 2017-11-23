var GameLevelService = {

    nextLevel: function(){

        this.currentProgress=0
        this.stopTimer()
        game.state.start("stage")

    },

    nextLevel: -1,
    currentLevel: -1,
    currentProgress: 0,
    timer: null,

    progressText: null,

    levels: [

        {
            identifier: 0,
            completed: false,
            name: "graveyard",
            caption: "The Graveyard",
            danger: "low",
            subcaption: "Stage 1",
            duration: 9,
            enemy: "skeleton",
            button: null
        },
        {
            identifier: 1,
            completed: false,
            name: "road",
            caption: "The Road",
            danger: "very low",
            subcaption: "Stage 1",
            duration: 15,
            enemy: "fighter",
            button: null
        },
        {
            identifier: 2,
            completed: false,
            name: "entrance",
            caption: "Fungeon Entrance",
            danger: "average",
            subcaption: "Stage 2",
            duration: 20,
            enemy: "zombie",
            button: null
        }

    ],

    init: function() {

        this.progressText = game.add.text(deviceWidth/2,30,"Stage: 0%",{font: "20px Silkscreen", fill:"#FFFFFF"});
        this.startTimer()
    },

    addProgress: function(){

        var currentMaxProgress = GameLevelService.getCurrentLevel().duration

        GameLevelService.currentProgress++

        if(GameLevelService.currentProgress==currentMaxProgress){

            GameLevelService.getCurrentLevel().completed = true
            game.state.start("stage")

        }

        var percentualProgress = Math.floor((this.currentProgress/currentMaxProgress)*100)

        this.progressText.setText("Stage: "+percentualProgress+"%")

    },

    startLevel: function(){

        if(this.currentLevel!=-1)this.getLevel(this.nextLevel).completed = true
        this.currentLevel = this.nextLevel

    },

    gameOver: function(){

        this.nextLevel = -1

        for(var i=0;i<this.levels.length;i++){
            this.levels[i].completed = false
        }

        game.state.start("gameover")

    },

    startTimer: function(){

        this.timer = game.time.events.loop(Phaser.Timer.SECOND * 1, this.addProgress, this);

    },

    stopTimer: function(){

        game.time.events.remove(this.timer);

    },

    setNextLevel: function(level){

        this.nextLevel = level

    },

    getCurrentLevel: function(){

        return this.levels[this.currentLevel]

    },

    getLevels: function(){
        return this.levels
    },

    getLevel: function(lvl){
            return this.levels[lvl]
    },

    getNextLevelCaption: function(){
        return this.levels[this.currentLevel].caption
    },

    getStageStateHeading: function(){
        if(this.currentLevel==-1)return "START GAME"
        return "STAGE COMPLETED"
    },

    getCurrentFloor: function(){
        if(this.currentLevel < 0) return ""
        return this.levels[this.currentLevel].name
    }

}