var upgradesState = {

    create: function(){

        goldLabel = null

        goldLabel = game.add.text(deviceWidth/9,70,"Gold: "+GoldService.getStoredGold(),{font: "25px Silkscreen", fill:"#ffff00"})

        this.upgradesLabel = game.add.text(deviceWidth/9,20,"Upgrades",{font: "40px Silkscreen", fill:"#ff0000"})

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
                current: HeroService.getAttackDuration(),
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
                current: HeroService.getAttackDelay(),
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
                current: HeroService.getMovementSpeed(),
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
                current: HeroService.getMaxHealth(),
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
                    var newValue = HeroService.getAttackDelay()
                    newValue-=upgrade.step
                    HeroService.setAttackDelay(newValue)
                    upgrade.labels.headerRight.setText(HeroService.getAttackDelay()+upgrade.unit)
                break

                case 'attack-duration':
                    var newValue = HeroService.getAttackDuration()
                    newValue-=upgrade.step
                    HeroService.setAttackDuration(newValue)
                    upgrade.labels.headerRight.setText(HeroService.getAttackDuration()+upgrade.unit)
                break

                case 'movement-speed':
                    var newValue = HeroService.getMovementSpeed()
                    newValue+=upgrade.step
                    HeroService.setMovementSpeed(newValue)
                    upgrade.labels.headerRight.setText(HeroService.getMovementSpeed()+upgrade.unit)
                break

                case 'max-health':
                    var newValue = HeroService.getMaxHealth()
                    newValue+=upgrade.step
                    HeroService.setMaxHealth(newValue)
                    upgrade.labels.headerRight.setText(HeroService.getMaxHealth()+upgrade.unit)
                break

            }

            FileService.overwriteFile("stats.txt",JSON.stringify(HeroService.getCurrentStats()))

        }

        for(var i=0;i<this.upgrades.length;i++){

            var currentUpgrade = this.upgrades[i]

            currentUpgrade.labels.headerLeft = game.add.text(deviceWidth/9,50+((i+1)*80),currentUpgrade.caption,{font: "25px Silkscreen", fill:"#ffffff"});
            currentUpgrade.labels.headerRight = game.add.text(deviceWidth-(deviceWidth/5)-10,50+((i+1)*80),currentUpgrade.current+currentUpgrade.unit,{font: "25px Silkscreen", fill:"#ffffff"});

            currentUpgrade.labels.subHeaderStep = game.add.text(deviceWidth/6,80+5+((i+1)*80),"+ "+currentUpgrade.step+currentUpgrade.unit,{font: "20px Silkscreen", fill:"#ffffff"});
            currentUpgrade.labels.subHeaderGold = game.add.text(130+deviceWidth/6,80+5+((i+1)*80),currentUpgrade.cost+" Gold",{font: "20px Silkscreen", fill:"#ffff00"});

            currentUpgrade.button = game.add.button(10+deviceWidth-(deviceWidth/5)-10,80+5+((i+1)*80), 'skill_plus_button', buyUpgrade.bind(this, currentUpgrade), this, 0,0,1,0);
            currentUpgrade.button.height = 32
            currentUpgrade.button.width = 32
        }

        var backToMenuButton = game.add.button(deviceWidth/4, deviceHeight-100, 'gui_button', backToMenu, this, 0,0,1,0);
        backToMenuGameLabel = game.add.text(deviceWidth/4+10,deviceHeight-85,"BACK",{font: "30px Silkscreen", fill:"#ffffff"});

        function backToMenu(){

            game.state.start("menu");

        }

    }

}