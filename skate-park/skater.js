class Skater{
    constructor(skateObj){
        this.name = skateObj.name
        this.skill = skateObj.skill
        this.tricks = skateObj.tricks
        this.money = skateObj.cash
        this.frustration = 0
    }
    practice(trick){
       
    if(this.tricks[trick] === false || this.frustration ===3){
        this.frustration +=1
        this.tricks[trick] = true
       return (`I just learned to ${trick}!!!`)
    } else{

    }
    }
}


module.exports = Skater