var GameLevelService = {

    currentLevel: 0,
    currentProgress: 0,
    timer: null,

    progressText: null,

    levels: [

        {
            identifier: 0,
            name: "entrance",
            caption: "Fungeon Entrance",
            subcaption: "Level 1",
            duration: 18,
        },
        {
            identifier: 1,
            name: "jail",
            caption: "The Jail",
            subcaption: "Level 2",
            duration: 30
        },
        {
            identifier: 2,
            name: "graveyard",
            caption: "The Graveyard",
            subcaption: "Level 3",
            duration: 40
        }

    ],

    init: function() {

        this.progressText = game.add.text(deviceWidth/2,30,"Stage: 0%",{font: "20px Courier", fill:"#FFFFFF"});
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

    nextLevel: function(){

        this.currentLevel++
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

    getCurrentLevel: function(){
    
        return this.levels[this.currentLevel]

    },

    getLevels: function(){
        return this.levels
    },

    getNextLevelCaption: function(){
        if(this.currentLevel==0) return "Now: "+this.levels[this.currentLevel].caption
        return "Next Stage: "+this.levels[this.currentLevel].caption
    },

    getStageStateHeading: function(){
        if(this.currentLevel==0)return "Begin"
        return "Stage Completed"
    }

}