var ScoreService = {

    latestScore: 0,
    highScore: 0,

    setHighScore: function(score){
        this.highScore = score;
    },

    getHighScore: function(){
        return this.highScore;
    },
    setLatestScore: function(score){
        this.latestScore = score;
    },

    getLatestScore: function(){
        return this.latestScore;
    },
    getNewHighScoreText: function(){
        return (this.latestScore>this.highScore) ? "New Highscore!!!" : "";
    }

}