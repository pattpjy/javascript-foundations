class Snowman {
    constructor(snowManObj) {
        this.carrots = snowManObj.carrots
        this.coal =snowManObj.coal
        this.buttons = snowManObj.buttons
        this.snowballs = snowManObj.snowballs
        this.magicHat = false
        this.isWearingHat = false
    }
    canWearMagicHat() {
        if(this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2){
            return false
        }
        this.magicHat = true
        return true
    }
}

module.exports = Snowman;