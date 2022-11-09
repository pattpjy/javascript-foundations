var Skier = require('./Skier');

class Lift {
    constructor(num){
        this.inService = true
        this.limit = num
        this.skiers = []
        this.safetyBar = 'up'
    }
    admitSkier(skier,ticket){
        var person = new Skier(skier)
        person.hasLiftTicket = ticket

        if(this.skiers.length < this.limit){
            if(person.hasLiftTicket === false){
                return  `Sorry, ${skier}. You need a lift ticket!`
            } this.skiers.push(person)
            
        }return `Sorry, ${skier}. Please wait for the next lift!`
    }
    startLift(){
        var need = this.limit - (this.skiers.length)
        console.log(this.skiers.length, need, this.limit)
        if(need === 0) {
            this.safetyBar = 'down'
        } else if(need === 1){
            return `We still need ${need} more skier!`
        }  return `We still need ${need} more skiers!`

    } 
}

module.exports = Lift;