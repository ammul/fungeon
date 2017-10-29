var GoldService = {

    storedGold: 0,
    newGoldSum: 0,

    addToNewGoldSum: function(amount){
        this.newGoldSum+=amount
    },
    getNewGoldSum: function(gold){
        return this.newGoldSum
    },

    setStoredGold: function(gold){
        console.log("GoldService.setStoredGold",gold)
        this.storedGold = gold
        FileService.overwriteFile("gold.txt",this.storedGold);
    },
    getStoredGold: function(){
        console.log("GoldService.getStoredGold",this.storedGold)
        return this.storedGold
    },

    addGold: function(gold){
        this.storedGold+=gold
        FileService.overwriteFile("gold.txt",this.storedGold);
        console.log("new stored gold",this.storedGold)
        return this.storedGold;
    },
    removeGold: function(amount){
        console.log("remove ",amount)
        if(amount<=this.storedGold){
            this.storedGold-=amount
            FileService.overwriteFile("gold.txt",this.storedGold);
            return true
        }

        return false

    },
    goldCollisionHandler: function(hero,gold){
        gold.kill()
        GoldService.addToNewGoldSum(1)
        GameGuiService.labels.gold.setText("Gold: "+GoldService.getNewGoldSum())
    }


}