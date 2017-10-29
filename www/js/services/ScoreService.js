var ScoreService = {

    latestScore: 0,
    highScore: 0,

    setHighScore: function(score){
        console.log("ScoreService.setHighScore",score)
        this.highScore = score;
    },

    getHighScore: function(){
        console.log("ScoreService.getHighScore",this.highScore);
        return this.highScore;
    },
    setLatestScore: function(score){
        this.latestScore = score;
    },

    getLatestScore: function(){
        return this.latestScore;
    },
    isNewHighscore: function(){
        if(this.latestScore>0&&(this.latestScore>this.highScore)){

            this.highScore = this.latestScore;
            console.log("FileService.overwriteFile");
            FileService.overwriteFile("score.txt",this.latestScore);
            return true;

        }

        return false;
    },
    addPoints: function(points){
        this.latestScore+=points;
        return this.latestScore;
    }

}