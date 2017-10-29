var GameGuiService = {

    backgrounds: {
        top: null
    },
    labels: {
        score: null,
        gold: null,
        lives: null
    },
    buttons: {
        left: null,
        right: null,
        attack: null,
        blank: null
    },



    initGui: function(){

        this.initLabels()
        this.initButtons()

    },

    initBackgrounds: function(){

        this.backgrounds.top = game.add.sprite(0, 0, "blank")
        this.backgrounds.top.width = deviceWidth
        this.backgrounds.top.height = 60

    },

    initLabels: function(){

        this.labels.score = game.add.text(10,10,"Score: 0",{font: "20px Courier", fill:"#00ff00"});
        this.labels.gold = game.add.text(deviceWidth/2,10,"Gold: 0",{font: "20px Courier", fill:"#ffff00"});
        this.labels.lives = game.add.text(10,30,"Lives: "+Array(HeroService.getMaxHealth()+1).join("♥"),{font: "20px Courier", fill:"#ff0000"});

    },

    initButtons: function(){

        this.buttons.left = game.add.button(0, deviceHeight-(deviceHeight/7), 'arrow_left_button', function(){}, this, 0,0,1,0);
        this.buttons.left.height = deviceHeight/7;
        this.buttons.left.width = deviceWidth/4;
        this.buttons.right = game.add.button((deviceWidth/2)+(deviceWidth/4), deviceHeight-(deviceHeight/7), 'arrow_right_button', function(){}, this, 0,0,1,0);
        this.buttons.right.height = deviceHeight/7;
        this.buttons.right.width = deviceWidth/4;
//        this.buttons.attack = game.add.button((deviceWidth/2), deviceHeight-(deviceHeight/7), 'attack_button', AttackService.attack, this, 0,0,1,0);
        this.buttons.attack.height = deviceHeight/7;
        this.buttons.attack.width = deviceWidth/4;

        this.buttons.blank = game.add.button((deviceWidth/4), deviceHeight-(deviceHeight/7), 'blank_button', function(){}, this, 0,0,1,0);
        this.buttons.blank.height = deviceHeight/7;
        this.buttons.blank.width = deviceWidth/4;

    }

}