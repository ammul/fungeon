var GameLevelService = {

    nextLevel: -1,
    currentLevel: -1,
    currentProgress: 0,
    timer: null,

    progressText: null,

    levels: [

        {
            identifier: 0,
            name: "graveyard",
            caption: "The Graveyard",
            danger: "low",
            subcaption: "Stage 1",
            duration: 90,
            enemy: "skeleton"
        },
        {
            identifier: 1,
            name: "road",
            caption: "The Road",
            danger: "very low",
            subcaption: "Stage 1",
            duration: 150,
            enemy: "fighter"
        },
        {
            identifier: 2,
            name: "entrance",
            caption: "Fungeon Entrance",
            danger: "average",
            subcaption: "Stage 2",
            duration: 200,
            enemy: "zombie"
        }

    ],

    init: function() {

        this.progressText = game.add.text(deviceWidth/2,30,"Stage: 0%",{font: "20px Silkscreen", fill:"#FFFFFF"});
        this.startTimer()
    },

    addProgress: function(amount){

        var currentMaxProgress = this.getCurrentLevel().duration

        this.currentProgress++

        if(this.currentProgress==currentMaxProgress){

            this.nextLevel()

        }

        var percentualProgress = Math.floor((this.currentProgress/currentMaxProgress)*100)

        this.progressText.setText("Stage: "+percentualProgress+"%")

    },

    startLevel: function(){

        this.currentLevel = this.nextLevel

    },

    gameOver: function(){

        this.nextLevel = -1
        game.state.start("gameover")

    },

    nextLevel: function(){

        this.currentProgress=0
        this.stopTimer()
        game.state.start("stage")

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

    setLevel: function(lvl){
        this.currentLevel = 0
    },

    setCurrentProgress(progress){
        this.currentProgress = 0
    },

    getNextLevelCaption: function(){
        return this.levels[this.currentLevel].caption
    },

    getStageStateHeading: function(){
        if(this.currentLevel==0)return "START GAME"
        return "STAGE COMPLETED"
    },

    getCurrentFloor: function(){
        console.log(this.levels[this.currentLevel].name)
        return this.levels[this.currentLevel].name
    }

}