var upgradesState = {

    create: function(){

        goldLabel = null

        goldLabel = game.add.text(deviceWidth/8,60,"Gold: "+GoldService.getStoredGold(),{font: "20px Courier", fill:"#ffff00"})

        this.upgradesLabel = game.add.text(deviceWidth/9,20,"Upgrades",{font: "40px Courier", fill:"#ff0000"})

        this.upgrades = [

            {
                name: "attack-duration",
                caption: "Attack Duration",
                step: -0.01,
                unit: "s",
                cost: 10,
                labels: {
                    headerLeft: null,
                    headerRight: null,
                    subHeaderStep: null,
                    subHeaderGold: null
                },
                current: HeroService.attackDuration,
                button: null
            },
            {
                name: "attack-delay",
                caption: "Attack Delay",
                step: -0.1,
                unit: "s",
                cost: 5,
                labels: {
                    headerLeft: null,
                    headerRight: null,
                    subHeaderStep: null,
                    subHeaderGold: null
                },
                current: HeroService.attackDelay,
                button: null
            },
            {
                name: "movement-speed",
                caption: "Movement Speed",
                step: 0.25,
                unit: "",
                cost: 10,
                labels: {
                    headerLeft: null,
                    headerRight: null,
                    subHeaderStep: null,
                    subHeaderGold: null
                },
                current: HeroService.movementSpeed,
                button: null
            },
            {
                name: "max-health",
                caption: "Max Health",
                step: 1,
                unit: "♥",
                cost: 20,
                labels: {
                    headerLeft: null,
                    headerRight: null,
                    subHeaderStep: null,
                    subHeaderGold: null
                },
                current: HeroService.maxHealth,
                button: null
            },

        ]

        function buyUpgrade(upgrade){

            if(!GoldService.removeGold(upgrade.cost)){
                return
            }

            goldLabel.setText("Gold: "+GoldService.getStoredGold())

            switch(upgrade.name){

                case 'attack-delay':
                    HeroService.attackDelay-=upgrade.step
                    upgrade.labels.headerRight.setText(HeroService.attackDelay+upgrade.unit)
                break

                case 'attack-duration':
                    HeroService.attackDuration-=upgrade.step
                    upgrade.labels.headerRight.setText(HeroService.attackDuration+upgrade.unit)
                break

                case 'movement-speed':
                    HeroService.movementSpeed-=upgrade.step
                    upgrade.labels.headerRight.setText(HeroService.movementSpeed+upgrade.unit)
                break

                case 'max-health':
                    HeroService.maxHealth-=upgrade.step
                    upgrade.labels.headerRight.setText(HeroService.maxHealth+upgrade.unit)
                break

            }

        }

        for(var i=0;i<this.upgrades.length;i++){

            var currentUpgrade = this.upgrades[i]

            currentUpgrade.labels.headerLeft = game.add.text(deviceWidth/8,50+((i+1)*80),currentUpgrade.caption,{font: "25px Courier", fill:"#ffffff"});
            currentUpgrade.labels.headerRight = game.add.text(deviceWidth-(deviceWidth/5)-10,50+((i+1)*80),currentUpgrade.current+currentUpgrade.unit,{font: "25px Courier", fill:"#ffffff"});

            currentUpgrade.labels.subHeaderStep = game.add.text(deviceWidth/7,80+5+((i+1)*80),"+ "+currentUpgrade.step+currentUpgrade.unit,{font: "20px Courier", fill:"#ffffff"});
            currentUpgrade.labels.subHeaderGold = game.add.text(100+deviceWidth/7,80+5+((i+1)*80),currentUpgrade.cost+" Gold",{font: "20px Courier", fill:"#ffff00"});

            currentUpgrade.button = game.add.button(deviceWidth-(deviceWidth/5)-10,80+5+((i+1)*80), 'skill_plus_button', buyUpgrade.bind(this, currentUpgrade), this, 0,0,1,0);
            currentUpgrade.button.height = 48
            currentUpgrade.button.width = 48
        }

        var backToMenuButton = game.add.button(deviceWidth/4, deviceHeight-100, 'gui_button', backToMenu, this, 0,0,1,0);
        backToMenuGameLabel = game.add.text(deviceWidth/4+10,deviceHeight-85,"back to menu",{font: "30px Courier", fill:"#ffffff"});

        function backToMenu(){

            game.state.start("menu");

        }

    }

}