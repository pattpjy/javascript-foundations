class Human{
    constructor(name){
        this.name = name
        this.encounterCounter = 0
        this.knockedOut = false
    }

    noticesOgre(){
        if(this.encounterCounter === 0||this.encounterCounter === 2||this.encounterCounter === 5||this.encounterCounter === 1){
            return false
        }  return true
    }
    
}
module.exports = Human