var upgradesState = {

    gold: 0,
    goldLabel: null,

    create: function(){

        this.gold = GoldService.getStoredGold()

        this.goldLabel = game.add.text(deviceWidth/4,190,"Gold: "+this.gold,{font: "20px Courier", fill:"#ffff00"})

        var gameEndLabel = game.add.text(deviceWidth/4,110,"Upgrades",{font: "40px Courier", fill:"#ff0000"});

        var backToMenuButton = game.add.button(deviceWidth/4, deviceHeight-100, 'gui_button', backToMenu, this, 0,0,1,0);
        backToMenuGameLabel = game.add.text(deviceWidth/4+10,deviceHeight-85,"back to menu",{font: "30px Courier", fill:"#ffffff"});

        function backToMenu(){

            game.state.start("menu");

        }

    }

}