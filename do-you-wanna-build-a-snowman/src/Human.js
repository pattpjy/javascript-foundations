var Snowman = require('./Snowman');

class Human {
    constructor(name){
        this.name = name
        this.wantsToBuildASnowman = true
        this.materials = {
                snowballs: 0,
                coal: 0,
                buttons: 0,
                carrots: 0
        }
    }
    gatherMaterials(mat,num){
        this.materials[mat]+=num
    }
    buildASnowman(){
        var newSnowman = new Snowman(this.materials)
        return newSnowman
    }
    placeMagicHat(swm){
        if(swm.canWearMagicHat() === true){
        return `Woah, this snowman is coming to life!`
        }
        return `I guess I didn\'t build it correctly.`
    }
    
}


module.exports = Human;