class Ogre{
    constructor(obj){
        this.name = obj.name;
        this.home = obj.abode|| 'Swamp';
        this.swings = 0
    }
    swingAt(human) {  
        if(this.swings < 2){
            this.swings += 1
            return
        }
        human.knockedOut = true
      
       
    }  
    encounter(human){
        human.encounterCounter += 1
        if(human.noticesOgre() === true ){ 
        this.swingAt(human)
        } 
    }
    apologize(human){
        human.knockedOut = false
    }
   
}


module.exports = Ogre