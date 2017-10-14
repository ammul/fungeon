var ScoreService = {

    highScore: 0,

    setHighScore: function(score){
        this.highScore = score;
    },

    getHighScore: function(){
        return this.highScore;
    }

}