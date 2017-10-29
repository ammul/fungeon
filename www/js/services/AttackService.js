var AttackService = {

    isAttacking:false,
    attackIsDelayed:false,
    coolDownBar: null,
    weapon: null,

    init: function(){
        GameGuiService.buttons.attack = game.add.button((deviceWidth/2), deviceHeight-(deviceHeight/7), 'attack_button', this.attack, this, 0,0,1,0)
        this.coolDownBar = game.add.text(deviceWidth/2,30,"IIIIIIIIII",{font: "20px Courier", fill:"#FFFFFF"});
        this.weapon = game.add.sprite(16,-40, 'sword')
        game.physics.arcade.enable(this.weapon)
        this.weapon.visible = false
    },

    attack: function(){

        var stepDuration = HeroService.getAttackDelay()/10;
        var remainingSteps = 10;

//        console.log(steps);

        if(this.attackIsDelayed==true)return;
        this.isAttacking=true;
        this.weapon.visible=true
        this.weapon.enable=true;
        game.time.events.add(Phaser.Timer.SECOND * HeroService.getAttackDuration(), function(){
            this.isAttacking=false;
            this.weapon.visible=false
            this.weapon.enable=false;
            this.attackIsDelayed=true;

            for(var i=1;i<=10;i++){
                game.time.events.add(Phaser.Timer.SECOND * stepDuration*i,function(){
                    remainingSteps--;
                    this.coolDownBar.setText(Array(11-remainingSteps).join("I"));
                },this)
            }

            game.time.events.add(Phaser.Timer.SECOND * HeroService.getAttackDelay(), function(){
                this.attackIsDelayed=false;
                this.coolDownBar.setText("IIIIIIIIII")
            },this);
        }, this);

    },

    weaponHitCollisionHandler: function(weapon,enemy){
            if(!this.attackIsDelayed){
                enemy.kill();
                GameGuiService.labels.score.setText("Score: "+ScoreService.addPoints(10));
            }
    }

}