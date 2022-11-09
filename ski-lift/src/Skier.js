class Skier {
    constructor(name){
        this.name = name
        this.hasLiftTicket = true
        this.skillLevel = 1
        this.nextSlope = 'green circle'
    }
    takeLesson(){
        this.skillLevel += 1
        if(this.skillLevel >=3){
            this.nextSlope = 'blue square'
        }
    }
    pickSlope(){
        if(this.skillLevel >= 5){
            this.nextSlope = 'black diamond'
        }
    }
}


module.exports = Skier;